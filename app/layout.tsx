import type { Metadata } from "next";
import {
  Quicksand,
  Lora,
} from "next/font/google";
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
  title: "Dev Overflow",
  description:
    "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
  icons: {
    icon: "/images/site-logo.svg",
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
