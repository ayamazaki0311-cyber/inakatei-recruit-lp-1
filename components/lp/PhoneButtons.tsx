import { siteInfo } from "@/constants/lp";

type PhoneButtonsProps = {
  compact?: boolean;
};

export function PhoneButtons({ compact = false }: PhoneButtonsProps) {
  return (
    <div className={`flex ${compact ? "flex-row" : "flex-col sm:flex-row"} gap-3`}>
      <a
        href={siteInfo.phoneHref}
        className="inline-flex min-h-12 flex-1 items-center justify-center rounded-md bg-daidai px-5 py-3 text-center text-base font-bold text-white shadow-soft transition hover:bg-[#c75d1d]"
      >
        電話で応募する
      </a>
      <a
        href={siteInfo.phoneHref}
        className="inline-flex min-h-12 flex-1 items-center justify-center rounded-md border border-miso bg-white px-5 py-3 text-center text-base font-bold text-miso transition hover:bg-kinari"
      >
        電話で問い合わせる
      </a>
    </div>
  );
}
