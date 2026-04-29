import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ProductCard } from "@/components/ProductCard";
import { products, PHONE, whatsappLink } from "@/data/products";
import { Phone, MessageCircle, ShieldCheck, Truck, Factory } from "lucide-react";

export default function HomePage() {
  useEffect(() => {
    document.title = "RMF Europe Tile G28 Price in Kenya | Order Mabati Online";
    
    const metaTags = [
      { name: "description", content: "Ruiru Mabati Factory — versatile mabati, box profile, brick tile, Roman tiles & roofing accessories at factory-direct prices in Kenya. Order online via WhatsApp or Call." },
      { property: "og:title", content: "Ruiru Mabati Factory — Order Mabati Online in Kenya" },
      { property: "og:description", content: "Quality mabati roofing sheets in Kenya at factory-direct prices. WhatsApp or call to order." },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const key = name ? `name="${name}"` : `property="${property}"`;
      let meta = document.querySelector(`meta[${key}]`);
      if (!meta) {
        meta = document.createElement("meta");
        if (name) meta.setAttribute("name", name);
        if (property) meta.setAttribute("property", property);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
          <div className="text-primary-foreground">
            <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
              Factory Direct • Ruiru, Kenya
            </span>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              Quality Mabati Roofing at <span className="text-accent">Factory Prices</span>
            </h1>
            <p className="mt-4 max-w-lg text-base text-primary-foreground/85 sm:text-lg">
              Versatile, Box Profile, Star Tile, Brick Tile, Roman Tiles & accessories — manufactured in Ruiru, delivered across Kenya.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={whatsappLink("Hello RMF, I'd like to order mabati.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-whatsapp px-5 py-3 font-semibold text-whatsapp-foreground shadow-elevated transition hover:scale-[1.02]"
              >
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </a>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 font-semibold text-accent-foreground shadow-elevated transition hover:scale-[1.02]"
              >
                <Phone className="h-5 w-5" /> Call to Order: {PHONE}
              </a>
            </div>
          </div>
          <div className="relative hidden md:block">
            <img
              src={products[7].image}
              alt="Mabati roofing sheets stacked at the factory"
              className="h-full w-full rounded-2xl object-cover shadow-elevated"
            />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:grid-cols-3 sm:px-6">
          {[
            { icon: Factory, t: "Factory Direct", d: "Manufactured in Ruiru" },
            { icon: ShieldCheck, t: "Quality Guaranteed", d: "Heavy gauge & coatings" },
            { icon: Truck, t: "Fast Delivery", d: "Across Kenya" },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <div className="font-semibold">{t}</div>
                <div className="text-sm text-muted-foreground">{d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Our Products</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Browse mabati and accessories — tap any item to view details, then order via WhatsApp or call.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* About */}
      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-5xl px-4 py-14 text-center sm:px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">About Ruiru Mabati Factory</h2>
          <p className="mt-4 text-muted-foreground">
            Ruiru Mabati Factory is a modern roofing manufacturing hub specializing in high-quality mabati roofing sheets in Kenya — including versatile mabati, box profile, corrugated, brick tile, Njenga S profile, Roman tiles, and reject mabati. Equipped with advanced roll-forming and coating technology, we deliver durable, weather-resistant and affordable roofing solutions for residential, commercial and contractor projects.
          </p>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
