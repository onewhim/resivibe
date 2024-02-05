import type { Metadata } from "next";
import type { Viewport } from "next";
import { Toaster } from "sonner";

import "./globals.css";

export const viewport: Viewport = {
  themeColor: "white",
};

export const metadata: Metadata = {
  title: "Resivibe",
  description: "🎉Modern private presence calculator for resident/citizenship.",
  icons: [
    { rel: "shortcut icon", url: "/favicon.ico", type: "image/x-icon" },
    { rel: "icon", url: "https://cdn.cloudwhim.com/resivibe-logo.svg" },
    {
      rel: "apple-touch-icon",
      url: "https://cdn.cloudwhim.com/resivibe-logo-mac.png",
    },
    {
      rel: "mask-icon",
      url: "https://cdn.cloudwhim.com/resivibe-logo.svg",
      color: "#FFFFFF",
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
