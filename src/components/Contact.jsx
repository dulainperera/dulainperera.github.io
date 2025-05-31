import { motion } from 'framer-motion';

const Contact = () => {

  const [result, setResult] = useState("");

  const onsubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...")  
    const formData = new FormData(event.target);

    formData.append("access_key", "95df5f76-881f-4a4c-be7b-f04242ff9e46 ");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
      event.target.reset(); // reset the form after successful submission
    }
    else {
      setResult("Failed to send message. Please try again.");
    }


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

      
    </div>
  );
};

export default Contact;