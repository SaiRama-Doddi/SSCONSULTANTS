import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
  setActiveSection: (section: string) => void;
}

function Footer({ setActiveSection }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
  <img
  src="/logo.jpg"
  alt="SSconsultants Logo"
   className="w-32 sm:w-30 md:w-38 h-auto object-contain -my-2"
  style={{ transformOrigin: "center" }}
/>

            </div>
            <p className="text-gray-400 text-sm mb-4">
              Leading consultancy firm providing innovative solutions in architecture, engineering, and project management.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['home', 'about', 'services', 'gallery', 'contact'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => setActiveSection(section)}
                    className="text-gray-400 hover:text-emerald-400 transition-colors capitalize text-sm"
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Architectural Design</li>
              <li>Statutory Designs</li>
              <li>Engineering Consultants</li>
              <li>Contracts Management</li>
              <li>Project Planning</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                <span>Sai Satya Heights, JNTUK, Nagamallithota junction, Kakinada, Andhra Pradesh 533003</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 shrink-0" />
                <div className='flex flex-col'>
                  <span>+91 9290937993</span> 
                  <span>  +91 8374847385 </span>
                  <span> +91 7730037993</span>
                </div>
             
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 shrink-0" />
                <span>ssconsultantskkd@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} SSconsultants. All rights reserved. | Designed with excellence
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
