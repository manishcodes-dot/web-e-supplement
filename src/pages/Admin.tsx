import { useState, useEffect } from 'react';

interface AdminProps {
  setPage: (page: 'home' | 'shop' | 'product' | 'dashboard' | 'checkout' | 'admin') => void;
}

export default function Admin({ setPage }: AdminProps) {
  const [animateBars, setAnimateBars] = useState(false);

  useEffect(() => {
    // Trigger bar height animation shortly after mount
    const timer = setTimeout(() => {
      setAnimateBars(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  const barData = [
    { label: 'Jan', val: '80%', price: '$12k', height: 'h-[40%]' },
    { label: 'Feb', val: '75%', price: '$18k', height: 'h-[60%]' },
    { label: 'Mar', val: '90%', price: '$24k', height: 'h-[55%]' },
    { label: 'Apr', val: '60%', price: '$16k', height: 'h-[70%]' },
    { label: 'May', val: '95%', price: '$32k', height: 'h-[85%]' },
    { label: 'Jun', val: '100%', price: '$41k', height: 'h-[95%]' }
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-background text-on-surface">
      {/* Sidebar Navigation */}
      <aside className="hidden md:flex flex-col w-72 bg-surface-container-lowest border-r border-outline-variant/30 z-50">
        <div className="p-8">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setPage('home')}>
            <span className="material-symbols-outlined text-primary text-3xl">biotech</span>
            <h1 className="font-display-lg text-headline-md tracking-tighter text-primary">LUMINA</h1>
          </div>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 overflow-y-auto custom-scrollbar">
          <p className="px-4 py-2 text-label-sm font-label-sm text-on-surface-variant/50 uppercase">Core Management</p>
          <button 
            onClick={() => setPage('admin')}
            className="w-full flex items-center gap-4 px-4 py-3 rounded-xl bg-primary text-on-primary transition-all shadow-lg text-left cursor-pointer"
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-label-sm">Command Center</span>
          </button>
          <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container transition-colors text-left cursor-pointer">
            <span className="material-symbols-outlined">monitoring</span>
            <span className="font-label-sm">Analytics</span>
          </button>
          <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container transition-colors text-left cursor-pointer">
            <span className="material-symbols-outlined">inventory_2</span>
            <span className="font-label-sm">Inventory</span>
          </button>
          <button 
            onClick={() => setPage('dashboard')}
            className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container transition-colors text-left cursor-pointer"
          >
            <span className="material-symbols-outlined">shopping_bag</span>
            <span className="font-label-sm">Orders</span>
          </button>
          
          <div className="pt-8 px-4">
            <p className="py-2 text-label-sm font-label-sm text-on-surface-variant/50 uppercase">Operations</p>
          </div>
          <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container transition-colors text-left cursor-pointer">
            <span className="material-symbols-outlined">science</span>
            <span className="font-label-sm">R&D Batching</span>
          </button>
          <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container transition-colors text-left cursor-pointer">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-label-sm">System Settings</span>
          </button>
        </nav>
        
        <div className="p-6">
          <div className="bg-surface-container-low rounded-2xl p-4 flex items-center gap-4 border border-outline-variant/20">
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-surface-container-high">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9kXU5s7S27xwDDPg3DG87YKETxE9JEGlK5UqhJDKOUOV5jAEF2xdURz1KjZqMrlRz13bN2f9C-z-TrQNsGvUkTdb1HG83bxMHcuPk0_TfDwZu6hFwqW10J7xJR0PkXVPPnl6MTP9HkwYFUJRFxJ--FDMSbzN5hioprf2lw-biS_L6WewLO73usxXJDJHdfgPpZnWt7QPq_eNO1x4RnprtWXZqSenEi26c-dCQhhNiQhZ0h5XxHlLRTDdREMAzfz1NmlDCzs7tcuK3" 
                alt="Dr. Aris Thorne"
              />
            </div>
            <div className="flex-1 min-w-0 text-left">
              <p className="font-label-sm text-on-surface truncate font-bold text-sm">Dr. Aris Thorne</p>
              <p className="text-[10px] text-on-surface-variant">Chief Operations</p>
            </div>
            <span 
              onClick={() => setPage('home')}
              className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors"
            >
              logout
            </span>
          </div>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="flex-1 h-screen overflow-y-auto relative px-margin-mobile md:px-margin-desktop py-8 lg:py-12">
        
        {/* Header Area */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div className="text-left">
            <h2 className="font-display-lg text-display-lg-mobile md:text-headline-md text-primary mb-1">Operational Overview</h2>
            <p className="text-on-surface-variant font-body-md">Live performance metrics for Lumina Biotech HQ.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="bg-surface-container-lowest border border-outline-variant/30 px-5 py-2.5 rounded-full font-label-sm text-on-surface flex items-center gap-2 hover:bg-surface-container transition-all cursor-pointer">
              <span className="material-symbols-outlined text-lg">calendar_today</span>
              Last 30 Days
            </button>
            <button className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-label-sm flex items-center gap-2 shadow-lg shadow-primary/25 active:scale-95 transition-all cursor-pointer">
              <span className="material-symbols-outlined text-lg">add</span>
              Generate Report
            </button>
          </div>
        </header>

        {/* KPI Bento Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-12">
          {/* KPI Card 1 */}
          <div className="bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/20 shadow-sm hover:shadow-md hover:translate-y-[-2px] transition-all group text-left">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-surface-container-low rounded-2xl group-hover:bg-primary group-hover:text-on-primary transition-colors text-primary">
                <span className="material-symbols-outlined block">payments</span>
              </div>
              <span className="text-secondary font-label-sm flex items-center bg-secondary/10 px-2 py-1 rounded-lg">
                <span className="material-symbols-outlined text-sm mr-1">trending_up</span>
                12.4%
              </span>
            </div>
            <p className="text-on-surface-variant font-label-sm uppercase tracking-wider mb-1">Total Revenue</p>
            <h3 className="font-display-lg text-headline-md text-primary font-bold">$412,890.00</h3>
          </div>

          {/* KPI Card 2 */}
          <div className="bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/20 shadow-sm hover:shadow-md hover:translate-y-[-2px] transition-all group text-left">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-surface-container-low rounded-2xl group-hover:bg-primary group-hover:text-on-primary transition-colors text-primary">
                <span className="material-symbols-outlined block">group</span>
              </div>
              <span className="text-secondary font-label-sm flex items-center bg-secondary/10 px-2 py-1 rounded-lg">
                <span className="material-symbols-outlined text-sm mr-1">trending_up</span>
                8.1%
              </span>
            </div>
            <p className="text-on-surface-variant font-label-sm uppercase tracking-wider mb-1">Active Subscribers</p>
            <h3 className="font-display-lg text-headline-md text-primary font-bold">12,402</h3>
          </div>

          {/* KPI Card 3 */}
          <div className="bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/20 shadow-sm hover:shadow-md hover:translate-y-[-2px] transition-all group text-left">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-surface-container-low rounded-2xl group-hover:bg-primary group-hover:text-on-primary transition-colors text-primary">
                <span className="material-symbols-outlined block">shopping_cart</span>
              </div>
              <span className="text-error font-label-sm flex items-center bg-error/10 px-2 py-1 rounded-lg text-red-600">
                <span className="material-symbols-outlined text-sm mr-1">trending_down</span>
                2.3%
              </span>
            </div>
            <p className="text-on-surface-variant font-label-sm uppercase tracking-wider mb-1">Pending Orders</p>
            <h3 className="font-display-lg text-headline-md text-primary font-bold text-red-600">843</h3>
          </div>

          {/* KPI Card 4 */}
          <div className="bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/20 shadow-sm hover:shadow-md hover:translate-y-[-2px] transition-all group text-left">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-surface-container-low rounded-2xl group-hover:bg-primary group-hover:text-on-primary transition-colors text-primary">
                <span className="material-symbols-outlined block">inventory</span>
              </div>
              <span className="text-on-surface-variant font-label-sm flex items-center bg-surface-container/50 px-2 py-1 rounded-lg font-bold">
                STABLE
              </span>
            </div>
            <p className="text-on-surface-variant font-label-sm uppercase tracking-wider mb-1">Inventory Health</p>
            <h3 className="font-display-lg text-headline-md text-primary font-bold">98.2%</h3>
          </div>
        </section>

        {/* Charts & Visualization Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-12">
          
          {/* Revenue Chart */}
          <div className="lg:col-span-8 bg-surface-container-lowest rounded-[32px] p-8 border border-outline-variant/20 shadow-sm overflow-hidden flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <div className="text-left">
                <h4 className="font-headline-md text-primary text-xl">Revenue Projection</h4>
                <p className="text-on-surface-variant text-sm">Monthly performance vs Clinical Launch goals.</p>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-secondary"></span>
                  <span className="text-xs text-on-surface-variant">Actual</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-primary/20 border border-primary/40"></span>
                  <span className="text-xs text-on-surface-variant">Goal</span>
                </div>
              </div>
            </div>
            
            {/* Chart Bars */}
            <div className="flex-1 min-h-[300px] flex items-end justify-between gap-4 pt-4">
              {barData.map((bar, idx) => (
                <div key={idx} className="flex-1 bg-surface-container-low rounded-t-xl h-[90%] hover:bg-surface-container-high transition-colors relative group">
                  <div 
                    className="absolute bottom-0 left-0 right-0 bg-secondary rounded-t-xl transition-all duration-[1200ms] ease-out group-hover:opacity-90"
                    style={{ 
                      height: animateBars ? bar.val : '0%',
                      transitionDelay: `${idx * 100}ms`
                    }}
                  ></div>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md z-10">
                    {bar.price}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between mt-4 text-[10px] text-on-surface-variant font-medium uppercase tracking-widest px-1">
              {barData.map((bar, idx) => (
                <span key={idx}>{bar.label}</span>
              ))}
            </div>
          </div>

          {/* Order Stream Activity */}
          <div className="lg:col-span-4 bg-primary text-on-primary rounded-[32px] p-8 border border-primary/20 shadow-xl flex flex-col text-left justify-between min-h-[400px]">
            <div>
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-headline-md text-on-primary text-xl">Order Stream</h4>
                <span className="material-symbols-outlined text-secondary animate-pulse">sensors</span>
              </div>
              
              <div className="space-y-6 overflow-y-auto max-h-[300px] pr-2 custom-scrollbar text-left">
                <div className="flex gap-4 items-start border-l border-on-primary/10 pl-4 pb-4">
                  <div className="mt-1 w-2 h-2 rounded-full bg-secondary-fixed shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-white">New Subscription: Lumen+ Bundle</p>
                    <p className="text-xs text-on-primary/60">Verified Order #9021 • 2m ago</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start border-l border-on-primary/10 pl-4 pb-4">
                  <div className="mt-1 w-2 h-2 rounded-full bg-secondary-fixed shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-white">Inventory Alert: NMN 500mg Low</p>
                    <p className="text-xs text-on-primary/60">Auto-restock triggered • 14m ago</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start border-l border-on-primary/10 pl-4 pb-4">
                  <div className="mt-1 w-2 h-2 rounded-full bg-on-primary/30 shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-white">Batch Quality Certified: B-992</p>
                    <p className="text-xs text-on-primary/60">Lab Approval Stamp • 1h ago</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start border-l border-on-primary/10 pl-4">
                  <div className="mt-1 w-2 h-2 rounded-full bg-secondary-fixed shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-white">Recurring Revenue Milestone</p>
                    <p className="text-xs text-on-primary/60">$400k MRR exceeded • 3h ago</p>
                  </div>
                </div>
              </div>
            </div>
            
            <button className="mt-8 w-full py-4 border border-on-primary/20 rounded-2xl font-label-sm text-sm hover:bg-on-primary/5 transition-colors cursor-pointer text-white">
              View Full Ledger
            </button>
          </div>
        </section>

        {/* Table Section: Inventory Status */}
        <section className="bg-surface-container-lowest rounded-[32px] border border-outline-variant/20 shadow-sm overflow-hidden text-left mb-12">
          <div className="p-8 border-b border-outline-variant/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h4 className="font-headline-md text-primary text-xl">Critical Inventory Status</h4>
              <p className="text-on-surface-variant text-sm">Tracking raw biological precursors and finished stock.</p>
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">search</span>
                <input className="w-full bg-surface-container-low border-none rounded-full py-2.5 pl-10 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Search batches..." type="text"/>
              </div>
              <button className="p-2.5 rounded-full bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-on-surface-variant block">filter_list</span>
              </button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-surface-container-low/50">
                  <th className="px-8 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest">Product / Precursor</th>
                  <th className="px-8 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest">Category</th>
                  <th className="px-8 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest">Stock Level</th>
                  <th className="px-8 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest">Batch Integrity</th>
                  <th className="px-8 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest">Status</th>
                  <th className="px-8 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                
                {/* Precursor row 1 */}
                <tr className="hover:bg-surface-container-low/30 transition-colors">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">science</span>
                      </div>
                      <div>
                        <p className="font-semibold text-on-surface">Lumina Focus Precursor</p>
                        <p className="text-xs text-on-surface-variant">Batch ID: LUM-982</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-on-surface-variant text-sm">Bio-Active Powder</td>
                  <td className="px-8 py-6">
                    <div className="w-full max-w-[120px] bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                      <div className="bg-secondary h-full" style={{ width: '82%' }}></div>
                    </div>
                    <p className="text-[10px] text-on-surface-variant mt-1">82% (High)</p>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-xs font-semibold text-secondary flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                      Clinical Pass
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold">IN STOCK</span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">more_vert</span>
                  </td>
                </tr>

                {/* Precursor row 2 */}
                <tr className="hover:bg-surface-container-low/30 transition-colors">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">pill</span>
                      </div>
                      <div>
                        <p className="font-semibold text-on-surface">Pure NMN Restore</p>
                        <p className="text-xs text-on-surface-variant">Batch ID: NMN-112</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-on-surface-variant text-sm">Supplement</td>
                  <td className="px-8 py-6">
                    <div className="w-full max-w-[120px] bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                      <div className="bg-red-500 h-full" style={{ width: '14%' }}></div>
                    </div>
                    <p className="text-[10px] text-red-500 mt-1 font-bold">14% (Critical)</p>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-xs font-semibold text-secondary flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                      Clinical Pass
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <span className="px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-semibold">REORDERING</span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">more_vert</span>
                  </td>
                </tr>

                {/* Precursor row 3 */}
                <tr className="hover:bg-surface-container-low/30 transition-colors">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">biotech</span>
                      </div>
                      <div>
                        <p className="font-semibold text-on-surface">Serum 01 Activator</p>
                        <p className="text-xs text-on-surface-variant">Batch ID: SRM-443</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-on-surface-variant text-sm">Topical Base</td>
                  <td className="px-8 py-6">
                    <div className="w-full max-w-[120px] bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                      <div className="bg-primary/50 h-full" style={{ width: '45%' }}></div>
                    </div>
                    <p className="text-[10px] text-on-surface-variant mt-1">45% (Moderate)</p>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-xs font-semibold text-on-tertiary-container flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>pending</span>
                      Lab Pending
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-semibold">STAGED</span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">more_vert</span>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
          
          <div className="px-8 py-6 bg-surface-container-low/50 border-t border-outline-variant/20 flex justify-between items-center">
            <p className="text-xs text-on-surface-variant">Showing 1-3 of 24 operational assets</p>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-surface-container transition-colors disabled:opacity-30 cursor-pointer" disabled>
                <span className="material-symbols-outlined text-sm">chevron_left</span>
              </button>
              <button className="w-8 h-8 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-surface-container transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </button>
            </div>
          </div>
        </section>
        
        {/* Footer Anchor */}
        <footer className="mt-24 pb-12 border-t border-outline-variant/20 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-label-sm text-on-surface-variant text-sm">© 2024 LUMINA BIOTECH. CLINICALLY PROVEN.</p>
          <div className="flex gap-8">
            <a className="text-on-surface-variant font-label-sm hover:text-primary transition-colors text-sm" href="#">Systems Health</a>
            <a className="text-on-surface-variant font-label-sm hover:text-primary transition-colors text-sm" href="#">API Docs</a>
            <a className="text-on-surface-variant font-label-sm hover:text-primary transition-colors text-sm" href="#">Support</a>
          </div>
        </footer>

      </main>
    </div>
  );
}
