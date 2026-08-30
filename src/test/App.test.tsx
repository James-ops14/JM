import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter } from "react-router";
import { describe, expect, it } from "vitest";
import { App } from "@/app/App";
import { appRoutes } from "@/app/router";

function renderApp(initialPath = "/") {
  const router = createMemoryRouter(appRoutes, {
    initialEntries: [initialPath],
  });

  return {
    user: userEvent.setup(),
    ...render(<App router={router} />),
  };
}

describe("JM Technologies application", () => {
  it("renders the application and homepage heading", () => {
    renderApp();

    expect(
      screen.getByRole("heading", { level: 1, name: "JM Technologies" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("navigation", { name: "Primary navigation" }),
    ).toBeInTheDocument();
  });

  it("navigates to a secondary route", async () => {
    const { user } = renderApp();

    await user.click(screen.getByRole("link", { name: "About" }));

    expect(
      screen.getByRole("heading", { level: 1, name: "About JM" }),
    ).toBeInTheDocument();
  });

  it("renders the not-found page for an unknown route", () => {
    renderApp("/not-a-real-page");

    expect(
      screen.getByRole("heading", { name: "Page not found" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Return to the homepage" }),
    ).toHaveAttribute("href", "/");
  });

  it("renders the internal design-system preview route", () => {
    renderApp("/__design-system");

    expect(
      screen.getByRole("heading", { level: 1, name: "JM visual system" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Internal preview / v0.1")).toBeInTheDocument();
  });
});
