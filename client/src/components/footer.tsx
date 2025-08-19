import { Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-navy py-20" data-testid="footer">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl md:text-4xl font-black text-lime mb-6" data-testid="footer-logo">
              AUNTIE'S SAUCES
            </div>
            <p className="text-turquoise text-lg mb-6" data-testid="footer-description">
              This is a demo store. Auntie's product shots designed by Switch.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4" data-testid="social-links">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-turquoise hover:text-lime hover:bg-transparent" 
                data-testid="link-facebook"
              >
                <Facebook className="h-6 w-6" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-turquoise hover:text-lime hover:bg-transparent" 
                data-testid="link-instagram"
              >
                <Instagram className="h-6 w-6" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-turquoise hover:text-lime hover:bg-transparent" 
                data-testid="link-youtube"
              >
                <Youtube className="h-6 w-6" />
              </Button>
            </div>
          </div>
          
          {/* Links Column 1 */}
          <div>
            <ul className="space-y-3" data-testid="footer-links-1">
              <li>
                <Button variant="ghost" className="text-turquoise hover:text-lime hover:bg-transparent p-0" data-testid="link-sauces">
                  Sauces
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="text-turquoise hover:text-lime hover:bg-transparent p-0" data-testid="link-bundles">
                  Bundles
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="text-turquoise hover:text-lime hover:bg-transparent p-0" data-testid="link-blog">
                  Blog
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="text-turquoise hover:text-lime hover:bg-transparent p-0" data-testid="link-about">
                  About
                </Button>
              </li>
            </ul>
          </div>
          
          {/* Links Column 2 */}
          <div>
            <ul className="space-y-3" data-testid="footer-links-2">
              <li>
                <Button variant="ghost" className="text-turquoise hover:text-lime hover:bg-transparent p-0" data-testid="link-search">
                  Search
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="text-turquoise hover:text-lime hover:bg-transparent p-0" data-testid="link-contact">
                  Contact
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="text-turquoise hover:text-lime hover:bg-transparent p-0" data-testid="link-returns">
                  Returns
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="text-turquoise hover:text-lime hover:bg-transparent p-0" data-testid="link-shipping">
                  Shipping
                </Button>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Payment Icons */}
        <div className="flex flex-wrap justify-between items-center pt-8 border-t border-turquoise" data-testid="footer-bottom">
          <div className="text-turquoise text-sm" data-testid="copyright">
            © 2025, Auntie's Sauces. Powered by Shopify
          </div>
          <div className="flex space-x-2 mt-4 md:mt-0" data-testid="payment-icons">
            <div className="w-10 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center">VISA</div>
            <div className="w-10 h-6 bg-red-600 rounded text-white text-xs flex items-center justify-center">MC</div>
            <div className="w-10 h-6 bg-blue-500 rounded text-white text-xs flex items-center justify-center">AMEX</div>
            <div className="w-10 h-6 bg-blue-700 rounded text-white text-xs flex items-center justify-center">PP</div>
            <div className="w-10 h-6 bg-black rounded text-white text-xs flex items-center justify-center">DB</div>
            <div className="w-10 h-6 bg-orange-500 rounded text-white text-xs flex items-center justify-center">DC</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
