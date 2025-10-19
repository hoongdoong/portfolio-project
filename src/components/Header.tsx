import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="relative flex w-full flex-col overflow-hidden items-center pt-14 max-md:max-w-full">
      <nav className="flex items-center gap-[40px_188px] text-2xl text-white font-normal tracking-[0.4px] leading-none flex-wrap px-[60px] py-5 rounded-[30px] max-md:max-w-full max-md:px-5">
        <div className="self-stretch my-auto">
          Hoan Doan
        </div>
        <div className="self-stretch flex min-w-60 items-center gap-[35px] flex-wrap my-auto max-md:max-w-full">
          <a href="#about" className="self-stretch my-auto hover:opacity-80 transition-opacity">
            About Me
          </a>
          <a href="#resume" className="self-stretch my-auto hover:opacity-80 transition-opacity">
            Resume
          </a>
          <a href="#contact" className="self-stretch my-auto hover:opacity-80 transition-opacity">
            Contact
          </a>
          <a href="#portfolio" className="self-stretch my-auto hover:opacity-80 transition-opacity">
            Portfolio Projects
          </a>
        </div>
      </nav>
    </header>
  );
};
