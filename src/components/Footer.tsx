import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-xl font-bold text-foreground">
              Belart<span className="text-gradient-gold"> Doceria</span>
            </p>
            <p className="font-body text-sm text-muted-foreground mt-1">
              Doces artesanais feitos com amor
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/belart.doceria"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram className="h-4 w-4" />
              @belart.doceria
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Belart Doceria. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
