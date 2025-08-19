import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function StoreLocator() {
  return (
    <section className="bg-peach py-20 relative geometric-pattern-triangles curved-top curved-bottom" data-testid="store-locator">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-40 left-10 w-28 h-28 bg-turquoise rounded-full floating"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-lavender rounded-full floating" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-20 right-1/3 w-20 h-20 bg-mint rounded-full floating" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-navy mb-8" data-testid="text-section-title">
            Find your nearest stockist
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Search Form */}
          <div className="bg-white p-8 rounded-3xl shadow-xl" data-testid="search-form">
            <div className="space-y-6">
              <div>
                <Label className="block text-lg font-semibold text-navy mb-3" data-testid="label-location">
                  Your location
                </Label>
                <Input 
                  type="text" 
                  placeholder="Enter your postcode or city" 
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-turquoise text-lg" 
                  data-testid="input-location"
                />
              </div>
              
              <div>
                <Label className="block text-lg font-semibold text-navy mb-3" data-testid="label-radius">
                  Search radius
                </Label>
                <Select>
                  <SelectTrigger className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg" data-testid="select-radius">
                    <SelectValue placeholder="Select radius" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10 mi</SelectItem>
                    <SelectItem value="25">25 mi</SelectItem>
                    <SelectItem value="50">50 mi</SelectItem>
                    <SelectItem value="100">100 mi</SelectItem>
                    <SelectItem value="200">200 mi</SelectItem>
                    <SelectItem value="500">500 mi</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button 
                className="w-full bg-turquoise text-navy py-4 rounded-xl text-xl font-bold hover:bg-navy hover:text-turquoise transition-all duration-300" 
                data-testid="button-find-stockists"
              >
                Find Stockists
              </Button>
            </div>
          </div>
          
          {/* Map Placeholder */}
          <div className="bg-gray-200 rounded-3xl h-96 flex items-center justify-center overflow-hidden" data-testid="map-container">
            <img 
              src="https://images.unsplash.com/photo-1549317336-206569e8475c?w=800&h=400&fit=crop" 
              alt="Store Locator Map" 
              className="w-full h-full object-cover rounded-3xl" 
              data-testid="img-map"
            />
          </div>
        </div>
        
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-black text-navy mb-4" data-testid="text-stockist-cta">
            Fancy stocking Auntie's?
          </h3>
          <Button 
            className="bg-navy text-turquoise px-12 py-4 rounded-full text-xl font-bold hover:bg-turquoise hover:text-navy transition-all duration-300 transform hover:scale-105" 
            data-testid="button-become-stockist"
          >
            Become a Stockist
          </Button>
        </div>
      </div>
    </section>
  );
}
