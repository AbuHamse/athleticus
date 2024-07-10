// src/components/TeamMember.jsx
import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';

const TeamMember = ({ name, role, description, avatarSrc, avatarFallback }) => {
  return (
    <div className="flex items-center gap-4">
      <Avatar.Root className="w-25 h-25 rounded-lg overflow-hidden">
        <Avatar.Image className="w-full h-full object-cover" src={avatarSrc} alt={`${name}'s Avatar`} />
        <Avatar.Fallback className="flex items-center justify-center w-full h-full bg-gray-400 text-white font-bold">
          {avatarFallback}
        </Avatar.Fallback>
      </Avatar.Root>
      <div>
        <h3 className="text-4xl font-semibold">{name}</h3>
        <p className="text-muted-foreground text-xl font-bold my-3">{role}</p>
        <p className="text-med text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default TeamMember;
