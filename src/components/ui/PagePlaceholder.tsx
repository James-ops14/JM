interface PagePlaceholderProps {
  title: string;
  description: string;
}

export function PagePlaceholder({ title, description }: PagePlaceholderProps) {
  return (
    <section className="page-placeholder" aria-labelledby="page-title">
      <p className="placeholder-label">Foundation placeholder</p>
      <h1 id="page-title">{title}</h1>
      <p>{description}</p>
    </section>
  );
}
