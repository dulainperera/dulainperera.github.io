import React, { useState } from 'react';

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
    <div className="pb-40 px-4 ">
      <h1
        className="my-10 md:my-15 text-center text-3xl md:text-4xl"
      >
        Get in touch
      </h1>

      <form onSubmit={onsubmit} className="max-w-xl mx-auto mt-6 md:mt-10 flex flex-col gap-4 md:gap-6">
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="form-input text-sm md:text-base"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          className="form-input text-sm md:text-base"
        />
        <textarea
          name="message"
          required
          placeholder="Your Message"
          rows="5"
          className="form-input text-sm md:text-base min-h-[120px] md:min-h-[150px]"
        ></textarea>
        <button
          variant="gradient"
          type="submit"
          className="w-32 md:w-36 mx-auto rounded-full px-4 py-3 md:py-4 text-sm md:text-base text-gray-900 bg-zinc-100 transition duration-150 ease-in-out hover:bg-zinc-300" 
        >
          Submit 
        </button>
      </form>
      <span className="block text-center mt-4 text-sm md:text-base px-4">{result}</span>
    </div>
  );
};

export default Contact;