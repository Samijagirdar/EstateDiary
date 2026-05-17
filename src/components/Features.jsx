import { motion } from "framer-motion";
import {
  HiOutlineUserGroup,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineChartBar,
} from "react-icons/hi";

const Features = () => {
  const features = [
    {
      icon: <HiOutlineUserGroup />,
      title: "Lead Management",
      Description:
        "Store, organize, and manage all your client leads efficiently in one place.",
    },
    {
      icon: <HiOutlineCalendar />,
      title: "Appointments",
      Description:
        "Schedule property visits and client meetings without confusion.",
    },
    {
      icon: <HiOutlineLocationMarker />,
      title: "Google Maps Integration",
      Description:
        "Track property locations and navigate instantly with integrated maps.",
    },
    {
      icon: <HiOutlineChartBar />,
      title: "Productivity Tracking",
      Description:
        "Stay organized and focus on closing more real estate deals.",
    },
  ];

  return (
    <section className="bg-white text-[#4A5568] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-start">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:sticky lg:top-32"
        >
          <div
            className="
                inline-block
                px-5 py-2
                rounded-full
                bg-gray-100
                text-sm
                font-medium
          "
          >
            Why Estate Diary?
          </div>
          <h2 className="mt-8 font-bold text-4xl lg:text-5xl leading-tight">
            Everything You Need,
            <br />
            All in One Place
          </h2>
          <p className="mt-8 text-lg leading-8 text-gray-800 max-w-xl">
            Estate Diary is designed to simplify real estate workflows by
            helping agents manage leads, appointments, properties, meetings and
            client interactions from one intelligent platform
          </p>
        </motion.div>
        {/* RIGHT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-[#F8FAFC] hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-3xl">
                  {feature.icon}
                </div>
                {/* Title */}
                <h3 className="mt-8 text-2xl font-semibold">{feature.title}</h3>
                {/* Description */}
                <p className="mt-4 text-gray-600 leading-7">
                  {feature.Description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
