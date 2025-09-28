export default function FeaturesSection() {
  const features = [
    {
      icon: '💰',
      title: 'Zero Commission',
      description: 'Helpers keep 100% of their earnings. Direct payments between seekers and helpers.'
    },
    {
      icon: '✅',
      title: 'Verified Professionals',
      description: 'All helpers undergo thorough background verification and skill assessment.'
    },
    {
      icon: '⚡',
      title: 'Instant Matching',
      description: 'Smart algorithms connect you with the perfect helper in minutes.'
    },
    {
      icon: '🛡️',
      title: 'Secure & Safe',
      description: 'Your safety is our priority with verified profiles and secure communications.'
    },
    {
      icon: '📱',
      title: 'Direct Communication',
      description: 'Chat, call, or video directly with helpers. No middleman interference.'
    },
    {
      icon: '🌟',
      title: 'Transparent Reviews',
      description: 'Real reviews from verified users help you make informed decisions.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-5xl font-extrabold mb-4"
            style={{
              background: 'var(--gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Why Choose Seeker?
          </h2>
          <p className="text-xl text-gray-600">Revolutionary features that put you first</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden group"
              style={{ 
                background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
              }}
            >
              {/* Gradient border effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-0.5" 
                   style={{ background: 'var(--gradient)' }}>
                <div className="w-full h-full bg-white rounded-2xl" />
              </div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}