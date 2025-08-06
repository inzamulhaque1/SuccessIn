/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { 
  HiOutlineMail, 
  HiOutlineLocationMarker, 
  HiOutlinePhone, 
  HiOutlineGlobeAlt 
} from 'react-icons/hi';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube, 
  FaGithub,
  FaTelegramPlane,
  FaDiscord
} from 'react-icons/fa';
import { 
  FiSend, 
  FiArrowRight, 
  FiHeart,
  FiShield,
  FiZap,
  FiTrendingUp
} from 'react-icons/fi';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setShowSuccess(true);
      setEmail('');
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  const footerLinks = {
    product: [
      { name: 'Newsletters', path: '/newsletters' },
      { name: 'Categories', path: '/categories' },
      { name: 'Featured', path: '/featured' },
      { name: 'Trending', path: '/trending' },
      { name: 'Archive', path: '/archive' }
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Story', path: '/story' },
      { name: 'Careers', path: '/careers' },
      { name: 'Press Kit', path: '/press' },
      { name: 'Contact', path: '/contact' }
    ],
    resources: [
      { name: 'Help Center', path: '/help' },
      { name: 'API Documentation', path: '/api' },
      { name: 'Community', path: '/community' },
      { name: 'Blog', path: '/blog' },
      { name: 'Newsletter Guide', path: '/guide' }
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Cookie Policy', path: '/cookies' },
      { name: 'GDPR', path: '/gdpr' },
      { name: 'Disclaimer', path: '/disclaimer' }
    ]
  };

  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: FaFacebookF, 
      url: 'https://facebook.com', 
      color: 'hover:text-blue-600 hover:bg-blue-50',
      hoverScale: 'hover:scale-110'
    },
    { 
      name: 'Twitter', 
      icon: FaTwitter, 
      url: 'https://twitter.com', 
      color: 'hover:text-blue-400 hover:bg-blue-50',
      hoverScale: 'hover:scale-110'
    },
    { 
      name: 'Instagram', 
      icon: FaInstagram, 
      url: 'https://instagram.com', 
      color: 'hover:text-pink-500 hover:bg-pink-50',
      hoverScale: 'hover:scale-110'
    },
    { 
      name: 'LinkedIn', 
      icon: FaLinkedinIn, 
      url: 'https://linkedin.com', 
      color: 'hover:text-blue-700 hover:bg-blue-50',
      hoverScale: 'hover:scale-110'
    },
    { 
      name: 'YouTube', 
      icon: FaYoutube, 
      url: 'https://youtube.com', 
      color: 'hover:text-red-500 hover:bg-red-50',
      hoverScale: 'hover:scale-110'
    },
    { 
      name: 'GitHub', 
      icon: FaGithub, 
      url: 'https://github.com', 
      color: 'hover:text-gray-800 hover:bg-gray-100',
      hoverScale: 'hover:scale-110'
    },
    { 
      name: 'Telegram', 
      icon: FaTelegramPlane, 
      url: 'https://telegram.org', 
      color: 'hover:text-blue-500 hover:bg-blue-50',
      hoverScale: 'hover:scale-110'
    },
    { 
      name: 'Discord', 
      icon: FaDiscord, 
      url: 'https://discord.com', 
      color: 'hover:text-indigo-500 hover:bg-indigo-50',
      hoverScale: 'hover:scale-110'
    }
  ];

  const features = [
    {
      icon: FiZap,
      title: "Lightning Fast",
      description: "Get newsletters delivered instantly"
    },
    {
      icon: FiShield,
      title: "Secure & Private",
      description: "Your data is protected with us"
    },
    {
      icon: FiTrendingUp,
      title: "Trending Content",
      description: "Stay updated with latest trends"
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Features Section */}
      <div className="py-12 md:py-16 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group px-4 sm:px-0">
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-sky-500 text-white rounded-2xl mb-4 group-hover:bg-sky-400 transition-all duration-300 transform group-hover:scale-110 mx-auto">
                  <feature.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Logo and Description */}
            <div className="sm:col-span-2 lg:col-span-2 px-4 sm:px-0">
              <div className="flex items-center justify-center sm:justify-start mb-6">
                <HiOutlineMail className="h-8 w-8 sm:h-10 sm:w-10 text-sky-500" />
                <span className="ml-3 text-xl sm:text-2xl font-bold text-white">Success In</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base text-center sm:text-left">
                Your ultimate destination for discovering and subscribing to the world's best newsletters. 
                Stay informed, stay ahead, stay successful.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-300 hover:text-sky-400 transition-colors duration-300 text-sm sm:text-base justify-center sm:justify-start">
                  <HiOutlineLocationMarker className="h-4 w-4 sm:h-5 sm:w-5 mr-3 text-sky-500" />
                  <span>123 Newsletter St, Digital City, DC 12345</span>
                </div>
                <div className="flex items-center text-gray-300 hover:text-sky-400 transition-colors duration-300 text-sm sm:text-base justify-center sm:justify-start">
                  <HiOutlinePhone className="h-4 w-4 sm:h-5 sm:w-5 mr-3 text-sky-500" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-300 hover:text-sky-400 transition-colors duration-300 text-sm sm:text-base justify-center sm:justify-start">
                  <HiOutlineMail className="h-4 w-4 sm:h-5 sm:w-5 mr-3 text-sky-500" />
                  <span>hello@successin.com</span>
                </div>
                <div className="flex items-center text-gray-300 hover:text-sky-400 transition-colors duration-300 text-sm sm:text-base justify-center sm:justify-start">
                  <HiOutlineGlobeAlt className="h-4 w-4 sm:h-5 sm:w-5 mr-3 text-sky-500" />
                  <span>www.successin.com</span>
                </div>
              </div>
            </div>

            {/* Footer Links - Responsive Grid */}
            <div className="px-4 sm:px-0">
              <h3 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6 text-center sm:text-left">Product</h3>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.path} 
                      className="text-gray-300 hover:text-sky-400 transition-all duration-300 flex items-center justify-center sm:justify-start group text-sm sm:text-base"
                    >
                      <FiArrowRight className="h-3 w-3 sm:h-4 sm:w-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="px-4 sm:px-0">
              <h3 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6 text-center sm:text-left">Company</h3>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.path} 
                      className="text-gray-300 hover:text-sky-400 transition-all duration-300 flex items-center justify-center sm:justify-start group text-sm sm:text-base"
                    >
                      <FiArrowRight className="h-3 w-3 sm:h-4 sm:w-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="px-4 sm:px-0">
              <h3 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6 text-center sm:text-left">Resources</h3>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.path} 
                      className="text-gray-300 hover:text-sky-400 transition-all duration-300 flex items-center justify-center sm:justify-start group text-sm sm:text-base"
                    >
                      <FiArrowRight className="h-3 w-3 sm:h-4 sm:w-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="px-4 sm:px-0">
              <h3 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6 text-center sm:text-left">Legal</h3>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.path} 
                      className="text-gray-300 hover:text-sky-400 transition-all duration-300 flex items-center justify-center sm:justify-start group text-sm sm:text-base"
                    >
                      <FiArrowRight className="h-3 w-3 sm:h-4 sm:w-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media and Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="w-full md:w-auto">
              <h4 className="text-base md:text-lg font-semibold text-white mb-4 text-center md:text-left">
                Connect with us
              </h4>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 sm:p-3 bg-gray-800 text-gray-300 rounded-xl transition-all duration-300 transform ${social.color} ${social.hoverScale} hover:shadow-lg hover:-translate-y-1`}
                    aria-label={social.name}
                  >
                    <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* App Download Buttons */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 w-full sm:w-auto justify-center">
              <button className="flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                <div className="text-center sm:text-left">
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="text-sm font-semibold text-white">App Store</div>
                </div>
              </button>
              <button className="flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                <div className="text-center sm:text-left">
                  <div className="text-xs text-gray-400">Get it on</div>
                  <div className="text-sm font-semibold text-white">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center text-gray-400 text-xs sm:text-sm space-y-1 sm:space-y-0 sm:space-x-2">
              <span>© 2025 Success In. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center">
                Made with <FiHeart className="h-3 w-3 sm:h-4 sm:w-4 text-red-500 mx-1 animate-pulse" /> for newsletter lovers
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm">
              <span className="text-gray-400">Trusted by 100K+ users</span>
              <div className="flex items-center text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-1 sm:mr-2 animate-pulse"></div>
                <span>All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;