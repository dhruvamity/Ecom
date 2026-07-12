"use client";
import { useState } from "react";
import { Phone, MessageCircle, Mail, MapPin, Globe, Share2, Plus, Minus } from "lucide-react";

export default function ContactUs() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name) {
      newErrors.name = "Full Name is required";
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    }
    if (!formData.message) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      alert("Message sent successfully! We will get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="flex-grow pb-24 md:pb-0">
      {/* Hero Section */}
      <section className="relative px-margin-mobile md:px-margin-desktop py-stack-lg flex flex-col items-center justify-center text-center">
        <h1 className="font-display-lg text-display-lg text-on-surface mb-stack-sm">Get in Touch</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          We're here to help with your sacred nourishment journey. Reach out with any questions about our traditional Ayurvedic heritage ghee.
        </p>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter pb-stack-lg">
        {/* Contact Form Area */}
        <div className="md:col-span-7 bg-surface-container-lowest rounded-xl shadow-[0_4px_24px_rgba(119,87,77,0.15)] p-stack-md md:p-stack-lg relative overflow-hidden">
          {/* Subtle decorative element */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary-container/20 rounded-full blur-2xl"></div>
          
          <h2 className="font-title-md text-title-md text-on-surface mb-stack-md">Send us a Message</h2>
          <form className="space-y-stack-sm relative z-10" onSubmit={handleSend}>
            <div className="space-y-base">
              <label className="font-label-sm text-label-sm text-on-surface-variant block" htmlFor="name">Full Name</label>
              <input 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className={`w-full bg-surface-bright border-b ${errors.name ? 'border-error' : 'border-outline-variant'} focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-on-surface transition-colors outline-none`} 
                id="name" 
                placeholder="Your Name" 
                type="text" 
              />
              {errors.name && <p className="text-error text-xs mt-1">{errors.name}</p>}
            </div>
            
            <div className="space-y-base">
              <label className="font-label-sm text-label-sm text-on-surface-variant block" htmlFor="email">Email Address</label>
              <input 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className={`w-full bg-surface-bright border-b ${errors.email ? 'border-error' : 'border-outline-variant'} focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-on-surface transition-colors outline-none`} 
                id="email" 
                placeholder="your@email.com" 
                type="email" 
              />
              {errors.email && <p className="text-error text-xs mt-1">{errors.email}</p>}
            </div>
            
            <div className="space-y-base pb-stack-sm">
              <label className="font-label-sm text-label-sm text-on-surface-variant block" htmlFor="message">Your Message</label>
              <textarea 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className={`w-full bg-surface-bright border-b ${errors.message ? 'border-error' : 'border-outline-variant'} focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-on-surface transition-colors resize-none outline-none`} 
                id="message" 
                placeholder="How can we help you today?" 
                rows={4}
              ></textarea>
              {errors.message && <p className="text-error text-xs mt-1">{errors.message}</p>}
            </div>
            
            <button className="w-full md:w-auto px-8 py-3 bg-primary text-on-primary font-label-sm text-label-sm rounded-full hover:scale-[1.02] active:scale-95 transition-all duration-200 shadow-md" type="submit">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info & Map Area */}
        <div className="md:col-span-5 space-y-gutter">
          {/* Contact Cards */}
          <div className="bg-surface-container-low rounded-xl p-stack-md flex flex-col gap-stack-sm">
            <div className="flex items-start gap-base">
              <Phone className="text-primary bg-primary-container p-2 rounded-full w-10 h-10" />
              <div>
                <h3 className="font-label-sm text-label-sm text-on-surface-variant">Phone</h3>
                <p className="font-body-md text-on-surface">+91 98765 43210</p>
              </div>
            </div>
            
            <div className="flex items-start gap-base">
              <MessageCircle className="text-primary bg-primary-container p-2 rounded-full w-10 h-10" />
              <div>
                <h3 className="font-label-sm text-label-sm text-on-surface-variant">WhatsApp</h3>
                <p className="font-body-md text-on-surface">+91 98765 43210</p>
              </div>
            </div>
            
            <div className="flex items-start gap-base">
              <Mail className="text-primary bg-primary-container p-2 rounded-full w-10 h-10" />
              <div>
                <h3 className="font-label-sm text-label-sm text-on-surface-variant">Email</h3>
                <p className="font-body-md text-on-surface">hello@dhenuh.com</p>
              </div>
            </div>
          </div>

          {/* Map (Placeholder image) */}
          <div className="rounded-xl overflow-hidden shadow-sm h-48 relative bg-surface-variant flex items-center justify-center">
            <div className="absolute inset-0 bg-cover bg-center w-full h-full opacity-80" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAu5pF09isUS1R9DxospLxsmj0pDgKwDlGoSZ9sSWNyDEAnBGwVyLeA3ZxkUic6YdnSe9Er9pnFNAvDb2d1BQnRpEfpV4xpja9Hv1fo17CHOEXNqVQ_WDBGstdbt531LewcK2RjSplXRNeVi2Ur2QB11_9kGB3f8GKDTCmyf1qVBCG-VtVJjYui8RuMADYriiVxa0ZfhAVRpQe412sI029_s_eQgTxFJwgItfZwazsWMZu7qLjrH0LZog')" }}></div>
            <div className="relative z-10 bg-surface/90 backdrop-blur px-4 py-2 rounded-full font-label-sm text-on-surface flex items-center gap-2 border border-outline-variant/30">
              <MapPin className="text-primary" size={18} />
              Heritage Farm, Rajasthan
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-gutter pt-stack-sm">
            <a className="text-secondary hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-variant" href="#">
              <Globe size={24} />
            </a>
            <a className="text-secondary hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-variant" href="#">
              <Share2 size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
        <h2 className="font-title-md text-title-md text-center text-on-surface mb-stack-md">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-stack-sm">
          {/* FAQ Item 1 */}
          <div className="border-b border-outline-variant pb-base">
            <button className="w-full flex justify-between items-center py-2 text-left hover:text-primary transition-colors text-on-surface font-title-md text-title-md" onClick={() => toggleFaq(1)}>
              <span>How long does delivery take?</span>
              {openFaq === 1 ? <Minus size={20} /> : <Plus size={20} />}
            </button>
            <div className={`font-body-md text-on-surface-variant pt-2 pb-4 ${openFaq === 1 ? 'block' : 'hidden'}`}>
              Standard delivery typically takes 3-5 business days within major metropolitan areas. Rural deliveries may take up to 7 days.
            </div>
          </div>
          
          {/* FAQ Item 2 */}
          <div className="border-b border-outline-variant pb-base">
            <button className="w-full flex justify-between items-center py-2 text-left hover:text-primary transition-colors text-on-surface font-title-md text-title-md" onClick={() => toggleFaq(2)}>
              <span>Do you offer bulk ordering?</span>
              {openFaq === 2 ? <Minus size={20} /> : <Plus size={20} />}
            </button>
            <div className={`font-body-md text-on-surface-variant pt-2 pb-4 ${openFaq === 2 ? 'block' : 'hidden'}`}>
              Yes, we offer special rates for bulk orders over 5kg. Please contact us via email for a custom quote.
            </div>
          </div>
          
          {/* FAQ Item 3 */}
          <div className="border-b border-outline-variant pb-base">
            <button className="w-full flex justify-between items-center py-2 text-left hover:text-primary transition-colors text-on-surface font-title-md text-title-md" onClick={() => toggleFaq(3)}>
              <span>Is your Ghee certified A2?</span>
              {openFaq === 3 ? <Minus size={20} /> : <Plus size={20} />}
            </button>
            <div className={`font-body-md text-on-surface-variant pt-2 pb-4 ${openFaq === 3 ? 'block' : 'hidden'}`}>
              Absolutely. All our ghee is sourced from certified indigenous A2 cows and prepared using the traditional bilona method.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
