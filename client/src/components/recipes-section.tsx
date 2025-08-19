import { Button } from "@/components/ui/button";

export default function RecipesSection() {
  const recipes = [
    {
      id: 1,
      title: "Greg's Tamarind Cheese on Toast",
      description: "A fusion twist on classic comfort food.",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Auntie's Punjabi Rajma for the family",
      description: "Traditional comfort food that brings families together.",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Indian-style Nachos",
      description: "East meets West in this delicious fusion snack.",
      image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="bg-lavender py-20 relative geometric-pattern-dots curved-top curved-bottom" data-testid="recipes-section">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div className="absolute top-20 right-20 w-30 h-30 bg-coral rounded-full floating"></div>
        <div className="absolute bottom-40 left-10 w-24 h-24 bg-mint rounded-full floating" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-18 h-18 bg-sage rounded-full floating" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-navy mb-4" data-testid="text-section-title">
            #EatWithAunties
          </h2>
          <p className="text-xl md:text-2xl text-navy font-medium" data-testid="text-section-subtitle">
            Easy recipes to try at home!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {recipes.map((recipe) => (
            <div 
              key={recipe.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2" 
              data-testid={`card-recipe-${recipe.id}`}
            >
              <img 
                src={recipe.image} 
                alt={recipe.title} 
                className="w-full h-48 object-cover" 
                data-testid={`img-recipe-${recipe.id}`}
              />
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold text-navy mb-3" data-testid={`text-recipe-title-${recipe.id}`}>
                  {recipe.title}
                </h3>
                <p className="text-navy mb-4" data-testid={`text-recipe-description-${recipe.id}`}>
                  {recipe.description}
                </p>
                <Button 
                  variant="ghost" 
                  className="text-turquoise font-bold hover:underline hover:bg-transparent p-0" 
                  data-testid={`button-try-recipe-${recipe.id}`}
                >
                  Try Recipe →
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            className="bg-navy text-turquoise px-12 py-4 rounded-full text-xl font-bold hover:bg-lime hover:text-navy transition-all duration-300 transform hover:scale-105" 
            data-testid="button-more-recipes"
          >
            More Recipes
          </Button>
        </div>
      </div>
    </section>
  );
}
