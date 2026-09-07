import { Link } from "react-router";
import { company, contact, navigationItems } from "@/content/site";
import { Monogram } from "@/components/ui/Monogram";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            <Monogram label="JM temporary monogram" />
            <strong>JM</strong>
          </div>
          <p>{company.description}</p>
        </div>
        <nav aria-label="Footer navigation">
          <p className="technical-label">Explore</p>
          <ul className="footer-link-list">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <a href={`/#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="technical-label">Contact</p>
          <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
          <a
            href={contact.whatsappHref}
            rel="noopener noreferrer"
            target="_blank"
          >
            WhatsApp
          </a>
          <Link to="/privacy">Privacy notice</Link>
        </div>
      </div>
      <div className="container footer-meta">
        <small>
          © {new Date().getFullYear()} JM. Temporary identity pending final
          brand clearance.
        </small>
      </div>
    </footer>
  );
}
