import profilePic from '../assets/profile-pic.jpg';
import { motion } from 'framer-motion';


const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Intro = () => {
  return (
    <div className="px-4 sm:px-8 pt-4 pb-16 lg:pb-24">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
        
        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 sm:space-y-6 max-w-2xl">
          
          <h1 className="text-xl sm:text-2xl text-zinc-400">Hello, I'm</h1>
  
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl font-light tracking-tight bg-gradient-to-r from-sky-500 to-zinc-500 bg-clip-text text-transparent"
          >
            Dulain Perera
          </motion.h1>
  
          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="text-2xl sm:text-3xl font-medium bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent"
          >
            Software developer
          </motion.span>
  
          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="text-base sm:text-lg text-gray-400 leading-relaxed font-light"
          >
            Hello, and welcome to my portfolio! I'm a 2nd year computer science undergraduate with a strong foundation in web development and currently exploring frameworks like React. My journey in tech has been shaped by a commitment to learning and a passion for building functional, engaging websites and applications.
          </motion.p>

          <motion.div
            variants={container(1.5)}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4"
          >
            {/* Download CV */}
            <a
              href="/Dulain_Perera_CV.pdf"
              download
              className="group relative inline-block rounded-full p-[1px] bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/50 transition-all duration-300 ease-in-out"
            >
              <span className="px-6 py-3 text-sm sm:text-base text-gray-300 bg-neutral-950 rounded-full group-hover:text-white group-hover:bg-neutral-900 transition-all duration-300 ease-in-out">
                Download CV
              </span>
            </a>

            {/* Get in Touch */}
            <a
              href="mailto:dulainp337@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block rounded-full p-[1px] bg-gradient-to-r from-zinc-500 via-gray-600 to-zinc-700 shadow-lg shadow-zinc-500/25 hover:shadow-zinc-400/50 transition-all duration-300 ease-in-out"
            >
              <span className="px-6 py-3 text-sm sm:text-base text-gray-300 bg-neutral-950 rounded-full group-hover:text-zinc-100 group-hover:bg-neutral-900 transition-all duration-300 ease-in-out">
                Get in Touch
              </span>
            </a>
          </motion.div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            src={profilePic}
            alt="Dulain Perera"
            className="rounded-full shadow-lg w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
