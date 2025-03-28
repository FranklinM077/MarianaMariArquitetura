import { motion } from "framer-motion";
import { Home, Building, Palette, Lightbulb, Clock, Award } from "lucide-react";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: 1,
    title: "Projeto Residencial",
    description: "Projetos personalizados para casas e apartamentos, criando espaços que refletem seu estilo de vida.",
    icon: <Home className="h-6 w-6 text-black" />
  },
  {
    id: 2,
    title: "Projeto Comercial",
    description: "Espaços comerciais que atraem clientes e otimizam a funcionalidade para seu negócio.",
    icon: <Building className="h-6 w-6 text-black" />
  },
  {
    id: 3,
    title: "Design de Interiores",
    description: "Transformação completa de ambientes internos, com seleção de materiais, cores e mobiliário.",
    icon: <Palette className="h-6 w-6 text-black" />
  },
  {
    id: 4,
    title: "Consultoria",
    description: "Orientação profissional para decisões de design, reforma ou revitalização de espaços.",
    icon: <Lightbulb className="h-6 w-6 text-black" />
  },
  {
    id: 5,
    title: "Acompanhamento de Obra",
    description: "Supervisão técnica durante a execução do projeto, garantindo fidelidade ao planejamento.",
    icon: <Clock className="h-6 w-6 text-black" />
  },
  {
    id: 6,
    title: "Projetos Sustentáveis",
    description: "Soluções arquitetônicas com foco em sustentabilidade e eficiência energética.",
    icon: <Award className="h-6 w-6 text-black" />
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="mb-16">
          <h2 className="text-3xl font-light uppercase tracking-wide text-black mb-2">Serviços</h2>
          <div className="w-16 h-px bg-black"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 gap-y-16">
          {services.map((service) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * service.id }}
              className="group"
            >
              <div className="flex items-center mb-5 group-hover:translate-x-1 transition-transform duration-300">
                <div className="mr-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-light text-black">{service.title}</h3>
              </div>
              <p className="text-gray-600 font-light leading-relaxed pl-10">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 flex justify-center">
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="px-6 py-2 border border-black text-black uppercase text-sm tracking-wider font-light hover:bg-black hover:text-white transition-colors"
            onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
          >
            Solicitar Orçamento
          </motion.button>
        </div>
      </div>
    </section>
  );
}