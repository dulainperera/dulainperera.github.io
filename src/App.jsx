import Contact from './components/Contact';
import Timeline from './components/Timeline';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
// import Projects from './components/Projects';
import Tech from './components/Tech';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="overflow-x-hidden antialiased relative min-h-screen">
      
      <Navbar />
      <div className="container mx-auto px-8 relative z-10 min-h-screen pt-16"> 
        <div id="intro" className="scroll-mt-36"> 
          <Intro />
        </div>
        <div id="tech" className="scroll-mt-36"> 
          <Tech />
        </div>
        
        {/* <div id="projects" className="scroll-mt-36"> 
          <Projects />
        </div> */}
        <div id="timeline" className="scroll-mt-36"> 
          <Timeline />
        </div>  
        <div id="contact" className="scroll-mt-36"> 
          <Contact />
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;