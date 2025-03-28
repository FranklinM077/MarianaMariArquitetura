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
    icon: <Home className="h-8 w-8 text-primary" />
  },
  {
    id: 2,
    title: "Projeto Comercial",
    description: "Espaços comerciais que atraem clientes e otimizam a funcionalidade para seu negócio.",
    icon: <Building className="h-8 w-8 text-primary" />
  },
  {
    id: 3,
    title: "Design de Interiores",
    description: "Transformação completa de ambientes internos, com seleção de materiais, cores e mobiliário.",
    icon: <Palette className="h-8 w-8 text-primary" />
  },
  {
    id: 4,
    title: "Consultoria",
    description: "Orientação profissional para decisões de design, reforma ou revitalização de espaços.",
    icon: <Lightbulb className="h-8 w-8 text-primary" />
  },
  {
    id: 5,
    title: "Acompanhamento de Obra",
    description: "Supervisão técnica durante a execução do projeto, garantindo fidelidade ao planejamento.",
    icon: <Clock className="h-8 w-8 text-primary" />
  },
  {
    id: 6,
    title: "Projetos Sustentáveis",
    description: "Soluções arquitetônicas com foco em sustentabilidade e eficiência energética.",
    icon: <Award className="h-8 w-8 text-primary" />
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Serviços</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            O que oferecemos
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Soluções completas em arquitetura e design para transformar seus espaços.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {services.map((service) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * service.id }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-center bg-primary/5 w-14 h-14 rounded-md mb-5">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}