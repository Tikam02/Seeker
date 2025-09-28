'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import RegistrationModal from '@/components/RegistrationModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUserType, setSelectedUserType] = useState<'seeker' | 'helper' | null>(null);

  const handleOpenRegistration = (userType: 'seeker' | 'helper') => {
    setSelectedUserType(userType);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUserType(null);
  };

  const handleLoginClick = () => {
    alert('Login functionality will be implemented in the next phase');
  };

  return (
    <div className="min-h-screen">
      <Navigation onLoginClick={handleLoginClick} />
      <HeroSection onOpenRegistration={handleOpenRegistration} />
      <FeaturesSection />
      <TestimonialsSection />
      <Footer />
      <RegistrationModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        userType={selectedUserType}
      />
    </div>
  );
}
