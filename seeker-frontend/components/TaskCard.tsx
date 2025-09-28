'use client';

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

interface TaskCardProps {
  task: Task;
  onContact: (taskId: number) => void;
  categoryMap: any;
}

export default function TaskCard({ task, onContact, categoryMap }: TaskCardProps) {
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

  return (
    <div className="card p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-2xl">{categoryMap[task.category]?.icon}</span>
            <h4 className="text-lg font-semibold text-gray-900">{task.title}</h4>
            <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getUrgencyStyle(task.urgency)}`}>
              {task.urgency}
            </span>
          </div>
          <p className="text-gray-600 mb-3 line-clamp-2">{task.description}</p>
          
          <div className="flex items-center flex-wrap gap-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <span>📍</span>
              <span>{task.location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>👤</span>
              <span>Posted by {task.postedBy}</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>⏰</span>
              <span>{task.postedTime}</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>💬</span>
              <span>{task.responses} responses</span>
            </div>
          </div>
        </div>

        <div className="text-right ml-6">
          <div className="text-2xl font-bold text-green-600 mb-1">{task.budget}</div>
          {task.budgetType === 'hourly' && task.estimatedHours && (
            <div className="text-sm text-gray-500">{task.estimatedHours}</div>
          )}
          <div className="text-xs text-gray-400 capitalize">{task.budgetType} rate</div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t">
        <div className={`px-3 py-1 rounded-full text-xs font-medium ${categoryMap[task.category]?.color}`}>
          {categoryMap[task.category]?.name}
        </div>
        
        <div className="flex space-x-3">
          <button 
            onClick={() => onContact(task.id)}
            className="px-4 py-2 border border-purple-600 text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition-all"
          >
            View Details
          </button>
          <button
            onClick={() => onContact(task.id)}
            className="btn-gradient px-6 py-2 rounded-lg"
          >
            Contact Seeker
          </button>
        </div>
      </div>
    </div>
  );
}