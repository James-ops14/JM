import { Link } from "react-router";

export function NotFoundPage() {
  return (
    <section className="page-placeholder" aria-labelledby="not-found-title">
      <p className="placeholder-label">404</p>
      <h1 id="not-found-title">Page not found</h1>
      <p>The requested page does not exist.</p>
      <Link className="text-link" to="/">
        Return to the homepage
      </Link>
    </section>
  );
}
