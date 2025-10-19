import React from 'react';

interface CertificateCardProps {
  title: string;
  date: string;
  imageSrc: string;
  imageAlt?: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ title, date, imageSrc, imageAlt = "Certificate" }) => {
  return (
    <div className="flex min-h-20 w-full items-center text-[#FFFDFD] justify-center rounded-xl">
      <div className="self-stretch flex min-w-60 w-full items-stretch overflow-hidden flex-1 shrink basis-[0%] my-auto rounded-xl">
        <div className="flex min-w-60 items-center gap-4 h-full flex-1 shrink basis-[0%] p-4">
          <div className="self-stretch min-w-60 w-full flex-1 shrink basis-[0%] my-auto">
            <div className="text-base font-medium tracking-[0.15px]">
              {title}
            </div>
            <div className="text-sm font-normal leading-none tracking-[0.25px] mt-1">
              {date}
            </div>
          </div>
        </div>
        <img
          src={imageSrc}
          className="aspect-[1] object-contain w-20 shrink-0"
          alt={imageAlt}
        />
      </div>
    </div>
  );
};

export const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="flex flex-col items-center">
      <div className="border w-px shrink-0 h-[101px] mt-7 border-[rgba(115,167,227,1)] border-solid" />
      
      <h2 className="text-gradient text-[64px] font-extrabold tracking-[-1.92px] mt-8 max-md:text-[40px]">
        Certificates
      </h2>
      
      <CertificateCard
        title="Certified Professional Data Analyst"
        date="5 May 2023"
        imageSrc="https://api.builder.io/api/v1/image/assets/TEMP/c0a2d4b731518ccfea8415629b3e88a2cc68be85?placeholderIfAbsent=true"
      />
      
      <div className="flex w-[959px] max-w-full items-center gap-[40px_100px] justify-between flex-wrap mt-[39px]">
        <div className="self-stretch flex min-w-60 min-h-[211px] flex-col items-stretch justify-center w-[377px] my-auto">
          <CertificateCard
            title="Business Analysis Fundamentals"
            date="7 May 2023"
            imageSrc="https://api.builder.io/api/v1/image/assets/TEMP/1e58337a8419bc87a6fb26e11071fef45ea3dc00?placeholderIfAbsent=true"
          />
          
          <div className="flex min-h-20 w-full mt-[39px] rounded-xl">
            <div className="flex min-w-60 w-full items-stretch overflow-hidden flex-1 shrink basis-[0%] rounded-xl">
              <div className="flex min-w-60 items-center gap-4 text-[#FFFDFD] h-full flex-1 shrink basis-[0%] p-4">
                <div className="self-stretch min-w-60 w-full flex-1 shrink basis-[0%] my-auto">
                  <div className="text-base font-medium tracking-[0.15px]">
                    Google UX Design
                  </div>
                  <div className="text-sm font-normal leading-none tracking-[0.25px] mt-1">
                    13 July 2024
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-stretch overflow-hidden relative aspect-[1] w-20">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/c2dc44170fe86ffa11feb997fc36c0868d227f3f?placeholderIfAbsent=true"
                  className="absolute h-full w-full object-cover inset-0"
                  alt=""
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/a78e5357a603bc567ec52df9036da4d4d6999d31?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-full"
                  alt="Google UX Design Certificate"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="self-stretch flex min-w-60 flex-col items-stretch justify-center w-[376px] my-auto">
          <div className="flex min-h-[104px] w-full rounded-xl">
            <div className="flex min-w-60 w-full items-stretch overflow-hidden flex-1 shrink basis-[0%] rounded-xl">
              <div className="flex min-w-60 items-center gap-4 text-[#FFFDFD] h-full flex-1 shrink basis-[0%] p-4">
                <div className="self-stretch min-w-60 w-full flex-1 shrink basis-[0%] my-auto">
                  <div className="text-base font-medium leading-6 tracking-[0.15px]">
                    Requirements Engineering: Secure Software Specifications
                  </div>
                  <div className="text-sm font-normal leading-none tracking-[0.25px] mt-1">
                    4 June 2024
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-stretch overflow-hidden relative aspect-[1] w-20 my-auto">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/c2dc44170fe86ffa11feb997fc36c0868d227f3f?placeholderIfAbsent=true"
                  className="absolute h-full w-full object-cover inset-0"
                  alt=""
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/5c2919548d791925e3c316c22d953c37f48c3b05?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-full rounded-[0px_12px_12px_0px]"
                  alt="Requirements Engineering Certificate"
                />
              </div>
            </div>
          </div>
          
          <div className="flex min-h-20 w-full mt-[27px] rounded-xl">
            <div className="flex min-w-60 w-full items-stretch overflow-hidden flex-1 shrink basis-[0%] rounded-xl">
              <div className="flex min-w-60 items-center gap-4 text-[#FFFDFD] h-full flex-1 shrink basis-[0%] p-4">
                <div className="self-stretch min-w-60 w-full flex-1 shrink basis-[0%] my-auto">
                  <div className="text-base font-medium tracking-[0.15px]">
                    Software Product Management
                  </div>
                  <div className="text-sm font-normal leading-none tracking-[0.25px] mt-1">
                    23 August 2024
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-stretch overflow-hidden relative aspect-[1] w-20">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/c2dc44170fe86ffa11feb997fc36c0868d227f3f?placeholderIfAbsent=true"
                  className="absolute h-full w-full object-cover inset-0"
                  alt=""
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/47907b5f236fc7e89efe89a751b3c645570b1f09?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-full"
                  alt="Software Product Management Certificate"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
