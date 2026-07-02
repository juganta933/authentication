export default function Loading() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white">
      {/* Static glow background */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-black">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/20 blur-[130px]" />
        <div className="absolute right-[-120px] top-[140px] h-[300px] w-[300px] rounded-full bg-pink-400/20 blur-[100px]" />
        <div className="absolute bottom-[-120px] left-[80px] h-[300px] w-[300px] rounded-full bg-orange-400/20 blur-[100px]" />
      </div>

      <main className="relative z-10 flex flex-col items-center text-center">
        <div className="relative mb-8 flex h-24 w-24 items-center justify-center">
          <div className="absolute inset-0 rounded-full border-4 border-white/10" />

          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-[#FF9FFC] border-r-[#5227FF] shadow-[0_0_35px_rgba(255,159,252,0.35)]" />

          <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#5227FF] via-[#FF9FFC] to-[#e59745] shadow-[0_0_40px_rgba(255,159,252,0.45)]" />
        </div>

        <h1 className="bg-gradient-to-r from-white via-pink-200 to-purple-300 bg-clip-text text-3xl font-black tracking-tight text-transparent">
          Loading .....
        </h1>

        <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-300">
          Please wait while we prepare your experience.
        </p>

        <div className="mt-7 flex gap-2">
          <span className="h-2 w-2 animate-bounce rounded-full bg-pink-300 [animation-delay:-0.3s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-purple-300 [animation-delay:-0.15s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-orange-300" />
        </div>
      </main>
    </div>
  );
}