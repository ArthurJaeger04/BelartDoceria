import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductGrid from "@/components/ProductGrid";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { products } from "@/data/products"; // Ele lê direto do seu arquivo de doces

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProductGrid products={products} />
      </main>
      <Footer />
      <CartDrawer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;