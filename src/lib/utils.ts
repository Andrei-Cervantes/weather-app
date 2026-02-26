import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalizeWords(value: string): string {
  return value
    .split(" ")
    .map((word) => {
      if (word.length === 0) return word;
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
}
