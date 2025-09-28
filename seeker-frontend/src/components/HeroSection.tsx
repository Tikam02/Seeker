'use client';

interface HeroSectionProps {
  onOpenRegistration: (userType: 'seeker' | 'helper') => void;
}

export default function HeroSection({ onOpenRegistration }: HeroSectionProps) {
  return (
    <section className="mt-20 px-8 py-16 min-h-screen flex items-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-[500px] h-[500px] rounded-full opacity-20 -top-48 -right-24"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)',
            animation: 'float 20s infinite ease-in-out'
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] rounded-full opacity-20 -bottom-36 -left-24"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%)',
            animation: 'float 25s infinite ease-in-out reverse'
          }}
        />
      </div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Side - Content */}
        <div className="space-y-6" style={{ animation: 'slideInLeft 1s ease-out' }}>
          <div 
            className="inline-block bg-emerald-500 text-white px-6 py-2 rounded-full font-semibold mb-8"
            style={{ animation: 'bounce 2s infinite' }}
          >
            🎉 ZERO COMMISSION PLATFORM
          </div>
          
          <h1 
            className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
            style={{
              background: 'var(--gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Connect Directly, Pay Directly
          </h1>
          
          <p 
            className="text-xl text-gray-600 mb-8"
            style={{ animation: 'slideInLeft 1s ease-out 0.2s both' }}
          >
            India's first service marketplace where helpers keep 100% of their earnings. No hidden fees, no commissions.
          </p>
          
          {/* Enhanced Trust Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            <div className="p-4 bg-indigo-50 rounded-xl text-center transition-all duration-300 hover:shadow-lg">
              <div className="text-2xl font-extrabold text-indigo-600">10,000+</div>
              <div className="text-sm text-gray-600">Verified Helpers</div>
              <div className="text-xs text-indigo-500 mt-1">✓ Background Checked</div>
            </div>
            <div className="p-4 bg-emerald-50 rounded-xl text-center transition-all duration-300 hover:shadow-lg">
              <div className="text-2xl font-extrabold text-emerald-600">50,000+</div>
              <div className="text-sm text-gray-600">Happy Seekers</div>
              <div className="text-xs text-emerald-500 mt-1">⭐ 4.9/5 Rating</div>
            </div>
            <div className="p-4 bg-purple-50 rounded-xl text-center transition-all duration-300 hover:shadow-lg">
              <div className="text-2xl font-extrabold text-purple-600">₹0</div>
              <div className="text-sm text-gray-600">Commission</div>
              <div className="text-xs text-purple-500 mt-1">💯 Keep 100%</div>
            </div>
            <div className="p-4 bg-orange-50 rounded-xl text-center transition-all duration-300 hover:shadow-lg">
              <div className="text-2xl font-extrabold text-orange-600">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
              <div className="text-xs text-orange-500 mt-1">🛡️ Always Here</div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3 mt-6 justify-center lg:justify-start">
            <div className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
              <span>🔐</span>
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              <span>✅</span>
              <span>ID Verified</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
              <span>🏛️</span>
              <span>Govt. Registered</span>
            </div>
          </div>
        </div>

        {/* Right Side - User Selection */}
        <div 
          className="bg-white rounded-3xl p-8 shadow-2xl"
          style={{ animation: 'slideInRight 1s ease-out' }}
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Get Started in 30 Seconds</h2>
            <p className="text-gray-600">Choose your role to begin</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Seeker Card */}
            <div 
              onClick={() => onOpenRegistration('seeker')}
              className="p-8 text-center cursor-pointer transition-all duration-300 rounded-2xl relative overflow-hidden group hover:-translate-y-2 hover:scale-105 hover:shadow-xl"
              style={{ background: 'var(--seeker-gradient)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
              
              <div className="text-4xl mb-4">🔍</div>
              <div className="text-xl font-bold text-white mb-2">I'm a Seeker</div>
              <div className="text-sm text-white/90 mb-6">Find trusted helpers for any task - from home repairs to tech support</div>
              <button className="px-8 py-3 bg-white/25 text-white border-2 border-white rounded-full font-semibold backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-indigo-600 hover:scale-105">
                Find Helpers →
              </button>
            </div>

            {/* Helper Card */}
            <div 
              onClick={() => onOpenRegistration('helper')}
              className="p-8 text-center cursor-pointer transition-all duration-300 rounded-2xl relative overflow-hidden group hover:-translate-y-2 hover:scale-105 hover:shadow-xl"
              style={{ background: 'var(--helper-gradient)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
              
              <div className="text-4xl mb-4">💼</div>
              <div className="text-xl font-bold text-white mb-2">I'm a Helper</div>
              <div className="text-sm text-white/90 mb-6">Grow your business with zero commission. Keep 100% of your earnings</div>
              <button className="px-8 py-3 bg-white/25 text-white border-2 border-white rounded-full font-semibold backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-emerald-600 hover:scale-105">
                Start Earning →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}