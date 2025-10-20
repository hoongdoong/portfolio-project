import React from 'react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="self-stretch flex flex-col items-center justify-center py-20 px-20 max-md:max-w-full max-md:px-5 lg:h-screen">
      
      <h2 className="text-gradient text-[64px] font-extrabold tracking-[-1.92px] max-md:text-[40px] mb-10">
        Experience
      </h2>
      
      <div className="flex gap-10 max-md:flex-col max-w-5xl">
        {/* Experience 1 */}
        <div className="flex flex-col items-center flex-1">
          <div className="text-white text-2xl italic font-normal leading-loose tracking-[-0.25px] text-center">
            Implementation Specialist{" "}
            <span className="italic">@Simplify HealthTech</span>
          </div>
          
          <div className="flex items-center justify-center gap-5 flex-wrap mt-4">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/7ec9bc7bdb8c9d25fe5889454f4a6a4e8ab8d27a?placeholderIfAbsent=true"
              className="aspect-[5.78] object-contain w-[200px]"
              alt="Simplify HealthTech logo"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/9acd9010683aacc1b857983fe94cead72f0d4a9b?placeholderIfAbsent=true"
              className="aspect-[1.02] object-contain w-[100px]"
              alt="Phuong Chau International Hospital Group logo"
            />
          </div>
          
          <p className="text-white text-lg font-normal leading-relaxed tracking-[-0.25px] mt-4 text-justify">
            Implement IQVIA Hospital Information System for Phuong Chau
            International Hospital Group to comply with Vietnam Ministry of
            Health regulation and JCI Standard. Conduct training to end users
            from medical (doctor, nurses, medical secretary...) to customer service
            and planning department user.
          </p>
        </div>

        {/* Experience 2 */}
        <div className="flex flex-col items-center flex-1">
          <div className="text-white text-2xl italic font-normal leading-loose tracking-[-0.25px] text-center">
            Business Analyst{" "}
            <span className="italic">@KMS Technology</span>
          </div>
          
          <div className="flex justify-center mt-4">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/8f895aadfdde3bcf85e574c96edf4685be403a49?placeholderIfAbsent=true"
              className="aspect-[2.08] object-contain w-[180px]"
              alt="KMS Technology logo"
            />
          </div>
          
          <p className="text-white text-lg font-normal leading-relaxed tracking-[-0.25px] mt-4 text-justify">
            Experience in communicating between clients and technical team,
            planning backlog, capturing, analyzing clients' requirements,
            initiating ideas for technological products, conducting market
            research, and preparing proposals to acquire new clients for the
            company.
          </p>
        </div>
      </div>
    </section>
  );
};
