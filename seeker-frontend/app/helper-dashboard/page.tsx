'use client';

import { useState, useEffect } from 'react';
import TaskCard from '../../components/TaskCard';
import TaskModal from '../../components/TaskModal';

export default function HelperDashboard() {
  const [helperData, setHelperData] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [tasks, setTasks] = useState<any[]>([]);
  const [selectedTask, setSelectedTask] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mock tasks data - in real app this would come from API
  const mockTasks = [
    {
      id: 1,
      title: "Need help moving furniture to new apartment",
      description: "Moving 2 beds, 1 sofa, dining table, and boxes from 2nd floor to ground floor. Need 2 people with a small truck.",
      category: "moving",
      location: "MG Road, Indore",
      budget: "₹2,000",
      budgetType: "fixed",
      postedBy: "Rahul S.",
      postedTime: "2 hours ago",
      urgency: "Within 2 days",
      responses: 12
    },
    {
      id: 2,
      title: "Deep cleaning of 3BHK apartment",
      description: "Need thorough cleaning including kitchen, bathrooms, and all rooms. Should bring own cleaning supplies.",
      category: "cleaning",
      location: "Vijay Nagar, Indore",
      budget: "₹150/hour",
      budgetType: "hourly",
      estimatedHours: "6-8 hours",
      postedBy: "Priya M.",
      postedTime: "4 hours ago",
      urgency: "Flexible",
      responses: 8
    },
    {
      id: 3,
      title: "Laptop repair - Screen replacement",
      description: "My laptop screen is cracked and needs replacement. Dell Inspiron 15 3000 series.",
      category: "tech",
      location: "Palasia Square, Indore",
      budget: "₹5,000",
      budgetType: "fixed",
      postedBy: "Amit K.",
      postedTime: "1 day ago",
      urgency: "Soon",
      responses: 5
    },
    {
      id: 4,
      title: "Home tutor needed for Class 10 Math",
      description: "Looking for an experienced math tutor for my daughter. Need help with CBSE curriculum.",
      category: "tutoring",
      location: "Scheme 94, Indore",
      budget: "₹500/hour",
      budgetType: "hourly",
      estimatedHours: "2 hours/day",
      postedBy: "Sunita J.",
      postedTime: "3 hours ago",
      urgency: "URGENT",
      responses: 15
    },
    {
      id: 5,
      title: "Plumbing work - Kitchen sink repair",
      description: "Kitchen sink is leaking and tap needs replacement. Emergency repair needed.",
      category: "plumbing",
      location: "AB Road, Indore",
      budget: "₹1,200",
      budgetType: "fixed",
      postedBy: "Rajesh P.",
      postedTime: "30 minutes ago",
      urgency: "URGENT",
      responses: 3
    },
    {
      id: 6,
      title: "Garden maintenance and plant care",
      description: "Need someone to maintain my garden, water plants, and do basic landscaping work.",
      category: "gardening",
      location: "Bicholi Mardana, Indore",
      budget: "₹200/hour",
      budgetType: "hourly",
      estimatedHours: "3-4 hours",
      postedBy: "Dr. Sharma",
      postedTime: "6 hours ago",
      urgency: "Flexible",
      responses: 7
    }
  ];

  const categoryMap = {
    cleaning: { name: 'Home Cleaning', icon: '🏠', color: 'bg-blue-50 border-blue-200' },
    repairs: { name: 'Repairs', icon: '🔧', color: 'bg-orange-50 border-orange-200' },
    tech: { name: 'Tech Support', icon: '💻', color: 'bg-purple-50 border-purple-200' },
    moving: { name: 'Moving', icon: '🚚', color: 'bg-green-50 border-green-200' },
    cooking: { name: 'Cooking', icon: '👨‍🍳', color: 'bg-yellow-50 border-yellow-200' },
    beauty: { name: 'Beauty', icon: '✂️', color: 'bg-pink-50 border-pink-200' },
    painting: { name: 'Painting', icon: '🎨', color: 'bg-indigo-50 border-indigo-200' },
    electrical: { name: 'Electrical', icon: '⚡', color: 'bg-yellow-50 border-yellow-200' },
    plumbing: { name: 'Plumbing', icon: '🚿', color: 'bg-blue-50 border-blue-200' },
    gardening: { name: 'Gardening', icon: '🌱', color: 'bg-green-50 border-green-200' },
    petcare: { name: 'Pet Care', icon: '🐕', color: 'bg-orange-50 border-orange-200' },
    tutoring: { name: 'Tutoring', icon: '📚', color: 'bg-purple-50 border-purple-200' },
    fitness: { name: 'Fitness', icon: '💪', color: 'bg-red-50 border-red-200' },
    photography: { name: 'Photography', icon: '📸', color: 'bg-gray-50 border-gray-200' },
    driving: { name: 'Driving', icon: '🚗', color: 'bg-blue-50 border-blue-200' },
    other: { name: 'Other', icon: '📋', color: 'bg-gray-50 border-gray-200' }
  };

  useEffect(() => {
    // Load helper data from localStorage
    const savedData = localStorage.getItem('helperData');
    if (savedData) {
      setHelperData(JSON.parse(savedData));
    }
    
    // Set mock tasks
    setTasks(mockTasks);
  }, []);

  const filteredTasks = selectedCategory === 'all' 
    ? tasks 
    : tasks.filter(task => task.category === selectedCategory);

  const contactSeeker = (taskId: number) => {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
      setSelectedTask(task);
      setIsModalOpen(true);
    }
  };

  const viewTaskDetails = (taskId: number) => {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
      setSelectedTask(task);
      setIsModalOpen(true);
    }
  };

  if (!helperData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">🔄</div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Seeker
              </h1>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600">Helper Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome back!</span>
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                {helperData.name ? helperData.name.charAt(0).toUpperCase() : 'H'}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl text-white p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Welcome back! 👋</h2>
              <p className="opacity-90">Ready to help seekers and earn money?</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">{tasks.length}</div>
              <div className="text-sm opacity-90">New Tasks Available</div>
            </div>
          </div>
        </div>

        {/* Your Categories */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Your Service Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`p-4 rounded-xl border-2 transition-all ${
                selectedCategory === 'all' 
                  ? 'border-purple-500 bg-purple-50' 
                  : 'border-gray-200 hover:border-purple-300'
              }`}
            >
              <div className="text-2xl mb-1">📋</div>
              <div className="text-sm font-medium">All Tasks</div>
              <div className="text-xs text-gray-500 mt-1">{tasks.length} available</div>
            </button>
            
            {helperData.categories?.map((categoryId: string) => {
              const category = categoryMap[categoryId];
              const categoryTasks = tasks.filter(t => t.category === categoryId);
              
              return (
                <button
                  key={categoryId}
                  onClick={() => setSelectedCategory(categoryId)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    selectedCategory === categoryId 
                      ? 'border-purple-500 bg-purple-50' 
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  <div className="text-2xl mb-1">{category.icon}</div>
                  <div className="text-sm font-medium">{category.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{categoryTasks.length} available</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tasks List */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">
              {selectedCategory === 'all' 
                ? 'All Available Tasks' 
                : `${categoryMap[selectedCategory]?.name} Tasks`
              }
            </h3>
            <span className="text-gray-500">{filteredTasks.length} tasks found</span>
          </div>

          <div className="grid gap-6">
            {filteredTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onContact={contactSeeker}
                categoryMap={categoryMap}
              />
            ))}
          </div>

          {filteredTasks.length === 0 && (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No tasks available</h3>
              <p className="text-gray-600">
                {selectedCategory === 'all' 
                  ? 'No tasks are currently posted. Check back later!'
                  : `No tasks in ${categoryMap[selectedCategory]?.name} category right now.`
                }
              </p>
            </div>
          )}
        </div>

        {/* Task Modal */}
        <TaskModal
          task={selectedTask}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onContact={contactSeeker}
          categoryMap={categoryMap}
        />
      </div>
    </div>
  );
}