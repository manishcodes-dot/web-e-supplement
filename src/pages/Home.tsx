import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HomeProps {
  setPage: (page: 'home' | 'shop' | 'product' | 'dashboard' | 'checkout' | 'admin') => void;
  setSelectedGoal: (goal: string) => void;
  addToCart: (item: any) => void;
}

const CORE_PRODUCTS = [
  {
    id: '1',
    name: 'Horsewood',
    price: 89.00,
    desc: 'Male Enhancement Formula',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBX8ieWWEase7Ck8vjwhGKzFmqn5Efr8bk3KQ5umsiY4TKluQi8bBUoYJjL9eFTq91GlTVQVDdn7ggveDeyQjC2k_2BsUIZienOG9MtW272BMu20jICVmLJiMs5e5McXDksH7KU3nf3xgQ6uoLgJaCVIzhHDkfvlxZVvePUNY2glv-A1JtF45C2The7Lfmo_jmBqiMqjcZmZ91NDVnCswp3tLZuA2YrrDK2t8N3T6qAoebsRxqC9py1g7BWsbiGzgBoDbsFEODKGItE',
    badge: 'POPULAR',
    badgeBg: 'bg-[#1a202c]'
  },
  {
    id: '2',
    name: 'Vivalis',
    price: 69.00,
    desc: 'Advanced Energy Formula',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIaeZT8HiZLICQn319EVwxq2_tDEtPWY9bt9vUPTEZS8mfym6zcHazg1-jHiQn0V11wPf8I51m_ii0okpSeTHKHrLLntG4ScNzmgPWNDQV51aPYCZs7pufwc05gtyWoVguNZxvFnn_ymhlDVB3uJxJQL9ZH9hZUZ0byKHx3uJpGwqZvpzNtJRixFE51kUMNKF5n5q-ibAPovkjyQytZ4WNZFU4-O_E_2xSz0bxJSR5uBTOvCnE6yirgWwP94A177QWR66sWQyWgVRR',
    badge: 'HOT',
    badgeBg: 'bg-[#ea580c]'
  },
  {
    id: '3',
    name: 'Prostate Max',
    price: 89.00,
    desc: 'Prostate Health Support',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuhwRbIhs20QeFamxFS07jqbIvwXjt3KBiDQLuMIFVPHtz3W3Ox3WU2YTSpyy4oglO1i-6qDMM9sLs9dG8HwMCYb8qS_Akpi35k51gx-2Ff0hLwS1T01LnOejUmgfQa4reryVHOR30-Ndxa_MGZLxgH2T4BXIQHubkfisYb8oGUGDvbLDn2GStJ1RLbUx8w22004VK9GWWISbmyzkZgD82EtRuvYevo0M8_Rr7CvELVBiINAvJY3jG0LIfYGc4i-1NxWykg0y-1Pze',
    badge: 'TOP RATED',
    badgeBg: 'bg-[#1a202c]'
  },
  {
    id: '4',
    name: 'Ethos Cellular',
    price: 124.00,
    desc: 'Cellular Regeneration Complex',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCX9xMSN0JCCcXEfo5w0324sNZKqDV2HxTTYpsDQ_OMbVatspjrZcxF9yNjXNRu0U_R9m6QXJJjJoCf7noQAUFLOHGWziQI35usImU-ZKI805MG5FYMHdhQ0va6jT3-jNJ8A7DgVyXgcy7ikECnCgGlJCjFBv3cjyPdKCtJRFMXLLp9qsy6M9rK3AozyG16cW-ZWc0o-jt8vV-2oZBBRNbJEnQZ10VnffMP_YYbGecisdSsCqhMdTr6oL1zurrK6ct4PKcMUTFAv3Qw',
    badge: 'ADVANCED',
    badgeBg: 'bg-[#0b1c30]'
  },
  {
    id: '5',
    name: 'Synaptic Optimizer',
    price: 78.00,
    desc: 'Neuroplasticity & Cognitive Clarity',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQm-HNAe67ZizCyObXbJA_YeAsUm1HUxeR-VHqFJA6ZYkS8cW6ZTT2_mJ_C5nA855fZReXdCtXn7WbWFoop0Z0rguz9StUiZQh-DiiuSCOHtwa4KEk8q99QTo_RsH6Np802g7rSw-pHi3fyd_WbYUcm9ezv8LMyT9vgTPXwyWBrIFonO151WOJ7WGqA0eHfBi7l5IjhZbPFf8RFrrP9SNrK6H-k4C-tcYy_0hCLlUJzTdypbb73Fkzogn4agMnOIULaoEXR1nN_oZD',
    badge: 'NOOTROPIC',
    badgeBg: 'bg-[#006e2f]'
  },
  {
    id: '6',
    name: 'Gut-Brain Immuno-Blend',
    price: 65.00,
    desc: 'Intestinal & Immune Support',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDUOogfH1Ka_aaJuiCs1zZSAHiFhpQGFDQ-IFa65g_pqmAZ7e1NAFrt4Fj52b0ly5L74XgEaT9Av80OU0HBKPiXqLFPHhbkTcSzcMCsr7hb_ny5tJJ-rCjKLnlQhgVo5aykBRCUAolxBdenCBYVsW5t3aRuqPonF6Q0konTT9AtPCT9jC0PJkeETyLNogyEC7Q8Rlbq3kJppdo9qtY0y5HJdkkdODK8-q_9hVZYBfOdJHYZ_EhYp3XVZJ116YLwmyw22s6ChidG271',
    badge: 'BIO-ACTIVE',
    badgeBg: 'bg-[#1b65a6]'
  },
  {
    id: '7',
    name: 'Cardiovas Shield',
    price: 95.00,
    desc: 'Cardiovascular Support Formula',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuhwRbIhs20QeFamxFS07jqbIvwXjt3KBiDQLuMIFVPHtz3W3Ox3WU2YTSpyy4oglO1i-6qDMM9sLs9dG8HwMCYb8qS_Akpi35k51gx-2Ff0hLwS1T01LnOejUmgfQa4reryVHOR30-Ndxa_MGZLxgH2T4BXIQHubkfisYb8oGUGDvbLDn2GStJ1RLbUx8w22004VK9GWWISbmyzkZgD82EtRuvYevo0M8_Rr7CvELVBiINAvJY3jG0LIfYGc4i-1NxWykg0y-1Pze',
    badge: 'POPULAR',
    badgeBg: 'bg-[#1a202c]'
  },
  {
    id: '8',
    name: 'Sleep-Sustain',
    price: 59.00,
    desc: 'Dual-Release Sleep Complex',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIaeZT8HiZLICQn319EVwxq2_tDEtPWY9bt9vUPTEZS8mfym6zcHazg1-jHiQn0V11wPf8I51m_ii0okpSeTHKHrLLntG4ScNzmgPWNDQV51aPYCZs7pufwc05gtyWoVguNZxvFnn_ymhlDVB3uJxJQL9ZH9hZUZ0byKHx3uJpGwqZvpzNtJRixFE51kUMNKF5n5q-ibAPovkjyQytZ4WNZFU4-O_E_2xSz0bxJSR5uBTOvCnE6yirgWwP94A177QWR66sWQyWgVRR',
    badge: 'REST',
    badgeBg: 'bg-[#006e2f]'
  },
  {
    id: '9',
    name: 'Active Joint Flex',
    price: 79.00,
    desc: 'Joint Mobility & Cartilage Defense',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCX9xMSN0JCCcXEfo5w0324sNZKqDV2HxTTYpsDQ_OMbVatspjrZcxF9yNjXNRu0U_R9m6QXJJjJoCf7noQAUFLOHGWziQI35usImU-ZKI805MG5FYMHdhQ0va6jT3-jNJ8A7DgVyXgcy7ikECnCgGlJCjFBv3cjyPdKCtJRFMXLLp9qsy6M9rK3AozyG16cW-ZWc0o-jt8vV-2oZBBRNbJEnQZ10VnffMP_YYbGecisdSsCqhMdTr6oL1zurrK6ct4PKcMUTFAv3Qw',
    badge: 'ACTIVE',
    badgeBg: 'bg-[#1b65a6]'
  }
];

