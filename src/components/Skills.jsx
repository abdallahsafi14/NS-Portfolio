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
    <section id="skills" className="py-20 ">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-light mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex justify-between mb-1">
                <span className="font-medium text-white">{skill.name}</span>
                <span className="text-white">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-2.5 rounded-full bg-light"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
