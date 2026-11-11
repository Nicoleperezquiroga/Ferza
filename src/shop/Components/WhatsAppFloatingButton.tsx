
import { MessageCircle } from "lucide-react";

export const WhatsAppFloatingButton = () => {
  const telefono = "56991386001";
  const mensaje =
    "¡Hola FERZA! Me gustaría consultar por sus productos.";

  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar a FERZA por WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        w-14 h-14
        rounded-full
        bg-[#25D366]
        text-white
        shadow-lg
        transition-all duration-300
        hover:scale-110 hover:bg-[#1DA851]
      "
    >
      <MessageCircle size={28} />
    </a>
  );
};
