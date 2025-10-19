import React from 'react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="h-screen flex flex-col items-center justify-center">
      
      <h2 className="text-gradient text-[64px] font-extrabold tracking-[-1.92px] max-md:text-[40px]">
        Education
      </h2>
      
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/a71159e2e13cdf1031a2a9c9ab417419d139dcbd?placeholderIfAbsent=true"
        className="aspect-[1] object-contain w-[150px] max-w-full mt-7"
        alt="Foreign Trade University logo"
      />
      
      <div className="w-[381px] max-w-full text-white text-center tracking-[0.1px] mt-7">
        <div className="text-2xl font-medium leading-none">
          Yes I'm from an Economics School!
        </div>
        <div className="text-base font-light leading-none mt-2.5">
          Bachelor in International Economics
        </div>
      </div>
    </section>
  );
};
