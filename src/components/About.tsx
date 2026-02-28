export default function About() {
  return (
    <section id="about" className="border-t border-border py-12">
      <div className="grid gap-8 md:grid-cols-[160px_1fr] md:gap-16">
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground pt-1">
          About
        </h2>
        <div className="space-y-4">
          <p className="text-base leading-relaxed text-pretty">
            I'm a Software Developer and ML Engineer. I enjoy building things and solving problems.
          </p>
        </div>
      </div>
    </section>
  );
}
