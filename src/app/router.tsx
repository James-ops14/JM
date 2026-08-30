import { createBrowserRouter, type RouteObject } from "react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AboutPage } from "@/pages/about/AboutPage";
import { ContactPage } from "@/pages/contact/ContactPage";
import { DesignSystemPreviewPage } from "@/pages/DesignSystemPreviewPage";
import { HomePage } from "@/pages/home/HomePage";
import { PrivacyPage } from "@/pages/legal/PrivacyPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { PortfolioPage } from "@/pages/portfolio/PortfolioPage";
import { ServicesPage } from "@/pages/services/ServicesPage";
import { TeamPage } from "@/pages/team/TeamPage";

export const appRoutes: RouteObject[] = [
  {
    path: "/",
    Component: SiteLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "services", Component: ServicesPage },
      { path: "portfolio", Component: PortfolioPage },
      { path: "team", Component: TeamPage },
      { path: "contact", Component: ContactPage },
      { path: "privacy", Component: PrivacyPage },
      { path: "__design-system", Component: DesignSystemPreviewPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
];

export const browserRouter = createBrowserRouter(appRoutes);
export type AppRouter = typeof browserRouter;
