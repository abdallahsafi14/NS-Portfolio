import { motion } from "framer-motion";
import React from "react";

const skills = [
  { name: "AutoCAD", level: 95 },
  { name: "Revit", level: 90 },
  { name: "SketchUp", level: 85 },
  { name: "3ds Max", level: 80 },
  { name: "Lumion", level: 85 },
  { name: "Photoshop", level: 75 },
  { name: "Sustainable Design", level: 80 },
  { name: "Urban Planning", level: 70 },
];

const Skills = () => {
  return (
    <section
      id="skills"
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
            Capabilities
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex justify-between items-end mb-4">
                  <motion.h3
                    className="text-lg md:text-xl text-white tracking-wide group-hover:text-gray-200 transition-colors duration-300"
                    style={{
                      fontWeight: 400,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {skill.name}
                  </motion.h3>
                  <motion.span
                    className="text-sm text-gray-400 uppercase tracking-widest"
                    style={{
                      letterSpacing: "0.1em",
                      fontWeight: 300,
                    }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>

                <div className="relative">
                  <div className="w-full h-px bg-gray-700 relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{
                        duration: 1.5,
                        delay: index * 0.1 + 0.3,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                      className="h-px bg-white absolute top-0 left-0 group-hover:bg-gray-200 transition-colors duration-300"
                    />
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1 + 1.8,
                      }}
                      viewport={{ once: true }}
                      className="absolute w-2 h-2 bg-white rounded-full -top-0.5 group-hover:bg-gray-200 transition-colors duration-300"
                      style={{
                        left: `${skill.level}%`,
                        transform: "translateX(-50%)",
                      }}
                    />
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                  viewport={{ once: true }}
                  className="mt-4"
                >
                  <div className="flex justify-between text-xs text-gray-500 uppercase tracking-widest">
                    <span style={{ letterSpacing: "0.08em" }}>Beginner</span>
                    <span style={{ letterSpacing: "0.08em" }}>
                      Intermediate
                    </span>
                    <span style={{ letterSpacing: "0.08em" }}>Advanced</span>
                    <span style={{ letterSpacing: "0.08em" }}>Expert</span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p
              className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
              style={{
                fontWeight: 300,
                lineHeight: "1.7",
                fontStyle: "italic",
              }}
            >
              Proficiency developed through rigorous academic training, hands-on
              project experience, and continuous exploration of emerging design
              technologies and methodologies.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
