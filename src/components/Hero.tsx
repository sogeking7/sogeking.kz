import { Button } from "@/components/ui/button";
import { socialLinks } from "@/components/socials";

export default function Hero() {
  return (
    <section className="py-16">
      <div className="flex flex-col gap-8">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
            Software Dev, ML Dev, AI nerd
          </p>
          <h1 className="font-display text-4xl leading-tight md:text-5xl">
            Kaiyrkhan Kairolla — sogeking.kz
          </h1>
          <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
            This is my personal website.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <a href="mailto:kairolla222@gmail.com">Email me</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://github.com/sogeking7" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </Button>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
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
    </section>
  );
}
