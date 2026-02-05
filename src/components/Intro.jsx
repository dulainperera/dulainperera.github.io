import profilePic from '../assets/profile-pic.jpg';
//import downloadIcon from '../assets/download-icon.svg';

const Intro = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 mt-14">
      <div className="container max-w-4xl mx-auto text-center z-10">
        
        {/* Text Section */}
        <div className="space-y-6">

          <div className="w-full flex justify-center items-center">
            <img
              src={profilePic}
              alt="Dulain Perera"
              className="rounded-full shadow-lg w-20 h-20 sm:w-60 sm:h-60 md:w-72 md:h-72 object-cover"
            />
          </div>  
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">Hi I'm </span>
            <span>Dulain Perera</span>
          
          </h1>

          <p className="text-lg md:text-xl text-gray-400">Hello, and welcome to my portfolio! I'm a 2nd year computer science undergraduate with a strong foundation in web development. Also interested in digital marketing and QA. My journey in tech has been shaped by a commitment to learning and a passion for building functional, engaging websites and applications.</p>          

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4"
          >
            
            <a
              href="mailto:dulainp337@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full 
              border border-white/20 bg-black/40
               backdrop-blur-lg  text-body
               shadow-lg font-medium leading-5 rounded-base  px-4 focus:outline-none text-white/70 transition duration-150 ease-in-out hover:text-neutral-100 hover:border-neutral-100"
            >
              Get In Touch 
            </a>

            {/* Get in Touch */}
            <a
              href="/Dulain_Perera_CV.pdf"
              download
              className=" link-style"
            >
              Download CV
            </a>
          </div>
        </div>

       
        
      </div>
    </div>
  );
};

export default Intro;
