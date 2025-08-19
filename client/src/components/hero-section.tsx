import { Button } from "@/components/ui/button";
import auntieLogoUrl from "../assets/auntie-logo.png";
import auntiesSaucesLogoUrl from "../assets/aunties-sauces-logo.png";

export default function HeroSection() {
  return (
    <section className="relative bg-lime geometric-pattern-dots min-h-screen flex items-center curved-bottom" data-testid="hero-section">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-coral rounded-full opacity-60 floating"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-lavender rounded-full opacity-70 floating" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-peach rounded-full opacity-50 floating" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-sage rounded-full opacity-80 floating" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-turquoise rounded-full opacity-60 floating" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Brand Logo and Title */}
        <div className="text-center mb-12">
          <div className="mb-8">
            <img 
              src={auntieLogoUrl} 
              alt="Auntie's Logo" 
              className="mx-auto w-32 md:w-48 lg:w-56 h-auto floating"
              data-testid="img-auntie-logo"
            />
          </div>
          <img 
            src={auntiesSaucesLogoUrl} 
            alt="Auntie's Sauces - est. 1960" 
            className="mx-auto w-64 md:w-80 lg:w-96 h-auto mb-8"
            data-testid="img-aunties-sauces-title"
          />
        </div>
        
        {/* Product Showcase Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12" data-testid="product-showcase">
          {/* Indian Ketchup */}
          <img 
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&h=400&fit=crop" 
            alt="Indian Ketchup" 
            className="rounded-xl shadow-lg transform rotate-12 floating w-full h-48 object-cover" 
            data-testid="img-product-indian-ketchup"
          />
          
          {/* Chilli Mango */}
          <img 
            src="https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=300&h=400&fit=crop" 
            alt="Chilli Mango Sauce" 
            className="rounded-xl shadow-lg transform -rotate-6 floating w-full h-48 object-cover" 
            style={{ animationDelay: '0.5s' }}
            data-testid="img-product-chilli-mango"
          />
          
          {/* Tamarind */}
          <img 
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&h=400&fit=crop&sat=-100" 
            alt="Tamarind Sauce" 
            className="rounded-xl shadow-lg transform rotate-6 floating w-full h-48 object-cover" 
            style={{ animationDelay: '1s' }}
            data-testid="img-product-tamarind"
          />
          
          {/* Ginger & Coriander */}
          <img 
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=400&fit=crop" 
            alt="Ginger & Coriander Sauce" 
            className="rounded-xl shadow-lg transform -rotate-12 floating w-full h-48 object-cover" 
            style={{ animationDelay: '1.5s' }}
            data-testid="img-product-ginger-coriander"
          />
          
          {/* Additional products for larger screens */}
          <img 
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&h=400&fit=crop&hue=60" 
            alt="Sauce Collection" 
            className="rounded-xl shadow-lg transform rotate-3 floating w-full h-48 object-cover hidden md:block" 
            style={{ animationDelay: '2s' }}
            data-testid="img-product-collection-1"
          />
          
          <img 
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=400&fit=crop&hue=120" 
            alt="Spice Collection" 
            className="rounded-xl shadow-lg transform -rotate-8 floating w-full h-48 object-cover hidden lg:block" 
            style={{ animationDelay: '2.5s' }}
            data-testid="img-product-spice-collection"
          />
        </div>
        
        {/* Tagline */}
        <div className="text-center">
          {/* Call to Action Speech Bubble */}
          <div className="relative inline-block bg-white rounded-full px-6 md:px-8 py-4 shadow-2xl transform rotate-3 mt-8" data-testid="cta-bubble">
            <span className="text-xl md:text-2xl font-bold text-navy">Sweet adventures await!</span>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
