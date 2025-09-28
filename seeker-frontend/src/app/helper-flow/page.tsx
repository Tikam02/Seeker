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
    name: 'Household Services',
    icon: '🏠',
    subcategories: [
      'House Cleaning',
      'Laundry & Ironing',
      'Cooking & Meal Prep',
      'Gardening',
      'Pet Care',
      'Babysitting'
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
      'General Handyman'
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
      'Tech Teaching'
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
      'Health Support'
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
      'Life Skills'
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
      'Shopping Assistance'
    ]
  }
];

export default function HelperFlow() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [customProblem, setCustomProblem] = useState('');
  const [showCustomInput, setShowCustomInput] = useState(false);
  const router = useRouter();

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory(null);
  };

  const handleSubcategorySelect = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
  };

  const handleContinue = () => {
    if (showCustomInput && !customProblem.trim()) {
      alert('Please describe your specific problem');
      return;
    }
    
    if (!showCustomInput && !selectedSubcategory) {
      alert('Please select a category and subcategory');
      return;
    }

    const selectedService = showCustomInput ? customProblem : selectedSubcategory;
    alert(`Great! You need help with: ${selectedService}. Next, we'll connect you with available helpers in your area.`);
  };

  const selectedCategoryData = helpCategories.find(cat => cat.id === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block p-3 rounded-full bg-emerald-100 mb-4">
            <span className="text-2xl">🤝</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            What help do you need?
          </h1>
          <p className="text-gray-600">
            Select a category or describe your specific problem
          </p>
        </div>

        {/* Categories Grid */}
        {!selectedCategory && !showCustomInput && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {helpCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategorySelect(category.id)}
                  className="p-6 bg-white rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all text-left group"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 group-hover:text-emerald-600">
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

            <div className="text-center">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="text-gray-500 font-medium">OR</span>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>
              <button
                onClick={() => setShowCustomInput(true)}
                className="px-8 py-3 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-colors font-semibold"
              >
                Describe Your Specific Problem
              </button>
            </div>
          </div>
        )}

        {/* Subcategories */}
        {selectedCategory && selectedCategoryData && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <button
                onClick={() => setSelectedCategory(null)}
                className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
              >
                ← Back
              </button>
              <div className="text-2xl">{selectedCategoryData.icon}</div>
              <h2 className="text-xl font-semibold">{selectedCategoryData.name}</h2>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {selectedCategoryData.subcategories.map((subcategory) => (
                <button
                  key={subcategory}
                  onClick={() => handleSubcategorySelect(subcategory)}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    selectedSubcategory === subcategory
                      ? 'border-emerald-500 bg-emerald-50'
                      : 'border-gray-200 bg-white hover:border-emerald-300'
                  }`}
                >
                  <span className={`font-medium ${
                    selectedSubcategory === subcategory 
                      ? 'text-emerald-700' 
                      : 'text-gray-700'
                  }`}>
                    {subcategory}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Custom Problem Input */}
        {showCustomInput && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <button
                onClick={() => setShowCustomInput(false)}
                className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
              >
                ← Back
              </button>
              <h2 className="text-xl font-semibold">Describe Your Problem</h2>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <label className="block mb-3 font-semibold text-gray-700">
                What specific help do you need?
              </label>
              <textarea
                value={customProblem}
                onChange={(e) => setCustomProblem(e.target.value)}
                placeholder="Please describe your problem in detail. For example: 'I need help setting up my new smart TV and connecting it to WiFi' or 'My kitchen sink is leaking and I need it fixed urgently'"
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl transition-all focus:outline-none focus:border-emerald-500 resize-none"
              />
              <p className="text-sm text-gray-500 mt-2">
                Be as specific as possible to get matched with the right helper
              </p>
            </div>
          </div>
        )}

        {/* Continue Button */}
        {(selectedSubcategory || (showCustomInput && customProblem.trim())) && (
          <div className="mt-8 text-center">
            <button
              onClick={handleContinue}
              className="px-8 py-4 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-colors font-semibold text-lg"
            >
              Continue to Find Helpers
            </button>
          </div>
        )}
      </div>
    </div>
  );
}