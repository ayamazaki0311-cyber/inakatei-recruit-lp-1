import { flow } from "@/constants/lp";
import { Section } from "./Section";

export function Flow() {
  return (
    <Section
      id="flow"
      eyebrow="応募の流れ"
      title="応募は電話のみです"
      description="応募フォームやLINE導線はありません。電話で勤務希望や面接についてご相談ください。"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {flow.map((item) => (
          <article key={item.step} className="rounded-md bg-white p-5 shadow-soft">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-daidai text-lg font-black text-white">
              {item.step}
            </div>
            <h3 className="text-lg font-bold text-shoyu">{item.title}</h3>
            <p className="mt-3 leading-7 text-stone-700">{item.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
