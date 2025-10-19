import React, { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a server
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="flex flex-col items-center">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/0bc6e41261d2a4e645a991282fa87c79c4e43344?placeholderIfAbsent=true"
        className="aspect-[0.02] object-contain w-0.5 mt-[41px] max-md:mt-10"
        alt=""
      />
      
      <h2 className="text-white text-[64px] font-extrabold tracking-[-1.92px] opacity-90 bg-clip-text mt-[45px] max-md:text-[40px] max-md:mt-10">
        Get in touch
      </h2>
      
      <div className="self-stretch flex h-[487px] items-center gap-[30px] justify-center px-5 rounded-[20px] border-[rgba(10,13,23,0.05)] border-solid border-2">
        <div className="self-stretch min-w-60 w-[800px] my-auto p-10 max-md:px-5">
          <div className="flex w-full flex-col items-center text-3xl text-white font-semibold text-center tracking-[-0.6px] justify-center max-md:max-w-full">
            <div className="max-md:max-w-full">
              Let's connect
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="w-full text-[15px] text-white font-normal tracking-[-0.15px] mt-[41px] max-md:max-w-full max-md:mt-10">
            <div className="flex w-full gap-3.5 flex-wrap max-md:max-w-full">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="bg-[rgba(255,255,255,0.05)] border flex min-w-60 flex-col items-stretch justify-center flex-1 shrink basis-[0%] px-3.5 py-3 rounded-[5px] border-[rgba(255,255,255,0.2)] border-solid placeholder-white/70 focus:outline-none focus:border-[rgba(115,167,227,1)] transition-colors"
              />
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="bg-[rgba(255,255,255,0.05)] border flex min-w-60 flex-col items-stretch justify-center flex-1 shrink basis-[0%] px-3.5 py-3 rounded-[5px] border-[rgba(255,255,255,0.2)] border-solid placeholder-white/70 focus:outline-none focus:border-[rgba(115,167,227,1)] transition-colors"
              />
            </div>
            
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="bg-[rgba(255,255,255,0.05)] border flex w-full flex-col items-stretch justify-center mt-3.5 px-3.5 py-3 rounded-[5px] border-[rgba(255,255,255,0.2)] border-solid max-md:max-w-full placeholder-white/70 focus:outline-none focus:border-[rgba(115,167,227,1)] transition-colors"
            />
            
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              className="bg-[rgba(255,255,255,0.05)] border flex w-full flex-col items-stretch justify-center mt-3.5 px-3.5 py-3 rounded-[5px] border-[rgba(255,255,255,0.2)] border-solid max-md:max-w-full placeholder-white/70 focus:outline-none focus:border-[rgba(115,167,227,1)] transition-colors"
            />
            
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={4}
              className="bg-[rgba(255,255,255,0.05)] border min-h-[109px] w-full mt-3.5 pt-3 pb-3 px-3.5 rounded-[5px] border-[rgba(255,255,255,0.2)] border-solid max-md:max-w-full placeholder-white/70 focus:outline-none focus:border-[rgba(115,167,227,1)] transition-colors resize-none"
            />
            
            <button
              type="submit"
              className="flex w-full items-center gap-2.5 text-white font-medium justify-center mt-3.5 px-2.5 py-3 rounded-[5px] max-md:max-w-full bg-[rgba(115,167,227,0.2)] hover:bg-[rgba(115,167,227,0.3)] transition-colors border border-[rgba(115,167,227,0.5)] hover:border-[rgba(115,167,227,0.8)]"
            >
              <span className="self-stretch my-auto">Send it to me</span>
            </button>
          </form>
        </div>
      </div>
      
      <div className="bg-[rgba(155,184,213,0.1)] self-stretch flex min-h-24 items-center gap-[25px] text-xl text-white font-light tracking-[-0.6px] justify-center flex-wrap mt-3.5 max-md:mr-0.5">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/69d02f440684d31987d0b67e55201d508926c600?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-[39px] self-stretch shrink-0 my-auto"
          alt="Phone icon"
        />
        <a href="tel:+84901915100" className="self-stretch my-auto hover:opacity-80 transition-opacity">
          +84 901 915 100
        </a>
      </div>
    </section>
  );
};
