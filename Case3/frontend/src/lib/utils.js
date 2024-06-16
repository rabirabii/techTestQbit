import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatPrice(
  price,
  options = {
    currencySymbol: "Rp",
    currencyCode: "IDR",
  }
) {
  const { currencySymbol = "Rp", currencyCode = "IDR" } = options;

  const numericPrice = typeof price === "string" ? parseInt(price) : price;

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
    maximumFractionDigits: 2,
  })
    .format(numericPrice)
    .replace(currencyCode, currencySymbol);
}
