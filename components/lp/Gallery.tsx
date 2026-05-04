import { galleryImages } from "@/constants/lp";
import { ImageCard } from "./ImageCard";
import { Section } from "./Section";

export function Gallery() {
  return (
    <Section
      id="gallery"
      eyebrow="写真ギャラリー"
      title="店舗・店内・料理の雰囲気"
      description="スタッフ写真や作業風景写真がまだなくても、店内写真と料理写真から、落ち着いたお店の雰囲気や働くイメージが伝わる構成にしています。"
      className="bg-white/70"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((image) => (
          <ImageCard key={image.src} {...image} />
        ))}
      </div>
    </Section>
  );
}
