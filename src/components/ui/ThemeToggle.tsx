import { useRef } from "react";
import { useTheme } from "@/features/theme/useTheme";

function SunIcon() {
  return (
    <svg
      aria-hidden="true"
      className="theme-toggle-icon theme-toggle-sun"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2.5v2M12 19.5v2M21.5 12h-2M4.5 12h-2M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4M18.7 18.7l-1.4-1.4M6.7 6.7 5.3 5.3" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      aria-hidden="true"
      className="theme-toggle-icon theme-toggle-moon"
      viewBox="0 0 24 24"
    >
      <path d="M20.5 15.2A8.5 8.5 0 0 1 8.8 3.5 8.5 8.5 0 1 0 20.5 15.2Z" />
    </svg>
  );
}

export function ThemeToggle() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { theme, toggleTheme } = useTheme();
  const nextTheme = theme === "light" ? "dark" : "light";

  function handleToggle() {
    const bounds = buttonRef.current?.getBoundingClientRect();
    const origin = bounds
      ? { x: bounds.left + bounds.width / 2, y: bounds.top + bounds.height / 2 }
      : undefined;

    toggleTheme(origin);
  }

  return (
    <button
      ref={buttonRef}
      className="theme-toggle"
      type="button"
      aria-label={`Switch to ${nextTheme} mode`}
      aria-pressed={theme === "dark"}
      onClick={handleToggle}
    >
      <span className="theme-toggle-icons">
        <SunIcon />
        <MoonIcon />
      </span>
      <span className="theme-toggle-label">
        {theme === "light" ? "Light" : "Dark"}
      </span>
    </button>
  );
}
