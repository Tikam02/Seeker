'use client';

interface NavigationProps {
  onLoginClick: () => void;
}

export default function Navigation({ onLoginClick }: NavigationProps) {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
        <div 
          className="text-2xl font-extrabold cursor-pointer"
          style={{
            background: 'var(--gradient)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'pulse 3s infinite'
          }}
        >
          Seeker
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors relative group">
            Features
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#testimonials" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors relative group">
            Reviews
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contact" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          
          {/* Trust indicator in nav */}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="text-green-500">🔐</span>
            <span>Secure</span>
          </div>
          
          <button 
            onClick={onLoginClick}
            className="px-6 py-2 bg-white text-indigo-600 border-2 border-indigo-600 rounded-full font-semibold cursor-pointer transition-all duration-300 hover:bg-indigo-600 hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-600/30"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}