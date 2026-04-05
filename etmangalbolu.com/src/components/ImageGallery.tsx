"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

export default function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [selected, setSelected] = useState<number | null>(null);

  if (images.length === 0) return null;

  return (
    <>
      <div className="mt-8 mb-8">
        <h3 className="text-lg font-bold mb-4">Fotoğraf Galerisi</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className="relative aspect-square rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
              aria-label={`${alt} - Fotoğraf ${i + 1}`}
            >
              <Image
                src={src}
                alt={`${alt} - ${i + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 text-white text-3xl z-10 w-12 h-12 flex items-center justify-center"
            aria-label="Kapat"
          >
            &times;
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelected(selected > 0 ? selected - 1 : images.length - 1);
            }}
            className="absolute left-4 text-white text-3xl z-10 w-12 h-12 flex items-center justify-center"
            aria-label="Önceki"
          >
            &lsaquo;
          </button>

          <div className="relative w-full max-w-4xl max-h-[80vh] aspect-video">
            <Image
              src={images[selected]}
              alt={`${alt} - ${selected + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelected(selected < images.length - 1 ? selected + 1 : 0);
            }}
            className="absolute right-4 text-white text-3xl z-10 w-12 h-12 flex items-center justify-center"
            aria-label="Sonraki"
          >
            &rsaquo;
          </button>

          <div className="absolute bottom-4 text-white text-sm">
            {selected + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
