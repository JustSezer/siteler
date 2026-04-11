export default function Loading() {
  return (
    <main className="flex-1 flex items-center justify-center py-32 bg-background">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4" />
        <p className="text-muted-foreground">Yükleniyor...</p>
      </div>
    </main>
  );
}
