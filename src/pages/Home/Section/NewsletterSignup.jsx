import React, { useState } from "react";
import { FiMail, FiSend, FiDownload, FiFileText, FiLock } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Simple alert function to replace SweetAlert2
  const showAlert = (type, title, text) => {
    if (type === 'success') {
      alert(`✅ ${title}\n\n${text}`);
    } else if (type === 'error') {
      alert(`❌ ${title}\n\n${text}`);
    } else {
      alert(`ℹ️ ${title}\n\n${text}`);
    }
  };

  const handleSubmit = async () => {
    if (!email || !email.includes("@")) {
      showAlert("error", "Invalid Email", "Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
    setIsSubscribed(true);

    showAlert(
      "success",
      "Welcome to Success In!",
      "Thank you for subscribing! You can now download your free guide."
    );
  };

  const handlePDFDownload = async () => {
    if (!isSubscribed) {
      showAlert("error", "Subscription Required", "Please subscribe to our newsletter first to download the PDF.");
      return;
    }

    setIsDownloading(true);

    // Simulate PDF generation/download
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Create a sample PDF download
    const pdfContent = `
%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj

2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj

3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 4 0 R
/Resources <<
/Font <<
/F1 5 0 R
>>
>>
>>
endobj

4 0 obj
<<
/Length 100
>>
stream
BT
/F1 24 Tf
100 700 Td
(Success In - Ultimate Guide) Tj
0 -50 Td
/F1 12 Tf
(Your guide to success starts here!) Tj
ET
endstream
endobj

5 0 obj
<<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica
>>
endobj

xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000274 00000 n 
0000000424 00000 n 
trailer
<<
/Size 6
/Root 1 0 R
>>
startxref
521
%%EOF`;

    // Create and download the PDF
    const blob = new Blob([pdfContent], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Success-In-Ultimate-Guide.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    setIsDownloading(false);
    
    showAlert(
      "success",
      "Download Started!",
      "Your Success In Ultimate Guide is being downloaded. Check your downloads folder!"
    );
  };

  const handleSponsorClick = () => {
    const result = confirm("Sponsor Our Newsletter\n\nReach thousands of entrepreneurs and success-minded individuals.\n\nWould you like to contact us?");
    if (result) {
      window.open("mailto:sponsor@successin.com");
    }
  };

  return (
    <section className="py-12 px-4 sm:px-6 bg-white max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-sky-400 to-sky-500 rounded-2xl shadow-lg transform hover:scale-110 hover:rotate-3 transition-all duration-300 mb-6">
          <HiOutlineMail className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Don't Just Scroll, Grow — Subscribe Now
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Stay ahead with the latest updates, tips, and insights. Subscribe to the
          Success In newsletter and unlock your free success guide!
        </p>
      </div>

      {/* Main Content - Left Right Layout */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* Left Side - Newsletter Signup */}
        <div className="order-2 lg:order-1">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Join Our Community
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Get exclusive access to success stories, practical tips, and valuable resources 
            delivered straight to your inbox. Plus, download our comprehensive success guide instantly!
          </p>

          <div className="mb-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition-all"
                  disabled={isLoading || isSubscribed}
                />
              </div>
              <button
                onClick={handleSubmit}
                disabled={isLoading || isSubscribed}
                className="px-6 py-3 bg-gradient-to-r from-sky-400 to-sky-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none whitespace-nowrap"
              >
                {isSubscribed ? (
                  <span className="flex items-center">
                    ✓ Subscribed
                  </span>
                ) : isLoading ? (
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
          </div>

          {isSubscribed && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg mb-6">
              <p className="text-green-700 text-sm font-medium">
                🎉 Welcome aboard! You can now download your free success guide.
              </p>
            </div>
          )}

          <p className="text-gray-500 text-sm">
            Want to sponsor our newsletter?{" "}
            <button
              onClick={handleSponsorClick}
              className="text-sky-500 hover:text-sky-600 font-medium hover:underline transition-colors"
            >
              Find out more
            </button>
          </p>
        </div>

        {/* Right Side - PDF Download */}
        <div className="order-1 lg:order-2">
          <div className="relative p-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-200 shadow-lg">
            {/* Lock overlay when not subscribed */}
            {!isSubscribed && (
              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-3xl flex items-center justify-center z-10">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                    <FiLock className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-gray-600 font-medium">
                    Subscribe to discover what’s waiting for you!
                  </p>
                </div>
              </div>
            )}
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-sky-400 to-sky-500 rounded-2xl shadow-lg mb-6">
                <FiFileText className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Ultimate Success Guide
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Get our comprehensive 25-page guide packed with proven strategies, 
                actionable tips, and insights from top entrepreneurs. Your roadmap to success starts here!
              </p>
              
              <div className="flex items-center justify-center gap-4 mb-6 text-sm text-gray-500">
                <span className="flex items-center">
                  <FiFileText className="w-4 h-4 mr-1" />
                  25 Pages
                </span>
                <span>•</span>
                <span>PDF Format</span>
                <span>•</span>
                <span>Instant Access</span>
              </div>
              
              <button
                onClick={handlePDFDownload}
                disabled={!isSubscribed || isDownloading}
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sky-400 to-sky-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isDownloading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    Preparing Download...
                  </>
                ) : (
                  <>
                    <FiDownload className="mr-2 w-5 h-5" />
                    Download Free Guide
                  </>
                )}
              </button>
              
              {!isSubscribed && (
                <p className="text-xs text-gray-500 mt-3">
                  Complete the newsletter signup to unlock your free download
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex items-center justify-center mt-12">
        <div className="h-px bg-gray-300 flex-1 max-w-32" />
        <span className="mx-4 text-gray-400 text-sm">See for yourself</span>
        <div className="h-px bg-gray-300 flex-1 max-w-32" />
      </div>
    </section>
  );
};

export default NewsletterSignup;