import { motion } from "framer-motion";
import lamp from "../../assets/icon/lamp.png";

const Hero = () => {
  return (
    <div className="py-24 h-screen relative bg-gradient-to-b from-[#000000] via-[#0c0429] to-[#3f4078]">
      <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {/* Text with animation - Moves from bottom to top and fades in */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Start from bottom with opacity 0
          animate={{ opacity: 1, y: 0 }} // Move to its normal position with full opacity
          transition={{ duration: 1.5 }} // Duration of the animation
          className="text-6xl font-bold text-center text-white"
        >
          <h1 className="text-indigo-400">Hi, I am</h1>
          <h1 className="text-sky-200">Renad Alghamdi</h1>
        </motion.div>

        {/* Border line with animation - Starts small and scales to full size */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} // Start with smaller size and opacity 0
          animate={{ opacity: 1, scale: 1 }} // Scale to full size and full opacity
          transition={{ duration: 1.5, delay: 0.5 }} // Delay for a smooth transition
          className="w-1/3 mx-auto mt-10 border-t-2 border-white"
        ></motion.div>

        {/* Description text with animation - Moves from bottom to top */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} // Start from bottom with opacity 0
          animate={{ opacity: 1, y: 0 }} // Move to its normal position with full opacity
          transition={{ duration: 1.5, delay: 1 }} // Delay for smooth transition
          className="text-center mt-6 text-xl text-white"
        >
          <p>
            I am a passionate software engineer with a focus on web design and
            UX/UI, dedicated to creating innovative and user-centered solutions.
          </p>
        </motion.div>

        {/* Lamp image with motion - Draggable and moves from left to right */}
        <motion.div
          className="absolute left-[-40px] top-[-90px]"
          drag
          initial={{ opacity: 0, x: -50 }} // Start from the left with opacity 0
          animate={{ opacity: 1, x: 0 }} // Move to its normal position
          transition={{ duration: 1.5, delay: 1 }} // Delay for a smooth transition
        >
          <img
            src={lamp}
            height="90"
            width="90"
            alt="lamp icon"
            className=""
            draggable="false"
          />
        </motion.div>

        {/* CV download button with hover effect and initial animation */}
        <div className="text-center mt-8">
          <motion.a
            href="/"
            download
            className="bg-transparent text-white py-3 px-6 border-2 border-white rounded-md hover:bg-white hover:text-black hover:shadow-lg hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and move from bottom
            animate={{ opacity: 1, y: 0 }} // Move to its normal position with full opacity
            transition={{ duration: 1.5, delay: 1.5 }} // Smooth transition with delay
          >
            Browse My CV
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
