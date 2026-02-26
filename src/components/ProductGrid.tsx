import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

const ProductGrid = ({ products }: { products: any[] }) => {
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

  return (
    <section id="catalogo" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-4">Catálogo</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Nossos <span className="text-gradient-gold">doces</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => setSelectedProduct(product)}
              index={i}
            />
          ))}
        </div>
      </div>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </section>
  );
};

export default ProductGrid;
