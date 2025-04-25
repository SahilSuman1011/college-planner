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
  title = "Plan Your College Journey With Confidence",
  subtitle = "Expert guidance to help you navigate the college admission process and secure your future",
  ctaText = "Get Started",
  onCtaClick,
  backgroundImage = "https://assets.thehansindia.com/h-upload/2022/10/26/1318061-university.webp",
}: HeroSectionProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      navigate("/courses");
    }
  };

  return (
    <div className="relative w-full bg-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 bg-white backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-2 py-2">
          <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="../logo2.png" 
            alt="College Planner Logo" 
            className="h-14 mb-0 mt-0" 
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="/" className="text-gray-800 hover:text-primary font-bold">
            Home
          </a>
          <a href="/#video-gallery" className="text-gray-800 hover:text-primary font-bold">
            Gallery
          </a>
          <a href="/#blog" className="text-gray-800 hover:text-primary font-bold">
            Blog
          </a>
          <a href="/#footer" className="text-gray-800 hover:text-primary font-bold">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-100 shadow-lg z-20 py-4 px-6">
          <div className="flex flex-col space-y-4">
            <a
          href="/"
          className="text-gray-800 hover:text-primary font-medium"
            >
          Home
            </a>
            <a
          href="/#video-gallery"
          className="text-gray-800 hover:text-primary font-medium"
            >
          Gallery
            </a>
            <a
          href="/#blog"
          className="text-gray-800 hover:text-primary font-medium"
            >
          Blog
            </a>
            <a
          href="/#footer"
          className="text-gray-800 hover:text-primary font-medium"
            >
          Contact
            </a>
          </div>
        </div>
          )}
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-white/90 mb-8">{subtitle}</p>
          <Button
            onClick={handleCtaClick}
            size="lg"
            className="bg-blue-950 hover:bg-primary/90 text-white font-bold px-8 py-3 rounded-md"
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
