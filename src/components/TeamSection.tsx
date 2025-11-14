

interface TeamMember {
  name: string;
  role: string;
  degree: string;
  image: string;
}

const team: TeamMember[] = [
  {
    name: "GORASA SREENIVASACHARYALU",
    role: "STHAPATHI, PRINCIPAL TEMPLE ARCHITECT",
    degree: "D.T.S.A, B.A.",
    image: "https://res.cloudinary.com/dtxi8vdkq/image/upload/v1763101737/team2_zjugsp.jpg",
  },
  {
    name: "Er. G.DIVYA RATNAMALA",
    role: "MANAGER & HR",
    degree: "B.Tech (CIVIL), MHRM.",
    image: "https://res.cloudinary.com/dtxi8vdkq/image/upload/v1763101737/team3_sweyhm.jpg",
  },
  {
    name: "Er. M. RAMA VENKATESHWARA RAO",
    role: "PEB STRUCTURES, Senior Design Engineer",
    degree: "B.Tech, M.E (Structures)",
    image: "https://res.cloudinary.com/dtxi8vdkq/image/upload/v1763101737/team4_psmbly.jpg",
  },
  {
    name: "Dr. P. Jyotsna Devi",
    role: "Senior Structural Consultant",
    degree: "B.E, M.E (Structures), Ph.D.",
    image: "https://res.cloudinary.com/dtxi8vdkq/image/upload/v1763101736/team5_mnuhr0.jpg",
  },
];

export default function TeamSection() {
  return (
    <div className="py-20">
      <h2 className="text-center text-5xl font-bold mb-4">
        OUR <span className="text-[#fd5d14]">TEAM</span>
      </h2>

      <div className="max-w-8xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-80 object-cover"
            />

            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 leading-tight">
                {member.name}
              </h3>

              <p className="text-gray-600 font-medium mt-2">{member.degree}</p>

              <p className="text-gray-700 mt-3 leading-relaxed">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
