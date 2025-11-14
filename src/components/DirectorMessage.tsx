import { Quote } from "lucide-react";

const DirectorMessage = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 md:py-20">
      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3d] mb-10 md:mb-12">
          WHAT <span className="text-[#fd5d14]">DIRECTOR</span> SAYS!!!
        </h2>

        {/* Message Box */}
        <div className="relative max-w-4xl mx-auto text-center text-gray-700 
                        text-lg md:text-xl leading-relaxed px-4 md:px-10">

          {/* Left Quote — responsive */}
          <Quote className="
            text-[#fd5d14] w-8 h-8 md:w-12 md:h-12 
            absolute -left-2 md:-left-12 
            -top-4 md:-top-3
          " />

          <p className="px-2 md:px-6">
            My goal is to be a successful entrepreneur in providing all types of
            architectural, Structural and valuation services while fulfilling our
            customer’s needs, consistently produce and manage developments of lasting
            value to the community.
          </p>

          {/* Right Quote — responsive */}
          <Quote className="
            text-[#fd5d14] w-8 h-8 md:w-12 md:h-12 
            absolute -right-2 md:-right-12 
            -bottom-4 md:-bottom-3 
            rotate-180
          " />

        </div>
      </div>
    </section>
  );
};

export default DirectorMessage;
