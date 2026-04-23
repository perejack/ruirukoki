import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { ArrowLeft, MessageCircle, Phone, ShieldCheck, Truck } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { getProduct, products, PHONE, whatsappLink, type Product } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

function formatKsh(n: number) {
  return `Ksh ${n.toLocaleString("en-KE", { minimumFractionDigits: 2 })}`;
}

export default function ProductPage() {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const product = productId ? getProduct(productId) : null;

  useEffect(() => {
    if (product) {
      const title = `${product.name} — Ksh ${product.price.toLocaleString()} | Ruiru Mabati Factory`;
      const desc = `${product.name} at Ksh ${product.price.toLocaleString()}. ${product.description.slice(0, 130)}`;
      document.title = title;

      const metaTags = [
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:image", content: product.image },
        { name: "twitter:image", content: product.image },
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
    } else {
      document.title = "Product not found";
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="mx-auto max-w-3xl px-4 py-24 text-center">
          <h1 className="text-3xl font-bold">Product not found</h1>
          <p className="mt-2 text-muted-foreground">The item you're looking for is unavailable.</p>
          <Link to="/" className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 font-semibold text-primary-foreground">Back to shop</Link>
        </div>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);

  const buyMessage = `Hello Ruiru Mabati Factory, I would like to BUY:\n\n• ${product.name}\n• Price: ${formatKsh(product.price)}\n\nPlease share order & delivery details.`;
  const inquiryMessage = `Hello, I'd like more details about: ${product.name} (${formatKsh(product.price)})`;

  const handleNav = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </button>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-12 sm:px-6 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-card">
          {product.badge && (
            <span className="absolute left-4 top-4 z-10 rounded-md bg-discount px-3 py-1 text-xs font-bold text-discount-foreground shadow-card">
              {product.badge}
            </span>
          )}
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">{product.category}</div>
          <h1 className="mt-2 text-2xl font-bold sm:text-3xl">{product.name}</h1>
          <div className="mt-4 flex items-baseline gap-3">
            <div className="text-3xl font-bold text-primary">{formatKsh(product.price)}</div>
            <span className="text-xs text-muted-foreground">VAT incl. • Factory price</span>
          </div>

          <p className="mt-5 text-muted-foreground">{product.description}</p>

          <div className="mt-6 rounded-lg border border-border bg-secondary/40 p-4">
            <h3 className="text-sm font-semibold">Specifications</h3>
            <dl className="mt-3 grid grid-cols-2 gap-3 text-sm">
              {product.specs.map((s: { label: string; value: string }) => (
                <div key={s.label}>
                  <dt className="text-muted-foreground">{s.label}</dt>
                  <dd className="font-semibold">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a
              href={whatsappLink(buyMessage)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-whatsapp px-5 py-3.5 font-semibold text-whatsapp-foreground shadow-elevated transition hover:scale-[1.02]"
            >
              <MessageCircle className="h-5 w-5" /> Order on WhatsApp
            </a>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3.5 font-semibold text-primary-foreground shadow-elevated transition hover:opacity-90"
            >
              <Phone className="h-5 w-5" /> Call: {PHONE}
            </a>
          </div>

          <a
            href={whatsappLink(inquiryMessage)}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
          >
            Ask a Question on WhatsApp
          </a>

          <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2 rounded-md border border-border p-3">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <span>Quality Guaranteed</span>
            </div>
            <div className="flex items-center gap-2 rounded-md border border-border p-3">
              <Truck className="h-5 w-5 text-primary" />
              <span>Delivery Across Kenya</span>
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <h2 className="text-xl font-bold sm:text-2xl">Related Products</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/"
              onClick={handleNav}
              className="inline-flex rounded-md border border-border bg-background px-5 py-2.5 font-semibold transition hover:bg-secondary"
            >
              View all products
            </Link>
          </div>
        </section>
      )}

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
