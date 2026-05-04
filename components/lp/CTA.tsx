import { siteInfo } from "@/constants/lp";
import { PhoneButtons } from "./PhoneButtons";

export function CTA() {
  return (
    <section id="cta" className="px-5 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-md bg-shoyu p-6 text-white shadow-soft sm:p-8">
        <p className="text-sm font-bold text-[#ffd39f]">電話応募のみ受付</p>
        <h2 className="mt-3 text-2xl font-black leading-tight sm:text-3xl">まずは電話でお気軽にお問い合わせください</h2>
        <p className="mt-4 leading-8 text-[#fff1dc]">
          お電話の際は「アルバイト募集を見ました」とお伝えください。混雑時は電話に出られない場合がありますので、時間をあけて再度お電話ください。
        </p>
        <div className="mt-6 rounded-md bg-white/10 p-4">
          <p className="text-sm text-[#fff1dc]">電話番号</p>
          <p className="mt-1 text-2xl font-black">{siteInfo.phoneDisplay}</p>
        </div>
        <div className="mt-6">
          <PhoneButtons />
        </div>
      </div>
    </section>
  );
}
