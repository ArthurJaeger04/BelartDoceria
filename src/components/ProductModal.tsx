import { useState } from "react";
import { X, Plus, Minus } from "lucide-react";
import type { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import brigadeiro from "@/assets/brigadeiro.png";
import beijinho from "@/assets/beijinho.png";
import doceDeLeite from "@/assets/doce-de-leite.png";
import assorted from "@/assets/assorted-truffles.png";

const imageMap: Record<string, string> = {
  brigadeiro,
  beijinho,
  "doce-de-leite": doceDeLeite,
  assorted,
};

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  const [selectedOption, setSelectedOption] = useState(0);
  const [amount, setAmount] = useState(1);
  const { addItem } = useCart();

  if (!product) return null;

  const img = imageMap[product.image] || assorted;
  const option = product.priceOptions[selectedOption];

  const handleAdd = () => {
    addItem(product, option, amount);
    setAmount(1);
    setSelectedOption(0);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm animate-fade-in" />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-lg glass-strong rounded-lg overflow-hidden animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-background/60 hover:bg-background transition-colors"
          aria-label="Fechar"
        >
          <X className="h-4 w-4 text-foreground" />
        </button>

        <div className="aspect-video overflow-hidden">
          <img src={img} alt={product.name} className="w-full h-full object-cover" />
        </div>

        <div className="p-6">
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">{product.name}</h2>
          <p className="font-body text-sm text-muted-foreground mb-6 leading-relaxed">{product.description}</p>

          {/* Price options */}
          <div className="flex flex-wrap gap-2 mb-6">
            {product.priceOptions.map((opt, i) => (
              <button
                key={opt.label}
                onClick={() => { setSelectedOption(i); setAmount(1); }}
                className={`font-body text-sm px-4 py-2 rounded-md border transition-all ${
                  i === selectedOption
                    ? "border-accent bg-accent/10 text-foreground font-medium"
                    : "border-border text-muted-foreground hover:border-accent/40"
                }`}
              >
                {opt.label} — R$ {opt.price.toFixed(2).replace(".", ",")}
              </button>
            ))}
          </div>

          {/* Amount */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setAmount(Math.max(1, amount - 1))}
                className="p-2 rounded-md border border-border hover:border-accent/40 transition-colors"
              >
                <Minus className="h-4 w-4 text-foreground" />
              </button>
              <span className="font-body text-lg font-semibold text-foreground w-8 text-center">{amount}</span>
              <button
                onClick={() => setAmount(amount + 1)}
                className="p-2 rounded-md border border-border hover:border-accent/40 transition-colors"
              >
                <Plus className="h-4 w-4 text-foreground" />
              </button>
            </div>

            <button
              onClick={handleAdd}
              className="font-body font-semibold text-sm px-6 py-3 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Adicionar — R$ {(option.price * amount).toFixed(2).replace(".", ",")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
