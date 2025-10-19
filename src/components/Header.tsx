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
    <header className="z-50 flex justify-center pt-8">
      <div className="shining-border rounded-full p-px">
        <nav className="flex items-center justify-center gap-8 px-8 py-4 text-xl text-white bg-[#060b28] rounded-full">
            <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:opacity-80 transition-opacity">About Me</a>
            <a href="https://drive.google.com/file/d/1Rq20WLyxUANQ1vuTPNVa0Soew4AOKFx7/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">My PDF Resume</a>
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="hover:opacity-80 transition-opacity">Contact</a>
            <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="hover:opacity-80 transition-opacity">Portfolio</a>
        </nav>
      </div>
    </header>
  );
};
