interface FooterProps {
  setPage: (page: 'home' | 'shop' | 'product' | 'dashboard' | 'checkout' | 'admin') => void;
}

export default function Footer({ setPage }: FooterProps) {
  return (
    <footer className="bg-[#091426] text-white pt-20 pb-12 border-t border-white/10 w-full relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Info & Mission */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setPage('home')}>
              <span className="material-symbols-outlined text-secondary text-3xl" style={{ fontVariationSettings: "'wght' 600" }}>biotech</span>
              <h3 className="font-display-lg text-2xl tracking-tighter text-white font-bold">LUMINA</h3>
            </div>
            
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Clinical-grade formulations engineered for human optimization, cellular longevity, and cognitive precision. Developed in ISO-accredited bio-labs.
            </p>

            {/* Badges / Certification Pills */}
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-white/80">
                <span className="material-symbols-outlined text-secondary text-sm">verified</span>
                ISO 17025 Certified
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-white/80">
                <span className="material-symbols-outlined text-secondary text-sm">eco</span>
                100% Bio-Identical
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-white/80">
                <span className="material-symbols-outlined text-secondary text-sm">science</span>
                Third-Party Tested
              </span>
            </div>
          </div>

          {/* Core Formulations Column */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm tracking-wider uppercase text-white/90">Formulations</h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li>
                <button onClick={() => setPage('shop')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Male Enhancement
                </button>
              </li>
              <li>
                <button onClick={() => setPage('shop')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Cognitive Nootropics
                </button>
              </li>
              <li>
                <button onClick={() => setPage('shop')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Cellular Regeneration
                </button>
              </li>
              <li>
                <button onClick={() => setPage('shop')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Gut & Immune Blend
                </button>
              </li>
              <li>
                <button onClick={() => setPage('shop')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Sleep & Rest Complex
                </button>
              </li>
              <li>
                <button onClick={() => setPage('shop')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Cardiovascular Shield
                </button>
              </li>
            </ul>
          </div>

          {/* Science & Methodology Column */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm tracking-wider uppercase text-white/90">Methodology</h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li>
                <button onClick={() => setPage('home')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Clinical Trials & Data
                </button>
              </li>
              <li>
                <button onClick={() => setPage('home')} className="hover:text-white transition-colors cursor-pointer text-left">
                  White Papers & Studies
                </button>
              </li>
              <li>
                <button onClick={() => setPage('home')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Chromatography Standard
                </button>
              </li>
              <li>
                <button onClick={() => setPage('dashboard')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Subscription Protocols
                </button>
              </li>
              <li>
                <button onClick={() => setPage('shop')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Lab COA Verification
                </button>
              </li>
            </ul>
          </div>

          {/* Account & Support Column */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm tracking-wider uppercase text-white/90">Customer Portal</h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li>
                <button onClick={() => setPage('dashboard')} className="hover:text-white transition-colors cursor-pointer text-left">
                  My Protocol Stack
                </button>
              </li>
              <li>
                <button onClick={() => setPage('dashboard')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Track Deliveries
                </button>
              </li>
              <li>
                <button onClick={() => setPage('checkout')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Express Checkout
                </button>
              </li>
              <li>
                <button onClick={() => setPage('admin')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Admin Dashboard
                </button>
              </li>
              <li>
                <a href="mailto:support@luminalabs.com" className="hover:text-white transition-colors cursor-pointer text-left block">
                  Contact Science Team
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* FDA Disclaimer Box */}
        <div className="py-8 border-b border-white/10 text-xs text-white/40 leading-relaxed text-center md:text-left">
          <p>
            *FDA Disclaimer: These statements have not been evaluated by the Food and Drug Administration. Lumina products are not intended to diagnose, treat, cure, or prevent any disease. Consult your physician before starting any health protocol.
          </p>
        </div>

        {/* Copyright & Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} LUMINA Bio-Labs Inc. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button onClick={() => setPage('home')} className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <button onClick={() => setPage('home')} className="hover:text-white transition-colors cursor-pointer">
              Terms of Service
            </button>
            <button onClick={() => setPage('home')} className="hover:text-white transition-colors cursor-pointer">
              Medical Disclaimer
            </button>
            <button onClick={() => setPage('home')} className="hover:text-white transition-colors cursor-pointer">
              Cookie Preferences
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
