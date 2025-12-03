import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contacto — Patricia Diaz",
  description:
    "Contacta con Patricia Diaz para servicios de desarrollo y diseño web.",
};

export default function ContactPage() {
  return (
    <main className="container mx-auto max-w-md px-6 py-12">
      <h1 className="text-2xl font-semibold mb-4">Contacto</h1>
      <p className="text-gray-700">
        Puedes escribirme o agendar una cita mediante Calendly.
      </p>

      <ul className="mt-6 space-y-2 text-gray-800">
        <li>
          <strong>Correo:</strong>{" "}
          <a
            href="mailto:hola@patriciadiaz.dev"
            className="text-green-600 hover:underline"
          >
            hola@patriciadiaz.dev
          </a>
        </li>
        <li>
          <strong>Teléfono:</strong>{" "}
          <a href="tel:+34123456789" className="text-green-600 hover:underline">
            +34 123 456 789
          </a>
        </li>
        <li>
          <strong>Calendly:</strong>{" "}
          <a
            href="https://calendly.com/patriciadiaz-dev/30min"
            className="text-green-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar una cita
          </a>
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
