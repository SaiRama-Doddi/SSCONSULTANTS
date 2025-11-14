import {  Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-[#29387D] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-8">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveSection('home')}>
<img
  src="/logo.jpg"
  alt="SSconsultants Logo"
   className="w-32 sm:w-30 md:w-38 h-auto object-contain -my-2"
  style={{ transformOrigin: "center" }}
/>


           
          </div>    

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-md cursor-pointer font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-[#fd5d14] border-b-2 border-[#fd5d14]'
                    : 'text-white hover:text-[#fd5d14]'
                } pb-1`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#29387D] border-t">
          <nav className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block cursor-pointer w-full text-left px-4 py-2 rounded-lg text-md font-medium ${
                  activeSection === item.id
                    ? 'bg-[#29387D] text-[#fd5d14]'
                    : 'text-white hover:bg-[#fd5d14]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
