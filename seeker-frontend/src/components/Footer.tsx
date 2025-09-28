'use client';

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div 
              className="text-3xl font-extrabold"
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Seeker
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              India's first zero-commission service marketplace. Connecting verified professionals directly with customers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                📘
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                🐦
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                💼
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                📷
              </a>
            </div>
          </div>

          {/* For Seekers */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">For Seekers</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Find Helpers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">How it Works</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Safety Guidelines</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Customer Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Service Categories</a></li>
            </ul>
          </div>

          {/* For Helpers */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">For Helpers</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Join as Helper</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Verification Process</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Helper Resources</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Earnings Calculator</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Press & Media</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>

        {/* Trust and Security Section */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <span className="text-2xl">🔐</span>
              <div>
                <div className="text-sm font-semibold">Bank-Level Security</div>
                <div className="text-xs text-gray-400">256-bit SSL encryption</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <span className="text-2xl">✅</span>
              <div>
                <div className="text-sm font-semibold">Verified Professionals</div>
                <div className="text-xs text-gray-400">Background checked</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <span className="text-2xl">🛡️</span>
              <div>
                <div className="text-sm font-semibold">Privacy Protected</div>
                <div className="text-xs text-gray-400">GDPR compliant</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <h4 className="font-semibold mb-2">📧 Email Support</h4>
              <p className="text-gray-300 text-sm">support@seeker.co.in</p>
              <p className="text-gray-400 text-xs">Response within 2 hours</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">📞 Phone Support</h4>
              <p className="text-gray-300 text-sm">+91-80-4567-8900</p>
              <p className="text-gray-400 text-xs">Mon-Sun, 9 AM - 9 PM</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">🏢 Headquarters</h4>
              <p className="text-gray-300 text-sm">Bangalore, Karnataka</p>
              <p className="text-gray-400 text-xs">Serving all major Indian cities</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
            </div>
            <div className="text-sm text-gray-400">
              © 2024 Seeker Technologies Pvt. Ltd. All rights reserved.
            </div>
          </div>
        </div>

        {/* Certification badges */}
        <div className="text-center mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
            <div className="text-xs text-gray-400">🏛️ Registered in India</div>
            <div className="text-xs text-gray-400">🔒 ISO 27001 Certified</div>
            <div className="text-xs text-gray-400">✅ Startup India Recognized</div>
          </div>
        </div>
      </div>
    </footer>
  );
}