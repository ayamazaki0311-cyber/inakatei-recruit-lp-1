import { about, siteInfo } from "@/constants/lp";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" eyebrow="お店について" title={about.title} description={about.body}>
      <div className="grid gap-5 lg:grid-cols-3">
        <div className="rounded-md bg-white p-5 shadow-soft">
          <p className="text-sm font-bold text-daidai">アクセス</p>
          <p className="mt-2 text-lg font-bold text-shoyu">{siteInfo.access}</p>
          <p className="mt-2 text-sm leading-6 text-stone-600">{siteInfo.address}</p>
        </div>
        <div className="rounded-md bg-white p-5 shadow-soft lg:col-span-2">
          <p className="text-sm font-bold text-daidai">編集メモ</p>
          <ul className="mt-2 space-y-2 text-sm leading-6 text-stone-600">
            {about.notes.map((note) => (
              <li key={note}>・{note}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
