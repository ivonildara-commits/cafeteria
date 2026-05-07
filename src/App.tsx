/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Coffee, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  Twitter, 
  ChevronRight, 
  Menu as MenuIcon, 
  X,
  ArrowRight,
  Star,
  Quote
} from "lucide-react";
import { useState, useEffect } from "react";

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=1920",
  latte: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800",
  beans: "https://images.unsplash.com/photo-1447933631585-44e17c5965ed?auto=format&fit=crop&q=80&w=800",
  interior: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800",
  roast: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=800"
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-coffee-cream/95 backdrop-blur-md py-6 border-b border-coffee-dark/5" : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-end">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`text-2xl font-serif italic tracking-tight ${
            isScrolled ? "text-coffee-dark" : "text-white"
          }`}
        >
          Grão & Aroma
          <p className="text-[10px] uppercase tracking-[0.3em] opacity-60 mt-1 font-sans not-italic font-medium">Est. 2024</p>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`text-[11px] tracking-[0.2em] uppercase font-medium transition-opacity hover:opacity-40 ${
                isScrolled ? "text-coffee-dark" : "text-white"
              }`}
            >
              {link.name}
            </motion.a>
          ))}
        </div>


        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="absolute top-0 left-0 right-0 h-screen bg-coffee-dark flex flex-col items-center justify-center gap-8 md:hidden shadow-2xl"
          >
            <button 
              className="absolute top-6 right-6 text-coffee-light"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-serif text-coffee-cream hover:text-coffee-light"
              >
                {link.name}
              </a>
            ))}
            <button className="px-8 py-3 bg-coffee-light text-coffee-dark rounded-full font-bold uppercase tracking-widest">
              Reservar
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-coffee-cream flex flex-col pt-32 pb-16 px-6 overflow-hidden">
      <main className="flex-grow grid grid-cols-12 gap-8 items-start max-w-7xl mx-auto w-full">
        {/* Left Content */}
        <div className="col-span-12 lg:col-span-6 pr-0 lg:pr-12 pt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-block px-3 py-1 border border-coffee-dark rounded-full text-[9px] uppercase tracking-[0.3em] font-medium mb-10">
              Inauguração em Breve
            </span>
            <h2 className="text-[64px] md:text-[84px] leading-[0.9] font-serif font-light mb-8 text-coffee-dark">
              Onde o tempo <br /><span className="italic">desacelera.</span>
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-coffee-medium/80 mb-12 max-w-md font-light">
              Descubra a arte do café especial em um ambiente desenhado para a contemplação e o paladar exigente.
            </p>
            <motion.button 
              whileHover={{ x: 5 }}
              className="px-12 py-5 bg-coffee-dark text-coffee-cream text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-coffee-medium transition-colors"
            >
              Reserve sua Mesa
            </motion.button>
          </motion.div>
        </div>

        {/* Right Visual Area */}
        <div className="col-span-12 lg:col-span-6 relative h-full flex flex-col justify-center items-center mt-12 lg:mt-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full aspect-[4/5] relative overflow-hidden flex items-center justify-center p-4"
          >
            {/* Styled Container with the large image */}
            <div className="w-full h-full bg-coffee-light rounded-t-full relative overflow-hidden shadow-2xl">
              <img 
                src={IMAGES.hero} 
                alt="Coffee" 
                className="w-full h-full object-cover brightness-90 grayscale-[20%]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border-[20px] border-coffee-cream"></div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute bottom-4 -left-4 md:-left-12 bg-white p-8 border border-coffee-dark/10 shadow-xl"
          >
             <p className="text-[10px] uppercase tracking-[0.4em] text-coffee-medium/50 mb-2 font-bold">Destaque da Semana</p>
             <p className="font-serif text-2xl italic text-coffee-dark">Catuaí Amarelo</p>
             <p className="text-xs mt-1 text-coffee-medium/70 uppercase tracking-widest font-light font-sans">Notas de mel e caramelo.</p>
          </motion.div>
        </div>
      </main>
    </section>
  );
};

interface FeatureCardProps {
  icon: any;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    className="bg-white p-10 rounded-none shadow-none border border-coffee-dark/5 hover:border-coffee-dark/20 transition-all group"
  >
    <div className="w-12 h-12 flex items-center justify-center mb-6 text-coffee-dark">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-serif font-bold mb-4 italic text-coffee-dark">{title}</h3>
    <p className="text-sm text-coffee-medium leading-relaxed font-light">{description}</p>
  </motion.div>
);

