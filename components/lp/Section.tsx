type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, description, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`px-5 py-14 sm:px-6 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-3xl">
          {eyebrow ? (
            <p className="mb-3 text-sm font-bold tracking-wide text-daidai">{eyebrow}</p>
          ) : null}
          <h2 className="text-2xl font-bold leading-tight text-shoyu sm:text-3xl">{title}</h2>
          {description ? <p className="mt-4 leading-8 text-stone-700">{description}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
