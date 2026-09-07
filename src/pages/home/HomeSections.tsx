import { useState } from "react";
import jamesPortrait from "@/assets/images/james.png";
import jamesPortraitOptimized from "@/assets/images/james-640.jpg";
import morganPortrait from "@/assets/images/morgan.png";
import {
  company,
  contact,
  processSteps,
  projects,
  services,
  team,
} from "@/content/site";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

function ContactActions() {
  const [copyStatus, setCopyStatus] = useState<"copied" | "unavailable" | null>(
    null,
  );

  async function copyPhoneNumber() {
    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard API unavailable");
      }
      await navigator.clipboard.writeText(contact.phoneDisplay);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = contact.phoneDisplay;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.append(textArea);
      textArea.select();
      const copied = document.execCommand?.("copy") ?? false;
      textArea.remove();
      if (!copied) {
        setCopyStatus("unavailable");
        return;
      }
    }
    setCopyStatus("copied");
    window.setTimeout(() => setCopyStatus(null), 2500);
  }

  return (
    <div className="contact-actions">
      <a className="button button-primary" href={contact.phoneHref}>
        Call JM
      </a>
      <a
        className="button button-secondary"
        href={contact.whatsappHref}
        rel="noopener noreferrer"
        target="_blank"
      >
        Chat on WhatsApp
      </a>
      <button
        className="button button-ghost"
        onClick={() => {
          void copyPhoneNumber();
        }}
        type="button"
      >
        Copy phone number
      </button>
      <p aria-live="polite" className="copy-status">
        {copyStatus === "copied"
          ? "Phone number copied."
          : copyStatus === "unavailable"
            ? "Copy is unavailable in this browser. Please select the number manually."
            : null}
      </p>
    </div>
  );
}

export function HomeSections() {
  return (
    <>
      <Section className="home-hero" id="home" spacing="generous" tabIndex={-1}>
        <Container>
          <p className="technical-label">
            JM · Digital products, design and intelligent systems
          </p>
          <h1 className="hero-title">
            We turn ambitious ideas into intelligent digital experiences.
          </h1>
          <p className="hero-copy">
            JM brings product thinking, design and engineering together to
            create useful websites, software platforms, automation systems and
            emerging digital products.
          </p>
          <div className="hero-actions">
            <ButtonLink to="/#contact">Start a project</ButtonLink>
            <a className="text-link" href="/#portfolio">
              Explore our work
            </a>
          </div>
          <p className="scroll-cue">Scroll to explore</p>
        </Container>
      </Section>

      <Section className="story-section story-about" id="about" tabIndex={-1}>
        <Container narrow>
          <SectionHeading eyebrow="01 / About JM" title={company.about.title} />
          <div className="editorial-copy">
            {company.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mission-vision">
            <div>
              <p className="technical-label">Our mission</p>
              <p>{company.about.mission}</p>
            </div>
            <div>
              <p className="technical-label">Our vision</p>
              <p>{company.about.vision}</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="story-section" id="services" tabIndex={-1}>
        <Container>
          <SectionHeading
            description="JM brings together product strategy, design and engineering so clients can move from an early idea to a solution people can actually use."
            eyebrow="02 / Services"
            title="From the first idea to a working digital product."
          />
          <div className="service-list">
            {services.map((service, index) => (
              <article className="service-item" key={service.title}>
                <span aria-hidden="true">0{index + 1}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="story-section ai-section" id="ai" tabIndex={-1}>
        <Container>
          <div className="asymmetric-grid">
            <div>
              <SectionHeading
                eyebrow="03 / Intelligence with purpose"
                title="AI should make technology more useful—not less human."
              />
              <div className="editorial-copy">
                <p>
                  JM explores artificial intelligence as a practical layer
                  within digital products: helping people find information,
                  navigate services, reduce repetitive work and make better use
                  of the systems around them.
                </p>
                <p>
                  Our approach begins with the problem, the user and the
                  information that can be trusted. The technology comes
                  afterward.
                </p>
              </div>
            </div>
            <aside
              aria-label="JM assistant concept preview"
              className="ai-preview"
            >
              <div className="ai-preview-heading">
                <Badge tone="violet">Concept preview</Badge>
                <span>Nonfunctional navigation preview</span>
              </div>
              <p>Choose a prompt to explore the relevant JM section.</p>
              <div className="prompt-list">
                <a href="/#services">
                  I need a website for a growing organisation.
                </a>
                <a href="/#services">
                  How can I automate a repetitive process?
                </a>
                <a href="/#portfolio">Show me products JM is developing.</a>
              </div>
            </aside>
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
            description="JM’s portfolio is growing alongside the company. These concepts represent the kinds of human problems, product thinking and technical systems we are interested in pursuing."
            eyebrow="04 / Portfolio"
            title="Ideas we are developing into meaningful products."
          />
          <div className="project-grid">
            {projects.map((project, index) => (
              <article
                className={`project-preview project-preview-${index + 1}`}
                key={project.title}
              >
                <div aria-hidden="true" className="project-visual">
                  <span />
                </div>
                <p className="technical-label">{project.category}</p>
                <h3>{project.title}</h3>
                <Badge tone="cyan">{project.status}</Badge>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="story-section" id="process" tabIndex={-1}>
        <Container>
          <SectionHeading
            eyebrow="05 / Process"
            title="A clear path from problem to product."
          />
          <ol className="process-list">
            {processSteps.map((step, index) => (
              <li key={step.title}>
                <span>0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section className="story-section team-section" id="team" tabIndex={-1}>
        <Container>
          <SectionHeading
            align="center"
            eyebrow="06 / Team"
            title="The people building JM."
          />
          <div className="team-grid">
            {[jamesPortrait, morganPortrait].map((image, index) => {
              const member = team[index];
              return (
                <article className="team-member" key={member.name}>
                  <div className="team-portrait">
                    {index === 0 ? (
                      <picture>
                        <source
                          srcSet={jamesPortraitOptimized}
                          type="image/jpeg"
                        />
                        <img
                          alt={member.alt}
                          height="1846"
                          loading="lazy"
                          src={image}
                          width="852"
                        />
                      </picture>
                    ) : (
                      <img
                        alt={member.alt}
                        height="405"
                        loading="lazy"
                        src={image}
                        width="365"
                      />
                    )}
                  </div>
                  <div className="team-member-copy">
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                    <span>{member.speciality}</span>
                  </div>
                </article>
              );
            })}
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
            Let’s talk about what you want to build.
          </h2>
          <p className="hero-copy">
            Whether you are starting with an early idea or improving an existing
            digital product, tell us what you are working on and where you need
            support.
          </p>
          <ContactActions />
        </Container>
      </Section>
    </>
  );
}
