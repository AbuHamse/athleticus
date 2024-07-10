// src/pages/AboutPage.jsx
import React from 'react';
import IntroductionSection from '../components/IntroductionSection';
import ApproachSection from '../components/ApproachSection';
import JoinCommunitySection from '../components/JoinCommunitySection';
import AboutCardSection from '../components/AboutCardSection';
import NewHero from '../components/NewHero';

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <IntroductionSection />
      <ApproachSection />
      <AboutCardSection/>
      <NewHero/>

      <JoinCommunitySection />
    </div>
  );
};

export default AboutPage;
