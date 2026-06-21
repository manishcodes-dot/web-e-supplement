
interface DashboardProps {
  setPage: (page: 'home' | 'shop' | 'product' | 'dashboard' | 'checkout' | 'admin') => void;
}

export default function Dashboard({ setPage }: DashboardProps) {
  return (
    <div className="flex min-h-screen bg-background text-on-surface">
      {/* Sidebar Navigation */}
      <aside className="w-72 bg-white border-r border-outline-variant/30 flex-col hidden md:flex sticky top-0 h-screen z-40">
        <div className="px-8 py-10">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setPage('home')}>
            <span className="material-symbols-outlined text-primary text-3xl">biotech</span>
            <h1 className="font-display-lg text-[24px] tracking-tighter text-primary">LUMINA</h1>
          </div>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <button 
            onClick={() => setPage('home')}
            className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container transition-all duration-200 text-left cursor-pointer"
          >
            <span className="material-symbols-outlined">home</span>
            <span className="font-label-sm text-label-sm">Home</span>
          </button>
          <button 
            onClick={() => setPage('dashboard')}
            className="w-full flex items-center gap-4 px-4 py-3 rounded-xl bg-primary text-on-primary shadow-lg shadow-primary/10 transition-all duration-200 text-left cursor-pointer"
          >
            <span className="material-symbols-outlined">monitoring</span>
            <span className="font-label-sm text-label-sm">Protocols</span>
          </button>
          <button 
            onClick={() => setPage('shop')}
            className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container transition-all duration-200 text-left cursor-pointer"
          >
            <span className="material-symbols-outlined">shopping_bag</span>
            <span className="font-label-sm text-label-sm">Shop</span>
          </button>
          <button 
            onClick={() => setPage('admin')}
            className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container transition-all duration-200 text-left cursor-pointer"
          >
            <span className="material-symbols-outlined">person</span>
            <span className="font-label-sm text-label-sm">Profile</span>
          </button>
        </nav>
        <div className="p-6 mt-auto">
          <div className="bg-surface-container rounded-2xl p-4 border border-outline-variant/20">
            <p className="font-label-sm text-label-sm text-on-surface-variant mb-2">Membership Status</p>
            <div className="flex items-center justify-between">
              <span className="font-headline-md text-sm text-primary uppercase tracking-widest">Platinum</span>
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="flex-1 overflow-x-hidden">
        {/* Header Section */}
        <header className="px-margin-mobile md:px-margin-desktop py-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h2 className="font-display-lg text-display-lg text-primary mb-2">Welcome, Julian.</h2>
            <p className="font-body-lg text-on-surface-variant max-w-xl">Your metabolic optimization protocol is currently in its peak phase. Clinical results indicate a 14% improvement in circadian alignment.</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-primary text-on-primary px-6 py-3 rounded-full font-label-sm text-label-sm flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all cursor-pointer shadow-lg">
              <span className="material-symbols-outlined text-[18px]">add</span>
              NEW CONSULTATION
            </button>
          </div>
        </header>

        {/* Bento Dashboard Grid */}
        <section className="px-margin-mobile md:px-margin-desktop pb-12 grid grid-cols-12 gap-gutter">
          
          {/* Primary Protocol Card */}
          <div className="col-span-12 lg:col-span-8 glass-card border border-outline-variant/20 rounded-3xl p-8 overflow-hidden relative group bg-white">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-secondary-fixed/20 rounded-full blur-3xl group-hover:bg-secondary-fixed/30 transition-colors duration-700"></div>
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-8 gap-4">
                <div>
                  <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full font-label-sm text-[10px] tracking-widest uppercase mb-4 inline-block">Active Protocol</span>
                  <h3 className="font-display-lg text-headline-md text-primary">Neuro-Metabolic Restoration v4.2</h3>
                </div>
                <div className="text-left sm:text-right">
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Day 42 of 90</p>
                  <div className="w-32 h-1 bg-surface-container rounded-full mt-2 overflow-hidden">
                    <div className="w-[46%] h-full bg-secondary"></div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-4 bg-white border border-outline-variant/10 rounded-2xl shadow-sm">
                  <span className="material-symbols-outlined text-primary mb-2">pill</span>
                  <p className="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-tighter">Current Stack</p>
                  <p className="font-headline-md text-lg text-primary">Lumina AM/PM</p>
                </div>
                <div className="p-4 bg-white border border-outline-variant/10 rounded-2xl shadow-sm">
                  <span className="material-symbols-outlined text-primary mb-2">biotech</span>
                  <p className="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-tighter">Bio-Marker Focus</p>
                  <p className="font-headline-md text-lg text-primary">Cortisol Rhythms</p>
                </div>
                <div className="p-4 bg-white border border-outline-variant/10 rounded-2xl shadow-sm">
                  <span className="material-symbols-outlined text-primary mb-2">calendar_today</span>
                  <p className="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-tighter">Next Milestone</p>
                  <p className="font-headline-md text-lg text-primary">Blood Labs: Oct 14</p>
                </div>
              </div>
            </div>
          </div>

          {/* Concierge / Support Card */}
          <div className="col-span-12 lg:col-span-4 bg-primary text-on-primary rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between min-h-[300px]">
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full border-2 border-secondary overflow-hidden bg-surface-container-low">
                  <img 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYVG0lRGBB0zqES09Osw3ECNkx5cEm-3RWHI2-ZGRpKZ5TuPRuokvlH5FIP8RxeDd4XkIeNsfZ_ae7zxf4b1lAvAh_m4c8eKPlw-XQSO4s3TJH2owPcdBE9Eqk6pdg4risD10g0wiDrrQYCdYDPk0Aahyp7BTSoAc-_YqijOzP5ST9mvcaphUiBURL3OEtl0FFo1ur-K8TyHwlA8yo1i3deRAAErHI-PJS_DqaykETXIFO6l153prsDEVt_mOF6zaQTkHZQ-aGLFhc" 
                    alt="Dr. Elena Vance"
                  />
                </div>
                <div>
                  <h4 className="font-headline-md text-lg text-white">Dr. Elena Vance</h4>
                  <p className="font-label-sm text-xs text-on-primary/60">Lead Wellness Architect</p>
                </div>
              </div>
              <p className="font-body-md text-on-primary/80 mb-8 italic">"Julian, your HRV data looks exceptional this morning. We've adjusted your PM supplement dosage to optimize for the deeper REM cycle you're approaching."</p>
            </div>
            <button className="w-full bg-on-primary text-primary py-4 rounded-xl font-label-sm text-label-sm hover:bg-secondary-fixed transition-colors active:scale-95 duration-200 cursor-pointer relative z-10">
              MESSAGE CONCIERGE
            </button>
            <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none translate-x-12 translate-y-12">
              <span className="material-symbols-outlined text-[180px]">dna</span>
            </div>
          </div>

          {/* Order Tracking Timeline */}
          <div className="col-span-12 bg-white border border-outline-variant/20 rounded-3xl p-8 mt-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-2">
              <h3 className="font-headline-md text-xl text-primary">Active Supply Logistics</h3>
              <span className="text-on-surface-variant font-label-sm text-xs">ORDER #LM-293848-X</span>
            </div>
            
            <div className="relative px-2 sm:px-8 py-4">
              <div className="absolute top-1/2 left-8 right-8 h-[2px] bg-surface-container -translate-y-1/2 z-0 hidden sm:block"></div>
              <div className="absolute top-1/2 left-8 w-[66%] h-[2px] bg-secondary -translate-y-1/2 z-0 hidden sm:block"></div>
              <div className="relative z-10 flex flex-col sm:flex-row justify-between gap-8 sm:gap-4">
                {/* Step 1 */}
                <div className="flex sm:flex-col items-center gap-4 sm:gap-2">
                  <div className="w-10 h-10 bg-secondary text-on-secondary rounded-full flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                  </div>
                  <div className="sm:text-center">
                    <p className="font-label-sm text-[11px] text-primary uppercase font-bold">Compounding</p>
                    <p className="text-[10px] text-on-surface-variant">Completed Oct 01</p>
                  </div>
                </div>
                {/* Step 2 */}
                <div className="flex sm:flex-col items-center gap-4 sm:gap-2">
                  <div className="w-10 h-10 bg-secondary text-on-secondary rounded-full flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                  </div>
                  <div className="sm:text-center">
                    <p className="font-label-sm text-[11px] text-primary uppercase font-bold">Quality Control</p>
                    <p className="text-[10px] text-on-surface-variant">Completed Oct 03</p>
                  </div>
                </div>
                {/* Step 3 */}
                <div className="flex sm:flex-col items-center gap-4 sm:gap-2">
                  <div className="w-12 h-12 bg-secondary-fixed text-on-secondary-fixed rounded-full flex items-center justify-center border-4 border-white shadow-xl shrink-0">
                    <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
                  </div>
                  <div className="sm:text-center">
                    <p className="font-label-sm text-[11px] text-primary uppercase font-bold">In Transit</p>
                    <p className="text-[10px] text-secondary font-bold">Expected Oct 06</p>
                  </div>
                </div>
                {/* Step 4 */}
                <div className="flex sm:flex-col items-center gap-4 sm:gap-2 opacity-40">
                  <div className="w-10 h-10 bg-surface-container text-on-surface-variant rounded-full flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">home_pin</span>
                  </div>
                  <div className="sm:text-center">
                    <p className="font-label-sm text-[11px] text-primary uppercase">Delivered</p>
                    <p className="text-[10px] text-on-surface-variant">Pending</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Past Protocols Table */}
          <div className="col-span-12 bg-white border border-outline-variant/20 rounded-3xl overflow-hidden mt-6">
            <div className="px-8 py-6 border-b border-outline-variant/10 flex justify-between items-center">
              <h3 className="font-headline-md text-xl text-primary">Protocol History</h3>
              <button className="text-secondary font-label-sm text-sm flex items-center gap-2 hover:underline cursor-pointer">
                View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-surface-container-low">
                    <th className="px-8 py-4 font-label-sm text-xs text-on-surface-variant uppercase tracking-widest">Protocol Name</th>
                    <th className="px-8 py-4 font-label-sm text-xs text-on-surface-variant uppercase tracking-widest">Duration</th>
                    <th className="px-8 py-4 font-label-sm text-xs text-on-surface-variant uppercase tracking-widest">Efficiency</th>
                    <th className="px-8 py-4 font-label-sm text-xs text-on-surface-variant uppercase tracking-widest">Status</th>
                    <th className="px-8 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10">
                  <tr className="hover:bg-background/50 transition-colors">
                    <td className="px-8 py-6">
                      <div className="font-headline-md text-base text-primary">Cellular Longevity S1</div>
                      <div className="text-xs text-on-surface-variant">Focus: NAD+ Supplementation</div>
                    </td>
                    <td className="px-8 py-6 font-body-md text-on-surface-variant">Jan - Mar 2024</td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                        <span className="font-headline-md text-sm text-secondary">94%</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className="px-3 py-1 bg-surface-container rounded-full text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">Archived</span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors cursor-pointer">download</button>
                    </td>
                  </tr>
                  <tr className="hover:bg-background/50 transition-colors">
                    <td className="px-8 py-6">
                      <div className="font-headline-md text-base text-primary">Adrenal Reset Protocol</div>
                      <div className="text-xs text-on-surface-variant">Focus: Stress Response</div>
                    </td>
                    <td className="px-8 py-6 font-body-md text-on-surface-variant">Apr - Jun 2024</td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                        <span className="font-headline-md text-sm text-secondary">88%</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className="px-3 py-1 bg-surface-container rounded-full text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">Archived</span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors cursor-pointer">download</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </section>
        
        {/* Footer */}
        <footer className="w-full pt-20 pb-32 px-margin-mobile md:px-margin-desktop border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 bg-surface-bright mt-12">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-2xl">biotech</span>
            <span className="font-display-lg text-lg text-primary tracking-tighter">LUMINA</span>
          </div>
          <div className="flex gap-8">
            <a className="font-body-md text-on-surface-variant hover:text-secondary transition-colors" href="#">Science</a>
            <a className="font-body-md text-on-surface-variant hover:text-secondary transition-colors" href="#">Sourcing</a>
            <a className="font-body-md text-on-surface-variant hover:text-secondary transition-colors" href="#">Terms</a>
            <a className="font-body-md text-on-surface-variant hover:text-secondary transition-colors" href="#">Privacy</a>
          </div>
          <p className="font-body-md text-on-surface-variant text-sm">© 2024 LUMINA BIOTECH. CLINICALLY PROVEN.</p>
        </footer>
      </main>
    </div>
  );
}
