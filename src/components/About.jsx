import { motion } from "framer-motion";

const skills = [
  "AutoCAD",
  "Revit",
  "SketchUp",
  "3ds Max",
  "Lumion",
  "Adobe Photoshop",
  "Sustainable Design",
  "Project Planning",
];

const About = () => {
  return (
    <section
      id="about"
      className=" overflow-hidden bg-black"
      style={{
        fontFamily:
          "'Playfair Display', 'Cormorant Garamond', 'Crimson Text', serif",
      }}
    >
      <div className="container mx-auto px-8  ">
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
            About
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="h-px bg-white mx-auto"
          />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl mb-8 text-white tracking-wide"
              style={{
                fontWeight: 300,
                letterSpacing: "0.03em",
              }}
            >
              Philosophy
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mb-6 text-gray-300 text-lg leading-relaxed"
              style={{
                fontWeight: 300,
                lineHeight: "1.7",
                fontStyle: "italic",
              }}
            >
              As an architecture student, I believe that great design transcends
              mere functionality—it tells stories, evokes emotions, and creates
              meaningful connections between people and spaces.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="mb-6 text-gray-400 leading-relaxed"
              style={{
                fontWeight: 300,
                lineHeight: "1.7",
              }}
            >
              My approach combines rigorous academic training with hands-on
              experience, focusing on the delicate balance between form and
              function. I believe in creating spaces that are not just visually
              compelling but also deeply human in their essence.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 leading-relaxed"
              style={{
                fontWeight: 300,
                lineHeight: "1.7",
              }}
            >
              Through careful study of light, material, and spatial
              relationships, I strive to create environments that inspire and
              elevate the human experience.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <h4
                className="text-xl md:text-2xl mb-6 text-white tracking-wide"
                style={{
                  fontWeight: 300,
                  letterSpacing: "0.03em",
                }}
              >
                Experience
              </h4>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  viewport={{ once: true }}
                  className="border-l border-white pl-6 relative"
                >
                  <div className="absolute w-2 h-2 bg-white rounded-full -left-1 top-2"></div>
                  <h5
                    className="text-lg mb-2 text-white tracking-wide"
                    style={{ fontWeight: 400, letterSpacing: "0.02em" }}
                  >
                    Junior Architect
                  </h5>
                  <p
                    className="text-gray-500 text-sm mb-2 uppercase tracking-widest"
                    style={{ letterSpacing: "0.1em" }}
                  >
                    Simplex studio • 2024 - Present
                  </p>
                  <p
                    className="text-gray-400 leading-relaxed"
                    style={{ fontWeight: 300, lineHeight: "1.6" }}
                  >
                    I contributed by introducing a new, impactful element to the
                    company and took over the executive architectural role. I
                    became the primary point of reliance using Revit and assumed
                    responsibility for the company's BIM department.
                  </p>
                </motion.div>

                {/* <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  viewport={{ once: true }}
                  className="border-l border-white pl-6 relative"
                >
                  <div className="absolute w-2 h-2 bg-white rounded-full -left-1 top-2"></div>
                  <h5
                    className="text-lg mb-2 text-white tracking-wide"
                    style={{ fontWeight: 400, letterSpacing: "0.02em" }}
                  >
                    Architecture Intern
                  </h5>
                  <p
                    className="text-gray-500 text-sm mb-2 uppercase tracking-widest"
                    style={{ letterSpacing: "0.1em" }}
                  >
                    DesignHaus • 2021 - 2022
                  </p>
                  <p
                    className="text-gray-400 leading-relaxed"
                    style={{ fontWeight: 300, lineHeight: "1.6" }}
                  >
                    Developed foundational skills in concept design, physical
                    modeling, and technical documentation for diverse
                    architectural projects.
                  </p>
                </motion.div> */}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
