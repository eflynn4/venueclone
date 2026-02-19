import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Image from "next/image";
import Footer from "../components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VenueHorn",
  description: "Discover your dream venue.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />

        <div className="relative bg-black min-h-[calc(100vh-60px)] overflow-hidden">
          <Image 
            src="/homeBG.png"
            alt=""
            fill
            priority
            className="object-cover opacity-70 z-0"
          />

          <div className="absolute inset-0 bg-gray-500 opacity-50 z-10" />


          <div className="pointer-events-none absolute inset-y-0 left-0 w-[35%] z-20
            bg-gradient-to-r from-[#1D4E89]/70 via-[#1D4E89]/30 to-transparent" />


          <div className="pointer-events-none absolute inset-y-0 right-0 w-[35%] z-20
            bg-gradient-to-l from-[#1D4E89]/70 via-[#1D4E89]/30 to-transparent" />
            
          <div className="relative z-30">
            {children}
          </div>
        </div>

        <Footer />
      </body>
    </html>
  );
}
