import { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
}

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const images: GalleryImage[] = [
    {
      id: 1,
      url: 'https://res.cloudinary.com/dtxi8vdkq/image/upload/v1763102304/build10_f3xmfp.jpg',
      title: 'Modern Office Complex',
      category: 'architectural',
    },
    {
      id: 2,
      url: 'https://res.cloudinary.com/dtxi8vdkq/image/upload/v1763102297/build8_hbymkf.jpg',
      title: 'Residential Villa',
      category: 'residential',
    },
    {
      id: 3,
      url: 'https://res.cloudinary.com/dtxi8vdkq/image/upload/v1763102315/build22_hd5bnj.jpg',
      title: 'Construction Site',
      category: 'engineering',
    },
    {
      id: 4,
      url: 'https://res.cloudinary.com/dtxi8vdkq/image/upload/v1763102314/build19_fyddyh.jpg',
      title: 'Glass Facade Building',
      category: 'architectural',
    },
    {
      id: 5,
      url: 'https://res.cloudinary.com/dtxi8vdkq/image/upload/v1763102306/build18_jwkgor.jpg',
      title: 'Luxury Apartment',
      category: 'residential',
    },
    {
      id: 6,
      url: 'https://res.cloudinary.com/dtxi8vdkq/image/upload/v1763102305/build11_fsx1xu.jpg',
      title: 'Infrastructure Project',
      category: 'engineering',
    },
    {
      id: 7,
      url: 'https://res.cloudinary.com/dtxi8vdkq/image/upload/v1763102301/build9_xeoglb.jpg',
      title: 'Corporate Headquarters',
      category: 'architectural',
    },
    {
      id: 8,
      url: 'https://res.cloudinary.com/dtxi8vdkq/image/upload/v1763102296/build3_p26f8e.jpg',
      title: 'Modern Home Design',
      category: 'residential',
    },
    {
      id: 9,
      url: 'https://res.cloudinary.com/dtxi8vdkq/image/upload/v1763102297/build4_zcawhm.jpg',
      title: 'Structural Engineering',
      category: 'engineering',
    },
  ];



  return (
    <div className="pt-0 mb-10">


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
      Projects
    </h1>
    <p className="text-md md:text-lg mt-6 drop-shadow-md font-semibold">
       <span className="text-[#fd5d14]">HOME /  </span>  <span>PROJECTS</span>
    </p>
  </div>
</div>

     {/* ⭐ MAIN CONTENT BELOW */}
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="text-center mb-14 mt-14"> 
        <h1 className="text-5xl font-bold text-gray-900 mb-4">SOM OF OUR  <span className='text-[#fd5d14]'>POPULAR</span> <br/> DREAM PROJECTS</h1> 
        <div className="w-44 h-1 bg-[#29387D] mx-auto mb-4"></div>
        </div>

  {/* GALLERY GRID */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
    {images.map((image) => (
      <div
        key={image.id}
        className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
        onClick={() => setSelectedImage(image)}
      >
        <img
          src={image.url}
          alt={image.title}
          className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />

        {/* CLEAN HOVER OVERLAY (NO TEXT) */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
      </div>
    ))}
  </div>

  {/* IMAGE POPUP MODAL */}
  {selectedImage && (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      onClick={() => setSelectedImage(null)}
    >
      <button
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
        onClick={() => setSelectedImage(null)}
      >
        <X className="w-8 h-8" />
      </button>

      <div className="max-w-5xl w-full">
        <img
          src={selectedImage.url}
          alt={selectedImage.title}
          className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
        />
      </div>
    </div>
  )}
</div>

    </div>
  );
}

export default Gallery;
