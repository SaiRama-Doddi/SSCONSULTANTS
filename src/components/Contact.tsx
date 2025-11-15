import { useState } from 'react';
import {  Send } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-0">

      
      {/* ⭐ TOP FULL-WIDTH BANNER IMAGE */}
  <div className="relative w-full h-72 md:h-96">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage:
        "url('https://res.cloudinary.com/dtxi8vdkq/image/upload/v1763100477/about_yqmwqk.jpg')",
    }}
  >
  </div>

  {/* Light Gray Overlay with Backdrop Effect */}
{/* <div className="absolute inset-0 bg-black/30"></div> */}




  {/* Content */}
  <div className="relative bg-black/30 z-10 flex flex-col justify-center items-center text-[white] h-full">
    <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg uppercase">
      Contact
    </h1>
    <p className="text-md md:text-lg mt-6 drop-shadow-md font-semibold">
       <span className="text-[#fd5d14]">HOME /  </span>  <span>CONTACT</span>
    </p>
  </div>
</div>



      {/* ⭐ MAIN CONTENT BELOW */}      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 mt-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <div className="w-34 h-1 bg-[#29387D] mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get in touch with us to discuss your project requirements and discover how we can help
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <img
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Contact Us"
              className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
            />

         <div className="w-full h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-lg">
         
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.8091355106026!2d82.23815867492509!3d16.983936183836057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a38297a9c61c58d%3A0xcea76c83c907e0e3!2sSRI%20SATYASAI%20SIDDHARTHA%20RESTAURANT!5e0!3m2!1sen!2sin!4v1763220887491!5m2!1sen!2sin"
   className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29387D] focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29387D] focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29387D] focus:border-transparent outline-none transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29387D] focus:border-transparent outline-none transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29387D] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#29387D] text-white py-3 cursor-pointer px-6 rounded-lg font-semibold hover:bg-[#2c419d] transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

       
      </div>
    </div>
  );
}

export default Contact;
