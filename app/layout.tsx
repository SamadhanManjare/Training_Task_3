import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blackcoffer | Together We Reinvented",
  description: "Blackcoffer brings top-notch big data analytics and BI services. Together, we can reinvent your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-[#030303] text-white min-h-screen font-sans overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
