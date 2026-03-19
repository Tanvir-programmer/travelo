import React from "react";
import { MoveUpRight } from "lucide-react";

const Trustpoint: React.FC = () => {
  // Define brand colors for easy maintenance
  const primaryColor = "text-[#1A1A1A]"; // Deep Carbon/Black
  const secondaryColor = "text-[#FF8C00]"; // Vibrant Orange/Gold

  return (
    <section className="relative w-full bg-[#FAF3EA] py-20 px-6 overflow-hidden min-h-[700px] flex items-center">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: `radial-gradient(#000 0.5px, transparent 0.5px)`,
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content Side */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h2
              className={`text-5xl md:text-6xl font-extrabold ${primaryColor} leading-[1.1] tracking-tight`}
            >
              Your Trustpoint, <span className="text-primary">Travel</span>
              <span className={`${secondaryColor}`}>O</span> <br />
              Best for Travel Agency.
            </h2>
            <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
              At{" "}
              <span className={`font-bold text-primary`}>
                Travel<span className={secondaryColor}>O</span>
              </span>
              , we are passionate about creating{" "}
              <span className="text-black font-semibold">
                exceptional travel experiences
              </span>
              . From the serene mangroves of the Sundarbans to the bustling
              streets of Dhaka, we curate journeys that stay with you forever.
            </p>
          </div>

          {/* Stats / Experience Section */}
          <div className="flex items-center gap-6 pt-4">
            <div className="relative">
              {/* Abstract Hand-drawn Arrow SVG */}
              <svg
                className="absolute -top-12 -left-4 w-24 h-24 text-blue-400"
                viewBox="0 0 100 100"
                fill="none"
              >
                <path
                  d="M20,80 Q40,20 80,50"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M75,40 L82,52 L68,55"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
              <div
                className={`text-7xl font-black ${primaryColor} flex items-start`}
              >
                12{" "}
                <span className={`text-4xl mt-2 ml-1 ${secondaryColor}`}>
                  +
                </span>
              </div>
            </div>
            <div className="text-xl font-bold text-gray-700 leading-tight">
              Years <br /> of Experience
            </div>
          </div>
        </div>

        {/* Right Image Side (The Arched Gallery) */}
        <div className="relative flex items-center justify-center h-[550px]">
          {/* Dotted Connection Line */}
          <svg
            className="absolute top-0 w-full h-full overflow-visible opacity-20 pointer-events-none hidden md:block"
            viewBox="0 0 400 400"
          >
            <path
              d="M100,100 C150,-20 250,-20 300,100"
              stroke="black"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              fill="none"
            />
          </svg>

          <div className="flex gap-6 items-end">
            {/* Left Image (Beach/Cox's Bazar) */}
            <div className="w-48 md:w-56 h-80 rounded-t-full overflow-hidden border-4 border-white shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <img
                src="https://i.ibb.co.com/XxVhSR4r/images-3.jpg"
                alt="Cox's Bazar Beach"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Image (Sundarban Forest) */}
            <div className="w-48 md:w-56 h-[440px] rounded-t-full overflow-hidden border-4 border-white shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <img
                src="https://i.ibb.co.com/5xsxvmHv/licensed-image.jpg"
                alt="Sundarban Mangrove Forest"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Floating Trust Badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-50 z-20">
            <div className="bg-[#00AF87] p-2.5 rounded-full">
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4.5-9c.83 0 1.5-.67 1.5-1.5S8.33 8 7.5 8 6 8.67 6 9.5 6.67 11 7.5 11zm9 0c.83 0 1.5-.67 1.5-1.5S17.33 8 16.5 8 15 8.67 15 9.5s.67 1.5 1.5 1.5z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="absolute bottom-10 right-10 group cursor-pointer">
        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100 group-hover:bg-[#FF8C00] transition-all duration-300">
          <MoveUpRight
            className="text-gray-900 group-hover:text-white transition-colors"
            size={24}
          />
        </div>
      </div>
    </section>
  );
};

export default Trustpoint;
