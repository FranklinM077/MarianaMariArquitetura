import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CTASection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-primary">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <motion.h2 
          className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="block">Ready to get started?</span>
          <span className="block text-primary-100">Join our waitlist today.</span>
        </motion.h2>
        <motion.div 
          className="mt-8 flex lg:mt-0 lg:flex-shrink-0"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="inline-flex rounded-md shadow">
            <Button
              onClick={() => scrollToSection("waitlist")}
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50"
            >
              Reserve My Spot
            </Button>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Button
              onClick={() => scrollToSection("features")}
              variant="secondary"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-700 hover:bg-primary-800"
            >
              Learn more
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
