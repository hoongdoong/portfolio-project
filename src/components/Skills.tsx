import React from 'react';
import { SkillChip } from './ui/skill-chip';

export const Skills: React.FC = () => {
  const skills = [
    'Healthcare Domain',
    'HIS',
    'Communication',
    'Proposal Making',
    'Data Analysis',
    'Figma',
    'Requirements Analyzing',
    'Agile',
    'Scrum',
    'UI/UX',
    'Design Thinking',
    'Problem Solving',
    'Analytical Thinking',
    'Project Coordinating',
    'Researching',
    'Structured Thinking',
    'Solution Consulting',
    'Software Product Management',
    'Process Modelling'
  ];

  return (
    <section id="skills" className="self-stretch flex w-full flex-col items-center text-sm text-white font-medium text-center tracking-[0.1px] leading-none px-5 max-md:max-w-full justify-center py-20 lg:h-screen">
      <h2 className="text-gradient text-[64px] font-extrabold tracking-[-1.92px] max-md:text-[40px] mb-8">
        My Skills
      </h2>
      
      <div className="self-stretch flex w-full flex-col items-center gap-[13px] justify-center max-md:max-w-full">
        <div className="flex items-center gap-[13px] justify-center flex-wrap">
            {skills.slice(0, 7).map((skill, index) => (
            <SkillChip key={index} label={skill} />
            ))}
        </div>
        <div className="flex items-center gap-[13px] justify-center flex-wrap">
            {skills.slice(7, 13).map((skill, index) => (
            <SkillChip key={index} label={skill} />
            ))}
        </div>
        <div className="flex items-center gap-[13px] justify-center flex-wrap">
            {skills.slice(13, 19).map((skill, index) => (
            <SkillChip key={index} label={skill} />
            ))}
        </div>
      </div>
    </section>
  );
};
