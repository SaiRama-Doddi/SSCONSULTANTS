import { Quote } from "lucide-react";

const DirectorMessage = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 md:py-20">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3d] mb-10 md:mb-12">
          WHAT <span className="text-[#fd5d14]">DIRECTOR</span> SAYS!!!
        </h2>

        {/* EXACT INLINE QUOTE + CONTENT */}
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-8xl mx-auto text-center">

          {/* Start quote in the same line */}
          <span className="align-middle inline-block">
               <Quote className="text-[#fd5d14] w-7 h-7 md:w-9 md:h-9 inline-block rotate-180" />
          </span>

          {/* The content */}
          <span className="px-2 align-middle">
            My goal is to be a successful entrepreneur in providing all types of architectural,
            structural and valuation services while fulfilling our customer’s needs, consistently
            produce and manage developments of lasting value to the community.
          </span>

          {/* End quote in the last line */}
          <span className="align-middle inline-block">
      
               <Quote className="text-[#fd5d14] w-7 h-7 md:w-9 md:h-9 inline-block" />
          </span>

        </p>

      </div>
    </section>
  );
};

export default DirectorMessage;
