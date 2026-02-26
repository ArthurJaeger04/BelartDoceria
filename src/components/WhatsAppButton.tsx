import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+5534996551080"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[hsl(142,70%,40%)] text-[hsl(0,0%,100%)] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppButton;
