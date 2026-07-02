"use client";

export default function Error({ error, reset }) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white">
      <div className="pointer-events-none fixed inset-0 z-0 bg-black">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/20 blur-[130px]" />
        <div className="absolute right-[-120px] top-[140px] h-[300px] w-[300px] rounded-full bg-pink-400/20 blur-[100px]" />
        <div className="absolute bottom-[-120px] left-[80px] h-[300px] w-[300px] rounded-full bg-purple-500/20 blur-[100px]" />
      </div>

      <main className="relative z-10 w-full max-w-md rounded-[2rem] border border-white/15 bg-white/[0.08] p-8 text-center shadow-[0_25px_100px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-2xl">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/20 text-3xl shadow-[0_0_40px_rgba(248,113,113,0.35)]">
          !
        </div>

        <h2 className="bg-gradient-to-r from-white via-red-200 to-pink-300 bg-clip-text text-3xl font-black text-transparent">
          Something went wrong
        </h2>

        <p className="mt-4 rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm font-medium text-red-100">
          {error?.message || "Unexpected error occurred"}
        </p>

        <button
          onClick={() => reset()}
          className="group relative mt-6 w-full overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-red-500 via-pink-500 to-purple-600 px-6 py-3.5 text-sm font-extrabold text-white shadow-[0_20px_60px_rgba(248,113,113,0.25)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:brightness-110 hover:saturate-150 active:translate-y-0 active:scale-95"
        >
          <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45),transparent_28%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.2),transparent_35%)] opacity-80 transition-transform duration-300 group-hover:scale-110" />

          <span className="absolute -left-16 top-[-80%] h-[260%] w-12 rotate-[22deg] bg-gradient-to-r from-transparent via-white/70 to-transparent transition-all duration-700 group-hover:left-[130%]" />

          <span className="relative z-10">Try Again</span>
        </button>
      </main>
    </div>
  );
}