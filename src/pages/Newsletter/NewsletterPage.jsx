import React, { useState, useEffect } from 'react';
import { 
  Search, Filter, Clock, Calendar, Bookmark, Mail, 
  ArrowRight, ChevronDown, ChevronUp, X, Star, 
  TrendingUp, Zap, Users, Briefcase, Cpu, 
  Palette, Globe, HeartPulse, LayoutGrid, List, 
  FlaskConical
} from 'lucide-react';
import { FaDrawPolygon } from 'react-icons/fa';
import { GrTechnology } from 'react-icons/gr';

const NewsletterPage = () => {
  const [newsletters, setNewsletters] = useState([]);
  const [filteredNewsletters, setFilteredNewsletters] = useState([]);
  const [displayedNewsletters, setDisplayedNewsletters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('newest');
  const [bookmarked, setBookmarked] = useState([]);
  const [activeTab, setActiveTab] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9); // Items per page
  
  // Calculate total pages
  const totalPages = Math.ceil(filteredNewsletters.length / itemsPerPage);

  // Fetch data from newsletters.json
  useEffect(() => {
    const fetchNewsletters = async () => {
      try {
        const response = await fetch('/newsletters.json');
        const data = await response.json();
        setNewsletters(data);
        setFilteredNewsletters(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading newsletters:', error);
        setIsLoading(false);
      }
    };

    fetchNewsletters();
  }, []);

  // Filter and sort newsletters
  useEffect(() => {
    let result = [...newsletters];

    // Filter by search query
    if (searchQuery) {
      result = result.filter(newsletter => 
        newsletter.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        newsletter.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by categories
    if (selectedCategories.length > 0) {
      result = result.filter(newsletter => 
        selectedCategories.includes(newsletter.category)
      );
    }

    // Filter by tab
    if (activeTab === 'featured') {
      result = result.filter(newsletter => newsletter.featured);
    } else if (activeTab === 'bookmarked') {
      result = result.filter(newsletter => bookmarked.includes(newsletter.id));
    }

    // Sort results
    if (sortBy === 'newest') {
      result.sort((a, b) => new Date(b.lastIssue) - new Date(a.lastIssue));
    } else if (sortBy === 'popular') {
      result.sort((a, b) => b.subscribers - a.subscribers);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    setFilteredNewsletters(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchQuery, selectedCategories, sortBy, activeTab, bookmarked, newsletters]);

  // Update displayed newsletters when page or filtered newsletters change
  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    setDisplayedNewsletters(filteredNewsletters.slice(indexOfFirstItem, indexOfLastItem));
  }, [currentPage, filteredNewsletters, itemsPerPage]);

  // Category data
  const categories = [
    { id: 'technology', name: 'Technology', icon: Cpu, color: 'bg-sky-100 text-sky-600' },
    { id: 'business', name: 'Business', icon: Briefcase, color: 'bg-purple-100 text-purple-600' },
    { id: 'science', name: 'Science', icon: FlaskConical, color: 'bg-emerald-100 text-emerald-600' },
    { id: 'design', name: 'Design', icon: Palette, color: 'bg-amber-100 text-amber-600' },
    { id: 'politics', name: 'Politics', icon: Globe, color: 'bg-rose-100 text-rose-600' },
    { id: 'health', name: 'Health', icon: HeartPulse, color: 'bg-pink-100 text-pink-600' },
    { id: 'arts', name: 'Arts', icon: FaDrawPolygon, color: 'bg-sky-100 text-sky-600' },
    { id: 'technology', name: 'Technology', icon: GrTechnology, color: 'bg-sky-100 text-sky-600' },
  ];

  const toggleBookmark = (id) => {
    if (bookmarked.includes(id)) {
      setBookmarked(bookmarked.filter(item => item !== id));
    } else {
      setBookmarked([...bookmarked, id]);
    }
  };

  const toggleCategory = (categoryId) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategories([]);
    setSortBy('newest');
  };

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5; // Maximum number of visible page buttons
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always show first page
      pageNumbers.push(1);
      
      // Determine range around current page
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);
      
      // Adjust if we're at the start or end
      if (currentPage <= 3) {
        endPage = Math.min(4, totalPages - 1);
      } else if (currentPage >= totalPages - 2) {
        startPage = Math.max(totalPages - 3, 2);
      }
      
      // Add ellipsis if needed after first page
      if (startPage > 2) {
        pageNumbers.push('...');
      }
      
      // Add middle pages
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
      
      // Add ellipsis if needed before last page
      if (endPage < totalPages - 1) {
        pageNumbers.push('...');
      }
      
      // Always show last page
      pageNumbers.push(totalPages);
    }
    
    return pageNumbers;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sky-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-sky-500">Newsletters</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find the best newsletters curated by experts across various topics. Stay informed with quality content.
          </p>
        </div>

        {/* Controls */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Search */}
          <div className="relative flex-1 max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              placeholder="Search newsletters..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
              </button>
            )}
          </div>

          {/* View Toggle */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-sky-100 text-sky-600' : 'bg-gray-100 text-gray-600'}`}
            >
              <LayoutGrid className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-sky-100 text-sky-600' : 'bg-gray-100 text-gray-600'}`}
            >
              <List className="h-5 w-5" />
            </button>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-xl shadow-sm hover:bg-gray-50"
            >
              <Filter className="h-5 w-5" />
              <span>Filters</span>
              {showFilters ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="mb-8 p-6 bg-white rounded-xl shadow-md border border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Filter Newsletters</h3>
              <button
                onClick={clearFilters}
                className="text-sm text-sky-600 hover:text-sky-700 flex items-center"
              >
                <X className="h-4 w-4 mr-1" />
                Clear all filters
              </button>
            </div>

            {/* Categories */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-700 mb-3">Categories</h4>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => toggleCategory(category.id)}
                    className={`flex items-center px-3 py-2 rounded-full text-sm font-medium ${selectedCategories.includes(category.id) ? `${category.color} ring-2 ring-offset-2 ring-sky-500` : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  >
                    <category.icon className="h-4 w-4 mr-2" />
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-3">Sort By</h4>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setSortBy('newest')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${sortBy === 'newest' ? 'bg-sky-100 text-sky-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Newest First
                  </div>
                </button>
                <button
                  onClick={() => setSortBy('popular')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${sortBy === 'popular' ? 'bg-sky-100 text-sky-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  <div className="flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Most Popular
                  </div>
                </button>
                <button
                  onClick={() => setSortBy('rating')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${sortBy === 'rating' ? 'bg-sky-100 text-sky-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-2" />
                    Highest Rated
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="mb-6 border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'all' ? 'border-sky-500 text-sky-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              All Newsletters
            </button>
            <button
              onClick={() => setActiveTab('featured')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'featured' ? 'border-sky-500 text-sky-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              Featured
            </button>
            <button
              onClick={() => setActiveTab('bookmarked')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'bookmarked' ? 'border-sky-500 text-sky-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              Bookmarked
            </button>
          </nav>
        </div>

        {/* Results Count */}
        <div className="mb-6 flex justify-between items-center">
          <p className="text-sm text-gray-600">
            Showing <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, filteredNewsletters.length)}</span> of <span className="font-medium">{filteredNewsletters.length}</span> results
          </p>
          {selectedCategories.length > 0 && (
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Active filters:</span>
              <div className="flex flex-wrap gap-2">
                {selectedCategories.map(catId => {
                  const category = categories.find(c => c.id === catId);
                  return (
                    <span key={catId} className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${category.color}`}>
                      {category.name}
                      <button
                        onClick={() => toggleCategory(catId)}
                        className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full hover:bg-white/20"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Newsletter Grid/List */}
        {filteredNewsletters.length === 0 ? (
          <div className="text-center py-16">
            <Mail className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-lg font-medium text-gray-900">No newsletters found</h3>
            <p className="mt-1 text-sm text-gray-500">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={clearFilters}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            >
              Clear all filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedNewsletters.map((newsletter) => (
              <div key={newsletter.id} className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={newsletter.image}
                    alt={newsletter.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <button
                    onClick={() => toggleBookmark(newsletter.id)}
                    className={`absolute top-3 right-3 p-2 rounded-full ${bookmarked.includes(newsletter.id) ? 'bg-amber-100 text-amber-500' : 'bg-white/90 text-gray-400 hover:text-amber-500'}`}
                  >
                    <Bookmark className={`h-5 w-5 ${bookmarked.includes(newsletter.id) ? 'fill-current' : ''}`} />
                  </button>
                  {newsletter.featured && (
                    <span className="absolute top-3 left-3 px-2 py-1 bg-sky-600 text-white text-xs font-bold rounded">
                      Featured
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      categories.find(c => c.id === newsletter.category)?.color
                    }`}>
                      {categories.find(c => c.id === newsletter.category)?.name}
                    </span>
                    <div className="flex items-center text-xs text-gray-500">
                      <Star className="h-3.5 w-3.5 text-amber-400 mr-0.5" />
                      {newsletter.rating}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors">
                    {newsletter.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {newsletter.description}
                  </p>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <div className="flex items-center">
                      <Users className="h-3.5 w-3.5 mr-1" />
                      {newsletter.subscribers} subscribers
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3.5 w-3.5 mr-1" />
                      {newsletter.lastIssue}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {displayedNewsletters.map((newsletter) => (
              <div key={newsletter.id} className="group bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row">
                <div className="md:w-1/4 mb-4 md:mb-0 md:mr-5">
                  <div className="relative h-40 overflow-hidden rounded-lg">
                    <img
                      src={newsletter.image}
                      alt={newsletter.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {newsletter.featured && (
                      <span className="absolute top-2 left-2 px-2 py-0.5 bg-sky-600 text-white text-xs font-bold rounded">
                        Featured
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      categories.find(c => c.id === newsletter.category)?.color
                    }`}>
                      {categories.find(c => c.id === newsletter.category)?.name}
                    </span>
                    <button
                      onClick={() => toggleBookmark(newsletter.id)}
                      className={`p-1.5 rounded-full ${bookmarked.includes(newsletter.id) ? 'text-amber-500' : 'text-gray-400 hover:text-amber-500'}`}
                    >
                      <Bookmark className={`h-5 w-5 ${bookmarked.includes(newsletter.id) ? 'fill-current' : ''}`} />
                    </button>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors">
                    {newsletter.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {newsletter.description}
                  </p>
                  <div className="flex flex-wrap justify-between items-center text-sm text-gray-500">
                    <div className="flex items-center mb-2 sm:mb-0">
                      <Users className="h-4 w-4 mr-1" />
                      {newsletter.subscribers} subscribers
                    </div>
                    <div className="flex items-center mb-2 sm:mb-0">
                      <Clock className="h-4 w-4 mr-1" />
                      Last issue: {newsletter.lastIssue}
                    </div>
                    <div className="flex items-center mb-2 sm:mb-0">
                      <Mail className="h-4 w-4 mr-1" />
                      {newsletter.frequency}
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-amber-400 mr-1" />
                      {newsletter.rating} rating
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {filteredNewsletters.length > 0 && totalPages > 1 && (
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-600">
              Showing <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, filteredNewsletters.length)}</span> of <span className="font-medium">{filteredNewsletters.length}</span> results
            </div>
            
            <nav className="flex items-center space-x-1">
              <button
                onClick={() => paginate(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded-md ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Previous
              </button>
              
              {getPageNumbers().map((number, index) => (
                number === '...' ? (
                  <span key={`ellipsis-${index}`} className="px-3 py-1 text-gray-500">...</span>
                ) : (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={`px-3 py-1 rounded-md ${currentPage === number ? 'bg-sky-100 text-sky-600 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    {number}
                  </button>
                )
              ))}
              
              <button
                onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded-md ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Next
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsletterPage;