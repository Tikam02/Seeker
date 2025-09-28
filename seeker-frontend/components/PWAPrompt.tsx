'use client';

import { useState, useEffect } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function PWAPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if it's iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIOSDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isIOSDevice);

    // Handle beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallPrompt(true);
    };

    // Check if app is already installed
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    const isInWebAppiOS = (window.navigator as any).standalone === true;
    
    if (!isStandalone && !isInWebAppiOS) {
      window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      
      // Show iOS prompt after a delay
      if (isIOSDevice) {
        const hasShownIOSPrompt = localStorage.getItem('ios-install-prompt-shown');
        if (!hasShownIOSPrompt) {
          setTimeout(() => {
            setShowInstallPrompt(true);
          }, 3000);
        }
      }
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      
      setDeferredPrompt(null);
    }
    setShowInstallPrompt(false);
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
    if (isIOS) {
      localStorage.setItem('ios-install-prompt-shown', 'true');
    }
  };

  if (!showInstallPrompt) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 shadow-lg z-50">
      <div className="flex items-center justify-between max-w-md mx-auto">
        <div className="flex items-center space-x-3">
          <div className="text-2xl">📱</div>
          <div>
            <div className="font-semibold text-sm">Install Seeker App</div>
            <div className="text-xs opacity-90">
              {isIOS 
                ? 'Tap Share → Add to Home Screen' 
                : 'Get quick access and offline features'
              }
            </div>
          </div>
        </div>
        
        <div className="flex space-x-2">
          {!isIOS && (
            <button
              onClick={handleInstallClick}
              className="px-3 py-1 bg-white bg-opacity-20 rounded-lg text-xs font-medium hover:bg-opacity-30 transition-all"
            >
              Install
            </button>
          )}
          <button
            onClick={handleDismiss}
            className="px-3 py-1 bg-white bg-opacity-10 rounded-lg text-xs font-medium hover:bg-opacity-20 transition-all"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}