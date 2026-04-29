import { Phone, MapPin, MessageCircle } from "lucide-react";
import { PHONE, whatsappLink } from "@/data/products";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold">RMF</div>
            <div>
              <div className="font-bold">Ruiru Mabati Factory</div>
              <div className="text-xs text-muted-foreground">Roofing Solutions Kenya</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Modern roofing manufacturing hub specializing in versatile mabati, box profile, brick tile, Roman tiles and more — direct from the factory.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Ruiru, Kiambu, Kenya</li>
            <li><a href={`tel:${PHONE}`} className="flex items-center gap-2 hover:text-foreground"><Phone className="h-4 w-4 text-primary" /> {PHONE}</a></li>
            <li><a href={whatsappLink("Hello RMF, I'd like more info.")} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-foreground"><MessageCircle className="h-4 w-4 text-whatsapp" /> WhatsApp Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Categories</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Versatile Mabati</li>
            <li>Box Profile</li>
            <li>Star Tile / Brick Tile</li>
            <li>Roofing Accessories</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Ruiru Mabati Factory. All rights reserved.
      </div>
    </footer>
  );
}
