import { Header } from '../components/Header';
import React from 'react';
import { Hero } from '../components/Hero';
import { Skills } from '../components/Skills';
import { Experience } from '../components/Experience';
import { Education } from '../components/Education';
import { Certificates } from '../components/Certificates';
import { Contact } from '../components/Contact';

const Index: React.FC = () => {
  return (
    <main
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1533113354171-490d836238e3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <div
        style={{
          background: 'linear-gradient(to left bottom, rgba(2, 2, 55, 0.7), rgba(0, 0, 0, 0.9))',
        }}
      >
        <Header />
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Certificates />
        <Contact />
      </div>
    </main>
  );
};

export default Index;
