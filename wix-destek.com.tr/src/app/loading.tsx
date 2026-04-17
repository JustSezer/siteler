export default function Loading() {
  return (
    <div
      className="min-h-[50vh] flex items-center justify-center"
      role="status"
      aria-live="polite"
    >
      <span className="sr-only">Yükleniyor...</span>
      <div
        className="w-10 h-10 rounded-full border-2 border-[var(--line)] border-t-[var(--orange)] animate-spin"
        aria-hidden="true"
      />
    </div>
  );
}
