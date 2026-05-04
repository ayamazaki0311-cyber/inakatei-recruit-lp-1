import { jobDescriptions } from "@/constants/lp";
import { Section } from "./Section";

export function JobDescription() {
  return (
    <Section
      id="job"
      eyebrow="仕事内容"
      title="できることから少しずつ覚えていきます"
      description="ホール、調理補助、キッチン業務を担当します。未経験の方にも基本からお伝えします。"
      className="bg-white/70"
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {jobDescriptions.map((job) => (
          <article key={job.title} className="rounded-md border border-[#edd8bf] bg-kinari p-5">
            <h3 className="text-xl font-bold text-shoyu">{job.title}</h3>
            <ul className="mt-4 space-y-2 text-stone-700">
              {job.items.map((item) => (
                <li key={item}>・{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
