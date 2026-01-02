import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { faqs } from '../mockData';
import { HelpCircle } from 'lucide-react';

const FAQ = () => {
  return (
    <section id="faqs" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-green-600 rounded-full mb-4 shadow-lg">
            <HelpCircle className="text-white" size={32} />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            <span className="bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about joining the cleanliness revolution
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={`item-${faq.id}`}
              className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-xl px-6 hover:border-orange-300 transition-colors duration-200 shadow-md"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-orange-600 py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact CTA */}
        <div className="mt-12 text-center p-8 bg-gradient-to-br from-orange-50 to-green-50 rounded-2xl border border-orange-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Still have questions?</h3>
          <p className="text-gray-600 mb-6">Our team is here to help you get started with PARIVARTAN</p>
          <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-green-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;