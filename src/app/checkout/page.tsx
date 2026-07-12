"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { MapPin, Truck, CreditCard, ChevronDown } from "lucide-react";

export default function Checkout() {
  const router = useRouter();
  const { items, subtotal } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
    mobile: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = "Full Name is required";
    if (!formData.address) newErrors.address = "Street Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.zip) newErrors.zip = "ZIP / Postal Code is required";
    if (!formData.mobile) newErrors.mobile = "Mobile Number is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      router.push("/payment");
    }
  };

  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  return (
    <div className="max-w-[800px] mx-auto px-margin-mobile md:px-margin-desktop py-stack-md pb-stack-lg">
      <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary mb-stack-md text-center">Secure Checkout</h1>
      
      {/* Progress Indicator */}
      <div className="flex items-center justify-between mb-stack-lg px-4 relative">
        <div className="absolute left-0 top-1/2 w-full h-[2px] bg-surface-container-highest -z-10 -translate-y-1/2"></div>
        <div className="absolute left-0 top-1/2 w-1/3 h-[2px] bg-primary -z-10 -translate-y-1/2"></div>
        
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-label-sm shadow-md">1</div>
          <span className="font-label-sm text-label-sm text-primary">Shipping</span>
        </div>
        
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-surface-container-high border-2 border-outline-variant text-on-surface-variant flex items-center justify-center font-label-sm text-label-sm">2</div>
          <span className="font-label-sm text-label-sm text-on-surface-variant">Delivery</span>
        </div>
        
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-surface-container-high border-2 border-outline-variant text-on-surface-variant flex items-center justify-center font-label-sm text-label-sm">3</div>
          <span className="font-label-sm text-label-sm text-on-surface-variant">Payment</span>
        </div>
      </div>
      
      <div className="flex flex-col gap-stack-md">
        {/* Section 1: Shipping Address */}
        <section className="bg-surface-container-lowest rounded-xl shadow-[0_8px_30px_rgba(119,87,77,0.08)] p-gutter border border-surface-container-high overflow-hidden relative">
          <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
          <h2 className="font-title-md text-title-md text-secondary mb-stack-sm flex items-center gap-2">
            <MapPin size={24} className="text-primary" />
            Shipping Address
          </h2>
          
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleContinue}>
            <div className="col-span-1 md:col-span-2">
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Full Name</label>
              <input 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className={`w-full bg-surface-container-low border-b ${errors.name ? 'border-error' : 'border-outline'} focus:border-primary focus:ring-0 px-3 py-2 text-on-surface bg-transparent transition-colors outline-none`} 
                placeholder="e.g. Aditi Sharma" 
                type="text" 
              />
              {errors.name && <p className="text-error text-xs mt-1">{errors.name}</p>}
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Street Address</label>
              <input 
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                className={`w-full bg-surface-container-low border-b ${errors.address ? 'border-error' : 'border-outline'} focus:border-primary focus:ring-0 px-3 py-2 text-on-surface bg-transparent transition-colors outline-none`} 
                placeholder="House No., Street Name" 
                type="text" 
              />
              {errors.address && <p className="text-error text-xs mt-1">{errors.address}</p>}
            </div>
            <div className="col-span-1">
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">City</label>
              <input 
                value={formData.city}
                onChange={(e) => setFormData({...formData, city: e.target.value})}
                className={`w-full bg-surface-container-low border-b ${errors.city ? 'border-error' : 'border-outline'} focus:border-primary focus:ring-0 px-3 py-2 text-on-surface bg-transparent transition-colors outline-none`} 
                placeholder="City" 
                type="text" 
              />
              {errors.city && <p className="text-error text-xs mt-1">{errors.city}</p>}
            </div>
            <div className="col-span-1">
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">ZIP / Postal Code</label>
              <input 
                value={formData.zip}
                onChange={(e) => setFormData({...formData, zip: e.target.value})}
                className={`w-full bg-surface-container-low border-b ${errors.zip ? 'border-error' : 'border-outline'} focus:border-primary focus:ring-0 px-3 py-2 text-on-surface bg-transparent transition-colors outline-none`} 
                placeholder="ZIP Code" 
                type="text" 
              />
              {errors.zip && <p className="text-error text-xs mt-1">{errors.zip}</p>}
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Mobile Number</label>
              <input 
                value={formData.mobile}
                onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                className={`w-full bg-surface-container-low border-b ${errors.mobile ? 'border-error' : 'border-outline'} focus:border-primary focus:ring-0 px-3 py-2 text-on-surface bg-transparent transition-colors outline-none`} 
                placeholder="+91" 
                type="tel" 
              />
              {errors.mobile && <p className="text-error text-xs mt-1">{errors.mobile}</p>}
            </div>
            
            <div className="col-span-1 md:col-span-2 mt-4 flex justify-end">
              <button type="submit" className="bg-primary text-on-primary font-label-sm text-label-sm py-3 px-6 rounded-full hover:bg-surface-tint transition-all active:scale-95 shadow-md">
                Continue to Payment
              </button>
            </div>
          </form>
        </section>
        
        {/* Collapsed Sections for preview */}
        <section className="bg-surface-container-low rounded-xl p-gutter border border-outline-variant/30 flex justify-between items-center opacity-70">
          <h2 className="font-title-md text-title-md text-secondary flex items-center gap-2">
            <Truck size={24} />
            Delivery Speed
          </h2>
          <ChevronDown size={24} className="text-outline" />
        </section>
        
        <section className="bg-surface-container-low rounded-xl p-gutter border border-outline-variant/30 flex justify-between items-center opacity-70">
          <h2 className="font-title-md text-title-md text-secondary flex items-center gap-2">
            <CreditCard size={24} />
            Payment
          </h2>
          <ChevronDown size={24} className="text-outline" />
        </section>
        
        {/* Order Summary Sidebar/Section */}
        <section className="mt-stack-sm bg-surface-container rounded-xl p-gutter shadow-sm border border-outline-variant/20">
          <h3 className="font-title-md text-title-md text-primary mb-4 border-b border-outline-variant pb-2">Order Summary</h3>
          
          <div className="space-y-4 mb-4 max-h-[300px] overflow-y-auto">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-lg bg-surface-container-highest overflow-hidden relative border border-outline-variant/30">
                  <img className="w-full h-full object-cover mix-blend-multiply" alt={item.name} src={item.image} />
                </div>
                <div className="flex-1">
                  <div className="font-body-md text-body-md font-medium text-on-surface">{item.name}</div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant">Qty: {item.quantity} {item.variant && `• ${item.variant}`}</div>
                </div>
                <div className="font-title-md text-title-md text-primary">₹{(item.price * item.quantity).toFixed(2)}</div>
              </div>
            ))}
            {items.length === 0 && (
              <p className="text-on-surface-variant text-sm italic">Your cart is empty.</p>
            )}
          </div>
          
          <div className="space-y-2 border-t border-outline-variant/50 pt-4 mt-4">
            <div className="flex justify-between font-body-md text-body-md text-on-surface-variant">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-body-md text-body-md text-on-surface-variant">
              <span>Shipping</span>
              <span className="text-tertiary">Calculated at next step</span>
            </div>
            <div className="flex justify-between font-body-md text-body-md text-on-surface-variant">
              <span>Tax (5%)</span>
              <span>₹{tax.toFixed(2)}</span>
            </div>
          </div>
          
          <div className="flex justify-between font-title-md text-title-md text-on-surface mt-4 pt-4 border-t border-outline-variant font-bold">
            <span>Total</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
        </section>
      </div>
    </div>
  );
}
