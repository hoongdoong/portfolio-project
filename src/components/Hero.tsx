import React from 'react';

export const Hero: React.FC = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleScrollToSkills = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative self-stretch flex flex-col items-center text-center tracking-[1px] justify-center h-screen max-md:max-w-full">
      <div className="text-white text-[80px] font-extrabold max-md:max-w-full max-md:text-[40px] text-gradient mt-12">
        Hi! I'm Hoan Doan
      </div>
      <div className="text-white text-[45px] font-extralight max-md:max-w-full max-md:text-[40px]">
        A Business Analyst
      </div>
      
      <div className="relative group mt-8 mx-auto transition-transform duration-300 ease-in-out hover:scale-105">
        <div className="absolute -inset-px rounded-2xl shining-border opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <button 
          onClick={handleScrollToSkills}
          className="relative hero-button justify-center items-center shadow-[0_4px_8px_3px_rgba(0,0,0,0.15),0_1px_3px_0_rgba(0,0,0,0.30)] bg-[#3A4B89] px-8 py-4 text-base text-white font-medium tracking-[0.15px] rounded-2xl transition-colors duration-300 group-hover:bg-[#4A5B99]"
        >
          View my Resume
        </button>
      </div>
      
      <div className="running-line shrink-0 h-[150px] mt-[41px] max-md:mt-10 mx-auto" />
      
      <img
        onClick={handleScrollToSkills}
        src="https://api.builder.io/api/v1/image/assets/TEMP/5ecc792c594b74d1f1c42f0fc09d0cbde9acd1dc?placeholderIfAbsent=true"
        className="aspect-[1] object-contain w-10 mt-[23px] rounded-[20px] mx-auto cursor-pointer animate-bounce"
        alt="Scroll indicator"
      />
    </section>
  );
};
