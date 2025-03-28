import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="relative bg-white">
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col md:flex-row">
          {/* Texto */}
          <motion.div 
            className="w-full md:w-2/5 flex flex-col justify-center px-6 md:px-16 py-12 md:py-0"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-black leading-tight max-w-xl">
              ARQUITETURA & DESIGN DE INTERIORES
            </h1>
            <p className="mt-8 text-base text-gray-500 max-w-md leading-relaxed font-light">
              Criando espaços que inspiram e transformam. Soluções arquitetônicas minimalistas e funcionais para projetos residenciais e comerciais.
            </p>
            <div className="mt-12 flex space-x-4">
              <button
                onClick={() => scrollToSection("portfolio")}
                className="px-6 py-2 border border-black text-black uppercase text-sm tracking-wider font-light hover:bg-black hover:text-white transition-colors"
              >
                Portfólio
              </button>
              <button
                onClick={() => scrollToSection("waitlist")}
                className="px-6 py-2 border border-gray-300 text-gray-500 uppercase text-sm tracking-wider font-light hover:border-gray-500 hover:text-gray-700 transition-colors"
              >
                Contato
              </button>
            </div>
          </motion.div>
          
          {/* Imagem */}
          <motion.div 
            className="w-full md:w-3/5 h-96 md:h-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Projeto arquitetônico moderno"
            />
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <span className="text-xs uppercase tracking-widest text-gray-400 mb-2">Explore</span>
          <div className="w-px h-10 bg-gray-300 animate-pulse"></div>
        </motion.div>
      </div>
    </section>
  );
}
