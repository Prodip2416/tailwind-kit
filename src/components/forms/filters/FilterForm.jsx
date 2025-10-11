import { useState, useEffect } from 'react';

const FilterForm = () => {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const [filters, setFilters] = useState({
    category: [],
    priceRange: { min: '', max: '' },
    brand: [],
    rating: '',
    availability: '',
    features: [],
    color: [],
    size: [],
    material: [],
    condition: '',
    sortBy: 'relevance',
  });

  const [filteredItems, setFilteredItems] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);

  // Mock data for demonstration
  const mockItems = [
    {
      id: 1,
      name: 'Wireless Bluetooth Headphones',
      category: 'electronics',
      brand: 'TechSound',
      price: 89.99,
      rating: 4.5,
      availability: 'in-stock',
      features: ['noise-cancelling', 'wireless', 'long-battery'],
      color: ['black', 'white'],
      size: 'one-size',
      material: 'plastic',
      condition: 'new',
    },
    {
      id: 2,
      name: 'Organic Cotton T-Shirt',
      category: 'clothing',
      brand: 'EcoWear',
      price: 24.99,
      rating: 4.2,
      availability: 'in-stock',
      features: ['organic', 'sustainable'],
      color: ['white', 'blue', 'green'],
      size: 'medium',
      material: 'cotton',
      condition: 'new',
    },
    {
      id: 3,
      name: 'Stainless Steel Water Bottle',
      category: 'accessories',
      brand: 'HydroMax',
      price: 19.99,
      rating: 4.7,
      availability: 'limited',
      features: ['insulated', 'leak-proof', 'bpa-free'],
      color: ['silver', 'black'],
      size: 'large',
      material: 'stainless-steel',
      condition: 'new',
    },
    {
      id: 4,
      name: 'Gaming Mechanical Keyboard',
      category: 'electronics',
      brand: 'GameTech',
      price: 149.99,
      rating: 4.8,
      availability: 'in-stock',
      features: ['rgb-lighting', 'mechanical-switches', 'programmable'],
      color: ['black'],
      size: 'full-size',
      material: 'plastic',
      condition: 'new',
    },
    {
      id: 5,
      name: 'Vintage Leather Jacket',
      category: 'clothing',
      brand: 'RetroStyle',
      price: 199.99,
      rating: 4.3,
      availability: 'out-of-stock',
      features: ['vintage', 'genuine-leather'],
      color: ['brown', 'black'],
      size: 'large',
      material: 'leather',
      condition: 'used',
    },
  ];

  const filterOptions = {
    category: [
      { value: 'electronics', label: 'Electronics' },
      { value: 'clothing', label: 'Clothing' },
      { value: 'accessories', label: 'Accessories' },
      { value: 'home', label: 'Home & Garden' },
      { value: 'sports', label: 'Sports & Outdoors' },
    ],
    brand: [
      { value: 'TechSound', label: 'TechSound' },
      { value: 'EcoWear', label: 'EcoWear' },
      { value: 'HydroMax', label: 'HydroMax' },
      { value: 'GameTech', label: 'GameTech' },
      { value: 'RetroStyle', label: 'RetroStyle' },
    ],
    features: [
      { value: 'noise-cancelling', label: 'Noise Cancelling' },
      { value: 'wireless', label: 'Wireless' },
      { value: 'long-battery', label: 'Long Battery' },
      { value: 'organic', label: 'Organic' },
      { value: 'sustainable', label: 'Sustainable' },
      { value: 'insulated', label: 'Insulated' },
      { value: 'leak-proof', label: 'Leak Proof' },
      { value: 'bpa-free', label: 'BPA Free' },
      { value: 'rgb-lighting', label: 'RGB Lighting' },
      { value: 'mechanical-switches', label: 'Mechanical Switches' },
      { value: 'programmable', label: 'Programmable' },
      { value: 'vintage', label: 'Vintage' },
      { value: 'genuine-leather', label: 'Genuine Leather' },
    ],
    color: [
      { value: 'black', label: 'Black' },
      { value: 'white', label: 'White' },
      { value: 'blue', label: 'Blue' },
      { value: 'green', label: 'Green' },
      { value: 'silver', label: 'Silver' },
      { value: 'brown', label: 'Brown' },
    ],
    size: [
      { value: 'one-size', label: 'One Size' },
      { value: 'small', label: 'Small' },
      { value: 'medium', label: 'Medium' },
      { value: 'large', label: 'Large' },
      { value: 'full-size', label: 'Full Size' },
    ],
    material: [
      { value: 'plastic', label: 'Plastic' },
      { value: 'cotton', label: 'Cotton' },
      { value: 'stainless-steel', label: 'Stainless Steel' },
      { value: 'leather', label: 'Leather' },
      { value: 'wood', label: 'Wood' },
    ],
    condition: [
      { value: 'new', label: 'New' },
      { value: 'used', label: 'Used' },
      { value: 'refurbished', label: 'Refurbished' },
    ],
    availability: [
      { value: 'in-stock', label: 'In Stock' },
      { value: 'limited', label: 'Limited Stock' },
      { value: 'out-of-stock', label: 'Out of Stock' },
    ],
    rating: [
      { value: '4.5', label: '4.5+ Stars' },
      { value: '4.0', label: '4.0+ Stars' },
      { value: '3.5', label: '3.5+ Stars' },
      { value: '3.0', label: '3.0+ Stars' },
    ],
    sortBy: [
      { value: 'relevance', label: 'Relevance' },
      { value: 'price-low', label: 'Price: Low to High' },
      { value: 'price-high', label: 'Price: High to Low' },
      { value: 'rating', label: 'Highest Rated' },
      { value: 'name', label: 'Name A-Z' },
    ],
  };

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => {
      if (Array.isArray(prev[filterType])) {
        // Handle array filters (checkboxes)
        return {
          ...prev,
          [filterType]: prev[filterType].includes(value)
            ? prev[filterType].filter((item) => item !== value)
            : [...prev[filterType], value],
        };
      } else if (filterType === 'priceRange') {
        // Handle price range separately
        return {
          ...prev,
          priceRange: { ...prev.priceRange, ...value },
        };
      } else {
        // Handle single value filters (selects, radios)
        return {
          ...prev,
          [filterType]: value,
        };
      }
    });
  };

  const applyFilters = () => {
    setIsFiltering(true);

    // Simulate filtering delay
    setTimeout(() => {
      let filtered = [...mockItems];

      // Filter by category
      if (filters.category.length > 0) {
        filtered = filtered.filter((item) =>
          filters.category.includes(item.category)
        );
      }

      // Filter by brand
      if (filters.brand.length > 0) {
        filtered = filtered.filter((item) =>
          filters.brand.includes(item.brand)
        );
      }

      // Filter by price range
      if (filters.priceRange.min || filters.priceRange.max) {
        filtered = filtered.filter((item) => {
          const price = item.price;
          const min = filters.priceRange.min
            ? parseFloat(filters.priceRange.min)
            : 0;
          const max = filters.priceRange.max
            ? parseFloat(filters.priceRange.max)
            : Infinity;
          return price >= min && price <= max;
        });
      }

      // Filter by rating
      if (filters.rating) {
        filtered = filtered.filter(
          (item) => item.rating >= parseFloat(filters.rating)
        );
      }

      // Filter by availability
      if (filters.availability) {
        filtered = filtered.filter(
          (item) => item.availability === filters.availability
        );
      }

      // Filter by features
      if (filters.features.length > 0) {
        filtered = filtered.filter((item) =>
          filters.features.some((feature) => item.features.includes(feature))
        );
      }

      // Filter by color
      if (filters.color.length > 0) {
        filtered = filtered.filter((item) =>
          filters.color.some((color) => item.color.includes(color))
        );
      }

      // Filter by size
      if (filters.size.length > 0) {
        filtered = filtered.filter((item) => filters.size.includes(item.size));
      }

      // Filter by material
      if (filters.material.length > 0) {
        filtered = filtered.filter((item) =>
          filters.material.includes(item.material)
        );
      }

      // Filter by condition
      if (filters.condition) {
        filtered = filtered.filter(
          (item) => item.condition === filters.condition
        );
      }

      // Sort results
      switch (filters.sortBy) {
        case 'price-low':
          filtered.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          filtered.sort((a, b) => b.price - a.price);
          break;
        case 'rating':
          filtered.sort((a, b) => b.rating - a.rating);
          break;
        case 'name':
          filtered.sort((a, b) => a.name.localeCompare(b.name));
          break;
        default:
          // Keep original order for relevance
          break;
      }

      setFilteredItems(filtered);
      setIsFiltering(false);
    }, 500);
  };

  const clearAllFilters = () => {
    setFilters({
      category: [],
      priceRange: { min: '', max: '' },
      brand: [],
      rating: '',
      availability: '',
      features: [],
      color: [],
      size: [],
      material: [],
      condition: '',
      sortBy: 'relevance',
    });
    setFilteredItems([]);
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    Object.entries(filters).forEach(([key, value]) => {
      if (key === 'priceRange') {
        if (value.min || value.max) count++;
      } else if (Array.isArray(value)) {
        if (value.length > 0) count++;
      } else if (value && value !== 'relevance') {
        count++;
      }
    });
    return count;
  };

  const CheckboxGroup = ({ title, options, filterType, selectedValues }) => (
    <div className="space-y-2">
      <h4 className="text-sm font-medium text-gray-900 dark:text-blue-100">
        {title}
      </h4>
      <div className="space-y-2 max-h-32 overflow-y-auto">
        {options.map((option) => (
          <label key={option.value} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selectedValues.includes(option.value)}
              onChange={() => handleFilterChange(filterType, option.value)}
              className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-slate-700 dark:border-slate-600"
            />
            <span className="text-sm text-gray-700 dark:text-blue-200">
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );

  const SelectFilter = ({ title, options, filterType, value }) => (
    <div className="space-y-2">
      <h4 className="text-sm font-medium text-gray-900 dark:text-blue-100">
        {title}
      </h4>
      <select
        value={value}
        onChange={(e) => handleFilterChange(filterType, e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );

  const generateCode = () => {
    return `import { useState, useEffect } from 'react';

const FilterForm = () => {
  const [filters, setFilters] = useState({
    category: [],
    priceRange: { min: '', max: '' },
    brand: [],
    rating: '',
    availability: '',
    features: [],
    sortBy: 'name',
  });
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFilterChange = (filterType, value) => {
    // Filter change implementation
  };

  const clearFilters = () => {
    // Clear filters implementation
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-blue-100 mb-2">
            Advanced Filter Form
          </h2>
          <p className="text-gray-600 dark:text-blue-200">
            Filter products with multiple criteria and see results in real-time
          </p>
        </div>
        {/* Filter form implementation */}
      </div>
    </div>
  );
};

export default FilterForm;`;
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generateCode());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-blue-100 mb-2">
                Advanced Filter Form
              </h2>
              <p className="text-gray-600 dark:text-blue-200">
                Filter products with multiple criteria and see results in
                real-time
              </p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setShowCode(!showCode)}
                className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
              >
                {showCode ? 'Hide Code' : 'Show Code'}
              </button>
              <button
                onClick={copyToClipboard}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  copied
                    ? 'text-green-700 bg-green-100 dark:text-green-200 dark:bg-green-900'
                    : 'text-white bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {copied ? 'Copied!' : 'Copy Code'}
              </button>
            </div>
          </div>
        </div>

        {!showCode ? (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Filters Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4 space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-blue-100">
                      Filters
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-slate-400">
                      {getActiveFiltersCount()} active
                    </span>
                  </div>

                  <CheckboxGroup
                    title="Category"
                    options={filterOptions.category}
                    filterType="category"
                    selectedValues={filters.category}
                  />

                  <CheckboxGroup
                    title="Brand"
                    options={filterOptions.brand}
                    filterType="brand"
                    selectedValues={filters.brand}
                  />

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-blue-100">
                      Price Range
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="number"
                        placeholder="Min"
                        value={filters.priceRange.min}
                        onChange={(e) =>
                          handleFilterChange('priceRange', {
                            min: e.target.value,
                          })
                        }
                        className="px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-600 dark:text-blue-100 transition-colors text-sm"
                      />
                      <input
                        type="number"
                        placeholder="Max"
                        value={filters.priceRange.max}
                        onChange={(e) =>
                          handleFilterChange('priceRange', {
                            max: e.target.value,
                          })
                        }
                        className="px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-600 dark:text-blue-100 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <SelectFilter
                    title="Rating"
                    options={filterOptions.rating}
                    filterType="rating"
                    value={filters.rating}
                  />

                  <SelectFilter
                    title="Availability"
                    options={filterOptions.availability}
                    filterType="availability"
                    value={filters.availability}
                  />

                  <CheckboxGroup
                    title="Features"
                    options={filterOptions.features}
                    filterType="features"
                    selectedValues={filters.features}
                  />

                  <CheckboxGroup
                    title="Color"
                    options={filterOptions.color}
                    filterType="color"
                    selectedValues={filters.color}
                  />

                  <CheckboxGroup
                    title="Size"
                    options={filterOptions.size}
                    filterType="size"
                    selectedValues={filters.size}
                  />

                  <CheckboxGroup
                    title="Material"
                    options={filterOptions.material}
                    filterType="material"
                    selectedValues={filters.material}
                  />

                  <SelectFilter
                    title="Condition"
                    options={filterOptions.condition}
                    filterType="condition"
                    value={filters.condition}
                  />

                  <div className="pt-4 border-t border-gray-200 dark:border-slate-600 space-y-2">
                    <button
                      onClick={applyFilters}
                      disabled={isFiltering}
                      className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-md transition-colors text-sm font-medium"
                    >
                      {isFiltering ? 'Applying...' : 'Apply Filters'}
                    </button>
                    <button
                      onClick={clearAllFilters}
                      className="w-full px-4 py-2 text-gray-600 dark:text-blue-300 hover:text-gray-800 dark:hover:text-blue-100 transition-colors text-sm font-medium"
                    >
                      Clear All
                    </button>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="lg:col-span-3">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-blue-100">
                    Results ({filteredItems.length})
                  </h3>
                  <SelectFilter
                    title="Sort By"
                    options={filterOptions.sortBy}
                    filterType="sortBy"
                    value={filters.sortBy}
                  />
                </div>

                {isFiltering ? (
                  <div className="text-center py-12">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                    <p className="mt-2 text-gray-600 dark:text-blue-200">
                      Filtering...
                    </p>
                  </div>
                ) : filteredItems.length > 0 ? (
                  <div className="grid gap-4">
                    {filteredItems.map((item) => (
                      <div
                        key={item.id}
                        className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors"
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h4 className="text-lg font-medium text-gray-900 dark:text-blue-100">
                              {item.name}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-blue-200 capitalize">
                              {item.brand} • {item.category}
                            </p>
                            <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500 dark:text-slate-400">
                              <div className="flex items-center">
                                <svg
                                  className="w-4 h-4 text-yellow-400 mr-1"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                {item.rating}
                              </div>
                              <span className="capitalize">
                                {item.condition}
                              </span>
                              <span className="capitalize">
                                {item.availability.replace('-', ' ')}
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {item.features.slice(0, 3).map((feature) => (
                                <span
                                  key={feature}
                                  className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                                >
                                  {feature.replace('-', ' ')}
                                </span>
                              ))}
                              {item.features.length > 3 && (
                                <span className="px-2 py-1 bg-gray-100 dark:bg-slate-600 text-gray-600 dark:text-slate-300 text-xs rounded-full">
                                  +{item.features.length - 3} more
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-gray-900 dark:text-blue-100">
                              ${item.price}
                            </div>
                            <button className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors text-sm font-medium">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <svg
                      className="w-12 h-12 text-gray-400 mx-auto mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-blue-100 mb-2">
                      No items found
                    </h3>
                    <p className="text-gray-600 dark:text-blue-200">
                      Try adjusting your filters to see more results
                    </p>
                  </div>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
            <pre className="text-sm">
              <code>{generateCode()}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterForm;
