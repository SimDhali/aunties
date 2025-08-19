import { Search, User, ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="relative z-50 bg-lime border-b-4 border-navy" data-testid="header">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Navigation - Desktop (Left Side) */}
          <nav className="hidden md:flex space-x-8 ml-[-87px] mr-[-87px]" data-testid="nav-desktop">
            <Button variant="ghost" className="text-lg font-semibold text-navy hover:text-turquoise hover:bg-transparent transition-colors duration-300" data-testid="nav-products">
              PRODUCTS
            </Button>
            <Button variant="ghost" className="text-lg font-semibold text-navy hover:text-turquoise hover:bg-transparent transition-colors duration-300" data-testid="nav-blog">
              BLOG
            </Button>
            <Button variant="ghost" className="text-lg font-semibold text-navy hover:text-turquoise hover:bg-transparent transition-colors duration-300" data-testid="nav-about">
              ABOUT
            </Button>
          </nav>
          
          {/* Logo - Centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2 text-3xl md:text-4xl font-black text-navy" data-testid="logo">
            AUNTIE'S SAUCES
          </div>
          
          {/* Icons - Right Side */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-navy hover:text-turquoise hover:bg-transparent" data-testid="button-search">
              <Search className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-navy hover:text-turquoise hover:bg-transparent" data-testid="button-user">
              <User className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-navy hover:text-turquoise hover:bg-transparent" data-testid="button-cart">
              <ShoppingCart className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden text-navy hover:text-turquoise hover:bg-transparent" data-testid="button-menu">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
