import { useState } from "react";
import { Building, FileText, Wrench, ClipboardCheck } from "lucide-react";

interface Service {
  id: string;
  title: string;
  category: string;
  icon: React.ReactNode;
  image: string;
}

function Services() {
  const allServices: Service[] = [
    {
      id: "architectural-design",
      title: "ARCHITECTURAL DESIGN",
      category: "Architectural Design",
      icon: <Building className="w-8 h-8" />,
      image:
        "https://res.cloudinary.com/dtxi8vdkq/image/upload/v1763102306/build13_sstqxe.jpg",
    },
    {
      id: "architectural-design2",
      title: "INTERIOR DESIGN",
      category: "Architectural Design",
      icon: <Building className="w-8 h-8" />,
      image:
        "https://res.cloudinary.com/dtxi8vdkq/image/upload/v1763107221/INTERIOR_syxhje.jpg",
    },
    {
      id: "architectural-design3",
      title: "BUILDING PLANS",
      category: "Architectural Design",
      icon: <Building className="w-8 h-8" />,
      image:
        "https://res.cloudinary.com/dtxi8vdkq/image/upload/v1763107297/PLANS_gxuw8s.jpg",
    },
    {
      id: "architectural-design4",
      title: "TEMPLE ARCHITECTURAL PLANS",
      category: "Architectural Design",
      icon: <Building className="w-8 h-8" />,
      image:
        "https://res.cloudinary.com/dtxi8vdkq/image/upload/v1763107351/TEMPLES_lmqvqh.png",
    },
    {
      id: "statutory-designs",
      title: "MUNICIPAL BUILDING PLANS & APPROVALS",
      category: "Statutory Designs",
      icon: <FileText className="w-8 h-8" />,
      image:
        "https://res.cloudinary.com/dtxi8vdkq/image/upload/v1763107577/MUNICIPAL_aalkqt.jpg",
    },
    {
      id: "statutory-designs2",
      title: "INDUSTRIAL BUILDING APPROVALS",
      category: "Statutory Designs",
      icon: <FileText className="w-8 h-8" />,
      image:
        "https://res.cloudinary.com/dtxi8vdkq/image/upload/v1763107588/MUNICIPAL2_lgo2o9.jpg",
    },
    {
      id: "statutory-designs3",
      title: "LAYOUT APPROVALS",
      category: "Statutory Designs",
      icon: <FileText className="w-8 h-8" />,
      image:
        "https://res.cloudinary.com/dtxi8vdkq/image/upload/v1763107588/MUNICIPAL3_sscerj.jpg",
    },
    {
      id: "engineering-consultants",
      title: "THIRD PARTY INSPECTIONS FOR QUALITY ASSURANCE",
      category: "Engineering Consultants",
      icon: <Wrench className="w-8 h-8" />,
      image:
        "https://res.cloudinary.com/dtxi8vdkq/image/upload/v1763107736/ENG1_zfyyz7.png",
    },
    {
      id: "engineering-consultants2",
      title: "QUALITY SURVEYING & VALUATION",
      category: "Engineering Consultants",
      icon: <Wrench className="w-8 h-8" />,
      image:
        "https://res.cloudinary.com/dtxi8vdkq/image/upload/v1763107737/ENG2_ngen0x.jpg",
    },
    {
      id: "engineering-consultants3",
      title: "PROJECT MANAGEMENT CONSULTANCY",
      category: "Engineering Consultants",
      icon: <Wrench className="w-8 h-8" />,
      image:
        "https://res.cloudinary.com/dtxi8vdkq/image/upload/v1763107941/ENG3_uos6iv.jpg",
    },
    {
      id: "engineering-consultants4",
      title: "PRE ENGINEERED BUILDING DESIGNS",
      category: "Engineering Consultants",
      icon: <Wrench className="w-8 h-8" />,
      image:
        "https://res.cloudinary.com/dtxi8vdkq/image/upload/v1763107941/ENG4_ra8spb.jpg",
    },
    {
      id: "engineering-consultants5",
      title: "STRUCTURE DESIGNING AND CONSULTANCY",
      category: "Engineering Consultants",
      icon: <Wrench className="w-8 h-8" />,
      image:
        "https://res.cloudinary.com/dtxi8vdkq/image/upload/v1763107942/ENG5_bqmnt1.jpg",
    },
    {
      id: "contracts",
      title: "CONTRACTS & PROJECT MANAGEMENT",
      category: "Contracts",
      icon: <ClipboardCheck className="w-8 h-8" />,
      image:
        "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const categories = [
    
    "Architectural Design",
    "Statutory Designs",
    "Engineering Consultants",
    "Contracts",
  ];

  const [activeFilter, setActiveFilter] = useState("Architectural Design");

  const filteredServices = allServices.filter((s) => s.category === activeFilter);

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
        ></div>

        {/* Content */}
        <div className="relative bg-black/30 z-10 flex flex-col justify-center items-center text-[white] h-full">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg uppercase">
            Services
          </h1>
          <p className="text-md md:text-lg mt-6 drop-shadow-md font-semibold">
            <span className="text-[#fd5d14]">HOME / </span>{" "}
            <span>SERVICES</span>
          </p>
        </div>
      </div>

      {/* ⭐ MAIN CONTENT BELOW */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* PAGE TITLE */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h1>
            <div className="w-24 h-1 bg-[#29387D] mx-auto mb-4"></div>
          </div>

          {/* FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
  {categories.map((cat) => (
    <button
      key={cat}
      onClick={() => setActiveFilter(cat)}
      className={`px-8 py-3 rounded-full border text-base md:text-lg font-semibold transition-all
        ${
          activeFilter === cat
            ? "bg-[#29387D] text-white border-[#29387D] shadow-lg scale-105"
            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
        }
      `}
    >
      {cat}
    </button>
  ))}
</div>


          {/* SERVICE CARDS LIKE YOUR SCREENSHOT */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="relative bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300"
              >
                {/* IMAGE */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover rounded-t-lg"
                />

                {/* TITLE BOX */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 bg-white shadow-lg p-6 mx-6 rounded-lg">
                  <h2 className="text-lg font-bold text-gray-900 text-center">
                    {service.title}
                  </h2>
                </div>

                <div className="h-12"></div>
              </div>
            ))}
          </div>

          {/* CTA SECTION */}
          <div className="mt-24 bg-[#29387D] rounded-xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Our team of experts is ready to bring your vision to life.
            </p>
            <button className="bg-white text-[#29387D] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
