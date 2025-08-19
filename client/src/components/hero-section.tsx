import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative bg-lime hero-pattern min-h-screen flex items-center" data-testid="hero-section">
      <div className="container mx-auto px-4">
        {/* Brand Title */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-navy mb-8 tracking-tight text-shadow" data-testid="text-hero-title">
            AUNTIE'S<br />SAUCES
          </h1>
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
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-navy mb-6 leading-tight" data-testid="text-tagline">
            Condiments for<br />the best of times.<br />
            <span className="text-turquoise">Condiments for</span><br />
            <span className="text-turquoise">the family.</span>
          </h2>
          
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
