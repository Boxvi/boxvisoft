import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "Boxvi Soft",
    template: "%s | Boxvi Soft",
  },
  description: "Descubre Boxvi Soft, desarrollo web, software y soluciones digitales para tu negocio.",
  openGraph: {
    title: "boxvisoft.com",
    description:
      "Descubre Boxvi Soft, desarrollo web, software y soluciones digitales para tu negocio.",
    url: "https://www.boxvisoft.com",
    siteName: "boxvisoft.com",
    images: [
      {
        url: "https://www.boxvisoft.com/og1.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "BoxviSoft",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon1.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
