import React from 'react';
import { SkillChip } from './ui/skill-chip';

export const Skills: React.FC = () => {
  const skillsRow1 = [
    'Healthcare Domain',
    'HIS',
    'Communication',
    'Proposal Making',
    'Data Analysis',
    'Figma'
  ];

  const skillsRow2 = [
    'Requirements Analyzing',
    'Agile',
    'Scrum',
    'UI/UX',
    'Design Thinking',
    'Problem Solving',
    'Analytical Thinking',
    'Project Coordinating'
  ];

  const skillsRow3 = [
    'Researching',
    'Structured Thinking',
    'Solution Consulting',
    'Software Product Management',
    'Process Modelling'
  ];

  return (
    <section id="skills" className="self-stretch flex w-full flex-col items-center text-sm text-white font-medium text-center tracking-[0.1px] leading-none mt-[46px] px-5 max-md:max-w-full max-md:mt-10">
      <h2 className="text-white text-center text-4xl font-medium leading-none tracking-[0.1px] mt-[38px] mb-[46px]">
        Quick Look at Skills
      </h2>
      
      <div className="self-stretch flex w-full items-center gap-[13px] justify-center flex-wrap max-md:max-w-full">
        {skillsRow1.map((skill, index) => (
          <SkillChip key={index} label={skill} />
        ))}
      </div>
      
      <div className="flex items-center gap-[13px] justify-center flex-wrap mt-2.5 max-md:max-w-full">
        {skillsRow2.map((skill, index) => (
          <SkillChip key={index} label={skill} />
        ))}
      </div>
      
      <div className="flex items-center gap-[13px] justify-center flex-wrap mt-2.5 max-md:max-w-full">
        {skillsRow3.map((skill, index) => (
          <SkillChip key={index} label={skill} />
        ))}
      </div>
    </section>
  );
};
