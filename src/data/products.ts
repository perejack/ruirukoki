export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  badge?: string;
  description: string;
  specs: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    id: "star-tile-charcoal-grey-g30",
    name: "Star Tile Charcoal Grey Gloss 30 Gauge 1Meter",
    price: 620,
    image: "https://static.wixstatic.com/media/e26807_1022c82c8c2e476e8a6580ea8580d766~mv2.webp/v1/fill/w_749,h_749,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e26807_1022c82c8c2e476e8a6580ea8580d766~mv2.webp",
    category: "Star Tile",
    description: "Premium Star Tile roofing sheet in charcoal grey gloss finish. Manufactured at Ruiru Mabati Factory using high-grade galvanised steel coated for long-lasting weather resistance. Ideal for elegant residential and commercial projects.",
    specs: [
      { label: "Profile", value: "Star Tile" },
      { label: "Colour", value: "Charcoal Grey Gloss" },
      { label: "Gauge", value: "30" },
      { label: "Length", value: "1 Meter" },
    ],
  },
  {
    id: "binding-wire-25kg",
    name: "Binding Wire 1Roll (25Kgs)",
    price: 4800,
    image: "https://static.wixstatic.com/media/e26807_3b2be9b39015419db34359fa89326ac1~mv2.webp/v1/fill/w_660,h_660,al_c,lg_1,q_85,enc_avif,quality_auto/e26807_3b2be9b39015419db34359fa89326ac1~mv2.webp",
    category: "Accessories",
    description: "Heavy-duty galvanised binding wire roll, 25Kgs. Perfect for tying reinforcement bars and fencing applications.",
    specs: [
      { label: "Weight", value: "25 Kgs" },
      { label: "Type", value: "Galvanised" },
    ],
  },
  {
    id: "chainlinks-1roll",
    name: "Chainlinks 1Roll",
    price: 2500,
    image: "https://static.wixstatic.com/media/e26807_dbb86e5546d343a8afa55d239c8f05f4~mv2.jpg/v1/fill/w_749,h_749,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e26807_dbb86e5546d343a8afa55d239c8f05f4~mv2.jpg",
    category: "Accessories",
    description: "Strong galvanised chainlink fencing roll for boundary, security, and perimeter installations.",
    specs: [
      { label: "Quantity", value: "1 Roll" },
      { label: "Material", value: "Galvanised Steel" },
    ],
  },
  {
    id: "ordinary-nails-1kg",
    name: "Ordinary Nails 1Kg",
    price: 95,
    image: "https://static.wixstatic.com/media/e26807_ca79b28ea8b144b6a0f9973a292d1799~mv2.webp/v1/fill/w_660,h_660,al_c,lg_1,q_85,enc_avif,quality_auto/e26807_ca79b28ea8b144b6a0f9973a292d1799~mv2.webp",
    category: "Accessories",
    badge: "Best Deal",
    description: "Quality ordinary construction nails sold per Kg. Perfect for general carpentry and timber works.",
    specs: [
      { label: "Weight", value: "1 Kg" },
    ],
  },
  {
    id: "roofing-nails-1kg",
    name: "Roofing Nails 1Kg",
    price: 180,
    image: "https://static.wixstatic.com/media/e26807_5fbf45733241489caa769dbdb582a655~mv2.webp",
    category: "Accessories",
    description: "Strong roofing nails with rubber washers for secure mabati installation. Sold per Kg.",
    specs: [
      { label: "Weight", value: "1 Kg" },
      { label: "Use", value: "Roofing Sheets" },
    ],
  },
  {
    id: "box-profile-914-brick-red-g30",
    name: "Box Profile 914 Brick Red Gloss Gauge 30 1Meter",
    price: 480,
    image: "https://static.wixstatic.com/media/e26807_7b0f0eb8170f4339a39c2288613f9434~mv2.jpg/v1/fill/w_749,h_749,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e26807_7b0f0eb8170f4339a39c2288613f9434~mv2.jpg",
    category: "Box Profile",
    description: "Box Profile 914 mabati in stunning Brick Red gloss. Wide cover, durable G30 gauge, ideal for residential and commercial roofing.",
    specs: [
      { label: "Profile", value: "Box Profile 914" },
      { label: "Colour", value: "Brick Red Gloss" },
      { label: "Gauge", value: "30" },
      { label: "Length", value: "1 Meter" },
    ],
  },
  {
    id: "box-profile-914-tile-red-g30",
    name: "Box Profile 914 Tile Red Gloss Gauge 30 1Meter",
    price: 480,
    image: "https://static.wixstatic.com/media/e26807_6b86786c75964a0e8dee4ccd92425353~mv2.jpg/v1/fill/w_749,h_749,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e26807_6b86786c75964a0e8dee4ccd92425353~mv2.jpg",
    category: "Box Profile",
    description: "Box Profile 914 in Tile Red gloss finish — classic terracotta look with the strength of steel.",
    specs: [
      { label: "Profile", value: "Box Profile 914" },
      { label: "Colour", value: "Tile Red Gloss" },
      { label: "Gauge", value: "30" },
      { label: "Length", value: "1 Meter" },
    ],
  },
  {
    id: "box-profile-914-charcoal-g28",
    name: "Box Profile 914 Charcoal Grey Gloss G28 1Meter",
    price: 480,
    image: "https://static.wixstatic.com/media/e26807_f3eecb7ff64449cbb652f6efa8957ebc~mv2.webp/v1/fill/w_749,h_749,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e26807_f3eecb7ff64449cbb652f6efa8957ebc~mv2.webp",
    category: "Box Profile",
    badge: "5% Discount",
    description: "Box Profile 914 Charcoal Grey gloss in heavy G28 gauge — premium thickness for long-life roofing.",
    specs: [
      { label: "Profile", value: "Box Profile 914" },
      { label: "Colour", value: "Charcoal Grey Gloss" },
      { label: "Gauge", value: "28" },
      { label: "Length", value: "1 Meter" },
    ],
  },
  {
    id: "box-profile-914-tile-red-g30-discount",
    name: "Box Profile 914 Tile-Red Gloss G30 1Meter",
    price: 350,
    image: "https://static.wixstatic.com/media/e26807_342ceb55b39b40a79a83375ac6fe8239~mv2.webp/v1/fill/w_749,h_749,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e26807_342ceb55b39b40a79a83375ac6fe8239~mv2.webp",
    category: "Box Profile",
    badge: "5% Discount",
    description: "Affordable Box Profile 914 in Tile Red gloss G30 — exceptional value, factory-direct pricing.",
    specs: [
      { label: "Profile", value: "Box Profile 914" },
      { label: "Colour", value: "Tile Red Gloss" },
      { label: "Gauge", value: "30" },
      { label: "Length", value: "1 Meter" },
    ],
  },
  {
    id: "box-profile-matte-green-g30-3m",
    name: "Box Profile Matte Green G30 3Meters",
    price: 1050,
    image: "https://static.wixstatic.com/media/e26807_67e2b5e815a64945b619de3482d227be~mv2.webp/v1/fill/w_748,h_819,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e26807_67e2b5e815a64945b619de3482d227be~mv2.webp",
    category: "Box Profile",
    badge: "5% Discount",
    description: "Box Profile in Matte Green G30, 3 Meters length. Modern matte finish with excellent UV resistance.",
    specs: [
      { label: "Profile", value: "Box Profile" },
      { label: "Colour", value: "Matte Green" },
      { label: "Gauge", value: "30" },
      { label: "Length", value: "3 Meters" },
    ],
  },
  {
    id: "box-profile-gloss-charcoal-g28-1m",
    name: "Box Profile Gloss Charcoal Grey G28 1Meter",
    price: 420,
    image: "https://static.wixstatic.com/media/e26807_1646ae44934140fea31aaaf92476aa9e~mv2.webp/v1/fill/w_749,h_749,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e26807_1646ae44934140fea31aaaf92476aa9e~mv2.webp",
    category: "Box Profile",
    badge: "5% Discount",
    description: "Heavy-duty Box Profile Charcoal Grey gloss G28, 1 Meter. Strong, sleek, and built to last.",
    specs: [
      { label: "Profile", value: "Box Profile" },
      { label: "Colour", value: "Charcoal Grey Gloss" },
      { label: "Gauge", value: "28" },
      { label: "Length", value: "1 Meter" },
    ],
  },
  {
    id: "box-profile-matte-charcoal-g30-3m",
    name: "Box Profile Matte Charcoal Grey G30 3Meters",
    price: 1440,
    image: "https://static.wixstatic.com/media/e26807_1b2db9c9dab14bb799942baffb7ff445~mv2.jpeg/v1/fill/w_749,h_936,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e26807_1b2db9c9dab14bb799942baffb7ff445~mv2.jpeg",
    category: "Box Profile",
    badge: "5% Discount",
    description: "Box Profile Matte Charcoal Grey G30, 3 Meters — a modern non-reflective finish for stylish homes.",
    specs: [
      { label: "Profile", value: "Box Profile" },
      { label: "Colour", value: "Matte Charcoal Grey" },
      { label: "Gauge", value: "30" },
      { label: "Length", value: "3 Meters" },
    ],
  },
  {
    id: "box-profile-matte-charcoal-g28-1m",
    name: "Box Profile Matte Charcoal Grey G28 1Meter",
    price: 520,
    image: "https://static.wixstatic.com/media/e26807_d216ed15f0c747b584e8610145eba8aa~mv2.jpeg/v1/fill/w_749,h_936,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e26807_d216ed15f0c747b584e8610145eba8aa~mv2.jpeg",
    category: "Box Profile",
    badge: "5% Discount",
    description: "Box Profile Matte Charcoal Grey G28, 1 Meter. Premium gauge with refined matte aesthetic.",
    specs: [
      { label: "Profile", value: "Box Profile" },
      { label: "Colour", value: "Matte Charcoal Grey" },
      { label: "Gauge", value: "28" },
      { label: "Length", value: "1 Meter" },
    ],
  },
  {
    id: "versatile-matte-charcoal-g28-3m",
    name: "Versatile Matte Charcoal Grey G28 3Meters",
    price: 1860,
    image: "https://static.wixstatic.com/media/e26807_d1eb208bd0e8485185d3bc7265b536ab~mv2.jpg/v1/fill/w_748,h_957,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e26807_d1eb208bd0e8485185d3bc7265b536ab~mv2.jpg",
    category: "Versatile",
    badge: "5% Discount",
    description: "Versatile Matte Charcoal Grey G28, 3 Meters. Elegant tile-look mabati with maximum durability.",
    specs: [
      { label: "Profile", value: "Versatile" },
      { label: "Colour", value: "Matte Charcoal Grey" },
      { label: "Gauge", value: "28" },
      { label: "Length", value: "3 Meters" },
    ],
  },
  {
    id: "versatile-matte-charcoal-g30-3m",
    name: "Versatile Matte Charcoal Grey G30 3Meters",
    price: 1740,
    image: "https://static.wixstatic.com/media/e26807_94669c16eb524926b76176263f84c4d0~mv2.jpg/v1/fill/w_749,h_936,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e26807_94669c16eb524926b76176263f84c4d0~mv2.jpg",
    category: "Versatile",
    badge: "5% Discount",
    description: "Versatile Matte Charcoal Grey G30, 3 Meters — the perfect balance of style and value.",
    specs: [
      { label: "Profile", value: "Versatile" },
      { label: "Colour", value: "Matte Charcoal Grey" },
      { label: "Gauge", value: "30" },
      { label: "Length", value: "3 Meters" },
    ],
  },
  {
    id: "versatile-matte-charcoal-g28-2.5m",
    name: "Versatile Matte Charcoal Grey G28 2.5Meters",
    price: 1550,
    image: "https://static.wixstatic.com/media/e26807_d64de1f3c7f84310866907ad2dc9674b~mv2.jpg/v1/fill/w_749,h_936,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e26807_d64de1f3c7f84310866907ad2dc9674b~mv2.jpg",
    category: "Versatile",
    badge: "5% Discount",
    description: "Versatile Matte Charcoal Grey G28, 2.5 Meters. Heavy-gauge tile-profile mabati ideal for premium roofing.",
    specs: [
      { label: "Profile", value: "Versatile" },
      { label: "Colour", value: "Matte Charcoal Grey" },
      { label: "Gauge", value: "28" },
      { label: "Length", value: "2.5 Meters" },
    ],
  },
];

export const PHONE = "+2547891554697";
export const WHATSAPP = "2547891554697";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}
