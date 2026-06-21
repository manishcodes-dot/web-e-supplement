import { useState } from 'react';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Dashboard from './pages/Dashboard';
import Checkout from './pages/Checkout';
import Admin from './pages/Admin';
import './App.css';

interface CartItem {
  name: string;
  price: number;
  desc: string;
  img: string;
  qty?: number;
}

export default function App() {
  const [page, setPage] = useState<'home' | 'shop' | 'product' | 'dashboard' | 'checkout' | 'admin'>('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState('All');

  const CATEGORIES = [
    { icon: 'M', name: 'Male Health' },
    { icon: 'F', name: 'Female Health' },
    { icon: 'W', name: 'Weight Loss Management' },
    { icon: 'J', name: 'Joint Health Pain Relief' },
    { icon: 'D', name: 'Digestive Gut Health' },
    { icon: 'B', name: 'Blood Sugar Management' },
    { icon: 'H', name: 'Heart Cardiovascular Health' },
    { icon: 'B', name: 'Brain Cognitive Health' },
    { icon: 'S', name: 'Sleep Aids Relaxation' },
    { icon: 'I', name: 'Immune Support Wellness' },
    { icon: 'E', name: 'Eye Health Vision' },
    { icon: 'E', name: 'Ear Hearing' },
    { icon: 'O', name: 'Oral Dental Health' },
    { icon: 'S', name: 'Skin Hair Beauty' },
    { icon: 'S', name: 'Smoking Cessation Addiction' },
    { icon: 'F', name: 'Fitness Muscle Building' },
    { icon: 'G', name: 'General Wellness' },
    { icon: 'A', name: 'Allergy Respiratory' },
    { icon: 'K', name: 'Kidney Urinary Health' },
    { icon: 'L', name: 'Liver Health' },
    { icon: 'B', name: 'Bone Health' },
    { icon: 'T', name: 'Thyroid & Hormonal Health' },
    { icon: 'N', name: 'Nerve Health' },
    { icon: 'E', name: 'Energy & Vitality' },
    { icon: 'O', name: 'Other' },
  ];

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.name === item.name);
      if (existing) {
        return prevCart.map((i) => 
          i.name === item.name ? { ...i, qty: (i.qty || 1) + 1 } : i
        );
      }
      return [...prevCart, { ...item, qty: 1 }];
    });
    // Open cart drawer for premium feedback
    setIsCartOpen(true);
  };

  const removeFromCart = (index: number) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const updateQty = (index: number, delta: number) => {
    setCart((prevCart) => {
      return prevCart.map((item, i) => {
        if (i === index) {
          const newQty = (item.qty || 1) + delta;
          return { ...item, qty: newQty < 1 ? 1 : newQty };
        }
        return item;
      });
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotalItems = cart.reduce((acc, item) => acc + (item.qty || 1), 0);
  const cartTotalPrice = cart.reduce((acc, item) => acc + (item.price * (item.qty || 1)), 0);

  // Shell logic: hide standard top navigation on transactional/full-screen pages
  const isTransactionalPage = page === 'checkout' || page === 'dashboard' || page === 'admin';

  return (
    <div className="min-h-screen bg-background font-body-md text-on-surface">
      {/* Shared Navigation Header */}
      {!isTransactionalPage && (
        <header className="fixed top-0 left-0 right-0 z-[80] px-6 py-4 bg-[#1e2233] text-white flex justify-between items-center w-full shadow-md">
          {/* Logo & Left Links */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 cursor-pointer mr-2 lg:mr-4" onClick={() => setPage('home')}>
              <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'wght' 500" }}>biotech</span>
              <h1 className="font-display-lg text-xl tracking-tighter text-white">LUMINA</h1>
            </div>
            
            <nav className="hidden lg:flex items-center gap-6 relative h-full">
              <button 
                onClick={() => setPage('home')}
                className="text-sm font-medium tracking-wide text-white/80 hover:text-white transition-colors h-full"
              >
                Home
              </button>

              {/* CSS-based Group Hover wrapper to ensure seamless mouse tracking */}
              <div className="group h-full flex items-center">
                <div className="flex items-center gap-1 cursor-pointer text-white/80 group-hover:text-white transition-colors h-full py-4">
                  <span className="text-sm font-medium tracking-wide">Categories</span>
                  <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:rotate-180">expand_more</span>
                </div>
                
                {/* Floating Card Mega Menu (hidden by default, shown on group hover) */}
                <div className="absolute top-[100%] left-0 w-[800px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-[100]">
                  <div className="bg-surface text-on-surface rounded-2xl shadow-2xl border border-outline-variant/30 p-8 grid grid-cols-3 gap-y-4 gap-x-6 relative before:content-[''] before:absolute before:-top-4 before:left-0 before:w-full before:h-4">
                    {CATEGORIES.map((cat, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center gap-3 cursor-pointer p-2 hover:bg-secondary/5 rounded-lg transition-colors" 
                        onClick={() => setPage('shop')}
                      >
                        <span className="text-sm font-medium text-on-surface-variant hover:text-secondary transition-colors">{cat.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setPage('shop')}
                className="text-sm font-medium tracking-wide text-white/80 hover:text-white transition-colors"
              >
                All Products
              </button>
              <button 
                onClick={() => setPage('shop')}
                className="text-sm font-medium tracking-wide text-white/80 hover:text-white transition-colors"
              >
                Health Guides
              </button>
              <button 
                onClick={() => setPage('home')}
                className="text-sm font-medium tracking-wide hover:text-white/80 transition-colors"
              >
                About Us
              </button>
            </nav>
          </div>
          
          {/* Center Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-4 lg:mx-8 relative">
            <input 
              type="text" 
              placeholder="Search for Supplements" 
              className="w-full bg-[#2a2f42] text-white placeholder-white/50 text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-secondary/50 border border-white/5"
            />
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-white/50 text-xl cursor-pointer">search</span>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="hidden xl:flex items-center gap-2 cursor-pointer hover:text-white/80 transition-colors">
              <span className="text-lg">🇺🇸</span>
              <span className="text-sm font-medium tracking-wide">English (US)</span>
              <span className="material-symbols-outlined text-[16px]">expand_more</span>
            </div>
            

            
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative cursor-pointer hover:text-white/80 transition-colors ml-2"
            >
              <span className="material-symbols-outlined text-[26px]">shopping_cart</span>
              {cartTotalItems > 0 && (
                <span className="absolute -top-1 -right-2 w-5 h-5 bg-secondary text-white rounded-full text-[10px] font-bold flex items-center justify-center border-2 border-[#1e2233]">
                  {cartTotalItems}
                </span>
              )}
            </button>
          </div>
        </header>
      )}

      {/* Side-Drawer Cart Flyout */}
      <div 
        className={`fixed inset-0 z-[100] transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsCartOpen(false)}></div>
        <div 
          className={`absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl p-8 flex flex-col justify-between transition-transform duration-500 transform ${
            isCartOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-outline-variant/20">
              <h3 className="font-headline-md text-xl text-primary">Your Protocol Stack</h3>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer"
              >
                close
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="py-20 text-center text-on-surface-variant space-y-4">
                <span className="material-symbols-outlined text-4xl opacity-40">shopping_bag</span>
                <p className="font-body-md">Your protocol list is currently empty.</p>
                <button 
                  onClick={() => { setIsCartOpen(false); setPage('shop'); }}
                  className="text-secondary font-label-sm text-sm hover:underline cursor-pointer"
                >
                  Explore formulations
                </button>
              </div>
            ) : (
              <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                {cart.map((item, index) => (
                  <div key={index} className="flex gap-4 pb-4 border-b border-outline-variant/10">
                    <img className="w-16 h-16 object-cover rounded-lg" src={item.img} alt={item.name} />
                    <div className="flex-1 text-left">
                      <div className="flex justify-between">
                        <h4 className="font-bold text-primary text-sm">{item.name}</h4>
                        <span className="font-bold text-primary text-sm">${(item.price * (item.qty || 1)).toFixed(2)}</span>
                      </div>
                      <p className="text-xs text-on-surface-variant mb-2">{item.desc}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 border border-outline-variant/30 rounded-lg px-2 py-1">
                          <button 
                            onClick={() => updateQty(index, -1)}
                            className="text-xs font-bold text-on-surface-variant hover:text-primary cursor-pointer"
                          >
                            -
                          </button>
                          <span className="text-xs font-bold w-4 text-center">{item.qty || 1}</span>
                          <button 
                            onClick={() => updateQty(index, 1)}
                            className="text-xs font-bold text-on-surface-variant hover:text-primary cursor-pointer"
                          >
                            +
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(index)}
                          className="text-xs text-red-500 hover:underline cursor-pointer"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div className="pt-6 border-t border-outline-variant/20 space-y-4">
              <div className="flex justify-between items-center font-bold text-primary">
                <span>Subtotal</span>
                <span>${cartTotalPrice.toFixed(2)}</span>
              </div>
              <button 
                onClick={() => { setIsCartOpen(false); setPage('checkout'); }}
                className="w-full bg-primary text-on-primary py-4 rounded-full font-label-sm text-sm hover:opacity-90 active:scale-95 transition-all cursor-pointer shadow-lg"
              >
                PROCEED TO SECURE CHECKOUT
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Pages Switch Router */}
      {page === 'home' && <Home setPage={setPage} setSelectedGoal={setSelectedGoal} addToCart={addToCart} />}
      {page === 'shop' && <Shop setPage={setPage} selectedGoal={selectedGoal} setSelectedGoal={setSelectedGoal} addToCart={addToCart} />}
      {page === 'product' && <ProductDetail setPage={setPage} addToCart={addToCart} />}
      {page === 'dashboard' && <Dashboard setPage={setPage} />}
      {page === 'checkout' && <Checkout setPage={setPage} cart={cart} clearCart={clearCart} />}
      {page === 'admin' && <Admin setPage={setPage} />}
    </div>
  );
}
