import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-black"
      style={{
        fontFamily:
          "'Playfair Display', 'Cormorant Garamond', 'Crimson Text', serif",
      }}
    >
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-6 text-white tracking-wide"
            style={{
              fontWeight: 300,
              letterSpacing: "0.05em",
            }}
          >
            Contact
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="h-px bg-white mx-auto"
          />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p
              className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
              style={{
                fontWeight: 300,
                lineHeight: "1.7",
                fontStyle: "italic",
              }}
            >
              Let's collaborate to bring architectural visions to life. I
              welcome opportunities to discuss innovative design solutions and
              meaningful projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="group text-center"
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 mb-6 border border-gray-700 group-hover:border-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white group-hover:text-gray-200 transition-colors duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </motion.div>
              <h3
                className="text-lg md:text-xl text-white tracking-wide mb-4 group-hover:text-gray-200 transition-colors duration-300"
                style={{
                  fontWeight: 400,
                  letterSpacing: "0.02em",
                }}
              >
                Email
              </h3>
              <p
                className="text-gray-400 leading-relaxed"
                style={{
                  fontWeight: 300,
                  lineHeight: "1.6",
                }}
              >
                Nooralmasri@gmail.com
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="group text-center"
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 mb-6 border border-gray-700 group-hover:border-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white group-hover:text-gray-200 transition-colors duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </motion.div>
              <h3
                className="text-lg md:text-xl text-white tracking-wide mb-4 group-hover:text-gray-200 transition-colors duration-300"
                style={{
                  fontWeight: 400,
                  letterSpacing: "0.02em",
                }}
              >
                Phone
              </h3>
              <p
                className="text-gray-400 leading-relaxed"
                style={{
                  fontWeight: 300,
                  lineHeight: "1.6",
                }}
              >
                +963 955 442 378
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="group text-center"
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 mb-6 border border-gray-700 group-hover:border-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white group-hover:text-gray-200 transition-colors duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </motion.div>
              <h3
                className="text-lg md:text-xl text-white tracking-wide mb-4 group-hover:text-gray-200 transition-colors duration-300"
                style={{
                  fontWeight: 400,
                  letterSpacing: "0.02em",
                }}
              >
                Location
              </h3>
              <p
                className="text-gray-400 leading-relaxed"
                style={{
                  fontWeight: 300,
                  lineHeight: "1.6",
                }}
              >
                Syria, Homs
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "120px" }}
              transition={{ duration: 1, delay: 1.2 }}
              viewport={{ once: true }}
              className="h-px bg-gray-700 mx-auto mb-8"
            />
            <p
              className="text-gray-500 text-sm uppercase tracking-widest"
              style={{
                letterSpacing: "0.1em",
                fontWeight: 300,
              }}
            >
              Available for New Projects
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
