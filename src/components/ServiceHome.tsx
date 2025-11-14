

const services = [
  {
    title: "ARCHITECTURAL DESIGNING",
    image: "https://res.cloudinary.com/dtxi8vdkq/image/upload/v1763107297/PLANS_gxuw8s.jpg",
  },
  {
    title: "STATUTORY APPROVALS",
    image: "https://res.cloudinary.com/dtxi8vdkq/image/upload/v1763107588/MUNICIPAL2_lgo2o9.jpg",
  },
  {
    title: "ENGINEERING CONSULTANTS",
    image: "https://res.cloudinary.com/dtxi8vdkq/image/upload/v1763107941/ENG3_uos6iv.jpg",
  },
  {
    title: "CONTRACTS",
    image: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

function ServicesHome() {
  return (
    <section className="py-16 bg-[#F5F5F5]">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-5xl font-bold mb-12">
        WE PROVIDE <span className="text-[#FD5D14]">THE BEST</span> <br />
        CONSTRUCTION SERVICES
      </h2>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group border-2 border-transparent hover:border-[#FD5D14] transition-all duration-300 p-2 bg-[url('/dot-pattern.png')] bg-repeat"
          >
            {/* Image with Dark Overlay */}
            <div className="relative overflow-hidden rounded-sm cursor-pointer">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover opacity-80 group-hover:scale-105 transition duration-300"
              />

              {/* Transparent Overlay */}
              <div className="absolute inset-0 bg-black/30"></div>

              {/* Title Box */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white text-black font-bold px-4 py-2 text-sm md:text-base shadow-md">
                  {service.title}
                </span>
              </div>
            </div>

            {/* Orange bottom bar */}
            <div className="h-1 bg-[#FD5D14] w-0 group-hover:w-full transition-all duration-300 mx-auto mt-1"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesHome;
