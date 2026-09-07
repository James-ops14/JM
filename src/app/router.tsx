import { createBrowserRouter, Navigate, type RouteObject } from "react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { DesignSystemPreviewPage } from "@/pages/DesignSystemPreviewPage";
import { HomePage } from "@/pages/home/HomePage";
import { PrivacyPage } from "@/pages/legal/PrivacyPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export const appRoutes: RouteObject[] = [
  {
    path: "/",
    Component: SiteLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", element: <Navigate replace to="/#about" /> },
      { path: "services", element: <Navigate replace to="/#services" /> },
      { path: "ai", element: <Navigate replace to="/#ai" /> },
      { path: "portfolio", element: <Navigate replace to="/#portfolio" /> },
      { path: "process", element: <Navigate replace to="/#process" /> },
      { path: "team", element: <Navigate replace to="/#team" /> },
      { path: "contact", element: <Navigate replace to="/#contact" /> },
      { path: "privacy", Component: PrivacyPage },
      { path: "__design-system", Component: DesignSystemPreviewPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
];

export const browserRouter = createBrowserRouter(appRoutes);
export type AppRouter = typeof browserRouter;
