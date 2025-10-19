import React from 'react';

export const Resume: React.FC = () => {
  return (
    <section id="resume" className="flex flex-col items-center">
      <div className="flex w-[1165px] max-w-full flex-col items-center mt-[40px] px-5">
        <h2 className="text-gradient text-[64px] font-extrabold text-center tracking-[-1.92px] max-md:text-[40px]">
          Resume
        </h2>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-lg text-white font-light tracking-[-0.36px] mt-2.5 max-md:max-w-full hover:opacity-80 transition-opacity">
          Download my resume
        </a>
      </div>
    </section>
  );
};
