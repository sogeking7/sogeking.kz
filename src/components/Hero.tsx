import { socialLinks } from "@/components/socials";

export default function Hero() {
  return (
    <section className="py-20 md:py-28">
      <div className="flex flex-col gap-10">

        {/* Name */}
        <div className="reveal reveal-1 space-y-4">
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            Kairolla<br />Kaiyrkhan
          </h1>
          <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
            I'm a Software Developer and ML Engineer.
          </p>
        </div>

        {/* Social links */}
        <div className="reveal reveal-2 flex flex-wrap gap-6 text-sm text-muted-foreground">
          {socialLinks.map((link) => {
            const isExternal = link.href.startsWith("http");
            return (
              <a
                key={link.label}
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                className="social-link flex items-center gap-1"
              >
                <span className="text-primary">→</span>
                {link.label}
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
