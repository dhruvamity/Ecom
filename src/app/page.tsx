"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, Beaker, Droplets, Coffee, Package, Plus, Leaf, ScrollText, HeartHandshake } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Home() {
  const { addToCart } = useCart();

  const bestSellers = [
    {
      id: "prod-1",
      name: "Pure Cow Ghee - 1L",
      desc: "Traditional hand-churned ghee made from the milk of grass-fed cows.",
      price: 850,
      priceFormatted: "₹850",
      tag: "A2 Quality",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTdgk9hOM8jUNygknMleX7MaFST2s1flrcFyy5xZLU8Qa5ONVd8UBgMLfORCEXe2MKR4WSB3aZ2gEyyUcEAe02_TW3rY-TeylDUhp4df7uND5ZiVZh3Sk8MQ8_x68tKG0pWja0bf6d10gl2Va1mpj3M3N0WNTyHLCSTf_ImkSJWbUpoJsMI4jhpGfMq-ZcsrrM2VQjnh2VM17y0J_3IMYff97LJQIv_MnXk7XWnakU2WK4DXciY6SeblfsOkgqw7kEsj4"
    },
    {
      id: "prod-2",
      name: "Vedic A2 Ghee - 500ml",
      desc: "Sacred nourishment prepared using the ancient Bilona method.",
      price: 550,
      priceFormatted: "₹550",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBY4-qgU_4DKkN4xjS0Z3GheaRbL-W7rcwBYn97vGTeT3f60I-kD1x0R8fHupzrOuuvxRizpUZkqiubKkamHJvWUHd9-3siJdArINWsS72Irojn9KXyed4N50Nshin588QSWpx0TVWhNHx8uVfbtTxN521fCWd0Le5TL7jR2zJOaDnpz1kGDDdeaLDftORHh-F1A2XWuglB19jAF8ujNNwvwVznTw-Y5nT9PMJUhJXV91TAwsx1HoL4Aw"
    },
    {
      id: "prod-3",
      name: "Family Pack Ghee - 2L",
      desc: "Perfect for daily use, providing authentic taste and health benefits.",
      price: 1600,
      priceFormatted: "₹1600",
      tag: "Best Value",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA97bVkNNcxqyfO2KfgpouFaL4JsGpZGcQdoIHQujRUjBfQ4We29v2GOas_l6BIhSAKEbUQ5ToTv79M1ZUfnf7SlSwnBr__Ewct0k_Zz8drWg5p-TBnDCDYD1aHCH0vqWE7q4FIspM7Ljoj6kYyQALxW0Oa8AMR81h33rm-BVyAA5ATOTxuJdQW5MPIp5oCgB0-u_YZN-_SRkPSC0tyfRsKTWrij2gauvk7vgBwCdjs_yAsL9Qa4PDXhQ"
    }
  ];

  const handleAddToCart = (e: React.MouseEvent, product: any) => {
    e.preventDefault();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  };

  return (
    <div className="w-full h-[calc(100vh-64px)] overflow-y-auto scroll-smooth md:snap-y md:snap-mandatory scroll-pt-16 pb-28 md:pb-8">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col">
        
        {/* Hero Section */}
        <section className="snap-start shrink-0 min-h-fit py-12 md:min-h-[calc(100vh-64px)] flex flex-col justify-center gap-stack-md">
          {/* Carousel Banner (Top) */}
          <div className="w-full bg-primary/10 border border-primary/20 text-primary p-4 rounded-xl text-center hidden md:block font-title-md">
            Carousel Banner
          </div>

          <div className="w-full flex flex-col md:grid md:grid-cols-12 gap-stack-md items-center">
            {/* Left Column: Text & Product Card */}
            <div className="w-full md:col-span-3 flex flex-col justify-center gap-stack-md order-2 md:order-1">
              <div className="text-on-surface">
                <h2 className="font-display-lg text-display-lg mb-stack-sm text-primary drop-shadow-sm">
                  Sacred Nourishment<br />from Local Heritage
                </h2>
                <p className="font-body-md text-body-md mb-stack-md text-on-surface-variant">
                  Experience the purity of traditional Ayurvedic wellness in every golden drop.
                </p>
                <Link href="/product" className="inline-block bg-primary text-on-primary px-gutter py-base rounded-full font-label-sm text-label-sm uppercase hover:bg-primary-container hover:text-on-primary-container transition-all shadow-md active:scale-95">
                  Explore Collection
                </Link>
              </div>

              {/* Product Card placeholder for left side */}
              <div className="hidden md:flex flex-col bg-surface-container-lowest rounded-xl shadow-md overflow-hidden border border-surface-variant mt-4">
                <div className="h-32 bg-surface-variant overflow-hidden">
                   <img src={bestSellers[0].image} className="w-full h-full object-cover" alt={bestSellers[0].name} />
                </div>
                <div className="p-4">
                  <span className="font-title-sm text-on-surface block truncate">{bestSellers[0].name}</span>
                  <span className="font-title-sm text-primary block mt-1">{bestSellers[0].priceFormatted}</span>
                </div>
              </div>
            </div>

            {/* Center Column: Main Image */}
            <div className="w-full md:col-span-6 relative h-[60vh] md:h-[70vh] rounded-xl overflow-hidden shadow-xl order-1 md:order-2">
              <img
                alt="Sacred Nourishment from Local Heritage"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfBBoa37PfaOaz54pltag1tb2_-zfSC3jC51d8LuNYfWam33Tx29zf4lnym-UIBOTRb0uZ69l_0GWS8aD0vN8vjgNhh5phXaqPLxz2uJGPnqal456sQTTq6NtZJOpMreFOKUtsGK0JzkG_HbMNRTrm_M4hkqcR4FSmghlDu0tVyhU3TB8zm1u3z4sbxdQ5tXrB_ZCK_ko7P1zcAgmizqaxvwaktxjAf9f5_YdmcMSW6JLaFAuYbHE2x8EGR2i5csrMbZM"
              />
              {/* Mobile text overlay (hidden on desktop since it's extracted to the left column) */}
              <div className="md:hidden absolute inset-0 bg-gradient-to-t from-surface-tint/80 to-transparent flex flex-col justify-end p-margin-mobile">
                <div className="max-w-xl text-on-primary">
                  <h2 className="font-display-lg text-display-lg mb-stack-sm text-surface-bright drop-shadow-md">
                    Sacred Nourishment<br />from Local Heritage
                  </h2>
                  <Link href="/product" className="inline-block bg-primary text-on-primary px-gutter py-base rounded-full font-label-sm text-label-sm uppercase hover:bg-primary-container shadow-md">
                    Explore Collection
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Additional Product Cards */}
            <div className="w-full md:col-span-3 hidden md:flex flex-col gap-stack-md order-3">
              <div className="flex flex-col bg-surface-container-lowest rounded-xl shadow-md overflow-hidden border border-surface-variant">
                <div className="h-32 bg-surface-variant overflow-hidden">
                   <img src={bestSellers[1].image} className="w-full h-full object-cover" alt={bestSellers[1].name} />
                </div>
                <div className="p-4">
                  <span className="font-title-sm text-on-surface block truncate">{bestSellers[1].name}</span>
                  <span className="font-title-sm text-primary block mt-1">{bestSellers[1].priceFormatted}</span>
                </div>
              </div>
              <div className="flex flex-col bg-surface-container-lowest rounded-xl shadow-md overflow-hidden border border-surface-variant">
                <div className="h-32 bg-surface-variant overflow-hidden">
                   <img src={bestSellers[2].image} className="w-full h-full object-cover" alt={bestSellers[2].name} />
                </div>
                <div className="p-4">
                  <span className="font-title-sm text-on-surface block truncate">{bestSellers[2].name}</span>
                  <span className="font-title-sm text-primary block mt-1">{bestSellers[2].priceFormatted}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Search Bar (Bottom) */}
          <div className="w-full max-w-4xl mx-auto mt-4 hidden md:block">
            <div className="relative flex items-center bg-surface-container-lowest rounded-full shadow-md overflow-hidden border border-outline-variant focus-within:border-primary transition-colors">
              <Search className="text-on-surface-variant absolute left-6" size={24} />
              <input
                className="w-full bg-transparent border-none py-4 pl-16 pr-gutter font-body-lg text-on-surface focus:ring-0 placeholder:text-on-surface-variant/60 outline-none"
                placeholder="Search for pure ghee..."
                type="text"
              />
            </div>
          </div>
        </section>

        {/* Shop by Quantity (Bento Grid) & Search */}
        <section className="snap-start shrink-0 min-h-fit py-12 md:min-h-[calc(100vh-64px)] flex flex-col justify-center gap-stack-lg">
          {/* Search Bar - Hidden on Desktop since it is in Hero */}
          <div className="w-full max-w-2xl mx-auto md:hidden">
            <div className="relative flex items-center bg-surface-container-highest rounded-full shadow-sm overflow-hidden border border-outline-variant focus-within:border-primary transition-colors">
              <Search className="text-on-surface-variant absolute left-4" size={24} />
              <input
                className="w-full bg-transparent border-none py-base pl-12 pr-gutter font-body-md text-on-surface focus:ring-0 placeholder:text-on-surface-variant/60 outline-none"
                placeholder="Search for pure ghee..."
                type="text"
              />
            </div>
          </div>

          <div className="w-full">
            <h3 className="font-title-md text-title-md text-on-surface mb-stack-md text-center md:text-left">Shop by Quantity</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-base md:gap-gutter">
              {[
                { size: "500ml", icon: Beaker, href: "/product" },
                { size: "1 Liter", icon: Droplets, href: "/product" },
                { size: "2 Liters", icon: Coffee, href: "/product" },
                { size: "5 Liters", icon: Package, href: "/product" },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  className="group relative aspect-square rounded-xl overflow-hidden bg-surface-container-low shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center p-base border border-surface-variant"
                  href={item.href}
                >
                  <div className="w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center mb-base group-hover:scale-105 transition-transform">
                    <item.icon className="text-primary" size={32} />
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface">{item.size}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Best Sellers */}
        <section className="snap-start shrink-0 min-h-fit py-12 md:min-h-[calc(100vh-64px)] flex flex-col justify-center">
          <h3 className="font-title-md text-title-md text-on-surface mb-stack-md text-center md:text-left">Our Best Sellers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {bestSellers.map((product) => (
              <div key={product.id} className="flex flex-col bg-surface-container-lowest rounded-xl shadow-[0_4px_24px_rgba(119,87,77,0.15)] overflow-hidden hover:shadow-lg transition-shadow">
                <Link href="/product" className="relative aspect-[4/3] bg-surface-variant overflow-hidden group block cursor-pointer">
                  <img
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={product.image}
                  />
                  {product.tag && (
                    <div className="absolute top-base right-base bg-tertiary text-on-tertiary px-2 py-1 rounded-full font-label-sm text-label-sm">{product.tag}</div>
                  )}
                </Link>
                <div className="p-gutter flex flex-col gap-base flex-grow">
                  <Link href="/product" className="font-title-md text-title-md text-on-surface hover:text-primary transition-colors cursor-pointer">{product.name}</Link>
                  <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">{product.desc}</p>
                  <div className="mt-auto pt-base flex justify-between items-center">
                    <span className="font-title-md text-title-md text-primary">{product.priceFormatted}</span>
                    <button 
                      onClick={(e) => handleAddToCart(e, product)}
                      className="bg-primary text-on-primary w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-primary-container hover:text-on-primary-container transition-colors active:scale-95"
                    >
                      <Plus size={24} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Dhenuh? */}
        <section className="snap-start shrink-0 min-h-fit py-12 md:min-h-[calc(100vh-64px)] flex flex-col justify-center">
          <div className="w-full bg-surface-container-low rounded-xl p-margin-mobile md:p-margin-desktop border border-surface-variant shadow-sm">
            <h3 className="font-title-md text-title-md text-on-surface mb-stack-md text-center">Why Choose Dhenuh?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter text-center">
              <div className="flex flex-col items-center gap-base">
                <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center mb-2">
                  <Leaf size={24} />
                </div>
                <h4 className="font-label-sm text-label-sm text-on-surface uppercase">100% Natural</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">No preservatives or additives. Just pure, wholesome goodness from nature.</p>
              </div>
              <div className="flex flex-col items-center gap-base">
                <div className="w-12 h-12 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center mb-2">
                  <ScrollText size={24} />
                </div>
                <h4 className="font-label-sm text-label-sm text-on-surface uppercase">Traditional Methods</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">Crafted using the authentic Bilona method to preserve vital nutrients.</p>
              </div>
              <div className="flex flex-col items-center gap-base">
                <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center mb-2">
                  <HeartHandshake size={24} />
                </div>
                <h4 className="font-label-sm text-label-sm text-on-surface uppercase">Ethically Sourced</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">Supporting local farmers and ensuring the well-being of our cows.</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
