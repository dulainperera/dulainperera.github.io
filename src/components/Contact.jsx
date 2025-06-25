import React, { useState } from 'react';
import { motion } from 'framer-motion';


const Contact = () => {
  const [result, setResult] = useState("");

  const onsubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "95df5f76-881f-4a4c-be7b-f04242ff9e46");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
      event.target.reset();
    } else {
      setResult("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="border-t border-neutral-800 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-15 text-center text-4xl"
      >
        Get in touch
      </motion.h1>

      <form onSubmit={onsubmit} className="max-w-xl mx-auto mt-10 flex flex-col gap-6">
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="px-4 py-3 rounded bg-neutral-900 text-white border border-neutral-700 focus:outline-none focus:border-blue-400"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          className="px-4 py-3 rounded bg-neutral-900 text-white border border-neutral-700 focus:outline-none focus:border-blue-400"
        />
        <textarea
          name="message"
          required
          placeholder="Your Message"
          rows={5}
          className="px-4 py-3 rounded bg-neutral-900 text-white border border-neutral-700 focus:outline-none focus:border-blue-400 resize-none"
        ></textarea>
        <button
          variant="gradient"
          type="submit"
          className="inline-block rounded-full bg-sky-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover bg-sky-600-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus bg-sky-600-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active bg-sky-600-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
        >
          Submit 
        </button>
      </form>
      <span className="block text-center mt-4">{result}</span>
    </div>
  );
};

export default Contact;