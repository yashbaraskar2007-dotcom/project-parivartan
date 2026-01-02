import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useToast } from '../hooks/use-toast';

const CTA = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to the Battle!",
        description: "We'll contact you soon with early access details.",
      });
      setEmail('');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-500 via-orange-600 to-green-600 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <CheckCircle className="text-white" size={20} />
            <span className="text-white font-medium">Join 50+ Cities Already Competing</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Ready to Win Your City?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Be part of India's biggest cultural shift. Transform your neighborhood, earn glory for your ward, and leave a legacy of cleanliness.
          </p>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-6 text-lg rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/60 focus:border-white focus:bg-white/20"
              required
            />
            <Button
              type="submit"
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 font-bold"
            >
              Get Early Access
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </form>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80 text-sm pt-4">
            <div className="flex items-center space-x-2">
              <CheckCircle size={16} />
              <span>Free to join</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle size={16} />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle size={16} />
              <span>For citizens & authorities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;