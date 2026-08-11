import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pintos-tattoo-bcn.vercel.app"),
  title: "Pintos Tattoo & Piercing — Barcelona",
  description:
    "Tattoo, piercing y diseño a medida en Carrer del Comte d’Urgell 59, Barcelona. Reserva o pide presupuesto a Pintos.",
  openGraph: {
    title: "Pintos Tattoo & Piercing — Tu idea no viene en catálogo",
    description: "Tattoo y piercing en Sant Antoni, Barcelona.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${body.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  );
}
