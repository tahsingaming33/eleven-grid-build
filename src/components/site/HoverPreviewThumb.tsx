import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    Vimeo?: { Player: new (el: HTMLIFrameElement | HTMLElement) => VimeoPlayerLike };
    __motiondudeActivePlayer?: VimeoPlayerLike | null;
  }
}

type VimeoPlayerLike = {
  ready: () => Promise<void>;
  play: () => Promise<void>;
  pause: () => Promise<void>;
  setMuted: (m: boolean) => Promise<void>;
  setCurrentTime: (t: number) => Promise<void>;
  destroy?: () => Promise<void>;
};

const SDK_SRC = "https://player.vimeo.com/api/player.js";
let sdkPromise: Promise<void> | null = null;
function loadVimeoSDK(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.Vimeo?.Player) return Promise.resolve();
  if (sdkPromise) return sdkPromise;
  sdkPromise = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SDK_SRC}"]`);
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("Vimeo SDK failed")));
      return;
    }
    const s = document.createElement("script");
    s.src = SDK_SRC;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("Vimeo SDK failed"));
    document.head.appendChild(s);
  });
  return sdkPromise;
}

function isTouchDevice() {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(hover: none)").matches ?? false;
}

type Props = {
  vimeoId: string;
  thumbnail?: string;
  alt: string;
};

export function HoverPreviewThumb({ vimeoId, thumbnail, alt }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const playerRef = useRef<VimeoPlayerLike | null>(null);
  const [mounted, setMounted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const hoveringRef = useRef(false);

  useEffect(() => {
    return () => {
      try {
        playerRef.current?.pause();
        playerRef.current?.destroy?.();
      } catch {
        /* noop */
      }
      playerRef.current = null;
    };
  }, []);

  const handleEnter = async () => {
    if (isTouchDevice()) return;
    hoveringRef.current = true;
    setMounted(true);
    try {
      await loadVimeoSDK();
      if (!hoveringRef.current) return;
      if (!iframeRef.current || !window.Vimeo) return;
      if (!playerRef.current) {
        playerRef.current = new window.Vimeo.Player(iframeRef.current);
      }
      const player = playerRef.current;
      await player.ready();
      if (!hoveringRef.current) return;
      // pause any other
      if (window.__motiondudeActivePlayer && window.__motiondudeActivePlayer !== player) {
        try { await window.__motiondudeActivePlayer.pause(); } catch { /* noop */ }
      }
      window.__motiondudeActivePlayer = player;
      await player.setMuted(true);
      await player.play();
      if (hoveringRef.current) setPlaying(true);
    } catch {
      /* noop */
    }
  };

  const handleLeave = async () => {
    hoveringRef.current = false;
    setPlaying(false);
    const player = playerRef.current;
    if (!player) return;
    try {
      await player.pause();
      await player.setCurrentTime(0);
      if (window.__motiondudeActivePlayer === player) {
        window.__motiondudeActivePlayer = null;
      }
    } catch {
      /* noop */
    }
  };

  return (
    <div
      ref={wrapRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="absolute inset-0"
    >
      {thumbnail && (
        <img
          src={thumbnail}
          alt={alt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      {mounted && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 transition-opacity duration-[250ms]"
          style={{ opacity: playing ? 1 : 0 }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <iframe
              ref={iframeRef}
              src={`https://player.vimeo.com/video/${vimeoId}?background=1&muted=1&loop=1&autopause=0&dnt=1`}
              allow="autoplay; fullscreen; picture-in-picture"
              title={alt}
              frameBorder={0}
              className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      )}
    </div>
  );
}