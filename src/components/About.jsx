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
    <section id="about" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            About Me
          </h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">Who I Am</h3>
            <p className="mb-4 text-gray-400">
              I'm an architecture engineer passionate about designing functional
              and aesthetic spaces. My goal is to blend creativity with
              engineering precision to create inspiring environments.
            </p>
            <p className="mb-4 text-gray-400">
              I have worked on a variety of architectural projects ranging from
              residential buildings to urban planning. I believe great design is
              both innovative and purposeful.
            </p>
            <p className="text-gray-400">
              Outside the studio, I enjoy sketching, visiting historical sites,
              and experimenting with 3D modeling techniques.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">
              My Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="inline-block bg-gray-800 text-gray-300 px-4 py-2 rounded-full"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-white">
                Experience
              </h4>
              <div className="space-y-4">
                <div className="border-l-2 border-white pl-4">
                  <h5 className="font-medium text-white">
                    Junior Architect at UrbanSpace Studio
                  </h5>
                  <p className="text-gray-400 text-sm">2022 - Present</p>
                  <p className="text-gray-400 mt-1">
                    Contributed to the design and visualization of mixed-use
                    developments, using Revit and Lumion to create detailed
                    presentations and walkthroughs.
                  </p>
                </div>
                <div className="border-l-2 border-white pl-4">
                  <h5 className="font-medium text-white">
                    Architecture Intern at DesignHaus
                  </h5>
                  <p className="text-gray-400 text-sm">2021 - 2022</p>
                  <p className="text-gray-400 mt-1">
                    Assisted in creating concept designs, physical models, and
                    technical drawings for residential and commercial projects.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
