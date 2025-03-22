import Contact from './components/Contact';
import Experience from './components/Experience';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Tech from './components/Tech';

const App = () => {
  return (
    <div className="overflow-x-hidden text-white antialiased relative">
      <div className="fixed top-0 -z-10 h-full w-full"></div>
      <div className="absolute top-0 z-[-2] h-full w-full bg-neutral-950"></div>

      <Navbar />
      <div className="container mx-auto px-8 relative z-10 min-h-screen pt-32"> 
        <div id="intro" className="scroll-mt-36"> 
          <Intro />
        </div>
        <div id="tech" className="scroll-mt-36"> 
          <Tech />
        </div>
        <div id="experience" className="scroll-mt-36"> 
          <Experience />
        </div>
        <div id="projects" className="scroll-mt-36"> 
          <Projects />
        </div>
        <div id="contact" className="scroll-mt-36"> 
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;