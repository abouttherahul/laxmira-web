import fs from "fs";
import path from "path";
import { PRODUCTS } from "../src/constants";

const DOMAIN = "https://laxmira.net";

const rows = [
  [
    "id",
    "title",
    "description",
    "availability",
    "condition",
    "price",
    "link",
    "image_link",
    "brand"
  ]
];

for (const p of PRODUCTS) {
  const price = p.price.replace(/[₹,]/g, "").trim();

  rows.push([
    p.id,
    p.name,
    p.description.replace(/\n/g, " "),
    "in stock",
    "new",
    `${price} INR`,
    `${DOMAIN}/shop/${p.id}`,
    `${DOMAIN}${p.image}`,
    "LAXMIRA"
  ]);
}

const csv = rows
  .map(r =>
    r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(",")
  )
  .join("\n");

fs.writeFileSync(
  path.join(process.cwd(), "public", "catalog.csv"),
  csv,
  "utf8"
);

console.log("✅ catalog.csv generated!");