import { faqs } from "@/constants/lp";
import { Section } from "./Section";

export function FAQ() {
  return (
    <Section id="faq" eyebrow="FAQ" title="よくある質問" className="bg-white/70">
      <div className="space-y-3">
        {faqs.map((faq) => (
          <details key={faq.q} className="rounded-md border border-[#ead5bb] bg-white p-5 shadow-soft">
            <summary className="cursor-pointer text-base font-bold text-shoyu">{faq.q}</summary>
            <p className="mt-3 leading-7 text-stone-700">{faq.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
