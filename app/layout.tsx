import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "M Naufal Azaqi — Frontend Developer",
  description:
    "Portfolio of M Naufal Azaqi, a frontend web developer building high-performance web applications and thoughtful digital experiences.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "M Naufal Azaqi — Frontend Developer",
    description: "Building useful things for the web.",
    type: "website"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
