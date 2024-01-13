import type { Metadata } from "next";
import type { Viewport } from "next";
import { Toaster } from "sonner";

import "./globals.css";

export const viewport: Viewport = {
  themeColor: "white",
};

export const metadata: Metadata = {
  title: "Resimate",
  description:
    "🎉Modern private open-source presence calculator for resident/citizenship.",
  icons: [
    { rel: "icon", url: "https://cdn.onewhim.com/resimate-logo-round.svg" },
    {
      rel: "apple-touch-icon",
      url: "https://cdn.onewhim.com/resimate-logo-mac.png",
    },
    {
      rel: "mask-icon",
      url: "https://cdn.onewhim.com/resimate-logo-round.svg",
      color: "#000000",
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
