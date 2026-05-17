import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      className="
      bg-[#3D4757]
      text-white
      py-10 
      border-t border-white/10
    "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* LEFT */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold">Estate Diary</h2>
          <p className="text-gray-300 mt-2">
            Simplifying modern real estate workflows
          </p>
        </div>
        {/* Social Icons */}
        <div className="flex items-center gap-5">
          <a
            href="https://www.instagram.com/estatediaryapp/"
            className="
              w-12 h-12 
              rounded-full
              bg-white/10 
              border border-white/10 
              flex items-center justify-center
              hover:bg-white
              hover:text-[#4A5568]
              transition-all duration-300
              "
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/estatediary"
            className="
              w-12 h-12 
              rounded-full
              bg-white/10 
              border border-white/10 
              flex items-center justify-center
              hover:bg-white
              hover:text-[#4A5568]
              transition-all duration-300
              "
          >
            <FaFacebookF />
          </a>
          <a
            href="https://linkedin.com/company/estate-diary-app"
            className="
              w-12 h-12 
              rounded-full
              bg-white/10 
              border border-white/10 
              flex items-center justify-center
              hover:bg-white
              hover:text-[#4A5568]
              transition-all duration-300
              "
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://x.com/EstateDiaryApp?t=Nuecfn2umNu2tGJ9HPRk9A&s=09"
            className="
              w-12 h-12 
              rounded-full
              bg-white/10 
              border border-white/10 
              flex items-center justify-center
              hover:bg-white
              hover:text-[#4A5568]
              transition-all duration-300
              "
          >
            <FaXTwitter />
          </a>
        </div>
        {/* Right */}
        <p>&copy; 2026 Estate Diary. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
