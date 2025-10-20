import React from 'react';

interface CertificateCardProps {
  title: string;
  date: string;
  imageSrc: string;
  imageAlt?: string;
  link: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ title, date, imageSrc, imageAlt = "Certificate", link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center bg-gray-800 bg-opacity-50 rounded-lg p-3 w-full max-w-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-700">
      <img
        src={imageSrc}
        className="aspect-[1] object-contain w-16 h-16 mr-4"
        alt={imageAlt}
      />
      <div className="text-white">
        <div className="text-base font-medium tracking-tight">
          {title}
        </div>
        <div className="text-sm font-normal text-gray-400 mt-1">
          {date}
        </div>
      </div>
    </a>
  );
};

export const Certificates: React.FC = () => {
  const certificates = [
    {
      title: "Certified Professional Data Analyst",
      date: "5 May 2023",
      imageSrc: "https://api.builder.io/api/v1/image/assets/TEMP/c0a2d4b731518ccfea8415629b3e88a2cc68be85?placeholderIfAbsent=true",
      imageAlt: "Certified Professional Data Analyst logo",
      link: "https://www.datacamp.com/certificate/DA0022780199952"
    },
    {
      title: "Business Analysis Fundamentals",
      date: "7 May 2023",
      imageSrc: "https://api.builder.io/api/v1/image/assets/TEMP/1e58337a8419bc87a6fb26e11071fef45ea3dc00?placeholderIfAbsent=true",
      imageAlt: "Business Analysis Fundamentals logo",
      link: "https://www.udemy.com/certificate/UC-34d01dd6-3c9c-4222-a0e0-47c793580418/"
    },
    {
      title: "Google UX Design",
      date: "13 July 2024",
      imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
      imageAlt: "Google logo",
      link: "https://coursera.org/share/1e56f6789c2d1cd588f26f8f0c422e83"
    },
    {
      title: "Requirements Engineering: Secure Software Specifications",
      date: "4 June 2024",
      imageSrc: "https://www.colorado.edu/imc/sites/default/files/styles/small_500px_25_display_size_/public/2025-07/athletics%20interlocking%20CU.png?itok=42K-3dJ8",
      imageAlt: "University of Colorado logo",
      link: "https://coursera.org/share/23588d78991831db123ca09579ca9ab2"
    },
    {
      title: "Software Product Management",
      date: "23 August 2024",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlAvZc2h4avxVcK8SC5gFhKDkqe1SdOqBXiw&s",
      imageAlt: "Advancing Women in Tech logo",
      link: "https://coursera.org/share/9b60a14e2a93ad2707566d679b7bef20"
    }
  ];

  return (
    <section id="certificates" className="h-screen flex flex-col items-center justify-center px-5">
      <h2 className="text-gradient text-[64px] font-extrabold tracking-[-1.92px] max-md:text-[40px] mb-8">
        Certificates
      </h2>
      
      <div className="space-y-4">
        {certificates.map((cert, index) => (
          <CertificateCard
            key={index}
            title={cert.title}
            date={cert.date}
            imageSrc={cert.imageSrc}
            imageAlt={cert.imageAlt}
            link={cert.link}
          />
        ))}
      </div>
    </section>
  );
};
