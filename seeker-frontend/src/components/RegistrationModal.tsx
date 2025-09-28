'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  userType: 'seeker' | 'helper' | null;
}

export default function RegistrationModal({ isOpen, onClose, userType }: RegistrationModalProps) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [otpSent, setOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handlePhoneSubmit = async () => {
    if (phoneNumber.length !== 10) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setOtpSent(true);
      setIsLoading(false);
    }, 1500);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleOtpSubmit = () => {
    const otpValue = otp.join('');
    if (otpValue.length !== 6) {
      alert('Please enter the complete 6-digit OTP');
      return;
    }
    
    setIsLoading(true);
    setTimeout(() => {
      onClose();
      setIsLoading(false);
      if (userType === 'helper') {
        router.push('/helper-flow');
      } else {
        router.push('/seeker-flow');
      }
    }, 1500);
  };

  const resetModal = () => {
    setPhoneNumber('');
    setOtp(['', '', '', '', '', '']);
    setOtpSent(false);
    setIsLoading(false);
  };

  const handleClose = () => {
    onClose();
    resetModal();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center"
      style={{ animation: 'fadeIn 0.3s ease' }}
      onClick={handleClose}
    >
      <div 
        className="bg-white rounded-3xl p-12 max-w-md w-full mx-4 relative"
        style={{ animation: 'slideUp 0.4s ease' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={handleClose}
          className="absolute top-6 right-6 text-2xl text-gray-400 hover:text-gray-600 transition-colors"
        >
          ×
        </button>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">
            {userType === 'seeker' ? 'Find Trusted Helpers' : 'Start Earning Today'}
          </h3>
          <div 
            className={`inline-block px-6 py-2 rounded-full text-white font-semibold ${
              userType === 'seeker' ? 'bg-indigo-500' : 'bg-emerald-500'
            }`}
          >
            {userType === 'seeker' ? 'Seeker' : 'Helper'}
          </div>
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-semibold text-gray-700">
            Enter your mobile number
          </label>
          <div className="flex gap-2">
            <select className="px-3 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 w-20">
              <option>+91</option>
              <option>+1</option>
              <option>+44</option>
            </select>
            <input 
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="98765 43210"
              maxLength={10}
              className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl transition-all focus:outline-none focus:border-indigo-500 focus:shadow-lg focus:shadow-indigo-500/10"
            />
          </div>
        </div>

        {otpSent && (
          <div className="mb-6" style={{ animation: 'slideIn 0.3s ease' }}>
            <label className="block mb-4 font-semibold text-gray-700">
              Enter OTP sent to your mobile
            </label>
            <div className="flex gap-2 justify-center">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(index, e)}
                  className="w-12 h-12 text-center text-xl border-2 border-gray-200 rounded-xl transition-all focus:outline-none focus:border-indigo-500 focus:shadow-lg focus:shadow-indigo-500/10"
                  maxLength={1}
                />
              ))}
            </div>
            <div className="text-center mt-4">
              <button className="text-indigo-600 underline hover:text-indigo-800 transition-colors">
                Resend OTP
              </button>
            </div>
          </div>
        )}

        <button 
          onClick={otpSent ? handleOtpSubmit : handlePhoneSubmit}
          disabled={isLoading}
          className="w-full py-4 text-white font-semibold rounded-xl transition-all hover:-translate-y-1 hover:shadow-lg disabled:opacity-50"
          style={{ background: 'var(--gradient)' }}
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <div 
                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                style={{ animation: 'spin 1s linear infinite' }}
              />
              Loading...
            </div>
          ) : (
            otpSent ? 'Verify & Continue' : 'Send OTP'
          )}
        </button>
      </div>
    </div>
  );
}