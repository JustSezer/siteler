export default function Loading() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block w-10 h-10 border-4 border-green-100 border-t-green-700 rounded-full animate-spin" />
        <p className="text-gray-400 text-sm mt-4">Yükleniyor...</p>
      </div>
    </div>
  );
}
