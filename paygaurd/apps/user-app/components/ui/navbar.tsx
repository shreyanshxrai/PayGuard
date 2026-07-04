"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
  return (
    <nav className="border-b border-gray-800  bg-slate-950">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          PayGaurd AI
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <Link href="/" className="text-white hover:text-cyan-400 transition-colors">
            Home
          </Link>

          <Link
            href="/dashboard"
            className="text-white hover:text-cyan-400 transition-colors"
          >
            Dashboard
          </Link>

          

          
        </div>

        {/* Auth Buttons */}
        { pathname === '/' &&(
        <div className="flex items-center gap-4">
          <Link
            href="/signin"
            className="rounded-full  px-4 py-2 hover:bg-blue-600 bg-blue-400 text-white"
          >
            Sign In
          </Link>

          <Link
            href="/signup"
            className="rounded-full bg-blue-400 px-4 py-2 text-white hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>)}
      </div> 
    </nav>
  );
}