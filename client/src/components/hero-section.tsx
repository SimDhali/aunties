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
          
          {/* Free-From Carousel */}
          <div className="mt-8 overflow-hidden">
            <div className="free-from-carousel flex items-center gap-8">
              <div className="flex items-center gap-2 whitespace-nowrap">
                <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <span className="text-black font-medium">Palm oil free</span>
              </div>
              
              <div className="flex items-center gap-2 whitespace-nowrap">
                <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z"/>
                    <path d="m15 9-6 6"/>
                    <path d="m9 9 6 6"/>
                  </svg>
                </div>
                <span className="text-black font-medium">All natural</span>
              </div>
              
              <div className="flex items-center gap-2 whitespace-nowrap">
                <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"/>
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                </div>
                <span className="text-black font-medium">No nasty stuff</span>
              </div>
              
              <div className="flex items-center gap-2 whitespace-nowrap">
                <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 12h18m-9-9v18"/>
                  </svg>
                </div>
                <span className="text-black font-medium">Low salt</span>
              </div>
              
              <div className="flex items-center gap-2 whitespace-nowrap">
                <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center">
                  <span className="text-xs font-bold">GMO</span>
                </div>
                <span className="text-black font-medium">Non-GMO</span>
              </div>
              
              {/* Duplicate items for seamless loop */}
              <div className="flex items-center gap-2 whitespace-nowrap">
                <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <span className="text-black font-medium">Palm oil free</span>
              </div>
              
              <div className="flex items-center gap-2 whitespace-nowrap">
                <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z"/>
                    <path d="m15 9-6 6"/>
                    <path d="m9 9 6 6"/>
                  </svg>
                </div>
                <span className="text-black font-medium">All natural</span>
              </div>
              
              <div className="flex items-center gap-2 whitespace-nowrap">
                <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"/>
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                </div>
                <span className="text-black font-medium">No nasty stuff</span>
              </div>
              
              <div className="flex items-center gap-2 whitespace-nowrap">
                <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 12h18m-9-9v18"/>
                  </svg>
                </div>
                <span className="text-black font-medium">Low salt</span>
              </div>
              
              <div className="flex items-center gap-2 whitespace-nowrap">
                <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center">
                  <span className="text-xs font-bold">GMO</span>
                </div>
                <span className="text-black font-medium">Non-GMO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
