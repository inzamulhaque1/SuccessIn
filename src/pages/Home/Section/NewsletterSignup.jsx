import React, { useState } from "react";
import { FiMail, FiSend } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import Swal from "sweetalert2";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Please enter a valid email address",
        showConfirmButton: false,
        timer: 3000,
        toast: true,
        background: "linear-gradient(to right, #ef4444, #dc2626)",
        color: "white",
      });
      return;
    }

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
    setEmail("");

    Swal.fire({
      title: "Welcome to Success In!",
      text: "Thank you for subscribing! You'll receive the best success stories in your inbox.",
      icon: "success",
      confirmButtonText: "Awesome!",
      confirmButtonColor: "#0ea5e9",
      background: "white",
      backdrop: `
                rgba(0,0,0,0.5)
                url("https://media.tenor.com/2roX3uxz_68AAAAM/cat-space.gif")
                left top
                no-repeat
            `,
    });
  };

  const handleSponsorClick = () => {
    Swal.fire({
      title: "Sponsor Our Newsletter",
      text: "Reach thousands of entrepreneurs and success-minded individuals.",
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Contact Us",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#0ea5e9",
      background: "white",
    }).then((result) => {
      if (result.isConfirmed) {
        window.open("mailto:sponsor@successin.com");
      }
    });
  };

  return (
    <section className="py-12 px-4 sm:px-6 bg-white text-center max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-sky-400 to-sky-500 rounded-2xl shadow-lg transform hover:scale-110 hover:rotate-3 transition-all duration-300">
          <HiOutlineMail className="w-8 h-8 text-white" />
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Don’t Just Scroll, Grow — Subscribe Now
      </h2>

      <p className="text-gray-600 mb-8 mx-auto max-w-lg leading-relaxed">
        Stay ahead with the latest updates, tips, and insights. Subscribe to the
        Success In newsletter and never miss a beat!
      </p>

      <form onSubmit={handleSubmit} className="mb-6 max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email ..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition-all"
              disabled={isLoading}
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-3 bg-gradient-to-r from-sky-400 to-sky-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                Signing up...
              </span>
            ) : (
              <span className="flex items-center">
                <FiSend className="mr-2" />
                Sign me up
              </span>
            )}
          </button>
        </div>
      </form>

      <p className="text-gray-500 mb-8">
        Want to sponsor a newsletter?
        <button
          onClick={handleSponsorClick}
          className="text-sky-500 hover:text-sky-600 font-medium ml-1 hover:underline transition-colors"
        >
          Find out more
        </button>
      </p>

      <div className="flex items-center justify-center mb-6">
        <div className="h-px bg-gray-300 flex-1 max-w-16" />
        <span className="mx-4 text-gray-400 text-sm">See for yourself</span>
        <div className="h-px bg-gray-300 flex-1 max-w-16" />
      </div>

      
    </section>
  );
};

export default NewsletterSignup;
