'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Category {
  id: string;
  name: string;
  icon: string;
  subcategories: string[];
}

const helpCategories: Category[] = [
  {
    id: 'household',
    name: 'House Help',
    icon: '🏠',
    subcategories: [
      'House Cleaning',
      'Laundry & Ironing',
      'Cooking & Meal Prep',
      'Gardening',
      'Pet Care',
      'Babysitting',
      'Painting walls',
      'Deep cleaning'
    ]
  },
  {
    id: 'maintenance',
    name: 'Home Maintenance',
    icon: '🔧',
    subcategories: [
      'Plumbing',
      'Electrical Work',
      'Carpentry',
      'Painting',
      'Appliance Repair',
      'General Handyman',
      'AC Repair',
      'Furniture Assembly'
    ]
  },
  {
    id: 'technology',
    name: 'Technology Support',
    icon: '💻',
    subcategories: [
      'Computer Repair',
      'Phone/Tablet Setup',
      'Internet/WiFi Issues',
      'Software Installation',
      'Data Recovery',
      'Tech Teaching',
      'Smart Home Setup',
      'Printer Setup'
    ]
  },
  {
    id: 'personal',
    name: 'Personal Assistance',
    icon: '👤',
    subcategories: [
      'Grocery Shopping',
      'Errands',
      'Document Assistance',
      'Transportation',
      'Companionship',
      'Health Support',
      'Banking Help',
      'Medical Appointments'
    ]
  },
  {
    id: 'learning',
    name: 'Learning & Tutoring',
    icon: '📚',
    subcategories: [
      'Academic Tutoring',
      'Language Teaching',
      'Music Lessons',
      'Art & Crafts',
      'Computer Skills',
      'Life Skills',
      'Exam Preparation',
      'Homework Help'
    ]
  },
  {
    id: 'delivery',
    name: 'Delivery & Transport',
    icon: '🚗',
    subcategories: [
      'Food Delivery',
      'Package Delivery',
      'Moving Help',
      'Airport Pickup',
      'Medical Appointments',
      'Shopping Assistance',
      'Furniture Moving',
      'Vehicle Services'
    ]
  }
];

