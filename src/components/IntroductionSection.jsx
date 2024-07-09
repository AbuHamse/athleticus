// src/components/IntroductionSection.jsx
import React from 'react';
import TeamMember from './TeamMember';
import userProfilePic from '../images/img2.jpg';

const IntroductionSection = () => {
  return (
    <section className="bg-gray-900 w-full py-12 md:py-24 lg:py-32 text-white">
      <div className="container mx-auto px-4 md:px-6 lg:grid lg:grid-cols-2 lg:gap-12">
        <div className="space-y-6 p-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">WHAT is ATHLETICUS</h1>
          <p className="max-w-[600px] text-gray-400 md:text-xl lg:text-base xl:text-xl">
            ATHLETICUS is a community-driven platform dedicated to the art of calisthenics. Our mission is to empower
            individuals to achieve their fitness goals through bodyweight-based training.
          </p>
        </div>
        <div className="grid gap-8">
          <TeamMember
            name="Abdullah Khadar"
            role="Founder, Head Coach"
            description="Abdullah has been practicing calisthenics for over a decade and has a passion for helping others achieve their fitness goals."
            avatarSrc={userProfilePic}
            avatarFallback="AK"
          />
          <TeamMember
            name="Jane Appleseed"
            role="Co-Founder, Community Manager"
            description="Jane is a certified calisthenics coach and passionate about building a supportive community for ATHLETICUS members."
            avatarSrc="/placeholder-user.jpg"
            avatarFallback="JA"
          />
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
