import { Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/container/Container";
import { GithubIcon, LinkedinIcon, Logo } from "@/components/icons";
import { contactContent } from "@/content/contact";

const contactLinkClassName =
  "flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-primary";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t border-foreground/10 bg-background py-10 md:py-14">
      <Container>
        <div className="flex flex-col-reverse items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col items-start gap-3 md:flex-row md:items-start md:gap-12">
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`tel:${contactContent.phone.replace(/\s+/g, "")}`}
                  className={contactLinkClassName}
                  aria-label={t("phoneLabel")}
                >
                  <Phone className="size-4" aria-hidden />
                  {contactContent.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactContent.email}`}
                  className={contactLinkClassName}
                  aria-label={t("emailLabel")}
                >
                  <Mail className="size-4" aria-hidden />
                  {contactContent.email}
                </a>
              </li>
            </ul>

            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={contactContent.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={contactLinkClassName}
                  aria-label={t("githubLabel")}
                >
                  <GithubIcon className="size-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={contactContent.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={contactLinkClassName}
                  aria-label={t("linkedinLabel")}
                >
                  <LinkedinIcon className="size-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <Logo className="size-24" />
        </div>

        <p className="mt-8 text-center text-xs text-foreground/60">
          © {new Date().getFullYear()} Arkadiusz Pomarański. {t("rightsReserved")}
        </p>
      </Container>
    </footer>
  );
}
