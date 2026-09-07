import { useMemo } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";

const navigationItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "team", label: "Team" },
  { id: "contact", label: "Contact" },
] as const;

function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  window.history.pushState(null, "", `/#${sectionId}`);
  section.focus({ preventScroll: true });
  section.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth",
    block: "start",
  });
}

export function ScrollNavigation() {
  const sectionIds = useMemo(() => navigationItems.map((item) => item.id), []);
  const activeSection = useActiveSection(sectionIds);

  return (
    <nav aria-label="Primary navigation">
      <ul className="navigation-list">
        {navigationItems.map((item) => (
          <li key={item.id}>
            <a
              aria-current={activeSection === item.id ? "location" : undefined}
              className={
                activeSection === item.id
                  ? "navigation-link active"
                  : "navigation-link"
              }
              href={`/#${item.id}`}
              onClick={(event) => {
                event.preventDefault();
                scrollToSection(item.id);
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
