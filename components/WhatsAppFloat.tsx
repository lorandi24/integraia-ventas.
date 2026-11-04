import { WA_DEFAULT } from "@/lib/site";
import { WhatsAppIcon } from "./Icon";

export function WhatsAppFloat() {
  return (
    <a
      href={WA_DEFAULT}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="print:hidden fixed right-4 bottom-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 transition hover:scale-105 sm:right-6 sm:bottom-6"
    >
      <span className="animate-pulse-ring absolute inset-0 rounded-full bg-[#25D366]" aria-hidden="true" />
      <WhatsAppIcon className="relative h-7 w-7" />
    </a>
  );
}
