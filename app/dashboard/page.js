"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUser() {
      try {
        const res = await fetch("/api/me", {
          cache: "no-store",
        });

        const result = await res.json();

        if (result.success) {
          setUser(result.user);
        } else {
          router.push("/login");
        }
      } catch (error) {
        console.log("Dashboard error:", error);
        router.push("/login");
      } finally {
        setLoading(false);
      }
    }

    getUser();
  }, [router]);

  async function handleLogout() {
    try {
      const res = await fetch("/api/logout", {
        method: "POST",
      });

      const result = await res.json();

      if (result.success) {
        router.push("/login");
        router.refresh();
      }
    } catch (error) {
      console.log("Logout error:", error);
    }
  }

  if (loading) {
    return (
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white">
        <div className="pointer-events-none fixed inset-0 z-0 bg-black">
          <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/20 blur-[130px]" />
          <div className="absolute right-[-120px] top-[140px] h-[300px] w-[300px] rounded-full bg-pink-400/20 blur-[100px]" />
        </div>

        <main className="relative z-10 text-center">
          <div className="mx-auto mb-6 h-14 w-14 animate-spin rounded-full border-4 border-white/20 border-t-pink-300" />

          <h1 className="bg-gradient-to-r from-white via-pink-200 to-purple-300 bg-clip-text text-3xl font-black text-transparent">
            Loading Dashboard
          </h1>

          <p className="mt-3 text-sm text-zinc-300">
            Getting your account information.
          </p>
        </main>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="relative flex min-h-screen items-center justify-center bg-black px-6 text-white">
        <h1 className="text-2xl font-bold text-zinc-300">Redirecting...</h1>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Static background */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-black">
        <div className="absolute left-1/2 top-[35%] h-[580px] w-[580px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/20 blur-[140px]" />
        <div className="absolute right-[-130px] top-[160px] h-[320px] w-[320px] rounded-full bg-pink-400/20 blur-[100px]" />
        <div className="absolute bottom-[-130px] left-[90px] h-[320px] w-[320px] rounded-full bg-orange-400/20 blur-[100px]" />
      </div>

      <div className="pointer-events-none fixed inset-0 z-10 bg-black/35" />

      <main className="relative z-20 mx-auto max-w-7xl px-6 py-16">
        {/* Hero */}
        <section className="mb-10 rounded-[2rem] border border-white/15 bg-white/[0.08] p-8 shadow-[0_25px_100px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-2xl md:p-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="mb-3 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-pink-100">
                Logged in successfully
              </p>

              <h1 className="bg-gradient-to-r from-white via-pink-200 to-purple-300 bg-clip-text text-4xl font-black tracking-tight text-transparent md:text-6xl">
                Hello, {user.firstName}
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300 md:text-base">
              Welcome
              </p>
            </div>

            <button
              onClick={handleLogout}
              className="group relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-rose-500 via-pink-500 to-purple-600 px-7 py-3.5 text-sm font-extrabold text-white shadow-[0_20px_60px_rgba(248,113,113,0.25)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:brightness-110 hover:saturate-150 active:translate-y-0 active:scale-95"
            >
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45),transparent_28%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.2),transparent_35%)] opacity-80 transition-transform duration-300 group-hover:scale-110" />

              <span className="absolute -left-16 top-[-80%] h-[260%] w-12 rotate-[22deg] bg-gradient-to-r from-transparent via-white/70 to-transparent transition-all duration-700 group-hover:left-[130%]" />

              <span className="relative z-10">Logout</span>
            </button>
          </div>
        </section>

        {/* Account details */}
        <section className="grid gap-6 md:grid-cols-3">
          <div className="group rounded-[2rem] border border-white/15 bg-white/[0.08] p-6 shadow-[0_18px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.11] hover:shadow-[0_25px_90px_rgba(255,159,252,0.16)]">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5227FF] to-[#FF9FFC] text-lg font-black shadow-[0_0_35px_rgba(255,159,252,0.35)] transition group-hover:scale-110">
              N
            </div>

            <p className="text-sm font-semibold text-zinc-400">Full Name</p>

            <h2 className="mt-2 text-xl font-black text-white">
              {user.firstName} {user.lastName}
            </h2>
          </div>

          <div className="group rounded-[2rem] border border-white/15 bg-white/[0.08] p-6 shadow-[0_18px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.11] hover:shadow-[0_25px_90px_rgba(82,39,255,0.18)]">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-400 to-purple-600 text-lg font-black shadow-[0_0_35px_rgba(82,39,255,0.35)] transition group-hover:scale-110">
              @
            </div>

            <p className="text-sm font-semibold text-zinc-400">Email</p>

            <h2 className="mt-2 break-words text-xl font-black text-white">
              {user.email}
            </h2>
          </div>

          <div className="group rounded-[2rem] border border-white/15 bg-white/[0.08] p-6 shadow-[0_18px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.11] hover:shadow-[0_25px_90px_rgba(229,151,69,0.16)]">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-pink-500 text-lg font-black shadow-[0_0_35px_rgba(229,151,69,0.35)] transition group-hover:scale-110">
              Y
            </div>

            <p className="text-sm font-semibold text-zinc-400">Birth Year</p>

            <h2 className="mt-2 text-xl font-black text-white">
              {user.birthYear}
            </h2>
          </div>
        </section>

        {/* Next sections placeholder */}
        <section className="mt-8 rounded-[2rem] border border-white/15 bg-white/[0.07] p-8 shadow-[0_18px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
        
 
        </section>
      </main>
    </div>
  );
}