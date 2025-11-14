import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import DirectorMessage from './DirectorMessage';

interface Slide {
  image: string;
  title: string;
  description: string;
}
interface HomeProps {
  setActiveSection: (section: string) => void;
}
function Home({setActiveSection}: HomeProps) {
  const slides: Slide[] = [
    {
      image: 'https://res.cloudinary.com/dtxi8vdkq/image/upload/v1763102296/build3_p26f8e.jpg',
      title: 'Innovative Architectural Design',
      description: 'Creating spaces that inspire and transform your vision into reality',
    },
    {
      image: 'https://res.cloudinary.com/dtxi8vdkq/image/upload/v1763102297/build4_zcawhm.jpg',
      title: 'Expert Engineering Solutions',
      description: 'Delivering precision and excellence in every project we undertake',
    },
    {
      image: 'https://res.cloudinary.com/dtxi8vdkq/image/upload/v1763102306/build17_zd2wbm.jpg',
      title: 'Comprehensive Consultancy Services',
      description: 'Your trusted partner for statutory designs and contract management',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative">
      <div className="relative h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-4xl">
                <h2 className="text-5xl font-bold mb-4 animate-fade-in">{slide.title}</h2>
                <p className="text-xl mb-8 animate-fade-in">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-3 rounded-full transition-all duration-200 shadow-lg"
        >
          <ChevronLeft className="w-6 h-6 text-gray-900" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-3 rounded-full transition-all duration-200 shadow-lg"
        >
          <ChevronRight className="w-6 h-6 text-gray-900" />
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>



      
{/* -------- ABOUT SECTION -------- */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

    {/* LEFT TEXT */}
    <div>
      <h2 className="text-4xl font-bold text-[#29387D] mb-6">
        About S.S. CONSULTANTS
      </h2>

      <p className="text-gray-700 leading-relaxed mb-5">
        Established in 2012, SS Consultants is one of the leading building
        planners, structural engineering experts, and temple architects.
      </p>

      <p className="text-gray-700 leading-relaxed mb-5">
        We specialize in structural designs for residential buildings, 
        apartments, commercial buildings, institutional buildings, hospitals, 
        industrial buildings, resorts, steel structures (PEB), land survey,
        estimations, architectural services as per Vastu, and temple 
        architecture as per AGAMA Shastra.
      </p>

      <p className="text-gray-700 leading-relaxed mb-5">
        Our team proudly delivered the structural design for the new chariot
        (Radham) at Lakshmi Narasimha Swami Temple Devasthanam, Antharvedi —
        an achievement that brings immense satisfaction and honor.
      </p>

      <p className="text-gray-700 leading-relaxed mb-8">
        We are dedicated to offering exceptional expertise with unwavering 
        commitment and a universal creative approach.
      </p>

     <button
  onClick={() => setActiveSection("services")}
  className="bg-[#fd5d14] hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-sm transition cursor-pointer"
>
  KNOW MORE
</button>

    </div>

    {/* RIGHT IMAGE */}
    <div>
      <img
        src="https://res.cloudinary.com/dtxi8vdkq/image/upload/v1763100178/temple_sugtgl.jpg"
        alt="SS Consultants"
        className="w-full h-[520px] object-cover rounded-lg shadow-xl"
      />
    </div>

  </div>
</section>


<DirectorMessage/>



{/* -------- BOTTOM STATS SECTION -------- */}
<section className="py-16">
  <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-10">

    {/* CARD 1 */}
    <div className="bg-white p-10 rounded-lg shadow-md text-center border border-gray-100 hover:shadow-lg transition">
      <div className="text-4xl font-bold text-[#29387D] mb-4">25+</div>
      <h3 className="text-xl font-semibold mb-2">Years Experience</h3>
      <p className="text-gray-600">
        Delivering excellence in consultancy services
      </p>
    </div>

    {/* CARD 2 */}
    <div className="bg-white p-10 rounded-lg shadow-md text-center border border-gray-100 hover:shadow-lg transition">
      <div className="text-4xl font-bold text-[#29387D] mb-4">500+</div>
      <h3 className="text-xl font-semibold mb-2">Projects Completed</h3>
      <p className="text-gray-600">
        Successfully delivered across diverse sectors
      </p>
    </div>

    {/* CARD 3 */}
    <div className="bg-white p-10 rounded-lg shadow-md text-center border border-gray-100 hover:shadow-lg transition">
      <div className="text-4xl font-bold text-[#29387D] mb-4">100%</div>
      <h3 className="text-xl font-semibold mb-2">Client Satisfaction</h3>
      <p className="text-gray-600">
        Committed to exceeding expectations
      </p>
    </div>

  </div>
</section>


    </div>
  );
}

export default Home;
