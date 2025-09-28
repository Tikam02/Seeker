import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Seeker
          </h1>
          <p className="text-2xl text-gray-600 mb-8">Connect Directly, Pay Directly</p>
          <p className="text-lg text-gray-500 mb-12">
            India's first service marketplace where helpers keep 100% of their earnings
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Seeker Card */}
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="text-6xl text-center mb-4">🔍</div>
            <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">I'm a Seeker</h2>
            <p className="text-gray-600 text-center mb-6">
              Find trusted helpers for any task - from home repairs to tech support
            </p>
            <div className="text-center">
              <Link 
                href="/seeker-onboarding"
                className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Find Helpers →
              </Link>
            </div>
          </div>

          {/* Helper Card */}
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="text-6xl text-center mb-4">💼</div>
            <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">I'm a Helper</h2>
            <p className="text-gray-600 text-center mb-6">
              Grow your business with zero commission. Keep 100% of your earnings
            </p>
            <div className="text-center">
              <Link 
                href="/helper-onboarding"
                className="inline-block px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Start Earning →
              </Link>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Seeker?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">Zero Commission</h3>
              <p className="text-gray-600">Helpers keep 100% of their earnings. Direct payments between seekers and helpers.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-semibold mb-2">Verified Professionals</h3>
              <p className="text-gray-600">All helpers undergo thorough background verification and skill assessment.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Instant Matching</h3>
              <p className="text-gray-600">Smart algorithms connect you with the perfect helper in minutes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}