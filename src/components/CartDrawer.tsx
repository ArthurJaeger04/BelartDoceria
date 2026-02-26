import { X, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, total, clearCart } = useCart();

  const handleWhatsAppCheckout = () => {
    const message = items
      .map(
        (item) =>
          `• ${item.product.name} (${item.priceOption.label}) x${item.amount} = R$ ${(item.priceOption.price * item.amount).toFixed(2).replace(".", ",")}`
      )
      .join("\n");

    const text = encodeURIComponent(
      `Olá! Gostaria de fazer o seguinte pedido:\n\n${message}\n\nTotal: R$ ${total.toFixed(2).replace(".", ",")}`
    );

    window.open(`https://wa.me/+5534996551080?text=${text}`, "_blank");
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-md bg-background border-l border-border flex flex-col">
        <SheetHeader className="pb-4 border-b border-border">
          <SheetTitle className="font-display text-xl text-foreground flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Carrinho
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
            <ShoppingBag className="h-12 w-12 text-muted-foreground/40" />
            <p className="font-body text-muted-foreground">Seu carrinho está vazio</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {items.map((item, i) => (
                <div
                  key={`${item.product.id}-${item.priceOption.label}-${i}`}
                  className="flex items-start gap-3 p-3 rounded-md bg-card border border-border"
                >
                  <div className="flex-1">
                    <h4 className="font-body text-sm font-semibold text-foreground">{item.product.name}</h4>
                    <p className="font-body text-xs text-muted-foreground">
                      {item.priceOption.label} × {item.amount}
                    </p>
                    <p className="font-body text-sm font-semibold text-accent mt-1">
                      R$ {(item.priceOption.price * item.amount).toFixed(2).replace(".", ",")}
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(i)}
                    className="p-1.5 rounded-md hover:bg-destructive/10 transition-colors"
                    aria-label="Remover item"
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-body text-sm text-muted-foreground">Total</span>
                <span className="font-display text-xl font-bold text-foreground">
                  R$ {total.toFixed(2).replace(".", ",")}
                </span>
              </div>

              <button
                onClick={handleWhatsAppCheckout}
                className="w-full font-body font-semibold text-sm py-3.5 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Finalizar pelo WhatsApp
              </button>

              <button
                onClick={clearCart}
                className="w-full font-body text-sm py-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                Limpar carrinho
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
