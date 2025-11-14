import { Target, Eye, Award, Users } from "lucide-react";
import TeamSection from "./TeamSection";
import DirectorMessage from "./DirectorMessage";

function About() {
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
      About 
    </h1>
    <p className="text-md md:text-lg mt-6 drop-shadow-md font-semibold">
       <span className="text-[#fd5d14]">HOME /  </span>  <span>ABOUT</span>
    </p>
  </div>
</div>


      {/* ⭐ MAIN CONTENT BELOW */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      <div className=" p-10 md:p-14 max-auto mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

    {/* IMAGE */}
    <div>
      <img
        src="https://res.cloudinary.com/dtxi8vdkq/image/upload/v1763101507/sir_knodfw.jpg"
        alt="About Director"
        className="rounded-2xl shadow-xl w-full h-[600px] object-cover"
      />
    </div>

    {/* TEXT SECTION */}
    <div className="space-y-6">
      <h2 className="text-4xl font-bold text-gray-900 uppercase">
        About the Director
      </h2>

      <p className="text-gray-700 text-lg leading-relaxed font-medium">
        G.V.S. SIVAPRASAD<br />
        B.Tech, M.E (Structures), AMIE, AaRVF<br />
        Consulting Structural Engineer
      </p>

      <p className="text-gray-600 leading-relaxed text-[17px]">
        Er. Gorasa V.S. Siva Prasad completed his Master of Engineering in Civil 
        Engineering, specializing in Structural Engineering & Disaster Management 
        from Andhra University.
      </p>

      <p className="text-gray-600 leading-relaxed text-[17px]">
        He started his career as an Assistant Professor & Design Engineer at 
        GVP School of Engineering and Aditya Engineering College. He has worked 
        as a freelance Structural Engineer for reputed firms, published research 
        articles, and participated in national and international conferences.
      </p>

      <p className="text-gray-600 leading-relaxed text-[17px]">
        He designed the new wooden chariot (Radham) for Sri Lakshmi Narasimha 
        Swamy Devasthanam, Antharvedi, Endowments Department, Kakinada. With 
        10+ years of experience, he has handled numerous challenging Civil 
        Engineering projects.
      </p>

      <p className="text-gray-600 leading-relaxed text-[17px]">
        He has successfully completed 100+ projects and is a Fellow Member of 
        the Association of Consulting Civil Engineers (ACCE-I), an Associate 
        Member of The Institute of Engineers, and a registered valuer with the 
        Assessors & Registration Valuer Foundation.
      </p>
    </div>

  </div>
</div>

<DirectorMessage/>

<TeamSection/>


        {/* CARDS SECTION */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-blue-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
            <Target className="w-12 h-12 text-[#29387D] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-600 text-sm">
              To deliver innovative and sustainable consultancy services that exceed client expectations.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
            <Eye className="w-12 h-12 text-[#29387D] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-600 text-sm">
              To be the leading consultancy firm recognized for excellence and innovation.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
            <Award className="w-12 h-12 text-[#29387D] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Our Values</h3>
            <p className="text-gray-600 text-sm">
              Integrity, excellence, innovation, and commitment to client success.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
            <Users className="w-12 h-12 text-[#29387D] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Our Team</h3>
            <p className="text-gray-600 text-sm">
              Experienced professionals dedicated to delivering high-quality results.
            </p>
          </div>
        </div>

        {/* ISO SECTION */}
    <div className="bg-[#29387D] text-white rounded-xl p-12">
  <div className="grid place-items-center text-center">
    <div className="flex flex-col items-center text-center">
      <h3 className="text-3xl font-bold text-[#fd5d14] mb-2">Government Approved</h3>
      <p className="text-gray-300">Licensed Structural Engineer</p>
    </div>
  </div>
</div>


      </div>
    </div>
  );
}

export default About;
