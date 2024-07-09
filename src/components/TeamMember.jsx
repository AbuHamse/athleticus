// src/components/TeamMember.jsx
import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';

const TeamMember = ({ name, role, description, avatarSrc, avatarFallback }) => {
  return (
    <div className="flex items-center gap-4">
      <Avatar.Root className="w-14 h-10 rounded-lg overflow-hidden">
        <Avatar.Image className="w-full h-full object-cover" src={avatarSrc} alt={`${name}'s Avatar`} />
        <Avatar.Fallback className="flex items-center justify-center w-full h-full bg-gray-400 text-white font-bold">
          {avatarFallback}
        </Avatar.Fallback>
      </Avatar.Root>
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-muted-foreground">{role}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default TeamMember;
