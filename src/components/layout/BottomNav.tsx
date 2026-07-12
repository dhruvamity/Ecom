"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Store, ShoppingCart, User } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function BottomNav() {
  const { totalItems } = useCart();
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Shop", href: "/product", icon: Store },
    { name: "Cart", href: "/cart", icon: ShoppingCart },
    { name: "Profile", href: "/login", icon: User },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center h-20 px-2 pb-safe bg-surface dark:bg-surface-container-highest border-t border-outline-variant shadow-[0_-4px_10px_rgba(121,89,0,0.08)] z-50 rounded-t-xl">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.name}
            href={item.href}
            className={`flex flex-col items-center justify-center transition-colors px-4 py-1 rounded-full relative ${
              isActive
                ? "bg-primary-container text-on-primary-container scale-105 duration-300 ease-out"
                : "text-on-surface-variant hover:bg-surface-container-high"
            }`}
          >
            <item.icon
              size={24}
              className={`mb-1 ${isActive ? "fill-current" : ""}`}
            />
            {item.name === "Cart" && totalItems > 0 && (
              <span className="absolute top-0 right-2 bg-error text-on-error font-label-sm text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
            <span className="font-label-sm text-label-sm mt-1">{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
