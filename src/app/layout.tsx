import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { ReactNode, createContext, useState } from "react";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "LO - Order Book",
  description: "Created by Temi Labinjo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
