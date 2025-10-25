import React from "react";
import PrimaryButton from "./primarybutton";

const Panel = ({ onClose }) => {
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    carModel: "",
    color: "",
    location: "",
    message: ""
  });

  const [isVisible, setIsVisible] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(1);

  React.useEffect(() => {
    setTimeout(() => setIsVisible(true), 10);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Test drive booking submitted:", formData);
    handleClose();
  };

  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => prev - 1);

  const carModels = [
    "KIA EV6",
    "Tesla Model Y", 
    "BMW iX3",
    "Ford E-Explorer",
    "Honda Civic",
    "Tesla Model 3",
    "Toyota Supra",
    "BMW i8",
    "Audi e-Tron",
    "Porsche Taycan"
  ];

  const colors = [
    "Pearl White",
    "Midnight Black", 
    "Phantom Gray",
    "Electric Blue",
    "Racing Red",
    "Emerald Green"
  ];

  const locations = [
    "Main Showroom - Manila",
    "Luxury Center - Makati",
    "Express Branch - Quezon City",
    "Premium Outlet - BGC",
    "Test Track - Clark"
  ];

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
      />
      
      {/* DESKTOP PANEL - RIGHT SIDE CONNECTED TO SCREEN */}
      <div className={`hidden md:block fixed inset-y-0 right-0 z-50 transition-transform duration-500 ${
        isVisible ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="h-full w-[45rem] bg-gradient-to-br from-gray-900 via-black to-gray-900 border-l-0 border-t-2 border-b-2 border-emerald-500/40 rounded-l-2xl shadow-2xl overflow-hidden flex">
          {/* Left Side - Visual Section */}
          <div className="w-2/5 bg-gradient-to-br from-emerald-900/30 to-teal-900/20 border-r border-emerald-500/30 p-8 flex flex-col">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">AL</span>
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                AutoLite
              </span>
            </div>

            {/* Progress Steps */}
            <div className="space-y-6 mb-8">
              <div className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                currentStep >= 1 ? 'bg-emerald-500/20 border border-emerald-500/40' : 'bg-gray-800/30'
              }`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  currentStep >= 1 ? 'bg-emerald-500 text-white' : 'bg-gray-700 text-gray-400'
                }`}>
                  1
                </div>
                <div>
                  <div className="text-white font-semibold">Personal Details</div>
                  <div className="text-gray-400 text-sm">Your basic information</div>
                </div>
              </div>

              <div className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                currentStep >= 2 ? 'bg-emerald-500/20 border border-emerald-500/40' : 'bg-gray-800/30'
              }`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  currentStep >= 2 ? 'bg-emerald-500 text-white' : 'bg-gray-700 text-gray-400'
                }`}>
                  2
                </div>
                <div>
                  <div className="text-white font-semibold">Vehicle Selection</div>
                  <div className="text-gray-400 text-sm">Choose your preferred model</div>
                </div>
              </div>

              <div className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                currentStep >= 3 ? 'bg-emerald-500/20 border border-emerald-500/40' : 'bg-gray-800/30'
              }`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  currentStep >= 3 ? 'bg-emerald-500 text-white' : 'bg-gray-700 text-gray-400'
                }`}>
                  3
                </div>
                <div>
                  <div className="text-white font-semibold">Schedule & Location</div>
                  <div className="text-gray-400 text-sm">Pick time and place</div>
                </div>
              </div>
            </div>

            {/* Test Drive Benefits */}
            <div className="mt-auto space-y-3">
              <div className="flex items-center gap-3 text-emerald-400">
                <span className="text-lg">⚡</span>
                <span className="text-sm">30-minute exclusive test drive</span>
              </div>
              <div className="flex items-center gap-3 text-emerald-400">
                <span className="text-lg">🎯</span>
                <span className="text-sm">Expert guidance from our specialists</span>
              </div>
              <div className="flex items-center gap-3 text-emerald-400">
                <span className="text-lg">🏆</span>
                <span className="text-sm">No obligation to purchase</span>
              </div>
            </div>
          </div>

          {/* Right Side - Form Section (NO BORDER ON RIGHT) */}
          <div className="w-3/5 flex flex-col">
            {/* Header */}
            <div className="border-b border-emerald-500/30 p-6 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Premium <span className="text-emerald-400">Test Drive</span> Experience
                </h2>
                <p className="text-gray-400 text-sm">Complete your booking in 3 simple steps</p>
              </div>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-white text-xl p-2 transition-colors hover:bg-gray-800 rounded-lg"
              >
                ✕
              </button>
            </div>

            {/* Form Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Personal Details */}
                {currentStep === 1 && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-emerald-500/30 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-all"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-emerald-500/30 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-emerald-500/30 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-all"
                        placeholder="+63 XXX XXX XXXX"
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Vehicle Selection */}
                {currentStep === 2 && (
                  <div className="space-y-6 animate-fade-in">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Preferred Model *
                      </label>
                      <select
                        name="carModel"
                        value={formData.carModel}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-emerald-500/30 text-white focus:outline-none focus:border-emerald-500 transition-all"
                      >
                        <option value="">Select your preferred model</option>
                        {carModels.map(model => (
                          <option key={model} value={model}>{model}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Preferred Color
                      </label>
                      <select
                        name="color"
                        value={formData.color}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-emerald-500/30 text-white focus:outline-none focus:border-emerald-500 transition-all"
                      >
                        <option value="">Select color preference</option>
                        {colors.map(color => (
                          <option key={color} value={color}>{color}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {/* Step 3: Schedule & Location */}
                {currentStep === 3 && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-emerald-500/30 text-white focus:outline-none focus:border-emerald-500 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Preferred Time *
                        </label>
                        <select
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-emerald-500/30 text-white focus:outline-none focus:border-emerald-500 transition-all"
                        >
                          <option value="">Select time slot</option>
                          <option value="09:00">9:00 AM</option>
                          <option value="10:00">10:00 AM</option>
                          <option value="11:00">11:00 AM</option>
                          <option value="13:00">1:00 PM</option>
                          <option value="14:00">2:00 PM</option>
                          <option value="15:00">3:00 PM</option>
                          <option value="16:00">4:00 PM</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Preferred Location *
                      </label>
                      <select
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-emerald-500/30 text-white focus:outline-none focus:border-emerald-500 transition-all"
                      >
                        <option value="">Select location</option>
                        {locations.map(location => (
                          <option key={location} value={location}>{location}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Additional Notes
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="3"
                        className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-emerald-500/30 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-all resize-none"
                        placeholder="Any special requests, questions, or specific features you'd like to test..."
                      />
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-3 border border-emerald-500/30 text-emerald-400 rounded-xl hover:bg-gray-800 transition-colors font-semibold"
                    >
                      ← Previous
                    </button>
                  ) : (
                    <div></div>
                  )}

                  {currentStep < 3 ? (
                    <PrimaryButton
                      type="button"
                      label="Continue →"
                      onClick={nextStep}
                    />
                  ) : (
                    <PrimaryButton
                      type="submit"
                      label="Schedule Premium Test Drive"
                    />
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE PANEL - KEEP SIMPLE BOTTOM SHEET */}
      <div className={`md:hidden fixed inset-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}>
        <div className="flex items-end justify-center min-h-full">
          <div className="bg-gradient-to-br from-gray-900 to-black border-t border-emerald-500/30 rounded-t-2xl shadow-2xl w-full max-h-[85vh]">
            {/* Simple mobile content remains the same */}
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-12 h-1 bg-gray-600 rounded-full"></div>
            </div>
            <div className="px-6 pb-4 border-b border-emerald-500/20">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-white">
                  Book <span className="text-emerald-400">Test Drive</span>
                </h2>
                <button onClick={handleClose} className="text-gray-400 hover:text-white text-lg p-2">
                  ✕
                </button>
              </div>
            </div>
            <div className="p-6 max-h-[60vh] overflow-y-auto">
              {/* Simple mobile form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" placeholder="Full Name" required className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-emerald-500/30 text-white text-sm" />
                <input type="email" placeholder="Email" required className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-emerald-500/30 text-white text-sm" />
                <input type="tel" placeholder="Phone" required className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-emerald-500/30 text-white text-sm" />
                <PrimaryButton type="submit" label="Schedule Test Drive" className="w-full" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Panel;