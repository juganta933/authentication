import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white">
      {/* Static glow background */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-black">
        <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/20 blur-[140px]" />
        <div className="absolute right-[-120px] top-[120px] h-[320px] w-[320px] rounded-full bg-pink-400/20 blur-[100px]" />
        <div className="absolute bottom-[-120px] left-[80px] h-[320px] w-[320px] rounded-full bg-orange-400/20 blur-[100px]" />
      </div>

      <main className="relative z-10 w-full max-w-lg rounded-[2rem] border border-white/15 bg-white/[0.08] p-8 text-center shadow-[0_25px_100px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-2xl">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5227FF] via-[#FF9FFC] to-[#e59745] text-2xl font-black shadow-[0_0_40px_rgba(255,159,252,0.4)]">
          404
        </div>

        <h1 className="bg-gradient-to-r from-white via-pink-200 to-purple-300 bg-clip-text text-4xl font-black tracking-tight text-transparent">
          Page Not Found
        </h1>

        <p className="mt-4 text-sm leading-6 text-zinc-300">
          The page you are looking for does not exist or may have been moved.
        </p>

        <Link
          href="/"
          className="group relative mt-7 inline-flex overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-[#5227FF] via-[#FF9FFC] to-[#e59745] px-6 py-3.5 text-sm font-extrabold text-white shadow-[0_20px_60px_rgba(82,39,255,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.04] hover:brightness-110 hover:saturate-150 active:translate-y-0 active:scale-95"
        >
          <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45),transparent_28%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.2),transparent_35%)] opacity-80 transition-transform duration-300 group-hover:scale-110" />

          <span className="absolute -left-16 top-[-80%] h-[260%] w-12 rotate-[22deg] bg-gradient-to-r from-transparent via-white/70 to-transparent transition-all duration-700 group-hover:left-[130%]" />

          <span className="relative z-10 flex items-center gap-2">
            Go back home
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </Link>
      </main>
    </div>
  );
}