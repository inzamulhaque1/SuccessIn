/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHome, FiMail, FiCompass } from 'react-icons/fi';
import { HiOutlineEmojiSad, HiOutlineLightningBolt } from 'react-icons/hi';

const ErrorPage = () => {
  // Simple staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 300 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-white flex flex-col items-center justify-center p-6 text-center overflow-hidden relative">
      {/* Subtle animated background elements (lightweight) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-sky-200 blur-xl"
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-sky-300 blur-xl"
      />

      {/* Main content with optimized animations */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-2xl w-full"
      >
        {/* Premium badge - simple entrance */}
        <motion.div variants={itemVariants} className="inline-flex items-center justify-center mb-6 px-4 py-2 rounded-full bg-white shadow-md border border-sky-100">
          <HiOutlineLightningBolt className="text-sky-500 mr-2 text-xl" />
          <span className="text-sm font-medium text-sky-600">Success In Premium</span>
        </motion.div>

        {/* 404 with subtle bounce */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center items-center mb-8"
        >
          <motion.h1 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', bounce: 0.6 }}
            className="text-9xl font-bold text-sky-500 relative"
          >
            40
            <motion.span
              animate={{ rotate: [0, 500, -10, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="absolute -top-4 -right-8"
            >
              <HiOutlineEmojiSad className="text-5xl" />
            </motion.span>
            4
          </motion.h1>
        </motion.div>

        {/* Text content */}
        <motion.h2 variants={itemVariants} className="text-4xl font-bold text-sky-600 mb-4">
          Page Not Found
        </motion.h2>
        
        <motion.p variants={itemVariants} className="text-xl text-sky-400 mb-8">
          The content you're looking for has moved or doesn't exist.
          <br />
          Let's get you back on track.
        </motion.p>

        {/* Action buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center px-6 py-3 bg-sky-500 text-white rounded-lg shadow-md hover:bg-sky-600 transition-all"
          >
            <FiHome className="mr-2" />
            <Link to="/">Return Home</Link>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center px-6 py-3 bg-white text-sky-600 border border-sky-200 rounded-lg shadow-sm hover:bg-sky-50 transition-all"
          >
            <FiMail className="mr-2" />
            <Link to="/newsletters">Browse Newsletters</Link>
          </motion.button>
        </motion.div>

        {/* Help card - simple fade in */}
        <motion.div 
          variants={itemVariants}
          className="bg-white p-6 rounded-xl shadow-md border border-sky-100 max-w-md mx-auto"
        >
          <div className="flex items-center mb-3">
            <FiCompass className="text-sky-500 mr-2 text-xl" />
            <h3 className="text-lg font-semibold text-gray-800">Need Help?</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Our support team can help you find what you're looking for.
          </p>
          <button className="text-sky-500 font-medium hover:text-sky-600 transition-colors">
            Contact Support →
          </button>
        </motion.div>
      </motion.div>

      {/* Single floating element (optimized) */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-8 right-8 hidden lg:block"
      >
        <div className="w-14 h-14 bg-sky-500 rounded-full flex items-center justify-center shadow-md">
          <FiMail className="text-white text-xl" />
        </div>
      </motion.div>
    </div>
  );
};

export default ErrorPage;