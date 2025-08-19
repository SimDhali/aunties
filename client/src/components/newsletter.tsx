import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  return (
    <section className="bg-bright-yellow py-20" data-testid="newsletter">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-navy mb-8" data-testid="text-section-title">
            Join the Family
          </h2>
          <p className="text-xl md:text-2xl text-navy mb-8" data-testid="text-follow-us">
            Follow Us for more behind the scenes & recipes
          </p>
          <p className="text-lg text-navy mb-12" data-testid="text-hashtag">
            Use #eatwithaunties to be featured on our feed
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto" data-testid="newsletter-form">
            <Input 
              type="email" 
              placeholder="email@example.com" 
              className="flex-1 p-4 rounded-full border-2 border-navy focus:border-turquoise text-lg" 
              data-testid="input-email"
            />
            <Button 
              className="bg-navy text-bright-yellow px-8 py-4 rounded-full text-lg font-bold hover:bg-turquoise hover:text-navy transition-all duration-300" 
              data-testid="button-subscribe"
            >
              SUBSCRIBE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
