'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SeekerOnboarding() {
  const [currentStep, setCurrentStep] = useState(0);
  const [seekerData, setSeekerData] = useState({
    name: '',
    contact: '',
    email: '',
    address: '',
    city: '',
    pincode: '',
    categories: [] as string[],
    customNeeds: '',
    agreedToTerms: false
  });
  const router = useRouter();

  const categories = [
    { id: 'cleaning', name: 'Home Cleaning', icon: '🏠', description: 'House cleaning, deep cleaning, organizing' },
    { id: 'repairs', name: 'Repairs & Maintenance', icon: '🔧', description: 'Home repairs, appliance fixes, maintenance' },
    { id: 'tech', name: 'Tech Support', icon: '💻', description: 'Computer repair, software help, IT support' },
    { id: 'moving', name: 'Moving & Delivery', icon: '🚚', description: 'Relocation, furniture moving, delivery services' },
    { id: 'cooking', name: 'Cooking & Catering', icon: '👨‍🍳', description: 'Personal chef, meal prep, event catering' },
    { id: 'beauty', name: 'Beauty & Grooming', icon: '✂️', description: 'Hair, makeup, spa services at home' },
    { id: 'painting', name: 'Painting', icon: '🎨', description: 'Interior/exterior painting, wall art' },
    { id: 'electrical', name: 'Electrical Work', icon: '⚡', description: 'Wiring, fixtures, electrical repairs' },
    { id: 'plumbing', name: 'Plumbing', icon: '🚿', description: 'Pipe repairs, installations, bathroom fixes' },
    { id: 'gardening', name: 'Gardening', icon: '🌱', description: 'Landscaping, plant care, garden maintenance' },
    { id: 'petcare', name: 'Pet Care', icon: '🐕', description: 'Pet sitting, walking, grooming, vet visits' },
    { id: 'tutoring', name: 'Tutoring', icon: '📚', description: 'Academic help, skill training, coaching' },
    { id: 'fitness', name: 'Fitness Training', icon: '💪', description: 'Personal training, yoga, fitness coaching' },
    { id: 'photography', name: 'Photography', icon: '📸', description: 'Event photography, portraits, product photos' },
    { id: 'driving', name: 'Driving Services', icon: '🚗', description: 'Personal driver, pickup/drop services' },
    { id: 'childcare', name: 'Childcare', icon: '👶', description: 'Babysitting, nanny services, child care' }
  ];

  const toggleCategory = (categoryId: string) => {
    setSeekerData(prev => ({
      ...prev,
      categories: prev.categories.includes(categoryId)
        ? prev.categories.filter(id => id !== categoryId)
        : [...prev.categories, categoryId]
    }));
  };

  const nextStep = () => {
    if (validateCurrentStep()) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const previousStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const validateCurrentStep = () => {
    if (currentStep === 0) {
      const { name, contact, email, address, city, pincode } = seekerData;
      if (!name.trim()) {
        alert('Please enter your name');
        return false;
      }
      if (!contact.trim() || contact.length < 10) {
        alert('Please enter a valid contact number');
        return false;
      }
      if (!email.trim() || !email.includes('@')) {
        alert('Please enter a valid email address');
        return false;
      }
      if (!address.trim()) {
        alert('Please enter your address');
        return false;
      }
      if (!city.trim()) {
        alert('Please enter your city');
        return false;
      }
      if (!pincode.trim() || pincode.length !== 6) {
        alert('Please enter a valid 6-digit pincode');
        return false;
      }
    } else if (currentStep === 1) {
      if (seekerData.categories.length === 0 && !seekerData.customNeeds.trim()) {
        alert('Please select at least one category or describe what you need help with');
        return false;
      }
    } else if (currentStep === 2) {
      if (!seekerData.agreedToTerms) {
        alert('Please agree to the Terms & Conditions to continue');
        return false;
      }
    }
    return true;
  };

  const completeOnboarding = () => {
    if (validateCurrentStep()) {
      // Save seeker data
      localStorage.setItem('seekerData', JSON.stringify(seekerData));
      alert('Welcome to Seeker! Your profile has been created successfully.');
      router.push('/seeker-dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Welcome Seeker! 🔍
            </h1>
            <p className="text-gray-600 text-lg">Let's set up your profile to find the perfect helpers</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4">
              {[0, 1, 2].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold ${
                    step <= currentStep ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gray-300'
                  }`}>
                    {step < currentStep ? '✓' : step + 1}
                  </div>
                  {step < 2 && (
                    <div className={`w-20 h-1 mx-2 ${step < currentStep ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gray-300'}`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-3 space-x-20">
              <span className={`text-sm font-medium ${currentStep >= 0 ? 'text-blue-600' : 'text-gray-500'}`}>Personal Details</span>
              <span className={`text-sm font-medium ${currentStep >= 1 ? 'text-blue-600' : 'text-gray-500'}`}>Service Needs</span>
              <span className={`text-sm font-medium ${currentStep >= 2 ? 'text-blue-600' : 'text-gray-500'}`}>Agreement</span>
            </div>
          </div>

          {/* Step Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Step 0: Personal Details */}
            {currentStep === 0 && (
              <div>
                <h2 className="text-2xl font-semibold text-center mb-2">Personal Details</h2>
                <p className="text-gray-600 text-center mb-8">Tell us about yourself so helpers can reach you</p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={seekerData.name}
                      onChange={(e) => setSeekerData({...seekerData, name: e.target.value})}
                      className="input-field"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      value={seekerData.contact}
                      onChange={(e) => setSeekerData({...seekerData, contact: e.target.value})}
                      className="input-field"
                      placeholder="10-digit mobile number"
                      maxLength={10}
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={seekerData.email}
                      onChange={(e) => setSeekerData({...seekerData, email: e.target.value})}
                      className="input-field"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Complete Address *
                    </label>
                    <textarea
                      value={seekerData.address}
                      onChange={(e) => setSeekerData({...seekerData, address: e.target.value})}
                      rows={3}
                      className="input-field"
                      placeholder="House/Flat no, Street, Area, Landmark"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      value={seekerData.city}
                      onChange={(e) => setSeekerData({...seekerData, city: e.target.value})}
                      className="input-field"
                      placeholder="Your city"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pincode *
                    </label>
                    <input
                      type="text"
                      value={seekerData.pincode}
                      onChange={(e) => setSeekerData({...seekerData, pincode: e.target.value})}
                      className="input-field"
                      placeholder="6-digit pincode"
                      maxLength={6}
                    />
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🔒</span>
                    <div>
                      <h3 className="font-semibold text-blue-800">Your Privacy Matters</h3>
                      <p className="text-sm text-blue-700 mt-1">
                        Your personal information is secure and will only be shared with helpers you choose to work with.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    onClick={nextStep}
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Continue to Service Needs →
                  </button>
                </div>
              </div>
            )}

            {/* Step 1: Service Needs */}
            {currentStep === 1 && (
              <div>
                <h2 className="text-2xl font-semibold text-center mb-2">What do you need help with?</h2>
                <p className="text-gray-600 text-center mb-8">Select categories or describe your specific needs</p>
                
                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-4">Select Service Categories</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {categories.map((category) => (
                      <div
                        key={category.id}
                        onClick={() => toggleCategory(category.id)}
                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all hover:scale-105 ${
                          seekerData.categories.includes(category.id)
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        <div className="text-3xl text-center mb-2">{category.icon}</div>
                        <div className="text-sm font-medium text-center text-gray-800 mb-1">{category.name}</div>
                        <div className="text-xs text-gray-500 text-center">{category.description}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-lg font-medium text-gray-700 mb-2">
                    Or describe your specific needs
                  </label>
                  <textarea
                    value={seekerData.customNeeds}
                    onChange={(e) => setSeekerData({...seekerData, customNeeds: e.target.value})}
                    rows={4}
                    className="input-field"
                    placeholder="Describe what kind of help you're looking for. Be as specific as possible to attract the right helpers..."
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    {seekerData.categories.length > 0 ? 
                      `You've selected ${seekerData.categories.length} categories` : 
                      'No categories selected'
                    }
                  </p>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">💡</span>
                    <div>
                      <h3 className="font-semibold text-green-800">Pro Tips</h3>
                      <ul className="text-sm text-green-700 mt-1 space-y-1">
                        <li>• Select multiple categories to find more helpers</li>
                        <li>• Be specific about your needs in the description</li>
                        <li>• Mention any special requirements or preferences</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={previousStep}
                    className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={nextStep}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Continue to Agreement →
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Terms & Conditions */}
            {currentStep === 2 && (
              <div>
                <h2 className="text-2xl font-semibold text-center mb-2">Terms & Conditions</h2>
                <p className="text-gray-600 text-center mb-8">Please review and accept our terms to complete your registration</p>
                
                <div className="bg-gray-50 border rounded-lg p-6 mb-6 max-h-96 overflow-y-auto">
                  <h3 className="text-lg font-semibold mb-4">Seeker Platform Terms & Conditions</h3>
                  
                  <div className="space-y-4 text-sm text-gray-700">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">1. Platform Usage</h4>
                      <p>By using Seeker, you agree to use our platform responsibly and lawfully. You are responsible for providing accurate information and maintaining the security of your account.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">2. Zero Commission Promise</h4>
                      <p>Seeker operates on a zero-commission model. All payments are made directly between seekers and helpers. We do not charge any commission or hidden fees.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">3. Helper Verification</h4>
                      <p>While we strive to verify all helpers, you are encouraged to review profiles, ratings, and communicate directly before hiring. Exercise due diligence in your selection process.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">4. Payment & Disputes</h4>
                      <p>All payments are handled directly between seekers and helpers. In case of disputes, we provide mediation support but are not liable for payment issues.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">5. Safety & Security</h4>
                      <p>Your safety is important. We recommend meeting helpers in safe environments and trusting your instincts. Report any suspicious activity immediately.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">6. Privacy Policy</h4>
                      <p>We protect your personal information and only share it with helpers you choose to contact. We do not sell or misuse your data.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">7. Platform Liability</h4>
                      <p>Seeker acts as a connection platform. We are not liable for the quality of services, damages, or issues arising from helper-seeker interactions.</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      checked={seekerData.agreedToTerms}
                      onChange={(e) => setSeekerData({...seekerData, agreedToTerms: e.target.checked})}
                      className="mt-1 text-blue-600 focus:ring-blue-500 h-5 w-5"
                    />
                    <span className="text-sm text-gray-700">
                      I have read and agree to the Terms & Conditions and Privacy Policy. I understand that Seeker is a platform that connects me with helpers and that all transactions are direct between me and the helpers I choose to work with.
                    </span>
                  </label>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🎉</span>
                    <div>
                      <h3 className="font-semibold text-green-800">Almost Done!</h3>
                      <p className="text-sm text-green-700 mt-1">
                        Once you complete registration, you'll be able to post tasks, browse helper profiles, and connect with verified helpers in your area.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={previousStep}
                    className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={completeOnboarding}
                    disabled={!seekerData.agreedToTerms}
                    className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all ${
                      seekerData.agreedToTerms
                        ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:shadow-lg'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Complete Registration ✨
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}