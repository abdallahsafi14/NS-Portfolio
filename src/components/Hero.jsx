import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="py-20 px-8 md:py-32 bg-dark">
      <div className="container mx-auto px-4 text-center md:text-start">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white ">
              Hi, I'm <span className="text-light">Noor Almasri</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-light">
              Architecture Engineer
            </h2>
            <p className="text-lg mb-8 text-gray-400">
              I specialize in designing sustainable, innovative architectural
              solutions that balance form, function, and aesthetics. From
              concept to construction, I bring creative visions to life.
            </p>
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

          {/* <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-700 shadow-xl">
              <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                <span className="text-6xl">🏛️</span>
              </div>
              <motion.div
                className="absolute inset-0 bg-white/5 mix-blend-overlay"
                animate={{ opacity: [0.05, 0.1, 0.05] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
