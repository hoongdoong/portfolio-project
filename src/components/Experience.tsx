import React from 'react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="self-stretch flex flex-col items-center mt-[63px] pb-[77px] px-20 max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="border w-px shrink-0 h-[101px] mb-[63px] border-[rgba(115,167,227,1)] border-solid" />
      
      <div className="z-10 flex mt-[-17px] w-[959px] max-w-full flex-col items-center">
        <h2 className="text-gradient text-[64px] font-extrabold tracking-[-1.92px] max-md:text-[40px]">
          Experience
        </h2>
        
        <div className="text-white text-center text-[32px] italic font-normal leading-loose tracking-[-0.25px] mt-[43px] max-md:max-w-full max-md:mt-10">
          Implementation Specialist{" "}
          <span className="italic">@Simplify HealthTech</span>
        </div>
        
        <div className="flex items-center gap-[40px_191px] flex-wrap mt-[34px] max-md:max-w-full">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/7ec9bc7bdb8c9d25fe5889454f4a6a4e8ab8d27a?placeholderIfAbsent=true"
            className="aspect-[5.78] object-contain w-[358px] self-stretch min-w-60 my-auto"
            alt="Simplify HealthTech logo"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/9acd9010683aacc1b857983fe94cead72f0d4a9b?placeholderIfAbsent=true"
            className="aspect-[1.02] object-contain w-[195px] self-stretch shrink-0 my-auto"
            alt="Hospital logo"
          />
        </div>
        
        <p className="text-white text-2xl font-normal leading-[45px] tracking-[-0.25px] text-center self-stretch max-md:max-w-full">
          Implement IQVIA Hospital Information System for Phuong Chau
          International Hospital Group to comply with Vietnam Ministry of
          Health regulation and JCI Standard.
        </p>
      </div>
      
      <div className="text-white text-center text-[32px] italic font-normal leading-loose tracking-[-0.25px] mt-[248px] max-md:max-w-full max-md:mt-10">
        Business Analyst{" "}
        <span className="italic">@KMS Technology</span>
      </div>
      
      <div className="flex w-[225px] max-w-full items-center gap-[40px_191px] mt-[17px]">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/8f895aadfdde3bcf85e574c96edf4685be403a49?placeholderIfAbsent=true"
          className="aspect-[2.08] object-contain w-[225px] self-stretch my-auto"
          alt="KMS Technology logo"
        />
      </div>
      
      <p className="text-white text-2xl font-normal leading-[45px] tracking-[-0.25px] text-center w-[982px] mt-[18px] max-md:max-w-full">
        Experience in communicating between clients and technical team,
        planning backlog, capturing, analyzing clients' requirements,
        initiating ideas for technological products, conducting market
        research, and preparing proposals to acquire new clients for the
        company.
      </p>
    </section>
  );
};
