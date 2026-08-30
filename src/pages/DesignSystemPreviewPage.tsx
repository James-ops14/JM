import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, InteractiveCard } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const swatches = [
  { name: "Background", token: "--color-background" },
  { name: "Surface", token: "--color-surface" },
  { name: "Soft surface", token: "--color-surface-soft" },
  { name: "Primary", token: "--color-primary" },
  { name: "Cyan accent", token: "--color-accent-cyan" },
  { name: "Coral accent", token: "--color-accent-coral" },
] as const;

const typeExamples = [
  {
    name: "Display",
    className: "type-display",
    text: "Digital possibilities, clearly shaped.",
  },
  { name: "Heading 1", className: "type-h1", text: "Intentional hierarchy" },
  { name: "Heading 2", className: "type-h2", text: "A deliberate type scale" },
  {
    name: "Body",
    className: "type-body",
    text: "Readable interface text is built around contrast, measure, and calm rhythm.",
  },
  {
    name: "Technical",
    className: "technical-label",
    text: "SYSTEM / DESIGN / 01",
  },
] as const;

export function DesignSystemPreviewPage() {
  return (
    <div className="design-system-preview">
      <Container>
        <Section spacing="generous">
          <p className="technical-label">Internal preview / v0.1</p>
          <h1 className="type-display">JM visual system</h1>
          <p className="preview-intro">
            A development-only reference for reviewing foundation tokens and
            reusable primitives. It is not a public-facing JM page.
          </p>
        </Section>

        <Section>
          <SectionHeading
            eyebrow="01 / Colour"
            title="Semantic, theme-aware colour"
            description="The palette is applied through semantic tokens instead of component-specific light and dark values."
          />
          <div className="swatch-grid">
            {swatches.map((swatch) => (
              <div className="token-swatch" key={swatch.token}>
                <span
                  className="token-swatch-colour"
                  style={{ backgroundColor: `var(${swatch.token})` }}
                />
                <span>{swatch.name}</span>
                <code>{swatch.token}</code>
              </div>
            ))}
          </div>
        </Section>

        <Section>
          <SectionHeading
            eyebrow="02 / Typography"
            title="Editorial clarity with technical detail"
          />
          <div className="type-specimen">
            {typeExamples.map((example) => (
              <div className="type-example" key={example.name}>
                <span className="technical-label">{example.name}</span>
                <p className={example.className}>{example.text}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section>
          <SectionHeading
            eyebrow="03 / Components"
            title="Direct, purposeful interaction"
          />
          <div className="preview-stack" id="preview-components">
            <div className="button-row">
              <Button>Primary action</Button>
              <Button variant="secondary">Secondary action</Button>
              <Button variant="ghost">Ghost action</Button>
              <Button disabled>Unavailable</Button>
            </div>
            <div className="badge-row">
              <Badge>Default label</Badge>
              <Badge tone="violet">Violet signal</Badge>
              <Badge tone="cyan">Cyan signal</Badge>
              <Badge tone="coral">Coral signal</Badge>
            </div>
            <div className="card-grid">
              <Card>
                <p className="technical-label">Surface / default</p>
                <h3>Base surface</h3>
                <p>
                  For grouped content that needs clarity without elevated
                  emphasis.
                </p>
              </Card>
              <Card variant="elevated">
                <p className="technical-label">Surface / elevated</p>
                <h3>Layered surface</h3>
                <p>For a restrained sense of priority and separation.</p>
              </Card>
              <InteractiveCard href="#preview-components" variant="elevated">
                <p className="technical-label">Surface / interactive</p>
                <h3>Focusable surface</h3>
                <p>
                  Hover and keyboard focus communicate that this is a real link.
                </p>
              </InteractiveCard>
            </div>
          </div>
        </Section>

        <Section>
          <SectionHeading
            eyebrow="04 / Rhythm"
            title="Controlled space, not arbitrary gaps"
          />
          <div className="spacing-scale">
            {[
              ["Space 1", "var(--space-1)"],
              ["Space 3", "var(--space-3)"],
              ["Space 5", "var(--space-5)"],
              ["Space 7", "var(--space-7)"],
            ].map(([name, value]) => (
              <div className="spacing-item" key={name}>
                <span>{name}</span>
                <span className="spacing-bar" style={{ width: value }} />
                <code>{value}</code>
              </div>
            ))}
          </div>
        </Section>
      </Container>
    </div>
  );
}
