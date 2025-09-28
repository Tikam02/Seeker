'use client';

import { useState } from 'react';

interface Task {
  id: number;
  title: string;
  description: string;
  category: string;
  location: string;
  budget: string;
  budgetType: string;
  estimatedHours?: string;
  postedBy: string;
  postedTime: string;
  urgency: string;
  responses: number;
}

interface TaskModalProps {
  task: Task | null;
  isOpen: boolean;
  onClose: () => void;
  onContact: (taskId: number) => void;
  categoryMap: any;
}

export default function TaskModal({ task, isOpen, onClose, onContact, categoryMap }: TaskModalProps) {
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen || !task) return null;

  const getUrgencyStyle = (urgency: string) => {
    switch (urgency.toLowerCase()) {
      case 'urgent':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'soon':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const handleContact = async () => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      alert(`Your message has been sent to ${task.postedBy}! They will contact you soon.`);
      setIsSubmitting(false);
      setMessage('');
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">{categoryMap[task.category]?.icon}</span>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{task.title}</h2>
                <div className="flex items-center space-x-2 mt-1">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getUrgencyStyle(task.urgency)}`}>
                    {task.urgency}
                  </span>
                  <span className="text-sm text-gray-500">Posted {task.postedTime}</span>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Task Details */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Task Description</h3>
              <p className="text-gray-600 leading-relaxed">{task.description}</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Task Details</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Category:</span>
                    <span className="font-medium">{categoryMap[task.category]?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Location:</span>
                    <span className="font-medium">{task.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Budget:</span>
                    <span className="font-bold text-green-600">{task.budget}</span>
                  </div>
                  {task.budgetType === 'hourly' && task.estimatedHours && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Estimated Hours:</span>
                      <span className="font-medium">{task.estimatedHours}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-500">Payment Type:</span>
                    <span className="font-medium capitalize">{task.budgetType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Responses:</span>
                    <span className="font-medium">{task.responses} helpers interested</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Seeker Info */}
          <div className="bg-gray-50 rounded-xl p-4 mb-6">
            <h3 className="font-semibold text-gray-900 mb-2">About the Seeker</h3>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                {task.postedBy.charAt(0)}
              </div>
              <div>
                <div className="font-medium">{task.postedBy}</div>
                <div className="text-sm text-gray-500">Member since 2023 • 4.8★ rating</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Send a Message</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your message to the seeker
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="input-field"
                placeholder="Hi! I'm interested in helping with this task. I have experience in..."
              />
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">💡</span>
                <div>
                  <h4 className="font-semibold text-blue-800">Pro Tips</h4>
                  <ul className="text-sm text-blue-700 mt-1 space-y-1">
                    <li>• Mention your relevant experience</li>
                    <li>• Ask clarifying questions if needed</li>
                    <li>• Be polite and professional</li>
                    <li>• Respond quickly to stand out</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t bg-gray-50">
          <div className="flex space-x-4">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition-all"
            >
              Close
            </button>
            <button
              onClick={handleContact}
              disabled={!message.trim() || isSubmitting}
              className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all ${
                message.trim() && !isSubmitting
                  ? 'btn-gradient'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center space-x-2">
                  <span className="animate-spin">⚡</span>
                  <span>Sending...</span>
                </span>
              ) : (
                'Send Message & Contact'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}