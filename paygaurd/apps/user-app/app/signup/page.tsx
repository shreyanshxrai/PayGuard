export default function signup(){
    return <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-6">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">
            Create Account
          </h1>
          <p className="mt-2 text-slate-400">
            Join PayGaurd AI and secure your payments.
          </p>
        </div>

        <form className="space-y-5">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Shreyansh Rai"
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-500"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="shreyanshtalks@gmail.com"
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="7838246868"
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-500"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="********"
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-cyan-500 px-4 py-3 font-semibold text-white transition hover:bg-cyan-600"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-400">
          Already have an account?{" "}
          <a
            href="/signin"
            className="font-medium text-cyan-400 hover:text-cyan-300"
          >
            Sign In
          </a>
        </p>
      </div>
    </main>
}