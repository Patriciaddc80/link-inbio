import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Project 1 — Invitaciones digitales",
  description: "Demo de invitaciones digitales para bodas.",
};

export default function Project1Page() {
  return (
    <main className="container mx-auto max-w-md px-6 py-12">
      <h1 className="text-2xl font-semibold mb-4">
        Invitaciones Digitales — Demo
      </h1>
      <p className="text-gray-700">
        Demostración de una invitación digital para bodas, fácil de compartir y
        personalizar.
      </p>

      <div className="mt-6">
        <a
          href="https://prototipo-wedding1.netlify.app/"
          className="text-green-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver demo en Netlify
        </a>
      </div>

      <div className="mt-8">
        <Link
          href="/portfolio"
          className="text-sm text-gray-600 hover:underline"
        >
          ← Volver al portfolio
        </Link>
      </div>
    </main>
  );
}
