import { Camera } from "lucide-react";

export const InstagramButton = () => {
  return (
    <a
      href="https://www.instagram.com/ferza.hechoamano/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visita nuestro Instagram"
      className="
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-full
        border
        border-[#C7A15A]
        px-5
        py-3
        text-[#786049]
        transition-all
        duration-300
        hover:bg-[#C7A15A]
        hover:text-white
      "
    >
      <Camera  size={20} />
      <span className="text-sm font-medium">
        Síguenos en Instagram
      </span>
    </a>
  );
};