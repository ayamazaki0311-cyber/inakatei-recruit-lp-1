import { hero, siteInfo, galleryImages } from "@/constants/lp";
import { ImageCard } from "./ImageCard";
import { PhoneButtons } from "./PhoneButtons";

export function Hero() {
  return (
    <header className="px-5 pb-12 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <nav className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-lg font-black text-shoyu">{siteInfo.shopName}</p>
            <p className="text-xs font-bold text-stone-600">{siteInfo.serviceName}</p>
          </div>
          <a
            href={siteInfo.phoneHref}
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-shoyu px-4 py-2 text-sm font-bold text-white"
          >
            電話応募
          </a>
        </nav>

        <div className="grid items-center gap-8 lg:grid-cols-[1.03fr_0.97fr]">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-daidai shadow-soft">
              {hero.label}
            </p>
            <h1 className="text-3xl font-black leading-tight text-shoyu sm:text-5xl">{hero.title}</h1>
            <p className="mt-5 text-base leading-8 text-stone-700 sm:text-lg">{hero.lead}</p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {hero.badges.map((badge) => (
                <div key={badge} className="rounded-md bg-white p-4 text-sm font-bold text-shoyu shadow-soft">
                  {badge}
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {hero.highlights.map((item) => (
                <span key={item} className="rounded-full bg-[#f7e2cb] px-3 py-1 text-sm font-bold text-miso">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-7">
              <PhoneButtons />
              <p className="mt-3 text-sm leading-6 text-stone-600">
                電話番号：{siteInfo.phoneDisplay}
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <ImageCard {...galleryImages[1]} priority />
            </div>
            <ImageCard {...galleryImages[2]} />
            <ImageCard {...galleryImages[4]} />
          </div>
        </div>
      </div>
    </header>
  );
}
