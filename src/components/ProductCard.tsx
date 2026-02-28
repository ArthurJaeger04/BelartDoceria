import type { Product } from "@/data/products";
import brigadeiro from "@/assets/brigadeiro.png";
import beijinho from "@/assets/beijinho.png";
import doceDeLeite from "@/assets/doce-de-leite.png";
import assorted from "@/assets/assorted-truffles.png";
import Confete from "@/assets/Confete.jpeg";
import oreo from "@/assets/Oreo.png";
import paçoca from "@/assets/Paçoca.png";
import maracuja from "@/assets/Maracuja.png";
import nuttela from "@/assets/Nuttela.png";

const imageMap: Record<string, string> = {
  brigadeiro,
  beijinho,
  "doce-de-leite": doceDeLeite,
  assorted,
  confete: Confete,
  oreo,
  paçoca,
  maracuja,
  nuttela,
};

interface ProductCardProps {
  product: Product;
  onClick: () => void;
  index: number;
}

const ProductCard = ({ product, onClick, index }: ProductCardProps) => {
  const img = imageMap[product.image] || assorted;

  return (
    <button
      onClick={onClick}
      className="group text-left rounded-lg overflow-hidden bg-card border border-border hover:border-accent/40 transition-all duration-500 hover:shadow-xl hover:shadow-accent/5 opacity-0 animate-fade-up"
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={img}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-foreground mb-1">{product.name}</h3>
        <p className="font-body text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
        <p className="font-body text-sm font-semibold text-accent">
          a partir de R$ {product.priceOptions[0].price.toFixed(2).replace(".", ",")}
        </p>
      </div>
    </button>
  );
};

export default ProductCard;
