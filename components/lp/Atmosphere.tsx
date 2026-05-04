import { atmosphere, galleryImages } from "@/constants/lp";
import { ImageCard } from "./ImageCard";
import { Section } from "./Section";

export function Atmosphere() {
  return (
    <Section id="atmosphere" eyebrow="職場の雰囲気" title={atmosphere.title} className="bg-white/70">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <ImageCard {...galleryImages[2]} />
        <div>
          <p className="leading-8 text-stone-700">{atmosphere.text}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {atmosphere.points.map((point) => (
              <span key={point} className="rounded-full bg-white px-3 py-2 text-sm font-bold text-miso shadow-soft">
                {point}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