export default function Home({ setPage, addToCart }: HomeProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const itemsPerPage = 3;
  const totalPages = Math.ceil(CORE_PRODUCTS.length / itemsPerPage);

  const prevPage = () => {
    if (currentPage > 1) {
      setDirection(-1);
      setCurrentPage(prev => prev - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setDirection(1);
      setCurrentPage(prev => prev + 1);
    }
  };

  const goToPage = (pageNumber: number) => {
    if (pageNumber !== currentPage) {
      setDirection(pageNumber > currentPage ? 1 : -1);
      setCurrentPage(pageNumber);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = CORE_PRODUCTS.slice(indexOfFirstItem, indexOfLastItem);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: (dir: number) => ({
      opacity: 0,
      y: 30,
      x: dir > 0 ? 50 : dir < 0 ? -50 : 0
    }),
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 150,
        damping: 18
      }
    },
    exit: (dir: number) => ({
      opacity: 0,
      y: -30,
      x: dir > 0 ? -50 : dir < 0 ? 50 : 0,
      transition: {
        duration: 0.2
      }
    })
  };

  const handleProductAction = (product: { name: string; price: number; desc: string; img: string }) => {
    addToCart(product);
    setPage('checkout');
  };

  return (
    <div className="zoom-screen-height overflow-y-auto scroll-smooth snap-y snap-mandatory bg-surface">
      {/* Hero Section */}
      <section className="relative zoom-screen-height snap-start snap-always flex flex-col items-center justify-center pt-28 pb-12 overflow-hidden px-margin-mobile md:px-margin-desktop bg-surface">
        {/* Huge Headline */}
        <motion.div 
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center w-full z-10 mb-8 md:mb-12"
        >
          <h1 className="font-display-lg text-[15vw] md:text-[140px] text-primary leading-none tracking-tight font-serif" style={{ fontFamily: 'Georgia, serif' }}>
            Feel the Balance.
          </h1>
        </motion.div>

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
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="hidden md:flex flex-col justify-between h-full py-12 z-10 w-[30%]"
          >
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
          </motion.div>

          {/* Center Bottle */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, type: "spring", stiffness: 100 }}
            className="relative z-20 w-full md:w-[40%] flex justify-center h-full items-center py-16 md:py-0 pointer-events-none"
          >
            <img 
              src="/novasupplement.png" 
              alt="Premium wellness supplement bottle" 
              className="w-auto h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] max-w-none object-contain drop-shadow-2xl scale-[1.05] md:scale-[1.1] lg:scale-[1.15] -translate-y-6 md:-translate-y-10 lg:-translate-y-16 origin-center"
            />
          </motion.div>

          {/* Right Column (Info & Bottom Stat) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="hidden md:flex flex-col justify-between h-full py-12 z-10 w-[30%]"
          >
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
          </motion.div>

          {/* Mobile Info Overlay (Visible only on small screens) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="md:hidden absolute bottom-0 left-0 right-0 flex flex-col items-center text-center px-4 space-y-4 bg-gradient-to-t from-surface via-surface/90 to-transparent pt-16 pb-8 z-30"
          >
            <h2 className="font-display-lg text-2xl text-primary">Boost your natural energy</h2>
            <button 
              onClick={() => setPage('shop')}
              className="bg-secondary text-on-secondary px-8 py-3 rounded-full font-bold text-sm flex items-center gap-3 shadow-md"
            >
              Explore More
              <span className="bg-surface text-secondary rounded-full p-1 material-symbols-outlined text-xs">arrow_forward</span>
            </button>
          </motion.div>

        </div>
      </section>

      {/* Benefits You Feel Section */}
      <section className="zoom-screen-height snap-start snap-always bg-surface-container-low relative overflow-hidden flex flex-col items-center justify-center py-16">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="font-display-lg text-5xl md:text-6xl text-primary mb-12 md:mb-20 font-serif tracking-tight text-left" 
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Benefits You Feel
          </motion.h2>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative w-full">
            {/* Left List */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex-1 space-y-6 z-10 w-full order-2 md:order-1"
            >
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
            </motion.div>

            {/* Center Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1, type: "spring" }}
              className="flex-1 flex justify-center items-center relative py-16 md:py-0 order-1 md:order-2 w-full"
            >
              <div className="w-[280px] h-[280px] md:w-[450px] md:h-[450px] bg-secondary/10 rounded-full relative z-0 overflow-hidden">
                <img 
                  src="/handcapsules.png" 
                  alt="Hand holding capsules" 
                  className="w-[75%] md:w-[80%] h-auto object-contain absolute bottom-0 right-8 md:right-12 translate-y-2 z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-500 origin-bottom-right"
                />
              </div>
            </motion.div>

            {/* Right List */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex-1 space-y-6 z-10 w-full order-3"
            >
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
            </motion.div>
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
      <section className="zoom-screen-height snap-start snap-always bg-surface px-margin-mobile md:px-margin-desktop flex flex-col items-center justify-center py-16">
        <div className="max-w-container-max mx-auto px-6 md:px-16">
          <div className="mb-16 text-center space-y-4">
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary">Core Formulations</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
          
          <div className="flex items-center gap-6 md:gap-10 justify-center">
            {/* Left Arrow Button */}
            <button 
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`hidden md:flex w-14 h-14 rounded-full bg-white border border-outline-variant/30 items-center justify-center text-primary shadow-lg hover:bg-surface-container-low transition-all duration-300 shrink-0 cursor-pointer ${currentPage === 1 ? 'opacity-30 pointer-events-none' : ''}`}
            >
              <span className="material-symbols-outlined text-2xl font-bold">chevron_left</span>
            </button>

            {/* Product Cards Container with Swipe gesture support */}
            <div className="flex-1 overflow-hidden py-4 px-2" style={{ minHeight: '620px' }}>
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentPage}
                  custom={direction}
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_e, info) => {
                    const swipeThreshold = 50;
                    if (info.offset.x < -swipeThreshold) {
                      nextPage();
                    } else if (info.offset.x > swipeThreshold) {
                      prevPage();
                    }
                  }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 cursor-grab active:cursor-grabbing touch-pan-y"
                >
                  {currentProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      custom={direction}
                      variants={cardVariants}
                      className="group bg-white rounded-[2rem] p-4 border border-outline-variant/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <div 
                          onClick={() => setPage('product')}
                          className="aspect-square rounded-3xl overflow-hidden bg-gray-50 relative flex justify-center items-center p-8 cursor-pointer"
                        >
                          <img 
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" 
                            src={product.img} 
                            alt={product.name}
                          />
                          <div className={`absolute top-4 right-4 ${product.badgeBg} text-white px-4 py-1.5 rounded-lg text-xs font-bold tracking-widest shadow-sm`}>
                            {product.badge}
                          </div>
                        </div>
                        <div className="px-4 py-6 text-left">
                          <h4 onClick={() => setPage('product')} className="text-[28px] font-extrabold text-[#1a202c] cursor-pointer hover:text-secondary transition-colors leading-tight">
                            {product.name}
                          </h4>
                          <div className="text-[36px] font-extrabold text-[#1a202c] mt-2 leading-none">
                            ${product.price.toFixed(2)}
                          </div>
                        </div>
                      </div>
                      <div className="px-4 pb-6">
                        <button 
                          onClick={() => handleProductAction({
                            name: product.name,
                            price: product.price,
                            desc: product.desc,
                            img: product.img
                          })}
                          className="w-full mt-4 bg-[#1b65a6] text-white py-4 rounded-xl font-bold text-sm tracking-widest uppercase hover:bg-[#15548c] active:scale-[0.98] transition-all cursor-pointer"
                        >
                          VIEW DETAILS
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Arrow Button */}
            <button 
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`hidden md:flex w-14 h-14 rounded-full bg-white border border-outline-variant/30 items-center justify-center text-primary shadow-lg hover:bg-surface-container-low transition-all duration-300 shrink-0 cursor-pointer ${currentPage === totalPages ? 'opacity-30 pointer-events-none' : ''}`}
            >
              <span className="material-symbols-outlined text-2xl font-bold">chevron_right</span>
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => goToPage(p)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentPage === p ? 'bg-primary w-6' : 'bg-outline-variant hover:bg-primary/50'
                }`}
                aria-label={`Go to page ${p}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Science Block */}
      <section className="zoom-screen-height snap-start snap-always bg-primary text-on-primary overflow-hidden relative flex flex-col items-center justify-center py-16">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
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
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
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
          </motion.div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="zoom-screen-height snap-start snap-always bg-surface px-margin-mobile md:px-margin-desktop flex flex-col items-center justify-center py-16">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-8 glass-card border border-outline-variant/30 p-16 rounded-[48px]"
        >
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
        </motion.div>
      </section>
    </div>
  );
}
