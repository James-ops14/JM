import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import jamesPortrait from "@/assets/images/james.png";
import morganPortrait from "@/assets/images/morgan.png";

const services = [
  "Web experiences",
  "Custom software",
  "Business automation",
  "Systems integration",
];
const process = ["Discover", "Design", "Develop", "Evolve"];

export function HomeSections() {
  return (
    <>
      <Section className="home-hero" id="home" spacing="generous" tabIndex={-1}>
        <Container>
          <p className="technical-label">
            JM / Digital experiences in formation
          </p>
          <h1 className="hero-title">
            Where ideas become intelligent digital experiences.
          </h1>
          <p className="hero-copy">
            JM is building a considered technology practice for organisations
            exploring clearer, more capable digital systems.
          </p>
          <div className="hero-actions">
            <ButtonLink to="/#contact">Start a conversation</ButtonLink>
            <a className="text-link" href="/#services">
              Explore capabilities <span aria-hidden="true">↘</span>
            </a>
          </div>
        </Container>
      </Section>

      <Section className="story-section story-about" id="about" tabIndex={-1}>
        <Container narrow>
          <SectionHeading
            eyebrow="01 / About JM"
            title="A thoughtful bridge between human ambition and intelligent systems."
          />
          <p className="provisional-copy">
            Provisional company narrative — approved company story and
            positioning will be added here.
          </p>
        </Container>
      </Section>

      <Section className="story-section" id="services" tabIndex={-1}>
        <Container>
          <SectionHeading
            eyebrow="02 / Capabilities"
            title="Technology services shaped around real operational needs."
            description="Initial capability groups; detailed service content remains in development."
          />
          <div className="capability-grid">
            {services.map((service, index) => (
              <Card key={service} variant={index % 2 ? "default" : "elevated"}>
                <p className="technical-label">Capability / 0{index + 1}</p>
                <h3>{service}</h3>
                <p>
                  Provisional scope to be defined with approved client and
                  delivery requirements.
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="story-section ai-section" id="ai" tabIndex={-1}>
        <Container>
          <div className="asymmetric-grid">
            <SectionHeading
              eyebrow="03 / AI + Automation"
              title="Intelligence should make work more human, not less."
            />
            <div>
              <p className="provisional-copy">
                This future capability area will explore responsible automation,
                intelligent workflows, and AI-supported experiences. No AI
                product is implemented here.
              </p>
              <div className="badge-row">
                <Badge tone="violet">Human direction</Badge>
                <Badge tone="cyan">System clarity</Badge>
                <Badge>Secure by design</Badge>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section
        className="story-section portfolio-section"
        id="portfolio"
        tabIndex={-1}
      >
        <Container>
          <SectionHeading
            eyebrow="04 / Selected work"
            title="Case studies will make the process visible."
            description="Selected projects are awaiting approved publication."
          />
          <div className="project-grid">
            {[
              "Project field / 01",
              "Project field / 02",
              "Project field / 03",
            ].map((label) => (
              <article className="project-placeholder" key={label}>
                <p className="technical-label">{label}</p>
                <p>Reserved for an approved case study.</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="story-section" id="process" tabIndex={-1}>
        <Container>
          <SectionHeading
            eyebrow="05 / Working process"
            title="Direction becomes momentum through deliberate steps."
          />
          <ol className="process-list">
            {process.map((step, index) => (
              <li key={step}>
                <span>0{index + 1}</span>
                <h3>{step}</h3>
                <p>Provisional process stage.</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section className="story-section team-section" id="team" tabIndex={-1}>
        <Container>
          <SectionHeading
            eyebrow="06 / Team"
            title="The people building JM."
            align="center"
          />
          <p className="provisional-copy centered">
            JM is being shaped by a small founding team combining product
            thinking, design and software engineering.
          </p>
          <div className="team-grid">
            <article className="team-member">
              <div className="team-portrait team-portrait-james">
                <img
                  alt="James, Co-founder and Product Lead at JM"
                  height="960"
                  loading="lazy"
                  src={jamesPortrait}
                  width="720"
                />
              </div>
              <div className="team-member-copy">
                <p className="technical-label">Founder / 01</p>
                <h3>James</h3>
                <p>Co-founder &amp; Product Lead</p>
                <span>Full-stack Engineer</span>
              </div>
            </article>
            <article className="team-member">
              <div className="team-portrait team-portrait-morgan">
                <img
                  alt="Morgan, Co-founder, Designer and Frontend Engineer at JM"
                  height="960"
                  loading="lazy"
                  src={morganPortrait}
                  width="720"
                />
              </div>
              <div className="team-member-copy">
                <p className="technical-label">Founder / 02</p>
                <h3>Morgan</h3>
                <p>Co-founder</p>
                <span>Designer · Frontend Engineer</span>
              </div>
            </article>
          </div>
        </Container>
      </Section>

      <Section
        className="contact-section"
        id="contact"
        spacing="generous"
        tabIndex={-1}
      >
        <Container narrow>
          <p className="technical-label">07 / Contact</p>
          <h2 className="contact-title">
            Bring the next useful idea into focus.
          </h2>
          <p className="hero-copy">
            A secure project-enquiry experience will be added once its
            requirements are approved.
          </p>
          <ButtonLink to="/privacy" variant="secondary">
            View privacy approach
          </ButtonLink>
        </Container>
      </Section>
    </>
  );
}
