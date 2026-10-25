// src/components/Header.jsx
import { useState } from "react";
import logo from "../assets/logo3.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full fixed top-0 z-50">

      {/* Main navigation section */}
      <div className="w-full bg-[#09100d] py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex justify-between items-center">
              <img src={logo} alt="Logo" className="h-8" />
              <h2 className="text-xl font-bold text-[#efefef] ml-2">TodayPrediction365</h2>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-[#efefef] hover:text-[#fea92a] transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-[#efefef] hover:text-[#fea92a] transition-colors"
            >
              Pricing
            </button>
            <a
              className="bg-[#18ffc8] text-[#09100d] px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors"
              href="https://app.thepunterhub.com/register"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-[#efefef]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#162821] mt-2 py-4">
            <div className="container mx-auto px-4 flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection("features")}
                className="text-[#efefef] hover:text-[#fea92a] py-2 text-left transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-[#efefef] hover:text-[#fea92a] py-2 text-left transition-colors"
              >
                Pricing
              </button>
              <a
                className="bg-[#18ffc8] text-[#09100d] px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors mt-2 text-center"
                href="https://app.thepunterhub.com/register"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
