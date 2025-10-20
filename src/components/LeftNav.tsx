import React from 'react';

const sections = [
  { id: 'hero', title: 'Welcome' },
  { id: 'skills', title: 'Skills' },
  { id: 'experience', title: 'Experience' },
  { id: 'education', title: 'Education' },
  { id: 'certificates', title: 'Certificates' },
  { id: 'contact', title: 'Contact' },
];

export const LeftNav: React.FC = () => {
  const [activeSection, setActiveSection] = React.useState('hero');

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    for (const section of sections) {
      const element = document.getElementById(section.id);
      if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
        setActiveSection(section.id);
        break;
      }
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed left-12 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-8 z-50">
      <div className="h-40 w-0.5 bg-gray-300 rounded-full" />
      {sections.map((section) => (
        <div key={section.id} className="relative">
          <button
            onClick={() => handleClick(section.id)}
            className={`h-4 w-4 rounded-full border-2 border-gray-300 transition-all duration-300 ${
              activeSection === section.id ? 'bg-gray-300 scale-250' : 'bg-transparent'
            }`}
          />
          <span
            className={`absolute left-8 top-1/2 -translate-y-1/2 text-white whitespace-nowrap transition-all duration-300 opacity-100 ${
              activeSection === section.id ? 'scale-125' : ''
            }`}
          >
            {section.title}
          </span>
        </div>
      ))}
      <div className="h-40 w-0.5 bg-gray-300 rounded-full" />
    </div>
  );
};
