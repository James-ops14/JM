import { NavLink, Outlet } from "react-router";

const navigationItems = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="site-header">
        <NavLink className="site-name" to="/" aria-label="JM Technologies home">
          JM Technologies
        </NavLink>
        <nav aria-label="Primary navigation">
          <ul className="navigation-list">
            {navigationItems.map(({ to, label, ...options }) => (
              <li key={to}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "navigation-link active" : "navigation-link"
                  }
                  to={to}
                  {...options}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="main-content" className="site-main" tabIndex={-1}>
        <Outlet />
      </main>
    </div>
  );
}
