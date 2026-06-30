import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { GridFrame } from "./Grid";
import { SocialHandles } from "./SocialHandles";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ backgroundColor: "var(--background)" }}>
      <Nav />
      <main className="relative bg-background pt-16" style={{ backgroundColor: "var(--background)" }}>
        <GridFrame>
          {children}
          <SocialHandles />
        </GridFrame>
      </main>
      <Footer />
    </div>
  );
}