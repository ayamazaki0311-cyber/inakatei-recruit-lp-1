import type { Metadata } from "next";
import "./globals.css";
import { siteInfo } from "@/constants/lp";

export const metadata: Metadata = {
  title: siteInfo.metaTitle,
  description: siteInfo.metaDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
