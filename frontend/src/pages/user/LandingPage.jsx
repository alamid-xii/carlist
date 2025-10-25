import React, { useState } from "react";
import NavBar from "../../components/ui/navbar";
import PrimaryButton from "../../components/ui/primarybutton";
import Card from "../../components/ui/card";
import Panel from "../../components/ui/panel";
import Modal from "../../components/ui/modal"; // Import the Modal component

const LandingPage = ({ setPage }) => {
  const [showPanel, setShowPanel] = useState(false);
  const [showModal, setShowModal] = useState(false); // State for modal visibility

  const goToListing = () => {
    if (typeof setPage === "function") {
      setPage("car-listing");
    } else {
      window.location.href = "/listing";
    }
  };

  const handleExplore = (index) => {
    console.log("Explore clicked with index:", index);
    goToListing();
  };

  // Add function to handle test drive booking
  const handleBookTestDrive = () => {
    setShowPanel(true);
  };

  // Function to open models modal
  const handleExploreModels = () => {
    setShowModal(true);
  };

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

  const features = [
    {
      icon: "⚡",
      title: "Electric Performance",
      description: "Instant torque and lightning-fast acceleration with zero emissions. Experience the future of driving.",
    },
    {
      icon: "🔋",
      title: "Long Range",
      description: "Industry-leading battery technology providing exceptional range for all your journeys.",
    },
    {
      icon: "🚀",
      title: "Ludicrous Speed",
      description: "Breakthrough performance that redefines what's possible in electric vehicles.",
    },
    {
      icon: "🛡️",
      title: "Premium Safety",
      description: "Advanced autonomous driving features and comprehensive safety systems for complete protection.",
    },
    {
      icon: "🔧",
      title: "Smart Tech",
      description: "Cutting-edge technology with over-the-air updates and intelligent connectivity features.",
    },
    {
      icon: "🌱",
      title: "Sustainable",
      description: "Eco-friendly manufacturing and sustainable materials throughout every vehicle.",
    },
  ];

  const featuredCars = [
    {
      name: "Model S",
      type: "Performance Sedan",
      range: "396 mi",
      acceleration: "1.99s 0-60",
      price: "₱89,990",
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1200&h=800&fit=crop",
    },
    {
      name: "Model 3",
      type: "Compact Executive",
      range: "358 mi",
      acceleration: "3.1s 0-60",
      price: "₱42,990",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&h=800&fit=crop",
    },
    {
      name: "Model X",
      type: "SUV",
      range: "348 mi",
      acceleration: "2.5s 0-60",
      price: "₱99,990",
      image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1200&h=800&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden">
      {/* Use the new NavBar component */}
      <NavBar setPage={setPage} />

      {/* HERO SECTION - Adjusted padding for new navbar */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden ">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-4 w-48 h-48 sm:w-72 sm:h-72 bg-emerald-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute right-4 w-56 h-56 sm:w-96 sm:h-96 bg-teal-600/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-8">
            {/* Hero Content */}
            <div className="w-full lg:w-2/5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-4 py-2 sm:px-6 sm:py-3 rounded-full mb-6 sm:mb-8">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                <span className="text-emerald-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">
                  The Future is Electric
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight">
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  AUTO
                </span>
                <span className="text-white">LITE</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                Redefining automotive excellence with cutting-edge electric vehicles. 
                Experience unparalleled performance, luxury, and sustainability.
              </p>

              {/* Feature Highlights */}
              <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                <div className="flex items-start gap-2 sm:gap-3 text-gray-400 text-sm sm:text-base">
                  <span className="text-emerald-400 mt-1 flex-shrink-0">⚡</span>
                  <span>Lightweight carbon composite frame for speed and stability</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 text-gray-400 text-sm sm:text-base">
                  <span className="text-emerald-400 mt-1 flex-shrink-0">⚡</span>
                  <span>Aerodynamic precision for seamless power delivery</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 text-gray-400 text-sm sm:text-base">
                  <span className="text-emerald-400 mt-1 flex-shrink-0">⚡</span>
                  <span>0–100 km/h in under 3 seconds — engineered perfection</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <PrimaryButton 
                  label="Modal →" 
                  onClick={handleExploreModels} // Changed to open modal
                  size="large"
                  className="w-full sm:w-auto"
                />
                <PrimaryButton 
                  label="Panel" 
                  onClick={handleBookTestDrive}
                  type="outline"
                  size="large"
                  className="w-full sm:w-auto"
                />
              </div>
            </div>

            {/* Hero Image - Enhanced Styling */}
            <div className="w-full lg:w-3/5 mt-8 lg:mt-0 flex justify-center">
              <div className="relative w-full">
                <div className="relative bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-emerald-500/20 shadow-2xl">
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-black/50">
                    <img
                      src="https://img.freepik.com/premium-photo/modern-green-sports-car-black-background_849906-13434.jpg"
                      alt="AutoLite Electric Vehicle"
                      className="w-full h-[200px] sm:h-[350px] lg:h-[450px] object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                    {/* Enhanced overlay for better integration */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30"></div>
                    
                    {/* Floating elements for better visual integration */}
                    <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-2 rounded-lg">
                      <div className="text-sm font-semibold text-emerald-400">AutoLite GT</div>
                      <div className="text-xs text-gray-300">Performance Edition</div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full opacity-60"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-teal-400 rounded-full opacity-40"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-16 sm:py-20 bg-gradient-to-b from-gray-900 to-black px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                WHY
              </span> CHOOSE US?
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
              Unmatched innovation and performance in every aspect of our vehicles. 
              Experience the future of automotive technology today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                {...feature} 
                onClick={() => handleExplore(index)}
                className="hover:transform hover:-translate-y-2 transition-all duration-300"
              />
            ))}
          </div>

          <div className="text-center mt-12 sm:mt-16">
            <PrimaryButton 
              label="Explore All Features →" 
              onClick={handleExploreModels} // Changed to open modal
              size="large"
            />
          </div>
        </div>
      </section>

      {/* FEATURED MODELS SECTION */}
      <section id="models" className="py-16 sm:py-20 bg-gradient-to-b from-black to-gray-900 border-t border-emerald-500/20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6">
              FEATURED <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">MODELS</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              Discover our premium electric vehicle lineup designed for performance and sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {featuredCars.map((car, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-500 overflow-hidden group hover:transform hover:-translate-y-1 sm:hover:-translate-y-2"
              >
                <div className="h-48 sm:h-56 lg:h-64 overflow-hidden relative bg-black/30">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-emerald-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold">
                    NEW
                  </div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <div className="flex justify-between items-start mb-3 sm:mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{car.name}</h3>
                      <p className="text-gray-400 text-xs sm:text-sm">{car.type}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg sm:text-xl font-black text-emerald-400">{car.price}</div>
                      <div className="text-xs text-gray-400">Starting Price</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="text-center bg-gray-700/50 rounded-lg p-2 sm:p-3">
                      <div className="text-xs sm:text-sm text-gray-400">Range</div>
                      <div className="text-base sm:text-lg font-semibold text-emerald-400">{car.range}</div>
                    </div>
                    <div className="text-center bg-gray-700/50 rounded-lg p-2 sm:p-3">
                      <div className="text-xs sm:text-sm text-gray-400">0-60</div>
                      <div className="text-base sm:text-lg font-semibold text-emerald-400">{car.acceleration}</div>
                    </div>
                  </div>

                  <PrimaryButton 
                    label="View Details" 
                    onClick={handleExploreModels} // Changed to open modal
                    className="w-full"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <PrimaryButton 
              label="View All Models →" 
              onClick={handleExploreModels} // Changed to open modal
              size="large"
              type="outline"
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-emerald-900/40 via-black to-teal-900/40 border-y border-emerald-500/20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6">
            READY TO <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">DRIVE</span> THE FUTURE?
          </h2>
          <p className="text-lg sm:text-xl text-emerald-100 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
            Join thousands of satisfied customers who have already made the switch to electric. 
            Experience the AutoLite difference today with a personalized test drive.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <PrimaryButton 
              label="Book Your Test Drive →" 
              onClick={handleBookTestDrive}
              size="large"
              className="w-full sm:w-auto"
            />
            <PrimaryButton 
              label="Contact Sales" 
              onClick={() => console.log("Contact Sales")}
              type="outline"
              size="large"
              className="w-full sm:w-auto"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 border-t border-emerald-500/20 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-10">
            <div className="md:col-span-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-white font-bold text-sm sm:text-lg">AL</span>
                </div>
                <span className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  AutoLite
                </span>
              </div>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                Redefining automotive excellence with innovation, sustainability, and performance 
                that electrifies your drive into the future.
              </p>
            </div>

            <div className="text-center md:text-left">
              <h4 className="text-lg sm:text-xl font-bold text-emerald-400 mb-4 sm:mb-6">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-3">
                {['Home', 'Features', 'Models', 'Test Drive'].map((item) => (
                  <li key={item}>
                    <button 
                      onClick={() => {
                        if (item === 'Home') scrollToSection('home');
                        else if (item === 'Features') scrollToSection('features');
                        else if (item === 'Models') scrollToSection('models');
                        else handleBookTestDrive();
                      }}
                      className="text-gray-400 hover:text-emerald-400 transition-colors text-base sm:text-lg font-medium"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h4 className="text-lg sm:text-xl font-bold text-emerald-400 mb-4 sm:mb-6">Get in Touch</h4>
              <ul className="space-y-3 sm:space-y-4 text-gray-400">
                <li className="flex items-center justify-center md:justify-start gap-2 sm:gap-3">
                  <span className="text-emerald-400">📍</span>
                  <span className="text-sm sm:text-base">Mindoro State University</span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2 sm:gap-3">
                  <span className="text-emerald-400">📞</span>
                  <span className="text-sm sm:text-base">+63 912 345 6789</span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2 sm:gap-3">
                  <span className="text-emerald-400">✉️</span>
                  <span className="text-sm sm:text-base">contact@autolite.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
            <p className="text-gray-500 text-sm sm:text-lg">
              © {new Date().getFullYear()} AutoLite. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Panel Component */}
      {showPanel && (
        <Panel onClose={() => setShowPanel(false)} />
      )}

      {/* Modal Component */}
      <Modal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)}
        title="Explore Our Models"
      >
        <div className="space-y-6">
          <p className="text-gray-300 text-lg">
            Discover our complete lineup of electric vehicles. Each model is designed to deliver exceptional performance, luxury, and sustainability.
          </p>
          
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-xl">Available Models:</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                <span className="text-emerald-400">⚡</span>
                <span>AutoLite Model S - Performance Sedan</span>
              </li>
              <li className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                <span className="text-emerald-400">⚡</span>
                <span>AutoLite Model 3 - Compact Executive</span>
              </li>
              <li className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                <span className="text-emerald-400">⚡</span>
                <span>AutoLite Model X - SUV</span>
              </li>
              <li className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                <span className="text-emerald-400">⚡</span>
                <span>AutoLite Model Y - Crossover</span>
              </li>
              <li className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                <span className="text-emerald-400">⚡</span>
                <span>AutoLite Roadster - Sports Car</span>
              </li>
            </ul>
          </div>

          <div className="flex gap-3 pt-4">
            <PrimaryButton 
              label="View Full Catalog" 
              onClick={goToListing}
              className="flex-1"
            />
            <button
              onClick={() => setShowModal(false)}
              className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LandingPage;