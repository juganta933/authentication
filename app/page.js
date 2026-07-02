import LiquidEther from "./components/liquid-Ether";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background animation */}
      <div className="fixed inset-0 z-0">
        <LiquidEther
          mouseForce={12}
          cursorSize={100}
          isViscous={false}
          viscous={20}
          colors={["#5227FF", "#e59745", "#B497CF"]}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          isBounce={false}
          resolution={0.5}
        />
      </div>

      {/* Dark overlay */}
      <div className="pointer-events-none fixed inset-0 z-10 bg-black/35" />

      {/* Glow decorations */}
      <div className="pointer-events-none fixed left-1/2 top-1/2 z-10 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/20 blur-[130px]" />
      <div className="pointer-events-none fixed right-[-130px] top-[150px] z-10 h-[320px] w-[320px] rounded-full bg-pink-400/20 blur-[100px]" />
      <div className="pointer-events-none fixed bottom-[-130px] left-[100px] z-10 h-[320px] w-[320px] rounded-full bg-orange-400/20 blur-[100px]" />

      {/* Main content */}
      <main className="pointer-events-none relative z-20 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="mb-5 inline-flex animate-[fadeIn_0.8s_ease-out] rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-medium text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-xl">
          built by Juganta.
        </div>

        <h1 className="animate-[fadeIn_0.9s_ease-out] bg-gradient-to-r from-white via-pink-200 to-purple-300 bg-clip-text text-5xl font-black tracking-tight text-transparent drop-shadow-[0_0_35px_rgba(255,159,252,0.25)] md:text-7xl">
          Secure Authentication
        </h1>

        <p className="mt-5 max-w-2xl animate-[fadeIn_1s_ease-out] text-lg leading-8 text-zinc-200 md:text-xl">
        
        </p>

        {/* Buttons */}
        <div className="pointer-events-auto mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/login"
            className="group relative overflow-hidden rounded-full border border-white/20 bg-white px-8 py-3.5 text-sm font-extrabold text-black shadow-[0_20px_60px_rgba(255,255,255,0.18)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-zinc-100 hover:shadow-[0_25px_80px_rgba(255,255,255,0.28)] active:translate-y-0 active:scale-95"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/80 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <span className="relative z-10 flex items-center gap-2">
              Login
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>

          <Link
            href="/signup"
            className="group relative overflow-hidden rounded-full border border-white/20 bg-gradient-to-br from-[#5227FF] via-[#FF9FFC] to-[#e59745] px-8 py-3.5 text-sm font-extrabold text-white shadow-[0_20px_60px_rgba(82,39,255,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:tracking-wide hover:brightness-110 hover:saturate-150 hover:shadow-[0_25px_80px_rgba(255,159,252,0.38)] active:translate-y-0 active:scale-95"
          >
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45),transparent_28%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.2),transparent_35%)] opacity-80 transition-transform duration-300 group-hover:scale-110" />

            <span className="absolute -left-16 top-[-80%] h-[260%] w-12 rotate-[22deg] bg-gradient-to-r from-transparent via-white/70 to-transparent transition-all duration-700 group-hover:left-[130%]" />

            <span className="relative z-10 flex items-center gap-2">
              Create Account
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
        </div>
      </main>
    </div>
  );
}