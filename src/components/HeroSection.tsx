import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  backgroundImage?: string;
}

const HeroSection = ({
  title = "Find The Best Colleges in India",
  subtitle = "Expert guidance to help you navigate the college admission process and secure your future",
  ctaText = "Get Started",
  onCtaClick,
}: HeroSectionProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [showPopup, setShowPopup] = useState(false);

  const handleCtaClick = () => {
    setShowPopup(true);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setShowPopup(false);
    
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-xl mx-4 relative">
        <button onClick={handleClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>
        
        <h2 className="text-2xl font-bold mb-6">GET IN TOUCH</h2>
        <p className="text-gray-600 mb-6">Receive tailored solutions, expert advice, and precise estimates</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">Name <span className="text-red-500">*</span></label>
              <input type="text" placeholder="Full Name" className="w-full p-2 border rounded" required />
            </div>
            <div>
              <label className="block mb-1">Email Address <span className="text-red-500">*</span></label>
              <input type="email" placeholder="Email Address" className="w-full p-2 border rounded" required />
            </div>
            <div>
              <label className="block mb-1">Phone Number <span className="text-red-500">*</span></label>
              <input type="tel" placeholder="Phone No." className="w-full p-2 border rounded" required />
            </div>
          
          </div>
          
          <div>
            <label className="block mb-1">Message <span className="text-red-500">*</span></label>
            <textarea placeholder="Message" className="w-full p-2 border rounded h-32" required></textarea>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>100% Confidential</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>We don't Misuse Customer's Data</span>
            </div>
          </div>

          <button type="submit" className="bg-blue-500 text-white px-8 py-2 rounded hover:bg-green-500 ">
            Submit
        </button>
      </form>
    </div>
  </div>
    )}
    <div className="relative w-full h-90% bg-gradient-to-r from-green-50 to-blue-100">
    <div className="relative w-full h-90% bg-gradient-to-r from-green-50 to-blue-100">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 shadow-sm z-50 bg-white">
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex items-center">
        <img 
          src="/logo2.png" 
          alt="College Planner Logo" 
          className="h-12 mb-0 mt-0" 
        />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 gap-x-3 pl-8">
        <a href="/" className="text-gray-800 hover:text-primary font-medium">Home</a>
        <a href="/#courses" className="text-gray-800 hover:text-primary font-medium">Courses</a>
        <a href="/#colleges" className="text-gray-800 hover:text-primary font-medium">Colleges</a>    
          </div>

          {/* Centered Search Bar for both mobile and desktop */}
          <div className="order-3 md:order-none w-full md:w-auto flex-1 mx-2 flex justify-center mt-2 md:mt-0">
        <input
          type="search"
          placeholder="Search colleges..."
          className="w-full md:w-[400px] px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
        />
          </div>

          <div className="hidden md:flex items-center space-x-2">
        <span> <Button className="text-white bg-blue-500 hover:text-white px-2 py-1 rounded transition-colors duration-200 inline-block w-32 text-center">
          Live Application </Button> </span>
        <Button variant="default" className="bg-[#248b45] hover:text-white text-white w-32">
          Get a Callback →
        </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
        <button onClick={toggleMenu} className="text-gray-800 p-2" aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-20 py-4 px-6">
        <div className="flex flex-col space-y-4">
          <a href="/#home" className="text-gray-800 hover:text-primary font-medium">Home</a>
          <a href="/#courses" className="text-gray-800 hover:text-primary font-medium">Courses</a>
          <a href="/#colleges" className="text-gray-800 hover:text-primary font-medium">Colleges</a>         
          <span className="text-white bg-blue-500 hover:text-white px-3 py-2 rounded transition-colors duration-200 text-center">Live Application</span>
          <Button variant="default" className="bg-[#248b45] hover:bg-[#b2cfbb] text-white w-20px">
            Get a Callback →
          </Button>
        </div>
          </div>
        )}
      </div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 pt-32 pb-2">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Small Cards - Shows first on mobile */}
          <div className="md:hidden w-full flex flex-wrap gap-2 mb-8">
        <div className="bg-blue-100 rounded-lg px-4 py-2 flex items-center">
          <span className="font-medium text-sm text-green-700">News!</span>
          <span className="text-blue-600 ml-2 text-sm">Find Your College 🔥</span>
        </div> 
        <div className="bg-blue-100 rounded-lg px-4 py-2 flex items-center">
          <span className="text-blue-600 text-sm">Career Guidance</span>
        </div>
        <div className="bg-blue-100 rounded-lg px-4 py-2 flex items-center">
          <span className="text-blue-600 text-sm">College Updates</span>
        </div>
        <div className="bg-blue-100 rounded-lg px-4 py-2 flex items-center">
          <span className="text-blue-600 text-sm">Mentorship</span>
        </div>
          </div>

          {/* Image section - Shows first on mobile */}
          <div className="md:hidden w-full relative mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-green-200 rounded-[40%_60%_60%_40%/60%_30%_70%_40%] transform rotate-[-5deg]"></div>
        <img 
          src="/girl3bg.png" 
          alt="Student" 
          className="w-[60%] mx-auto h-[180px] object-contain relative z-10"
        />
          </div>

          {/* Content section */}
          <div className="max-w-2xl">
        {/* Small Cards - Shows on desktop */}
        <div className="hidden md:flex flex-wrap gap-2 mb-6">
          <div className="bg-blue-100 rounded-lg px-4 py-2 flex items-center">
            <span className="font-medium text-sm text-green-700">News !</span>
            <span className="text-blue-600 ml-2 text-sm">Find Your Solution 🔥</span>
          </div>
          <div className="bg-blue-100 rounded-lg px-4 py-2 flex items-center">
            <span className="text-blue-600 text-sm">Career Guidance</span>
          </div>
          <div className="bg-blue-100 rounded-lg px-4 py-2 flex items-center">
            <span className="text-blue-600 text-sm">College Updates</span>
          </div>
          <div className="bg-blue-100 rounded-lg px-4 py-2 flex items-center">
            <span className="text-blue-600 text-sm">Mentorship</span>
          </div>
        </div>
        <h1 className="text-5xl font-bold text-[#1e293b] mb-6">{title}</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-xl">{subtitle}</p>
        <div className="flex gap-4 mb-8"> 
          <Button
            onClick={handleCtaClick}
            size="lg"
            className="bg-[#4480cf] hover:text-primary text-white hover:bg-text-primary px-8"
          >
            {ctaText}
          </Button>
            <Button
            variant="outline"
            size="lg"
            className="border-gray-300"
            onClick={() => navigate('/TestimonialsCarousel')}
            >
            Learn More →
            </Button>
        </div>

        
          </div>

          
          
          {/* Image section - Shows only on desktop */}
          <div className="hidden md:block w-full md:w-1/2 relative mt-4 md:mt-0 md:order-2">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-green-200 rounded-[40%_60%_60%_40%/60%_30%_70%_40%] transform rotate-[-5deg]"></div>
        <img 
          src="/girl3bg.png" 
          alt="Student" 
          className="w-[60%] mx-auto md:w-full h-[180px] md:h-full object-contain relative z-10"
        />
          </div>
        </div>
        


      </div>
      </div>
    </div>
    </>
  );
};
export default HeroSection;
