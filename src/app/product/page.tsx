"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { Check } from "lucide-react";

export default function ProductInfo() {
  const [selectedSize, setSelectedSize] = useState("500ml");
  const [activeTab, setActiveTab] = useState("Benefits");
  const [added, setAdded] = useState(false);
  const router = useRouter();
  const { addToCart } = useCart();

  const prices: Record<string, number> = {
    "250ml": 450,
    "500ml": 850,
    "1L": 1600,
    "2L": 3100,
  };

  const currentPrice = prices[selectedSize];

  const handleAddToCart = () => {
    addToCart({
      id: `prod-main-${selectedSize}`,
      name: `Pure Desi Cow Ghee`,
      price: currentPrice,
      variant: selectedSize,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiYpuCpVdqOCcD3fAsnrfwCUT0KVfAiXCeaplnvF2W2Aw92KEQ4gJFzV5_Nto2f87FvPKNWbXAH3xmerQ5FltvKp-7bLVZRn-Cizlpqk5n18IQc0pZAOBzQl387afOxLtb1sIecGS2d1skqViFqagI31O5f4oBDBxaWXrxM7yQ7gNTwga_msGKX4bKulfQvSmKvc7nJZzPgSKYupmGRz2X8lfn90T7WtKd514DP2IuW0JDE8X5ihsuVv_-5vaDblksrok",
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart({
      id: `prod-main-${selectedSize}`,
      name: `Pure Desi Cow Ghee`,
      price: currentPrice,
      variant: selectedSize,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiYpuCpVdqOCcD3fAsnrfwCUT0KVfAiXCeaplnvF2W2Aw92KEQ4gJFzV5_Nto2f87FvPKNWbXAH3xmerQ5FltvKp-7bLVZRn-Cizlpqk5n18IQc0pZAOBzQl387afOxLtb1sIecGS2d1skqViFqagI31O5f4oBDBxaWXrxM7yQ7gNTwga_msGKX4bKulfQvSmKvc7nJZzPgSKYupmGRz2X8lfn90T7WtKd514DP2IuW0JDE8X5ihsuVv_-5vaDblksrok",
    });
    router.push("/checkout");
  };

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-md">
      {/* Product Main Section */}
      <div className="flex flex-col md:flex-row gap-gutter">
        {/* Image Gallery */}
        <div className="w-full md:w-1/2 flex justify-center items-center bg-surface-container rounded-xl overflow-hidden shadow-[0_15px_30px_rgba(119,87,77,0.15)]">
          <img
            alt="Pure Desi Cow Ghee Jar"
            className="w-full h-auto object-cover max-h-[500px]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiYpuCpVdqOCcD3fAsnrfwCUT0KVfAiXCeaplnvF2W2Aw92KEQ4gJFzV5_Nto2f87FvPKNWbXAH3xmerQ5FltvKp-7bLVZRn-Cizlpqk5n18IQc0pZAOBzQl387afOxLtb1sIecGS2d1skqViFqagI31O5f4oBDBxaWXrxM7yQ7gNTwga_msGKX4bKulfQvSmKvc7nJZzPgSKYupmGRz2X8lfn90T7WtKd514DP2IuW0JDE8X5ihsuVv_-5vaDblksrok"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 flex flex-col gap-stack-sm pt-stack-sm">
          {/* Badges */}
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-tertiary text-on-tertiary rounded-full font-label-sm text-label-sm">A2 Vedic</span>
            <span className="px-3 py-1 bg-surface-variant text-on-surface-variant rounded-full font-label-sm text-label-sm">Hand-Churned</span>
          </div>
          
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary">
            Pure Desi Cow Ghee
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Experience the sacred nourishment of traditional Bilona method ghee, crafted from the milk of indigenous cows.
          </p>
          <div className="font-title-md text-title-md text-primary mt-2">
            ₹ {currentPrice}.00
          </div>

          {/* Quantity Selector */}
          <div className="mt-stack-sm">
            <label className="font-label-sm text-label-sm text-on-surface-variant block mb-2">Select Size</label>
            <div className="flex flex-wrap gap-2">
              {["250ml", "500ml", "1L", "2L"].map((size) => (
                <button 
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 font-body-md rounded-lg transition-colors focus:outline-none ${
                    selectedSize === size 
                      ? "border-2 border-primary bg-primary-container/10 text-primary font-medium" 
                      : "border border-outline text-on-surface hover:bg-surface-container-high"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 mt-stack-md">
            <button 
              onClick={handleAddToCart}
              className="w-full py-4 bg-primary text-on-primary rounded-xl font-title-md text-title-md hover:bg-primary/90 transition-colors shadow-lg active:scale-[1.02] flex items-center justify-center gap-2"
            >
              {added ? (
                <>
                  <Check size={24} /> Added to Cart
                </>
              ) : (
                "Add to Cart"
              )}
            </button>
            <button 
              onClick={handleBuyNow}
              className="w-full py-4 border border-secondary text-secondary bg-surface rounded-xl font-title-md text-title-md hover:bg-surface-variant transition-colors active:scale-[1.02] text-center"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Info Tabs */}
      <div className="mt-stack-lg border-t border-outline-variant pt-stack-md">
        <div className="flex gap-gutter border-b border-outline-variant overflow-x-auto pb-2">
          {["Benefits", "Usage", "Process"].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-title-md text-title-md pb-2 whitespace-nowrap transition-colors ${
                activeTab === tab 
                  ? "text-primary border-b-2 border-primary" 
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="py-stack-md font-body-md text-on-surface-variant">
          {activeTab === "Benefits" && (
            <p>Rich in Omega-3, vitamins A, D, E, and K. Promotes healthy digestion, glowing skin, and overall vitality according to ancient Ayurvedic principles.</p>
          )}
          {activeTab === "Usage" && (
            <p>Use it for cooking, drizzling over hot rice, baking, or consume a spoonful empty stomach for maximum health benefits.</p>
          )}
          {activeTab === "Process" && (
            <p>Made strictly following the Bilona method: setting curd overnight and churning it bidirectionally to extract pure Makkhan (butter), which is then slowly simmered.</p>
          )}
        </div>
      </div>
    </div>
  );
}
