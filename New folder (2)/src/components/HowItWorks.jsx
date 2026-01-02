import React from 'react';
import { UserPlus, Camera, CheckCircle2, Trophy } from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: UserPlus,
    title: 'Register Your Ward',
    description: 'Sign up as a citizen or authority. Design your unique ward sigil and join your city\'s kingdom on the interactive map.'
  },
  {
    id: 2,
    icon: Camera,
    title: 'Capture & Clean',
    description: 'Find garbage spots, take "before" photos, clean the area, then capture "after" photos with GPS and timestamp verification.'
  },
  {
    id: 3,
    icon: CheckCircle2,
    title: 'Get Verified',
    description: 'Submit for verification. Authorities verify citizen work, citizens verify authority work. Community rejects false claims.'
  },
  {
    id: 4,
    icon: Trophy,
    title: 'Earn Glory & Rank',
    description: 'Accumulate points, climb the leaderboard, capture territory. Top performers earn badges, glory, and Diamond Tier status.'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            <span className="bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
              How The Battle Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four simple steps to transform your neighborhood and earn glory for your ward
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-orange-200 via-blue-200 to-green-200" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={step.id} className="relative">
                  {/* Card */}
                  <div className="bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-orange-400 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    {/* Icon circle */}
                    <div className="relative mx-auto w-20 h-20 mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-green-600 rounded-full animate-pulse opacity-20" />
                      <div className="relative w-full h-full bg-gradient-to-br from-orange-500 to-green-600 rounded-full flex items-center justify-center shadow-xl">
                        <IconComponent className="text-white" size={32} />
                      </div>
                      {/* Step number */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-orange-500 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-sm font-bold text-orange-600">{step.id}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-20 -right-4 z-10">
                      <div className="w-8 h-8 bg-white border-2 border-orange-400 rounded-full flex items-center justify-center shadow-lg">
                        <div className="w-0 h-0 border-t-4 border-t-transparent border-l-6 border-l-orange-500 border-b-4 border-b-transparent" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Image Section */}
        <div className="mt-20 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              From <span className="text-orange-600">Chore</span> to <span className="text-green-600">Culture</span>
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              PARIVARTAN isn't just another app—it's a cultural engineering tool. We tap into the human desire for competition, pride, and recognition to create lasting behavioral change.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Gamified civic responsibility with real rewards</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Two-way verification ensures accountability</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Political incentives aligned with citizen needs</span>
              </div>
            </div>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1707051756265-a171d9190ead?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjQyMTd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGluZGlhbiUyMGNpdHl8ZW58MHx8fHwxNzY2OTg0MzI3fDA&ixlib=rb-4.1.0&q=85"
              alt="Clean Indian streets"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;