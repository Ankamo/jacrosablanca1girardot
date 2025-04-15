// src/app/layout.tsx
"use client";

import { Inter } from "next/font/google";
import Header from "@/components/header/page";
import NavBar from "@/components/nav/page";
import Footer from "@/components/footer/page";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div> {/* Removed padding/margin between Header and NavBar */}
            <NavBar />
          </div>
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
