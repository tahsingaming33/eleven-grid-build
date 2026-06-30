import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { GridFrame } from "./Grid";
import { SocialHandles } from "./SocialHandles";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="relative pt-16">
        <GridFrame>
          {children}
          <SocialHandles />
        </GridFrame>
      </main>
      <Footer />
    </div>
  );
}