import { useState, useMemo } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  goal: string;
  category: 'Supplements' | 'Tinctures' | 'Diagnostics';
  ingredients: string[];
  desc: string;
  img: string;
  featured?: boolean;
}

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Ethos Cellular Regeneration Complex',
    price: 124.00,
    goal: 'Longevity',
    category: 'Supplements',
    ingredients: ['NMN & NAD+', 'Resveratrol', 'Pterostilbene'],
    desc: 'Our flagship NAD+ precursor formula designed to optimize mitochondrial efficiency and promote DNA repair through advanced bioavailability technology.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCX9xMSN0JCCcXEfo5w0324sNZKqDV2HxTTYpsDQ_OMbVatspjrZcxF9yNjXNRu0U_R9m6QXJJjJoCf7noQAUFLOHGWziQI35usImU-ZKI805MG5FYMHdhQ0va6jT3-jNJ8A7DgVyXgcy7ikECnCgGlJCjFBv3cjyPdKCtJRFMXLLp9qsy6M9rK3AozyG16cW-ZWc0o-jt8vV-2oZBBRNbJEnQZ10VnffMP_YYbGecisdSsCqhMdTr6oL1zurrK6ct4PKcMUTFAv3Qw',
    featured: true
  },
  {
    id: '2',
    name: 'Synaptic Optimizer',
    price: 78.00,
    goal: 'Cognition',
    category: 'Supplements',
    ingredients: ["Lion's Mane", 'Ashwagandha'],
    desc: "Enhance neuroplasticity and cognitive clarity with our proprietary blend of Lion's Mane and Bacopa Monnieri.",
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQm-HNAe67ZizCyObXbJA_YeAsUm1HUxeR-VHqFJA6ZYkS8cW6ZTT2_mJ_C5nA855fZReXdCtXn7WbWFoop0Z0rguz9StUiZQh-DiiuSCOHtwa4KEk8q99QTo_RsH6Np802g7rSw-pHi3fyd_WbYUcm9ezv8LMyT9vgTPXwyWBrIFonO151WOJ7WGqA0eHfBi7l5IjhZbPFf8RFrrP9SNrK6H-k4C-tcYy_0hCLlUJzTdypbb73Fkzogn4agMnOIULaoEXR1nN_oZD'
  },
  {
    id: '3',
    name: 'Glycemic Control Tincture',
    price: 56.00,
    goal: 'Metabolic',
    category: 'Tinctures',
    ingredients: ['CoQ10'],
    desc: 'Support healthy insulin sensitivity and metabolic flexibility with fermented botanicals.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXXUMUTNXnDF1R_roBNvjtcexknFGJnMsVT-zmFidiqAtuu6Wb7u701ohXZRVRsyUBEadYuK9OJoBkhIXdeXGQhz3XVR-Z_eJDlqcigdgB2BmhyxaMie0-HIdJ6tRBDwkAatSr-euxlpsmfvINHsrEhQ5XKsiQYQE0AGI09j1gyJrPelbF9Zaiwgh7NNi8Ss8zLEce5rJC7N2wWniQG1q8p4lzOFU-f9KHeQHX0p1APlh2E8i4Pvw9Ev4xOaFdUmE4jwTZk9bbY-Fe'
  },
  {
    id: '4',
    name: 'Epigenetic Aging Clock',
    price: 299.00,
    goal: 'Diagnostics',
    category: 'Diagnostics',
    ingredients: [],
    desc: 'Measure your biological age through DNA methylation analysis with our at-home clinical kit.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdP4OH3s3bLFghtAYz7zRw0cmo7MHLckiQidh1_DYX3Y4t-jghgpMw5BXSz6LdNVE4uLXz1kC5CedaugZxiV8ZsUGZfe5vu0PGxl5CkqhMNuom_5zkRGsQQSANtsOl1sRkx3_M42k2w7sA2ImQND9KN9n6BRA5rwEPWWhaeIxlXUfARw-kDth7xEMepxGeiVtARmTOp0z6q5JQLdvi0NvqEtDIEYs0mtsSQwFVWMij0hKgJuKufpe6-o4LhYmTRAUNQOq2P7pUG3MQ'
  },
  {
    id: '5',
    name: 'Gut-Brain Immuno-Blend',
    price: 65.00,
    goal: 'Immunity',
    category: 'Supplements',
    ingredients: ["Lion's Mane", 'Ashwagandha'],
    desc: 'Postbiotic-infused greens designed to fortify the intestinal barrier and support innate immunity.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDUOogfH1Ka_aaJuiCs1zZSAHiFhpQGFDQ-IFa65g_pqmAZ7e1NAFrt4Fj52b0ly5L74XgEaT9Av80OU0HBKPiXqLFPHhbkTcSzcMCsr7hb_ny5tJJ-rCjKLnlQhgVo5aykBRCUAolxBdenCBYVsW5t3aRuqPonF6Q0konTT9AtPCT9jC0PJkeETyLNogyEC7Q8Rlbq3kJppdo9qtY0y5HJdkkdODK8-q_9hVZYBfOdJHYZ_EhYp3XVZJ116YLwmyw22s6ChidG271'
  }
];

