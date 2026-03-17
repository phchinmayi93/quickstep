import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactInfoSection() {
  return (
    <div className="relative bg-[#00006c] pt-20 mt-20">

      {/* Floating Contact Card */}
      <div className="absolute left-0 right-0 -top-20  flex justify-center px-4">
        <div className="w-full max-w-5xl bg-[#00008b] text-white 
                        rounded-2xl shadow-2xl 
                        px-6 md:px-12 py-10 md:py-12">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center relative">

            {/* Address */}
            <div className="flex flex-col items-center">
              <MapPin className="text-[#ffb000] mb-4" size={26} />
              <h3 className="text-lg font-semibold mb-3">Address</h3>
              <p className="text-gray-200 text-sm leading-relaxed max-w-xs">
                11, 1st Floor, Unilet Store, Police Station,
                80 Feet Rd above Unilet, P&T Colony,
                RT Nagar, Bengaluru, Karnataka 560032
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block absolute left-1/3 top-12 bottom-12 w-px bg-blue/20"></div>

            {/* Phone */}
            <div className="flex flex-col items-center">
              <Phone className="text-[#ffb000] mb-4" size={26} />
              <h3 className="text-lg font-semibold mb-3">Phone Number</h3>
              <p className="text-gray-200 text-sm">
                +91 9743034376 <br />
                +91 9739204786
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block absolute left-2/3 top-12 bottom-12 w-px bg-gray-100"></div>

            {/* Email */}
            <div className="flex flex-col items-center">
              <Mail className="text-[#ffb000] mb-4" size={26} />
              <h3 className="text-lg font-semibold mb-3">Email Address</h3>
              <p className="text-gray-200 text-sm break-words">
                quicksteprt@gmail.com <br />
                jobsqsrtm@gmail.com
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* Space before footer */}
      <div className="pt-20"></div>

    </div>
  );
}