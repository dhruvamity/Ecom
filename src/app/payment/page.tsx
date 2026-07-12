"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { Scan, CreditCard, Building2, Lock, ShieldCheck, QrCode } from "lucide-react";

export default function Payment() {
  const [activeMethod, setActiveMethod] = useState("upi");
  const { items, subtotal, clearCart } = useCart();
  const router = useRouter();

  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  const handlePayNow = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("Payment successful! Thank you for your order.");
    clearCart();
    router.push("/");
  };

  return (
    <div className="flex-1 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-md md:py-stack-lg flex flex-col lg:flex-row gap-gutter">
      {/* Left Column: Payment Methods */}
      <section className="w-full lg:w-2/3 flex flex-col gap-stack-md">
        <div className="flex flex-col gap-2">
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary">Payment</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">All transactions are secure and encrypted.</p>
        </div>

        {/* Payment Options Accordion */}
        <div className="flex flex-col gap-4">
          {/* UPI Option */}
          <label className="relative cursor-pointer group block">
            <input
              checked={activeMethod === "upi"}
              className="peer sr-only"
              name="payment_method"
              onChange={() => setActiveMethod("upi")}
              type="radio"
              value="upi"
            />
            <div className={`w-full p-4 rounded-xl border transition-all duration-300 ${activeMethod === "upi" ? "border-primary bg-surface-container-low" : "border-outline-variant bg-surface-container-lowest"}`}>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                  <div className="w-5 h-5 rounded-full border border-outline flex items-center justify-center">
                    <div className={`w-3 h-3 rounded-full transition-colors ${activeMethod === "upi" ? "bg-primary" : "bg-transparent"}`}></div>
                  </div>
                  <Scan className="text-secondary" size={24} />
                  <span className="font-title-md text-title-md text-on-surface">UPI (GPay, PhonePe, Paytm)</span>
                </div>
              </div>

              {/* Expanded Content */}
              {activeMethod === "upi" && (
                <div className="mt-4 pt-4 border-t border-outline-variant flex flex-col gap-4 transition-all overflow-hidden block">
                  <div className="bg-surface-container-low p-4 rounded-lg flex flex-col items-center justify-center text-center border border-outline-variant/50">
                    <QrCode className="text-primary mb-2" size={48} />
                    <p className="font-body-md text-body-md text-on-surface-variant">A payment request will be sent to your UPI app. Please complete the payment to confirm your order.</p>
                    <div className="mt-4 w-full">
                      <input className="w-full bg-surface border-b-2 border-outline-variant focus:border-primary focus:outline-none py-2 text-on-surface font-body-md text-body-md placeholder-on-surface-variant/60 transition-colors" placeholder="Enter UPI ID (e.g., name@okhdfcbank)" type="text" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </label>

          {/* Credit/Debit Card Option */}
          <label className="relative cursor-pointer group block">
            <input
              checked={activeMethod === "card"}
              className="peer sr-only"
              name="payment_method"
              onChange={() => setActiveMethod("card")}
              type="radio"
              value="card"
            />
            <div className={`w-full p-4 rounded-xl border transition-all duration-300 ${activeMethod === "card" ? "border-primary bg-surface-container-low" : "border-outline-variant bg-surface-container-lowest"}`}>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                  <div className="w-5 h-5 rounded-full border border-outline flex items-center justify-center">
                    <div className={`w-3 h-3 rounded-full transition-colors ${activeMethod === "card" ? "bg-primary" : "bg-transparent"}`}></div>
                  </div>
                  <CreditCard className="text-secondary" size={24} />
                  <span className="font-title-md text-title-md text-on-surface">Credit / Debit Card</span>
                </div>
                <div className="flex gap-1 text-outline">
                  <span className="font-label-sm text-label-sm uppercase">Visa</span>
                  <span className="font-label-sm text-label-sm uppercase">MC</span>
                </div>
              </div>

              {/* Expanded Content */}
              {activeMethod === "card" && (
                <div className="mt-4 pt-4 border-t border-outline-variant flex flex-col gap-6 transition-all overflow-hidden block">
                  <div className="relative w-full">
                    <input className="w-full bg-surface-container-lowest border-b border-outline-variant focus:border-primary focus:outline-none py-3 pl-0 pr-10 text-on-surface font-body-md text-body-md placeholder-on-surface-variant/60 transition-colors" placeholder="Card Number" type="text" />
                    <CreditCard className="absolute right-2 top-3 text-outline" size={24} />
                  </div>
                  <div className="flex gap-4">
                    <div className="w-1/2">
                      <input className="w-full bg-surface-container-lowest border-b border-outline-variant focus:border-primary focus:outline-none py-3 pl-0 text-on-surface font-body-md text-body-md placeholder-on-surface-variant/60 transition-colors" placeholder="MM / YY" type="text" />
                    </div>
                    <div className="w-1/2 relative">
                      <input className="w-full bg-surface-container-lowest border-b border-outline-variant focus:border-primary focus:outline-none py-3 pl-0 pr-10 text-on-surface font-body-md text-body-md placeholder-on-surface-variant/60 transition-colors" maxLength={4} placeholder="CVV" type="password" />
                    </div>
                  </div>
                  <div className="w-full">
                    <input className="w-full bg-surface-container-lowest border-b border-outline-variant focus:border-primary focus:outline-none py-3 pl-0 text-on-surface font-body-md text-body-md placeholder-on-surface-variant/60 transition-colors" placeholder="Name on Card" type="text" />
                  </div>
                </div>
              )}
            </div>
          </label>

          {/* Net Banking Option */}
          <label className="relative cursor-pointer group block">
            <input
              checked={activeMethod === "netbanking"}
              className="peer sr-only"
              name="payment_method"
              onChange={() => setActiveMethod("netbanking")}
              type="radio"
              value="netbanking"
            />
            <div className={`w-full p-4 rounded-xl border transition-all duration-300 ${activeMethod === "netbanking" ? "border-primary bg-surface-container-low" : "border-outline-variant bg-surface-container-lowest"}`}>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                  <div className="w-5 h-5 rounded-full border border-outline flex items-center justify-center">
                    <div className={`w-3 h-3 rounded-full transition-colors ${activeMethod === "netbanking" ? "bg-primary" : "bg-transparent"}`}></div>
                  </div>
                  <Building2 className="text-secondary" size={24} />
                  <span className="font-title-md text-title-md text-on-surface">Net Banking</span>
                </div>
              </div>

              {/* Expanded Content */}
              {activeMethod === "netbanking" && (
                <div className="mt-4 pt-4 border-t border-outline-variant flex flex-col gap-4 transition-all overflow-hidden block">
                  <p className="font-body-md text-body-md text-on-surface-variant">You will be redirected to your bank's secure portal to complete the payment.</p>
                  <select className="w-full bg-surface border-b border-outline-variant focus:border-primary focus:outline-none py-3 text-on-surface font-body-md text-body-md cursor-pointer appearance-none">
                    <option disabled value="">Select your bank</option>
                    <option value="sbi">State Bank of India</option>
                    <option value="hdfc">HDFC Bank</option>
                    <option value="icici">ICICI Bank</option>
                    <option value="axis">Axis Bank</option>
                    <option value="kotak">Kotak Mahindra Bank</option>
                  </select>
                </div>
              )}
            </div>
          </label>
        </div>
      </section>

      {/* Right Column: Order Summary */}
      <aside className="w-full lg:w-1/3 flex flex-col gap-stack-sm mt-8 lg:mt-0">
        <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-[0_8px_30px_rgba(119,87,77,0.08)] border border-outline-variant/30 flex flex-col gap-6 sticky top-24">
          <h2 className="font-title-md text-title-md text-on-surface border-b border-outline-variant pb-4">Order Summary</h2>
          
          {/* Product Items */}
          <div className="flex flex-col gap-4 max-h-[250px] overflow-y-auto">
            {items.map((item) => (
              <div key={item.id} className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden bg-surface-container-high border border-outline-variant flex-shrink-0 relative">
                  <img className="w-full h-full object-cover mix-blend-multiply" alt={item.name} src={item.image} />
                  <span className="absolute -top-2 -right-2 bg-secondary text-on-secondary font-label-sm text-label-sm w-5 h-5 flex items-center justify-center rounded-full text-[10px]">{item.quantity}</span>
                </div>
                <div className="flex flex-col flex-1">
                  <span className="font-body-md text-body-md font-medium text-on-surface">{item.name}</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">{item.variant}</span>
                </div>
                <span className="font-title-md text-title-md text-primary">₹{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          
          {/* Calculation Lines */}
          <div className="flex flex-col gap-3 pt-4 border-t border-outline-variant border-dashed">
            <div className="flex justify-between items-center text-on-surface-variant font-body-md text-body-md">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-on-surface-variant font-body-md text-body-md">
              <span>Shipping</span>
              <span className="text-tertiary">Free</span>
            </div>
            <div className="flex justify-between items-center text-on-surface-variant font-body-md text-body-md">
              <span>Taxes (5%)</span>
              <span>₹{tax.toFixed(2)}</span>
            </div>
          </div>
          
          {/* Total */}
          <div className="flex justify-between items-center pt-4 border-t border-outline-variant">
            <span className="font-title-md text-title-md text-on-surface font-bold">Total</span>
            <span className="font-headline-lg-mobile text-headline-lg-mobile text-primary font-bold">₹{total.toFixed(2)}</span>
          </div>
          
          {/* Action Button */}
          <button onClick={handlePayNow} className="w-full bg-primary hover:bg-primary-container hover:text-on-primary-container text-on-primary py-4 rounded-full font-title-md text-title-md flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg mt-4 group">
            <Lock className="text-on-primary group-hover:scale-110 transition-transform group-hover:text-on-primary-container" size={20} />
            Pay Now
          </button>
          <p className="text-center font-label-sm text-label-sm text-on-surface-variant mt-2 flex items-center justify-center gap-1">
            <ShieldCheck size={16} />
            Your payment information is processed securely.
          </p>
        </div>
      </aside>
    </div>
  );
}
