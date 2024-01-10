import type { Metadata } from "next";
import "./globals.css";

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
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
