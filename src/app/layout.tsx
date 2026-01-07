import "@/ui/globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { sans, mono } from "@/ui/fonts";

export const metadata: Metadata = {
  title: "talkd.ai",
  description:
    "Open-source software for easy deployment of any LangChain-supported LLM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.className} ${mono.variable} antialiased`}>
        <Header />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
