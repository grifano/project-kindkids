import type { Metadata } from "next";
import { Quicksand, Lora } from "next/font/google";
import React from "react";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const loraSerif = Lora({
  variable: "--font-lora-serif",
  subsets: ["latin"],
});
const quicksandSans = Quicksand({
  variable: "--font-quicksand-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KindKids – Bringing Hope to Children with Disabilities in Ukraine",
  description:
    "KindKids is a charity initiative uniting people through art and fine dining to support children with disabilities in Ukraine. Join us in making a real impact—one meal, one brushstroke, and one child at a time.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "KindKids – Bringing Hope to Children with Disabilities in Ukraine",
    description:
      "KindKids is a charity initiative uniting people through art and fine dining to support children with disabilities in Ukraine. Join us in making a real impact—one meal, one brushstroke, and one child at a time.",
    url: "https://project-kindkids.vercel.app/",
    siteName: "KindKids",
    images: [
      {
        url: "https://project-kindkids.vercel.app/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "KindKids - Charity Events",
      },
    ],
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksandSans.variable} ${loraSerif.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
