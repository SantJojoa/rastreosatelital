export const WHATSAPP_NUMBER = "573157003022";
export const CONTACT_EMAIL = "servicliente@sistemasvirtualesltda.com";

// Endpoint que recibe el formulario de demo (p. ej. Formspree: https://formspree.io/f/xxxx).
// Si queda vacío, el formulario envía los datos por WhatsApp.
export const DEMO_FORM_ENDPOINT = ""; // TODO: URL real del endpoint

// Redes sociales: las que estén vacías no se muestran.
export const SOCIAL = {
  facebook: "https://www.facebook.com/rastreosatelitalsv",
  instagram: "https://www.instagram.com/rastreo_svza/",
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
};

export function quoteUrl(serviceName?: string) {
  const text = serviceName
    ? `Hola, quiero solicitar una cotización del servicio de ${serviceName}.`
    : "Hola, quiero solicitar una cotización.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
