import React from "react";
import NavBar from "../../components/ui/NavBar";
import PrimaryButton from "../../components/ui/PrimaryButton";
import Card from "../../components/ui/Card";

const LandingPage = () => {
  const handleExplore = (index) =>
    console.log("Explore clicked with index:", index);
  const handleOrder = () => console.log("Order button clicked");

  const features = [
    {
      icon: "⚡",
      title: "Electric Performance",
      description:
        "Instant torque and lightning-fast acceleration with zero emissions. Experience the future of driving.",
    },
    {
      icon: "🔋",
      title: "Long Range",
      description:
        "Industry-leading battery technology providing exceptional range for all your journeys.",
    },
    {
      icon: "🚀",
      title: "Ludicrous Speed",
      description:
        "Breakthrough performance that redefines what's possible in electric vehicles.",
    },
    {
      icon: "🛡️",
      title: "Premium Safety",
      description:
        "Advanced autonomous driving features and comprehensive safety systems for complete protection.",
    },
    {
      icon: "🔧",
      title: "Smart Tech",
      description:
        "Cutting-edge technology with over-the-air updates and intelligent connectivity features.",
    },
    {
      icon: "🌱",
      title: "Sustainable",
      description:
        "Eco-friendly manufacturing and sustainable materials throughout every vehicle.",
    },
  ];

  const carModels = [
    {
      name: "Model S",
      type: "Performance Sedan",
      range: "396 mi",
      acceleration: "1.99s 0-60",
      price: "$89,990",
      image:
        "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=600&fit=crop",
    },
    {
      name: "Model 3",
      type: "Compact Executive",
      range: "358 mi",
      acceleration: "3.1s 0-60",
      price: "$42,990",
      image:
        "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop",
    },
    {
      name: "Model X",
      type: "SUV",
      range: "348 mi",
      acceleration: "2.5s 0-60",
      price: "$99,990",
      image:
        "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=600&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-black text-white overflow-x-hidden">
      {/* ✅ Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-emerald-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <NavBar />
        </div>
      </div>

      {/* ✅ Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center bg-black overflow-hidden pt-20 sm:pt-15 px-4 sm:px-8 md:px-16">
        {/* Subtle Glow Backgrounds */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-emerald-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Side */}
          <div className="text-left max-w-xl">
            <h2 className="text-emerald-500 font-semibold uppercase tracking-widest text-sm sm:text-base mb-3">
              The Future is Electric
            </h2>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                AUTO
              </span>{" "}
              <span className="text-white">LITE</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
              Redefining automotive excellence with cutting-edge electric
              vehicles. Experience unparalleled performance, luxury, and
              sustainability.
            </p>

            <ul className="text-gray-400 text-sm sm:text-base mb-8 space-y-2">
              <li>
                ⚡ Lightweight carbon composite frame for speed and stability.
              </li>
              <li>⚡ Aerodynamic precision for seamless power delivery.</li>
              <li>⚡ 0–100 km/h in under 3 seconds — engineered perfection.</li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all duration-300">
                Explore Models →
              </button>
              <button className="px-6 py-3 border border-emerald-500 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-500/10 transition-all duration-300">
                Book Test Drive
              </button>
            </div>
          </div>

          {/* Car Image Side */}
          <img
  src="https://img.freepik.com/premium-photo/modern-green-sports-car-black-background_849906-13434.jpg"
  alt="Car"
  className="w-full max-w-5xl hover:scale-105 transition-transform duration-500 rounded-lg shadow-2xl"
/>

        </div>
      </section>

      {/* ✅ Features Section */}
      <section
        id="features"
        className="py-20 sm:py-24 bg-gray-900 px-4 sm:px-6 md:px-12 lg:px-20"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
            <span className="text-emerald-500">WHY</span> CHOOSE US?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-16 sm:mb-20 max-w-2xl mx-auto">
            Unmatched innovation and performance in every aspect of our
            vehicles.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
            {features.map((feature, i) => (
              <Card key={i} {...feature} onClick={() => handleExplore(i)} />
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Models Section */}
      <section
        id="models"
        className="py-20 sm:py-24 bg-black border-t border-emerald-500/20 px-4 sm:px-6 md:px-12 lg:px-20"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
            OUR <span className="text-emerald-500">MODELS</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-12">
            Discover the perfect electric vehicle for your lifestyle.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
            {carModels.map((car, i) => (
              <div
                key={i}
                className="bg-gray-900 rounded-xl border border-emerald-500/30 hover:border-emerald-500 transition duration-300 overflow-hidden group"
              >
                <div className="h-52 sm:h-60 md:h-64 overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2 sm:gap-0">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold">
                        {car.name}
                      </h3>
                      <p className="text-gray-400 text-sm sm:text-base">
                        {car.type}
                      </p>
                    </div>
                    <span className="text-emerald-500 text-lg sm:text-xl font-bold">
                      {car.price}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-3 bg-gray-800 rounded-lg text-center">
                      <div className="text-emerald-500 font-bold">
                        {car.range}
                      </div>
                      <div className="text-gray-400 text-xs sm:text-sm">
                        Range
                      </div>
                    </div>
                    <div className="p-3 bg-gray-800 rounded-lg text-center">
                      <div className="text-emerald-500 font-bold">
                        {car.acceleration}
                      </div>
                      <div className="text-gray-400 text-xs sm:text-sm">
                        0-60 mph
                      </div>
                    </div>
                  </div>
                  <PrimaryButton
                    label="Learn More"
                    onClick={() => handleExplore(i)}
                    type="outline"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ CTA Section */}
      <section className="py-20 sm:py-24 bg-gradient-to-r from-emerald-900/40 to-black border-y border-emerald-500/20 px-4 sm:px-6 md:px-12 lg:px-20 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 sm:mb-8">
            READY TO <span className="text-emerald-500">DRIVE</span>
            <br className="hidden sm:block" />
            THE FUTURE?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 sm:mb-12 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have already made the
            switch to electric. Experience the AutoLite difference today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <PrimaryButton
              label="Book Your Test Drive →"
              onClick={handleOrder}
              type="outline"
            />
            <PrimaryButton
              label="Contact Sales"
              onClick={() => console.log("Contact Sales")}
              type="outline"
            />
          </div>
        </div>
      </section>

      {/* ✅ Footer */}
      <footer className="py-10 sm:py-12 bg-gray-900 border-t border-emerald-500/20 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold">
                <span className="text-emerald-500">AUTO</span>LITE
              </h2>
              <p className="text-gray-400 mt-2 text-sm sm:text-base">
                Driving the electric revolution
              </p>
            </div>
            <div className="flex space-x-4 sm:space-x-6 text-sm sm:text-base">
              <a href="#" className="text-gray-400 hover:text-emerald-500">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500">
                Contact
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
            <p className="text-gray-500 text-xs sm:text-sm">
              © 2025 AutoLite. All rights reserved. The future is electric.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
