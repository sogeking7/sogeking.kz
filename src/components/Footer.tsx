export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <span>© {year} sogeking.kz</span>
      </div>
    </footer>
  );
}
