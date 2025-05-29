import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex justify-center  bg-black  pb-8"
      style={{
        fontFamily:
          "'Playfair Display', 'Cormorant Garamond', 'Crimson Text', serif",
      }}
    >
      <div className="container mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="mb-6 text-white tracking-wide"
            style={{
              fontWeight: 300,
              letterSpacing: "0.02em",
              lineHeight: "1.1",
              fontSize: "clamp(3rem, 8vw, 5rem)",
            }}
          >
            <span className="block mb-2">Nour</span>
            <span
              className="text-gray-300 font-thin tracking-wider block"
              style={{
                fontSize: "clamp(2.25rem, 6vw, 4rem)",
              }}
            >
              ALMASRI
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "120px" }}
            transition={{ duration: 1, delay: 0.8 }}
            className="h-px bg-white mx-auto mb-8"
          />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mb-8 text-gray-200 tracking-widest uppercase"
            style={{
              fontWeight: 200,
              letterSpacing: "0.15em",
              fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
            }}
          >
            Architecture Student
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mb-4 text-gray-300 max-w-3xl mx-auto leading-relaxed"
            style={{
              fontWeight: 300,
              lineHeight: "1.6",
              fontStyle: "italic",
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
            }}
          >
            With a passion for visual storytelling and form-making, I strive to
            breathe life into every concept I touch.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="mb-6 text-gray-400 max-w-2xl mx-auto leading-relaxed"
            style={{
              fontWeight: 300,
              lineHeight: "1.6",
              fontSize: "clamp(0.875rem, 1.8vw, 1.125rem)",
            }}
          >
            Beyond my academic path, I've contributed to real-world projects,
            combining creativity and functionality in design solutions.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="mb-12 text-gray-400 max-w-2xl mx-auto leading-relaxed"
            style={{
              fontWeight: 300,
              lineHeight: "1.6",
              fontSize: "clamp(0.875rem, 1.8vw, 1.125rem)",
            }}
          >
            I specialize in transforming 2D plans into detailed 3D models and
            renderings, offering immersive visualizations that bring clients
            closer to their future spaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          >
            <motion.a
              href="#contact"
              className="w-full sm:w-auto inline-block bg-white text-black px-6 sm:px-8 py-3 sm:py-4 font-light tracking-wider uppercase border border-white transition-all duration-300"
              whileHover={{
                scale: 1.02,
                backgroundColor: "transparent",
                color: "white",
              }}
              whileTap={{ scale: 0.98 }}
              style={{
                letterSpacing: "0.1em",
                fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)",
              }}
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="#projects"
              className="w-full sm:w-auto inline-block border border-white text-white px-6 sm:px-8 py-3 sm:py-4 font-light tracking-wider uppercase transition-all duration-300"
              whileHover={{
                scale: 1.02,
                backgroundColor: "white",
                color: "black",
              }}
              whileTap={{ scale: 0.98 }}
              style={{
                letterSpacing: "0.1em",
                fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)",
              }}
            >
              Explore Portfolio
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
