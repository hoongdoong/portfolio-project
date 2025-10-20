import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
  };

  const handleIframeLoad = () => {
    if (isSubmitting) {
      setSubmitted(true);
    }
  };


  if (submitted) {
    return (
        <section id="contact" className="h-screen flex flex-col items-center justify-center">
            <h2 className="text-gradient text-[64px] font-extrabold tracking-[-1.92px] max-md:text-[40px] mb-6">
                Thank you!
            </h2>
            <p className="text-white text-2xl">Your message has been sent.</p>
        </section>
    );
  }

  return (
    <section id="contact" className="h-screen flex flex-col items-center justify-center">
      <h2 className="text-gradient text-[64px] font-extrabold tracking-[-1.92px] max-md:text-[40px] mb-6">
        Get in touch
      </h2>
      <div className="w-full max-w-2xl bg-gray-800 bg-opacity-40 p-8 rounded-lg border border-gray-700">
        <h3 className="text-3xl text-white font-semibold text-center tracking-tight mb-6">
          Drop me a message!
        </h3>
        <form
          action="https://docs.google.com/forms/d/e/1FAIpQLSfKlKE8oZytzrC5B9TipAauDoRTfDZ48J6JrsJVUfyvcAyrhg/formResponse"
          method="POST"
          target="hidden_iframe"
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div className="flex gap-4">
            <input
              type="text"
              name="entry.2005620554"
              placeholder="First Name"
              required
              className="input-field"
            />
            <input
              type="text"
              name="entry.745613005"
              placeholder="Last Name"
              className="input-field"
            />
          </div>
          <input
            type="email"
            name="entry.1045781291"
            placeholder="Email"
            required
            className="input-field"
          />
          <input
            type="tel"
            name="entry.1166974658"
            placeholder="Phone Number"
            className="input-field"
          />
          <textarea
            name="entry.839337160"
            placeholder="Message"
            required
            rows={4}
            className="input-field resize-none"
          />
          <button
            type="submit"
            className="w-full bg-[#3A4B89] hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors border border-blue-500 hover:border-blue-400"
          >
            Submit
          </button>
        </form>
      </div>
      <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }} onLoad={handleIframeLoad}></iframe>
      <style jsx>{`
        .input-field {
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 0.75rem 1rem;
          border-radius: 5px;
          color: white;
          width: 100%;
          transition: border-color 0.2s;
        }
        .input-field::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }
        .input-field:focus {
          outline: none;
          border-color: #73a7e3;
        }
      `}</style>
    </section>
  );
};
