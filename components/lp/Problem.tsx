import { problems } from "@/constants/lp";
import { Section } from "./Section";

export function Problem() {
  return (
    <Section
      eyebrow="こんな方に"
      title="無理なく、安心して始められる職場を探していませんか？"
      description="田舎亭は、初めて飲食店で働く方や、学校・家庭と両立したい方にも応募しやすいアルバイト募集です。"
      className="bg-white/70"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {problems.map((item) => (
          <div key={item} className="rounded-md border border-[#edd8bf] bg-kinari p-5 text-stone-700">
            {item}
          </div>
        ))}
      </div>
    </Section>
  );
}
