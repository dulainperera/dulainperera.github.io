import profilePic from '../assets/profile-pic.jpg';

const Intro = () => {
    return (
      <div className="border-b border-neutral-900 pb-4 lg:mb-35">
          <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2">
                  <div className="flex flex-col items-center lg:items-start">
                      <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                          Dulain Perera
                      </h1>
                      <span className="text-2xl">
                          Undergraduate
                      </span>
                      <p className="my-2 max-w-xl py-6 tracking-tighter">
                          Hello, and welcome to my portfolio! I'm a 2nd year computer science undergraduate with a strong foundation in Python, Java, and HTML and currently exploring other frameworks like Laravel and Spring Boot. My journey in tech has been shaped by a commitment to learning and a passion for building functional, engaging websites and applications.
                      </p>
                  </div>
              </div>
              <div className="w-full lg:w-1/2 lg:p-8">
                <img src={profilePic} alt="Dulain Perera" className="rounded-lg shadow-lg w-4/5 mx-auto h-auto" />
              </div>
          </div>        
      </div>
    )
  }
  
  export default Intro;