export default function IngredientsSection() {
  const features = [
    {
      title: "Made with 100% ethically-sourced ingredients",
      description: "Our sauces are crafted using only the finest, ethically-sourced ingredients, ensuring every bottle supports sustainable farming."
    },
    {
      title: "Bold and unique flavor combinations",
      description: "From tangy raspberry crunch to spicy chilli caramel, Auntie's offers flavors you won't find on supermarket shelves."
    },
    {
      title: "All-natural, high-quality ingredients",
      description: "We use only pure, natural ingredients—no artificial preservatives, colors, or flavors—so you can taste the difference in every bite."
    },
    {
      title: "Small batch, handcrafted perfection",
      description: "Each sauce is made in small batches, ensuring the highest quality and attention to detail in every bite."
    },
    {
      title: "Eco-friendly packaging",
      description: "Our packaging is not just fun, but also 100% recyclable, helping you enjoy your sauce with a clear conscience."
    },
    {
      title: "Supporting sauce makers",
      description: "Every purchase of Auntie's Sauces contributes to fair wages and better living conditions for sauce makers around the world."
    }
  ];

  return (
    <section className="bg-mint py-20 relative geometric-pattern-triangles curved-top curved-bottom" data-testid="ingredients-section">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 right-10 w-28 h-28 bg-coral rounded-full floating"></div>
        <div className="absolute bottom-40 left-20 w-36 h-36 bg-lavender rounded-full floating" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-peach rounded-full floating" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-navy mb-8" data-testid="text-section-title">
            What we're made of
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Central Product Image */}
          <div className="text-center" data-testid="product-showcase">
            <img 
              src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&h=800&fit=crop" 
              alt="Auntie's Sauce with Ingredients" 
              className="mx-auto rounded-3xl shadow-2xl transform rotate-3 max-w-md w-full" 
              data-testid="img-featured-product"
            />
          </div>
          
          {/* Feature Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300" 
                data-testid={`feature-card-${index}`}
              >
                <h4 className="text-lg md:text-xl font-bold text-navy mb-3" data-testid={`text-feature-title-${index}`}>
                  {feature.title}
                </h4>
                <p className="text-navy text-sm md:text-base" data-testid={`text-feature-description-${index}`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
