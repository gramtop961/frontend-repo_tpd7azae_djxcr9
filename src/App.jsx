import Hero from './components/Hero';
import AboutAndHow from './components/AboutAndHow';
import ImpactAndTestimonials from './components/ImpactAndTestimonials';
import JoinAndFooter from './components/JoinAndFooter';
import { Leaf } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top navigation */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-4">
          <div className="flex items-center justify-between rounded-full bg-white/70 backdrop-blur shadow-sm border border-white/40 px-4 py-2">
            <a href="#" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-[#3e6553] flex items-center justify-center">
                <Leaf className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold">EcoBeras</span>
            </a>
            <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-700">
              <a href="#about" className="hover:text-[#3e6553]">About</a>
              <a href="#about" className="hover:text-[#3e6553]">How it works</a>
              <a href="#join" className="hover:text-[#3e6553]">Partnerships</a>
              <a href="#join" className="hover:text-[#3e6553]">Join</a>
            </nav>
            <a href="#join" className="hidden sm:inline-flex items-center rounded-full bg-[#3e6553] text-white px-4 py-2 text-sm font-medium hover:bg-[#35584a]">
              Get Started
            </a>
          </div>
        </div>
      </header>

      <main className="pt-20">
        <Hero />
        <AboutAndHow />
        <ImpactAndTestimonials />
        <JoinAndFooter />
      </main>
    </div>
  );
}

export default App;
