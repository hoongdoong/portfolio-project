import React from 'react';

export const Header: React.FC = () => {
  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const targetPosition = targetElement.offsetTop;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1500; // Slower scroll duration in ms
      let startTime: number | null = null;

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      // Easing function
      const ease = (t: number, b: number, c: number, d: number) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };

      requestAnimationFrame(animation);
    }
  };

  return (
    <header className="relative z-50 flex flex-col items-center gap-4 px-4 pt-8 sm:px-8 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-center">
      <div className="hidden sm:block"></div>

      <div className="shining-border rounded-full p-px sm:justify-self-center">
        <nav className="flex items-center justify-center gap-4 px-4 py-2 text-base text-white bg-[#060b28] rounded-full sm:gap-8 sm:px-8 sm:py-4 sm:text-xl">
            <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:opacity-80 transition-opacity whitespace-nowrap">About Me</a>
            <a href="https://drive.google.com/file/d/1Rq20WLyxUANQ1vuTPNVa0Soew4AOKFx7/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity whitespace-nowrap">My PDF Resume</a>
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="hover:opacity-80 transition-opacity">Contact</a>
            <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="hover:opacity-80 transition-opacity">Portfolio</a>
        </nav>
      </div>

      <div className="sm:justify-self-end">
        <a href="https://www.linkedin.com/in/hoandoan/" target="_blank" rel="noopener noreferrer" className="block shining-border rounded-full p-px">
          <div className="flex items-center justify-center gap-2 px-4 py-2 text-xl text-white bg-[#060b28] rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </div>
        </a>
      </div>
    </header>
  );
};
