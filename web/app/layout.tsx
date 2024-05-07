import type { Metadata } from "next";
import type { Viewport } from "next";
import { Toaster } from "sonner";

import "./globals.css";

export const viewport: Viewport = {
  themeColor: "white",
};

export const metadata: Metadata = {
  title: "Resivibe",
  description:
    "🔥 The timeline sharing community.",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
