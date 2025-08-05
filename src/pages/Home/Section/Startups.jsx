import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, TrendingUp, Users, Briefcase, Zap, Rocket, DollarSign, Building } from 'lucide-react';

const Startups = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const articles = [
    {
      id: 1,
      category: 'FUNDING',
      title: 'AI startup raises $50M Series B to revolutionize healthcare',
      author: 'SARAH CHEN',
      time: 'ABOUT 2 HOURS AGO',
      categoryIcon: DollarSign,
      categoryColor: 'from-sky-400 to-sky-500',
      categoryBg: 'bg-sky-50',
      categoryText: 'text-sky-600'
    },
    {
      id: 2,
      category: 'UNICORN',
      title: 'Fintech company reaches $1B valuation in record time',
      author: 'ALEX RODRIGUEZ',
      time: 'ABOUT 4 HOURS AGO',
      categoryIcon: Building,
      categoryColor: 'from-sky-400 to-sky-500',
      categoryBg: 'bg-sky-50',
      categoryText: 'text-sky-600'
    },
    {
      id: 3,
      category: 'INNOVATION',
      title: 'How this startup is solving climate change with blockchain',
      author: 'JORDAN KIM',
      time: 'ABOUT 6 HOURS AGO',
      categoryIcon: Zap,
      categoryColor: 'from-sky-400 to-sky-500',
      categoryBg: 'bg-sky-50',
      categoryText: 'text-sky-600'
    },
    {
      id: 4,
      category: 'ACQUISITION',
      title: 'Tech giant acquires promising EdTech startup for $200M',
      author: 'MAYA PATEL',
      time: 'ABOUT 8 HOURS AGO',
      categoryIcon: Building,
      categoryColor: 'from-sky-400 to-sky-500',
      categoryBg: 'bg-sky-50',
      categoryText: 'text-sky-600'
    },
    {
      id: 5,
      category: 'FOUNDER STORY',
      title: 'From college dropout to CEO: An inspiring journey',
      author: 'DAVID THOMSON',
      time: 'ABOUT 10 HOURS AGO',
      categoryIcon: Users,
      categoryColor: 'from-sky-400 to-sky-500',
      categoryBg: 'bg-sky-50',
      categoryText: 'text-sky-600'
    }
  ];

  const featuredArticle = {
    id: 'featured',
    category: 'BREAKTHROUGH',
    title: 'The startup that could change everything',
    subtitle: 'Revolutionary technology meets ambitious vision in this game-changing company that\'s capturing Silicon Valley\'s attention.',
    author: 'EMILY HARRISON',
    time: 'ABOUT 1 HOUR AGO',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    categoryIcon: Rocket,
    categoryColor: 'from-sky-400 to-sky-500',
    categoryBg: 'bg-sky-50',
    categoryText: 'text-sky-600'
  };

  return (
    <section className="py-16 md:py-24 relative ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-0">
            Startup <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-sky-600 to-sky-600">Pulse</span>
          </h2>
          <button className="group flex items-center px-6 py-3 text-sky-600 font-bold rounded-2xl hover:border hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            <span className="mr-2">ALL STARTUP NEWS</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Featured Article */}
          <div 
            className={`group cursor-pointer border-2 p-2 rounded-3xl border-sky-200 transition-all duration-1000 hover:border-sky-300 hover:shadow-2xl ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            onMouseEnter={() => setHoveredItem('featured')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {/* Image Section */}
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg mb-6 group-hover:shadow-2xl transition-all duration-500">
              <img 
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-black/10 to-transparent transition-all duration-300`} />
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
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{featuredArticle.time}</span>
                </div>
              </div>

              {/* Read More Button */}
              <div className={`transform transition-all duration-300 ${hoveredItem === 'featured' ? 'translate-x-2 opacity-100' : 'translate-x-0 opacity-70'}`}>
                <div className="inline-flex items-center text-sky-600 font-semibold hover:text-sky-700">
                  <span className="mr-2">Read Full Story</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Articles List - Compact */}
          <div className={`space-y-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {articles.map((article, index) => {
              const words = article.title.split(' ');
              const truncatedTitle = words.length > 8 ? words.slice(0, 8).join(' ') + '...' : article.title;
              const showTooltip = words.length > 8;
              
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
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{article.time}</span>
                    </div>
                  </div>

                  {/* Hover Arrow - Smaller */}
                  <div className={`absolute top-3 right-3 w-6 h-6 bg-gradient-to-r ${article.categoryColor} rounded-full flex items-center justify-center transform transition-all duration-300 ${hoveredItem === article.id ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>

                  {/* Progress Bar */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${article.categoryColor} rounded-b-xl transform transition-all duration-500 ${hoveredItem === article.id ? 'w-full' : 'w-0'}`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-sky-600 to-sky-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">
            <Rocket className="w-4 h-4 mr-2" />
            <span>Submit Your Startup Story</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Startups;