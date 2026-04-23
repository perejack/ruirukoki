import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { PHONE } from "@/data/products";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold shadow-card">
            RMF
          </div>
          <div className="leading-tight">
            <div className="text-sm font-bold text-foreground sm:text-base">Ruiru Mabati Factory</div>
            <div className="hidden text-xs text-muted-foreground sm:block">Quality Mabati. Factory Prices.</div>
          </div>
        </Link>
        <a
          href={`tel:${PHONE}`}
          className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground shadow-card transition hover:opacity-90 sm:px-4"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">Call to Order: {PHONE}</span>
          <span className="sm:hidden">{PHONE}</span>
        </a>
      </div>
    </header>
  );
}
