import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FlavoursSection() {
  const products = [
    {
      id: 1,
      name: "Indian Ketchup",
      description: "Rich, tangy, and perfectly spiced - those are proper adjectives to define this amazing condiment.",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=600&fit=crop",
      price: "$15.00"
    },
    {
      id: 2,
      name: "Chilli Mango",
      description: "Sweet meets heat in this tropical fusion sauce that brings sunshine to every meal.",
      image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=600&fit=crop",
      price: "$15.00"
    },
    {
      id: 3,
      name: "Tamarind",
      description: "A classic tangy sauce with deep, complex flavors that enhance any dish with authentic taste.",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=600&fit=crop&sat=-100",
      price: "$15.00"
    },
    {
      id: 4,
      name: "Ginger & Coriander",
      description: "Fresh, zesty, and aromatic - this vibrant sauce brings garden-fresh flavors to your table.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop",
      price: "$15.00"
    }
  ];

  return (
    <section className="bg-turquoise py-20 relative overflow-hidden geometric-pattern-dots curved-top curved-bottom" data-testid="flavours-section">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-coral rounded-full floating"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-peach rounded-full floating" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-lavender rounded-full floating" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-bright-yellow rounded-full floating" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-mint rounded-full floating" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-navy mb-4" data-testid="text-section-title">
            Our flavours
          </h2>
          <p className="text-xl md:text-2xl text-navy font-medium" data-testid="text-section-subtitle">
            We're not here to eat spiders!
          </p>
        </div>
        
        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="product-card bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300" 
              data-testid={`card-product-${product.id}`}
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-64 object-cover rounded-xl mb-6" 
                data-testid={`img-product-${product.id}`}
              />
              <h3 className="text-2xl font-bold text-navy mb-3" data-testid={`text-product-name-${product.id}`}>
                {product.name}
              </h3>
              <p className="text-navy mb-4 text-sm" data-testid={`text-product-description-${product.id}`}>
                {product.description}
              </p>
              <Button 
                className="w-full bg-navy text-white hover:bg-turquoise hover:text-navy transition-all duration-300 rounded-full font-bold py-3" 
                data-testid={`button-shop-${product.id}`}
              >
                SHOP NOW
              </Button>
            </div>
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <div className="flex justify-center items-center space-x-4">
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full bg-navy text-turquoise border-navy hover:bg-turquoise hover:text-navy" 
            data-testid="button-prev-product"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full bg-navy text-turquoise border-navy hover:bg-turquoise hover:text-navy" 
            data-testid="button-next-product"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
