import Link from "next/link";
import { ScrollText, Award, Heart } from "lucide-react";

export default function OurStory() {
  return (
    <div className="flex-1 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg pb-32 md:pb-stack-lg">
      {/* Hero Section: Our Story */}
      <section className="mb-stack-lg flex flex-col md:flex-row items-center gap-gutter">
        <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1 relative">
          <div className="absolute inset-0 bg-primary-fixed/30 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-2xl z-0 transform -translate-x-4 translate-y-4"></div>
          <img
            alt="Dhenuh Mother Cow and Calf Illustration"
            className="relative z-10 w-full max-w-sm drop-shadow-2xl"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgGlydKnlj_AxW8xT2B06BiFi1ir3VRaauUmhVS1B5KCnZziOcKXrsj0jKDwBT9Qfpl7WokhN5gQl4PUbDbc3eclejg7fbYYZw2jedALKeLjpZ_qAkyTWpcgIvHIA6LhU04DUg72RebSpZNthwUBcxbtSPsWRnOtaDTNZ1_u8Kp-Zn4jst_Q5g-iRRL8TrQJJ6pyTL4bLfn2siABlhmhGpviUe8npz8d4_31mHzHqEK1W45v59Ie7wPjhbMan9nLV7rOs"
          />
        </div>
        
        <div className="w-full md:w-1/2 space-y-stack-sm order-1 md:order-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase tracking-wider">
            <ScrollText size={16} />
            Our Roots
          </div>
          <h2 className="font-display-lg text-display-lg text-primary leading-tight">Sacred Nourishment Since 1994</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Born in the heartland of traditional dairy farming, Dhenuh began as a small family endeavor to preserve the ancient art of ghee making. For decades, we have remained committed to the purity of our local heritage, honoring the sacred bond between the land, the indigenous cows, and our community.
          </p>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Our journey is not just about producing ghee; it's about sustaining a legacy of wellness that has been passed down through generations.
          </p>
        </div>
      </section>

      {/* Mission Statement Bento Box */}
      <section className="mb-stack-lg grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <div className="col-span-1 md:col-span-2 bg-primary-container text-on-primary-container rounded-3xl p-stack-md flex flex-col justify-center relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <Award size={140} />
          </div>
          <h3 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4 relative z-10">Our Mission: Uncompromised Purity</h3>
          <p className="font-body-lg text-body-lg relative z-10 max-w-2xl">
            To deliver health and vitality through 100% pure, ethically sourced, and traditionally crafted A2 cow ghee. We believe that true wellness stems from ingredients that are as close to nature as possible, free from modern adulteration.
          </p>
        </div>
        
        <div className="col-span-1 bg-surface-container-high rounded-3xl p-stack-md flex flex-col items-center justify-center text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center text-secondary shadow-sm">
            <Heart size={32} />
          </div>
          <h4 className="font-title-md text-title-md text-on-surface">Health First</h4>
          <p className="font-body-md text-body-md text-on-surface-variant">Nurturing bodies with Ayurvedic wisdom.</p>
        </div>
      </section>

      {/* The Process (Bilona Method) - Asymmetric Glassmorphism Layout */}
      <section className="mb-stack-lg relative py-stack-lg">
        <div className="absolute inset-0 bg-surface-container rounded-3xl -z-10"></div>
        
        <div className="text-center mb-stack-md px-margin-mobile">
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-2">The Bilona Method</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">An ancient, labor-intensive process that ensures every jar of Dhenuh Ghee retains maximum nutritional value and rich aroma.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-mobile md:px-stack-md">
          {/* Step 1 */}
          <div className="md:col-span-5 bg-surface/60 backdrop-blur-md rounded-2xl p-6 shadow-[0_4px_24px_rgba(121,89,0,0.05)] border border-white/20">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center font-bold">1</div>
              <div>
                <h4 className="font-title-md text-title-md text-on-surface mb-2">A2 Milk Collection</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">We source purely from free-grazing indigenous cows, ensuring the highest quality A2 milk rich in essential proteins.</p>
              </div>
            </div>
          </div>
          
          {/* Image Breakout */}
          <div className="md:col-span-7 h-64 md:h-auto rounded-2xl overflow-hidden shadow-lg relative group">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Curd Setting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrbFZcrzVJFvTF21UM6IHAg4-PiAQUjqTHQLD51EFb3s1U0LJya6ba3yx0XCAfhnlP0ibccRVzIg0VsJ6OxAHZ97XIwsEh_Hw248GDDUkNwNrWvW_VbsrP2mkJsACp4bwWukZqllj71zpxxwp7ZOeEWzYWNVMAeJNRa0BqxGSu89P9sNwe1GoFOW6fqR6-ToW2o98PNi7_yobcLSjgtaROSBaHz0Rq24QQw4WDB-plMRZBK-TcWnZ46g"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <p className="absolute bottom-4 left-4 text-white font-label-sm text-label-sm tracking-widest uppercase">Setting the Curd</p>
          </div>
          
          {/* Step 2 & 3 stacked */}
          <div className="md:col-span-6 space-y-gutter">
            <div className="bg-surface/60 backdrop-blur-md rounded-2xl p-6 shadow-[0_4px_24px_rgba(121,89,0,0.05)] border border-white/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-title-md text-title-md text-on-surface mb-2">Setting the Curd</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">The fresh milk is boiled and left to set into curd overnight in earthen pots, allowing natural fermentation.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-surface/60 backdrop-blur-md rounded-2xl p-6 shadow-[0_4px_24px_rgba(121,89,0,0.05)] border border-white/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-title-md text-title-md text-on-surface mb-2">Hand-Churning (Bilona)</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">The curd is churned bi-directionally using a wooden bilona to separate the makkhan (butter). This crucial step requires immense skill and patience.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Final Step */}
          <div className="md:col-span-6 bg-primary/5 rounded-2xl p-6 shadow-inner border border-primary/10 flex flex-col justify-center">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold">4</div>
              <div>
                <h4 className="font-title-md text-title-md text-on-surface mb-2">Slow Simmering</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">The makkhan is slowly heated over a low, controlled flame. The water evaporates, leaving behind pure, golden, aromatic ghee.</p>
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <div className="w-full h-32 rounded-xl overflow-hidden relative">
                <img
                  className="w-full h-full object-cover"
                  alt="Ghee Simmering"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOSmAOh9eBQQU9W7riU97UoWKgOvd46NVrRxDB17HQT4FweuzffikBE7DFPQ6zosD0-O_fHfXXSt77UUu6X01ft4hJ-cZWD3yrsKiTz7bkqOVot1-X7aly2kK-ceeS8NQoBUVzBPPIogPxkMztIWO-IHiK5d1JN-NZbx9bOxeO7DyFcgjCFsQ4g2RCQ_Vjuk1MwjC-gp6GajELbghhgiYmib5rLQprPyHty7tIAIR0R5ngl-Tn_VJd5w"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Family Behind the Brand */}
      <section className="mb-stack-lg">
        <div className="text-center mb-stack-md">
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-2">Our Family</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Generations of care, poured into every jar.</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-stack-md bg-surface-container-low rounded-3xl p-stack-sm md:p-stack-md">
          <div className="w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden rounded-[30%_70%_70%_30%/30%_30%_70%_70%] relative">
            <img
              className="w-full h-full object-cover"
              alt="Family"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR-KD5I_d0S97zpnfucTzEUCRR0Yj-ZzUagMMFD-0MVpJz2lsBUUWxrYQgFXLilyGZk4y9Vvv19z2jaZkYtpRJn1lhxdDLFPLdvv4nOXGtuLeukRFZq6f4bPTY8pY8HvWlu__FPDsAEqGc6VFeReiaz_SWoZmxbUohYReiSjaQTleTh_XLcvYpjXMrqNCNF_VYzk_waPtlwgVtjxoDh5kAWz7u6A0BMc2bp7k-nI1qGzuG8VufVIdcuA"
            />
          </div>
          
          <div className="w-full md:w-2/3 space-y-4">
            <p className="font-body-lg text-body-lg text-on-surface-variant italic border-l-4 border-primary pl-4">
              "For us, the cows are not just animals; they are family. The ghee we produce is a testament to the respect we hold for nature's cycles and the ancient wisdom of Ayurveda."
            </p>
            <p className="font-body-md text-body-md text-on-surface">
              Started by our grandfather in the early 90s, Dhenuh has grown carefully, ensuring that expansion never compromises our traditional methods. Today, the third generation oversees the farm, bringing modern hygiene standards to ancient practices without losing the soul of Bilona churning.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
