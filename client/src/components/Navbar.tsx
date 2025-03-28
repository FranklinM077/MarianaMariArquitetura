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
    <nav className="sticky top-0 bg-white z-40 py-4 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-black font-light text-2xl tracking-wide uppercase">MARIANA MARIA</span>
            </Link>
          </div>
          <div className="hidden sm:flex sm:items-center space-x-8">
            <button 
              onClick={() => scrollToSection("about")}
              className="text-gray-600 hover:text-black transition px-1 py-1 text-sm uppercase tracking-wider font-light"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection("portfolio")}
              className="text-gray-600 hover:text-black transition px-1 py-1 text-sm uppercase tracking-wider font-light"
            >
              Portfólio
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="text-gray-600 hover:text-black transition px-1 py-1 text-sm uppercase tracking-wider font-light"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection("waitlist")}
              className="text-gray-600 hover:text-black transition px-1 py-1 text-sm uppercase tracking-wider font-light"
            >
              Contato
            </button>
          </div>
          <div className="flex items-center sm:hidden">
            <Button
              variant="ghost"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center p-2 text-gray-500 hover:text-black focus:outline-none"
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
                  strokeWidth={1} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-white border-t border-gray-100 animate-fade-in">
          <div className="px-6 pt-4 pb-6 space-y-4">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-2 text-base font-light text-gray-600 hover:text-black"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="block w-full text-left py-2 text-base font-light text-gray-600 hover:text-black"
            >
              Portfólio
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left py-2 text-base font-light text-gray-600 hover:text-black"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("waitlist")}
              className="block w-full text-left py-2 text-base font-light text-gray-600 hover:text-black"
            >
              Contato
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
