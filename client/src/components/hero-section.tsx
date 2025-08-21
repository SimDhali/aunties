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
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="text-right text-black font-bold text-2xl md:text-3xl lg:text-4xl" style={{ flexBasis: '40%' }}>
             ALL-NATURAL INGREDIENTS
            </div>
            <div className="flex-shrink-0 mx-8">
              <img 
                src={auntieLogoUrl} 
                alt="Auntie's Logo" 
                className="w-24 md:w-32 lg:w-40 h-auto"
                data-testid="img-auntie-logo-bottom"
              />
            </div>
            <div className="flex-1 text-left text-black font-bold text-2xl md:text-3xl lg:text-4xl">
              INDIAN INSPIRED
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
