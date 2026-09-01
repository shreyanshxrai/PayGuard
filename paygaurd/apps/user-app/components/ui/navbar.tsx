"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { logout } from "@/lib/api/auth";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    try {
      await logout();

      router.push("/signin");
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <nav className="border-b border-gray-800 bg-slate-950">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          PayGaurd AI
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-white transition-colors hover:text-cyan-400"
          >
            Home
          </Link>

          <Link
            href="/dashboard"
            className="text-white transition-colors hover:text-cyan-400"
          >
            Dashboard
          </Link>
        </div>

        {/* Landing Page Buttons */}
        {pathname === "/" && (
          <div className="flex items-center gap-4">
            <Link
              href="/signin"
              className="rounded-full bg-blue-400 px-4 py-2 text-white hover:bg-blue-600"
            >
              Sign In
            </Link>

            <Link
              href="/signup"
              className="rounded-full bg-blue-400 px-4 py-2 text-white hover:bg-blue-700"
            >
              Get Started
            </Link>
          </div>
        )}

        {/* Dashboard Logout Button */}
        {pathname.startsWith("/dashboard") && (
          <button
            onClick={handleLogout}
            className="rounded-full bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
