import { useState } from "react";
import { motion } from "framer-motion";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "When will the product launch?",
    answer: "We're planning to launch our product in Q3 2023. Join our waitlist to be notified when we go live."
  },
  {
    question: "Is there a cost to join the waitlist?",
    answer: "No, joining the waitlist is completely free. You'll also get early access pricing when we launch."
  },
  {
    question: "Will there be a free trial?",
    answer: "Yes, we plan to offer a 14-day free trial with full access to all features."
  },
  {
    question: "What platforms will be supported?",
    answer: "Our product will be available on web, iOS, and Android platforms. We're also exploring desktop applications."
  },
  {
    question: "How will you use my contact information?",
    answer: "We'll only use your email to send launch updates and important announcements. We will never sell your data to third parties."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="lg:text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">FAQ</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Everything you need to know about our product and waitlist.
          </p>
        </motion.div>

        <motion.div 
          className="mt-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <dl className="space-y-6 divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="pt-6">
                <dt className="text-lg">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="text-left w-full flex justify-between items-start text-gray-800 hover:text-primary transition-colors"
                    aria-expanded={openIndex === index}
                  >
                    <span className="font-medium">{faq.question}</span>
                    <span className="ml-6 h-7 flex items-center">
                      <svg
                        className={`h-6 w-6 transform ${openIndex === index ? 'rotate-180' : 'rotate-0'} transition-transform duration-200`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                </dt>
                <motion.dd
                  className={`mt-2 pr-12 ${openIndex === index ? 'block' : 'hidden'}`}
                  initial={false}
                  animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-base text-gray-500">{faq.answer}</p>
                </motion.dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
