import React, { useState, useEffect } from "react";
import PrimaryButton from "./primarybutton";

const NavBar = ({ setPage }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  
  const goToListing = () => {
    if (typeof setPage === "function") {
      setPage("car-listing");
    } else {
      window.location.href = "/listing";
    }
  };

  // Detect scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detect active section
  useEffect(() => {
    const sections = ['home', 'features', 'models', 'contact'];
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: '-20% 0px -60% 0px', threshold: 0.2 });

    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { id: 'features', label: 'Features', icon: '⚡' },
    { id: 'models', label: 'Models', icon: '🚗' },
    { id: 'contact', label: 'Contact', icon: '📞' }
  ];

  return (
    <>
      {/* Desktop Navigation - Enhanced Fixed */}
      <nav className={`hidden md:block w-full fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-black border-b-2 border-emerald-500/30 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-xl border-b border-emerald-500/30 shadow-2xl py-2' 
          : 'bg-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center px-6">
            {/* Logo with scroll effect */}
            <h1 className={`text-3xl font-bold transition-all duration-500 ${
              isScrolled ? 'text-white scale-95' : 'text-white'
            }`}>
              <span className="text-emerald-500">AUTO</span>LITE
            </h1>
            
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative text-gray-300 hover:text-emerald-400 text-lg transition-colors duration-300 group px-4 py-2"
                >
                  {item.label}
                  
                  {/* Enhanced Center-Out Underline */}
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                  
                  {/* Active State Overlay */}
                  <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-emerald-400 transition-all duration-500 ${
                    activeSection === item.id ? 'opacity-100' : 'opacity-0'
                  }`}></span>
                </button>
              ))}
              <PrimaryButton 
                label="Get Started" 
                onClick={goToListing}
                className={isScrolled ? 'scale-95' : ''}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Fixed */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-emerald-500/20 z-50">
  <div className="flex justify-around items-center py-1 px-1">
    {navItems.map((item) => (
      <button
        key={item.id}
        onClick={() => scrollToSection(item.id)}
        className="flex flex-col items-center text-gray-400 hover:text-emerald-400 transition-colors flex-1 py-0 relative group"
      >
        <span className="text-xs">{item.icon}</span>
        <span className="text-[10px] mt-0.5">{item.label}</span>
        
        {/* Mobile Center-Out Underline - Adjusted position */}
        <span className={`absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-6 ${
          activeSection === item.id ? 'w-6' : ''
        }`}></span>
      </button>
    ))}
    <div className=" flex justify-center">
      <PrimaryButton 
        label="Get Started" 
        className="px-0 py-0 text-xs"
        onClick={goToListing}
      />
    </div>
  </div>
</nav>

      {/* Spacers for fixed navigation */}
      {/*<div className="hidden md:block h-0 bg-transparent"></div>* Desktop spacer - adjust based on your content */}
      <div className="md:hidden h-5"></div> {/* Mobile spacer */}
    </>
  );
};

export default NavBar;