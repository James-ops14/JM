import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router";
import { ConvergenceBackground } from "@/components/layout/ConvergenceBackground";
import { ScrollNavigation } from "@/components/layout/ScrollNavigation";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Monogram } from "@/components/ui/Monogram";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function SiteLayout() {
  const [isHeaderRetracted, setIsHeaderRetracted] = useState(false);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const timeout = window.setTimeout(
      () => document.getElementById(hash)?.scrollIntoView(),
      0,
    );
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    let previousScrollY = window.scrollY;
    let frame = 0;
    function handleScroll() {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        setIsHeaderRetracted(
          currentScrollY > 160 && currentScrollY > previousScrollY,
        );
        previousScrollY = currentScrollY;
        frame = 0;
      });
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="site-shell">
      <ConvergenceBackground />
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <header
        className={
          isHeaderRetracted ? "site-header is-retracted" : "site-header"
        }
      >
        <Link aria-label="JM home" className="site-name" to="/#home">
          <Monogram label="JM temporary monogram" />
          <span>JM</span>
        </Link>
        <div className="site-header-actions">
          <a className="header-project-link" href="/#contact">
            Start a project
          </a>
          <ScrollNavigation />
          <ThemeToggle />
        </div>
      </header>
      <main id="main-content" className="site-main" tabIndex={-1}>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
