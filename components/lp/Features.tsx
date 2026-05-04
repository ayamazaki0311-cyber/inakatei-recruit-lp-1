import { features } from "@/constants/lp";
import { Section } from "./Section";

export function Features() {
  return (
    <Section
      id="features"
      eyebrow="働くメリット"
      title="週1日から、地元で働きやすい条件です"
      description="アルバイトを探す方が気になる条件を、わかりやすく整理しました。"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <article key={feature.title} className="rounded-md bg-white p-5 shadow-soft">
            <h3 className="text-lg font-bold text-shoyu">{feature.title}</h3>
            <p className="mt-3 leading-7 text-stone-700">{feature.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
