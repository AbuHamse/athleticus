// src/components/JoinCommunitySection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import CommunityFeature from './CommunityFeature';

const JoinCommunitySection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Join the ATHLETICUS Community
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            ATHLETICUS is more than just a fitness platform - it's a community of like-minded individuals who share a
            passion for calisthenics and a commitment to personal growth.
          </p>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Whether you're a seasoned calisthenics enthusiast or just starting your fitness journey, we welcome you to
            join our community. Participate in our online forums, attend local meetups and workshops, or connect with
            fellow members to share your progress and inspire one another.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              to="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Join the Community
            </Link>
            <Link
              to="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Try a Class
            </Link>
          </div>
        </div>
        <div className="grid gap-4">
          <CommunityFeature
            title="Local Meetups"
            description="Connect with fellow ATHLETICUS members in your area and participate in group training sessions,
            workshops, and social events."
          />
          <CommunityFeature
            title="Online Community"
            description="Join our online forums, share your progress, and get support from a global community of calisthenics
            enthusiasts."
          />
          <CommunityFeature
            title="Workshops & Events"
            description="Attend our workshops and events to learn from expert coaches, try new techniques, and connect with
            like-minded individuals."
          />
        </div>
      </div>
    </section>
  );
};

export default JoinCommunitySection;
