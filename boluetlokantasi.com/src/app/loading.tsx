export default function Loading() {
  return (
    <div
      className="flex min-h-[60vh] items-center justify-center flex-col gap-4"
      aria-label="İçerik yükleniyor"
    >
      <div
        className="w-10 h-10 rounded-full border-2 animate-spin"
        style={{ borderColor: "rgba(212,175,55,0.25)", borderTopColor: "#d4af37" }}
        role="status"
        aria-hidden="true"
      />
      <p
        className="text-xs tracking-widest uppercase"
        style={{ color: "#555555", letterSpacing: "0.15em" }}
      >
        Yükleniyor
      </p>
    </div>
  );
}
