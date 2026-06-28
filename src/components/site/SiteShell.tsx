import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { GridFrame } from "./Grid";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="relative">
        <GridFrame>{children}</GridFrame>
      </main>
      <Footer />
    </div>
  );
}