import { ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const Navbar = () => {
  const { setIsOpen, itemCount } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-2xl font-bold tracking-tight text-foreground">
          Belart<span className="text-gradient-gold"> Doceria</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#sobre" className="font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Sobre
          </a>
          <a href="#catalogo" className="font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Catálogo
          </a>
          <a href="#contato" className="font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Contato
          </a>
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className="relative p-2 rounded-lg hover:bg-secondary transition-colors"
          aria-label="Abrir carrinho"
        >
          <ShoppingBag className="h-5 w-5 text-foreground" />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
