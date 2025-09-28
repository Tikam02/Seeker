'use client';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Homeowner, Mumbai",
      image: "👩‍💼",
      rating: 5,
      text: "Found an amazing electrician through Seeker. The direct communication made everything so smooth, and the helper got to keep all their earnings!"
    },
    {
      name: "Raj Kumar",
      role: "Plumber & Helper",
      image: "👨‍🔧",
      rating: 5,
      text: "Finally, a platform that doesn't take a cut! I've increased my income by 30% since joining Seeker. The verification process made me feel secure too."
    },
    {
      name: "Anita Patel",
      role: "Working Professional, Delhi",
      image: "👩‍💻",
      rating: 5,
      text: "Needed tech support urgently and got connected within 15 minutes. The helper was verified, professional, and reasonably priced. Highly recommend!"
    },
    {
      name: "Vikram Singh",
      role: "Carpenter & Helper",
      image: "👨‍🏭",
      rating: 5,
      text: "The best platform for skilled workers like me. No middleman, direct payments, and genuine customers. My business has grown significantly!"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
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
            Trusted by Thousands
          </h2>
          <p className="text-xl text-gray-600 mb-8">Real stories from our community</p>
          
          {/* Trust metrics */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-2 text-lg">
              <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              <span className="font-semibold">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <span className="text-green-500">✓</span>
              <span className="font-semibold">100% Verified Reviews</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <span className="text-blue-500">🔒</span>
              <span className="font-semibold">Secure Platform</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl relative"
              style={{ 
                animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Quote decoration */}
              <div className="absolute -top-4 -left-4 text-6xl text-indigo-100 font-bold">"</div>
              
              {/* Rating stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              
              <p className="text-gray-700 text-lg mb-6 leading-relaxed relative z-10">
                {testimonial.text}
              </p>
              
              <div className="flex items-center gap-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              {/* Subtle gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 p-0.5" 
                   style={{ background: 'var(--gradient)' }}>
                <div className="w-full h-full bg-white rounded-2xl" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust badges */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">Trusted and secure platform</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md">
              <span className="text-green-500 font-bold">🔐</span>
              <span className="font-semibold text-gray-700">SSL Encrypted</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md">
              <span className="text-blue-500 font-bold">✅</span>
              <span className="font-semibold text-gray-700">ID Verified</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md">
              <span className="text-purple-500 font-bold">🛡️</span>
              <span className="font-semibold text-gray-700">Privacy Protected</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md">
              <span className="text-orange-500 font-bold">⚡</span>
              <span className="font-semibold text-gray-700">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}