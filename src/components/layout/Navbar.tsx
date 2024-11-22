import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, BookOpen, MessageCircle, Trophy, User, ShoppingBag, Gift } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { icon: BookOpen, text: "Learn", path: "/" },
    { icon: MessageCircle, text: "Chat", path: "/chat" },
    { icon: Trophy, text: "Missions & Quests", path: "/missions" },
    { icon: ShoppingBag, text: "Avatar Shop", path: "/shop" },
    { icon: User, text: "Profile", path: "/profile" },
    { icon: Gift, text: "Events", path: "/events" }
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-sm fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="https://i.ibb.co/P6KkR8b/mang.jpg" 
                alt="Logo" 
                className="h-8 w-8 object-cover rounded"
              />
              <span className="text-xl font-bold text-purple-600">Learn Korean with BTS</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <NavLink key={item.text} icon={item.icon} text={item.text} path={item.path} />
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <MobileNavLink key={item.text} icon={item.icon} text={item.text} path={item.path} />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ icon: Icon, text, path }: { icon: any; text: string; path: string }) {
  return (
    <Link
      to={path}
      className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition px-3 py-2"
    >
      <Icon className="h-5 w-5" />
      <span>{text}</span>
    </Link>
  );
}

function MobileNavLink({ icon: Icon, text, path }: { icon: any; text: string; path: string }) {
  return (
    <Link
      to={path}
      className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-600 hover:text-purple-600 hover:bg-gray-100 transition"
    >
      <Icon className="h-5 w-5" />
      <span>{text}</span>
    </Link>
  );
}