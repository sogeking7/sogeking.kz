import { socialLinks } from "@/components/socials";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="py-12">
      <div className="flex flex-col gap-8 rounded-3xl border border-border/70 bg-card p-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Contact
          </p>
          <h2 className="font-display text-2xl md:text-3xl">Socials</h2>
          <p className="text-base text-muted-foreground">
            Send me letter.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4">
          <Button asChild>
            <a href="mailto:kairolla222@gmail.com">kairolla222@gmail.com</a>
          </Button>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            {socialLinks.map((link) => {
              const isExternal = link.href.startsWith("http");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
