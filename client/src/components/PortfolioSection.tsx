import { motion } from "framer-motion";

interface PortfolioItem {
  id: number;
  title: string;
  year: string;
  category: string;
  image: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Projeto Residencial",
    year: "2023",
    category: "Residencial",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Projeto Comercial",
    year: "2022",
    category: "Comercial",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Projeto Sustentável",
    year: "2021",
    category: "Sustentável",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    title: "Redesign de Interiores",
    year: "2023",
    category: "Interiores",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    title: "Escritório Corporativo",
    year: "2022",
    category: "Comercial",
    image: "https://images.unsplash.com/photo-1600494603989-9650cf6dad51?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    title: "Casa de Praia",
    year: "2021",
    category: "Residencial",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  }
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Projetos</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Portfólio de Mariana Maria
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Uma seleção dos melhores trabalhos em arquitetura e design de interiores.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * item.id }}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 group-hover:opacity-75 transition-opacity duration-300">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm text-white/80">{item.category}</span>
                  <span className="text-sm text-white/80">{item.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Ver todos os projetos
          </motion.button>
        </div>
      </div>
    </section>
  );
}