import { Sprout, Handshake, Package } from 'lucide-react';

const AboutAndHow = () => {
  return (
    <section id="about" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-20">
        {/* About */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1a2d26] tracking-tight">
              What is EcoBeras?
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed text-lg">
              EcoBeras is a community-driven platform dedicated to sustainable rice cultivation.
              We bring together farmers, donors, and eco-partners to fund climate-friendly
              practices, regenerate soil health, and uplift rural livelihoods with full
              transparency.
            </p>
            <div className="mt-6 grid sm:grid-cols-3 gap-4 text-sm">
              <div className="rounded-xl border border-slate-200 p-4">
                <p className="font-medium text-[#3e6553]">Mission</p>
                <p className="mt-2 text-slate-600">Empower farmers and nourish communities through sustainable rice.</p>
              </div>
              <div className="rounded-xl border border-slate-200 p-4">
                <p className="font-medium text-[#3e6553]">Vision</p>
                <p className="mt-2 text-slate-600">A resilient food system balanced with people and planet.</p>
              </div>
              <div className="rounded-xl border border-slate-200 p-4">
                <p className="font-medium text-[#3e6553]">Values</p>
                <p className="mt-2 text-slate-600">Sustainability, transparency, and shared prosperity.</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm ring-1 ring-slate-200">
            <img
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2068&auto=format&fit=crop"
              alt="Farmers tending to rice fields"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* How it works */}
        <div className="mt-20">
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#1a2d26]">How it works</h3>
          <p className="mt-3 text-slate-600 max-w-2xl">
            Join a simple, transparent flow that turns your support into real-world impact.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-slate-200 p-6 bg-white">
              <div className="w-11 h-11 rounded-full bg-[#e7f1ed] text-[#3e6553] flex items-center justify-center">
                <Package className="w-5 h-5" />
              </div>
              <h4 className="mt-4 font-semibold text-slate-900">Contribute Rice</h4>
              <p className="mt-2 text-slate-600">Fund eco-grown rice or donate surplus to kickstart greener harvests.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 bg-white">
              <div className="w-11 h-11 rounded-full bg-[#e7f1ed] text-[#3e6553] flex items-center justify-center">
                <Handshake className="w-5 h-5" />
              </div>
              <h4 className="mt-4 font-semibold text-slate-900">Support Farmers</h4>
              <p className="mt-2 text-slate-600">Back training, tools, and fair pricing that uplift farmer incomes.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 bg-white">
              <div className="w-11 h-11 rounded-full bg-[#e7f1ed] text-[#3e6553] flex items-center justify-center">
                <Sprout className="w-5 h-5" />
              </div>
              <h4 className="mt-4 font-semibold text-slate-900">Grow Sustainability</h4>
              <p className="mt-2 text-slate-600">Scale regenerative practices that restore soils and cut emissions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAndHow;
