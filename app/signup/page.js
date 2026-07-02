"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthYear: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        setMessage(result.message);
        router.push("/dashboard");
      } else {
        setMessage(result.message);
      }
    } catch (error) {
      console.log("Signup error:", error);
      setMessage("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Static glow background */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-black">
        <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/20 blur-[140px]" />
        <div className="absolute right-[-120px] top-[120px] h-[320px] w-[320px] rounded-full bg-pink-400/20 blur-[100px]" />
        <div className="absolute bottom-[-120px] left-[80px] h-[320px] w-[320px] rounded-full bg-orange-400/20 blur-[100px]" />
      </div>

      <div className="pointer-events-none fixed inset-0 z-10 bg-black/35" />

      <main className="relative z-20 flex min-h-screen items-center justify-center px-6 py-20">
        <div className="w-full max-w-xl rounded-[2rem] border border-white/15 bg-white/[0.08] p-8 shadow-[0_25px_100px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-2xl">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5227FF] via-[#FF9FFC] to-[#e59745] text-2xl font-black shadow-[0_0_40px_rgba(255,159,252,0.45)] transition duration-300 hover:scale-110 hover:rotate-6">
              +
            </div>

            <h1 className="bg-gradient-to-r from-white via-pink-200 to-purple-300 bg-clip-text text-4xl font-black tracking-tight text-transparent">
              Create Account
            </h1>

            <p className="mt-3 text-sm text-zinc-300">
              Test the process and Trust the process.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="group">
                <label className="mb-2 block text-sm font-semibold text-white/80 transition group-focus-within:text-pink-200">
                  First Name
                </label>

                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-zinc-500 hover:border-white/25 hover:bg-black/45 focus:border-pink-300/60 focus:bg-black/50 focus:shadow-[0_0_30px_rgba(255,159,252,0.18)]"
                />
              </div>

              <div className="group">
                <label className="mb-2 block text-sm font-semibold text-white/80 transition group-focus-within:text-purple-200">
                  Last Name
                </label>

                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-zinc-500 hover:border-white/25 hover:bg-black/45 focus:border-purple-300/60 focus:bg-black/50 focus:shadow-[0_0_30px_rgba(82,39,255,0.22)]"
                />
              </div>
            </div>

            <div className="group">
              <label className="mb-2 block text-sm font-semibold text-white/80 transition group-focus-within:text-orange-200">
                Birth Year
              </label>

              <input
                type="number"
                name="birthYear"
                placeholder="Birth Year"
                value={formData.birthYear}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-zinc-500 hover:border-white/25 hover:bg-black/45 focus:border-orange-300/60 focus:bg-black/50 focus:shadow-[0_0_30px_rgba(229,151,69,0.2)]"
              />
            </div>

            <div className="group">
              <label className="mb-2 block text-sm font-semibold text-white/80 transition group-focus-within:text-pink-200">
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-zinc-500 hover:border-white/25 hover:bg-black/45 focus:border-pink-300/60 focus:bg-black/50 focus:shadow-[0_0_30px_rgba(255,159,252,0.18)]"
              />
            </div>

            <div className="group">
              <label className="mb-2 block text-sm font-semibold text-white/80 transition group-focus-within:text-purple-200">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="At least 8 characters"
                value={formData.password}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-zinc-500 hover:border-white/25 hover:bg-black/45 focus:border-purple-300/60 focus:bg-black/50 focus:shadow-[0_0_30px_rgba(82,39,255,0.22)]"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group relative w-full overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-[#5227FF] via-[#FF9FFC] to-[#e59745] px-6 py-3.5 text-sm font-extrabold text-white shadow-[0_20px_60px_rgba(82,39,255,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:tracking-wide hover:brightness-110 hover:saturate-150 hover:shadow-[0_25px_80px_rgba(255,159,252,0.4)] active:translate-y-0 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45),transparent_28%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.2),transparent_35%)] opacity-80 transition-transform duration-300 group-hover:scale-110" />

              <span className="absolute -left-16 top-[-80%] h-[260%] w-12 rotate-[22deg] bg-gradient-to-r from-transparent via-white/70 to-transparent transition-all duration-700 group-hover:left-[130%]" />

              <span className="relative z-10 flex items-center justify-center gap-2">
                {loading ? "Creating account..." : "Sign Up"}
                {!loading && (
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                )}
              </span>
            </button>
          </form>

          {message && (
            <p
              className={`mt-5 rounded-2xl border px-4 py-3 text-center text-sm font-semibold ${
                message.toLowerCase().includes("successful")
                  ? "border-green-400/20 bg-green-400/10 text-green-200"
                  : "border-red-400/20 bg-red-400/10 text-red-200"
              }`}
            >
              {message}
            </p>
          )}

          <p className="mt-7 text-center text-sm text-zinc-400">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-bold text-pink-200 transition hover:text-white hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}