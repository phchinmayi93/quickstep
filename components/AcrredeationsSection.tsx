"use client";

import {
  FaCertificate,
  FaUniversity,
  FaShieldAlt,
  FaBuilding,
  FaCheckCircle
} from "react-icons/fa";

const accreditations = [
  {
    icon: <FaCertificate />,
    title: "ISO 9001:2008 Certified Institute",
  },
  {
    icon: <FaUniversity />,
    title:
      "Accredited by NABET – Quality Council of India, Government of India",
  },
  {
    icon: <FaShieldAlt />,
    title: "Registered with the Department of Education – Government of Karnataka",
  },
  {
    icon: <FaCertificate />,
    title: "Certificate of Registration of Trade Mark – Government of India",
  },
  {
    icon: <FaBuilding />,
    title: "Registration Certificate – Government of Karnataka",
  },
  {
    icon: <FaBuilding />,
    title:
      "Registered with Department of Industry & Commerce – Government of Karnataka",
  },
  {
    icon: <FaCheckCircle />,
    title:
      "Vocational Training Provider (VTP) – Department of Labour & Employment, Government of India",
  },
  {
    icon: <FaCheckCircle />,
    title: "MSME Certified",
  },
];

export default function AccreditationsSection() {
  return (
    <section className="bg-gray-100 py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-4xl font-bold text-[#0f172a] mb-16">
          Accreditations & <span className="text-yellow-500">Registrations</span>
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {accreditations.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4 hover:shadow-xl transition"
            >
              <div className="text-yellow-500 text-2xl mt-1">
                {item.icon}
              </div>

              <p className="text-gray-700 leading-relaxed font-medium">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}