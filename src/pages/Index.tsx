import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import { Certificates } from '@/components/Certificates';
import { Contact } from '@/components/Contact';

const Index = () => {
  return (
    <div className="flex flex-col relative min-h-[4293px] overflow-hidden pt-[7px]">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/00dd96bc83d108d92966ef67d1a92d08ff5f9a40?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt="Background gradient"
      />
      
      <main className="relative flex w-full flex-col overflow-hidden items-center max-md:max-w-full">
        <Header />
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Certificates />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
