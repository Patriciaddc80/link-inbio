export default function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://link-inbio.vercel.app/#localbusiness",
    "name": "PatriciaDiaz.dev",
    "legalName": "Patricia Diaz",
    "image": "https://link-inbio.vercel.app/images/imagen-perfil.jpg",
    "url": "https://link-inbio.vercel.app",
    "telephone": "",
    "email": "",
    "description": "Desarrollo web y diseño web profesional para pymes. Creación de páginas web modernas y optimizadas para impulsar tu presencia digital.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ES",
      "addressLocality": "",
      "streetAddress": ""
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "",
      "longitude": ""
    },
    "sameAs": [
      "https://patriciadiaz.dev",
      "https://patriciadiaz.dev/portfolio"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "España"
    },
    "serviceType": [
      "Desarrollo Web",
      "Diseño Web",
      "Creación de Páginas Web",
      "Optimización Web",
      "Desarrollo Web para Pymes"
    ],
    "priceRange": "$$"
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://link-inbio.vercel.app/#person",
    "name": "Patricia Diaz",
    "alternateName": "PatriciaDiaz.dev",
    "url": "https://link-inbio.vercel.app",
    "image": "https://link-inbio.vercel.app/images/imagen-perfil.jpg",
    "jobTitle": "Desarrolladora Web y Diseñadora Web",
    "description": "Desarrolladora web profesional especializada en desarrollo y diseño web para pymes",
    "knowsAbout": [
      "Desarrollo Web",
      "Diseño Web",
      "Creación de Páginas Web",
      "Optimización Web"
    ],
    "sameAs": [
      "https://patriciadiaz.dev",
      "https://patriciadiaz.dev/portfolio"
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://link-inbio.vercel.app"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

