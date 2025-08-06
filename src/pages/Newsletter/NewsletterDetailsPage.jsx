import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, Bookmark, Share2, Clock, Calendar, Users, 
  Star, Mail, ExternalLink, Tag, TrendingUp, Heart,
  MessageCircle, Eye, ChevronLeft, ChevronRight,
  Copy, Facebook, Twitter, Linkedin, Globe, Send,
  Download, Bell, CheckCircle, Shield, Award,
  PlayCircle, Pause, Volume2, VolumeX
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NewsletterDetailsPage = () => {
  const [newsletter, setNewsletter] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isReadingMode, setIsReadingMode] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [email, setEmail] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
   const navigate = useNavigate();

  // Sample newsletter data - in real app, this would come from API based on ID
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setNewsletter({
        id: 1,
        title: "The Future of AI: Revolutionary Breakthroughs in 2025",
        subtitle: "Exploring the latest developments in artificial intelligence and their impact on society",
        description: "A comprehensive analysis of AI advancements, featuring insights from leading researchers and industry experts on the transformative technologies shaping our future.",
        author: {
          name: "Dr. Sarah Chen",
          bio: "AI Research Director at Stanford University, Former Google AI Lead",
          avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
          followers: 45000,
          verified: true
        },
        category: "technology",
        featured: true,
        publishDate: "2025-01-15",
        readTime: "12 min read",
        subscribers: 125000,
        rating: 4.8,
        views: 89000,
        likes: 2400,
        comments: 156,
        shares: 890,
        tags: ["AI", "Technology", "Innovation", "Future", "Research"],
        images: [
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        content: `
# The Dawn of a New AI Era

The year 2025 marks a pivotal moment in artificial intelligence development, with groundbreaking advances that are reshaping how we interact with technology and understand intelligence itself.

## Revolutionary Breakthrough in Neural Networks

Recent developments in transformer architecture have led to unprecedented capabilities in AI systems. The new generation of models demonstrates remarkable improvements in:

- **Multimodal Understanding**: Seamless integration of text, images, audio, and video processing
- **Reasoning Capabilities**: Enhanced logical thinking and problem-solving abilities  
- **Energy Efficiency**: 90% reduction in computational requirements
- **Real-time Processing**: Sub-millisecond response times for complex queries

### The Science Behind the Innovation

The breakthrough comes from a novel approach to attention mechanisms, allowing AI systems to process information more like the human brain. This biomimetic design has resulted in:

> "We're witnessing the emergence of AI that doesn't just process information, but truly understands context and nuance in ways we never thought possible." - Dr. Michael Torres, MIT AI Lab

## Impact on Various Industries

### Healthcare Revolution
AI-powered diagnostic tools are now capable of detecting diseases with 99.7% accuracy, often identifying conditions before traditional methods. The integration of AI in personalized medicine has led to:

- Customized treatment plans based on genetic profiles
- Real-time health monitoring through wearable devices
- Predictive healthcare preventing diseases before symptoms appear

### Education Transformation  
Personalized learning experiences adapted to individual student needs have shown remarkable results:

- 40% improvement in learning outcomes
- Reduced educational inequality through accessible AI tutors
- Interactive virtual laboratories for hands-on learning

### Environmental Solutions
AI applications in climate science are providing new solutions:

- Precision agriculture reducing water usage by 35%
- Smart grid systems optimizing renewable energy distribution
- Advanced climate modeling for accurate long-term predictions

## Ethical Considerations and Future Outlook

As we advance into this new era, we must address critical ethical questions:

**Privacy and Data Protection**: Ensuring user data remains secure while enabling AI innovation requires new frameworks and regulations.

**Job Displacement and Creation**: While AI may automate certain roles, it's also creating entirely new job categories requiring human-AI collaboration skills.

**Algorithmic Bias**: Continued efforts to eliminate bias in AI systems are crucial for equitable technology deployment.

## What This Means for You

The implications of these AI advances extend far beyond technology companies:

1. **Personal Productivity**: AI assistants will become more capable and intuitive
2. **Career Development**: New skills in AI collaboration will become valuable
3. **Daily Life**: Smart homes and cities will provide unprecedented convenience
4. **Decision Making**: AI-powered insights will inform better personal and professional choices

## Looking Ahead

The next decade promises even more remarkable developments. Research teams worldwide are working on:

- **Quantum-AI Integration**: Combining quantum computing with AI for exponential performance gains
- **Neuromorphic Computing**: Hardware designed to mimic brain structure and function
- **Autonomous Scientific Discovery**: AI systems capable of conducting independent research

The future of AI is not just about more powerful computers—it's about creating technology that enhances human capability and addresses our greatest challenges.

---

*This article is part of our ongoing series on emerging technologies. For more insights into the future of innovation, subscribe to our weekly newsletter.*
        `,
        relatedNewsletters: [
          {
            id: 2,
            title: "Quantum Computing Breakthroughs",
            image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            readTime: "8 min read"
          },
          {
            id: 3,
            title: "The Ethics of Artificial Intelligence",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            readTime: "10 min read"
          },
          {
            id: 4,
            title: "Machine Learning in Healthcare",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            readTime: "15 min read"
          }
        ]
      });
      setIsLoading(false);
    }, 1000);
  }, []);

  // Reading progress tracker
  useEffect(() => {
    const handleScroll = () => {
      const articleElement = document.getElementById('article-content');
      if (articleElement) {
        const rect = articleElement.getBoundingClientRect();
        const progress = Math.max(0, Math.min(100, 
          ((window.innerHeight - rect.top) / (rect.height + window.innerHeight)) * 100
        ));
        setReadingProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setShowSuccessMessage(true);
      setEmail('');
      setTimeout(() => setShowSuccessMessage(false), 3000);
    }
  };

  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(newsletter?.title)}&url=${encodeURIComponent(window.location.href)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowShareMenu(false);
  };

  const formatContent = (content) => {
    return content.split('\n').map((paragraph, index) => {
      if (paragraph.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-bold text-gray-900 mb-6 mt-8">{paragraph.slice(2)}</h1>;
      } else if (paragraph.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold text-gray-900 mb-4 mt-8">{paragraph.slice(3)}</h2>;
      } else if (paragraph.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-semibold text-gray-900 mb-3 mt-6">{paragraph.slice(4)}</h3>;
      } else if (paragraph.startsWith('> ')) {
        return (
          <blockquote key={index} className="border-l-4 border-sky-500 pl-6 py-4 my-6 bg-sky-50 italic text-gray-700">
            {paragraph.slice(2)}
          </blockquote>
        );
      } else if (paragraph.startsWith('- ')) {
        return <li key={index} className="text-gray-700 leading-relaxed mb-2">{paragraph.slice(2)}</li>;
      } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return <p key={index} className="font-bold text-gray-900 mb-4 mt-4">{paragraph.slice(2, -2)}</p>;
      } else if (paragraph.trim() === '') {
        return <br key={index} />;
      } else {
        return <p key={index} className="text-gray-700 leading-relaxed mb-4">{paragraph}</p>;
      }
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sky-500"></div>
      </div>
    );
  }

  if (!newsletter) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Newsletter not found</h2>
          <p className="text-gray-600 mt-2">The newsletter you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-sky-500 to-sky-600 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Header Navigation */}
      <div className="sticky top-1 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
      onClick={() => navigate('/newsletters')}
      className="flex items-center text-gray-600 hover:text-sky-600 transition-colors"
    >
      <ArrowLeft className="h-5 w-5 mr-2" />
      <span className="font-medium">Back to Newsletters</span>
    </button>
            
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsReadingMode(!isReadingMode)}
                className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                {isReadingMode ? 'Exit Reading' : 'Reading Mode'}
              </button>
              
              <button
                onClick={toggleBookmark}
                className={`p-2 rounded-lg transition-colors ${
                  isBookmarked 
                    ? 'bg-amber-100 text-amber-600 hover:bg-amber-200' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Bookmark className={`h-5 w-5 ${isBookmarked ? 'fill-current' : ''}`} />
              </button>
              
              <div className="relative">
                <button
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                >
                  <Share2 className="h-5 w-5" />
                </button>
                
                {showShareMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2">
                    <a
                      href={shareUrls.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      <Twitter className="h-4 w-4 mr-3 text-blue-400" />
                      Share on Twitter
                    </a>
                    <a
                      href={shareUrls.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      <Facebook className="h-4 w-4 mr-3 text-blue-600" />
                      Share on Facebook
                    </a>
                    <a
                      href={shareUrls.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      <Linkedin className="h-4 w-4 mr-3 text-blue-700" />
                      Share on LinkedIn
                    </a>
                    <button
                      onClick={copyToClipboard}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      <Copy className="h-4 w-4 mr-3 text-gray-600" />
                      Copy Link
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Hero Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-8">
              {/* Image Carousel */}
              <div className="relative h-80 md:h-96">
                <img
                  src={newsletter.images[currentImageIndex]}
                  alt={newsletter.title}
                  className="w-full h-full object-cover"
                />
                {newsletter.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => 
                        prev === 0 ? newsletter.images.length - 1 : prev - 1
                      )}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => 
                        prev === newsletter.images.length - 1 ? 0 : prev + 1
                      )}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {newsletter.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full ${
                            index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
                {newsletter.featured && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-sky-600 text-white text-sm font-bold rounded-lg">
                    <Award className="h-4 w-4 inline mr-1" />
                    Featured
                  </span>
                )}
              </div>
              
              <div className="p-8">
                {/* Category and Tags */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-sky-100 text-sky-600">
                    Technology
                  </span>
                  {newsletter.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title and Subtitle */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {newsletter.title}
                </h1>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  {newsletter.subtitle}
                </p>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(newsletter.publishDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {newsletter.readTime}
                  </div>
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    {newsletter.views.toLocaleString()} views
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-amber-400" />
                    {newsletter.rating} rating
                  </div>
                </div>

                {/* Engagement Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-6">
                    <button className="flex items-center space-x-1 text-gray-600 hover:text-red-600 transition-colors">
                      <Heart className="h-5 w-5" />
                      <span>{newsletter.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-600 hover:text-sky-600 transition-colors">
                      <MessageCircle className="h-5 w-5" />
                      <span>{newsletter.comments}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-600 hover:text-green-600 transition-colors">
                      <Share2 className="h-5 w-5" />
                      <span>{newsletter.shares}</span>
                    </button>
                  </div>
                  
                  {/* Audio Controls */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-2 rounded-full bg-sky-100 text-sky-600 hover:bg-sky-200 transition-colors"
                    >
                      {isPlaying ? <Pause className="h-4 w-4" /> : <PlayCircle className="h-4 w-4" />}
                    </button>
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                    >
                      {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
              <div id="article-content" className="prose prose-lg max-w-none">
                {formatContent(newsletter.content)}
              </div>
              
              {/* Download/Save Options */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Save This Article</h3>
                  <div className="flex space-x-3">
                    <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </button>
                    <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-sky-600 rounded-lg hover:bg-sky-700 transition-colors">
                      <Mail className="h-4 w-4 mr-2" />
                      Email to Me
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Newsletters */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {newsletter.relatedNewsletters.map((related) => (
                  <div key={related.id} className="group cursor-pointer">
                    <div className="relative h-40 mb-4 rounded-xl overflow-hidden">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors">
                      {related.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {related.readTime}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Author Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6 top-24">
              <div className="text-center">
                <div className="relative inline-block mb-4">
                  <img
                    src={newsletter.author.avatar}
                    alt={newsletter.author.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto"
                  />
                  {newsletter.author.verified && (
                    <div className="absolute -bottom-1 -right-1 bg-sky-600 text-white rounded-full p-1">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {newsletter.author.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {newsletter.author.bio}
                </p>
                <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
                  <Users className="h-4 w-4 mr-1" />
                  {newsletter.author.followers.toLocaleString()} followers
                </div>
                <button className="w-full bg-sky-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-sky-700 transition-colors">
                  Follow Author
                </button>
              </div>
            </div>

            {/* Newsletter Stats */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Newsletter Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Subscribers</span>
                  <span className="font-semibold text-gray-900">
                    {newsletter.subscribers.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Views</span>
                  <span className="font-semibold text-gray-900">
                    {newsletter.views.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Engagement Rate</span>
                  <span className="font-semibold text-green-600">4.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Average Rating</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-amber-400 mr-1" />
                    <span className="font-semibold text-gray-900">{newsletter.rating}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Subscribe Form */}
            <div className="bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl p-6 text-white mb-6">
              <div className="text-center">
                <Bell className="h-12 w-12 mx-auto mb-4 text-sky-100" />
                <h3 className="text-xl font-bold mb-2">
                  {isSubscribed ? "You're Subscribed!" : "Stay Updated"}
                </h3>
                <p className="text-sky-100 mb-4">
                  {isSubscribed 
                    ? "Thank you for subscribing! You'll receive the latest updates."
                    : "Get the latest newsletters delivered to your inbox"
                  }
                </p>
                
                {!isSubscribed ? (
                  <form onSubmit={handleSubscribe} className="space-y-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full bg-white text-sky-600 font-semibold py-2 px-4 rounded-lg hover:bg-sky-50 transition-colors flex items-center justify-center"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Subscribe Now
                    </button>
                  </form>
                ) : (
                  <div className="flex items-center justify-center space-x-2 bg-white/20 rounded-lg py-3 px-4">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">Successfully Subscribed</span>
                  </div>
                )}
                
                {showSuccessMessage && (
                  <div className="mt-3 p-3 bg-white/20 rounded-lg">
                    <p className="text-sm">Welcome aboard! Check your email for confirmation.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Trust This Newsletter?</h3>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <Shield className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Verified author with industry expertise</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Fact-checked by editorial team</span>
                </div>
                <div className="flex items-center text-sm">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Consistently high engagement rates</span>
                </div>
                <div className="flex items-center text-sm">
                  <Globe className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Trusted by 125K+ subscribers</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-3 text-left text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center">
                    <Bookmark className="h-4 w-4 mr-3" />
                    <span>Save for Later</span>
                  </div>
                  <ArrowLeft className="h-4 w-4 rotate-180" />
                </button>
                
                <button className="w-full flex items-center justify-between p-3 text-left text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center">
                    <Share2 className="h-4 w-4 mr-3" />
                    <span>Share Article</span>
                  </div>
                  <ArrowLeft className="h-4 w-4 rotate-180" />
                </button>
                
                <button className="w-full flex items-center justify-between p-3 text-left text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center">
                    <Download className="h-4 w-4 mr-3" />
                    <span>Download PDF</span>
                  </div>
                  <ArrowLeft className="h-4 w-4 rotate-180" />
                </button>
                
                <button className="w-full flex items-center justify-between p-3 text-left text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center">
                    <MessageCircle className="h-4 w-4 mr-3" />
                    <span>Join Discussion</span>
                  </div>
                  <ArrowLeft className="h-4 w-4 rotate-180" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="mt-12 bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Discussion ({newsletter.comments})
            </h2>
            <button className="px-4 py-2 bg-sky-600 text-white font-medium rounded-lg hover:bg-sky-700 transition-colors">
              Join Conversation
            </button>
          </div>
          
          {/* Comment Form */}
          <div className="mb-8 p-6 bg-gray-50 rounded-xl">
            <div className="flex items-start space-x-4">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                alt="Your avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <textarea
                  placeholder="Share your thoughts about this newsletter..."
                  className="w-full p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  rows="3"
                />
                <div className="mt-3 flex justify-between items-center">
                  <div className="flex space-x-2">
                    <button className="text-sm text-gray-600 hover:text-sky-600">
                      Add emoji
                    </button>
                    <button className="text-sm text-gray-600 hover:text-sky-600">
                      Attach image
                    </button>
                  </div>
                  <button className="px-6 py-2 bg-sky-600 text-white font-medium rounded-lg hover:bg-sky-700 transition-colors">
                    Post Comment
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sample Comments */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                alt="Commenter"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-semibold text-gray-900">Alex Thompson</h4>
                  <span className="text-sm text-gray-500">2 hours ago</span>
                </div>
                <p className="text-gray-700 mb-2">
                  Excellent analysis of the current AI landscape! The section on healthcare applications was particularly insightful. I'm curious about the regulatory challenges mentioned.
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <button className="flex items-center text-gray-600 hover:text-red-600 transition-colors">
                    <Heart className="h-4 w-4 mr-1" />
                    <span>12</span>
                  </button>
                  <button className="text-gray-600 hover:text-sky-600 transition-colors">
                    Reply
                  </button>
                  <button className="text-gray-600 hover:text-sky-600 transition-colors">
                    Share
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                alt="Commenter"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-semibold text-gray-900">Maria Rodriguez</h4>
                  <span className="text-sm text-gray-500">4 hours ago</span>
                </div>
                <p className="text-gray-700 mb-2">
                  As someone working in the AI field, I appreciate how well-researched this article is. The statistics on energy efficiency improvements are impressive. Looking forward to the next issue!
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <button className="flex items-center text-gray-600 hover:text-red-600 transition-colors">
                    <Heart className="h-4 w-4 mr-1" />
                    <span>8</span>
                  </button>
                  <button className="text-gray-600 hover:text-sky-600 transition-colors">
                    Reply
                  </button>
                  <button className="text-gray-600 hover:text-sky-600 transition-colors">
                    Share
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                alt="Commenter"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-semibold text-gray-900">David Chen</h4>
                  <span className="text-sm text-gray-500">6 hours ago</span>
                </div>
                <p className="text-gray-700 mb-2">
                  Great breakdown of the ethical considerations. This is exactly the kind of balanced perspective we need in AI discussions. The job displacement section was particularly thought-provoking.
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <button className="flex items-center text-gray-600 hover:text-red-600 transition-colors">
                    <Heart className="h-4 w-4 mr-1" />
                    <span>15</span>
                  </button>
                  <button className="text-gray-600 hover:text-sky-600 transition-colors">
                    Reply
                  </button>
                  <button className="text-gray-600 hover:text-sky-600 transition-colors">
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Load More Comments */}
          <div className="mt-8 text-center">
            <button className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
              Load More Comments
            </button>
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-12 bg-gradient-to-r from-sky-500 to-sky-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Love This Content?
          </h2>
          <p className="text-xl text-sky-100 mb-6 max-w-2xl mx-auto">
            Join thousands of readers who get the latest insights delivered straight to their inbox every week.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white w-full sm:w-auto"
            />
            <button className="px-8 py-3 bg-white text-sky-600 font-semibold rounded-lg hover:bg-sky-50 transition-colors whitespace-nowrap w-full sm:w-auto">
              Subscribe Free
            </button>
          </div>
          <p className="text-sm text-sky-200 mt-4">
            No spam, unsubscribe at any time. Read our privacy policy.
          </p>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-3 bg-sky-600 text-white rounded-full shadow-lg hover:bg-sky-700 transition-colors"
        >
          <ChevronLeft className="h-6 w-6 rotate-90" />
        </button>
      </div>
    </div>
  );
};

export default NewsletterDetailsPage;