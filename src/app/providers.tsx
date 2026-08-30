import { RouterProvider } from "react-router";
import type { AppRouter } from "@/app/router";
<<<<<<< HEAD
=======
import { ThemeProvider } from "@/features/theme/ThemeProvider";
>>>>>>> james

interface AppProvidersProps {
  router: AppRouter;
}

export function AppProviders({ router }: AppProvidersProps) {
<<<<<<< HEAD
  return <RouterProvider router={router} />;
=======
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
>>>>>>> james
}
