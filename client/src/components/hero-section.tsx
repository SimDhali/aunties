import { Button } from "@/components/ui/button";
import auntieLogoUrl from "../assets/auntie-logo.png";
import saucesBackgroundUrl from "../assets/sauces-background.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col" data-testid="hero-section">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${saucesBackgroundUrl})` }}
      ></div>
      
      {/* Content */}
      <div className="flex-1 relative z-10">

      </div>
      
      {/* Bottom Section with Logo on Green Background - Like Billy's */}
      <div className="relative z-10 bg-lime py-8 wavy-cloud-top">
        <div className="container mx-auto px-4 text-center">
          <img 
            src={auntieLogoUrl} 
            alt="Auntie's Logo" 
            className="mx-auto w-24 md:w-32 lg:w-40 h-auto"
            data-testid="img-auntie-logo-bottom"
          />
        </div>
      </div>
    </section>
  );
}
