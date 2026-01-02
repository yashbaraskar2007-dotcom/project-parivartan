import React from 'react';
import { Medal, TrendingUp, TrendingDown } from 'lucide-react';
import { leaderboardData } from '../mockData';

const tierColors = {
  Diamond: 'from-cyan-400 to-blue-500',
  Gold: 'from-yellow-400 to-orange-500',
  Silver: 'from-gray-300 to-gray-500',
  Bronze: 'from-orange-400 to-orange-600'
};

const Leaderboard = () => {
  return (
    <section id="leaderboard" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            <span className="bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
              Velvet Rope Rankings
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Only the top performers earn glory. Is your ward on the map of champions?
          </p>
        </div>

        {/* Leaderboard Table */}
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-green-600 px-6 py-4">
            <div className="grid grid-cols-12 gap-4 text-white font-bold text-sm">
              <div className="col-span-1">RANK</div>
              <div className="col-span-5">WARD / CITY</div>
              <div className="col-span-2">SCORE</div>
              <div className="col-span-2">TIER</div>
              <div className="col-span-2">CHANGE</div>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-gray-200">
            {leaderboardData.map((item, index) => (
              <div
                key={item.rank}
                className="px-6 py-5 hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="grid grid-cols-12 gap-4 items-center">
                  {/* Rank */}
                  <div className="col-span-1">
                    <div className="flex items-center space-x-2">
                      {item.rank <= 3 && <Medal className="text-yellow-500" size={20} />}
                      <span className="text-2xl font-bold text-gray-900">{item.rank}</span>
                    </div>
                  </div>

                  {/* Ward */}
                  <div className="col-span-5">
                    <div className="font-semibold text-gray-900 text-lg">{item.ward}</div>
                  </div>

                  {/* Score */}
                  <div className="col-span-2">
                    <div className="text-2xl font-bold text-orange-600">{item.score}</div>
                  </div>

                  {/* Tier */}
                  <div className="col-span-2">
                    <span className={`inline-block px-3 py-1 rounded-full text-white text-sm font-bold bg-gradient-to-r ${tierColors[item.tier]} shadow-md`}>
                      {item.tier}
                    </span>
                  </div>

                  {/* Change */}
                  <div className="col-span-2">
                    {item.change.includes('+') ? (
                      <div className="flex items-center space-x-1 text-green-600">
                        <TrendingUp size={18} />
                        <span className="font-bold">{item.change}</span>
                      </div>
                    ) : item.change.includes('-') ? (
                      <div className="flex items-center space-x-1 text-red-600">
                        <TrendingDown size={18} />
                        <span className="font-bold">{item.change}</span>
                      </div>
                    ) : (
                      <span className="text-gray-500 font-bold">{item.change}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 text-center">
            <p className="text-gray-600">
              <span className="font-bold text-orange-600">95 more wards</span> competing for the top 100 spots
            </p>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl border border-cyan-200">
            <h4 className="font-bold text-cyan-900 mb-2 text-lg">Diamond Tier</h4>
            <p className="text-cyan-700 text-sm">Maintained excellence for 3+ consecutive years. The gold standard of civic pride.</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200">
            <h4 className="font-bold text-orange-900 mb-2 text-lg">Gold Tier</h4>
            <p className="text-orange-700 text-sm">Consistent high performance with verified cleanup actions and community engagement.</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
            <h4 className="font-bold text-green-900 mb-2 text-lg">Consistency Score</h4>
            <p className="text-green-700 text-sm">Year-round tracking prevents last-minute efforts. Real change requires sustained commitment.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;