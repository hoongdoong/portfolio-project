import React from 'react';

interface SkillChipProps {
  label: string;
}

export const SkillChip: React.FC<SkillChipProps> = ({ label }) => {
  return (
    <div className="justify-center items-center border flex overflow-hidden my-auto rounded-lg border-solid border-[#CAC4D0]">
      <div className="flex min-h-8 items-center gap-2 justify-center my-auto px-4 py-1.5">
        <div className="my-auto">{label}</div>
      </div>
    </div>
  );
};
