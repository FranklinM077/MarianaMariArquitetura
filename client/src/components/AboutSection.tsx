import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function AboutSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Sobre Mim</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Mariana Maria
            </p>
            <p className="mt-4 text-lg text-gray-500">
              Arquiteta e Designer de Interiores apaixonada por criar espaços que combinam estética, funcionalidade e sustentabilidade.
            </p>
            <div className="mt-6">
              <div className="text-base text-gray-500 space-y-4">
                <p>Formada pela Universidade de Arquitetura e Design com mais de 10 anos de experiência, especializada em projetos residenciais e comerciais que refletem a personalidade e necessidades de cada cliente.</p>
                <p>Minha filosofia de trabalho é centrada na criação de ambientes que não apenas impressionam visualmente, mas também melhoram a qualidade de vida de quem os habita. Acredito que cada espaço tem potencial para ser transformado em algo extraordinário.</p>
              </div>
            </div>
            <div className="mt-8">
              <Button
                onClick={() => scrollToSection("portfolio")}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90"
              >
                Ver Portfólio
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="mt-10 lg:mt-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="lg:relative lg:h-96">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://images.unsplash.com/photo-1544724569-5f94aadfe148?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Arquiteta trabalhando em projetos"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
