import { requirements } from "@/constants/lp";
import { Section } from "./Section";

export function Requirements() {
  return (
    <Section
      id="requirements"
      eyebrow="募集要項"
      title="アルバイト募集条件"
    >
      <div className="overflow-hidden rounded-md border border-[#ead5bb] bg-white shadow-soft">
        {requirements.map((item) => (
          <div key={item.label} className="grid border-b border-[#f1dfca] last:border-b-0 sm:grid-cols-[14rem_1fr]">
            <div className="bg-[#fbefd9] px-4 py-4 text-sm font-bold text-shoyu">{item.label}</div>
            <div className="px-4 py-4 leading-7 text-stone-700">{item.value}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
