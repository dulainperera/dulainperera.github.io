import Header from './components/Header';

const App = () => {
  return (
    <div className="min-h-screen w-full relative overflow-x-hidden text-white antialiased">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #0d1a36 100%)",
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
      </div>
    </div>
  );
}

export default App;