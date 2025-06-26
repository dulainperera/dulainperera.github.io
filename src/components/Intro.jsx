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
    <div className=" pt-4 pb-30 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16">
              Dulain Perera
            </motion.h1>
            <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="text-3xl bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
              Undergraduate
            </motion.span>
            <motion.p variants={container(1)}
              initial="hidden"
              animate="visible" className="max-w-xl py-6 text-gray-400">
              Hello, and welcome to my portfolio! I'm a 2nd year computer science undergraduate with a strong foundation in web development and currently exploring frameworks like React. My journey in tech has been shaped by a commitment to learning and a passion for building functional, engaging websites and applications.
            </motion.p>

            
            <motion.div 
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="m-8 flex items-center justify-center gap-8 text-4xl"
            >

              {/* download CV button */}
              <a
                href="/Dulain_Perera_CV.pdf"
                download
                className="px-6 py-2 text-sm md:text-lg text-neutral-950 font-semibold rounded-full 
                bg-gradient-to-r from-gray-400 to-gray-600 shadow-md 
              hover:from-gray-300 hover:to-gray-500 transition duration-300 ease-in-out"
              >
                Download CV
              </a>

              {/* Get in Touch Button */}
              <a
                href="mailto:dulainp337@gmail.com"
                target="_blank"
                className="px-6 py-2 text-sm md:text-lg bg-neutral-950 text-gray-500 border border-gray-500 rounded-full  transition duration-300 ease-in-out hover:text-gray-300 hover:border-gray-300 shadow-md"
              >
                Get in Touch
              </a>

            </motion.div>
          </div>

        </div>

        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.img 
            initial={{ x:100, opacity: 0 }}
            animate={{x:0, opacity: 1 }}
            transition={{ duration:1, delay: 1.2 }}
            src={profilePic} alt="Dulain Perera" className="rounded-full shadow-lg w-3  /5 mx-auto h-auto vignette" />
        </div>
      </div>
    </div>
  );
}

export default Intro;