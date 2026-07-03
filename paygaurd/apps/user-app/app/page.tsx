"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function home() {
  const Router = useRouter();
  return (
   <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
          AI Powered Payment Fraud Detection
        </span>

        <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-tight md:text-6xl">
          Secure Every Payment with
          <span className="block text-cyan-400">Intelligent Fraud Detection</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-400">
          Detect suspicious transactions in real time, protect users from fraud,
          and gain insights with AI-powered security.
        </p>

        <div className="mt-10 flex gap-4">
          <button onClick={()=>{Router.push("/signup")}} className="rounded-lg bg-cyan-500 px-6 py-3 font-medium transition hover:bg-cyan-600">
            Get Started
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Why Choose PayGaurd AI?
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="mb-3 text-xl font-semibold">
              Real-Time Monitoring
            </h3>

            <p className="text-slate-400">
              Monitor every transaction instantly and detect suspicious
              activities.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="mb-3 text-xl font-semibold">
              AI Risk Analysis
            </h3>

            <p className="text-slate-400">
              Analyze transactions using intelligent fraud detection models.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="mb-3 text-xl font-semibold">
              Instant Alerts
            </h3>

            <p className="text-slate-400">
              Get notified immediately whenever a high-risk transaction is
              detected.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
