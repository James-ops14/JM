import { contact } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function PrivacyPage() {
  return (
    <Section className="privacy-page" spacing="generous">
      <Container narrow>
        <p className="technical-label">
          Privacy notice / Last updated 7 September 2026
        </p>
        <h1>Privacy at JM</h1>
        <div className="editorial-copy">
          <p>
            JM is an emerging technology studio website. This first-release site
            does not provide user accounts and does not include an enquiry form
            or form backend, so it does not intentionally store enquiry
            submissions.
          </p>
          <p>
            When you choose to call JM, your telephone service handles that
            interaction. When you choose WhatsApp, WhatsApp and Meta handle that
            interaction under their own terms and privacy practices. Please
            avoid sending highly sensitive information through public contact
            channels.
          </p>
          <p>
            Your selected light or dark theme may be stored locally in your
            browser so the site can remember it. This is not an authentication
            cookie. Hosting providers may process standard technical logs needed
            to deliver and secure the site.
          </p>
          <p>
            The assistant shown on the homepage is a concept preview only. It
            does not collect AI conversation data. This notice will be updated
            if JM adds forms, analytics, AI functionality or additional
            services.
          </p>
          <p>
            Contact is currently available by phone or WhatsApp at{" "}
            <a href={contact.phoneHref}>{contact.phoneDisplay}</a>.
          </p>
        </div>
      </Container>
    </Section>
  );
}
