import React, { useState, useEffect } from 'react';
import { FiArrowRight, FiClock, FiTrendingUp, FiUsers, FiBriefcase, FiHeart, } from 'react-icons/fi';

const TheLatest = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const articles = [
    {
      id: 1,
      category: 'RETIREMENT',
      title: 'Where boomers go when they sell their forever homes',
      author: 'MATTY MERRITT',
      time: 'ABOUT 16 HOURS AGO',
      categoryIcon: FiHeart,
      categoryColor: 'from-sky-400 to-sky-500',
      categoryBg: 'bg-sky-50',
      categoryText: 'text-sky-600'
    },
    {
      id: 2,
      category: 'WORK LIFE',
      title: "Silver staffers aren't leaving the office",
      author: 'MATTY MERRITT',
      time: 'ABOUT 16 HOURS AGO',
      categoryIcon: FiBriefcase,
      categoryColor: 'from-sky-400 to-sky-500',
      categoryBg: 'bg-sky-50',
      categoryText: 'text-sky-600'
    },
    {
      id: 3,
      category: 'CULTURE',
      title: 'You will never be as cool as these elders',
      author: 'MOLLY LIEBERGALL',
      time: 'ABOUT 17 HOURS AGO',
      categoryIcon: FiTrendingUp,
      categoryColor: 'from-sky-400 to-sky-500',
      categoryBg: 'bg-sky-50',
      categoryText: 'text-sky-600'
    },
    {
      id: 4,
      category: 'BUSINESS NEWS',
      title: "These boomer-focused businesses are boomin', baby",
      author: 'BRENDAN COSGROVE',
      time: 'ABOUT 17 HOURS AGO',
      categoryIcon: FiTrendingUp,
      categoryColor: 'from-sky-400 to-sky-500',
      categoryBg: 'bg-sky-50',
      categoryText: 'text-sky-600'
    },
    {
      id: 5,
      category: 'GAMING',
      title: 'Not now, sweetie, grandma is playing video games',
      author: 'MOLLY LIEBERGALL',
      time: 'ABOUT 17 HOURS AGO',
      categoryIcon: FiHeart,
      categoryColor: 'from-sky-400 to-sky-500',
      categoryBg: 'bg-sky-50',
      categoryText: 'text-sky-600'
    }
  ];

  const featuredArticle = {
    id: 'featured',
    category: 'ECONOMY',
    title: 'The US labor market is worse than we thought',
    subtitle: 'The economy is starting to show some cracks.',
    author: 'BRENDAN COSGROVE',
    time: 'ABOUT 15 HOURS AGO',
    image: 'https://image.cnbcfm.com/api/v1/image/104389708-GettyImages-623388888.jpg?v=1713456256',
    categoryIcon: FiUsers,
      categoryColor: 'from-sky-400 to-sky-500',
      categoryBg: 'bg-sky-50',
      categoryText: 'text-sky-600'
  };

  return (
    <section className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-0">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-500">Latest</span>
          </h2>
          <button className="group flex items-center px-6 py-3  text-sky-500 font-bold rounded-2xl hover:border hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            <span className="mr-2">ALL STORIES</span>
            <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Featured Article */}
          <div 
            className={`group cursor-pointer border-2 p-2 rounded-3xl border-sky-200 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            onMouseEnter={() => setHoveredItem('featured')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {/* Image Section - Clean image only */}
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg mb-6 group-hover:shadow-2xl transition-all duration-500">
              <img 
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className={`absolute inset-0 border-4 border-transparent rounded-2xl transition-all duration-300 ${hoveredItem === 'featured' ? 'border-sky-400' : ''}`} />
            </div>

            {/* All Text Content Below Image */}
            <div className="space-y-4 p-5">
              {/* Category Badge */}
              <div className={`inline-flex items-center px-3 py-2 ${featuredArticle.categoryBg} ${featuredArticle.categoryText} rounded-full text-sm font-bold group-hover:scale-110 transition-transform duration-300`}>
                <featuredArticle.categoryIcon className="w-4 h-4 mr-2" />
                {featuredArticle.category}
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 leading-tight group-hover:text-sky-700 transition-colors duration-300">
                {featuredArticle.title}
              </h3>

              {/* Subtitle */}
              <p className="text-lg text-gray-600 leading-relaxed">
                {featuredArticle.subtitle}
              </p>

              {/* Meta */}
              <div className="flex items-center text-sm text-gray-500">
                <span className="font-semibold text-gray-700">{featuredArticle.author}</span>
                <span className="mx-2">|</span>
                <div className="flex items-center">
                  <FiClock className="w-4 h-4 mr-1" />
                  <span>{featuredArticle.time}</span>
                </div>
              </div>

              {/* Read More Button */}
              <div className={`transform transition-all duration-300 ${hoveredItem === 'featured' ? 'translate-x-2 opacity-100' : 'translate-x-0 opacity-70'}`}>
                <div className="inline-flex items-center text-sky-600 font-semibold hover:text-sky-700">
                  <span className="mr-2">Read Article</span>
                  <FiArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Articles List - Compact */}
          <div className={`space-y-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {articles.map((article, index) => {
              const words = article.title.split(' ');
              const truncatedTitle = words.length > 7 ? words.slice(0, 7).join(' ') + '...' : article.title;
              const showTooltip = words.length > 7;
              
              return (
                <div 
                  key={article.id}
                  className={`group relative p-4 bg-white rounded-xl border border-gray-100 hover:border-sky-200 shadow-sm hover:shadow-lg transform hover:scale-[1.01] transition-all duration-500 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ animationDelay: `${(index + 1) * 150}ms` }}
                  onMouseEnter={() => setHoveredItem(article.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Category Badge - Smaller */}
                  <div className={`inline-flex items-center px-2 py-1 ${article.categoryBg} ${article.categoryText} rounded-full text-xs font-semibold mb-2 group-hover:scale-105 transition-transform duration-300`}>
                    <article.categoryIcon className="w-3 h-3 mr-1" />
                    {article.category}
                  </div>

                  {/* Title with Tooltip */}
                  <div className="relative">
                    <h3 
                      className="text-lg font-bold text-gray-900 leading-tight mb-3 group-hover:text-sky-700 transition-colors duration-300"
                      title={showTooltip ? article.title : ''}
                    >
                      {truncatedTitle}
                    </h3>
                    
                    {/* Custom Tooltip */}
                    {showTooltip && hoveredItem === article.id && (
                      <div className="absolute z-50 -top-2 left-0 right-0 transform -translate-y-full">
                        <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg max-w-xs">
                          {article.title}
                          <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Meta - Smaller */}
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="font-medium text-gray-600">{article.author}</span>
                    <span className="mx-2">|</span>
                    <div className="flex items-center">
                      <FiClock className="w-3 h-3 mr-1" />
                      <span>{article.time}</span>
                    </div>
                  </div>

                  {/* Hover Arrow - Smaller */}
                  <div className={`absolute top-3 right-3 w-6 h-6 bg-gradient-to-r ${article.categoryColor} rounded-full flex items-center justify-center transform transition-all duration-300 ${hoveredItem === article.id ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
                    <FiArrowRight className="w-3 h-3 text-white" />
                  </div>

                  {/* Progress Bar */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${article.categoryColor} rounded-b-xl transform transition-all duration-500 ${hoveredItem === article.id ? 'w-full' : 'w-0'}`} />
                </div>
              );
            })}
          </div>
        </div>

       
      </div>

    </section>
  );
};

export default TheLatest;