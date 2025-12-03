import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio - Patricia Diaz",
  description: "Proyectos y trabajos - Patricia Diaz",
};

export default function PortfolioPage() {
  return (
    <main className="container mx-auto max-w-md px-6 py-12">
      <h1 className="text-2xl font-semibold mb-4">Portfolio</h1>
      <p className="text-gray-700">
        Aquí encontrarás algunos proyectos destacados.
      </p>

      <ul className="mt-6 space-y-3">
        <li>
          <Link
            href="/portfolio/project1"
            className="text-green-600 hover:underline"
          >
            Project 1 — Invitaciones digitales (demo)
          </Link>
        </li>
      </ul>

      <div className="mt-8">
        <Link href="/" className="text-sm text-gray-600 hover:underline">
          ← Volver al inicio
        </Link>
      </div>
    </main>
  );
}
