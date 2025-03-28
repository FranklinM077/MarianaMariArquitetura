import { useState } from "react";
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
    title: "Residência Moderna SP",
    year: "2023",
    category: "Residencial",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 2,
    title: "Café & Restaurante Itaim",
    year: "2022",
    category: "Comercial",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 3,
    title: "Escritório Colaborativo",
    year: "2023",
    category: "Corporativo",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 4,
    title: "Casa Jardins",
    year: "2021",
    category: "Residencial",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 5,
    title: "Hotel Boutique",
    year: "2022",
    category: "Hotelaria",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 6,
    title: "Loft Industrial",
    year: "2023",
    category: "Residencial",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80"
  }
];

export default function PortfolioSection() {
  const [filter, setFilter] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = filter 
    ? portfolioItems.filter(item => item.category === filter)
    : portfolioItems;
  
  const categories = Array.from(new Set(portfolioItems.map(item => item.category)));

  const openModal = (item: PortfolioItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="mb-16">
          <h2 className="text-3xl font-light uppercase tracking-wide text-black mb-2">Portfólio</h2>
          <div className="w-16 h-px bg-black"></div>
        </div>
        
        <div className="mt-6 flex flex-wrap space-x-6 border-b border-gray-200 pb-4">
          <button
            className={`text-sm uppercase tracking-wider font-light pb-2 border-b-2 transition-colors ${filter === null ? 'border-black text-black' : 'border-transparent text-gray-400 hover:text-gray-700'}`}
            onClick={() => setFilter(null)}
          >
            Todos
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`text-sm uppercase tracking-wider font-light pb-2 border-b-2 transition-colors ${filter === category ? 'border-black text-black' : 'border-transparent text-gray-400 hover:text-gray-700'}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group cursor-pointer"
              onClick={() => openModal(item)}
            >
              <div className="overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="object-cover w-full h-80 transition duration-700 group-hover:scale-105" 
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-light text-black">{item.title}</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm text-gray-500 font-light">{item.category}</span>
                  <span className="text-sm text-gray-500 font-light">{item.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for portfolio detail */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={closeModal}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white max-w-5xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.title} 
                  className="w-full h-[60vh] object-cover" 
                />
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white text-black border border-gray-200 hover:bg-gray-100"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-10">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div className="md:w-2/3 pr-10">
                    <h3 className="text-2xl font-light text-black mb-6">{selectedItem.title}</h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Este projeto foi desenvolvido com foco na integração de espaços e maximização da luz natural. 
                      A abordagem minimalista privilegia materiais em sua forma natural e uma paleta de cores neutra, 
                      criando um ambiente sereno e atemporal.
                    </p>
                    <p className="text-gray-600 font-light leading-relaxed mt-4">
                      O design interior segue a mesma linguagem, com mobiliário de linhas limpas e um cuidadoso 
                      equilíbrio entre funcionalidade e estética.
                    </p>
                  </div>
                  <div className="md:w-1/3 mt-8 md:mt-0 border-t md:border-t-0 md:border-l border-gray-200 pt-6 md:pt-0 md:pl-10">
                    <div className="text-sm text-gray-400 uppercase tracking-wider font-light mb-3">Detalhes</div>
                    <ul className="space-y-3 text-gray-600 font-light">
                      <li className="flex justify-between">
                        <span>Categoria</span>
                        <span>{selectedItem.category}</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Ano</span>
                        <span>{selectedItem.year}</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Área</span>
                        <span>250m²</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Localização</span>
                        <span>São Paulo, Brasil</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}