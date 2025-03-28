import { motion } from "framer-motion";

export default function AboutSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="mb-16">
          <h2 className="text-3xl font-light uppercase tracking-wide text-black mb-2">Sobre</h2>
          <div className="w-16 h-px bg-black"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              className="w-full h-auto object-cover"
              src="https://images.unsplash.com/photo-1544724569-5f94aadfe148?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
              alt="Arquiteta trabalhando em projetos"
            />
          </motion.div>
          
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-light text-black mb-6">Mariana Maria</h3>
            <p className="text-base text-gray-600 font-light leading-relaxed mb-5">
              Arquiteta e Designer de Interiores apaixonada por criar espaços que combinam estética, funcionalidade e sustentabilidade.
            </p>
            <p className="text-base text-gray-600 font-light leading-relaxed mb-5">
              Formada pela Universidade de Arquitetura e Design com mais de 10 anos de experiência, especializada em projetos residenciais e comerciais que refletem a personalidade e necessidades de cada cliente.
            </p>
            <p className="text-base text-gray-600 font-light leading-relaxed mb-8">
              Minha filosofia de trabalho é centrada na criação de ambientes que não apenas impressionam visualmente, mas também melhoram a qualidade de vida de quem os habita. Acredito que cada espaço tem potencial para ser transformado em algo extraordinário.
            </p>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="px-6 py-2 border border-black text-black uppercase text-sm tracking-wider font-light hover:bg-black hover:text-white transition-colors"
            >
              Ver Portfólio
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
