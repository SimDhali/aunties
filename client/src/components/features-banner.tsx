import { Leaf, Sprout, Heart, Star } from "lucide-react";

export default function FeaturesBanner() {
  return (
    <section className="bg-bright-yellow py-4" data-testid="features-banner">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center space-x-4 md:space-x-12 text-navy">
          <div className="flex items-center space-x-2 mb-2 md:mb-0" data-testid="feature-natural">
            <Leaf className="h-5 w-5" />
            <span className="font-semibold text-sm md:text-base">All Natural</span>
          </div>
          <div className="flex items-center space-x-2 mb-2 md:mb-0" data-testid="feature-no-nasty">
            <Sprout className="h-5 w-5" />
            <span className="font-semibold text-sm md:text-base">No Nasty Stuff</span>
          </div>
          <div className="flex items-center space-x-2 mb-2 md:mb-0" data-testid="feature-handmade">
            <Heart className="h-5 w-5" />
            <span className="font-semibold text-sm md:text-base">Handmade</span>
          </div>
          <div className="flex items-center space-x-2 mb-2 md:mb-0" data-testid="feature-original">
            <Star className="h-5 w-5" />
            <span className="font-semibold text-sm md:text-base">Original Recipes</span>
          </div>
        </div>
      </div>
    </section>
  );
}
