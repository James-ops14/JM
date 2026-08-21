import { AppProviders } from "@/app/providers";
import { browserRouter, type AppRouter } from "@/app/router";

interface AppProps {
  router?: AppRouter;
}

export function App({ router = browserRouter }: AppProps) {
  return <AppProviders router={router} />;
}
