export default function DashboardLoading() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white">
      {/* Static glow background */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-black">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/20 blur-[130px]" />
        <div className="absolute right-[-120px] top-[140px] h-[300px] w-[300px] rounded-full bg-pink-400/20 blur-[100px]" />
        <div className="absolute bottom-[-120px] left-[80px] h-[300px] w-[300px] rounded-full bg-orange-400/20 blur-[100px]" />
      </div>

      <main className="relative z-10 w-full max-w-md rounded-[2rem] border border-white/15 bg-white/[0.08] p-8 text-center shadow-[0_25px_100px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-2xl">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#5227FF] via-[#FF9FFC] to-[#e59745] shadow-[0_0_45px_rgba(255,159,252,0.4)]">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-white/30 border-t-white" />
        </div>

        <h2 className="bg-gradient-to-r from-white via-pink-200 to-purple-300 bg-clip-text text-3xl font-black tracking-tight text-transparent">
          Loading Dashboard
        </h2>

        <p className="mt-3 text-sm leading-6 text-zinc-300">
          Getting your account information.
        </p>

        <div className="mt-7 space-y-3">
          <div className="h-3 w-full animate-pulse rounded-full bg-white/10" />
          <div className="mx-auto h-3 w-3/4 animate-pulse rounded-full bg-white/10" />
          <div className="mx-auto h-3 w-1/2 animate-pulse rounded-full bg-white/10" />
        </div>
      </main>
    </div>
  );
}