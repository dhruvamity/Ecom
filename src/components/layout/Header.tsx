"use client";
import Link from "next/link";
import { Menu, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { totalItems } = useCart();

  return (
    <header className="bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-md top-0 sticky z-50">
      <div className="flex justify-between items-center px-margin-mobile h-16 w-full max-w-container-max mx-auto md:px-margin-desktop">
        <button className="text-primary dark:text-primary-fixed-dim hover:text-primary transition-colors duration-200 active:scale-95">
          <Menu size={24} />
        </button>
        <Link href="/" className="font-headline-lg-mobile text-headline-lg-mobile text-primary dark:text-primary-fixed-dim italic md:font-headline-lg md:text-headline-lg font-bold">
          Dhenuh
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/" className="text-on-surface-variant hover:text-primary transition-colors duration-200 hidden md:flex font-medium">
            Home
          </Link>
          <Link href="/product" className="text-on-surface-variant hover:text-primary transition-colors duration-200 hidden md:flex font-medium">
            Shop
          </Link>
          <Link href="/cart" className="relative text-primary dark:text-primary-fixed-dim hover:text-primary transition-colors duration-200 active:scale-95">
            <ShoppingBag size={24} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-error text-on-error font-label-sm text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
