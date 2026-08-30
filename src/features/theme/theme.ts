export const THEME_STORAGE_KEY = "jm-theme";

export const themes = ["light", "dark"] as const;
export type Theme = (typeof themes)[number];

export interface ThemeTransitionOrigin {
  x: number;
  y: number;
}

interface ThemeMeta {
  color: string;
}

const themeMeta: Record<Theme, ThemeMeta> = {
  light: { color: "#F7F7F4" },
  dark: { color: "#07080D" },
};

export function isTheme(value: unknown): value is Theme {
  return value === "light" || value === "dark";
}

function isBrowser() {
  return typeof window !== "undefined" && typeof document !== "undefined";
}

export function getStoredTheme(): Theme | null {
  if (!isBrowser()) {
    return null;
  }

  try {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    return isTheme(storedTheme) ? storedTheme : null;
  } catch {
    return null;
  }
}

export function getSystemTheme(): Theme {
  if (!isBrowser() || typeof window.matchMedia !== "function") {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function getPreferredTheme(): Theme {
  return getStoredTheme() ?? getSystemTheme();
}

export function persistTheme(theme: Theme) {
  if (!isBrowser()) {
    return;
  }

  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // The selected theme still applies for the current session when storage is unavailable.
  }
}

export function applyTheme(theme: Theme, origin?: ThemeTransitionOrigin) {
  if (!isBrowser()) {
    return;
  }

  const root = document.documentElement;
  root.dataset.theme = theme;
  root.style.colorScheme = theme;

  if (origin) {
    root.style.setProperty("--theme-transition-x", `${origin.x}px`);
    root.style.setProperty("--theme-transition-y", `${origin.y}px`);
  }

  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", themeMeta[theme].color);
}

export function prefersReducedMotion() {
  return (
    isBrowser() &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}
