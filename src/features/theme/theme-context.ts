import { createContext } from "react";
import type { Theme, ThemeTransitionOrigin } from "@/features/theme/theme";

export interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme, origin?: ThemeTransitionOrigin) => void;
  toggleTheme: (origin?: ThemeTransitionOrigin) => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);
