import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { ThemeProvider } from "@/features/theme/ThemeProvider";
import { THEME_STORAGE_KEY } from "@/features/theme/theme";
import { useTheme } from "@/features/theme/useTheme";

const originalLocalStorage = Object.getOwnPropertyDescriptor(
  window,
  "localStorage",
);
const originalMatchMedia = window.matchMedia;
const originalStartViewTransition = Object.getOwnPropertyDescriptor(
  document,
  "startViewTransition",
);

function createMemoryStorage(): Storage {
  const values = new Map<string, string>();

  return {
    get length() {
      return values.size;
    },
    clear() {
      values.clear();
    },
    getItem(key) {
      return values.get(key) ?? null;
    },
    key(index) {
      return [...values.keys()][index] ?? null;
    },
    removeItem(key) {
      values.delete(key);
    },
    setItem(key, value) {
      values.set(String(key), String(value));
    },
  };
}

function setMediaPreferences({ dark = false, reducedMotion = false } = {}) {
  Object.defineProperty(window, "matchMedia", {
    configurable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: query.includes("prefers-color-scheme") ? dark : reducedMotion,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
}

function renderThemeToggle() {
  return render(
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>,
  );
}

function ThemeTestControl() {
  const { toggleTheme } = useTheme();

  return <button onClick={() => toggleTheme()}>Toggle test theme</button>;
}

describe("theme system", () => {
  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      configurable: true,
      value: createMemoryStorage(),
    });
    document.documentElement.removeAttribute("data-theme");
    document.documentElement.style.colorScheme = "";
    setMediaPreferences();
  });

  afterEach(() => {
    if (originalLocalStorage) {
      Object.defineProperty(window, "localStorage", originalLocalStorage);
    } else {
      delete (window as unknown as Record<string, unknown>).localStorage;
    }

    Object.defineProperty(window, "matchMedia", {
      configurable: true,
      value: originalMatchMedia,
    });

    if (originalStartViewTransition) {
      Object.defineProperty(
        document,
        "startViewTransition",
        originalStartViewTransition,
      );
    } else {
      delete (document as unknown as Record<string, unknown>)
        .startViewTransition;
    }
  });

  it("uses the system preference when no stored selection exists", () => {
    setMediaPreferences({ dark: true });

    renderThemeToggle();

    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(
      screen.getByRole("button", { name: "Switch to light mode" }),
    ).toBeInTheDocument();
  });

  it("uses a valid stored selection before the system preference", () => {
    window.localStorage.setItem(THEME_STORAGE_KEY, "light");
    setMediaPreferences({ dark: true });

    renderThemeToggle();

    expect(document.documentElement.dataset.theme).toBe("light");
  });

  it("ignores invalid stored values safely", () => {
    window.localStorage.setItem(THEME_STORAGE_KEY, "night-shift");
    setMediaPreferences({ dark: true });

    renderThemeToggle();

    expect(document.documentElement.dataset.theme).toBe("dark");
  });

  it("changes and persists the manual selection", async () => {
    const user = userEvent.setup();
    renderThemeToggle();

    await user.click(
      screen.getByRole("button", { name: "Switch to dark mode" }),
    );

    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(window.localStorage.getItem(THEME_STORAGE_KEY)).toBe("dark");
    expect(
      screen.getByRole("button", { name: "Switch to light mode" }),
    ).toBeInTheDocument();
  });

  it("is keyboard-operable", async () => {
    const user = userEvent.setup();
    renderThemeToggle();
    const toggle = screen.getByRole("button", { name: "Switch to dark mode" });

    toggle.focus();
    await user.keyboard("{Enter}");

    expect(document.documentElement.dataset.theme).toBe("dark");
  });

  it("uses the non-animated fallback when reduced motion is preferred", async () => {
    const user = userEvent.setup();
    const startViewTransition = vi.fn();
    setMediaPreferences({ reducedMotion: true });
    Object.defineProperty(document, "startViewTransition", {
      configurable: true,
      value: startViewTransition,
    });

    render(
      <ThemeProvider>
        <ThemeTestControl />
      </ThemeProvider>,
    );

    await user.click(screen.getByRole("button", { name: "Toggle test theme" }));

    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(startViewTransition).not.toHaveBeenCalled();
  });

  it("keeps disabled button controls unavailable", () => {
    render(<Button disabled>Unavailable</Button>);

    expect(screen.getByRole("button", { name: "Unavailable" })).toBeDisabled();
  });
});
