/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { HiOutlineMail, HiOutlineSparkles, HiOutlineHeart, HiOutlineLightBulb, HiOutlineUsers, HiOutlineArrowRight, HiOutlinePlay } from 'react-icons/hi';
import { FiArrowRight, FiMail, FiUsers, FiTarget, FiAward, FiStar, FiMessageCircle, FiEye, FiHeart } from 'react-icons/fi';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [animatedStats, setAnimatedStats] = useState({
    newsletters: 0,
    subscribers: 0,
    stories: 0,
    years: 0
  });

  useEffect(() => {
    setIsVisible(true);
    
    // Stats animation
    const targets = { newsletters: 250, subscribers: 50000, stories: 1200, years: 11 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = Math.min(currentStep / steps, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      setAnimatedStats({
        newsletters: Math.floor(targets.newsletters * easeOut),
        subscribers: Math.floor(targets.subscribers * easeOut),
        stories: Math.floor(targets.stories * easeOut),
        years: Math.floor(targets.years * easeOut)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedStats(targets);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    { icon: FiMail, label: 'Newsletters', value: animatedStats.newsletters, suffix: '+', description: 'Carefully curated' },
    { icon: FiUsers, label: 'Subscribers', value: animatedStats.subscribers.toLocaleString(), suffix: '+', description: 'Active community' },
    { icon: FiStar, label: 'Stories', value: animatedStats.stories, suffix: '+', description: 'Success stories shared' },
    { icon: FiAward, label: 'Years', value: animatedStats.years, suffix: '', description: 'Of excellence' }
  ];

  const milestones = [
    { year: '2013', event: 'Founded Success In', metric: '1K subscribers', color: 'bg-sky-500' },
    { year: '2016', event: 'Reached 10K community', metric: '50+ countries', color: 'bg-sky-400' },
    { year: '2019', event: 'Interactive features launch', metric: '100K engaged users', color: 'bg-sky-600' },
    { year: '2022', event: 'AI-powered curation', metric: '500K newsletter opens', color: 'bg-sky-500' },
    { year: '2024', event: 'Global expansion', metric: '1M+ success stories', color: 'bg-sky-400' }
  ];

  const testimonials = [
    {
      name: 'Alex Chen',
      role: 'Startup Founder',
      company: 'TechFlow',
      quote: 'Success In helped me discover the tools that transformed my startup from idea to $1M ARR.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Product Manager',
      company: 'InnovateCorp',
      quote: 'The curated content saves me hours of research. Every newsletter is pure gold.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b734?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'David Park',
      role: 'Entrepreneur',
      company: 'GrowthLab',
      quote: 'I launched three successful products after getting inspired by Success In stories.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-sky-50 overflow-x-hidden">
      
      {/* Hero Section - Made responsive */}
      <section className="relative p-8 md:p-20 flex items-center overflow-hidden min-h-screen">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500 via-sky-400 to-sky-500 transform -skew-y-3 origin-top-left scale-110 md:scale-100" />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm transform -skew-y-3 origin-top-left scale-110 md:scale-100" />
        
        {/* Content grid */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="mb-4 md:mb-6">
                <span className="inline-block px-3 py-1 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs md:text-sm font-medium">
                  Since 2013 • 50K+ Entrepreneurs Trust Us
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight mb-4 md:mb-6">
                We Make
                <span className="block">Success</span>
                <span className="block">Contagious</span>
              </h1>
              
              <p className="text-base md:text-xl text-sky-100 leading-relaxed mb-6 md:mb-8">
                Every week, we uncover the products that are reshaping industries and share the stories behind the entrepreneurs who dared to dream big.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <button className="group flex items-center px-6 py-3 md:px-8 md:py-4 bg-white text-sky-600 font-bold rounded-xl md:rounded-2xl hover:bg-sky-50 transform hover:scale-105 transition-all duration-300 text-sm md:text-base">
                  <HiOutlinePlay className="mr-2 md:mr-3 w-4 h-4 md:w-5 md:h-5 group-hover:animate-pulse" />
                  Watch Our Story
                </button>
                <button className="flex items-center px-6 py-3 md:px-8 md:py-4 border-2 border-white/30 text-white font-semibold rounded-xl md:rounded-2xl hover:bg-white/10 transition-all duration-300 text-sm md:text-base">
                  <FiArrowRight className="mr-2 md:mr-3 w-4 h-4 md:w-5 md:h-5" />
                  Join Community
                </button>
              </div>
            </div>
            
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} mt-8 md:mt-0`}>
              <div className="relative">
                <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-blue-900 to-sky-900 rounded-xl md:rounded-3xl blur-md md:blur-2xl opacity-20 animate-ping" />
                <div className="relative bg-white/10 backdrop-blur-md md:backdrop-blur-lg p-4 md:p-8 rounded-xl md:rounded-3xl border border-white/20">
                  <div className="grid grid-cols-2 gap-3 md:gap-6">
                    {stats.map((stat, index) => (
                      <div key={stat.label} className="text-center p-2 md:p-0">
                        <div className="inline-flex items-center justify-center w-8 h-8 md:w-12 md:h-12 bg-white/20 rounded-lg md:rounded-xl mb-2 md:mb-3">
                          <stat.icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                        </div>
                        <div className="text-lg md:text-2xl font-black text-white">{stat.value}{stat.suffix}</div>
                        <div className="text-xs md:text-sm text-sky-200">{stat.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Box Content Section - Made responsive */}
      <section className="py-12 md:py-20 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-8 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-2 md:mb-4">
              What Makes Us <span className="text-sky-500">Different</span>
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              We connect entrepreneurs with the stories and products that matter most
            </p>
          </div>
          
          {/* Mission Box - Stack on mobile */}
          <div className={`flex flex-col lg:flex-row gap-6 md:gap-12 items-center mb-12 md:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-sky-500 rounded-xl md:rounded-3xl blur-md opacity-20" />
              <div className="relative aspect-square bg-gradient-to-br from-sky-100 to-sky-200 rounded-xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=600&fit=crop&crop=center" 
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-500/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-white rounded-lg md:rounded-xl flex items-center justify-center mb-2 md:mb-4">
                    <FiTarget className="w-4 h-4 md:w-6 md:h-6 text-sky-500" />
                  </div>
                  <h3 className="text-white font-bold text-lg md:text-xl">Our Mission</h3>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4 md:px-0">
              <h3 className="text-2xl md:text-3xl font-bold text-sky-600 mb-4 md:mb-6">
                Connecting Dots, Creating Success
              </h3>
              <p className="text-base md:text-lg text-sky-700 leading-relaxed mb-4 md:mb-6">
                We believe every great product has an incredible story behind it. Our mission is to uncover these stories, connect entrepreneurs with inspiration, and share the insights that transform ideas into reality.
              </p>
              <div className="space-y-2 md:space-y-3">
                {['Discover breakthrough products', 'Share inspiring stories', 'Connect global entrepreneurs', 'Fuel innovation worldwide'].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-sky-500 rounded-full mr-2 md:mr-3" />
                    <span className="text-sm md:text-base text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vision Box - Reversed on desktop, stacked on mobile */}
          <div className={`flex flex-col lg:flex-row gap-6 md:gap-12 items-center mb-12 md:mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="w-full lg:w-1/2 lg:order-2 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-xl md:rounded-3xl blur-md opacity-20" />
              <div className="relative aspect-square bg-gradient-to-br from-cyan-100 to-sky-200 rounded-xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=600&fit=crop&crop=center" 
                  alt="Innovation and vision"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-white rounded-lg md:rounded-xl flex items-center justify-center mb-2 md:mb-4">
                    <FiEye className="w-4 h-4 md:w-6 md:h-6 text-cyan-500" />
                  </div>
                  <h3 className="text-white font-bold text-lg md:text-xl">Our Vision</h3>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:order-1 px-4 md:px-0">
              <h3 className="text-2xl md:text-3xl font-bold text-sky-600 mb-4 md:mb-6">
                A World Full of Inspired Creators
              </h3>
              <p className="text-base md:text-lg text-sky-700 leading-relaxed mb-4 md:mb-6">
                We envision a future where every entrepreneur has access to the stories, products, and insights they need to build something amazing. Where inspiration flows freely and success stories multiply.
              </p>
              <div className="space-y-2 md:space-y-3">
                {['Global inspiration network', 'Accessible success stories', 'Empowered entrepreneurs', 'Thriving innovation ecosystem'].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-2 md:mr-3" />
                    <span className="text-sm md:text-base text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values Box - Stack on mobile */}
          <div className={`flex flex-col lg:flex-row gap-6 md:gap-12 items-center transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-sky-500 rounded-xl md:rounded-3xl blur-md opacity-20" />
              <div className="relative aspect-square bg-gradient-to-br from-blue-100 to-sky-200 rounded-xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=600&fit=crop&crop=center" 
                  alt="Team values and culture"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-white rounded-lg md:rounded-xl flex items-center justify-center mb-2 md:mb-4">
                    <FiHeart className="w-4 h-4 md:w-6 md:h-6 text-blue-500" />
                  </div>
                  <h3 className="text-white font-bold text-lg md:text-xl">Our Values</h3>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4 md:px-0">
              <h3 className="text-2xl md:text-3xl font-bold text-sky-600 mb-4 md:mb-6">
                What Drives Us Every Day
              </h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 md:mb-6">
                Our values guide every decision we make, every story we share, and every connection we facilitate. They are the foundation of our community and the reason behind our success.
              </p>
              <div className="space-y-2 md:space-y-3">
                {['Authenticity in storytelling', 'Quality over quantity', 'Community first approach', 'Innovation celebration'].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 md:mr-3" />
                    <span className="text-sm md:text-base text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section - Made responsive */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-sky-50 to-cyan-50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-8 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-2 md:mb-4">
              Our <span className="text-sky-500">Evolution</span>
            </h2>
            <p className="text-base md:text-xl text-gray-600">From startup to global community</p>
          </div>
          
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-sky-500 transform -translate-y-1/2" />
            
            <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start space-y-8 md:space-y-0">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className={`relative flex flex-col items-center transition-all duration-1000 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                  <div className={`w-6 h-6 md:w-8 md:h-8 ${milestone.color} rounded-full border-4 border-white shadow-md md:shadow-lg mb-2 md:mb-4 z-10`} />
                  <div className="text-center bg-white p-3 md:p-4 rounded-lg md:rounded-2xl shadow-md md:shadow-lg border-4 border-sky-100 transition-shadow duration-300 max-w-xs">
                    <div className="text-xl md:text-2xl font-black text-sky-500 mb-1">{milestone.year}</div>
                    <div className="text-xs md:text-sm font-semibold text-sky-600 mb-1 md:mb-2">{milestone.event}</div>
                    <div className="text-xs text-gray-500">{milestone.metric}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Made responsive */}
      <section className="py-12 md:py-20 bg-white">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-8 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-2 md:mb-4">
              Success <span className="text-sky-500">Stories</span>
            </h2>
            <p className="text-base md:text-xl text-gray-600">From our amazing community</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.name}
                className={`group relative p-6 md:p-8 bg-gradient-to-br from-sky-50 to-cyan-50 rounded-xl md:rounded-3xl border border-sky-100 hover:border-sky-300 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ animationDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full flex items-center justify-center">
                  <FiMessageCircle className="w-3 h-3 md:w-4 md:h-4 text-white" />
                </div>
                
                <div className="flex items-center mb-4 md:mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-sky-200 mr-3 md:mr-4"
                  />
                  <div>
                    <div className="font-bold text-gray-900 text-sm md:text-base">{testimonial.name}</div>
                    <div className="text-xs md:text-sm text-sky-600">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
                
                <p className="text-sm md:text-base text-gray-700 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-b-xl md:rounded-b-3xl transform transition-all duration-300 ${hoveredCard === index ? 'scale-x-100' : 'scale-x-0'}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Made responsive */}
      <section className="py-12 md:py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 via-sky-400/20 to-sky-500/20" />
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-l from-sky-500 to-sky-400 transform md:skew-x-12 origin-top-right" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className={`text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} mb-8 md:mb-0`}>
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-black leading-tight mb-4 md:mb-6">
                Your Success
                <span className="block text-sky-200">Story Starts</span>
                <span className="block">Here</span>
              </h2>
              <p className="text-base md:text-xl text-gray-300 leading-relaxed mb-4 md:mb-8">
                Join 50,000+ entrepreneurs who get the best products and success stories delivered weekly.
              </p>
              <div className="flex items-center space-x-3 md:space-x-4 mb-6 md:mb-8">
                <div className="flex -space-x-1 md:-space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-sky-400 to-sky-500 border-2 border-white" />
                  ))}
                </div>
                <span className="text-xs md:text-base text-gray-300">Join thousands of successful entrepreneurs</span>
              </div>
            </div>
            
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-white p-6 md:p-8 rounded-xl md:rounded-3xl shadow-lg md:shadow-2xl">
                <div className="text-center mb-4 md:mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-sky-400 to-sky-500 rounded-lg md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <HiOutlineMail className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Start Your Journey</h3>
                  <p className="text-sm md:text-base text-gray-600">Get weekly inspiration delivered</p>
                </div>
                
                <button className="w-full py-3 md:py-4 bg-gradient-to-r from-sky-500 to-sky-400 text-white font-bold text-base md:text-lg rounded-xl md:rounded-2xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 mb-3 md:mb-4">
                  Subscribe to Success In
                </button>
                
                <div className="flex items-center justify-center text-xs md:text-sm text-gray-500">
                  <FiStar className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 mr-1" />
                  <span>Rated 4.9/5 by 10,000+ subscribers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float-random {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(20px, -20px) rotate(90deg); }
          50% { transform: translate(-15px, -35px) rotate(180deg); }
          75% { transform: translate(-25px, -10px) rotate(270deg); }
        }
        .animate-float-random {
          animation: float-random 12s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;