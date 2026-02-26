import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const products = [
  {
    id: "brigadeiro",
    name: "Brigadeiro Tradicional",
    description: "O clássico brigadeiro feito com chocolate nobre, leite condensado artesanal e manteiga de qualidade. Coberto com granulado belga.",
    category: "classico",
    image: "brigadeiro",
    priceUNIT: 3.50,
    price50: 125.00,
    price100: 215.00,
  },
  {
    id: "beijinho",
    name: "Beijinho",
    description: "Delicado beijinho de coco ralado fino, preparado com leite condensado cremoso e um toque especial de baunilha.",
    category: "classico",
    image: "beijinho",
    priceUNIT: 3.50,
    price50: 125.00,
    price100: 215.00,
  },
  {
    id: "doce-de-leite",
    name: "Doce de Leite",
    description: "Brigadeiro gourmet de doce de leite argentino, com textura cremosa e sabor intenso. Uma experiência única.",
    category: "especial",
    image: "doce-de-leite",
    priceUNIT: 4.00,
    price50: 140.00,
    price100: 230.00,
  },
  {
    id: "nutella",
    name: "Leite em Pó com Nutella",
    description: "Combinação irresistível de leite em pó com o sabor marcante de Nutella. Coberto com leite em pó premium.",
    category: "especial",
    image: "assorted",
    priceUNIT: 4.00,
    price50: 140.00,
    price100: 230.00,
  },
  {
    id: "maracuja",
    name: "Maracujá",
    description: "Brigadeiro tropical de maracujá, com o equilíbrio perfeito entre doce e ácido. Fresco e sofisticado.",
    category: "especial",
    image: "assorted",
    priceUNIT: 4.00,
    price50: 140.00,
    price100: 230.00,
  },
  {
    id: "confete",
    name: "Confete",
    description: "Brigadeiro divertido coberto com confetes coloridos de chocolate. Perfeito para festas e celebrações.",
    category: "especial",
    image: "assorted",
    priceUNIT: 4.00,
    price50: 140.00,
    price100: 230.00,
  },
  {
    id: "pacoca",
    name: "Paçoca",
    description: "O sabor brasileiro da paçoca em forma de brigadeiro gourmet. Crocante por fora, cremoso por dentro.",
    category: "especial",
    image: "assorted",
    priceUNIT: 4.00,
    price50: 140.00,
    price100: 230.00,
  },
  {
    id: "oreo",
    name: "Oreo",
    description: "Brigadeiro gourmet com pedaços de biscoito Oreo, combinando chocolate e baunilha em uma textura surpreendente.",
    category: "especial",
    image: "assorted",
    priceUNIT: 4.00,
    price50: 140.00,
    price100: 230.00,
  },
];

async function main() {
  console.log("Limpando banco e semeando catálogo da Belart...")
  
  // Remove produtos antigos para não duplicar
  await prisma.product.deleteMany()

  for (const p of products) {
    await prisma.product.create({
      data: {
        id: p.id,
        name: p.name,
        description: p.description,
        category: p.category,
        imageUrl: p.image,
        priceUnit: p.priceUNIT,
        price50: p.price50,
        price100: p.price100,
      },
    })
  }
  
  console.log("✅ Catálogo semeado com sucesso no formato priceUNIT/50/100!")
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(async () => { await prisma.$disconnect() })