import { Link } from "react-router";
import { Eye, ShoppingBag } from "lucide-react";
import type { Product } from "@/data/products";

function formatKsh(n: number) {
  return `Ksh ${n.toLocaleString("en-KE", { minimumFractionDigits: 2 })}`;
}

export function ProductCard({ product }: { product: Product }) {
  const handleNavClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition hover:-translate-y-1 hover:shadow-elevated">
      {product.badge && (
        <span className="absolute left-3 top-3 z-10 rounded-md bg-discount px-2 py-1 text-xs font-bold text-discount-foreground shadow-card">
          {product.badge}
        </span>
      )}
      <Link
        to={`/product/${product.id}`}
        onClick={handleNavClick}
        className="relative block aspect-square overflow-hidden bg-muted"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <div className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground sm:text-xs">{product.category}</div>
        <Link
          to={`/product/${product.id}`}
          onClick={handleNavClick}
          className="mt-1 line-clamp-2 text-xs font-semibold text-foreground transition hover:text-primary sm:text-sm"
        >
          {product.name}
        </Link>
        <div className="mt-2 text-base font-bold text-primary sm:text-lg">{formatKsh(product.price)}</div>
        <div className="mt-3 flex flex-col gap-2 sm:mt-4 sm:grid sm:grid-cols-2">
          <Link
            to={`/product/${product.id}`}
            onClick={handleNavClick}
            className="inline-flex items-center justify-center gap-1.5 rounded-md border border-border bg-background px-2 py-2 text-[11px] font-semibold text-foreground transition hover:bg-secondary sm:px-3 sm:text-xs"
          >
            <Eye className="h-3.5 w-3.5" /> View Details
          </Link>
          <Link
            to={`/product/${product.id}`}
            onClick={handleNavClick}
            className="inline-flex items-center justify-center gap-1.5 rounded-md bg-primary px-2 py-2 text-[11px] font-semibold text-primary-foreground shadow-card transition hover:opacity-90 sm:px-3 sm:text-xs"
          >
            <ShoppingBag className="h-3.5 w-3.5" /> Buy
          </Link>
        </div>
      </div>
    </div>
  );
}
