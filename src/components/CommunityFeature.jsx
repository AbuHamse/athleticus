// src/components/CommunityFeature.jsx
import React from 'react';

const CommunityFeature = ({ title, description }) => {
  return (
    <div className="rounded-lg bg-background p-6 shadow-sm">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default CommunityFeature;
