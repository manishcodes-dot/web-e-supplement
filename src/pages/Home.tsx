import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

interface HomeProps {
  setPage: (page: 'home' | 'shop' | 'product' | 'dashboard' | 'checkout' | 'admin') => void;
  setSelectedGoal: (goal: string) => void;
  addToCart: (item: any) => void;
}

const solutionsData = [
  { id: 'Cognition', title: 'Cognitive Focus', desc: 'Eliminate brain fog and enhance neuro-connectivity.', bg: 'bg-[#0f172a]', text: 'text-white' },
  { id: 'Recovery', title: 'Deep Recovery', desc: 'Optimize REM sleep cycles and cellular repair.', bg: 'bg-[#166534]', text: 'text-white' },
  { id: 'Longevity', title: 'Longevity', desc: 'NAD+ precursors and telomere support.', bg: 'bg-white', text: 'text-[#0f172a]' },
  { id: 'Metabolic', title: 'Physical Power', desc: 'Fueling ATP production and mitochondrial efficiency.', bg: 'bg-[#082f49]', text: 'text-white' },
];

export default function Home({ setPage, setSelectedGoal, addToCart }: HomeProps) {
  const handleCategoryClick = (goal: string) => {
    setSelectedGoal(goal);
    setPage('shop');
  };

  const handleProductAction = (product: { name: string; price: number; desc: string; img: string }) => {
    addToCart(product);
    setPage('checkout');
  };

  return (
    <div className="min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center pt-32 pb-24 overflow-hidden px-margin-mobile md:px-margin-desktop bg-surface">
        {/* Huge Headline */}
        <div className="text-center w-full z-10 mb-8 md:mb-12">
          <h1 className="font-display-lg text-[15vw] md:text-[140px] text-primary leading-none tracking-tight font-serif" style={{ fontFamily: 'Georgia, serif' }}>
            Feel the Balance.
          </h1>
        </div>

        {/* Main Content Area */}
        <div className="relative w-full max-w-7xl mx-auto flex-grow flex flex-col md:flex-row items-center justify-between min-h-[600px] px-4 md:px-8 lg:px-12 mt-12 md:mt-0">
          
          {/* Connecting Faint Lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" style={{ zIndex: 0 }}>
            {/* Line to bottom left stat */}
            <path d="M 50% 50% Q 25% 65% 20% 80%" fill="none" stroke="currentColor" className="text-outline-variant" strokeWidth="1.5" strokeDasharray="4 4" />
            {/* Line to bottom right stat */}
            <path d="M 50% 50% Q 75% 75% 80% 90%" fill="none" stroke="currentColor" className="text-outline-variant" strokeWidth="1.5" strokeDasharray="4 4" />
          </svg>

          {/* Left Column (Tags & Bottom Stat) */}
          <div className="hidden md:flex flex-col justify-between h-full py-12 z-10 w-[30%]">
            <div className="flex flex-col gap-4">
              <div className="bg-surface-container-low px-5 py-2.5 rounded-md shadow-sm flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-sm">eco</span>
                <span className="font-headline-md text-xs lg:text-sm text-primary">Plant-Based Ingredients</span>
              </div>
              <div className="bg-surface-container-low px-5 py-2.5 rounded-md shadow-sm flex items-center gap-3 w-fit">
                <span className="material-symbols-outlined text-secondary text-sm">water_drop</span>
                <span className="font-headline-md text-xs lg:text-sm text-primary">Healthy alternative</span>
              </div>
              <div className="bg-surface-container-low px-5 py-2.5 rounded-md shadow-sm flex items-center gap-3 w-fit">
                <span className="material-symbols-outlined text-secondary text-sm">psychiatry</span>
                <span className="font-headline-md text-xs lg:text-sm text-primary">Vegetable Cellulos</span>
              </div>
            </div>

            <div className="mt-32 xl:mt-48 flex items-center gap-4 xl:gap-6 w-full max-w-[320px]">
              <p className="font-body-md text-[10px] xl:text-[11px] text-on-surface-variant text-right leading-tight flex-1">
                <strong className="text-primary block mb-1 text-xs">30 Capsule</strong>
                Ginseng is an adaptogenic root that helps the body manage everyday stress & resist loss of energy
              </p>
              <div className="w-20 h-20 xl:w-24 xl:h-24 bg-surface-container-low rounded-full flex items-center justify-center shadow-lg flex-shrink-0 relative">
                <div className="absolute top-1 left-1 xl:top-2 xl:left-2 w-3 h-3 bg-secondary rounded-full border-2 border-surface shadow-sm"></div>
                <span className="font-display-lg text-2xl xl:text-3xl text-primary tracking-tighter">63%</span>
              </div>
            </div>
          </div>

          {/* Center Bottle */}
          <div className="relative z-20 w-full md:w-[40%] flex justify-center h-full items-center py-16 md:py-0 pointer-events-none">
            <img 
              src="/novasupplement.png" 
              alt="Premium wellness supplement bottle" 
              className="w-auto h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] max-w-none object-contain drop-shadow-2xl scale-[1.05] md:scale-[1.1] lg:scale-[1.15] -translate-y-6 md:-translate-y-10 lg:-translate-y-16 origin-center"
            />
          </div>

          {/* Right Column (Info & Bottom Stat) */}
          <div className="hidden md:flex flex-col justify-between h-full py-12 z-10 w-[30%]">
            <div className="flex flex-col space-y-4">
              <h2 className="font-display-lg text-xl lg:text-2xl text-primary">Boost your natural energy</h2>
              <p className="font-body-md text-[11px] lg:text-xs text-on-surface-variant leading-relaxed">
                Clinically effective levels of ginseng and rhodiola help jumpstart your day or before a workout.
              </p>
              <button 
                onClick={() => setPage('shop')}
                className="bg-secondary text-on-secondary px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform flex items-center gap-3 shadow-md w-fit mt-2 lg:mt-4"
              >
                Explore More
                <span className="bg-surface text-secondary rounded-full p-1 material-symbols-outlined text-xs">arrow_forward</span>
              </button>
            </div>

            <div className="mt-32 xl:mt-48 flex items-center flex-row-reverse gap-4 xl:gap-6 w-full max-w-[320px] self-end">
               <p className="font-body-md text-[10px] xl:text-[11px] text-on-surface-variant text-left leading-tight flex-1">
                Use daily for benefits you feel in the moment, and to help your body find balance over time.
              </p>
              <div className="w-20 h-20 xl:w-24 xl:h-24 bg-surface-container-low rounded-full flex items-center justify-center shadow-lg flex-shrink-0 relative">
                <div className="absolute top-1 left-1 xl:top-2 xl:left-2 w-3 h-3 bg-secondary rounded-full border-2 border-surface shadow-sm"></div>
                <span className="font-display-lg text-2xl xl:text-3xl text-primary tracking-tighter">22%</span>
              </div>
            </div>
          </div>

          {/* Mobile Info Overlay (Visible only on small screens) */}
          <div className="md:hidden absolute bottom-0 left-0 right-0 flex flex-col items-center text-center px-4 space-y-4 bg-gradient-to-t from-surface via-surface/90 to-transparent pt-16 pb-8 z-30">
            <h2 className="font-display-lg text-2xl text-primary">Boost your natural energy</h2>
            <button 
              onClick={() => setPage('shop')}
              className="bg-secondary text-on-secondary px-8 py-3 rounded-full font-bold text-sm flex items-center gap-3 shadow-md"
            >
              Explore More
              <span className="bg-surface text-secondary rounded-full p-1 material-symbols-outlined text-xs">arrow_forward</span>
            </button>
          </div>

        </div>
      </section>

      {/* Benefits You Feel Section */}
      <section className="py-24 bg-surface-container-low mb-16 relative overflow-hidden flex flex-col items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative pb-24">
          <h2 className="font-display-lg text-5xl md:text-6xl text-primary mb-12 md:mb-20 font-serif tracking-tight text-left" style={{ fontFamily: 'Georgia, serif' }}>
            Benefits You Feel
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative w-full">
            {/* Left List */}
            <div className="flex-1 space-y-6 z-10 w-full order-2 md:order-1">
              {[
                "Promotes emotional well-being*",
                "Clinically-studied ingredients*",
                "Up to 63% reduction in hot flashes*",
                "Safe, hormone-free, plant-based*"
              ].map((item, i) => (
                <div key={`left-${i}`} className="flex items-center gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-on-secondary text-[14px] font-bold">check</span>
                  </div>
                  <span className="font-body-md text-primary text-base md:text-lg font-medium">{item}</span>
                </div>
              ))}
              
              <div className="pt-8">
                <button 
                  onClick={() => setPage('shop')}
                  className="bg-secondary text-on-secondary px-8 py-3.5 rounded-full font-bold text-sm hover:scale-105 transition-transform flex items-center gap-3 shadow-md w-fit"
                >
                  Learn More
                  <span className="bg-surface text-secondary rounded-full p-1 material-symbols-outlined text-xs">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Center Image */}
            <div className="flex-1 flex justify-center items-center relative py-16 md:py-0 order-1 md:order-2 w-full">
              <div className="w-[280px] h-[280px] md:w-[450px] md:h-[450px] bg-secondary/10 rounded-full relative z-0 overflow-hidden">
                <img 
                  src="/handcapsules.png" 
                  alt="Hand holding capsules" 
                  className="w-[75%] md:w-[80%] h-auto object-contain absolute bottom-0 right-8 md:right-12 translate-y-2 z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-500 origin-bottom-right"
                />
              </div>
            </div>

            {/* Right List */}
            <div className="flex-1 space-y-6 z-10 w-full order-3">
              {[
                "Relief from up to 11 major menopause symptoms*",
                "Mood stability and positivity*",
                "May reduce physical & mental fatigue*",
                "1 easy-to-swallow capsule daily (30-day supply)*"
              ].map((item, i) => (
                <div key={`right-${i}`} className="flex items-center gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-on-secondary text-[14px] font-bold">check</span>
                  </div>
                  <span className="font-body-md text-primary text-base md:text-lg font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Banner List */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-outline-variant/30 py-5 w-full bg-surface-container-low z-20">
          <div className="flex items-center justify-center flex-wrap gap-8 md:gap-16 opacity-80 px-4">
             <div className="flex items-center gap-3">
               <span className="material-symbols-outlined text-primary text-lg md:text-xl">psychiatry</span>
               <span className="font-headline-md text-xs md:text-sm text-primary font-bold uppercase tracking-wide">Helps to Ease Hot Flashes</span>
             </div>
             <div className="flex items-center gap-3">
               <span className="material-symbols-outlined text-primary text-lg md:text-xl">eco</span>
               <span className="font-headline-md text-xs md:text-sm text-primary font-bold uppercase tracking-wide">Plant-Based Ingredients</span>
             </div>
             <div className="flex items-center gap-3">
               <span className="material-symbols-outlined text-primary text-lg md:text-xl">ac_unit</span>
               <span className="font-headline-md text-xs md:text-sm text-primary font-bold uppercase tracking-wide">Promotes Balanced Mood</span>
             </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32 px-margin-mobile md:px-margin-desktop pt-24">
        <div className="max-w-container-max mx-auto">
          <div className="mb-16 text-center space-y-4">
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary">Core Formulations</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Product 1 */}
            <div className="group">
              <div 
                onClick={() => setPage('product')}
                className="aspect-[4/5] rounded-3xl overflow-hidden mb-6 bg-surface-container-low relative cursor-pointer"
              >
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX8ieWWEase7Ck8vjwhGKzFmqn5Efr8bk3KQ5umsiY4TKluQi8bBUoYJjL9eFTq91GlTVQVDdn7ggveDeyQjC2k_2BsUIZienOG9MtW272BMu20jICVmLJiMs5e5McXDksH7KU3nf3xgQ6uoLgJaCVIzhHDkfvlxZVvePUNY2glv-A1JtF45C2The7Lfmo_jmBqiMqjcZmZ91NDVnCswp3tLZuA2YrrDK2t8N3T6qAoebsRxqC9py1g7BWsbiGzgBoDbsFEODKGItE" 
                  alt="Neuro-Sync bottle"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-label-sm font-label-sm shadow-sm">NEW FORMULA</div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h4 onClick={() => setPage('product')} className="font-headline-md text-primary text-xl cursor-pointer hover:text-secondary transition-colors">Neuro-Sync 2.0</h4>
                  <span className="text-on-surface-variant font-bold">$84.00</span>
                </div>
                <p className="text-on-surface-variant font-body-md">Optimized Nootropic Stack for Peak Focus</p>
                <button 
                  onClick={() => handleProductAction({
                    name: 'NEURO-SYNC 2.0',
                    price: 84.0,
                    desc: 'Optimized Nootropic Stack for Peak Focus',
                    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBX8ieWWEase7Ck8vjwhGKzFmqn5Efr8bk3KQ5umsiY4TKluQi8bBUoYJjL9eFTq91GlTVQVDdn7ggveDeyQjC2k_2BsUIZienOG9MtW272BMu20jICVmLJiMs5e5McXDksH7KU3nf3xgQ6uoLgJaCVIzhHDkfvlxZVvePUNY2glv-A1JtF45C2The7Lfmo_jmBqiMqjcZmZ91NDVnCswp3tLZuA2YrrDK2t8N3T6qAoebsRxqC9py1g7BWsbiGzgBoDbsFEODKGItE'
                  })}
                  className="w-full mt-4 py-3 border border-primary text-primary rounded-full hover:bg-primary hover:text-on-primary transition-all active:scale-[0.98] cursor-pointer"
                >
                  ADD TO PROTOCOL
                </button>
              </div>
            </div>

            {/* Product 2 */}
            <div className="group">
              <div 
                onClick={() => setPage('product')}
                className="aspect-[4/5] rounded-3xl overflow-hidden mb-6 bg-surface-container-low relative cursor-pointer"
              >
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIaeZT8HiZLICQn319EVwxq2_tDEtPWY9bt9vUPTEZS8mfym6zcHazg1-jHiQn0V11wPf8I51m_ii0okpSeTHKHrLLntG4ScNzmgPWNDQV51aPYCZs7pufwc05gtyWoVguNZxvFnn_ymhlDVB3uJxJQL9ZH9hZUZ0byKHx3uJpGwqZvpzNtJRixFE51kUMNKF5n5q-ibAPovkjyQytZ4WNZFU4-O_E_2xSz0bxJSR5uBTOvCnE6yirgWwP94A177QWR66sWQyWgVRR" 
                  alt="Cell-Restore bottle"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h4 onClick={() => setPage('product')} className="font-headline-md text-primary text-xl cursor-pointer hover:text-secondary transition-colors">Cell-Restore Elixir</h4>
                  <span className="text-on-surface-variant font-bold">$120.00</span>
                </div>
                <p className="text-on-surface-variant font-body-md">Liposomal NAD+ for Cellular Rejuvenation</p>
                <button 
                  onClick={() => handleProductAction({
                    name: 'CELL-RESTORE ELIXIR',
                    price: 120.0,
                    desc: 'Liposomal NAD+ for Cellular Rejuvenation',
                    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIaeZT8HiZLICQn319EVwxq2_tDEtPWY9bt9vUPTEZS8mfym6zcHazg1-jHiQn0V11wPf8I51m_ii0okpSeTHKHrLLntG4ScNzmgPWNDQV51aPYCZs7pufwc05gtyWoVguNZxvFnn_ymhlDVB3uJxJQL9ZH9hZUZ0byKHx3uJpGwqZvpzNtJRixFE51kUMNKF5n5q-ibAPovkjyQytZ4WNZFU4-O_E_2xSz0bxJSR5uBTOvCnE6yirgWwP94A177QWR66sWQyWgVRR'
                  })}
                  className="w-full mt-4 py-3 border border-primary text-primary rounded-full hover:bg-primary hover:text-on-primary transition-all active:scale-[0.98] cursor-pointer"
                >
                  ADD TO PROTOCOL
                </button>
              </div>
            </div>

            {/* Product 3 */}
            <div className="group">
              <div 
                onClick={() => setPage('product')}
                className="aspect-[4/5] rounded-3xl overflow-hidden mb-6 bg-surface-container-low relative cursor-pointer"
              >
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuhwRbIhs20QeFamxFS07jqbIvwXjt3KBiDQLuMIFVPHtz3W3Ox3WU2YTSpyy4oglO1i-6qDMM9sLs9dG8HwMCYb8qS_Akpi35k51gx-2Ff0hLwS1T01LnOejUmgfQa4reryVHOR30-Ndxa_MGZLxgH2T4BXIQHubkfisYb8oGUGDvbLDn2GStJ1RLbUx8w22004VK9GWWISbmyzkZgD82EtRuvYevo0M8_Rr7CvELVBiINAvJY3jG0LIfYGc4i-1NxWykg0y-1Pze" 
                  alt="Bio-Shield AM capsules"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h4 onClick={() => setPage('product')} className="font-headline-md text-primary text-xl cursor-pointer hover:text-secondary transition-colors">Bio-Shield AM</h4>
                  <span className="text-on-surface-variant font-bold">$68.00</span>
                </div>
                <p className="text-on-surface-variant font-body-md">Advanced Metabolic &amp; Immune Catalyst</p>
                <button 
                  onClick={() => handleProductAction({
                    name: 'BIO-SHIELD AM',
                    price: 68.0,
                    desc: 'Advanced Metabolic & Immune Catalyst',
                    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuhwRbIhs20QeFamxFS07jqbIvwXjt3KBiDQLuMIFVPHtz3W3Ox3WU2YTSpyy4oglO1i-6qDMM9sLs9dG8HwMCYb8qS_Akpi35k51gx-2Ff0hLwS1T01LnOejUmgfQa4reryVHOR30-Ndxa_MGZLxgH2T4BXIQHubkfisYb8oGUGDvbLDn2GStJ1RLbUx8w22004VK9GWWISbmyzkZgD82EtRuvYevo0M8_Rr7CvELVBiINAvJY3jG0LIfYGc4i-1NxWykg0y-1Pze'
                  })}
                  className="w-full mt-4 py-3 border border-primary text-primary rounded-full hover:bg-primary hover:text-on-primary transition-all active:scale-[0.98] cursor-pointer"
                >
                  ADD TO PROTOCOL
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Science Block */}
      <section className="py-32 bg-primary text-on-primary overflow-hidden relative pb-48">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-20 items-center relative z-10">
          <div className="space-y-8">
            <span className="text-secondary-fixed font-label-sm tracking-widest uppercase">The Methodology</span>
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg">Clinically Proven. Human Optimized.</h2>
            <p className="text-on-primary/70 font-body-lg">
              We don't believe in "generalized wellness." Our labs utilize proprietary chromatography to ensure every batch meets a pharmaceutical-grade standard of purity and bioavailability.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded-full border border-secondary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'wght' 700" }}>check</span>
                </div>
                <div>
                  <h5 className="font-headline-md text-lg">Third-Party Verification</h5>
                  <p className="text-on-primary/60">Every batch is tested for heavy metals, potency, and purity by ISO-accredited labs.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded-full border border-secondary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'wght' 700" }}>check</span>
                </div>
                <div>
                  <h5 className="font-headline-md text-lg">Bio-Identical Sourcing</h5>
                  <p className="text-on-primary/60">We use only molecules that your body recognizes and can utilize immediately.</p>
                </div>
              </li>
            </ul>
            <button className="bg-secondary text-on-secondary px-8 py-4 rounded-full font-label-sm text-label-sm hover:scale-105 transition-transform cursor-pointer">
              READ OUR WHITE PAPER
            </button>
          </div>
          
          <div className="relative">
            <div className="flex flex-col items-center justify-center gap-8 relative">
              <div className="glass-card p-1 bg-white/10 rounded-[40px] border border-white/20 w-full aspect-square flex items-center justify-center overflow-hidden relative">
                <img 
                  className="w-auto h-[80%] md:h-[85%] lg:h-[95%] max-w-[90%] object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-105 scale-[1.05]" 
                  alt="Premium wellness supplement bottle" 
                  src="/novasupplement.png" 
                />
              </div>
              <div className="glass-card p-8 rounded-3xl border border-white/20 shadow-2xl space-y-4 w-full md:max-w-[280px] md:absolute md:-left-12 md:bottom-8 bg-white/90">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-display-lg text-primary">14+</span>
                  <span className="text-label-sm text-on-surface-variant font-bold">CLINICAL TRIALS</span>
                </div>
                <p className="text-on-surface-variant text-sm font-medium">Ongoing research partnerships with leading global bio-labs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface">
        <div className="max-w-4xl mx-auto text-center space-y-8 glass-card border border-outline-variant/30 p-16 rounded-[48px]">
          <h2 className="font-display-lg text-display-lg-mobile md:text-headline-md text-primary">Join the Lumina Collective</h2>
          <p className="text-on-surface-variant font-body-lg">Get early access to clinical findings, new protocols, and exclusive product drops.</p>
          <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              className="flex-1 bg-white border border-outline-variant rounded-full px-6 py-4 focus:ring-secondary focus:border-secondary transition-all outline-none" 
              placeholder="Your Email Address" 
              type="email" 
            />
            <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-label-sm hover:opacity-90 active:scale-95 transition-all cursor-pointer">
              SUBSCRIBE
            </button>
          </form>
          <p className="text-label-sm text-on-surface-variant/50">Scientific updates, once a month. No fluff.</p>
        </div>
      </section>
    </div>
  );
}
