import './globals.css'
import type { Metadata } from 'next'

import { Open_Sans } from "next/font/google";
import { Outfit } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: 'Irani USA | Coming Soon!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light ">
      <body
        className={`overflow-hidden w-full ${openSans.variable} ${outfit.variable}`}
      >
            {children}
      </body>
    </html>
  );
}
