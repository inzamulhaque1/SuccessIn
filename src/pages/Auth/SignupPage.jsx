import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  User,
  Phone,
  Calendar,
  Shield,
  CheckCircle,
  ArrowRight, 
  Sparkles, 
  Star,
  Heart,
  Zap,
  Globe,
  Building,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { CgGoogle } from 'react-icons/cg';
import { FiFacebook, FiGithub } from 'react-icons/fi';
import { BsApple } from 'react-icons/bs';

const SignupPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    company: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
    subscribeNewsletter: true
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [passwordStrength, setPasswordStrength] = useState(0);

  // Floating particles animation
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 3,
      speed: Math.random() * 3 + 1,
      opacity: Math.random() * 0.6 + 0.2,
      color: ['sky', 'blue', 'purple', 'pink'][Math.floor(Math.random() * 4)]
    }));
    setParticles(newParticles);

    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        y: particle.y > 100 ? -10 : particle.y + particle.speed * 0.08,
        x: particle.x + Math.sin(Date.now() * 0.001 + particle.id) * 0.1
      })));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Password strength calculator
  useEffect(() => {
    const calculateStrength = (password) => {
      let strength = 0;
      if (password.length >= 8) strength += 25;
      if (password.match(/[a-z]+/)) strength += 25;
      if (password.match(/[A-Z]+/)) strength += 25;
      if (password.match(/[0-9]+/)) strength += 25;
      return strength;
    };
    
    setPasswordStrength(calculateStrength(formData.password));
  }, [formData.password]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log('Signup attempt:', formData);
      alert('Account created successfully! (Demo)');
    }, 2500);
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength < 25) return 'bg-red-500';
    if (passwordStrength < 50) return 'bg-orange-500';
    if (passwordStrength < 75) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength < 25) return 'Weak';
    if (passwordStrength < 50) return 'Fair';
    if (passwordStrength < 75) return 'Good';
    return 'Strong';
  };

  const inputVariants = {
    focused: 'scale-105 shadow-2xl border-sky-400 bg-white/80',
    unfocused: 'scale-100 shadow-lg border-gray-200 bg-white/50'
  };

  const stepTitles = [
    'Personal Information',
    'Account Details',
    'Verification & Preferences'
  ];

  return (
    <div 
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-purple-50"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Enhanced Floating Particles */}
        {particles.map(particle => (
          <div
            key={particle.id}
            className={`absolute rounded-full animate-pulse bg-${particle.color}-400`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              animation: `float ${particle.speed * 4}s ease-in-out infinite`,
              animationDelay: `${particle.id * 0.1}s`
            }}
          />
        ))}
        
        {/* Dynamic Gradient Orbs */}
        <div 
          className="absolute w-[500px] h-[500px] bg-gradient-to-r from-sky-400/15 to-blue-500/15 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x * 0.05}%`,
            top: `${mousePosition.y * 0.05}%`,
            transform: `translate(-50%, -50%) scale(${1 + mousePosition.x * 0.0008}) rotate(${mousePosition.x}deg)`
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl transition-all duration-1500 ease-out"
          style={{
            right: `${mousePosition.x * 0.08}%`,
            bottom: `${mousePosition.y * 0.08}%`,
            transform: `translate(50%, 50%) scale(${1 + mousePosition.y * 0.001}) rotate(${-mousePosition.y}deg)`
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-blue-400/10 to-cyan-500/10 rounded-full blur-3xl transition-all duration-2000 ease-out"
          style={{
            left: `${50 + mousePosition.x * 0.03}%`,
            top: `${30 + mousePosition.y * 0.03}%`,
            transform: `translate(-50%, -50%) scale(${0.8 + mousePosition.x * 0.0005})`
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-2xl">
          {/* Logo Section */}
          <div className="text-center mb-8 transform hover:scale-105 transition-all duration-500">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-sky-500 via-sky-600 to-sky-600 rounded-full mb-4 shadow-2xl hover:shadow-sky-500/50 transition-all duration-500 hover:rotate-12">
              <User className="w-12 h-12 text-white animate-pulse" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-sky-600 via-sky-600 to-sky-600 bg-clip-text text-transparent mb-2">
              Join Success In
            </h1>
            <p className="text-gray-600 text-lg animate-fade-in">Create your account in just a few steps</p>
          </div>

          {/* Progress Indicator */}
          <div className="mb-8 px-4">
            <div className="flex items-center justify-between relative">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex flex-col items-center relative z-10">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 ${
                    currentStep >= step 
                      ? 'bg-gradient-to-r from-sky-500 to-sky-600 text-white shadow-lg scale-110' 
                      : 'bg-white border-2 border-gray-300 text-gray-400'
                  }`}>
                    {currentStep > step ? <CheckCircle className="w-6 h-6" /> : step}
                  </div>
                  <span className={`mt-2 text-xs font-medium transition-colors duration-300 ${
                    currentStep >= step ? 'text-sky-600' : 'text-gray-400'
                  }`}>
                    {stepTitles[step - 1]}
                  </span>
                </div>
              ))}
              {/* Progress Line */}
              <div className="absolute top-6 left-6 right-6 h-0.5 bg-gray-200">
                <div 
                  className="h-full bg-gradient-to-r from-sky-500 to-sky-600 transition-all duration-700 ease-out"
                  style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Signup Form Card */}
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 hover:shadow-sky-500/20 transition-all duration-700 hover:scale-[1.01]">
            
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <User className="w-6 h-6 mr-3 text-sky-500" />
                  Personal Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-sky-600 transition-colors duration-300">
                      First Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className={`h-5 w-5 transition-all duration-300 ${
                          focusedField === 'firstName' || formData.firstName 
                            ? 'text-sky-500 scale-110' 
                            : 'text-gray-400'
                        }`} />
                      </div>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('firstName')}
                        onBlur={() => setFocusedField('')}
                        className={`w-full pl-12 pr-4 py-4 border-2 rounded-2xl backdrop-blur-sm focus:outline-none transition-all duration-500 hover:bg-white/80 ${
                          focusedField === 'firstName' ? inputVariants.focused : inputVariants.unfocused
                        }`}
                        placeholder="Enter first name"
                        required
                      />
                    </div>
                  </div>

                  {/* Last Name */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-sky-600 transition-colors duration-300">
                      Last Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className={`h-5 w-5 transition-all duration-300 ${
                          focusedField === 'lastName' || formData.lastName 
                            ? 'text-sky-500 scale-110' 
                            : 'text-gray-400'
                        }`} />
                      </div>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('lastName')}
                        onBlur={() => setFocusedField('')}
                        className={`w-full pl-12 pr-4 py-4 border-2 rounded-2xl backdrop-blur-sm focus:outline-none transition-all duration-500 hover:bg-white/80 ${
                          focusedField === 'lastName' ? inputVariants.focused : inputVariants.unfocused
                        }`}
                        placeholder="Enter last name"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-sky-600 transition-colors duration-300">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className={`h-5 w-5 transition-all duration-300 ${
                        focusedField === 'email' || formData.email 
                          ? 'text-sky-500 scale-110' 
                          : 'text-gray-400'
                      }`} />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full pl-12 pr-4 py-4 border-2 rounded-2xl backdrop-blur-sm focus:outline-none transition-all duration-500 hover:bg-white/80 ${
                        focusedField === 'email' ? inputVariants.focused : inputVariants.unfocused
                      }`}
                      placeholder="Enter your email"
                      required
                    />
                    {formData.email && (
                      <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                        <Sparkles className="h-5 w-5 text-green-500 animate-spin" />
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-sky-600 transition-colors duration-300">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Phone className={`h-5 w-5 transition-all duration-300 ${
                          focusedField === 'phone' || formData.phone 
                            ? 'text-sky-500 scale-110' 
                            : 'text-gray-400'
                        }`} />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField('')}
                        className={`w-full pl-12 pr-4 py-4 border-2 rounded-2xl backdrop-blur-sm focus:outline-none transition-all duration-500 hover:bg-white/80 ${
                          focusedField === 'phone' ? inputVariants.focused : inputVariants.unfocused
                        }`}
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>

                  {/* Date of Birth */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-sky-600 transition-colors duration-300">
                      Date of Birth
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Calendar className={`h-5 w-5 transition-all duration-300 ${
                          focusedField === 'dateOfBirth' || formData.dateOfBirth 
                            ? 'text-sky-500 scale-110' 
                            : 'text-gray-400'
                        }`} />
                      </div>
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('dateOfBirth')}
                        onBlur={() => setFocusedField('')}
                        className={`w-full pl-12 pr-4 py-4 border-2 rounded-2xl backdrop-blur-sm focus:outline-none transition-all duration-500 hover:bg-white/80 ${
                          focusedField === 'dateOfBirth' ? inputVariants.focused : inputVariants.unfocused
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Company */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-sky-600 transition-colors duration-300">
                    Company (Optional)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Building className={`h-5 w-5 transition-all duration-300 ${
                        focusedField === 'company' || formData.company 
                          ? 'text-sky-500 scale-110' 
                          : 'text-gray-400'
                      }`} />
                    </div>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('company')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full pl-12 pr-4 py-4 border-2 rounded-2xl backdrop-blur-sm focus:outline-none transition-all duration-500 hover:bg-white/80 ${
                        focusedField === 'company' ? inputVariants.focused : inputVariants.unfocused
                      }`}
                      placeholder="Enter company name"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Account Details */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Lock className="w-6 h-6 mr-3 text-sky-500" />
                  Account Security
                </h2>

                {/* Password */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-sky-600 transition-colors duration-300">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock className={`h-5 w-5 transition-all duration-300 ${
                        focusedField === 'password' || formData.password 
                          ? 'text-sky-500 scale-110' 
                          : 'text-gray-400'
                      }`} />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('password')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full pl-12 pr-12 py-4 border-2 rounded-2xl backdrop-blur-sm focus:outline-none transition-all duration-500 hover:bg-white/80 ${
                        focusedField === 'password' ? inputVariants.focused : inputVariants.unfocused
                      }`}
                      placeholder="Create a strong password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center hover:scale-110 transition-transform duration-200"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400 hover:text-sky-500 transition-colors duration-200" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400 hover:text-sky-500 transition-colors duration-200" />
                      )}
                    </button>
                  </div>
                  
                  {/* Password Strength Indicator */}
                  {formData.password && (
                    <div className="mt-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">Password Strength</span>
                        <span className={`text-sm font-medium ${
                          passwordStrength < 50 ? 'text-red-500' : 
                          passwordStrength < 75 ? 'text-yellow-500' : 'text-green-500'
                        }`}>
                          {getPasswordStrengthText()}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-500 ${getPasswordStrengthColor()}`}
                          style={{ width: `${passwordStrength}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Confirm Password */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-sky-600 transition-colors duration-300">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Shield className={`h-5 w-5 transition-all duration-300 ${
                        focusedField === 'confirmPassword' || formData.confirmPassword 
                          ? 'text-sky-500 scale-110' 
                          : 'text-gray-400'
                      }`} />
                    </div>
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('confirmPassword')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full pl-12 pr-12 py-4 border-2 rounded-2xl backdrop-blur-sm focus:outline-none transition-all duration-500 hover:bg-white/80 ${
                        focusedField === 'confirmPassword' ? inputVariants.focused : inputVariants.unfocused
                      }`}
                      placeholder="Confirm your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center hover:scale-110 transition-transform duration-200"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400 hover:text-sky-500 transition-colors duration-200" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400 hover:text-sky-500 transition-colors duration-200" />
                      )}
                    </button>
                    {formData.confirmPassword && (
                      <div className="absolute inset-y-0 right-12 pr-4 flex items-center">
                        {formData.password === formData.confirmPassword ? (
                          <CheckCircle className="h-5 w-5 text-green-500 animate-pulse" />
                        ) : (
                          <div className="h-5 w-5 border-2 border-red-500 rounded-full animate-pulse" />
                        )}
                      </div>
                    )}
                  </div>
                  {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                    <p className="mt-2 text-sm text-red-500 animate-pulse">Passwords do not match</p>
                  )}
                </div>

                {/* Security Tips */}
                <div className="bg-sky-50 rounded-2xl p-4 border border-sky-200">
                  <h4 className="flex items-center text-sm font-semibold text-sky-800 mb-2">
                    <Shield className="w-4 h-4 mr-2" />
                    Password Security Tips
                  </h4>
                  <ul className="text-xs text-sky-700 space-y-1">
                    <li className="flex items-center">
                      <div className={`w-2 h-2 rounded-full mr-2 ${formData.password.length >= 8 ? 'bg-green-500' : 'bg-gray-300'}`} />
                      At least 8 characters long
                    </li>
                    <li className="flex items-center">
                      <div className={`w-2 h-2 rounded-full mr-2 ${formData.password.match(/[A-Z]/) ? 'bg-green-500' : 'bg-gray-300'}`} />
                      Contains uppercase letters
                    </li>
                    <li className="flex items-center">
                      <div className={`w-2 h-2 rounded-full mr-2 ${formData.password.match(/[0-9]/) ? 'bg-green-500' : 'bg-gray-300'}`} />
                      Contains numbers
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* Step 3: Verification & Preferences */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3 text-sky-500" />
                  Final Steps
                </h2>

                {/* Terms and Conditions */}
                <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl p-6 border border-sky-200">
                  <label className="flex items-start group cursor-pointer">
                    <input 
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      className="sr-only"
                      required
                    />
                    <div className="relative flex-shrink-0 mt-1">
                      <div className={`w-6 h-6 border-2 rounded-lg transition-all duration-300 ${
                        formData.agreeToTerms 
                          ? 'bg-sky-500 border-sky-500' 
                          : 'bg-white border-gray-300 group-hover:border-sky-400'
                      }`}>
                        {formData.agreeToTerms && (
                          <CheckCircle className="w-4 h-4 text-white absolute top-0.5 left-0.5" />
                        )}
                      </div>
                    </div>
                    <div className="ml-3">
                      <span className="text-sm text-gray-700 group-hover:text-sky-600 transition-colors duration-200">
                        I agree to the{' '}
                        <button className="text-sky-600 hover:text-sky-700 font-semibold hover:underline">
                          Privacy Policy
                        </button>
                      </span>
                    </div>
                  </label>
                </div>

                {/* Newsletter Subscription */}
                <div className="bg-gradient-to-r from-sky-50 to-sky-50 rounded-2xl p-6 border border-sky-200">
                  <label className="flex items-start group cursor-pointer">
                    <input 
                      type="checkbox"
                      name="subscribeNewsletter"
                      checked={formData.subscribeNewsletter}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div className="relative flex-shrink-0 mt-1">
                      <div className={`w-6 h-6 border-2 rounded-lg transition-all duration-300 ${
                        formData.subscribeNewsletter 
                          ? 'bg-sky-500 border-sky-500' 
                          : 'bg-white border-gray-300 group-hover:border-sky-400'
                      }`}>
                        {formData.subscribeNewsletter && (
                          <Heart className="w-4 h-4 text-white absolute top-0.5 left-0.5" />
                        )}
                      </div>
                    </div>
                    <div className="ml-3">
                      <span className="text-sm font-semibold text-gray-800">Subscribe to our newsletter</span>
                      <p className="text-xs text-gray-600 mt-1">
                        Get the latest updates, exclusive content, and special offers delivered to your inbox.
                      </p>
                    </div>
                  </label>
                </div>

                {/* Account Summary */}
                <div className="bg-white/50 rounded-2xl p-6 border-2 border-gray-100">
                  <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                    <User className="w-5 h-5 mr-2 text-sky-500" />
                    Account Summary
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Name:</span>
                      <span className="font-medium text-gray-800">
                        {formData.firstName} {formData.lastName}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Email:</span>
                      <span className="font-medium text-gray-800">{formData.email}</span>
                    </div>
                    {formData.phone && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Phone:</span>
                        <span className="font-medium text-gray-800">{formData.phone}</span>
                      </div>
                    )}
                    {formData.company && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Company:</span>
                        <span className="font-medium text-gray-800">{formData.company}</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Newsletter:</span>
                      <span className={`font-medium ${formData.subscribeNewsletter ? 'text-green-600' : 'text-gray-400'}`}>
                        {formData.subscribeNewsletter ? 'Subscribed' : 'Not subscribed'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-between items-center">
              {currentStep > 1 ? (
                <button
                  onClick={prevStep}
                  className="group flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-2xl transition-all duration-300 hover:scale-105"
                >
                  <ArrowRight className="w-5 h-5 mr-2 rotate-180 group-hover:-translate-x-1 transition-transform duration-300" />
                  Previous
                </button>
              ) : (
                <div></div>
              )}

              {currentStep < 3 ? (
                <button
                  onClick={nextStep}
                  className="group flex items-center px-8 py-4 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-sky-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-1"
                >
                  Next Step
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={isLoading || !formData.agreeToTerms}
                  className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-emerald-600 hover:to-teal-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-green-500/50 focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-500 hover:scale-105 hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative flex items-center">
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Creating Account...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2 group-hover:space-x-3 transition-all duration-300">
                        <span>Create Account</span>
                        <CheckCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                        <Zap className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
                      </div>
                    )}
                  </div>
                </button>
              )}
            </div>

            {/* Social Signup (only on step 1) */}
            {currentStep === 1 && (
              <>
                <div className="my-8 flex items-center">
                  <div className="flex-1 border-t border-gray-200"></div>
                  <div className="px-4 text-sm text-gray-500 bg-white rounded-full">or sign up with</div>
                  <div className="flex-1 border-t border-gray-200"></div>
                </div>

                <div className="grid grid-cols-5 gap-3">
                            {[
                              { icon: CgGoogle, color: 'bg-green-600', hover: 'hover:bg-red-700' },
                              { icon: FiGithub, color: 'bg-gray-900', hover: 'hover:bg-black' },
                              { icon: FiFacebook, color: 'bg-sky-500', hover: 'hover:bg-sky-700' },
                              { icon: X, color: 'bg-gray-900', hover: 'hover:bg-gray-900' },
                              { icon: BsApple, color: 'bg-gray-400', hover: 'hover:bg-gray-700' },
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
              </>
            )}

            {/* Login Link */}
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link to={'/login'}><button 
   
                  className="text-sky-600 hover:text-sky-700 font-semibold hover:underline transition-all duration-200 hover:scale-105 inline-flex items-center space-x-1"
                >
                  <span>Sign in</span>
                  <ArrowRight className="w-4 h-4 animate-pulse" />
                </button></Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
          }
          25% { 
            transform: translateY(-15px) rotate(90deg) scale(1.1); 
          }
          50% { 
            transform: translateY(-30px) rotate(180deg) scale(0.9); 
          }
          75% { 
            transform: translateY(-15px) rotate(270deg) scale(1.1); 
          }
        }
        
        @keyframes fade-in {
          from { 
            opacity: 0; 
            transform: translateY(30px) scale(0.95); 
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
            box-shadow: 0 0 40px rgba(14, 165, 233, 0.6), 0 0 60px rgba(14, 165, 233, 0.4); 
          }
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .bg-gradient-to-br {
          background-size: 400% 400%;
          animation: gradient-shift 20s ease infinite;
        }
        
        /* Enhanced glassmorphism */
        .backdrop-blur-xl {
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
        }
        
        /* Smooth focus effects */
        input:focus {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        /* Enhanced button effects */
        button:active {
          transform: scale(0.98);
        }
        
        /* Progress line animation */
        .progress-line {
          transition: width 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Step indicator bounce effect */
        .step-indicator {
          transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        /* Enhanced particle colors */
        .bg-sky-400 {
          background: linear-gradient(45deg, #0ea5e9, #3b82f6);
        }
        
        .bg-blue-400 {
          background: linear-gradient(45deg, #3b82f6, #6366f1);
        }
        
        .bg-purple-400 {
          background: linear-gradient(45deg, #a855f7, #ec4899);
        }
        
        .bg-pink-400 {
          background: linear-gradient(45deg, #ec4899, #f97316);
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
        
        /* Smooth transitions for all elements */
        * {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Enhanced hover effects */
        .group:hover {
          transform: translateY(-2px);
        }
        
        /* Custom checkbox animations */
        input[type="checkbox"]:checked + div {
          animation: checkbox-pop 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        @keyframes checkbox-pop {
          0% { transform: scale(1); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default SignupPage;