import { Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "services", label: "SERVICES" },
    { id: "gallery", label: "GALLERY" },
    { id: "contact", label: "CONTACT" },
  ];

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-[#29387D] shadow-md sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* ------- BIGGER LOGO -------- */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setActiveSection("home")}
          >
            <img
              src="/logo2.jpg"
              alt="SSconsultants Logo"
              className="w-40 md:w-60 scale-174 h-auto object-contain"
              style={{ transformOrigin: "left center" }}
            />
          </div>

          {/* -------- DESKTOP NAV ---------- */}
          <nav className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-lg tracking-wide cursor-pointer font-semibold transition-colors duration-200 ${
                  activeSection === item.id
                    ? "text-[#fd5d14] border-b-2 border-[#fd5d14]"
                    : "text-white hover:text-[#fd5d14]"
                } pb-1`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* -------- MOBILE MENU TOGGLE -------- */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* -------- MOBILE NAV -------- */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#29387D] border-t">
          <nav className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-lg font-semibold ${
                  activeSection === item.id
                    ? "text-[#fd5d14]"
                    : "text-white hover:bg-[#fd5d14]"
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
