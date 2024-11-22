import React from 'react';
import { Settings, HelpCircle, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-white border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Navigation Links */}
          <div className="flex justify-center space-x-12">
            <Link to="/premium" className="flex items-center space-x-2 text-yellow-600 hover:text-yellow-700">
              <Crown className="w-5 h-5" />
              <span className="font-semibold">Premium</span>
            </Link>
            <Link to="/settings" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <Settings className="w-5 h-5" />
              <span className="font-semibold">Settings</span>
            </Link>
            <Link to="/support" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <HelpCircle className="w-5 h-5" />
              <span className="font-semibold">Support</span>
            </Link>
          </div>

          {/* Copyright and Links */}
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              Copyright © 2024 w1wang Inc. All rights reserved.
            </p>
            <div className="flex justify-center space-x-4 mt-2">
              <Link to="/privacy" className="text-sm text-gray-500 hover:text-gray-700">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-500 hover:text-gray-700">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}