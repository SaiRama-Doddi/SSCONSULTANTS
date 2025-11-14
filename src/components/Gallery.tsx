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

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'architectural', label: 'Architectural' },
    { id: 'residential', label: 'Residential' },
    { id: 'engineering', label: 'Engineering' },
  ];

  const filteredImages = activeFilter === 'all'
    ? images
    : images.filter(img => img.category === activeFilter);

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
      Gallery
    </h1>
    <p className="text-md md:text-lg mt-6 drop-shadow-md font-semibold">
       <span className="text-[#fd5d14]">HOME /  </span>  <span>GALLERY</span>
    </p>
  </div>
</div>

     {/* ⭐ MAIN CONTENT BELOW */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 mt-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Gallery</h1>
          <div className="w-44 h-1 bg-[#29387D] mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successfully completed projects across various sectors
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all cursor-pointer duration-200 ${
                activeFilter === category.id
                  ? 'bg-[#29387D] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                  <p className="text-gray-300 text-sm capitalize">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

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
              <div className="text-center mt-4">
                <h3 className="text-white text-2xl font-bold">{selectedImage.title}</h3>
                <p className="text-gray-300 capitalize">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallery;
