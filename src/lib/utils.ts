import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Product } from "@/src/constants";

const COLOR_KEYWORDS: Array<{ color: string; matches: string[] }> = [
  { color: 'Ivory', matches: ['ivory', 'cream', 'beige', 'off white', 'white'] },
  { color: 'Yellow', matches: ['yellow', 'sunshine', 'gold'] },
  { color: 'Green', matches: ['emerald', 'green', 'mint'] },
  { color: 'Purple', matches: ['lavender', 'purple'] },
  { color: 'Red', matches: ['ruby', 'crimson', 'red', 'maroon'] },
  { color: 'Pink', matches: ['blush', 'pink', 'rose'] },
  { color: 'Terracotta', matches: ['terracotta'] },
  { color: 'Amber', matches: ['amber'] },
  { color: 'Blue', matches: ['blue'] },
  { color: 'Orange', matches: ['orange'] },
  { color: 'Other', matches: [] },
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseProductPrice(price: string) {
  const cleaned = price.replace(/[^0-9]/g, '');
  return Number(cleaned || 0);
}

export function getProductColor(product: Product) {
  const name = product.name.toLowerCase();

  for (const keyword of COLOR_KEYWORDS) {
    if (keyword.matches.some((term) => name.includes(term))) {
      return keyword.color;
    }
  }

  return 'Other';
}

export function getAvailableColors(products: Product[]) {
  return ['All', ...Array.from(new Set(products.map(getProductColor).filter((color) => color !== 'Other')))].sort();
}

export function getPriceRangeOptions() {
  return [
    { value: 'All', label: 'All price ranges' },
    { value: 'under-1500', label: 'Under ₹1,500' },
    { value: '1500-2500', label: '₹1,500 - ₹2,500' },
    { value: 'over-2500', label: 'Above ₹2,500' },
  ];
}

export function matchesPriceRange(price: string, priceFilter: string) {
  const value = parseProductPrice(price);

  if (priceFilter === 'under-1500') return value < 1500;
  if (priceFilter === '1500-2500') return value >= 1500 && value <= 2500;
  if (priceFilter === 'over-2500') return value > 2500;

  return true;
}

export function sortProducts(products: Product[], sort: string) {
  return [...products].sort((a, b) => {
    if (sort === 'name-asc') return a.name.localeCompare(b.name);
    if (sort === 'name-desc') return b.name.localeCompare(a.name);
    if (sort === 'price-asc') return parseProductPrice(a.price) - parseProductPrice(b.price);
    if (sort === 'price-desc') return parseProductPrice(b.price) - parseProductPrice(a.price);
    if (sort === 'oldest') return Number(a.id) - Number(b.id);

    return Number(b.id) - Number(a.id);
  });
}

export function getSortOptions() {
  return [
    { value: 'newest', label: 'Newest' },
    { value: 'oldest', label: 'Oldest' },
    { value: 'name-asc', label: 'Name A-Z' },
    { value: 'name-desc', label: 'Name Z-A' },
    { value: 'price-asc', label: 'Price Low to High' },
    { value: 'price-desc', label: 'Price High to Low' },
  ];
}
