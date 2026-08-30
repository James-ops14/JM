import { RouterProvider } from "react-router";
import type { AppRouter } from "@/app/router";
import { ThemeProvider } from "@/features/theme/ThemeProvider";

interface AppProvidersProps {
  router: AppRouter;
}

export function AppProviders({ router }: AppProvidersProps) {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
