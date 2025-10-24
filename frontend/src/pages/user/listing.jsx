import React, { useState } from "react";
import PrimaryButton from "../../components/ui/primarybutton";
import OrderModal from "./order";

const CarListing = ({ setPage }) => {
  const cars = [
    // Your existing cars array remains the same
    {
      model: "KIA EV6",
      category: "electric",
      image: "https://www.kia.com/content/dam/kwcms/ph/en/images/showroom/category/kia-ph-EV6-category.jpg",
      description: "Performance sedan with exceptional range.",
      price: "₱3,288,000",
      range: "528 km",
      acceleration: "5.2s 0-100",
      power: "229 HP",
      charging: "18 mins (10-80%)"
    },
    ,
    {
      model: "Tesla Model Y",
      category: "compact",
      image: "https://cdn.motor1.com/images/mgl/Rq9JQA/s1/tesla-model-y.jpg",
      description: "Compact executive with premium features and efficiency.",
      price: "₱2,899,000",
      range: "533 km",
      acceleration: "5.0s 0-100",
      power: "384 HP",
      charging: "15 mins (10-80%)"
    },
    {
      model: "BMW iX3",
      category: "suv",
      image: "https://www.electrichunter.com/sites/default/files/field/image/BMW-iX3-electric-SUV-2020-2021-car-i15.jpg",
      description: "Spacious SUV with advanced tech and premium comfort.",
      price: "₱4,200,000",
      range: "460 km",
      acceleration: "6.8s 0-100",
      power: "286 HP",
      charging: "32 mins (10-80%)"
    },
    {
      model: "Ford E-Explorer",
      category: "suv",
      image: "https://www.cardivision.com/sites/default/files/image-gallery/2025-Ford-Explorer-SUV-20.webp",
      description: "Versatile compact SUV with ample cargo space.",
      price: "₱2,750,000",
      range: "500 km",
      acceleration: "6.1s 0-100",
      power: "335 HP",
      charging: "25 mins (10-80%)"
    },
    // Original cars
    {
      model: "Honda Civic",
      category: "sedan",
      image: "https://wallpaperaccess.com/full/3321533.jpg",
      description: "A perfect blend of performance and practicality.",
      price: "₱1,500,000",
      engine: "1.5L Turbo",
      power: "182 HP",
      transmission: "CVT"
    },
    {
      model: "Tesla Model 3",
      category: "electric",
      image: "https://www.slashgear.com/img/gallery/tesla-model-3-highland-arrives-in-the-us-heres-whats-changed/l-intro-1704905754.jpg",
      description: "Electric performance with cutting-edge technology.",
      price: "₱2,800,000",
      range: "602 km",
      acceleration: "3.3s 0-100",
      power: "510 HP",
      charging: "15 mins (10-80%)"
    },
    {
      model: "Toyota Supra",
      category: "sports",
      image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800",
      description: "Iconic design meets pure performance.",
      price: "₱3,200,000",
      engine: "3.0L Turbo",
      power: "382 HP",
      transmission: "8-Speed Auto"
    },
    {
      model: "BMW i8",
      category: "sports",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800",
      description: "Hybrid supercar with futuristic aesthetics.",
      price: "₱6,900,000",
      engine: "1.5L Hybrid",
      power: "369 HP",
      acceleration: "4.4s 0-100"
    },
    {
      model: "Audi e-Tron",
      category: "suv",
      image: "https://cdn.motor1.com/images/mgl/AkQyYN/s1/audi-rs-e-tron-performance-2024.jpg",
      description: "Luxury, comfort, and electric performance.",
      price: "₱5,400,000",
      range: "441 km",
      acceleration: "5.7s 0-100",
      power: "402 HP",
      charging: "30 mins (10-80%)"
    },
    {
      model: "Porsche Taycan",
      category: "sports",
      image: "https://images-porsche.imgix.net/-/media/6BF9339BD82C46719C7623C3BE74A47A_81BB939B72E7497A98A271568E884169_taycan?w=792&q=45&dpr=2&auto=format",
      description: "Unmatched power in a sleek electric package.",
      price: "₱8,200,000",
      range: "452 km",
      acceleration: "2.8s 0-100",
      power: "616 HP",
      charging: "22.5 mins (10-80%)"
    },
    // Additional cars
    {
      model: "Ford Mustang Mach-E",
      category: "suv",
      image: "https://www.automaistv.com.br/wp-content/uploads/2022/09/ford_mustang_mach-e_gt_performance_edition_47_edited.jpg",
      description: "American muscle meets electric innovation.",
      price: "₱3,800,000",
      range: "491 km",
      acceleration: "3.5s 0-100",
      power: "480 HP",
      charging: "27 mins (10-80%)"
    },
    {
      model: "Toyota RAV4",
      category: "suv",
      image: "https://cdn.automobile-propre.com/uploads/2023/05/Toyota-RAV4-Trail-2023-1.jpg",
      description: "Reliable and versatile family SUV.",
      price: "₱2,100,000",
      engine: "2.5L Hybrid",
      power: "219 HP",
      transmission: "e-CVT"
    },
    {
      model: "Mercedes-Benz E-Class",
      category: "luxury",
      image: "https://www.motortrend.com/files/671009706009ab00079dfbaa/001-2025-mercedes-benz-e350-4matic-front-view.jpg",
      description: "Executive luxury with advanced technology.",
      price: "₱4,500,000",
      engine: "2.0L Turbo",
      power: "255 HP",
      transmission: "9-Speed Auto"
    },
    {
      model: "Nissan GT-R",
      category: "sports",
      image: "https://cdn.motor1.com/images/mgl/9m9W20/s1/2023-nissan-gt-r.jpg",
      description: "Legendary performance and track-ready capabilities.",
      price: "₱7,800,000",
      engine: "3.8L Twin-Turbo",
      power: "565 HP",
      transmission: "6-Speed Auto"
    },
    {
      model: "Hyundai Tucson",
      category: "suv",
      image: "https://tse2.mm.bing.net/th/id/OIP.UjlOjxC6J61qIDknSATWcgHaEK?pid=Api&P=0&h=180",
      description: "Modern design with smart features.",
      price: "₱1,800,000",
      engine: "2.0L Smartstream",
      power: "156 HP",
      transmission: "6-Speed Auto"
    },
    {
      model: "Chevrolet Corvette",
      category: "sports",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800",
      description: "American sports car icon with stunning performance.",
      price: "₱5,200,000",
      engine: "6.2L V8",
      power: "495 HP",
      transmission: "8-Speed Auto"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Cars', icon: '🚗' },
    { id: 'sedan', name: 'Sedans', icon: '🚙' },
    { id: 'suv', name: 'SUVs', icon: '🚘' },
    { id: 'sports', name: 'Sports', icon: '🏎️' },
    { id: 'electric', name: 'Electric', icon: '⚡' },
    { id: 'luxury', name: 'Luxury', icon: '💎' },
    { id: 'compact', name: 'Compact', icon: '🚗' }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCar, setSelectedCar] = useState(null);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const carsPerPage = 6;

  // Filter cars based on category and search term
  const filteredCars = cars.filter(car => {
    const matchesCategory = selectedCategory === 'all' || car.category === selectedCategory;
    const matchesSearch = car.model.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredCars.length / carsPerPage);
  const startIndex = (currentPage - 1) * carsPerPage;
  const currentCars = filteredCars.slice(startIndex, startIndex + carsPerPage);

  // Reset to page 1 when search term or category changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  // Handle Order Now button click
  const handleOrderNow = (car) => {
    setSelectedCar(car);
    setShowOrderModal(true);
  };

  // Function to render car specifications
  const renderSpecs = (car) => {
    if (car.category === 'electric') {
      return (
        <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2">
          <div className="text-center">
            <div className="text-xs text-gray-400 mb-1">RANGE</div>
            <div className="text-sm font-bold text-emerald-400">{car.range}</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-400 mb-1">0-100</div>
            <div className="text-sm font-bold text-emerald-400">{car.acceleration}</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-400 mb-1">POWER</div>
            <div className="text-sm font-bold text-emerald-400">{car.power}</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-400 mb-1">FAST CHARGE</div>
            <div className="text-sm font-bold text-emerald-400">{car.charging}</div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2">
          <div className="text-center">
            <div className="text-xs text-gray-400 mb-1">ENGINE</div>
            <div className="text-sm font-bold text-emerald-400">{car.engine}</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-400 mb-1">POWER</div>
            <div className="text-sm font-bold text-emerald-400">{car.power}</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-400 mb-1">TRANSMISSION</div>
            <div className="text-sm font-bold text-emerald-400">{car.transmission}</div>
          </div>
          {car.acceleration && (
            <div className="text-center">
              <div className="text-xs text-gray-400 mb-1">0-100</div>
              <div className="text-sm font-bold text-emerald-400">{car.acceleration}</div>
            </div>
          )}
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Mobile-Optimized Header */}
      <div className="fixed top-0 left-0 w-full z-50 bg-black/95 backdrop-blur-xl border-b border-emerald-500/30 shadow-2xl">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="flex items-center justify-between py-3 sm:py-4">
            <button 
              onClick={() => setPage("landing")}
              className="flex items-center gap-1 sm:gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold group flex-shrink-0"
            >
              <span className="group-hover:-translate-x-1 transition-transform text-base sm:text-lg">←</span>
              <span className="text-xs sm:text-sm hidden xs:inline">Back to Home</span>
              <span className="text-xs sm:text-sm xs:hidden">Back</span>
            </button>
            
            <div className="text-center flex-1 mx-2">
              <h1 className="text-lg sm:text-xl font-black truncate">
                CAR <span className="text-emerald-400">LISTINGS</span>
              </h1>
            </div>
            
            <div className="w-12 sm:w-20 flex-shrink-0"></div>
          </div>
        </div>
      </div>

      {/* Main Content with Mobile Padding */}
      <div className="pt-16 sm:pt-20 pb-8 sm:pb-16 px-3 sm:px-6 max-w-7xl mx-auto">
        {/* Category Filters - Centered and Mobile Scrollable */}
        <div className="mb-6">
          <div className="flex justify-center overflow-x-auto pb-2 gap-1 sm:gap-2 scrollbar-hide -mx-3 px-3 sm:mx-0 sm:px-0">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-1 sm:gap-2 px-3 py-2 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 flex-shrink-0 whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700 border border-emerald-500/20 hover:border-emerald-500/40'
                }`}
              >
                <span className="text-xs sm:text-sm">{category.icon}</span>
                <span className="text-xs sm:text-sm">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar - Mobile Optimized */}
        <div className="mb-8 sm:mb-10">
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-400 text-sm">🔍</span>
            </div>
            <input
              type="text"
              placeholder="Search car model..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-10 py-2 sm:py-3 w-full rounded-lg sm:rounded-xl bg-gray-800/50 border border-emerald-500/30 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all text-sm sm:text-base"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            )}
          </div>
          
          <p className="text-gray-400 mt-2 text-xs sm:text-sm text-center">
            Showing {filteredCars.length} {filteredCars.length === 1 ? 'car' : 'cars'}
            {selectedCategory !== 'all' && ` in ${categories.find(cat => cat.id === selectedCategory)?.name}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>

        {/* Car Cards - Mobile Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {currentCars.map((car, i) => (
            <div
              key={i}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-emerald-500/20 hover:border-green-300 hover:border-2 transition-all duration-500 overflow-hidden group hover:transform hover:-translate-y-1 sm:hover:-translate-y-2 shadow-lg"
            >
              <div className="h-40 sm:h-48 lg:h-56 overflow-hidden relative bg-gradient-to-br from-gray-800 to-gray-900">
                <img
                  src={car.image}
                  alt={car.model}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                  {car.category.toUpperCase()}
                </div>
                
                <div className="absolute bottom-1 left-3 sm:bottom-3 sm:left-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow-lg">{car.model}</h3>
                </div>
              </div>
              
              <div className="p-2 sm:p-4">
                <p className="text-gray-300 text-xs sm:text-sm mb-2 sm:mb-4 leading-relaxed border-b border-gray-700/50 pb-3 sm:pb-4">
                  {car.description}
                </p>
                
                {renderSpecs(car)}
                
                <div className="flex justify-between items-center pt-1 sm:pt-1 border-t border-gray-700/50">
                  <div>
                    <div className="text-lg sm:text-xl lg:text-2xl font-black text-emerald-400">{car.price}</div>
                    <div className="text-xs text-gray-400">Starting Price</div>
                  </div>
                  {/* Changed from "View Details" to "Order Now" */}
                  <button 
                    onClick={() => handleOrderNow(car)}
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {currentCars.length === 0 && (
          <div className="text-center py-8 sm:py-12 bg-gray-800/50 rounded-xl sm:rounded-2xl border border-emerald-500/20 mx-2 sm:mx-0">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🚗</div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">No cars found</h3>
            <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4 px-4">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="text-emerald-400 hover:text-emerald-300 font-semibold text-sm sm:text-base"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-1 sm:gap-2 flex-wrap">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1.5 sm:px-4 sm:py-2 border border-emerald-500/30 rounded-lg sm:rounded-xl disabled:opacity-50 hover:bg-gray-700 transition-colors text-gray-300 font-semibold text-xs sm:text-sm"
            >
              Previous
            </button>
            
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl font-semibold transition-all text-xs sm:text-sm ${
                  currentPage === index + 1
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
                    : 'border border-emerald-500/20 hover:border-b-emerald-400 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {index + 1}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1.5 sm:px-4 sm:py-2 border border-emerald-500/30 rounded-lg sm:rounded-xl disabled:opacity-50 hover:bg-gray-700 transition-colors text-gray-300 font-semibold text-xs sm:text-sm"
            >
              Next
            </button>
          </div>
        )}

        {/* Bottom Back Button */}
        <div className="text-center mt-4 sm:mt-8">
          <PrimaryButton
            label="← Back to Home"
            type="outline"
            onClick={() => setPage("landing")}
            className="w-full sm:w-auto"
          />
        </div>
      </div>

      {/* Order Modal */}
      {showOrderModal && selectedCar && (
        <OrderModal 
          car={selectedCar}
          onClose={() => setShowOrderModal(false)}
        />
      )}
    </div>
  );
};

export default CarListing;