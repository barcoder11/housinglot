import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Housing Helper NYC",
  description: "Simple NYC housing helper estimate tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
