'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Helper {
  id: number;
  name: string;
  rating: number;
  reviews: number;
  experience: string;
  skills: string[];
  profileImage?: string;
  responseTime: string;
  completedTasks: number;
}

interface Bid {
  id: number;
  helperId: number;
  helper: Helper;
  bidAmount: string;
  originalAmount: string;
  message: string;
  timeline: string;
  bidTime: string;
  status: 'pending' | 'accepted' | 'rejected' | 'negotiating';
  isNegotiable: boolean;
}

interface Task {
  id: number;
  title: string;
  description: string;
  category: string;
  budget: string;
  location: string;
  urgency: string;
  postedTime: string;
  status: 'active' | 'in_progress' | 'completed' | 'cancelled';
  bids: Bid[];
}

export default function SeekerDashboard() {
  const [seekerData, setSeekerData] = useState<any>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [activeTab, setActiveTab] = useState('tasks');

  // Mock data for demonstration
  const mockTasks: Task[] = [
    {
      id: 1,
      title: "Need help moving furniture to new apartment",
      description: "Moving 2 beds, 1 sofa, dining table, and boxes from 2nd floor to ground floor. Need 2 people with a small truck.",
      category: "moving",
      budget: "₹2,000",
      location: "MG Road, Indore",
      urgency: "Within 2 days",
      postedTime: "2 hours ago",
      status: "active",
      bids: [
        {
          id: 1,
          helperId: 1,
          helper: {
            id: 1,
            name: "Rajesh Kumar",
            rating: 4.8,
            reviews: 156,
            experience: "5 years",
            skills: ["Moving", "Packing", "Furniture Assembly"],
            responseTime: "< 30 mins",
            completedTasks: 234
          },
          bidAmount: "₹1,800",
          originalAmount: "₹2,000",
          message: "Hi! I have experience in furniture moving with my own truck and helper. Can complete this in 4-5 hours safely.",
          timeline: "Today evening",
          bidTime: "1 hour ago",
          status: "pending",
          isNegotiable: true
        },
        {
          id: 2,
          helperId: 2,
          helper: {
            id: 2,
            name: "Movers Express Team",
            rating: 4.9,
            reviews: 89,
            experience: "8 years",
            skills: ["Professional Moving", "Packing", "Heavy Lifting"],
            responseTime: "< 15 mins",
            completedTasks: 167
          },
          bidAmount: "₹2,200",
          originalAmount: "₹2,000",
          message: "Professional moving service with insurance coverage. We'll handle everything carefully with protective materials.",
          timeline: "Tomorrow morning",
          bidTime: "45 minutes ago",
          status: "pending",
          isNegotiable: true
        },
        {
          id: 3,
          helperId: 3,
          helper: {
            id: 3,
            name: "Amit Singh",
            rating: 4.6,
            reviews: 67,
            experience: "3 years",
            skills: ["Moving", "Loading", "Quick Service"],
            responseTime: "< 1 hour",
            completedTasks: 89
          },
          bidAmount: "₹1,500",
          originalAmount: "₹2,000",
          message: "I can do this job with my friend. We're young and strong, and work quickly. Available tomorrow.",
          timeline: "Tomorrow afternoon",
          bidTime: "30 minutes ago",
          status: "pending",
          isNegotiable: false
        }
      ]
    },
    {
      id: 2,
      title: "Deep cleaning of 3BHK apartment",
      description: "Need thorough cleaning including kitchen, bathrooms, and all rooms. Should bring own cleaning supplies.",
      category: "cleaning",
      budget: "₹1,200",
      location: "Vijay Nagar, Indore",
      urgency: "This weekend",
      postedTime: "1 day ago",
      status: "active",
      bids: [
        {
          id: 4,
          helperId: 4,
          helper: {
            id: 4,
            name: "CleanPro Services",
            rating: 4.7,
            reviews: 201,
            experience: "6 years",
            skills: ["Deep Cleaning", "Sanitization", "Eco-friendly"],
            responseTime: "< 20 mins",
            completedTasks: 345
          },
          bidAmount: "₹1,000",
          originalAmount: "₹1,200",
          message: "Professional cleaning with eco-friendly products. 6-8 hours for complete deep cleaning with 2 cleaners.",
          timeline: "This Saturday",
          bidTime: "4 hours ago",
          status: "pending",
          isNegotiable: true
        },
        {
          id: 5,
          helperId: 5,
          helper: {
            id: 5,
            name: "Priya Cleaning Services",
            rating: 4.9,
            reviews: 134,
            experience: "4 years",
            skills: ["Residential Cleaning", "Kitchen Deep Clean", "Bathroom Sanitization"],
            responseTime: "< 45 mins",
            completedTasks: 278
          },
          bidAmount: "₹1,350",
          originalAmount: "₹1,200",
          message: "I specialize in residential cleaning. Will bring all supplies and ensure every corner is spotless.",
          timeline: "Sunday morning",
          bidTime: "6 hours ago",
          status: "pending",
          isNegotiable: true
        }
      ]
    }
  ];

  useEffect(() => {
    // Load seeker data from localStorage
    const savedData = localStorage.getItem('seekerData');
    if (savedData) {
      setSeekerData(JSON.parse(savedData));
    }
    
    // Set mock tasks
    setTasks(mockTasks);
    setSelectedTask(mockTasks[0]);
  }, []);

  const getTotalBids = () => {
    return tasks.reduce((total, task) => total + task.bids.length, 0);
  };

  const getActiveTasks = () => {
    return tasks.filter(task => task.status === 'active').length;
  };

  const acceptBid = (taskId: number, bidId: number) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId 
        ? {
            ...task,
            bids: task.bids.map(bid =>
              bid.id === bidId 
                ? { ...bid, status: 'accepted' as const }
                : { ...bid, status: 'rejected' as const }
            ),
            status: 'in_progress' as const
          }
        : task
    ));
    alert('Bid accepted! The helper will contact you soon to coordinate the work.');
  };

  const rejectBid = (taskId: number, bidId: number) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId 
        ? {
            ...task,
            bids: task.bids.map(bid =>
              bid.id === bidId 
                ? { ...bid, status: 'rejected' as const }
                : bid
            )
          }
        : task
    ));
  };

  const startNegotiation = (taskId: number, bidId: number) => {
    alert('Negotiation started! You can now chat with the helper to discuss terms.');
    setTasks(prev => prev.map(task => 
      task.id === taskId 
        ? {
            ...task,
            bids: task.bids.map(bid =>
              bid.id === bidId 
                ? { ...bid, status: 'negotiating' as const }
                : bid
            )
          }
        : task
    ));
  };

  const getBidStatusColor = (status: string) => {
    switch (status) {
      case 'accepted': return 'bg-green-100 text-green-800 border-green-200';
      case 'rejected': return 'bg-red-100 text-red-800 border-red-200';
      case 'negotiating': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  if (!seekerData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">🔄</div>
          <p className="text-gray-600">Loading your dashboard...</p>
          <Link href="/seeker-onboarding" className="text-blue-600 hover:underline mt-2 inline-block">
            Complete your onboarding first
          </Link>
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
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Seeker
              </h1>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600">Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                href="/post-task" 
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                + Post New Task
              </Link>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Hi, {seekerData.name?.split(' ')[0]}!</span>
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {seekerData.name?.charAt(0).toUpperCase() || 'S'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-blue-600">{getActiveTasks()}</div>
                <div className="text-sm text-gray-600">Active Tasks</div>
              </div>
              <div className="text-3xl">📋</div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-green-600">{getTotalBids()}</div>
                <div className="text-sm text-gray-600">Total Bids</div>
              </div>
              <div className="text-3xl">💬</div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-purple-600">4.9</div>
                <div className="text-sm text-gray-600">Your Rating</div>
              </div>
              <div className="text-3xl">⭐</div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-orange-600">₹0</div>
                <div className="text-sm text-gray-600">Commission Saved</div>
              </div>
              <div className="text-3xl">💰</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tasks List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold">Your Tasks</h2>
                <p className="text-sm text-gray-600 mt-1">{tasks.length} tasks posted</p>
              </div>
              
              <div className="max-h-96 overflow-y-auto">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    onClick={() => setSelectedTask(task)}
                    className={`p-4 border-b cursor-pointer hover:bg-gray-50 transition-colors ${
                      selectedTask?.id === task.id ? 'bg-blue-50 border-r-4 border-r-blue-500' : ''
                    }`}
                  >
                    <h3 className="font-medium text-gray-900 mb-2">{task.title}</h3>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span className="font-medium text-green-600">{task.budget}</span>
                      <span>{task.bids.length} bids</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        task.status === 'active' ? 'bg-green-100 text-green-800' :
                        task.status === 'in_progress' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {task.status.replace('_', ' ')}
                      </span>
                      <span className="text-xs text-gray-500">{task.postedTime}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bids for Selected Task */}
          <div className="lg:col-span-2">
            {selectedTask && (
              <div className="bg-white rounded-xl shadow-sm border">
                <div className="p-6 border-b">
                  <h2 className="text-xl font-semibold mb-2">{selectedTask.title}</h2>
                  <p className="text-gray-600 mb-4">{selectedTask.description}</p>
                  <div className="flex items-center space-x-6 text-sm text-gray-600">
                    <span>💰 Budget: <strong className="text-green-600">{selectedTask.budget}</strong></span>
                    <span>📍 {selectedTask.location}</span>
                    <span>⏰ {selectedTask.urgency}</span>
                    <span>💬 {selectedTask.bids.length} bids received</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-4">Helper Bids & Responses</h3>
                  
                  {selectedTask.bids.length === 0 ? (
                    <div className="text-center py-8">
                      <div className="text-4xl mb-4">📭</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">No bids yet</h3>
                      <p className="text-gray-600">Helpers will start bidding on your task soon!</p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {selectedTask.bids.map((bid) => (
                        <div key={bid.id} className="border rounded-xl p-6">
                          {/* Helper Info */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center space-x-4">
                              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                                {bid.helper.name.charAt(0)}
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900">{bid.helper.name}</h4>
                                <div className="flex items-center space-x-4 text-sm text-gray-600">
                                  <span>⭐ {bid.helper.rating} ({bid.helper.reviews} reviews)</span>
                                  <span>📋 {bid.helper.completedTasks} tasks</span>
                                  <span>⏱️ {bid.helper.responseTime}</span>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-2">
                                  {bid.helper.skills.map((skill) => (
                                    <span key={skill} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                            
                            <div className="text-right">
                              <div className="flex items-center space-x-2 mb-1">
                                <span className="text-2xl font-bold text-green-600">{bid.bidAmount}</span>
                                {bid.bidAmount !== bid.originalAmount && (
                                  <span className="text-sm text-gray-500 line-through">{bid.originalAmount}</span>
                                )}
                              </div>
                              <span className={`px-2 py-1 text-xs rounded-full border ${getBidStatusColor(bid.status)}`}>
                                {bid.status}
                              </span>
                            </div>
                          </div>

                          {/* Bid Message */}
                          <div className="bg-gray-50 rounded-lg p-4 mb-4">
                            <p className="text-gray-700">{bid.message}</p>
                            <div className="flex items-center justify-between mt-3 text-sm text-gray-600">
                              <span>📅 Available: {bid.timeline}</span>
                              <span>🕒 Bid placed {bid.bidTime}</span>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          {bid.status === 'pending' && (
                            <div className="flex space-x-3">
                              <button
                                onClick={() => acceptBid(selectedTask.id, bid.id)}
                                className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-all"
                              >
                                Accept Bid
                              </button>
                              {bid.isNegotiable && (
                                <button
                                  onClick={() => startNegotiation(selectedTask.id, bid.id)}
                                  className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-all"
                                >
                                  Negotiate
                                </button>
                              )}
                              <button
                                onClick={() => rejectBid(selectedTask.id, bid.id)}
                                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all"
                              >
                                Decline
                              </button>
                            </div>
                          )}
                          
                          {bid.status === 'accepted' && (
                            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                              <div className="flex items-center space-x-2">
                                <span className="text-green-600">✓</span>
                                <span className="text-green-800 font-medium">Bid Accepted! The helper will contact you soon.</span>
                              </div>
                            </div>
                          )}
                          
                          {bid.status === 'negotiating' && (
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                              <div className="flex items-center space-x-2">
                                <span className="text-yellow-600">💬</span>
                                <span className="text-yellow-800 font-medium">Negotiation in progress. Check your messages.</span>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}