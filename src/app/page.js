import GetCard from '@/component/GetCard';
import HeroSection from '@/component/HeroSection';
import LearningTips from '@/component/LearningTips';
import TopInstructors from '@/component/TopInstructors';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <GetCard></GetCard>
      <LearningTips></LearningTips>
      <TopInstructors></TopInstructors>
    </div>
  );
};

export default HomePage;