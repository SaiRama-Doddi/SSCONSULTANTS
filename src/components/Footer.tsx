import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
  setActiveSection: (section: string) => void;
}

function Footer({ setActiveSection }: FooterProps) {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-300 pt-20 pb-10">
      
      {/* TOP WAVE OR SEPARATOR */}
      <div className="w-full h-2 bg-gradient-to-r from-blue-600 to-orange-500 mb-10 opacity-80"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 md:grid-cols-2 gap-14">
        
        {/* LOGO + ABOUT */}
        <div className="space-y-4">
          <img
            src="/logo2.jpg"
            alt="SSconsultants Logo"
            className="w-58 h-auto object-contain drop-shadow-lg"
          />

          <p className="text-gray-400 text-sm leading-relaxed">
            SS Consultants — delivering excellence in architecture, engineering design, project management, and innovative infrastructure solutions.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex space-x-4 pt-3">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-orange-500 group transition duration-300"
              >
                <Icon className="w-5 h-5 text-gray-300 group-hover:text-black" />
              </a>
            ))}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6 relative">
            Quick Links
            <span className="absolute -bottom-2 left-0 w-12 h-[3px] bg-emerald-500 rounded-full"></span>
          </h3>

          <ul className="space-y-3 text-sm">
            {['home', 'about', 'services', 'gallery', 'contact'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => setActiveSection(section)}
                  className="hover:text-orange-400 transition-colors capitalize"
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6 relative">
            Our Services
            <span className="absolute -bottom-2 left-0 w-12 h-[3px] bg-orange-500 rounded-full"></span>
          </h3>

          <ul className="space-y-3 text-sm text-gray-400">
            <li>Architectural Design</li>
            <li>Statutory Designs</li>
            <li>Engineering Consultancy</li>
            <li>Contracts & Project Management</li>
            <li>Urban & Structural Planning</li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6 relative">
            Contact Info
            <span className="absolute -bottom-2 left-0 w-12 h-[3px] bg-cyan-500 rounded-full"></span>
          </h3>

          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start space-x-3">
              <MapPin className="w-12 h-8 text-orange-500 mt-1" />
              <span>
                Sai Satya Heights, JNTUK, Nagamallithota Junction,  
                Kakinada, Andhra Pradesh 533003
              </span>
            </li>

            <li className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-orange-500 mt-1" />
              <div className="flex flex-col">
                <span>+91 9290937993</span>
                <span>+91 8374847385</span>
                <span>+91 7730037993</span>
              </div>
            </li>

            <li className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-orange-500 mt-1" />
              <span>ssconsultantskkd@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-16 border-t border-gray-800 pt-6 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} S.S CONSULATANTS — Designed with Precision & Excellence
        </p>
      </div>
    </footer>
  );
}

export default Footer;
