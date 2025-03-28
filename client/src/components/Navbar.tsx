import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 bg-white shadow-sm z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-primary font-bold text-xl">Mariana Maria</span>
              <span className="ml-2 text-gray-500 text-sm hidden md:inline">Arquiteta e Designer de Interiores</span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-6">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection("about")}
              className="text-gray-600 hover:text-primary transition px-3 py-2 text-sm font-medium"
            >
              Sobre
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection("portfolio")}
              className="text-gray-600 hover:text-primary transition px-3 py-2 text-sm font-medium"
            >
              Portfólio
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection("services")}
              className="text-gray-600 hover:text-primary transition px-3 py-2 text-sm font-medium"
            >
              Serviços
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection("features")}
              className="text-gray-600 hover:text-primary transition px-3 py-2 text-sm font-medium"
            >
              Features
            </Button>
            <Button 
              onClick={() => scrollToSection("waitlist")}
              className="bg-primary text-white hover:bg-primary/90 transition px-4 py-2 rounded-md text-sm font-medium"
            >
              Contato
            </Button>
          </div>
          <div className="flex items-center sm:hidden">
            <Button
              variant="ghost"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-gray-200 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50"
            >
              Sobre
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("portfolio")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50"
            >
              Portfólio
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50"
            >
              Serviços
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("features")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50"
            >
              Features
            </Button>
            <Button
              onClick={() => scrollToSection("waitlist")}
              className="block w-full px-3 py-2 rounded-md text-base font-medium bg-primary text-white hover:bg-primary/90"
            >
              Contato
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
