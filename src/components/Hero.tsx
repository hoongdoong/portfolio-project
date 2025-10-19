import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="self-stretch flex flex-col items-stretch text-center tracking-[1px] justify-center mt-[100px] max-md:max-w-full max-md:mt-10">
      <div className="text-[80px] font-extrabold leading-[0.2] max-md:max-w-full max-md:text-[40px]">
        Hi! I'm Hoan Doan
      </div>
      <div className="text-white text-[45px] font-extralight leading-[0] max-md:max-w-full max-md:text-[40px]">
        A Business Analyst
      </div>
      
      <button className="justify-center items-center shadow-[0_4px_8px_3px_rgba(0,0,0,0.15),0_1px_3px_0_rgba(0,0,0,0.30)] bg-[#625B71] flex h-[63px] flex-col overflow-hidden text-base text-white font-medium tracking-[0.15px] mt-[17px] rounded-2xl mx-auto hover:shadow-lg transition-shadow">
        <div className="justify-center items-center bg-[#73A7E3] relative flex flex-col p-4 rounded-2xl hover:bg-[#6B9FDB] transition-colors">
          <div className="self-center z-0">
            View my Resume
          </div>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/64355739fa7f7c75300ff1824885bef2f01f2086?placeholderIfAbsent=true"
            className="aspect-[1.45] object-contain w-20 fill-[rgba(255,255,255,0.10)] absolute z-0 h-14 right-[26px] top-0"
            alt=""
          />
        </div>
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
