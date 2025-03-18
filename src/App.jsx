import Contact from './components/Contact';
import Experience from './components/Experience';
import Intro from './components/Intro';
import Navbar from './components/navbar';
import Tech from './components/Tech';


const App = () => {
  return (
    <div className="overflow-x-hidden text-white antialiased selection:bg-cyan-300 min-h-screen relative">
      <div className="fixed top-0 -z-10 h-full w-full"></div>
      <div className="absolute top-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <div className="container mx-auto px-8 relative z-10 min-h-screen">
        <Navbar />
        <Intro />
        <Tech />
        <Experience />
        <Contact />
      </div>
    </div>
  )
}

export default App;