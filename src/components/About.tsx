import assortedImage from "@/assets/Logo 2.png";

const About = () => {
  return (
    <section id="sobre" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-4">Nossa História</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Doces feitos com <span className="text-gradient-gold">amor</span> e tradição
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              A Belart Doceria nasceu da paixão por transformar receitas tradicionais em experiências 
              gourmet únicas. Cada doce é preparado artesanalmente com ingredientes premium, garantindo 
              sabor e qualidade incomparáveis.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              De festas íntimas a grandes celebrações, nossos brigadeiros e doces finos são 
              a escolha perfeita para quem busca elegância e sofisticação em cada detalhe.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative rounded-lg overflow-hidden aspect-square">
              <img
                src={assortedImage}
                alt="Caixa de doces sortidos Belart"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
