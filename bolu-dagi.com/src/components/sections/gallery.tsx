"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80",
    alt: "Bolu Dağı göl ve orman panoramik manzarası",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    alt: "Bolu ormanlarında yeşil ağaçlar arasında yürüyüş yolu",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800&q=80",
    alt: "Kartalkaya kayak merkezi karlı dağ manzarası",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&q=80",
    alt: "Yedigöller sonbahar yaprakları ve orman manzarası",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    alt: "Gölcük Tabiat Parkı göl kenarı doğa manzarası",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=800&q=80",
    alt: "Bolu Dağı yaz aylarında yeşil göl manzarası",
    span: "col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1557429287-b2e26467fc2b?w=800&q=80",
    alt: "Bolu Dağı ilkbahar çiçekleri ve yeşil doğa",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    alt: "Bolu Dağı zirve ve bulutlar kış manzarası",
    span: "",
  },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const navigatePhoto = (direction: number) => {
    if (selectedIndex === null) return;
    const newIndex =
      (selectedIndex + direction + photos.length) % photos.length;
    setSelectedIndex(newIndex);
  };

  return (
    <section id="galeri" className="py-24 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Bolu Dagi Foto Galeri"
          subtitle="Bolu Dagi'nin dört mevsiminden kareler"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {photos.map((photo, i) => (
            <motion.button
              key={photo.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => setSelectedIndex(i)}
              className={`relative rounded-xl overflow-hidden cursor-pointer group ${photo.span} aspect-[4/3]`}
              aria-label={`${photo.alt} - buyutmek için tikla`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${photo.src}')` }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
                <span className="text-white text-base font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  Görüntüle
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedIndex(null)}
            role="dialog"
            aria-label="Fotograf görüntüleyici"
          >
            {/* Close */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all z-10"
              aria-label="Kapat"
            >
              <X className="w-7 h-7" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigatePhoto(-1);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all z-10"
              aria-label="Onceki fotograf"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigatePhoto(1);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all z-10"
              aria-label="Sonraki fotograf"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full" style={{ aspectRatio: "16/9", maxHeight: "80vh" }}>
                <Image
                  src={photos[selectedIndex].src}
                  alt={photos[selectedIndex].alt}
                  fill
                  className="object-contain rounded-lg"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
              </div>
              <p className="text-center text-white/60 text-sm mt-4">
                {photos[selectedIndex].alt} ({selectedIndex + 1}/{photos.length}
                )
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
