"use client";

import { useEffect } from "react";
import { Mountain, RefreshCcw } from "lucide-react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <Mountain className="w-16 h-16 text-primary mb-6 opacity-60" />
      <h1 className="text-2xl font-bold text-foreground mb-4">
        Bir sorun olustu
      </h1>
      <p className="text-muted-foreground max-w-md mb-8 leading-relaxed">
        Sayfayi yuklerken beklenmedik bir hata meydana geldi.
        Lutfen sayfayi yenilemeyi deneyin.
      </p>
      <button
        onClick={reset}
        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-light transition-colors duration-200"
      >
        <RefreshCcw className="w-4 h-4" />
        Sayfayi Yenile
      </button>
    </div>
  );
}
