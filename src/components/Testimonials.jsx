import { motion } from "framer-motion";
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Property Consultant",
      review:
        "Estate Diary helped me organize my client leads and appointments much more efficiently. The workflow feels clean and professional.",
    },

    {
      name: "Ankit Rao",
      role: "Real Estate Agent",
      review:
        "Managing properties and client meetings became much easier after using Estate Diary. Everything is available in one place.",
    },

    {
      name: "Neha Kapoor",
      role: "Property Advisor",
      review:
        "The appointment scheduling and lead management system saves a lot of time during busy workdays.",
    },
  ];
  return (
    <section className="bg-white text-[#4A5568] py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block px-5 py-2 rounded-full bg-gray-100 text-sm font-medium">
            Testimonials
          </div>
          <h2 className="mt-8 text-3xl md:text-4xl font-bold leading-tight">
            Trusted by Modern
            <br />
            Real Estate Professionals
          </h2>
        </motion.div>
        {/* Testimonial Cards */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-[#F8FAFC] border border-gray-100 hover:shadow-2xl transition-all duration-500"
              >
                {/* Quote */}
                <p className="text-lg leading-8 text-gray-600">{item.review}</p>
                {/* User */}
                <div className="mt-10">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-gray-500 mt-1">{item.role}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          id="about"
          className="mt-20 rounded-[3rem] bg-[#4A5568] text-white p-10 md:p-16 relative overflow-hidden"
        >
          <div className="absolute -top-25 -right-25 w-75 h-75 rounded-full bg-white/10 blur-3xl" />
          <div className="relative z-10">
            <div className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/10 text-sm ">
              About Estate Diary
            </div>
            <h2 className="mt-8 text-3xl md:text-4xl font-bold leading-tight max-w-3xl">
              Simplifying Real Estate Workflows Through Smart Digital Management
            </h2>
            <p className="mt-8 text-lg text-gray-300 leading-8  max-w-4xl">
              Estate Diary is a modern real estate management application built
              to help agents organize leads, properties, appointments, meetings,
              and client interactions in one intelligent platform. Our mission
              is to simplify everyday workflows and help professionals focus on
              what matters most — building relationships and closing deals.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