interface ShopProps {
  setPage: (page: 'home' | 'shop' | 'product' | 'dashboard' | 'checkout' | 'admin') => void;
  selectedGoal: string;
  setSelectedGoal: (goal: string) => void;
  addToCart: (item: any) => void;
}

export default function Shop({ setPage, selectedGoal, setSelectedGoal, addToCart }: ShopProps) {
  const [quickFind, setQuickFind] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('Clinical Relevance');

  const goals = ['All Focus', 'Cognition', 'Longevity', 'Metabolic', 'Immunity', 'Diagnostics'];
  const categories = ['Supplements', 'Tinctures', 'Diagnostics'];
  const ingredients = ['NMN & NAD+', 'Ashwagandha', "Lion's Mane", 'CoQ10'];

  const toggleCategory = (cat: string) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const toggleIngredient = (ing: string) => {
    setSelectedIngredients(prev => 
      prev.includes(ing) ? prev.filter(i => i !== ing) : [...prev, ing]
    );
  };

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Quick Find filter
    if (quickFind.trim() !== '') {
      const q = quickFind.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
    }

    // Health Goal filter
    if (selectedGoal !== 'All' && selectedGoal !== 'All Focus') {
      result = result.filter(p => p.goal.toLowerCase() === selectedGoal.toLowerCase());
    }

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }

    // Ingredient filter
    if (selectedIngredients.length > 0) {
      result = result.filter(p => {
        // NMN & NAD+ maps to 'NMN & NAD+' in product ingredients list
        return selectedIngredients.some(selIng => {
          return p.ingredients.includes(selIng);
        });
      });
    }

    // Sorting
    if (sortBy === 'Price: High to Low') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'New Arrivals') {
      // Dummy order by ID descending
      result.sort((a, b) => b.id.localeCompare(a.id));
    }

    return result;
  }, [quickFind, selectedGoal, selectedCategories, selectedIngredients, sortBy]);

  const handleProductAction = (product: Product) => {
    addToCart({
      name: product.name.toUpperCase(),
      price: product.price,
      desc: product.desc,
      img: product.img
    });
    setPage('checkout');
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto min-h-screen">
        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Sticky Sidebar Filters */}
          <aside className="md:w-72 flex-shrink-0">
            <div className="sticky top-32 space-y-8">
              <h2 className="font-headline-md text-headline-md text-primary">Catalog</h2>
              
              {/* Search Sub-bar */}
              <div className="relative group">
                <input 
                  value={quickFind}
                  onChange={(e) => setQuickFind(e.target.value)}
                  className="w-full bg-white border border-outline-variant/30 rounded-xl px-4 py-3 text-body-md focus:ring-2 focus:ring-primary/5 transition-all outline-none" 
                  placeholder="Quick find..." 
                  type="text"
                />
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50">search</span>
              </div>
              
              {/* Filter Sections */}
              <div className="space-y-8">
                <div>
                  <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-4">Health Goal</h3>
                  <div className="flex flex-wrap gap-2">
                    {goals.map(g => {
                      const isActive = (g === 'All Focus' && (selectedGoal === 'All' || selectedGoal === 'All Focus')) || (selectedGoal.toLowerCase() === g.toLowerCase());
                      return (
                        <button 
                          key={g}
                          onClick={() => setSelectedGoal(g === 'All Focus' ? 'All' : g)}
                          className={`px-4 py-2 rounded-full text-label-sm font-label-sm transition-colors cursor-pointer ${
                            isActive 
                              ? 'bg-primary text-on-primary' 
                              : 'border border-outline-variant/30 text-primary hover:border-primary'
                          }`}
                        >
                          {g}
                        </button>
                      );
                    })}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-4">Category</h3>
                  <ul className="space-y-3">
                    {categories.map(cat => (
                      <li key={cat}>
                        <label className="flex items-center gap-3 group cursor-pointer">
                          <input 
                            checked={selectedCategories.includes(cat)}
                            onChange={() => toggleCategory(cat)}
                            className="rounded border border-outline-variant text-primary focus:ring-primary h-5 w-5 cursor-pointer" 
                            type="checkbox"
                          />
                          <span className="text-body-md text-on-surface-variant group-hover:text-primary transition-colors">{cat}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-4">Key Ingredients</h3>
                  <div className="grid grid-cols-1 gap-2 max-h-48 overflow-y-auto custom-scrollbar pr-2">
                    {ingredients.map(ing => (
                      <label key={ing} className="flex items-center gap-3 px-2 py-1 hover:bg-surface-container-low rounded-lg transition-colors cursor-pointer">
                        <input 
                          checked={selectedIngredients.includes(ing)}
                          onChange={() => toggleIngredient(ing)}
                          className="rounded-full border border-outline-variant text-secondary focus:ring-secondary h-4 w-4 cursor-pointer" 
                          type="checkbox"
                        />
                        <span className="text-body-md text-on-surface-variant">{ing}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>
          
          {/* Product Grid Section */}
          <section className="flex-grow">
            {/* Sorting & Stats */}
            <div className="flex justify-between items-center mb-10">
              <span className="text-body-md text-on-surface-variant">
                Showing <span className="font-bold text-primary">{filteredProducts.length}</span> high-fidelity formulations
              </span>
              <div className="flex items-center gap-2">
                <span className="text-label-sm text-on-surface-variant font-label-sm">Sort by:</span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent border-none font-bold text-primary focus:ring-0 cursor-pointer outline-none"
                >
                  <option value="Clinical Relevance">Clinical Relevance</option>
                  <option value="New Arrivals">New Arrivals</option>
                  <option value="Price: High to Low">Price: High to Low</option>
                </select>
              </div>
            </div>
            
            {/* Bento-style Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredProducts.map(p => {
                if (p.featured) {
                  return (
                    <div key={p.id} className="lg:col-span-2 group relative bg-white border border-outline-variant/20 rounded-2xl overflow-hidden medicine-shadow hover:translate-y-[-4px] transition-all duration-300">
                      <div className="flex flex-col md:flex-row h-full">
                        <div 
                          onClick={() => setPage('product')}
                          className="md:w-1/2 relative overflow-hidden h-80 md:h-auto cursor-pointer"
                        >
                          <img 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                            src={p.img}
                            alt={p.name}
                          />
                          <div className="absolute top-4 left-4">
                            <span className="bg-secondary text-on-secondary px-4 py-1.5 rounded-full text-label-sm font-label-sm shadow-xl">CLINICALLY PROVEN</span>
                          </div>
                        </div>
                        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                          <div className="mb-4 flex items-center gap-2 text-secondary">
                            <span className="material-symbols-outlined text-[20px]">monitoring</span>
                            <span className="font-label-sm text-label-sm uppercase tracking-widest">Longevity Tier 1</span>
                          </div>
                          <h3 onClick={() => setPage('product')} className="font-display-lg text-[32px] leading-tight text-primary mb-4 cursor-pointer hover:text-secondary transition-colors">
                            {p.name}
                          </h3>
                          <p className="text-body-md text-on-surface-variant mb-8 leading-relaxed">{p.desc}</p>
                          <div className="flex items-center justify-between mt-auto pt-6 border-t border-outline-variant/20">
                            <span className="font-display-lg text-2xl text-primary">${p.price.toFixed(2)}</span>
                            <button 
                              onClick={() => handleProductAction(p)}
                              className="bg-primary text-on-primary px-8 py-3 rounded-full font-label-sm text-label-sm hover:bg-primary/90 active:scale-95 transition-all cursor-pointer"
                            >
                              Add to Protocol
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
                
                return (
                  <div key={p.id} className="group bg-white border border-outline-variant/20 rounded-2xl overflow-hidden medicine-shadow hover:translate-y-[-4px] transition-all duration-300">
                    <div 
                      onClick={() => setPage('product')}
                      className="aspect-[4/3] overflow-hidden relative cursor-pointer"
                    >
                      <img 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                        src={p.img}
                        alt={p.name}
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">{p.goal} &amp; Vitality</span>
                        <span className="material-symbols-outlined text-on-surface-variant/40 hover:text-red-500 cursor-pointer transition-colors">favorite</span>
                      </div>
                      <h3 onClick={() => setPage('product')} className="font-headline-md text-headline-md text-primary mb-3 cursor-pointer hover:text-secondary transition-colors">
                        {p.name}
                      </h3>
                      <p className="text-body-md text-on-surface-variant mb-6 line-clamp-2">{p.desc}</p>
                      <div className="flex items-center justify-between">
                        <span className="font-headline-md text-xl text-primary">${p.price.toFixed(2)}</span>
                        <button 
                          onClick={() => handleProductAction(p)}
                          className="w-10 h-10 rounded-full border border-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer active:scale-90"
                        >
                          <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Pagination */}
            <div className="mt-16 flex justify-center items-center gap-4">
              <button className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-colors cursor-pointer">
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <div className="flex items-center gap-2">
                <button className="w-10 h-10 rounded-full bg-primary text-on-primary font-bold cursor-pointer">1</button>
                <button className="w-10 h-10 rounded-full hover:bg-surface-container-low transition-colors cursor-pointer">2</button>
                <button className="w-10 h-10 rounded-full hover:bg-surface-container-low transition-colors cursor-pointer">3</button>
              </div>
              <button className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-colors cursor-pointer">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
