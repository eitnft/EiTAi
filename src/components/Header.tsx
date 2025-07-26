import React from 'react';
import { VideoCameraIcon, SparklesIcon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  return (
    <header className="bg-black/20 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <VideoCameraIcon className="h-8 w-8 text-purple-400" />
              <SparklesIcon className="h-4 w-4 text-yellow-400 absolute -top-1 -right-1" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">EiTAi</h1>
              <p className="text-sm text-gray-300">Text to Video Generator</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Generate
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Gallery
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Pricing
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;