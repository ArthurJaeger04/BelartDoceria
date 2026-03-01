import heroImage from "@/assets/Zoom cbb.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Brigadeiros artesanais em caixa premium"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <p
          className="font-body text-primary tracking-[0.3em] uppercase text-muted-foreground mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Doceria Artesanal
        </p>
        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          Onde o <span className="text-gradient-gold">doce</span><br />
           encontra a <span className="text-gradient-gold">arte</span>
        </h1>
        <p
          className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 opacity-0 animate-fade-up text-primary"
          style={{ animationDelay: "0.5s" }}
        >
          Brigadeiros gourmet feitos com ingredientes selecionados, 
          para tornar cada ocasião ainda mais especial.
        </p>
        <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.7s" }}>
          <a
            href="#catalogo"
            className="inline-block font-body font-semibold text-sm px-8 py-4 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Ver Catálogo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
