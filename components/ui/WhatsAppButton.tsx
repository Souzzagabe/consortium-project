"use client";

// Configure your WhatsApp number here (country code + number, no spaces or dashes)
const WHATSAPP_NUMBER = "555197147766";
const WHATSAPP_MESSAGE = "Olá! Gostaria de saber mais sobre os planos de consórcio.";

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com consultor pelo WhatsApp"
      className="whatsapp-fab"
    >
      {/* Official WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="w-7 h-7"
        aria-hidden="true"
      >
        <path d="M16.003 0C7.165 0 .003 7.163.003 16c0 2.822.737 5.476 2.028 7.786L0 32l8.448-2.013A15.942 15.942 0 0016.003 32C24.837 32 32 24.837 32 16S24.837 0 16.003 0zm0 29.19a13.14 13.14 0 01-6.705-1.83l-.48-.286-4.972 1.185 1.235-4.838-.314-.497A13.14 13.14 0 012.81 16c0-7.27 5.916-13.19 13.19-13.19S29.19 8.73 29.19 16 23.277 29.19 16.003 29.19zm7.234-9.865c-.397-.198-2.346-1.157-2.71-1.29-.363-.132-.628-.198-.892.199-.264.397-1.025 1.29-1.256 1.555-.231.264-.462.298-.858.1-.396-.199-1.674-.617-3.19-1.967-1.178-1.05-1.974-2.348-2.205-2.745-.231-.397-.024-.611.173-.809.178-.177.397-.462.595-.693.198-.231.264-.397.397-.661.132-.264.066-.496-.033-.694-.1-.198-.893-2.152-1.223-2.946-.322-.773-.65-.668-.893-.68l-.76-.013c-.264 0-.694.099-1.058.496-.363.397-1.388 1.357-1.388 3.31 0 1.954 1.422 3.842 1.62 4.109.199.264 2.8 4.274 6.782 5.993.948.409 1.688.653 2.265.836.952.303 1.82.26 2.505.158.764-.114 2.346-.958 2.677-1.884.33-.925.33-1.718.231-1.883-.099-.165-.363-.264-.76-.462z" />
      </svg>
    </a>
  );
}
