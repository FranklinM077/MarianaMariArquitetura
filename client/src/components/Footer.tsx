import { Link } from "wouter";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto py-16 px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-6">
            <Link href="/" className="block">
              <span className="text-black font-light text-2xl tracking-wide uppercase">MARIANA MARIA</span>
            </Link>
            <p className="text-gray-600 text-sm font-light leading-relaxed">
              Criando espaços que inspiram e transformam através de uma abordagem minimalista, com foco na funcionalidade e expressão estética.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm uppercase tracking-wider font-light text-black mb-6">Navegação</h3>
            <ul className="space-y-4">
              <li>
                <button onClick={() => scrollToSection("about")} className="text-sm text-gray-600 hover:text-black transition-colors font-light">
                  Sobre
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("portfolio")} className="text-sm text-gray-600 hover:text-black transition-colors font-light">
                  Portfólio
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="text-sm text-gray-600 hover:text-black transition-colors font-light">
                  Serviços
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("waitlist")} className="text-sm text-gray-600 hover:text-black transition-colors font-light">
                  Contato
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm uppercase tracking-wider font-light text-black mb-6">Contato</h3>
            <ul className="space-y-4">
              <li>
                <p className="text-sm text-gray-600 font-light">
                  contato@marianamaria.com
                </p>
              </li>
              <li>
                <p className="text-sm text-gray-600 font-light">
                  (11) 99999-9999
                </p>
              </li>
              <li>
                <p className="text-sm text-gray-600 font-light">
                  Av. Paulista, 1000<br />
                  São Paulo - SP, 01310-100
                </p>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm uppercase tracking-wider font-light text-black mb-6">Social</h3>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-500 hover:text-black transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-black transition-colors">
                <span className="sr-only">Pinterest</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0a12 12 0 0 0-4.373 23.182c-.008-.092-.015-.184-.015-.277 0-.613.225-1.14.43-1.648.205-.51.44-1.032.44-1.63 0-1.42-1.055-2.304-1.055-3.57 0-1.833 1.604-3.267 3.35-3.267.853 0 1.38.36 1.928.704.55.343 1.108.693 1.903.693.793 0 1.325-.35 1.846-.693.52-.343 1.023-.704 1.876-.704 1.745 0 3.35 1.434 3.35 3.267 0 1.266-1.055 2.15-1.055 3.57 0 .598.234 1.12.44 1.63.204.51.43 1.035.43 1.648 0 .093-.008.185-.016.277A12 12 0 0 0 12 0zm.86 9.67a2.14 2.14 0 0 0-2.138 2.138c0 1.18.96 2.138 2.139 2.138 1.18 0 2.138-.959 2.138-2.138 0-1.18-.958-2.138-2.138-2.138z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-black transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            
            <div className="mt-8">
              <h3 className="text-sm uppercase tracking-wider font-light text-black mb-6">Legal</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors font-light">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors font-light">
                    Termos de Uso
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 font-light text-center">
            &copy; {new Date().getFullYear()} Mariana Maria Arquitetura. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
