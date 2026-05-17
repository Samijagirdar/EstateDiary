import React from "react";
import { motion } from "framer-motion";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import GroupIcon from "@mui/icons-material/Group";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InsightsIcon from "@mui/icons-material/Insights";
import appScreen from "../assets/images/appScreen.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className=" relative min-h-screen overflow-hidden pt-32 pb-20"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-50 -left-25 w-125 h-125 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-50 -right-25 w-125 h-125 bg-white/5 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Badge Name */}
          <div className=" inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/10 backdrop-blur-lg text-sm text-gray-200 mb-8">
            All-in-One Real Estate Management App
          </div>

          {/* Heading */}
          <h1
            className="
              text-3xl
              md:text-4xl
              lg:text-5xl
              font-bold
              leading-tight
          "
          >
            Manage Leads.
            <br />
            Schedule Smarter.
            <br />
            <span className="text-gray-300">Close More Deals</span>
          </h1>
          <p className="mt-8 text-lg text-gray-300 leading-8 max-w-xl">
            Estate Diary helps real estate agents manage leads, appointments,
            meetings, properties and client interactions - all from one
            intelligent and organized platform.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">
            <a
              href="https://play.google.com/store/apps/details?id=com.inviteme.estateplus"
              target="_blank"
              rel="noopener noreferrer"
              className="
    px-8 py-4
    rounded-full
    bg-white
    text-[#4A5568]
    font-medium
    hover:scale-105
    hover:shadow-2xl
    active:scale-95
    transition-all duration-300
  "
            >
              Download App
            </a>
            {/* <button
              className="
                px-8 py-4
                rounded-xl
                border border-white/20
                bg-white/10
                backdrop-blur-lg
                hover:bg-white
                hover:text-[#4A5568]
                transition-all duration-300
          "
            >
              Watch Demo
            </button> */}
          </div>

          {/* Features */}
          <div className="mt-16 flex flex-wrap gap-5">
            {/* Lead Management */}
            <div
              className="
              flex items-center gap-3 px-5 py-4 
              rounded-2xl bg-white/10 backdrop-blur-lg 
              border border-white/10
              hover:bg-white/15
              transition-all duration-300
            "
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <GroupIcon />
              </div>
              <div>
                <p className="text-sm text-gray-300">Smart</p>
                <h4 className="font-medium">Lead Management</h4>
              </div>
            </div>

            {/* Meetings */}
            <div
              className="
              flex items-center gap-3 px-5 py-4 
              rounded-2xl bg-white/10 backdrop-blur-lg 
              border border-white/10
              hover:bg-white/15
              transition-all duration-300
            "
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <CalendarTodayIcon />
              </div>
              <div>
                <p className="text-sm text-gray-300">Appointments</p>
                <h4 className="font-medium">& Meetings</h4>
              </div>
            </div>

            {/* Maps */}
            <div
              className="
              flex items-center gap-3 px-5 py-4 
              rounded-2xl bg-white/10 backdrop-blur-lg 
              border border-white/10
              hover:bg-white/15
              transition-all duration-300
            "
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <LocationOnIcon />
              </div>
              <div>
                <p className="text-sm text-gray-300">Integrated</p>
                <h4 className="font-medium">Google Maps</h4>
              </div>
            </div>

            {/* Productivity */}
            <div
              className="
              flex items-center gap-3 px-5 py-4 
              rounded-2xl bg-white/10 backdrop-blur-lg 
              border border-white/10
              hover:bg-white/15
              transition-all duration-300
            "
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <InsightsIcon />
              </div>
              <div>
                <p className="text-sm text-gray-300">Boost Your</p>
                <h4 className="font-medium">Productivity</h4>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="relative w-82 rounded-[3rem] border border-white/10 bg-white/10 backdrop-blur-xl p-3 shadow-2xl"
        >
          <img
            src={appScreen}
            alt="Estate Diary App"
            className="w-full rounded-[2.5rem] object-cover"
          />
        </motion.div>
      </div>
      <div
        className="
          absolute 
          bottom-0 
          left-0 
          w-full 
          h-32 
          bg-linear-to-b
          from-transparent
          to-white
          "
      />
    </section>
  );
};

export default Hero;
