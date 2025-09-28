'use client';

import { useEffect, useState } from 'react';

export default function ServiceWorkerRegistration() {
  const [isOnline, setIsOnline] = useState(true);
  const [showUpdateAvailable, setShowUpdateAvailable] = useState(false);
  const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(null);

  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
          
          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  setWaitingWorker(newWorker);
                  setShowUpdateAvailable(true);
                }
              });
            }
          });
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }

    // Handle online/offline status
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Set initial online status
    setIsOnline(navigator.onLine);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleUpdate = () => {
    if (waitingWorker) {
      waitingWorker.postMessage({ type: 'SKIP_WAITING' });
      setShowUpdateAvailable(false);
      window.location.reload();
    }
  };

  return (
    <>
      {/* Offline Indicator */}
      {!isOnline && (
        <div className="fixed top-0 left-0 right-0 bg-yellow-500 text-white text-center py-2 text-sm font-medium z-50">
          <span>📱 You're offline - Some features may not be available</span>
        </div>
      )}

      {/* Update Available Notification */}
      {showUpdateAvailable && (
        <div className="fixed bottom-20 left-4 right-4 bg-green-600 text-white rounded-lg p-4 shadow-lg z-50 max-w-sm mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold text-sm">Update Available</div>
              <div className="text-xs opacity-90">A new version of Seeker is ready</div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={handleUpdate}
                className="px-3 py-1 bg-white bg-opacity-20 rounded text-xs font-medium hover:bg-opacity-30"
              >
                Update
              </button>
              <button
                onClick={() => setShowUpdateAvailable(false)}
                className="px-2 py-1 text-xs opacity-70 hover:opacity-100"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}