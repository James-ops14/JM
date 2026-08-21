import { RouterProvider } from "react-router";
import type { AppRouter } from "@/app/router";

interface AppProvidersProps {
  router: AppRouter;
}

export function AppProviders({ router }: AppProvidersProps) {
  return <RouterProvider router={router} />;
}