export default function SeekerFlow() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [problemDescription, setProblemDescription] = useState('');
  const [budget, setBudget] = useState('');
  const [budgetType, setBudgetType] = useState('per-day');
  const [location, setLocation] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory(null);
    setCurrentStep(2);
  };

  const handleSubcategorySelect = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
    setCurrentStep(3);
  };

  const handleDescriptionContinue = () => {
    if (!problemDescription.trim()) {
      alert('Please describe what help you need');
      return;
    }
    setCurrentStep(4);
  };

  const handleBudgetContinue = () => {
    if (!budget || parseFloat(budget) <= 0) {
      alert('Please enter a valid budget amount');
      return;
    }
    setCurrentStep(5);
  };

  const handleLocationContinue = () => {
    if (!location.trim()) {
      alert('Please enter your location');
      return;
    }
    setCurrentStep(6);
  };

  const handlePostRequest = async () => {
    setIsLoading(true);
    
    // Simulate API call to post the help request
    setTimeout(() => {
      setIsLoading(false);
      alert(`Your help request has been posted successfully! 
      
Category: ${selectedCategoryData?.name}
Service: ${selectedSubcategory}
Budget: ₹${budget}/${budgetType.replace('-', ' ')}
Location: ${location}

You'll receive notifications when helpers show interest in your request.`);
      
      // Redirect to home or dashboard
      router.push('/');
    }, 2000);
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const selectedCategoryData = helpCategories.find(cat => cat.id === selectedCategory);

  const renderProgressBar = () => {
    const steps = ['Category', 'Service', 'Details', 'Budget', 'Location', 'Review'];
    return (
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                index + 1 <= currentStep 
                  ? 'bg-indigo-500 text-white' 
                  : 'bg-gray-200 text-gray-500'
              }`}>
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <div className={`w-12 h-1 mx-2 ${
                  index + 1 < currentStep ? 'bg-indigo-500' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-xs text-gray-500">
          {steps.map((step, index) => (
            <span key={index} className={index + 1 <= currentStep ? 'text-indigo-600' : ''}>
              {step}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block p-3 rounded-full bg-indigo-100 mb-4">
            <span className="text-2xl">🔍</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Find the Perfect Helper
          </h1>
          <p className="text-gray-600">
            Tell us what you need help with and we'll connect you with trusted helpers
          </p>
        </div>

        {renderProgressBar()}

        {/* Step 1: Category Selection */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-center mb-6">What type of help do you need?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {helpCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategorySelect(category.id)}
                  className="p-6 bg-white rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all text-left group"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 group-hover:text-indigo-600">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {category.subcategories.length} services available
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Subcategory Selection */}
        {currentStep === 2 && selectedCategoryData && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <button
                onClick={handleBack}
                className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
              >
                ← Back
              </button>
              <div className="text-2xl">{selectedCategoryData.icon}</div>
              <h2 className="text-xl font-semibold">Choose specific service</h2>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {selectedCategoryData.subcategories.map((subcategory) => (
                <button
                  key={subcategory}
                  onClick={() => handleSubcategorySelect(subcategory)}
                  className="p-4 rounded-xl border-2 border-gray-200 bg-white hover:border-indigo-300 text-left transition-all hover:shadow-md"
                >
                  <span className="font-medium text-gray-700">
                    {subcategory}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Problem Description */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <button
                onClick={handleBack}
                className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
              >
                ← Back
              </button>
              <h2 className="text-xl font-semibold">Describe your requirement</h2>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">{selectedCategoryData?.icon}</span>
                  <span className="font-medium text-gray-600">{selectedCategoryData?.name}</span>
                  <span className="text-gray-400">→</span>
                  <span className="font-semibold text-indigo-600">{selectedSubcategory}</span>
                </div>
              </div>
              
              <label className="block mb-3 font-semibold text-gray-700">
                Describe what exactly you need help with
              </label>
              <textarea
                value={problemDescription}
                onChange={(e) => setProblemDescription(e.target.value)}
                placeholder="For example: 'I need help painting the walls of my bedroom. The room is about 12x10 feet and needs primer and two coats of paint. I have all the materials ready.'"
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl transition-all focus:outline-none focus:border-indigo-500 resize-none"
              />
              <p className="text-sm text-gray-500 mt-2">
                Be as detailed as possible to get accurate quotes from helpers
              </p>
            </div>

            <button
              onClick={handleDescriptionContinue}
              className="w-full py-4 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition-colors font-semibold text-lg"
            >
              Continue to Budget
            </button>
          </div>
        )}

        {/* Step 4: Budget/Quote */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <button
                onClick={handleBack}
                className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
              >
                ← Back
              </button>
              <h2 className="text-xl font-semibold">Set your budget</h2>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <label className="block mb-3 font-semibold text-gray-700">
                How much are you willing to pay?
              </label>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex items-center bg-gray-100 px-3 rounded-xl">
                    <span className="text-lg font-semibold">₹</span>
                  </div>
                  <input
                    type="number"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="100"
                    min="1"
                    className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl transition-all focus:outline-none focus:border-indigo-500"
                  />
                  <select 
                    value={budgetType}
                    onChange={(e) => setBudgetType(e.target.value)}
                    className="px-4 py-3 border-2 border-gray-200 rounded-xl transition-all focus:outline-none focus:border-indigo-500"
                  >
                    <option value="per-day">per day</option>
                    <option value="per-hour">per hour</option>
                    <option value="total">total</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-3 gap-2">
                  {['50', '100', '200', '300', '500', '1000'].map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setBudget(amount)}
                      className="py-2 px-4 border border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition-colors text-sm"
                    >
                      ₹{amount}
                    </button>
                  ))}
                </div>
              </div>
              
              <p className="text-sm text-gray-500 mt-3">
                This helps helpers understand your budget range. You can negotiate the final price.
              </p>
            </div>

            <button
              onClick={handleBudgetContinue}
              className="w-full py-4 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition-colors font-semibold text-lg"
            >
              Continue to Location
            </button>
          </div>
        )}

        {/* Step 5: Location */}
        {currentStep === 5 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <button
                onClick={handleBack}
                className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
              >
                ← Back
              </button>
              <h2 className="text-xl font-semibold">Where do you need help?</h2>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <label className="block mb-3 font-semibold text-gray-700">
                Enter your location
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g., Koramangala, Bangalore or your full address"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl transition-all focus:outline-none focus:border-indigo-500"
              />
              <p className="text-sm text-gray-500 mt-2">
                This helps us find helpers near you. Your exact address will only be shared after you confirm a helper.
              </p>
            </div>

            <button
              onClick={handleLocationContinue}
              className="w-full py-4 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition-colors font-semibold text-lg"
            >
              Review & Post
            </button>
          </div>
        )}

        {/* Step 6: Review & Post */}
        {currentStep === 6 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <button
                onClick={handleBack}
                className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
              >
                ← Back
              </button>
              <h2 className="text-xl font-semibold">Review your request</h2>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Service Needed</h3>
                <div className="flex items-center gap-2">
                  <span className="text-lg">{selectedCategoryData?.icon}</span>
                  <span className="text-gray-600">{selectedCategoryData?.name}</span>
                  <span className="text-gray-400">→</span>
                  <span className="font-semibold text-indigo-600">{selectedSubcategory}</span>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Description</h3>
                <p className="text-gray-600 bg-gray-50 p-3 rounded-lg">{problemDescription}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Budget</h3>
                <p className="text-xl font-bold text-green-600">₹{budget} {budgetType.replace('-', ' ')}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Location</h3>
                <p className="text-gray-600 flex items-center gap-2">
                  <span>📍</span> {location}
                </p>
              </div>
            </div>

            <button
              onClick={handlePostRequest}
              disabled={isLoading}
              className="w-full py-4 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors font-semibold text-lg disabled:opacity-50"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div 
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    style={{ animation: 'spin 1s linear infinite' }}
                  />
                  Posting your request...
                </div>
              ) : (
                'Post My Request'
              )}
            </button>

            <p className="text-sm text-gray-500 text-center">
              By posting, you agree to our terms of service. Helpers will be able to see your request and send you quotes.
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}