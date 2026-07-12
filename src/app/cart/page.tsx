"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { X, Minus, Plus, Lock, ShoppingBag } from "lucide-react";

export default function Cart() {
  const { items, updateQuantity, removeFromCart, subtotal, totalItems } = useCart();

  const tax = subtotal * 0.05; // 5% tax
  const total = subtotal + tax;

  if (items.length === 0) {
    return (
      <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg pb-[100px] md:pb-stack-lg min-h-[60vh] flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 bg-surface-container-high rounded-full flex items-center justify-center mb-6">
          <ShoppingBag size={48} className="text-outline" />
        </div>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-background mb-4">Your Cart is Empty</h1>
        <p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-md">
          Looks like you haven't added any sacred nourishment to your cart yet.
        </p>
        <Link href="/product" className="bg-primary text-on-primary px-8 py-3 rounded-full font-title-md text-title-md hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-md">
          Explore Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg pb-[100px] md:pb-stack-lg">
      <div className="mb-stack-md">
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-background">Your Cart</h1>
        <p className="font-body-md text-body-md text-on-surface-variant mt-2">Sacred nourishment, ready for checkout.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-gutter items-start">
        {/* Cart Items List */}
        <div className="w-full lg:w-2/3 flex flex-col gap-base">
          {items.map((item) => (
            <div key={item.id} className="bg-surface-container-lowest rounded-xl p-4 ambient-shadow flex gap-4 items-center relative overflow-hidden transition-all duration-300 hover:scale-[1.01]">
              <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0 bg-surface-container-low">
                <img
                  alt={item.name}
                  className="w-full h-full object-cover mix-blend-multiply"
                  src={item.image}
                />
              </div>
              <div className="flex-grow flex flex-col justify-between h-full py-1">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="font-title-md text-title-md text-on-surface">{item.name}</h3>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      aria-label="Remove item" 
                      className="text-outline hover:text-error transition-colors p-1"
                    >
                      <X size={20} />
                    </button>
                  </div>
                  {item.variant && (
                    <span className="inline-block mt-1 bg-tertiary/10 text-tertiary font-label-sm text-label-sm px-2 py-0.5 rounded-full">{item.variant}</span>
                  )}
                </div>
                <div className="flex justify-between items-end mt-4">
                  <div className="flex items-center bg-surface-container-high rounded-full h-8 px-2 border border-outline-variant/30">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      aria-label="Decrease quantity" 
                      className="w-6 h-6 flex items-center justify-center text-secondary hover:text-primary transition-colors"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-8 text-center font-title-md text-title-md text-on-surface text-sm">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      aria-label="Increase quantity" 
                      className="w-6 h-6 flex items-center justify-center text-secondary hover:text-primary transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <div className="font-title-md text-title-md text-primary">₹{(item.price * item.quantity).toFixed(2)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary Sidebar */}
        <div className="w-full lg:w-1/3 bg-surface-container-lowest rounded-xl p-6 ambient-shadow sticky top-24">
          <h2 className="font-title-md text-title-md text-on-surface mb-6 border-b border-outline-variant pb-4">Order Summary</h2>
          
          <div className="space-y-4 mb-6 text-on-surface-variant font-body-md text-body-md">
            <div className="flex justify-between">
              <span>Subtotal ({totalItems} items)</span>
              <span className="font-title-md text-title-md text-on-surface text-base">₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="font-title-md text-title-md text-on-surface text-base">Calculated at next step</span>
            </div>
            <div className="flex justify-between">
              <span>Tax (5%)</span>
              <span className="font-title-md text-title-md text-on-surface text-base">₹{tax.toFixed(2)}</span>
            </div>
          </div>
          
          <div className="border-t border-outline-variant pt-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="font-title-md text-title-md text-on-surface">Total</span>
              <span className="font-headline-lg-mobile text-headline-lg-mobile text-primary">₹{total.toFixed(2)}</span>
            </div>
          </div>
          
          {/* Coupon Field */}
          <div className="mb-6">
            <div className="flex rounded-lg overflow-hidden border border-outline-variant focus-within:border-primary transition-colors bg-surface-container-low">
              <input
                className="w-full bg-transparent border-none focus:ring-0 text-on-surface font-body-md text-body-md py-3 px-4 placeholder:text-outline outline-none"
                placeholder="Promo code"
                type="text"
              />
              <button className="bg-surface-variant text-on-surface-variant font-label-sm text-label-sm px-4 hover:bg-surface-container-highest transition-colors">Apply</button>
            </div>
          </div>
          
          <Link href="/checkout" className="w-full block text-center bg-primary text-on-primary font-label-sm text-label-sm py-4 rounded-lg hover:scale-[1.02] transition-transform shadow-md">
            Proceed to Checkout
          </Link>
          
          <div className="mt-4 flex items-center justify-center gap-2 text-outline font-label-sm text-label-sm">
            <Lock size={16} />
            Secure Checkout
          </div>
        </div>
      </div>
    </div>
  );
}
