import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export async function sleep(ms: number) {
  return await new Promise((resolve) => setTimeout(resolve, ms))
}

 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}