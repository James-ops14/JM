import { flushSync } from "react-dom";
import {
  type PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  applyTheme,
  getPreferredTheme,
  persistTheme,
  prefersReducedMotion,
  type Theme,
  type ThemeTransitionOrigin,
} from "@/features/theme/theme";
import {
  ThemeContext,
  type ThemeContextValue,
} from "@/features/theme/theme-context";

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setThemeState] = useState<Theme>(getPreferredTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const setTheme = useCallback(
    (nextTheme: Theme, origin?: ThemeTransitionOrigin) => {
      if (nextTheme === theme) {
        return;
      }

      const updateTheme = () => {
        persistTheme(nextTheme);
        applyTheme(nextTheme, origin);
        flushSync(() => {
          setThemeState(nextTheme);
        });
      };

      if (
        !prefersReducedMotion() &&
        typeof document.startViewTransition === "function"
      ) {
        document.startViewTransition(updateTheme);
        return;
      }

      updateTheme();
    },
    [theme],
  );

  const toggleTheme = useCallback(
    (origin?: ThemeTransitionOrigin) => {
      setTheme(theme === "light" ? "dark" : "light", origin);
    },
    [setTheme, theme],
  );

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, setTheme, toggleTheme }),
    [setTheme, theme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
