/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiSearch, FiUser, FiBell } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Newsletters', path: '/newsletters' },
    { name: 'Categories', path: '/categories' },
    { name: 'About', path: '/about' },
  ];

  const userMenuItems = [
    { name: 'My Profile', path: '/profile' },
    { name: 'Login', path: '/login' },
    { name: 'SignUp', path: '/signup' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setUserDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!userDropdownOpen);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo - Left side */}
          <div className="flex-shrink-0 flex items-center">
            <HiOutlineMail className="h-8 w-8 text-sky-500" />
            <span className="ml-2 text-xl font-bold text-sky-600">Success In</span>
          </div>

          {/* Centered Menu Items - Desktop */}
          <div className="hidden sm:flex sm:items-center sm:justify-center sm:flex-1">
            <div className="flex space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-300 hover:text-sky-600 ${
                    isActive(item.path)
                      ? 'border-sky-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side items */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-1 rounded-full text-gray-400 hover:text-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-all duration-300"
            >
              <FiSearch className="h-6 w-6" />
            </button>
            <button className="ml-3 p-1 rounded-full text-gray-400 hover:text-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-all duration-300">
              <FiBell className="h-6 w-6" />
            </button>
            
            {/* User Dropdown Container */}
            <div className="ml-3 relative" ref={dropdownRef}>
              <button 
                onClick={toggleUserDropdown}
                className={`p-1 rounded-full text-gray-400 hover:text-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-all duration-300 ${
                  userDropdownOpen ? 'text-sky-500 bg-sky-50' : ''
                }`}
              >
                <FiUser className="h-6 w-6" />
              </button>

              {/* Animated Dropdown Menu */}
              <div className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200 transform transition-all duration-300 ease-out ${
                userDropdownOpen 
                  ? 'opacity-100 scale-100 translate-y-0' 
                  : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
              }`}>
                {userMenuItems.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setUserDropdownOpen(false)}
                    className={`block px-4 py-2 text-sm text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-all duration-200 transform hover:translate-x-1 ${
                      index === 0 ? 'rounded-t-md' : ''
                    } ${
                      index === userMenuItems.length - 1 ? 'rounded-b-md' : ''
                    }`}
                    style={{
                      animationDelay: userDropdownOpen ? `${index * 50}ms` : '0ms'
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <button className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-all duration-300">
              Subscribe
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-sky-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500 transition-all duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FiX className="block h-6 w-6" /> : <FiMenu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Search bar (conditionally rendered) */}
      {searchOpen && (
        <div className="bg-sky-50 px-4 py-3 transition-all duration-500 ease-in-out">
          <div className="max-w-7xl mx-auto flex">
            <input
              type="text"
              placeholder="Search newsletters..."
              className="flex-1 border border-sky-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            />
            <button className="bg-sky-500 text-white px-4 py-2 rounded-r-md hover:bg-sky-600 transition-all duration-300">
              <FiSearch className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}

      {/* Mobile menu (conditionally rendered) */}
      {isOpen && (
        <div className="sm:hidden transition-all duration-300 ease-in-out">
          <div className="pt-2 pb-3 space-y-1 bg-sky-50">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                  isActive(item.path)
                    ? 'bg-sky-100 border-sky-500 text-sky-700'
                    : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4 space-x-3">
                <button 
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="p-1 rounded-full text-gray-400 hover:text-sky-500"
                >
                  <FiSearch className="h-6 w-6" />
                </button>
                <button className="p-1 rounded-full text-gray-400 hover:text-sky-500">
                  <FiBell className="h-6 w-6" />
                </button>
                
                {/* Mobile User Menu */}
                <div className="relative">
                  <button 
                    onClick={toggleUserDropdown}
                    className={`p-1 rounded-full text-gray-400 hover:text-sky-500 ${
                      userDropdownOpen ? 'text-sky-500 bg-sky-50' : ''
                    }`}
                  >
                    <FiUser className="h-6 w-6" />
                  </button>
                  
                  {/* Mobile Dropdown */}
                  {userDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200 transform transition-all duration-300 ease-out">
                      {userMenuItems.map((item, index) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={() => {
                            setUserDropdownOpen(false);
                            setIsOpen(false);
                          }}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-all duration-200"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-3 px-4">
                <button className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-sky-500 hover:bg-sky-600">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;