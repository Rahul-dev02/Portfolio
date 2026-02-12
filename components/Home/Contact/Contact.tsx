import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaTwitch } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[70%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* text content   */}
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200 ">
            Schedule a call with me to see if I can help
          </h2>

          <p className="text-gray-400 mt-6 text-base sm:text-lg">
            Reach out to me today and let’s discuss how I can help you achieve
            your goals.
          </p>
          <div className="mt-7">
            <div className="flex items-center space-x-3 mb-4">
              <BiPhone className="w-9 h-9 text-cyan-300" />
              <p className="text:xl font-bold text-gray-400">9264927561</p>
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <BiEnvelope className="w-9 h-9 text-cyan-300" />
              <p className="text:xl font-bold text-gray-400">
                rahulrao14320@gmail.com
              </p>
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <BiMap className="w-9 h-9 text-cyan-300" />
              <p className="text:xl font-bold text-gray-400">
                Noida ,Sector 62 ,Uttar Pradesh
              </p>
            </div>
          </div>
          {/* SOCIAL ICON  */}
          <div className="flex items-center mt-8 space-x-3">


           <a href="https://www.linkedin.com/in/rahul-yadav-aa3918300/"
              target="_blank"
              rel="noopener noreferrer">

             <div className="h-14 w-14 bg-blue-950/60  rounded-full flex items-center justify-center
            cursor-pointer flex-col hover:bg-blue-800   transition-all duration-300" >
              <FaLinkedin className="text-white w-6 h-6" /> </div>
           </a>
           
           <a href="https://github.com/Rahul-dev02"
              target="_blank"
              rel="noopener noreferrer">
            <div className="h-14 w-14 bg-blue-900/40  rounded-full flex items-center justify-center
            cursor-pointer flex-col hover:bg-black   transition-all duration-300" > 
                 <FaGithub className="text-white w-6 h-6" /> </div>
            </a>


            <div
              className="h-14 w-14 bg-blue-950/60  rounded-full flex items-center justify-center
            cursor-pointer flex-col hover:bg-sky-400   transition-all duration-300"
            >
              <FaTwitter className="text-white w-6 h-6" />
            </div>
            <div
              className="h-14 w-14 bg-blue-950/60  rounded-full flex items-center justify-center
            cursor-pointer flex-col hover:bg-pink-500   transition-all duration-300"
            >
              <FaInstagram className="text-white w-6 h-6" />
            </div>
          </div>
        </div>

        {/* form  */}
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          data-aos-delay="0"
          className="px-4 py-3.5 bg-[#131332] rounded-lg"
        >
          <input
            type="text"
            placeholder="Name"
            className="px-4 mt-6 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full
          placeholder:text-white/70  "
          />
          <input
            type="email"
            placeholder="Email Address"
            className="px-4 py-3.5 mt-6  bg-[#363659] text-white outline-none rounded-md w-full
          placeholder:text-white/70  "
          />
          <input
            type="text"
            placeholder="Mobile Number"
            className="px-4 py-3.5 mt-6  bg-[#363659] text-white outline-none rounded-md w-full
          placeholder:text-white/70  "
          />
          <textarea
            placeholder="Your Messege"
            className="px-4 py-3.5 mt-6  bg-[#363659] text-white outline-none rounded-md w-full
          placeholder:text-white/70 h-[10rem]  "
          />
          <button
            className="mt-8 px-12  py-4 bg-blue-900 hover:bg-blue-950
          transition-all duration-300 cursor-pointer text-white rounded-full"
          >
            Send Message
          </button>
          \
        </div>
      </div>
    </div>
  );
};

export default Contact;
