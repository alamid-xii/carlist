import React, { useState } from "react";
import PrimaryButton from "../../components/ui/primarybutton";

const OrderModal = ({ car, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "cash",
    deliveryDate: "",
    color: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Available colors for cars
  const availableColors = [
    { name: "Pearl White", value: "white", code: "#F5F5F5" },
    { name: "Midnight Black", value: "black", code: "#1A1A1A" },
    { name: "Phantom Gray", value: "gray", code: "#4A5568" },
    { name: "Electric Blue", value: "blue", code: "#3182CE" },
    { name: "Racing Red", value: "red", code: "#E53E3E" },
    { name: "Emerald Green", value: "green", code: "#38A169" },
    { name: "Solar Orange", value: "orange", code: "#DD6B20" },
    { name: "Sunset Yellow", value: "yellow", code: "#D69E2E" }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleColorSelect = (color) => {
    setFormData(prev => ({
      ...prev,
      color: color.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setIsSubmitted(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      paymentMethod: "cash",
      deliveryDate: "",
      color: "",
      message: ""
    });
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
        <div className="bg-gray-800/90 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 mx-4 max-w-md w-full text-center transform animate-fade-in">
          {/* Success Animation */}
          <div className="w-20 h-20 mx-auto mb-4 relative">
            <div className="w-full h-full bg-emerald-500 rounded-full animate-ping absolute opacity-20"></div>
            <div className="w-full h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center relative">
              <span className="text-2xl text-white">✓</span>
            </div>
          </div>
          
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Order Confirmed! 🎉</h3>
          
          {/* Order Summary */}
          <div className="bg-gray-700/50 rounded-xl p-4 mb-4 border border-emerald-500/20">
            <div className="flex items-center gap-3 mb-3">
              <img
                src={car.image}
                alt={car.model}
                className="w-16 h-12 object-cover rounded-lg"
              />
              <div className="text-left">
                <h4 className="font-semibold text-white">{car.model}</h4>
                <p className="text-emerald-400 font-bold">{car.price}</p>
              </div>
            </div>
            
            {formData.color && (
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-400">Color:</span>
                <div className="flex items-center gap-2">
                  <div 
                    className="w-4 h-4 rounded-full border border-gray-600"
                    style={{ backgroundColor: availableColors.find(c => c.value === formData.color)?.code }}
                  ></div>
                  <span className="text-white">
                    {availableColors.find(c => c.value === formData.color)?.name}
                  </span>
                </div>
              </div>
            )}
            
            <div className="text-sm mt-2">
              <span className="text-gray-400">Order ID: </span>
              <span className="text-emerald-400 font-mono">#{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
            </div>
          </div>

          {/* Feedback Message */}
          <div className="space-y-3 text-sm">
            <p className="text-gray-300">
              Thank you <span className="text-emerald-400 font-semibold">{formData.fullName}</span> for ordering the <span className="text-emerald-400 font-semibold">{car.model}</span>!
            </p>
            <p className="text-gray-400">
              We've sent a confirmation email to <span className="text-emerald-400">{formData.email}</span>
            </p>
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-3">
              <p className="text-emerald-400 font-semibold text-sm">
                📞 Our sales team will contact you within 24 hours at {formData.phone}
              </p>
            </div>
          </div>

          {/* Next Steps */}
          <div className="mt-6 p-4 bg-gray-700/30 rounded-lg border border-gray-600/50">
            <h4 className="font-semibold text-white text-sm mb-2">What's Next?</h4>
            <ul className="text-xs text-gray-400 space-y-1 text-left">
              <li>• Sales representative will confirm details</li>
              <li>• Schedule vehicle inspection & test drive</li>
              <li>• Complete payment process</li>
              <li>• Arrange delivery (5-7 business days)</li>
            </ul>
          </div>

          <button
            onClick={handleClose}
            className="mt-6 w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Close & Continue Browsing
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-gray-800/90 border border-emerald-500/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-emerald-500/20">
          <div className="flex justify-between items-center">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Order <span className="text-emerald-400">{car.model}</span>
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-2xl p-2 transition-colors"
            >
              ✕
            </button>
          </div>
          <p className="text-gray-400 text-sm mt-2">
            Complete your purchase by filling out the form below
          </p>
        </div>

        {/* Car Summary */}
        <div className="p-6 border-b border-emerald-500/20">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <img
              src={car.image}
              alt={car.model}
              className="w-24 h-16 sm:w-32 sm:h-20 object-cover rounded-lg"
            />
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-lg font-bold text-white">{car.model}</h3>
              <p className="text-emerald-400 text-xl font-black">{car.price}</p>
              <p className="text-gray-400 text-sm">{car.description}</p>
            </div>
          </div>
        </div>

        {/* Order Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {/* Full Name */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-emerald-500/30 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-all"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
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
                className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-emerald-500/30 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-all"
                placeholder="your@email.com"
              />
            </div>

            {/* Phone */}
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
                className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-emerald-500/30 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-all"
                placeholder="+63 XXX XXX XXXX"
              />
            </div>

            {/* Color Selection */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Select Color *
              </label>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                {availableColors.map((color) => (
                  <button
                    key={color.value}
                    type="button"
                    onClick={() => handleColorSelect(color)}
                    className={`flex flex-col items-center gap-1 p-2 rounded-lg border-2 transition-all ${
                      formData.color === color.value
                        ? 'border-emerald-500 bg-emerald-500/10 scale-105'
                        : 'border-gray-600 bg-gray-700/50 hover:border-emerald-400/50'
                    }`}
                  >
                    <div
                      className="w-8 h-8 rounded-full border border-gray-600"
                      style={{ backgroundColor: color.code }}
                    ></div>
                    <span className="text-xs text-gray-300 hidden sm:block">
                      {color.name.split(' ')[0]}
                    </span>
                  </button>
                ))}
              </div>
              {formData.color && (
                <p className="text-sm text-emerald-400 mt-2 flex items-center gap-2">
                  <span>Selected:</span>
                  <span className="font-semibold">
                    {availableColors.find(c => c.value === formData.color)?.name}
                  </span>
                  <div 
                    className="w-4 h-4 rounded-full border border-gray-600"
                    style={{ backgroundColor: availableColors.find(c => c.value === formData.color)?.code }}
                  ></div>
                </p>
              )}
            </div>

            {/* Address */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Delivery Address *
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                rows="3"
                className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-emerald-500/30 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-all resize-none"
                placeholder="Enter your complete address"
              />
            </div>

            {/* Payment Method */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Payment Method *
              </label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-emerald-500/30 text-white focus:outline-none focus:border-emerald-500 transition-all"
              >
                <option value="cash">Cash</option>
                <option value="bank-transfer">Bank Transfer</option>
                <option value="credit-card">Credit Card</option>
                <option value="financing">Auto Financing</option>
              </select>
            </div>

            {/* Delivery Date */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Preferred Delivery Date
              </label>
              <input
                type="date"
                name="deliveryDate"
                value={formData.deliveryDate}
                onChange={handleInputChange}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-emerald-500/30 text-white focus:outline-none focus:border-emerald-500 transition-all"
              />
            </div>

            {/* Additional Message */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Additional Notes
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-emerald-500/30 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-all resize-none"
                placeholder="Any special requests or questions..."
              />
            </div>
          </div>

          {/* Form Validation */}
          {!formData.color && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
              <p className="text-red-400 text-sm flex items-center gap-2">
                ⚠️ Please select a color for your vehicle
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border border-emerald-500/30 text-emerald-400 rounded-xl hover:bg-gray-700 transition-colors font-semibold"
            >
              Cancel
            </button>
            <PrimaryButton
              type="submit"
              label={isSubmitting ? "Processing Order..." : "Confirm Order"}
              disabled={isSubmitting || !formData.color}
              className="px-6 py-3"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderModal;