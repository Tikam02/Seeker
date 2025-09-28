'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HelperOnboarding() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [helperData, setHelperData] = useState({
    name: '',
    skills: '',
    experience: '',
    location: '',
    availability: []
  });
  const router = useRouter();

  const categories = [
    { id: 'cleaning', name: 'Home Cleaning', icon: '🏠' },
    { id: 'repairs', name: 'Repairs & Maintenance', icon: '🔧' },
    { id: 'tech', name: 'Tech Support', icon: '💻' },
    { id: 'moving', name: 'Moving & Delivery', icon: '🚚' },
    { id: 'cooking', name: 'Cooking & Catering', icon: '👨‍🍳' },
    { id: 'beauty', name: 'Beauty & Grooming', icon: '✂️' },
    { id: 'painting', name: 'Painting', icon: '🎨' },
    { id: 'electrical', name: 'Electrical Work', icon: '⚡' },
    { id: 'plumbing', name: 'Plumbing', icon: '🚿' },
    { id: 'gardening', name: 'Gardening', icon: '🌱' },
    { id: 'petcare', name: 'Pet Care', icon: '🐕' },
    { id: 'tutoring', name: 'Tutoring', icon: '📚' },
    { id: 'fitness', name: 'Fitness Training', icon: '💪' },
    { id: 'photography', name: 'Photography', icon: '📸' },
    { id: 'driving', name: 'Driving Services', icon: '🚗' },
    { id: 'other', name: 'Other Services', icon: '📋' }
  ];

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const nextStep = () => {
    if (currentStep === 0 && selectedCategories.length === 0) {
      alert('Please select at least one category');
      return;
    }
    setCurrentStep(prev => prev + 1);
  };

  const completeOnboarding = () => {
    // Save helper data and redirect to dashboard
    localStorage.setItem('helperData', JSON.stringify({
      ...helperData,
      categories: selectedCategories
    }));
    router.push('/helper-dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Welcome Helper! 👋
            </h1>
            <p className="text-gray-600 text-lg">Let's set up your profile to start earning</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4">
              {[0, 1, 2].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${
                    step <= currentStep ? 'bg-gradient-to-r from-purple-600 to-blue-600' : 'bg-gray-300'
                  }`}>
                    {step < currentStep ? '✓' : step + 1}
                  </div>
                  {step < 2 && (
                    <div className={`w-16 h-1 mx-2 ${step < currentStep ? 'bg-gradient-to-r from-purple-600 to-blue-600' : 'bg-gray-300'}`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Step 0: Category Selection */}
            {currentStep === 0 && (
              <div>
                <h2 className="text-2xl font-semibold text-center mb-2">What can you help with?</h2>
                <p className="text-gray-600 text-center mb-8">Select all categories where you can provide services</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {categories.map((category) => (
                    <div
                      key={category.id}
                      onClick={() => toggleCategory(category.id)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all hover:scale-105 ${
                        selectedCategories.includes(category.id)
                          ? 'border-purple-500 bg-purple-50'
                          : 'border-gray-200 hover:border-purple-300'
                      }`}
                    >
                      <div className="text-3xl text-center mb-2">{category.icon}</div>
                      <div className="text-sm font-medium text-center text-gray-800">{category.name}</div>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <button
                    onClick={nextStep}
                    className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Continue →
                  </button>
                </div>
              </div>
            )}

            {/* Step 1: Skills & Experience */}
            {currentStep === 1 && (
              <div>
                <h2 className="text-2xl font-semibold text-center mb-2">Tell us about your skills</h2>
                <p className="text-gray-600 text-center mb-8">This helps seekers find the right helper</p>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Describe your skills and expertise *
                    </label>
                    <textarea
                      value={helperData.skills}
                      onChange={(e) => setHelperData({...helperData, skills: e.target.value})}
                      rows={4}
                      className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="e.g., I have 5 years of experience in home cleaning, including deep cleaning, organizing, and eco-friendly cleaning methods..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Years of Experience
                    </label>
                    <select
                      value={helperData.experience}
                      onChange={(e) => setHelperData({...helperData, experience: e.target.value})}
                      className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select experience level</option>
                      <option value="beginner">Just starting (0-1 years)</option>
                      <option value="intermediate">Some experience (1-3 years)</option>
                      <option value="experienced">Experienced (3-5 years)</option>
                      <option value="expert">Expert (5+ years)</option>
                    </select>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={() => setCurrentStep(0)}
                    className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={nextStep}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Continue →
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Location & Availability */}
            {currentStep === 2 && (
              <div>
                <h2 className="text-2xl font-semibold text-center mb-2">Almost done!</h2>
                <p className="text-gray-600 text-center mb-8">Set your location and availability</p>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Location *
                    </label>
                    <input
                      type="text"
                      value={helperData.location}
                      onChange={(e) => setHelperData({...helperData, location: e.target.value})}
                      className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="e.g., Indore, Madhya Pradesh"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Working Hours
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { id: 'morning', label: 'Morning (6 AM - 12 PM)', icon: '🌅' },
                        { id: 'afternoon', label: 'Afternoon (12 PM - 5 PM)', icon: '☀️' },
                        { id: 'evening', label: 'Evening (5 PM - 9 PM)', icon: '🌆' },
                        { id: 'night', label: 'Night (9 PM - 12 AM)', icon: '🌙' }
                      ].map((slot) => (
                        <label key={slot.id} className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                          <input
                            type="checkbox"
                            value={slot.id}
                            onChange={(e) => {
                              const value = e.target.value;
                              setHelperData({
                                ...helperData,
                                availability: e.target.checked 
                                  ? [...helperData.availability, value]
                                  : helperData.availability.filter(a => a !== value)
                              });
                            }}
                            className="text-purple-600 focus:ring-purple-500"
                          />
                          <span className="text-xl">{slot.icon}</span>
                          <span className="text-sm">{slot.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🎉</span>
                    <div>
                      <h3 className="font-semibold text-green-800">Ready to start earning!</h3>
                      <p className="text-sm text-green-700 mt-1">
                        Once you complete your profile, you'll be able to view and respond to tasks posted by seekers in your selected categories.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={completeOnboarding}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Complete Setup ✨
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