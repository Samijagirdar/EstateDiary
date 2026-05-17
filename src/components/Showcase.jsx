import { motion } from "framer-motion";
import properties from "../assets/images/properties.jpeg";
import leads from "../assets/images/leads.jpeg";
import appointments from "../assets/images/appointments.jpeg";

const Showcase = () => {
  const showcaseData = [
    {
      title: "Discover & Manage Properties Efficiently",
      description:
        "Browse, organize, and manage residential and commercial properties with a clean and structured interface designed for modern real estate workflows.",
      image: properties,
    },
    {
      title: "Track Every Client Lead in One Place",
      description:
        "Organize buyer, renter, seller, and investor leads efficiently while maintaining seamless communication and appointment scheduling.",
      image: leads,
    },
    {
      title: "Never Miss Meetings or Site Visits",
      description:
        "Schedule client meetings, property visits, and deal discussions with smart appointment management built for busy agents.",
      image: appointments,
    },
  ];
  return (
    <section className="bg-[#4A5568] text-white py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div
            className="
              inline-block
              px-5 py-2
              rounded-full
              bg-white/10
              backdrop-blur-lg
              border border-white/10
              text-sm
              "
          >
            App Showcase
          </div>
          <h2
            className="
              mt-8
              text-3xl
              md:text-5xl
              font-bold
              leading-tight
              "
          >
            Built for Modern <br /> Real Estate Workflows
          </h2>
        </motion.div>
        {/* Showcase Items */}
        <div className="mt-5">
          {showcaseData.map((item, index) => {
            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-16 items-center
                  ${index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                {/* Text */}
                <motion.div
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 / 8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-6 text-lg text-gray-300 leading-8 max-w-xl">
                    {item.description}
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="flex justify-center"
                >
                  <div
                    className="
                        relative 
                        w-72
                        sm:w-[320px] 
                        rounded-[3rem] 
                        border border-white/10 
                        backdrop-blur-xl
                        p-4
                        shadow-[0_20px_80px-rgba(0,0,0,0.35)]
                        hover: -translate-y-2
                        hover:scale-[1.02]
                        transition-all duration-300
                  "
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full rounded-[2.5rem] h-130 object-cover object-top"
                    />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
