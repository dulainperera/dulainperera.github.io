import profilePic from '../assets/profile-pic.jpg';

const Intro = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <div className="container max-w-4xl mx-auto text-center z-10">
        
        {/* Text Section */}
        <div className="space-y-6">
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">Hi I'm </span>
            <span>Dulain Perera</span>
          
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4">Hello, and welcome to my portfolio! I'm a 2nd year computer science undergraduate with a strong foundation in web development and currently exploring frameworks like React. My journey in tech has been shaped by a commitment to learning and a passion for building functional, engaging websites and applications.</p>
  
        
  
          <span
            className="text-2xl sm:text-3xl font-medium bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent"
          >
            Software developer
          </span>
  
          <p
            className="text-base sm:text-lg text-gray-400 leading-relaxed font-light"
          >
            
          </p>

          <div
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
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
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
