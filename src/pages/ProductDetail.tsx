import { useState, useEffect } from 'react';

interface ProductDetailProps {
  setPage: (page: 'home' | 'shop' | 'product' | 'dashboard' | 'checkout' | 'admin') => void;
  addToCart: (item: any) => void;
}

export default function ProductDetail({ setPage, addToCart }: ProductDetailProps) {
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowStickyCta(true);
      } else {
        setShowStickyCta(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBuy = (isSubscription: boolean) => {
    addToCart({
      name: 'ETHOS VITALITY NO. 1' + (isSubscription ? ' (SUBSCRIBER)' : ''),
      price: isSubscription ? 157.25 : 185.00,
      desc: isSubscription ? 'Monthly Subscription (Saved 15%)' : '30-Day Protocol',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAT_dPgmRf_Dc0PZljuajwGgGJKZWqcMmJaLIHUrXcEE3Z1a54ukI3LxufpDjMqQTq_uYCW-ZCa0SzrXa296VyXG64xhoEJPiRCBed_4YGBDOFea80gD9HpyktfQLgDEermpIRnlF6Wd1m_895O278FC0-C2t3ZY8H1e2vGs7lY7KjKYswrXZHTfsBQmMjmbxVbHOTFpK58A03Q31FgZq82AvRFswrb_-sEseJA5cL8kKV6z6wEI6Hd2hl7pt8ht_LgvW0fd2x_LCLG'
    });
    setPage('checkout');
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-32 pb-24 px-margin-mobile md:px-[15%] max-w-[1600px] mx-auto">
        
        {/* Hero Product Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
          
          {/* Asymmetric Editorial Gallery */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <div className="col-span-2 aspect-[4/5] rounded-3xl overflow-hidden medicine-shadow group relative">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT_dPgmRf_Dc0PZljuajwGgGJKZWqcMmJaLIHUrXcEE3Z1a54ukI3LxufpDjMqQTq_uYCW-ZCa0SzrXa296VyXG64xhoEJPiRCBed_4YGBDOFea80gD9HpyktfQLgDEermpIRnlF6Wd1m_895O278FC0-C2t3ZY8H1e2vGs7lY7KjKYswrXZHTfsBQmMjmbxVbHOTFpK58A03Q31FgZq82AvRFswrb_-sEseJA5cL8kKV6z6wEI6Hd2hl7pt8ht_LgvW0fd2x_LCLG" 
                alt="Ethos Vitality bottle"
              />
            </div>
            <div className="aspect-square rounded-3xl overflow-hidden medicine-shadow">
              <img 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3aCPx3C5Kzz8MpgPjlCjdM8b7SXO96_AmkQ66cs8QcMz7EgcFML6CFS82gOYSiO-RJz8gGnmXC_wShNCy-LbJ4q1tCoLFJsfvWFyzsG5_yIyFULKSjN9m3kXWwt2rfmBq0WQTm8LJqofWV-H3wMo45WUxK5HtimrCrcnJ1iNK-pJ9L_DIicLuV8JDc_U3pQgXPmEnEOo88dD1O2weec_NwtVJ8XHcuSZouwPPi2D_enHrIaexzxc5njGQSZ1HjuOnbj-hJjbLtLP" 
                alt="Crystalline powder close-up"
              />
            </div>
            <div className="aspect-square rounded-3xl overflow-hidden medicine-shadow">
              <img 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU4tlmCY3nNm-MkCmMKIx-h__IX_rhcIySFw-NJW6LfJvdv3IvZ8luAQ48E26pWt5m4MlwRX1alyqDL_naI_Cf-WKhcK5tlRSBP1tGnVlPzp8cq24Gv4cJnHB5Tj1RlbQJBSPf_2WGw7zzpE3DTZTNFae2-TdgE56MFxg97ruApC-QZaW0RsU-Q7lY58BldiI5fHFXeiVjHUb1LXMh4LYyahktYZOEjVWvCSrpTwcVkMtP6Jo9nBIQx1L-VNhUcCA03vjiM8vhzS9t" 
                alt="Person taking capsule with glass of water"
              />
            </div>
          </div>
          
          {/* Product Info */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="mb-4 flex items-center gap-2">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full font-label-sm text-[10px] tracking-widest uppercase">Scientifically Validated</span>
              <div className="flex text-secondary">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
            </div>
            
            <h2 className="font-display-lg text-display-lg text-primary mb-4">Ethos Vitality No. 1</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
              A comprehensive cellular rejuvenation protocol engineered with patented NAD+ precursors and bio-optimized antioxidants. Designed for cognitive longevity and metabolic efficiency.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4 p-4 border border-outline-variant/30 rounded-2xl bg-white medicine-shadow">
                <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">dns</span>
                </div>
                <div>
                  <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">Key Benefit</p>
                  <p className="font-headline-md text-body-md text-primary">DNA Repair &amp; Longevity</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 border border-outline-variant/30 rounded-2xl bg-white medicine-shadow">
                <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">psychology</span>
                </div>
                <div>
                  <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">Focus Area</p>
                  <p className="font-headline-md text-body-md text-primary">Cognitive Performance</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-end mb-2">
                <span className="font-display-lg text-display-lg-mobile text-primary">$185.00</span>
                <span className="text-on-surface-variant font-label-sm text-label-sm mb-2">30-Day Supply</span>
              </div>
              <button 
                onClick={() => handleBuy(false)}
                className="w-full py-5 bg-primary text-on-primary rounded-full font-label-sm text-label-sm hover:opacity-90 transition-all active:scale-95 cursor-pointer shadow-lg"
              >
                ADD TO PROTOCOL
              </button>
              <button 
                onClick={() => handleBuy(true)}
                className="w-full py-5 border border-primary text-primary rounded-full font-label-sm text-label-sm hover:bg-surface-container-low transition-all cursor-pointer"
              >
                SUBSCRIPTION (SAVE 15%)
              </button>
            </div>
          </div>
        </section>

        {/* Bento Grid: Science & Nutrition */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h3 className="font-display-lg text-display-lg-mobile mb-4 text-primary">The Science of Vitality</h3>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Transparency in every molecule. Our bento grid breakdown highlights the clinical precision of our formulation.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {/* Clinical Composition */}
            <div className="md:col-span-2 lg:col-span-2 bg-white rounded-3xl p-10 border border-outline-variant/30 medicine-shadow flex flex-col justify-between">
              <h4 className="font-headline-md text-headline-md mb-8">Clinical Composition</h4>
              <div className="space-y-6 flex-grow">
                <div className="flex justify-between items-center pb-4 border-b border-outline-variant/20">
                  <span className="text-on-surface-variant">Nicotinamide Riboside</span>
                  <span className="font-bold text-secondary">300mg</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-outline-variant/20">
                  <span className="text-on-surface-variant">Pterostilbene</span>
                  <span className="font-bold text-secondary">50mg</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-outline-variant/20">
                  <span className="text-on-surface-variant">Trans-Resveratrol</span>
                  <span className="font-bold text-secondary">150mg</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-outline-variant/20">
                  <span className="text-on-surface-variant">Alpha GPC</span>
                  <span className="font-bold text-secondary">250mg</span>
                </div>
              </div>
              <p className="text-label-sm font-label-sm text-on-surface-variant mt-8">* Daily Value not established. Pharm grade 99% purity.</p>
            </div>
            
            {/* Usage Protocol */}
            <div className="md:col-span-2 lg:col-span-2 bg-secondary text-on-secondary rounded-3xl p-8 flex flex-col justify-between min-h-[300px]">
              <div>
                <span className="material-symbols-outlined text-4xl mb-4">schedule</span>
                <h4 className="font-headline-md text-headline-md mb-2">Usage Protocol</h4>
                <p className="opacity-80">One capsule daily, preferably in the morning with a light meal for optimal absorption.</p>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <span className="material-symbols-outlined text-sm">check_circle</span>
                <span className="text-label-sm font-label-sm">Recommended for Adults 25+</span>
              </div>
            </div>
            
            {/* Reference Card */}
            <div className="md:col-span-2 lg:col-span-2 bg-surface-container-high rounded-3xl p-8 medicine-shadow flex flex-col justify-between">
              <div>
                <h4 className="font-headline-md text-body-md text-primary mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined">menu_book</span> Research Journal
                </h4>
                <p className="text-body-md text-on-surface-variant mb-4 italic">"Sirtuin activation through NAD+ augmentation: A clinical pathway to cellular longevity."</p>
              </div>
              <a className="text-primary font-bold text-label-sm underline underline-offset-4 mt-4 block" href="#">Read the Study →</a>
            </div>
            
            {/* Certifications & Visual */}
            <div className="md:col-span-1 bg-white rounded-3xl p-6 border border-outline-variant/30 medicine-shadow flex flex-col items-center justify-center text-center">
              <span className="material-symbols-outlined text-secondary text-4xl mb-2">verified</span>
              <p className="font-label-sm text-label-sm text-primary uppercase">GMP Certified</p>
            </div>
            
            <div className="md:col-span-1 bg-white rounded-3xl p-6 border border-outline-variant/30 medicine-shadow flex flex-col items-center justify-center text-center">
              <span className="material-symbols-outlined text-secondary text-4xl mb-2">science</span>
              <p className="font-label-sm text-label-sm text-primary uppercase">3rd Party Tested</p>
            </div>
            
            <div className="md:col-span-2 lg:col-span-4 relative rounded-3xl overflow-hidden medicine-shadow h-48 md:h-auto">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBn31AFM-bVi7-G9KFlYup-bgIHcWvNFIkzFuGzZESrH6TqtZgNUrIuaJbeaRwbUzbSWwpoDTVpwbmwhn5v3usffz3rqZqGgH1Dts55KU3rq74xCnXybbiz0GO-pazSuodT7Dn9rg5giS2Cz-NVfeLMx3wHfdxnHM0iUrixonZNe_V5riIpWdCZwlgaa1cWp85dC4GrE6RCl63qo3fmHmcBjUz6FQvSJZ_KPv6DO6QkGVO0BYe6-_91HrftcOhcpwuS4BvdcqQDKMir" 
                alt="Neural pathways abstraction"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white font-label-sm text-label-sm">Precision Wellness Systems</p>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Guide */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center mb-32">
          <div>
            <h3 className="font-display-lg text-display-lg-mobile mb-6 text-primary">Integration Guide</h3>
            <div className="space-y-12">
              <div className="flex gap-6">
                <span className="font-display-lg text-surface-dim text-4xl font-bold">01</span>
                <div>
                  <h5 className="font-headline-md text-body-lg mb-2">The Morning Ritual</h5>
                  <p className="text-on-surface-variant leading-relaxed">Prepare your cellular environment. Take one capsule with 8oz of spring water. Ideally consumed within 30 minutes of waking.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="font-display-lg text-surface-dim text-4xl font-bold">02</span>
                <div>
                  <h5 className="font-headline-md text-body-lg mb-2">Phase Synergies</h5>
                  <p className="text-on-surface-variant leading-relaxed">Combine with 15 minutes of direct sunlight and light physical movement to prime mitochondrial pathways.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="font-display-lg text-surface-dim text-4xl font-bold">03</span>
                <div>
                  <h5 className="font-headline-md text-body-lg mb-2">Deep Restoration</h5>
                  <p className="text-on-surface-variant leading-relaxed">Ethos Vitality works in the background during sleep. Maintain a consistent 7-9 hour circadian rhythm for peak effect.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-3xl overflow-hidden h-[600px] medicine-shadow relative">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-3seHJrgTOnIXZmHxw80PxXxf5gp5CFuCO3RKyS8Tf7Z1-FCbLaqAMk2WrRe8g3NdviPgc2mgj0lyeozQ5VNZ-FCX6qS_10LACEGYPUiTLJJGoqC086l6vibi3tuUg-zT7mfHdPZaO03U7qVo1Tc32R0ge2cWu_x4agQWkFa8q5kLFcLVAgGTNkkeg23lByW8Y0LWkFop9JLIFk62AlOb0l2f23txOtizBYT02qv2e4IhtbJUxwoPCxwP9Y2FlKoQUnGRExSOQNfS" 
              alt="Bedside water and supplement"
            />
            <div className="absolute bottom-10 left-10 p-8 glass-card rounded-2xl border border-white/20 max-w-sm bg-white/90">
              <p className="font-body-md text-primary italic">"Consistency is the catalyst for clinical outcomes. Every morning is a new opportunity for cellular renewal."</p>
              <p className="mt-4 font-label-sm text-label-sm text-on-surface-variant uppercase">— Dr. Aris Thorne, Lumina Bio</p>
            </div>
          </div>
        </section>

      </main>

      {/* Persistent Add to Cart Bar */}
      <div 
        className={`fixed bottom-0 left-0 right-0 bg-white border-t border-outline-variant/30 py-4 px-margin-mobile md:px-margin-desktop z-[90] transition-transform duration-500 shadow-2xl ${
          showStickyCta ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="max-w-container-max mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              className="w-12 h-12 rounded-lg object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLV7nwemuo2_gfgrLrS5P-gJ-I2DnXjP3KPCGDnS-ColBfbgX-rdY8ys2Mi2MtO0GbAw-LikNMx4Z1Ij1DwfFzdHVB7w6UR-O9171nvhyyn_4fwKnuVzahXUqgHTjkNWdb6-hNIqr5EMnCtKnDggcob_tfAxyFmjYWWu26zAtnYBt1GU2lU9n8XOTz-swK_sTxWKabkfpveWQ1HkC2LCrfXnW3WWBRXItT6ZVt2Xmu3AAE2kITMfM7puNuNClRVTIb3ylCUky84SiM" 
              alt="Miniature bottle"
            />
            <div>
              <p className="font-bold text-primary">Ethos Vitality No. 1</p>
              <p className="text-label-sm text-on-surface-variant">30 Day Protocol</p>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex flex-col text-right">
              <span className="text-label-sm text-on-surface-variant">Price</span>
              <span className="font-display-lg text-headline-md font-bold text-primary">$185.00</span>
            </div>
            <button 
              onClick={() => handleBuy(false)}
              className="bg-primary text-on-primary px-10 py-3 rounded-full font-label-sm text-label-sm active:scale-95 transition-all cursor-pointer shadow-lg"
            >
              ADD TO PROTOCOL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
