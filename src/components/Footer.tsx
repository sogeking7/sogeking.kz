export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 py-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-1 px-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
        <span>© {year} sogeking.kz</span>
        <span className="tracking-widest uppercase">built with care</span>
      </div>
    </footer>
  );
}
