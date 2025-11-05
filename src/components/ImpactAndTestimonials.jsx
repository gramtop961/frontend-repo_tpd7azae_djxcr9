import { useEffect, useState } from 'react';
import { Users, Globe, Leaf } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value }) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-6">
    <div className="w-11 h-11 rounded-full bg-[#e7f1ed] text-[#3e6553] flex items-center justify-center">
      <Icon className="w-5 h-5" />
    </div>
    <p className="mt-3 text-3xl font-semibold text-slate-900">{value}</p>
    <p className="text-slate-600">{label}</p>
  </div>
);

const ImpactAndTestimonials = () => {
  const [stats, setStats] = useState({ rice: 0, farmers: 0, communities: 0 });

  useEffect(() => {
    // Simple animated count-up for aesthetics
    const targets = { rice: 128_500, farmers: 940, communities: 76 };
    const duration = 1200;
    const start = performance.now();

    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      setStats({
        rice: Math.floor(targets.rice * p),
        farmers: Math.floor(targets.farmers * p),
        communities: Math.floor(targets.communities * p),
      });
      if (p < 1) requestAnimationFrame(tick);
    };

    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="bg-[#f6faf8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          <StatCard icon={Leaf} label="kg rice collected" value={`${stats.rice.toLocaleString()}+`} />
          <StatCard icon={Users} label="farmers supported" value={`${stats.farmers.toLocaleString()}`} />
          <StatCard icon={Globe} label="communities impacted" value={`${stats.communities.toLocaleString()}`} />
        </div>

        <div className="mt-16">
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#1a2d26]">Stories from the field</h3>
          <p className="mt-3 text-slate-600 max-w-2xl">Real voices from farmers and contributors powering the EcoBeras movement.</p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[{
              name: 'Sari, Farmer',
              quote: 'With EcoBeras, we learned to grow with less water and better yields.',
              img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1974&auto=format&fit=crop'
            },{
              name: 'Adi, Cooperative Lead',
              quote: 'Transparent pricing changed everything for our members.',
              img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1887&auto=format&fit=crop'
            },{
              name: 'Maya, Contributor',
              quote: 'Knowing exactly where my support goes makes me come back every season.',
              img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1974&auto=format&fit=crop'
            }].map((t, i) => (
              <div key={i} className="rounded-2xl bg-white border border-slate-200 p-6">
                <div className="flex items-center gap-4">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-medium text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">EcoBeras community</p>
                  </div>
                </div>
                <p className="mt-4 text-slate-700 leading-relaxed">“{t.quote}”</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactAndTestimonials;
