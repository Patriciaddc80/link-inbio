import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";
import VercelAnalytics from "./components/VercelAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://link-inbio.vercel.app"),
  title:
    "Patricia Diaz - Desarrollo Web Profesional y Diseño Web para Pymes | Link in Bio",
  description:
    "Desarrollo web y diseño web profesional para pymes. Creación de páginas web modernas y optimizadas para impulsar tu presencia digital. Servicios de desarrollo web local.",
  keywords: [
    "desarrollo web",
    "diseño web",
    "páginas web para pymes",
    "desarrollador web profesional",
    "diseño web profesional",
    "creación de páginas web",
    "optimización web",
    "presencia digital",
    "desarrollo web local",
    "diseño web local",
    "Patricia Diaz",
    "PatriciaDiaz.dev",
    "desarrollo web España",
    "diseño web España",
  ],
  authors: [{ name: "Patricia Diaz" }],
  creator: "Patricia Diaz",
  publisher: "PatriciaDiaz.dev",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://link-inbio.vercel.app",
    siteName: "PatriciaDiaz.dev",
    title: "Patricia Diaz - Desarrollo Web Profesional y Diseño Web para Pymes",
    description:
      "Desarrollo web y diseño web profesional para pymes. Creación de páginas web modernas y optimizadas para impulsar tu presencia digital.",
    images: [
      {
        url: "/images/imagen-perfil.jpg",
        width: 1200,
        height: 630,
        alt: "Patricia Diaz - Desarrolladora Web Profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Patricia Diaz - Desarrollo Web Profesional y Diseño Web para Pymes",
    description:
      "Desarrollo web y diseño web profesional para pymes. Creación de páginas web modernas y optimizadas.",
    images: ["/images/imagen-perfil.jpg"],
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
  alternates: {
    canonical: "https://link-inbio.vercel.app",
  },
  verification: {
    google: "zc8NNIxYwHpmBGn0uZmkaXuLaWsdtxZ6IsP6zR5CSww",
  },
  icons: {
    icon: [
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        {children}
        <VercelAnalytics />
      </body>
    </html>
  );
}
