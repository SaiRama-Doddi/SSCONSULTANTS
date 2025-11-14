import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="w-full bg-white hidden md:block">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-300 px-6">

        {/* -------- OFFICE -------- */}
        <div className="flex items-start gap-4 py-6 md:pr-8">
          <MapPin className="text-[#fd5d14] w-10 h-10" />
          <div>
            <h3 className="text-lg font-bold text-[#091c3e] mb-1">OUR OFFICE</h3>
            <p className="text-gray-600 leading-snug">
              Sai Satya Heights, JNTUK, Nagamallithota Junction,<br />
              Kakinada, Andhra Pradesh 533003
            </p>
          </div>
        </div>

        {/* -------- EMAIL -------- */}
        <div className="flex items-start gap-4 py-6 md:px-8">
          <Mail className="text-[#fd5d14] w-10 h-10" />
          <div>
            <h3 className="text-lg font-bold text-[#091c3e] mb-1">EMAIL US</h3>
            <p className="text-gray-600">ssconsultantskkd@gmail.com</p>
          </div>
        </div>

        {/* -------- CALL US -------- */}
        <div className="flex items-start gap-4 py-6 md:pl-8">
          <Phone className="text-[#fd5d14] w-10 h-10" />
          <div>
            <h3 className="text-lg font-bold text-[#091c3e] mb-1">CALL US</h3>
            <p className="text-gray-600">
              +91 9290937993 &nbsp; | &nbsp; +91 8374847385 <br />
              +91 7730037993
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