const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-[#F9F7F2]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-24">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative p-8 border border-coffee-dark/10"
            >
              <img 
                src={IMAGES.interior} 
                alt="Interior" 
                className="w-full aspect-square object-cover grayscale-[30%]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-0 right-0 p-4 bg-[#F9F7F2] border-l border-b border-coffee-dark/10">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Ambiente</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-coffee-medium/50 font-bold tracking-[0.4em] uppercase text-[10px] block mb-6">A Arte do Café</span>
              <h2 className="text-5xl md:text-6xl font-serif mb-10 leading-[1.1] text-coffee-dark">Mãos que cuidam de <br /><span className="italic">cada grão.</span></h2>
              <p className="text-lg text-coffee-medium/80 mb-10 leading-relaxed font-light max-w-lg">
                Nascemos da paixão pela busca incessante da xícara perfeita. Trabalhamos diretamente com produtores para garantir que cada torra ressalte as notas exclusivas da nossa terra.
              </p>
              <div className="flex gap-12">
                <div>
                  <span className="block text-3xl font-serif text-coffee-dark mb-1 tabular-nums italic">15+</span>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-coffee-medium/40 font-bold">Variedades</span>
                </div>
                <div>
                  <span className="block text-3xl font-serif text-coffee-dark mb-1 tabular-nums italic">100%</span>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-coffee-medium/40 font-bold">Arábica</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-0">
            <FeatureCard 
              icon={Coffee} 
              title="Torrefação Própria" 
              description="Controlamos cada perfil de torra para extrair o máximo de dulçor e acidez de cada lote exclusivo."
              delay={0.1}
            />
            <FeatureCard 
              icon={Star} 
              title="Baristas Experts" 
              description="Nossa equipe é treinada para transformar preparo em performance, garantindo qualidade."
              delay={0.2}
            />
            <FeatureCard 
              icon={Quote} 
              title="Espaço Criativo" 
              description="Ambiente planejado para quem busca inspiração em um livro ou em reuniões produtivas."
              delay={0.3}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface MenuItem {
  name: string;
  description: string;
  price: string;
  isBest?: boolean;
}

interface MenuCategoryProps {
  title: string;
  items: MenuItem[];
}

const MenuCategory = ({ title, items }: { title: string; items: MenuItem[] }) => (
  <div className="mb-20">
    <h3 className="text-2xl font-serif italic mb-10 flex items-center gap-6 text-coffee-dark">
      <span className="shrink-0">{title}</span>
      <div className="h-[1px] flex-1 bg-coffee-dark/5" />
    </h3>
    <div className="grid md:grid-cols-2 gap-x-20 gap-y-12">
      {items.map((item) => (
        <div key={item.name} className="flex justify-between items-start group">
          <div className="flex-1">
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-lg font-serif font-medium text-coffee-dark">{item.name}</span>
              {item.isBest && <span className="text-[8px] border border-coffee-dark/20 text-coffee-dark px-2 py-0.5 rounded-full uppercase tracking-widest font-bold">Favorito</span>}
            </div>
            <p className="text-xs text-coffee-medium/50 font-light leading-relaxed max-w-xs uppercase tracking-wide">{item.description}</p>
          </div>
          <span className="text-lg font-serif italic text-coffee-dark tabular-nums">{item.price}</span>
        </div>
      ))}
    </div>
  </div>
);

const Menu = () => {
  const categories: { title: string; items: MenuItem[] }[] = [
    {
      title: "Clássicos & Autorais",
      items: [
        { name: "Espresso Grão & Aroma", description: "Blend especial com notas de chocolate.", price: "R$ 9", isBest: true },
        { name: "Flat White", description: "Dose dupla com leite vaporizado.", price: "R$ 16" },
        { name: "Latté Macchiato", description: "Camadas de leite, café e espuma.", price: "R$ 14" },
        { name: "Orange V60", description: "Notas cítricas e finalização de mel.", price: "R$ 18" },
      ]
    },
    {
      title: "Grãos & Torra",
      items: [
        { name: "Bourbon Amarelo", description: "Notas de amêndoas e cana-de-açúcar.", price: "R$ 48" },
        { name: "Catuaí Vermelho", description: "Frutado com acidez vibrante.", price: "R$ 42", isBest: true },
      ]
    }
  ];

  return (
    <section id="menu" className="py-32 px-6 bg-white border-y border-coffee-dark/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-coffee-medium/40 font-bold tracking-[0.4em] uppercase text-[10px] block mb-4">Seleção Especial</span>
          <h2 className="text-5xl md:text-7xl font-serif text-coffee-dark italic">O Cardápio</h2>
        </div>
        
        {categories.map((cat) => (
          // @ts-ignore
          <MenuCategory key={cat.title} title={cat.title} items={cat.items} />
        ))}

        <div className="mt-12 text-center">
          <button className="px-10 py-4 bg-coffee-dark text-coffee-cream text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-coffee-medium transition-colors">
            Ver Cardápio Completo
          </button>
        </div>
      </div>
    </section>
  );
};

const Testimonial = () => {
  return (
    <section className="py-32 px-6 bg-[#F9F7F2] text-coffee-dark overflow-hidden relative border-b border-coffee-dark/5">
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-30 mb-12 block">Depoimentos</span>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-5xl font-serif leading-[1.2] mb-16 italic font-light"
        >
          "O melhor espresso da cidade. <br />Desenhado para a contemplação."
        </motion.p>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full grayscale mb-4 overflow-hidden border border-coffee-dark/10">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&h=100" 
              alt="User" 
              className="rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>
          <h4 className="text-[11px] uppercase tracking-widest font-bold">Eduardo Santos</h4>
          <p className="text-coffee-medium/40 text-[9px] uppercase tracking-[0.2em] mt-1">Crítico Gastronômico</p>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-24 items-start">
          <div>
            <span className="text-coffee-medium/40 font-bold tracking-[0.4em] uppercase text-[10px] block mb-8">Informações</span>
            <h2 className="text-5xl font-serif mb-12 leading-tight text-coffee-dark italic">Venha nos visitar.</h2>
            
            <div className="grid gap-12 text-sm">
              <div>
                <p className="opacity-40 uppercase tracking-[0.3em] font-bold text-[9px] mb-4">Endereço</p>
                <p className="text-lg font-serif text-coffee-dark">Rua das Amendoeiras, 402<br />São Paulo, SP — Brasil</p>
              </div>
              
              <div>
                <p className="opacity-40 uppercase tracking-[0.3em] font-bold text-[9px] mb-4">Horários</p>
                <p className="font-serif text-lg text-coffee-dark">Seg – Sex: 08:00 às 20:00<br />Sáb – Dom: 09:00 às 18:00</p>
              </div>

              <div className="flex gap-8 pt-4">
                <a href="#" className="text-[10px] uppercase tracking-widest font-bold border-b border-coffee-dark/20 pb-1 hover:border-coffee-dark transition-all text-coffee-dark">Instagram</a>
                <a href="#" className="text-[10px] uppercase tracking-widest font-bold border-b border-coffee-dark/20 pb-1 hover:border-coffee-dark transition-all text-coffee-dark">Newsletter</a>
              </div>
            </div>
          </div>
          
          <div className="h-[500px] bg-coffee-light relative grayscale overflow-hidden border border-coffee-dark/10">
            <img 
              src="https://images.unsplash.com/photo-1525610553991-3bee741053ee?auto=format&fit=crop&q=80&w=800" 
              alt="Atmosphere" 
              className="w-full h-full object-cover opacity-60"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="p-12 border border-white/40 backdrop-blur-sm text-center">
                <span className="text-white text-[11px] uppercase tracking-[0.4em] font-bold">Atmosphere</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white text-coffee-dark py-20 px-6 border-t border-coffee-dark/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
        <div>
          <div className="text-2xl font-serif italic tracking-tight text-coffee-dark mb-4">
            Grão & Aroma
          </div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-coffee-medium/40 font-bold">
            © 2024 Grão & Aroma. Todos os direitos reservados.
          </p>
        </div>
        
        <div className="flex gap-12 text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">
          <a href="#" className="hover:opacity-100 transition-opacity">Privacidade</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Trabalhe Conosco</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Eventos</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-coffee-light selection:text-coffee-dark">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

