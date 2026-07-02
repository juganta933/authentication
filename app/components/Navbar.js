"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkUser() {
      try {
        const res = await fetch("/api/me", {
          cache: "no-store",
        });

        const result = await res.json();

        if (result.success) {
          setUser(result.user);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.log("Navbar auth check error:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    checkUser();
  }, [pathname]);

  async function handleLogout() {
    try {
      const res = await fetch("/api/logout", {
        method: "POST",
      });

      const result = await res.json();

      if (result.success) {
        setUser(null);
        router.push("/login");
        router.refresh();
      }
    } catch (error) {
      console.log("Logout error:", error);
    }
  }

  function isActive(path) {
    return pathname === path;
  }

  const navLinkClass = (path) =>
    `relative overflow-hidden rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300
     before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-transform before:duration-700
     hover:before:translate-x-full
     ${
       isActive(path)
         ? "bg-white/15 text-white shadow-[0_0_25px_rgba(255,159,252,0.25)]"
         : "text-white/70 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white hover:shadow-[0_8px_30px_rgba(255,159,252,0.15)]"
     }`;

  return (
    <nav className="sticky top-0 z-[999] w-full overflow-hidden border-b border-white/10 bg-black/50 px-5 py-4 text-white shadow-[0_10px_40px_rgba(0,0,0,0.45)] backdrop-blur-2xl backdrop-saturate-200 md:px-10">
      <div className="pointer-events-none absolute left-1/2 top-[-90px] h-40 w-[460px] -translate-x-1/2 animate-pulse rounded-full bg-[radial-gradient(circle,rgba(255,159,252,0.35),rgba(82,39,255,0.2),transparent_70%)] blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">
        <Link
          href="/"
          className="group flex items-center gap-3 text-2xl font-extrabold tracking-tight transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
        >
          <span className="h-4 w-4 rounded-full bg-gradient-to-br from-[#FF9FFC] via-[#5227FF] to-[#e59745] shadow-[0_0_20px_rgba(255,159,252,0.9),0_0_45px_rgba(82,39,255,0.7)] transition-all duration-300 group-hover:scale-125" />
          <span className="bg-gradient-to-r from-white via-pink-100 to-purple-200 bg-clip-text text-transparent group-hover:drop-shadow-[0_0_18px_rgba(255,159,252,0.6)]">
            Authentication
          </span>
        </Link>

        <div className="flex flex-wrap items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.06] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl">
          <Link href="/" className={navLinkClass("/")}>
            Home
          </Link>

          {loading ? null : user ? (
            <>
             <Link href="/dashboard" className={navLinkClass("/dashboard")}>
      Dashboard
    </Link>

              <div className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.12] hover:shadow-[0_10px_35px_rgba(82,39,255,0.25)]">
                <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_14px_rgba(34,197,94,0.9)] group-hover:scale-125" />
                {user.firstName} {user.lastName}
              </div>
              <button
                onClick={handleLogout}
                className="group relative overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-rose-500 via-pink-400 to-purple-600 px-5 py-2.5 text-sm font-extrabold text-white shadow-[0_14px_38px_rgba(255,74,112,0.28),inset_0_1px_0_rgba(255,255,255,0.4)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_22px_55px_rgba(255,159,252,0.38),0_12px_38px_rgba(82,39,255,0.35)] active:translate-y-0 active:scale-95"
              >
                <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45),transparent_28%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.18),transparent_35%)] opacity-80 transition-transform duration-300 group-hover:scale-110" />

                <span className="absolute -left-16 top-[-80%] h-[260%] w-12 rotate-[22deg] bg-gradient-to-r from-transparent via-white/70 to-transparent transition-all duration-700 group-hover:left-[130%]" />

                <span className="relative z-10">Logout</span>
              </button>
            </>

          ) : (
            <>
              <Link href="/login" className={navLinkClass("/login")}>
                Login
              </Link>

              <Link
                href="/signup"
                className="group relative overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-[#5227FF] via-[#FF9FFC] to-[#e59745] px-5 py-2.5 text-sm font-extrabold text-white shadow-[0_14px_38px_rgba(82,39,255,0.35),0_6px_18px_rgba(255,159,252,0.18),inset_0_1px_0_rgba(255,255,255,0.45)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:tracking-wide hover:brightness-110 hover:saturate-150 hover:shadow-[0_22px_55px_rgba(255,159,252,0.4),0_12px_38px_rgba(82,39,255,0.4)] active:translate-y-0 active:scale-95"
              >
                <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45),transparent_28%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.18),transparent_35%)] opacity-80 transition-transform duration-300 group-hover:scale-110" />

                <span className="absolute -left-16 top-[-80%] h-[260%] w-12 rotate-[22deg] bg-gradient-to-r from-transparent via-white/70 to-transparent transition-all duration-700 group-hover:left-[130%]" />

                <span className="relative z-10">Signup</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}