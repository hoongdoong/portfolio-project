import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="self-stretch flex flex-col items-stretch text-center tracking-[1px] justify-center mt-[100px] max-md:max-w-full max-md:mt-10">
      <div className="text-white text-[80px] font-extrabold max-md:max-w-full max-md:text-[40px]">
        Hi! I'm Hoan Doan
      </div>
      <div className="text-white text-[45px] font-extralight max-md:max-w-full max-md:text-[40px]">
        A Business Analyst
      </div>
      
      <button className="justify-center items-center shadow-[0_4px_8px_3px_rgba(0,0,0,0.15),0_1px_3px_0_rgba(0,0,0,0.30)] bg-[#625B71] px-8 py-4 mt-8 text-base text-white font-medium tracking-[0.15px] rounded-2xl mx-auto hover:shadow-lg transition-shadow">
        View my Resume
      </button>
      
      <div className="border w-px shrink-0 h-[184px] mt-[41px] border-[rgba(115,167,227,1)] border-solid max-md:mt-10 mx-auto" />
      
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/5ecc792c594b74d1f1c42f0fc09d0cbde9acd1dc?placeholderIfAbsent=true"
        className="aspect-[1] object-contain w-10 mt-[23px] rounded-[20px] mx-auto"
        alt="Scroll indicator"
      />
    </section>
  );
};
