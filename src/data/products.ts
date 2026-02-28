export interface PriceOption {
  label: string;
  quantity: number;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  category: "classico" | "especial";
  image: string;
  priceOptions: PriceOption[];
}

export const products: Product[] = [
  {
    id: "brigadeiro",
    name: "Brigadeiro Tradicional",
    description: "O clássico brigadeiro feito com cacau 50%. Coberto com flocos de chocolate.",
    category: "classico",
    image: "brigadeiro",
    priceOptions: [
      { label: "Unidade", quantity: 1, price: 3.50 },
      { label: "50 unidades", quantity: 50, price: 125.00 },
      { label: "100 unidades", quantity: 100, price: 215.00 },
    ],
  },
  {
    id: "beijinho",
    name: "Beijinho",
    description: "Delicado beijinho de coco ralado fino.",
    category: "classico",
    image: "beijinho",
    priceOptions: [
      { label: "Unidade", quantity: 1, price: 3.50 },
      { label: "50 unidades", quantity: 50, price: 125.00 },
      { label: "100 unidades", quantity: 100, price: 215.00 },
    ],
  },
  {
    id: "doce-de-leite",
    name: "Doce de Leite",
    description: "Brigadeiro gourmet de doce de leite, com textura cremosa e sabor intenso. Uma experiência única.",
    category: "especial",
    image: "doce-de-leite",
    priceOptions: [
      { label: "Unidade", quantity: 1, price: 4.00 },
      { label: "50 unidades", quantity: 50, price: 140.00 },
      { label: "100 unidades", quantity: 100, price: 230.00 },
    ],
  },
  {
    id: "nutella",
    name: "Leite em Pó com Nutella",
    description: "Combinação irresistível de leite em pó com creme de avelã.",
    category: "especial",
    image: "nuttela",
    priceOptions: [
      { label: "Unidade", quantity: 1, price: 4.00 },
      { label: "50 unidades", quantity: 50, price: 140.00 },
      { label: "100 unidades", quantity: 100, price: 230.00 },
    ],
  },
  {
    id: "maracuja",
    name: "Maracujá",
    description: "Brigadeiro tropical de maracujá, com o equilíbrio perfeito entre doce e ácido. Fresco e sofisticado.",
    category: "especial",
    image: "maracuja",
    priceOptions: [
      { label: "Unidade", quantity: 1, price: 4.00 },
      { label: "50 unidades", quantity: 50, price: 140.00 },
      { label: "100 unidades", quantity: 100, price: 230.00 },
    ],
  },
  {
    id: "confete",
    name: "Confete",
    description: "Brigadeiro divertido coberto com confetes coloridos de chocolate. Perfeito para festas e celebrações.",
    category: "especial",
    image: "confete",
    priceOptions: [
      { label: "Unidade", quantity: 1, price: 4.00 },
      { label: "50 unidades", quantity: 50, price: 140.00 },
      { label: "100 unidades", quantity: 100, price: 230.00 },
    ],
  },
  {
    id: "pacoca",
    name: "Paçoca",
    description: "O sabor brasileiro da paçoca em forma de brigadeiro gourmet. Crocante por fora, cremoso por dentro.",
    category: "especial",
    image: "paçoca",
    priceOptions: [
      { label: "Unidade", quantity: 1, price: 4.00 },
      { label: "50 unidades", quantity: 50, price: 140.00 },
      { label: "100 unidades", quantity: 100, price: 230.00 },
    ],
  },
  {
    id: "oreo",
    name: "Oreo",
    description: "Brigadeiro gourmet com pedaços de biscoito Oreo.",
    category: "especial",
    image: "oreo",
    priceOptions: [
      { label: "Unidade", quantity: 1, price: 4.00 },
      { label: "50 unidades", quantity: 50, price: 140.00 },
      { label: "100 unidades", quantity: 100, price: 230.00 },
    ],
  },
];
