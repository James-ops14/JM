import { useEffect, useMemo, useRef, useState } from "react";
import { navigationItems } from "@/content/site";
import { useActiveSection } from "@/hooks/useActiveSection";

function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (!section) return;
  window.history.pushState(null, "", "/#" + sectionId);
  section.focus({ preventScroll: true });
  section.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth",
    block: "start",
  });
}

export function ScrollNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const sectionIds = useMemo(() => navigationItems.map((item) => item.id), []);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    if (!isOpen) return;
    menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setIsOpen(false);
      triggerRef.current?.focus();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="navigation-control">
      <button
        aria-controls="primary-navigation"
        aria-expanded={isOpen}
        className="menu-toggle"
        onClick={() => setIsOpen((open) => !open)}
        ref={triggerRef}
        type="button"
      >
        <span aria-hidden="true" className="menu-toggle-lines" />
        <span>{isOpen ? "Close" : "Menu"}</span>
      </button>
      <nav
        aria-label="Primary navigation"
        className={isOpen ? "primary-navigation is-open" : "primary-navigation"}
        id="primary-navigation"
        ref={menuRef}
      >
        <ul className="navigation-list">
          {navigationItems.map((item) => (
            <li key={item.id}>
              <a
                aria-current={
                  activeSection === item.id ? "location" : undefined
                }
                className={
                  activeSection === item.id
                    ? "navigation-link active"
                    : "navigation-link"
                }
                href={"/#" + item.id}
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection(item.id);
                  setIsOpen(false);
                  triggerRef.current?.focus();
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
