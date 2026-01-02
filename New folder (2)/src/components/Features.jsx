import React from 'react';
import { Map, Flag, Trophy, Shield, Users, CheckCircle } from 'lucide-react';
import { features } from '../mockData';

const iconMap = {
  Map: Map,
  Flag: Flag,
  Trophy: Trophy,
  Shield: Shield,
  Users: Users,
  CheckCircle: CheckCircle
};

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            <span className="bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
              Battle-Ready Features
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Engineer a mindset shift with powerful tools designed to make cleanliness a source of pride and competition
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div
                key={feature.id}
                className="group relative bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Decorative gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-green-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-green-600 rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="text-white" size={28} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Number badge */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-400 group-hover:bg-orange-100 group-hover:text-orange-600 transition-colors duration-200">
                  {index + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-50 to-green-50 px-6 py-3 rounded-full border border-orange-200">
            <CheckCircle className="text-green-600" size={20} />
            <span className="text-gray-700 font-medium">All features backed by two-way verification protocol</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;