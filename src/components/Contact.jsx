import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          alert("Form submitted successfully.");
        },
        () => {
          alert("Failed to submit form.");
        },
      );
    const formData = new FormData(form.current);

    const userName = formData.get("user_name")?.trim();
    const userEmail = formData.get("user_email")?.trim();
    const message = formData.get("message")?.trim();

    if (message.length < 10) {
      alert("Message should be at least 10 characters.");
      return;
    }

    if (!userName || !userEmail || !message) {
      alert("Please fill all fields.");
      return;
    }
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="bg-[#4A5568] text-white py-28 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-50 -left-25 w-100 h-100 rounded-full bg-white/5 blur-3xl" />
      <div>
        {/* TOP CTA */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/10 text-sm">
            Contact Us
          </div>
          <h2
            className="mt-8 text-3xl md:text-5xl font-bold leading-tight 
          "
          >
            Let's Build Smarter
            <br />
            Real Estate Workflows
          </h2>
          <p className="mt-8  text-lg text-gray-300 leading-8 mx-auto max-w-3xl">
            Have questions about Estate Diary or want to learn more about the
            platform? Get in touch and we’ll help you get started.
          </p>
        </motion.div>
        {/* Contact Grid */}
        <div className="mt-24 grid lg:grid-cols-2 gap-12">
          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="ml-4 p-10 rounded-[2.5rem] bg-white/10 backdrop-blur-xl border border-white/10 h-full">
              <h3 className="text-3xl font-semibold">Contact Information</h3>
              <p className="mt-6 text-gray-300 leading-8">
                Reach out to us for product inquiries, demos, partnerships, or
                support regarding Estate Diary.
              </p>
              <div className="flex flex-wrap">
                {/* Email */}
                <div className="mt-10 flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-2xl">
                    <HiOutlineMail />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium">Email</h4>
                    <p className="text-gray-200">estatediary@gmail.com</p>
                  </div>
                </div>
                {/* Location */}
                <div className="mt-10 sm:ml-10 flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-2xl">
                    <HiOutlineLocationMarker />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium">Location</h4>
                    <p className="text-gray-200">India</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="p-10 mr-4 rounded-[2.5rem] bg-white/10 backdrop-blur-xl border border-white/10"
            >
              {/* INPUT */}
              <div>
                <label className="block mb-3 text-gray-200">Full Name</label>
                <input
                  type="text"
                  required
                  name="user_name"
                  id=""
                  placeholder="Enter your name"
                  className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/10 outline:none placeholder:text-gray-400"
                />
              </div>
              {/* EMAIL */}
              <div className="mt-6">
                <label className="block mb-3 text-gray-200">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  name="user_email"
                  id=""
                  placeholder="Enter your email"
                  className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/10 outline:none placeholder:text-gray-400"
                />
              </div>
              {/* MESSAGE */}
              <div className="mt-6">
                <label className="block mb-3 text-gray-200">Message</label>
                <textarea
                  required
                  rows="5"
                  name="message"
                  placeholder="Write your message"
                  className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/10 outline:none placeholder:text-gray-400 resize-none"
                />
              </div>
              {/* Button */}
              <button
                type="submit"
                className="mt-8 w-full py-4 rounded-2xl bg-white text-[#4A5568] font-semibold hover:scale-[1.02] transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
