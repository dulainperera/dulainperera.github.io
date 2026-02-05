import Header from './components/Header';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Technology from './components/Technology';





const App = () => {
  return (
    <div className="min-h-screen w-full relative overflow-x-hidden text-white antialiased">
      {/* Background */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #0d1a36 100%)",
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        <Header />

        <Intro />

        <Technology/>

        <Projects />

        <Contact />

        <Footer />
      </div>
    </div>
  );
}

export default App;