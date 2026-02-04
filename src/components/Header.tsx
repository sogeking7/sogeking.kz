import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-10 w-full border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <span className="font-display text-sm tracking-[0.2em] text-foreground/80">
          sogeking.kz
        </span>
        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-6 text-sm text-foreground/70 sm:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-foreground">
                {item.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
