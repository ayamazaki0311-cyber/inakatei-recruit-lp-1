"use client";

import Image from "next/image";
import { useState } from "react";

type ImageCardProps = {
  src: string;
  alt: string;
  caption: string;
  priority?: boolean;
};

export function ImageCard({ src, alt, caption, priority = false }: ImageCardProps) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className="group relative min-h-56 overflow-hidden rounded-md bg-[#f2e4d0] shadow-soft">
      {!failed ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
          onError={() => setFailed(true)}
          priority={priority}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(135deg,#f7ead7,#ead5bb)] px-6 text-center text-sm font-bold text-miso">
          写真未配置
          <br />
          {src}
        </div>
      )}
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-4 pb-4 pt-12 text-sm font-bold text-white">
        {caption}
      </figcaption>
    </figure>
  );
}
