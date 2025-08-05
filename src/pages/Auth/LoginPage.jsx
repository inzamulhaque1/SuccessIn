import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  Sparkles, 
  Star,
  Heart,
  Zap,
  Github,
  X,
  Apple
} from 'lucide-react';
import { BsApple, BsGoogle } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { FiFacebook, FiGithub, FiTwitter } from 'react-icons/fi';
import { CgGoogle } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Floating particles animation
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      speed: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.3
    }));
    setParticles(newParticles);

    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        y: particle.y > 100 ? -10 : particle.y + particle.speed * 0.1
      })));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log('Login attempt:', formData);
      alert('Login successful! (Demo)');
    }, 2000);
  };

  const inputVariants = {
    focused: 'scale-105 shadow-2xl border-sky-400',
    unfocused: 'scale-100 shadow-lg border-gray-200'
  };

  return (
    <div 
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-sky-400 animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              animation: `float ${particle.speed * 3}s ease-in-out infinite`
            }}
          />
        ))}
        
        {/* Gradient Orbs */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-sky-400/20 to-blue-500/20 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x * 0.1}%`,
            top: `${mousePosition.y * 0.1}%`,
            transform: `translate(-50%, -50%) scale(${1 + mousePosition.x * 0.001})`
          }}
        />
        <div 
          className="absolute w-72 h-72 bg-gradient-to-r from-purple-400/15 to-pink-500/15 rounded-full blur-3xl transition-all duration-1500 ease-out"
          style={{
            right: `${mousePosition.x * 0.05}%`,
            bottom: `${mousePosition.y * 0.05}%`,
            transform: `translate(50%, 50%) scale(${1 + mousePosition.y * 0.001})`
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md">
          {/* Logo Section with Animation */}
          <div className="text-center mb-8 transform hover:scale-105 transition-all duration-500">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full mb-4 shadow-2xl hover:shadow-sky-500/50 transition-all duration-500 hover:rotate-12">
              <Mail className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600 animate-fade-in">Sign in to Success In</p>
          </div>

          {/* Login Card */}
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 hover:shadow-sky-500/20 transition-all duration-700 hover:scale-[1.02]">
            <div className="space-y-6">
              {/* Email Input */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-sky-600 transition-colors duration-300">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className={`h-5 w-5  transition-all duration-300 ${
                      focusedField === 'email' || formData.email 
                        ? 'text-sky-500 scale-110' 
                        : 'text-sky-500'
                    }`} />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField('')}
                    className={`w-full pl-12 pr-4 py-4 border-2 rounded-2xl bg-white/50 backdrop-blur-sm focus:outline-none transition-all duration-500 hover:bg-white/80 ${
                      focusedField === 'email' ? inputVariants.focused : inputVariants.unfocused
                    }`}
                    placeholder="Enter your email"
                    required
                  />
                  {formData.email && (
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                      <Sparkles className="h-5 w-5 text-sky-500 animate-spin" />
                    </div>
                  )}
                </div>
              </div>

              {/* Password Input */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-sky-600 transition-colors duration-300">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className={`h-5 w-5 transition-all duration-300 ${
                      focusedField === 'password' || formData.password 
                        ? 'text-sky-500 scale-110' 
                        : 'text-sky-500'
                    }`} />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('password')}
                    onBlur={() => setFocusedField('')}
                    className={`w-full pl-12 pr-12 py-4 border-2 rounded-2xl bg-white/50 backdrop-blur-sm focus:outline-none transition-all duration-500 hover:bg-white/80 ${
                      focusedField === 'password' ? inputVariants.focused : inputVariants.unfocused
                    }`}
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center hover:scale-110 transition-transform duration-200"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-green-400 hover:text-sky-500 transition-colors duration-200" />
                    ) : (
                      <Eye className="h-5 w-5 text-sky-400 hover:text-sky-500 transition-colors duration-200" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center group cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only"
                  />
                  <div className="relative">
                    <div className="w-5 h-5 bg-white border-2 border-gray-300 rounded group-hover:border-sky-500 transition-colors duration-200"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <Heart className="w-3 h-3 text-sky-500" />
                    </div>
                  </div>
                  <span className="ml-2 text-sm text-gray-600 group-hover:text-sky-600 transition-colors duration-200">
                    Remember me
                  </span>
                </label>
                <button 
                  onClick={() => alert('Forgot password clicked!')}
                  className="text-sm text-sky-600 hover:text-sky-700 font-semibold hover:underline transition-all duration-200 hover:scale-105"
                >
                  Forgot password?
                </button>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="group relative w-full py-4 px-6 bg-gradient-to-r from-sky-500 to-sky-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-sky-500/50 focus:outline-none focus:ring-4 focus:ring-sky-300 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-sky-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex items-center justify-center">
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Signing in...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2 group-hover:space-x-3 transition-all duration-300">
                      <span>Sign In</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform duration-300" />
                      
                    </div>
                  )}
                </div>
              </button>
            </div>

            {/* Divider */}
            <div className="my-8 flex items-center">
              <div className="flex-1 border-t border-gray-200"></div>
              <div className="px-4 text-sm text-gray-500 bg-white rounded-full">or</div>
              <div className="flex-1 border-t border-gray-200"></div>
            </div>

            {/* Social Login */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-3">
            {[
              { icon: CgGoogle, color: 'bg-green-600', hover: 'hover:bg-blue-700' },
              { icon: FiGithub, color: 'bg-gray-900', hover: 'hover:bg-sky-600' },
              { icon: FiFacebook, color: 'bg-sky-500', hover: 'hover:bg-gray-900' },
              { icon: X, color: 'bg-gray-900', hover: 'hover:bg-gray-900' },
              { icon: BsApple, color: 'bg-gray-400', hover: 'hover:bg-gray-900' },
            ].map((provider, index) => (
              <button
                key={index}
                className={`${provider.color} ${provider.hover} text-white p-3 rounded-lg flex items-center justify-center transition-colors`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <provider.icon className="h-6 w-6" />
              </button>
            ))}
          </div>

            {/* Sign Up Link */}
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <Link to={'/signup'}><button 
                  
                  className="text-sky-600 hover:text-sky-700 font-semibold hover:underline transition-all duration-200 hover:scale-105 inline-flex items-center space-x-1"
                >
                  <span>Sign up</span>
                  <Star className="w-4 h-4 animate-pulse" />
                </button></Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
          }
          25% { 
            transform: translateY(-10px) rotate(90deg) scale(1.1); 
          }
          50% { 
            transform: translateY(-20px) rotate(180deg) scale(0.9); 
          }
          75% { 
            transform: translateY(-10px) rotate(270deg) scale(1.1); 
          }
        }
        
        @keyframes fade-in {
          from { 
            opacity: 0; 
            transform: translateY(20px) scale(0.9); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(14, 165, 233, 0.3); 
          }
          50% { 
            box-shadow: 0 0 40px rgba(14, 165, 233, 0.6); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out 0.5s both;
        }
        
        .group:hover .animate-pulse {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        /* Glassmorphism effect enhancement */
        .backdrop-blur-xl {
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }
        
        /* Custom scrollbar for inputs */
        input::-webkit-scrollbar {
          width: 2px;
        }
        
        input::-webkit-scrollbar-track {
          background: transparent;
        }
        
        input::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #0ea5e9, #3b82f6);
          border-radius: 1px;
        }
        
        /* Enhanced focus effects */
        input:focus {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        /* Button ripple effect */
        button:active {
          transform: scale(0.98);
        }
        
        /* Floating particle animation variants */
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.2);
          }
        }
        
        /* Enhanced hover effects for social buttons */
        .group:hover {
          transform: translateY(-2px);
        }
        
        /* Smooth transitions for all interactive elements */
        * {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Custom gradient animations */
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .bg-gradient-to-br {
          background-size: 400% 400%;
          animation: gradient-shift 15s ease infinite;
        }
        
        /* Enhanced loading spinner */
        @keyframes spin-enhanced {
          from {
            transform: rotate(0deg) scale(1);
          }
          25% {
            transform: rotate(90deg) scale(1.1);
          }
          50% {
            transform: rotate(180deg) scale(1);
          }
          75% {
            transform: rotate(270deg) scale(1.1);
          }
          to {
            transform: rotate(360deg) scale(1);
          }
        }
        
        .animate-spin {
          animation: spin-enhanced 1s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;