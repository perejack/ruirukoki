import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/products";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink("Hello Ruiru Mabati Factory, I'd like to talk to you.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Talk to us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-whatsapp-foreground shadow-elevated transition hover:scale-105 animate-pulse-ring sm:px-5"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="text-sm font-semibold">Talk to Us</span>
    </a>
  );
}
