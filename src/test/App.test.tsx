import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter } from "react-router";
import { afterEach, describe, expect, it, vi } from "vitest";
import { App } from "@/app/App";
import { appRoutes } from "@/app/router";
import { contact, processSteps, services } from "@/content/site";

function renderApp(initialPath = "/") {
  const router = createMemoryRouter(appRoutes, {
    initialEntries: [initialPath],
  });
  return { user: userEvent.setup(), ...render(<App router={router} />) };
}

afterEach(() => {
  vi.restoreAllMocks();
});

describe("JM Technologies application", () => {
  it("renders the approved hero and all homepage sections", () => {
    renderApp();
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /we turn ambitious ideas/i,
      }),
    ).toBeInTheDocument();
    [
      "About JM",
      "From the first idea",
      "AI should make technology",
      "Ideas we are developing",
      "A clear path",
      "The people building",
      "Let’s talk",
    ].forEach((heading) => {
      expect(screen.getByText(heading, { exact: false })).toBeInTheDocument();
    });
  });

  it("renders approved services, concepts, process, and team information", () => {
    renderApp();
    services.forEach((service) =>
      expect(
        screen.getByRole("heading", { name: service.title }),
      ).toBeInTheDocument(),
    );
    processSteps.forEach((step) =>
      expect(
        screen.getByRole("heading", { name: step.title }),
      ).toBeInTheDocument(),
    );
    expect(screen.getByText("Vital Watch")).toBeInTheDocument();
    expect(screen.getByText("Rental Ecosystem")).toBeInTheDocument();
    expect(screen.getAllByText("Concept in development")).toHaveLength(2);
    expect(
      screen.getByAltText("James, Co-founder and Product Lead at JM"),
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(
        "Morgan, Co-founder, Designer and Frontend Engineer at JM",
      ),
    ).toBeInTheDocument();
    expect(screen.getByText("Full-stack Engineer")).toBeInTheDocument();
    expect(
      screen.getByText("Designer · Frontend Engineer"),
    ).toBeInTheDocument();
  });

  it("provides working phone and WhatsApp actions without a placeholder email", () => {
    renderApp();
    expect(screen.getAllByRole("link", { name: "Call JM" })[0]).toHaveAttribute(
      "href",
      contact.phoneHref,
    );
    const whatsapp = screen.getAllByRole("link", {
      name: "Chat on WhatsApp",
    })[0];
    expect(whatsapp).toHaveAttribute("href", contact.whatsappHref);
    expect(whatsapp).toHaveAttribute("target", "_blank");
    expect(
      screen.queryByRole("link", { name: /hello@jm/i }),
    ).not.toBeInTheDocument();
  });

  it("copies the phone number with an accessible confirmation", async () => {
    Object.defineProperty(document, "execCommand", {
      configurable: true,
      value: vi.fn(() => true),
    });
    const { user } = renderApp();
    await user.click(screen.getByRole("button", { name: "Copy phone number" }));
    expect(screen.getByText("Phone number copied.")).toBeInTheDocument();
  });

  it("opens and closes the mobile menu with Escape", async () => {
    const { user } = renderApp();
    const menu = screen.getByRole("button", { name: "Menu" });
    await user.click(menu);
    expect(menu).toHaveAttribute("aria-expanded", "true");
    await user.keyboard("{Escape}");
    expect(screen.getByRole("button", { name: "Menu" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });

  it("closes the mobile menu after choosing a section", async () => {
    const { user } = renderApp();
    await user.click(screen.getByRole("button", { name: "Menu" }));
    await user.click(screen.getAllByRole("link", { name: "Services" })[0]);
    expect(screen.getByRole("button", { name: "Menu" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
    expect(window.location.hash).toBe("#services");
  });

  it("renders the privacy notice and redirects legacy narrative routes", () => {
    renderApp("/privacy");
    expect(
      screen.getByRole("heading", { name: "Privacy at JM" }),
    ).toBeInTheDocument();
    renderApp("/ai");
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /we turn ambitious ideas/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders the not-found page for an unknown route", () => {
    renderApp("/not-a-real-page");
    expect(
      screen.getByRole("heading", { name: "Page not found" }),
    ).toBeInTheDocument();
  });
});
