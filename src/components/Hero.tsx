import { socialLinks } from "@/components/socials";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section className="py-16">
      <div className="flex flex-col gap-8">
        <div className="space-y-5">
          <Badge variant="secondary" className="w-fit">
            Software Dev, ML Dev, AI nerd
          </Badge>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Kairolla Kaiyrkhan
          </h1>
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
