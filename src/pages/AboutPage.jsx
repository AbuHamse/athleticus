// src/pages/AboutPage.jsx
import React from 'react';
import IntroductionSection from '../components/IntroductionSection';
import ApproachSection from '../components/ApproachSection';
import JoinCommunitySection from '../components/JoinCommunitySection';

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <IntroductionSection />
      <ApproachSection />
      <JoinCommunitySection />
    </div>
  );
};

export default AboutPage;
