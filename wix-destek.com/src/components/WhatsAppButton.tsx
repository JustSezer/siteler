"use client";

// TODO: Kendi WhatsApp numaranızı girin (başında 90 olacak şekilde, boşluksuz)
// Örnek: 905551234567
const WHATSAPP_NUMBER = "905551234567";
const WHATSAPP_MESSAGE = "Merhaba, Wix konusunda destek almak istiyorum.";

export default function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişime geç"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform duration-200 hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
      style={{ backgroundColor: "#25D366" }}
    >
      <svg
        viewBox="0 0 32 32"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        aria-hidden="true"
      >
        <path d="M16.002 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.347.63 4.645 1.826 6.667L2.667 29.333l6.875-1.802A13.263 13.263 0 0016.002 29.333c7.366 0 13.331-5.969 13.331-13.333S23.368 2.667 16.002 2.667zm0 24c-2.17 0-4.288-.587-6.13-1.698l-.44-.26-4.082 1.07 1.09-3.974-.286-.457A10.617 10.617 0 015.334 16c0-5.882 4.786-10.667 10.668-10.667S26.667 10.118 26.667 16 21.884 26.667 16.002 26.667zm5.84-7.987c-.32-.16-1.893-.934-2.186-1.04-.293-.107-.506-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.187.214-.373.24-.694.08-.32-.16-1.352-.498-2.576-1.59-.952-.85-1.595-1.9-1.782-2.22-.187-.32-.02-.493.14-.653.145-.144.32-.374.48-.56.16-.187.213-.32.32-.534.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.986-2.373-.26-.627-.525-.54-.72-.55-.187-.007-.4-.01-.614-.01-.213 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.667s1.147 3.094 1.307 3.307c.16.213 2.254 3.44 5.46 4.826.763.33 1.36.526 1.823.674.766.243 1.464.208 2.016.126.615-.09 1.893-.773 2.16-1.52.267-.746.267-1.386.187-1.52-.08-.133-.293-.213-.614-.373z" />
      </svg>
    </a>
  );
}
