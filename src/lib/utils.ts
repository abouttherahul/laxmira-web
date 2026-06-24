import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Product } from "@/src/constants";

const COLOR_KEYWORDS: Array<{ color: string; matches: string[] }> = [
  { color: 'Ivory', matches: ['ivory', 'cream', 'beige', 'off white', 'white'] },
  { color: 'Yellow', matches: ['yellow', 'sunshine', 'gold', 'champagne'] },
  { color: 'Green', matches: ['emerald', 'green', 'mint', 'sage'] },
  { color: 'Purple', matches: ['lavender', 'purple', 'violet', 'amethyst'] },
  { color: 'Red', matches: ['ruby', 'crimson', 'red', 'maroon'] },
  { color: 'Pink', matches: ['blush', 'pink', 'rose', 'pearl'] },
  { color: 'Terracotta', matches: ['terracotta'] },
  { color: 'Amber', matches: ['amber'] },
  { color: 'Blue', matches: ['blue', 'sapphire'] },
  { color: 'Orange', matches: ['orange', 'peach'] },
  { color: 'Beige', matches: ['beige', 'nude', 'champagne'] },
  { color: 'Other', matches: [] },
];

export const COLOR_HEX_MAP: Record<string, string> = {
  All: '#f8fafc',
  Ivory: '#f8f1e5',
  Yellow: '#facc15',
  Green: '#16a34a',
  Purple: '#7c3aed',
  Red: '#dc2626',
  Pink: '#ec4899',
  Terracotta: '#d98d6b',
  Amber: '#f59e0b',
  Blue: '#2563eb',
  Orange: '#f97316',
  Beige: '#d6b98d',
  Other: '#94a3b8',
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseProductPrice(price: string) {
  const cleaned = price.replace(/[^0-9]/g, '');
  return Number(cleaned || 0);
}

export function getProductColor(product: Product) {
  const explicitColor = product.color?.trim();
  if (explicitColor) {
    return explicitColor;
  }

  const name = product.name.toLowerCase();

  for (const keyword of COLOR_KEYWORDS) {
    if (keyword.matches.some((term) => name.includes(term))) {
      return keyword.color;
    }
  }

  return 'Other';
}

export function getAvailableColors(products: Product[]) {
  const colors = Array.from(
    new Set(
      products
        .map((product) => getProductColor(product))
        .filter((color) => color && color !== 'Other')
    )
  ).sort();

  return ['All', ...colors];
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
