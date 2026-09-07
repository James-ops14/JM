import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router";
import { ConvergenceBackground } from "@/components/layout/ConvergenceBackground";
import { ScrollNavigation } from "@/components/layout/ScrollNavigation";
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

    function handleScroll() {
      const currentScrollY = window.scrollY;
      setIsHeaderRetracted(
        currentScrollY > 120 && currentScrollY > previousScrollY,
      );
      previousScrollY = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="site-shell">
      <ConvergenceBackground />
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <div
        aria-hidden="true"
        className="header-reveal-zone"
        onPointerEnter={() => setIsHeaderRetracted(false)}
      />

      <header
        className={
          isHeaderRetracted ? "site-header is-retracted" : "site-header"
        }
        onPointerEnter={() => setIsHeaderRetracted(false)}
      >
        <NavLink
          className="site-name"
          to="/#home"
          aria-label="JM Technologies home"
        >
          JM Technologies
        </NavLink>
        <div className="site-header-actions">
          <ScrollNavigation />
          <ThemeToggle />
        </div>
      </header>

      <main id="main-content" className="site-main" tabIndex={-1}>
        <Outlet />
      </main>
    </div>
  );
}
