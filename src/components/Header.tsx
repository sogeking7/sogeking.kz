import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const navItems = [
  { label: "About", href: "#about" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-10 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-3.5">
        <a href="/" className="font-bold uppercase tracking-widest text-sm hover:text-primary transition-colors">
          sogeking.kz
        </a>
        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-1 sm:flex">
            {navItems.map((item) => (
              <Button key={item.label} variant="ghost" size="sm" asChild>
                <a href={item.href}>{item.label}</a>
              </Button>
            ))}
          </nav>
          <Separator orientation="vertical" className="hidden h-5 sm:block" />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
