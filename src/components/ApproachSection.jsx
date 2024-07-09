// src/components/ApproachSection.jsx
import React from 'react';
import ApproachFeature from './ApproachFeautre';

const ApproachSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The ATHLETICUS Approach</h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            At ATHLETICUS, we believe that calisthenics is the most efficient and effective way to build strength,
            flexibility, and overall fitness. Our approach focuses on progressive bodyweight-based exercises that
            challenge your body and mind.
          </p>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Unlike traditional gym workouts, calisthenics allows you to develop functional strength and control over
            your own body. This translates to improved performance in everyday activities and a reduced risk of
            injury.
          </p>
        </div>
        <div className="grid gap-4">
          <ApproachFeature
            title="Functional Strength"
            description="Calisthenics exercises target multiple muscle groups simultaneously, building strength that translates
            to real-world activities."
          />
          <ApproachFeature
            title="Improved Mobility"
            description="Calisthenics emphasizes proper form and technique, helping you develop greater flexibility and range of
            motion."
          />
          <ApproachFeature
            title="Bodyweight Mastery"
            description="By learning to control your own bodyweight, you'll gain a deeper understanding of your physical
            capabilities and limitations."
          />
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
