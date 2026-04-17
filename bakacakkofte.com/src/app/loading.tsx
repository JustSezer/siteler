export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="flex flex-col items-center gap-4">
        <span
          aria-hidden
          className="flex h-14 w-14 items-center justify-center rounded-full bg-red text-orange display-font font-bold text-2xl animate-pulse"
        >
          B
        </span>
        <p className="text-muted text-sm mono-font">yükleniyor…</p>
      </div>
    </div>
  );
}
