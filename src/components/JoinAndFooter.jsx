import { ArrowRight, Facebook, Instagram, Linkedin } from 'lucide-react';

const JoinAndFooter = () => {
  return (
    <section id="join" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-20">
        {/* Join CTA */}
        <div className="rounded-3xl bg-gradient-to-br from-[#3e6553] to-[#2f4d42] text-white p-10 sm:p-14 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-56 h-56 rounded-full bg-white/10" />
          <div className="absolute -left-10 -bottom-10 w-72 h-72 rounded-full bg-white/10" />
          <div className="relative">
            <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">Join EcoBeras</h3>
            <p className="mt-3 text-white/90 max-w-2xl">
              Become an individual, partner organization, or member — and help scale climate-smart
              rice from seed to bowl.
            </p>

            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              <div className="rounded-2xl bg-white/10 backdrop-blur p-5">
                <p className="font-medium">Individual</p>
                <p className="text-sm text-white/80 mt-1">Contribute, volunteer, and track impact.</p>
              </div>
              <div className="rounded-2xl bg-white/10 backdrop-blur p-5">
                <p className="font-medium">Partner Organization</p>
                <p className="text-sm text-white/80 mt-1">Co-fund projects and share knowledge.</p>
              </div>
              <div className="rounded-2xl bg-white/10 backdrop-blur p-5">
                <p className="font-medium">Member</p>
                <p className="text-sm text-white/80 mt-1">Join governance and long-term programs.</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-[#2f4d42] px-6 py-3 text-base font-medium shadow-sm hover:bg-slate-50 transition-colors">
                Get Started <ArrowRight className="w-4 h-4" />
              </button>
              <a href="#about" className="inline-flex items-center justify-center rounded-full border border-white/30 text-white px-6 py-3 text-base font-medium hover:bg-white/10 transition-colors">
                Explore the mission
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#3e6553]" />
              <span className="text-lg font-semibold text-[#1a2d26]">EcoBeras</span>
            </div>
            <div className="text-slate-600 text-sm">
              Contact: hello@ecoberas.org • +62 812-0000-0000
            </div>
            <div className="flex items-center gap-4 text-slate-500">
              <a aria-label="Instagram" href="#" className="hover:text-[#3e6553]"><Instagram className="w-5 h-5" /></a>
              <a aria-label="Facebook" href="#" className="hover:text-[#3e6553]"><Facebook className="w-5 h-5" /></a>
              <a aria-label="LinkedIn" href="#" className="hover:text-[#3e6553]"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-slate-500">© {new Date().getFullYear()} EcoBeras. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
};

export default JoinAndFooter;
