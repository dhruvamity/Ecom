import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full px-margin-desktop py-stack-lg flex flex-col md:flex-row justify-between items-center gap-base bg-surface-container-highest dark:bg-surface-dim border-t border-outline-variant mt-stack-lg pb-24 md:pb-stack-lg">
      <div className="font-headline-lg text-headline-lg text-secondary mb-4 md:mb-0">Dhenuh</div>
      <div className="flex flex-wrap justify-center gap-base md:gap-gutter font-body-md text-body-md">
        <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</Link>
        <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors">Terms of Service</Link>
        <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors">Shipping Info</Link>
        <Link href="/contact" className="text-on-surface-variant hover:text-primary transition-colors">Contact Us</Link>
        <Link href="/story" className="text-on-surface-variant hover:text-primary transition-colors">Our Story</Link>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant text-center md:text-right mt-4 md:mt-0">
        © {new Date().getFullYear()} Dhenuh Cow Ghee. Traditional Ayurvedic Heritage.
      </p>
    </footer>
  );
}
