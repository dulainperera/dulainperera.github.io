import Contact from './components/Contact';
import Timeline from './components/Timeline';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Tech from './components/Tech';
import Footer from './components/Footer';
import Gradient from './components/Gradient'; // Import your Gradient component

const App = () => {
  return (
    <div className="overflow-x-hidden text-white antialiased relative min-h-screen">
      {/* Custom background */}
      <div className="absolute top-0 left-0 z-[-2] h-full w-full bg-gray-950"></div>
      
      {/* Top right gradient - positioned for entire page */}
      <Gradient />
      
      <Navbar />
      <div className="container mx-auto px-8 relative z-10 min-h-screen pt-16"> 
        <div id="intro" className="scroll-mt-36"> 
          <Intro />
        </div>
        <div id="tech" className="scroll-mt-36"> 
          <Tech />
        </div>
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