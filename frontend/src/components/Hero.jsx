import React from 'react';
import { ArrowRight, MapPin, Award, Users } from 'lucide-react';
import { Button } from './ui/button';
import { stats } from '../mockData';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-white to-green-500/20" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1669429701653-b887bc3e5067?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjQyMTd8MHwxfHNlYXJjaHwyfHxjbGVhbiUyMGluZGlhbiUyMGNpdHl8ZW58MHx8fHwxNzY2OTg0MzI3fDA&ixlib=rb-4.1.0&q=85')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-200 shadow-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-700">India ranks 176th in cleanliness. Let's change this together!</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 bg-clip-text text-transparent">Win Your City.</span>
              <br />
              <span className="bg-gradient-to-r from-green-600 via-green-500 to-green-600 bg-clip-text text-transparent">Own Your Pride.</span>
              <br />
              <span className="text-gray-800">Build Better India.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform civic responsibility into a competitive game. Battle for your territory, earn glory for your ward, and engineer a cultural revolution in cleanliness.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg px-8 py-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
            >
              <MapPin className="mr-2" size={20} />
              Claim Your Territory
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-green-600 text-green-600 hover:bg-green-50 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <Award className="mr-2" size={20} />
              View Leaderboard
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-12 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-600 mt-2 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gray-400 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;