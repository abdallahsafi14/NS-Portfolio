import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-[80vh] flex justify-center items-center bg-dark"
    >
      <div className="container mx-auto px-4 text-center md:text-start">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4 text-white"
          >
            Hi, I'm <span className="text-light">Noor Almasri</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl font-semibold mb-6 text-light"
          >
            Architecture Engineer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg mb-8 text-gray-400"
          >
            I specialize in designing sustainable, innovative architectural
            solutions that balance form, function, and aesthetics. From concept
            to construction, I bring creative visions to life.
          </motion.p>

          <div className="flex gap-4 justify-center md:justify-start">
            <motion.a
              href="#contact"
              className="inline-block bg-white text-black px-6 py-3 rounded-lg font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="#projects"
              className="inline-block border border-gray-600 text-white px-6 py-3 rounded-lg font-medium"
              whileHover={{ scale: 1.05, backgroundColor: "#222222" }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Projects
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
