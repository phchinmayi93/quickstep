import Image from "next/image";

export default function SectionAccreditation() {
  return (
    <section className="py-8">
      
      {/* Centered Container */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl overflow-hidden">

        <div className="marquee">
          <div className="marquee-track">

            {/* First Set */}
            <div className="flex items-center gap-20 px-10 py-10">
              <Image src="/image_32.jpg" alt="logo" width={120} height={120} />
              <Image src="/image_33.jpg" alt="logo" width={140} height={100} />
              <Image src="/image_34.jpg" alt="logo" width={180} height={120} />
              <Image src="/image_35.jpg" alt="logo" width={120} height={120} />
              <Image src="/image_36.jpg" alt="logo" width={120} height={120} />
              <Image src="/image_37.jpg" alt="logo" width={120} height={120} />
              <Image src="/image_38.jpg" alt="logo" width={120} height={120} />
              <Image src="/image_39.jpg" alt="logo" width={120} height={120} />
            </div>

            {/* Duplicate Set */}
            <div className="flex items-center gap-20 px-10 py-10">
              <Image src="/image_32.jpg" alt="logo" width={120} height={120} />
              <Image src="/image_33.jpg" alt="logo" width={140} height={100} />
              <Image src="/image_34.jpg" alt="logo" width={180} height={120} />
              <Image src="/image_35.jpg" alt="logo" width={120} height={120} />
              <Image src="/image_36.jpg" alt="logo" width={120} height={120} />
              <Image src="/image_37.jpg" alt="logo" width={120} height={120} />
              <Image src="/image_38.jpg" alt="logo" width={120} height={120} />
              <Image src="/image_39.jpg" alt="logo" width={120} height={120} />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}