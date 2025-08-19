import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-lime py-20" data-testid="about-section">
      <div className="container mx-auto px-4 text-center">
        {/* Auntie Icon */}
        <div className="mb-8" data-testid="auntie-icon">
          <div className="w-24 h-24 bg-navy rounded-full mx-auto flex items-center justify-center">
            <Users className="h-8 w-8 text-lime" />
          </div>
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-navy mb-8" data-testid="text-section-title">
          Auntie is on a mission
        </h2>
        <p className="text-xl md:text-2xl text-navy mb-8 max-w-3xl mx-auto leading-relaxed" data-testid="text-mission-statement">
          To bring authentic Indian flavors to every kitchen, using traditional recipes passed down through generations.
        </p>
        
        <Button 
          className="bg-turquoise text-navy px-12 py-4 rounded-full text-xl font-bold hover:bg-navy hover:text-turquoise transition-all duration-300 transform hover:scale-105" 
          data-testid="button-who-is-auntie"
        >
          Who is Auntie?
        </Button>
      </div>
    </section>
  );
}
