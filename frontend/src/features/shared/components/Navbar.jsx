import React from "react";
import { Link } from "react-router";

const Navbar = ({ showLaunchApp = true }) => {
  return (
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center bg-slate-50">
      {/* Logo */}
      <Link
        to="/"
        className="text-2xl font-bold text-indigo-600 tracking-tighter hover:opacity-80 transition-opacity"
      >
        AI CHAT<span className="text-slate-800"> BOT</span>
      </Link>

      {/* Center Links */}
      {showLaunchApp && (
        <div className="hidden md:flex space-x-8">
          <a
            href="#features"
            className="text-slate-600 hover:text-indigo-600 transition-colors font-medium"
          >
            Features
          </a>
          <a
            href="#tech-stack"
            className="text-slate-600 hover:text-indigo-600 transition-colors font-medium"
          >
            Tech Stack
          </a>
        </div>
      )}

      {/* Redirect Button */}
      {showLaunchApp && (
        <Link
          to="/chat"
          className="bg-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
        >
          Launch App
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
