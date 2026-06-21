import { useState } from 'react';

interface CartItem {
  name: string;
  price: number;
  desc: string;
  img: string;
  qty?: number;
}

interface CheckoutProps {
  setPage: (page: 'home' | 'shop' | 'product' | 'dashboard' | 'checkout' | 'admin') => void;
  cart: CartItem[];
  clearCart: () => void;
}

export default function Checkout({ setPage, cart, clearCart }: CheckoutProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [shippingMethod, setShippingMethod] = useState<'standard' | 'express'>('standard');
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoMessage, setPromoMessage] = useState('');
  
  // Forms state
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [stateCode, setStateCode] = useState('');
  const [zip, setZip] = useState('');
  
  // Payment state
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');

  // Default items if cart is empty
  const displayItems = cart.length > 0 ? cart : [
    {
      name: 'SYNAPSE NOOTROPIC',
      price: 85.00,
      desc: '30-Day Protocol',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4cDAznr07VPiALGJeJ4Cihtz9b_B3vdp3k00m19vPw9A_LwBc08j-0Dhh5X6OMvRG8qDi5iTRX0550F6D10IgoZ6dysa-_TyW8uiK2mtPWPlFBD-gl9ELZL3Lx-Ejw9OT-Rr3eyWzinbkR6tJsqiEq0bTB-OANAISqN929Br-MRGC-LoJlt29RtWhD25vz19DVviecbt7-AzcdCVuqxeGOBex5Jkc2xv32z_5TpWcsgM4S6QcTZJtraoSMuN3EkAF49Zuj1HtdgdM',
      qty: 1
    },
    {
      name: 'BIOMETRIC PATCH',
      price: 120.00,
      desc: 'Kit of 4 Patches',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1ZgZ5SoJ5O1mzUiBRWSA1Lwleo27I3zNcXpJiZCEd796NqNmzLg7PJD3h23lMkwy2iahikCAcyNohr4csZjKjlZrZHIJ9nnOm3jRaofLGNMSwSjln14iZhvZtXQlziD9R5-Xzjwtxx0KwWxkY5X7ICYHq5fJhtvIFxMN4wnk28dNaTPSow42YlYJcIwebd2skebae83NhAoCkXXo9nnbZWoviMs86DvMJCn-1uz5BGKdJvXZ-cFFcKOta97HZg6UaZhVWv7RY0j0l',
      qty: 1
    }
  ];

  // Calculations
  const rawSubtotal = displayItems.reduce((acc, item) => acc + (item.price * (item.qty || 1)), 0);
  const discountAmount = rawSubtotal * (discountPercent / 100);
  const subtotal = rawSubtotal - discountAmount;
  const shippingCost = shippingMethod === 'express' ? 15.00 : 0.00;
  const tax = subtotal * 0.09;
  const total = subtotal + shippingCost + tax;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'LUMINA10') {
      setDiscountPercent(10);
      setPromoMessage('Promo code LUMINA10 applied: 10% off!');
    } else {
      setPromoMessage('Invalid promo code. Try: LUMINA10');
    }
  };

  const handlePlaceOrder = () => {
    setStep(3);
    clearCart();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Checkout Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-outline-variant/30 px-6 py-4 flex justify-between items-center w-full">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setPage('home')}>
          <span className="material-symbols-outlined text-primary text-2xl">biotech</span>
          <h1 className="font-display-lg text-[20px] tracking-tighter text-primary">LUMINA</h1>
        </div>
        
        {/* Progress Steps */}
        <div className="hidden md:flex items-center gap-8">
          <div className={`flex items-center gap-2 ${step >= 1 ? 'text-primary font-bold' : 'text-on-surface-variant/40'}`}>
            <span className={`flex items-center justify-center w-6 h-6 rounded-full text-[10px] font-bold ${
              step >= 1 ? 'bg-secondary text-white' : 'bg-surface-container-high text-on-surface-variant'
            }`}>1</span>
            <span className="font-label-sm text-label-sm">SHIPPING</span>
          </div>
          <div className="w-12 h-[1px] bg-outline-variant/30"></div>
          <div className={`flex items-center gap-2 ${step >= 2 ? 'text-primary font-bold' : 'text-on-surface-variant/40'}`}>
            <span className={`flex items-center justify-center w-6 h-6 rounded-full text-[10px] font-bold ${
              step >= 2 ? 'bg-secondary text-white' : 'bg-surface-container-high text-on-surface-variant'
            }`}>2</span>
            <span className="font-label-sm text-label-sm">PAYMENT</span>
          </div>
          <div className="w-12 h-[1px] bg-outline-variant/30"></div>
          <div className={`flex items-center gap-2 ${step >= 3 ? 'text-primary font-bold' : 'text-on-surface-variant/40'}`}>
            <span className={`flex items-center justify-center w-6 h-6 rounded-full text-[10px] font-bold ${
              step >= 3 ? 'bg-secondary text-white' : 'bg-surface-container-high text-on-surface-variant'
            }`}>3</span>
            <span className="font-label-sm text-label-sm">CONFIRM</span>
          </div>
        </div>
        
        <button 
          onClick={() => setPage('shop')}
          className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 font-label-sm text-label-sm cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
          CANCEL
        </button>
      </header>

      {/* Main Checkout content */}
      <main className="pt-28 flex-grow max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
        {step === 3 ? (
          /* Confirmation Step */
          <div className="max-w-xl mx-auto text-center py-20 space-y-8">
            <div className="w-20 h-20 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-5xl">check_circle</span>
            </div>
            <div className="space-y-3">
              <h2 className="font-display-lg text-3xl text-primary">Protocol Activated.</h2>
              <p className="text-on-surface-variant font-body-md">
                Your order <span className="font-bold text-primary">#LM-928372-X</span> has been securely processed. Our biotechnology labs have started compounding your custom formulations.
              </p>
            </div>
            
            <div className="bg-white border border-outline-variant/30 rounded-2xl p-6 text-left space-y-4 shadow-sm">
              <div className="flex justify-between items-center pb-3 border-b border-outline-variant/10">
                <span className="text-on-surface-variant text-sm">Estimated Delivery</span>
                <span className="font-bold text-primary">Oct 06, 2024</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-on-surface-variant text-sm">Shipping Address</span>
                <span className="font-medium text-primary text-right max-w-[200px] truncate">{address || '123 Wellness Way, San Francisco'}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <button 
                onClick={() => setPage('dashboard')}
                className="bg-primary text-on-primary px-8 py-4 rounded-full font-label-sm text-label-sm hover:opacity-90 transition-all cursor-pointer shadow-lg"
              >
                GO TO DASHBOARD
              </button>
              <button 
                onClick={() => setPage('shop')}
                className="border border-outline px-8 py-4 rounded-full font-label-sm text-label-sm hover:bg-surface-container-low transition-all cursor-pointer"
              >
                CONTINUE SHOPPING
              </button>
            </div>
          </div>
        ) : (
          /* Checkout Forms and Summary columns */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20 pt-6">
            
            {/* Left Column: Form Steps */}
            <div className="lg:col-span-7 space-y-12">
              
              {step === 1 ? (
                /* Step 1: Shipping Form */
                <section className="space-y-8">
                  <div className="flex justify-between items-end border-b border-outline-variant/20 pb-4">
                    <h2 className="font-headline-md text-headline-md text-primary">Shipping Information</h2>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">STEP 1 OF 2</span>
                  </div>
                  
                  <form className="grid grid-cols-2 gap-6" onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
                    <div className="col-span-2 space-y-2">
                      <label className="block font-label-sm text-label-sm text-on-surface-variant tracking-wider">EMAIL ADDRESS</label>
                      <input 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white border border-outline-variant/40 rounded-xl px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" 
                        placeholder="alex.rivera@example.com" 
                        type="email"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block font-label-sm text-label-sm text-on-surface-variant tracking-wider">FIRST NAME</label>
                      <input 
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full bg-white border border-outline-variant/40 rounded-xl px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" 
                        placeholder="Alex" 
                        type="text"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block font-label-sm text-label-sm text-on-surface-variant tracking-wider">LAST NAME</label>
                      <input 
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full bg-white border border-outline-variant/40 rounded-xl px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" 
                        placeholder="Rivera" 
                        type="text"
                      />
                    </div>
                    <div className="col-span-2 space-y-2">
                      <label className="block font-label-sm text-label-sm text-on-surface-variant tracking-wider">ADDRESS</label>
                      <input 
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full bg-white border border-outline-variant/40 rounded-xl px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" 
                        placeholder="123 Wellness Way, Apt 4B" 
                        type="text"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block font-label-sm text-label-sm text-on-surface-variant tracking-wider">CITY</label>
                      <input 
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full bg-white border border-outline-variant/40 rounded-xl px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" 
                        placeholder="San Francisco" 
                        type="text"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="block font-label-sm text-label-sm text-on-surface-variant tracking-wider">STATE</label>
                        <input 
                          required
                          value={stateCode}
                          onChange={(e) => setStateCode(e.target.value)}
                          className="w-full bg-white border border-outline-variant/40 rounded-xl px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" 
                          placeholder="CA" 
                          type="text"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block font-label-sm text-label-sm text-on-surface-variant tracking-wider">ZIP</label>
                        <input 
                          required
                          value={zip}
                          onChange={(e) => setZip(e.target.value)}
                          className="w-full bg-white border border-outline-variant/40 rounded-xl px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" 
                          placeholder="94105" 
                          type="text"
                        />
                      </div>
                    </div>
                    
                    {/* Shipping Method */}
                    <div className="col-span-2 pt-6">
                      <h3 className="font-headline-md text-[20px] text-primary mb-6">Delivery Method</h3>
                      <div className="space-y-4">
                        <label className={`flex items-center justify-between p-4 bg-white border rounded-xl cursor-pointer transition-colors ${
                          shippingMethod === 'standard' ? 'border-primary' : 'border-outline-variant/20 hover:border-outline'
                        }`}>
                          <div className="flex items-center gap-4">
                            <input 
                              type="radio" 
                              name="shipping" 
                              checked={shippingMethod === 'standard'}
                              onChange={() => setShippingMethod('standard')}
                              className="text-primary focus:ring-0 cursor-pointer"
                            />
                            <div>
                              <p className="font-label-sm text-label-sm text-primary">Standard Shipping</p>
                              <p className="text-[13px] text-on-surface-variant">Estimated delivery: 3-5 business days</p>
                            </div>
                          </div>
                          <span className="font-label-sm text-label-sm text-primary">FREE</span>
                        </label>
                        <label className={`flex items-center justify-between p-4 bg-white border rounded-xl cursor-pointer transition-colors ${
                          shippingMethod === 'express' ? 'border-primary' : 'border-outline-variant/20 hover:border-outline'
                        }`}>
                          <div className="flex items-center gap-4">
                            <input 
                              type="radio" 
                              name="shipping" 
                              checked={shippingMethod === 'express'}
                              onChange={() => setShippingMethod('express')}
                              className="text-primary focus:ring-0 cursor-pointer"
                            />
                            <div>
                              <p className="font-label-sm text-label-sm text-primary">Express Delivery</p>
                              <p className="text-[13px] text-on-surface-variant">Estimated delivery: 1-2 business days</p>
                            </div>
                          </div>
                          <span className="font-label-sm text-label-sm text-primary">$15.00</span>
                        </label>
                      </div>
                    </div>

                    <div className="col-span-2 pt-6">
                      <button 
                        type="submit"
                        className="w-full md:w-auto bg-primary text-on-primary font-label-sm text-label-sm px-12 py-4 rounded-full hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-primary/10 cursor-pointer"
                      >
                        CONTINUE TO PAYMENT
                      </button>
                    </div>
                  </form>
                </section>
              ) : (
                /* Step 2: Payment Form */
                <section className="space-y-8">
                  <div className="flex justify-between items-end border-b border-outline-variant/20 pb-4">
                    <h2 className="font-headline-md text-headline-md text-primary">Payment Details</h2>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">STEP 2 OF 2</span>
                  </div>
                  
                  <form className="grid grid-cols-2 gap-6" onSubmit={(e) => { e.preventDefault(); handlePlaceOrder(); }}>
                    <div className="col-span-2 space-y-2">
                      <label className="block font-label-sm text-label-sm text-on-surface-variant tracking-wider">CARDHOLDER NAME</label>
                      <input 
                        required
                        className="w-full bg-white border border-outline-variant/40 rounded-xl px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" 
                        placeholder="Alex Rivera" 
                        type="text"
                      />
                    </div>
                    <div className="col-span-2 space-y-2">
                      <label className="block font-label-sm text-label-sm text-on-surface-variant tracking-wider">CARD NUMBER</label>
                      <input 
                        required
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className="w-full bg-white border border-outline-variant/40 rounded-xl px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" 
                        placeholder="•••• •••• •••• ••••" 
                        type="text"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block font-label-sm text-label-sm text-on-surface-variant tracking-wider">EXPIRY DATE</label>
                      <input 
                        required
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        className="w-full bg-white border border-outline-variant/40 rounded-xl px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" 
                        placeholder="MM/YY" 
                        type="text"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block font-label-sm text-label-sm text-on-surface-variant tracking-wider">CVV</label>
                      <input 
                        required
                        value={cardCvv}
                        onChange={(e) => setCardCvv(e.target.value)}
                        className="w-full bg-white border border-outline-variant/40 rounded-xl px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" 
                        placeholder="•••" 
                        type="password"
                      />
                    </div>
                    
                    <div className="col-span-2 flex gap-4 pt-6">
                      <button 
                        type="submit"
                        className="w-full md:w-auto bg-primary text-on-primary font-label-sm text-label-sm px-12 py-4 rounded-full hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-primary/10 cursor-pointer"
                      >
                        PLACE PROTOCOL ORDER
                      </button>
                      <button 
                        type="button"
                        onClick={() => setStep(1)}
                        className="border border-outline px-8 py-4 rounded-full font-label-sm text-label-sm hover:bg-surface-container-low transition-all cursor-pointer"
                      >
                        BACK TO SHIPPING
                      </button>
                    </div>
                  </form>
                </section>
              )}
            </div>
            
            {/* Right Column: Persistent Order Summary */}
            <aside className="lg:col-span-5 relative">
              <div className="sticky top-28 space-y-8">
                {/* Summary Card */}
                <div className="bg-white border border-outline-variant/20 rounded-2xl p-8 shadow-sm">
                  <h2 className="font-headline-md text-headline-md text-primary mb-8">Order Summary</h2>
                  
                  {/* Cart items list */}
                  <div className="space-y-6 mb-8 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                    {displayItems.map((item, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="w-20 h-20 bg-surface-container-low rounded-xl overflow-hidden flex-shrink-0">
                          <img 
                            className="w-full h-full object-cover" 
                            src={item.img} 
                            alt={item.name}
                          />
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between items-start">
                            <h4 className="font-label-sm text-label-sm text-primary">{item.name}</h4>
                            <span className="font-label-sm text-label-sm text-primary font-bold">${item.price.toFixed(2)}</span>
                          </div>
                          <p className="text-[13px] text-on-surface-variant mt-1">{item.desc}</p>
                          <p className="text-[12px] text-on-surface-variant">Qty: {item.qty || 1}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Promo Input */}
                  <form onSubmit={handleApplyPromo} className="flex gap-2 mb-6 pb-6 border-b border-outline-variant/10">
                    <input 
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Promo code (LUMINA10)"
                      className="flex-1 bg-surface border border-outline-variant/40 rounded-xl px-4 py-2 text-sm outline-none focus:border-secondary transition-all"
                    />
                    <button type="submit" className="bg-primary text-on-primary px-4 py-2 rounded-xl text-xs font-label-sm cursor-pointer">
                      APPLY
                    </button>
                  </form>
                  {promoMessage && (
                    <p className={`text-xs -mt-4 mb-4 font-semibold ${discountPercent > 0 ? 'text-secondary' : 'text-red-500'}`}>
                      {promoMessage}
                    </p>
                  )}
                  
                  {/* Pricing Breakdown */}
                  <div className="space-y-3 pt-2">
                    <div className="flex justify-between text-on-surface-variant font-label-sm text-label-sm">
                      <span>Subtotal</span>
                      <span>${rawSubtotal.toFixed(2)}</span>
                    </div>
                    {discountPercent > 0 && (
                      <div className="flex justify-between text-secondary font-label-sm text-label-sm">
                        <span>Discount ({discountPercent}%)</span>
                        <span>-${discountAmount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-on-surface-variant font-label-sm text-label-sm">
                      <span>Shipping</span>
                      <span className={shippingCost === 0 ? 'text-secondary' : ''}>
                        {shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}
                      </span>
                    </div>
                    <div className="flex justify-between text-on-surface-variant font-label-sm text-label-sm">
                      <span>Tax (9%)</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-primary font-bold text-lg pt-4 border-t border-outline-variant/20">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex items-center gap-2 px-4 py-3 bg-secondary/5 rounded-lg border border-secondary/10">
                    <span className="material-symbols-outlined text-secondary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
                    <span className="text-[11px] font-bold text-secondary tracking-widest">SECURE CHECKOUT ENABLED</span>
                  </div>
                </div>
                
                {/* Trust Badges */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/50 border border-outline-variant/10 rounded-xl flex flex-col items-center text-center">
                    <span className="material-symbols-outlined text-primary mb-2">verified</span>
                    <span className="text-[10px] font-bold text-on-surface-variant tracking-wider">CLINICALLY PROVEN</span>
                  </div>
                  <div className="p-4 bg-white/50 border border-outline-variant/10 rounded-xl flex flex-col items-center text-center">
                    <span className="material-symbols-outlined text-primary mb-2">shield</span>
                    <span className="text-[10px] font-bold text-on-surface-variant tracking-wider">HIPAA COMPLIANT</span>
                  </div>
                </div>
                
                <div className="px-4 text-center">
                  <p className="text-[12px] text-on-surface-variant/60 leading-relaxed">
                    By completing your purchase, you agree to the LUMINA Biotech Terms of Service and Privacy Policy. All biometric data is encrypted.
                  </p>
                </div>
              </div>
            </aside>
            
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="w-full pt-20 pb-32 px-margin-mobile md:px-margin-desktop bg-surface-bright border-t border-outline-variant/30 mt-auto">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">biotech</span>
            <span className="font-display-lg text-display-lg-mobile tracking-tighter text-primary">LUMINA</span>
          </div>
          <div className="flex flex-wrap gap-8">
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="#">Science</a>
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="#">Sourcing</a>
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="#">Terms</a>
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="#">Privacy</a>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant">
            © 2024 LUMINA BIOTECH. CLINICALLY PROVEN.
          </p>
        </div>
      </footer>
    </div>
  );
}
