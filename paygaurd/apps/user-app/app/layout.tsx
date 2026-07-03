import "@repo/ui/styles.css";
import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
     
      <body className={GeistSans.className}>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
        </body>
    </html>
  );
}
