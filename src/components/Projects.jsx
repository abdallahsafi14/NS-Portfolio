import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Modern Apartment Design for Green Swift, Qatar",
    description:
      "Transformed traditional 2D floor plans into a detailed 3D BIM model using Revit, ensuring precision in architecture, materials, and lighting. The design was then brought to life with hyper-realistic renders in Enscape, capturing sun studies and textures. Finally, I created an interactive EXE file, allowing clients to freely explore the apartment, adjust lighting, and experience the space in real-time—merging technical expertise with immersive storytelling for unparalleled client engagement.",
    tags: ["Revit", "Enscape", "BIM", "Interactive Design"],
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Revitalizing Heritage: BIM Transformation of a Historic School",
    description:
      "Executed a precise field survey of an aging school, capturing every detail for accurate as-built documentation. Using Revit, I developed a smart BIM model, enabling efficient space optimization while respecting its historic essence. The model facilitated seamless design adjustments and real-time 3D visualization, allowing stakeholders to virtually experience the transformed spaces before construction. This BIM-driven approach bridged heritage preservation with modern functionality, delivering both technical precision and immersive storytelling.",
    tags: ["Revit", "BIM", "Heritage Preservation", "3D Visualization"],
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Revitalizing Heritage: BIM Transformation of a Historic School",
    description:
      "Executed a precise field survey of an aging school, capturing every detail for accurate as-built documentation. Using Revit, I developed a smart BIM model, enabling efficient space optimization while respecting its historic essence. The model facilitated seamless design adjustments and real-time 3D visualization, allowing stakeholders to virtually experience the transformed spaces before construction. This BIM-driven approach bridged heritage preservation with modern functionality, delivering both technical precision and immersive storytelling.",
    tags: ["Revit", "BIM", "Heritage Preservation", "3D Visualization"],
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
];

const Projects = () => {
  const navigate = useNavigate();
  return (
    <section
      id="projects"
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
            Portfolio
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="h-px bg-white mx-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
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
            Here’s a selection of projects I’ve worked on—from academic
            assignments to real commissions—each one shaped by an eye for
            detail, a love of composition, and a drive to elevate spatial
            experiences.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <motion.div
                className="relative overflow-hidden mb-6"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-[4/3] overflow-hidden border border-gray-700">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </motion.div>

              <div className="px-2">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className="text-xl md:text-2xl mb-4 text-white tracking-wide group-hover:text-gray-200 transition-colors duration-300"
                  style={{
                    fontWeight: 400,
                    letterSpacing: "0.02em",
                  }}
                >
                  {project.title}
                </motion.h3>

                <div className="truncate max-h-12 overflow-hidden text-gray-400 mb-6 leading-relaxed">
                  <p>{project.description}</p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2 mb-6"
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-gray-300 px-3 py-1 border border-gray-600 uppercase tracking-wider transition-all duration-300 hover:border-white hover:text-white"
                      style={{
                        letterSpacing: "0.08em",
                        fontWeight: 300,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    className="inline-flex items-center text-white text-sm uppercase tracking-widest border-b border-transparent hover:border-white transition-all duration-300 group-hover:translate-x-1"
                    style={{
                      letterSpacing: "0.1em",
                      fontWeight: 300,
                    }}
                    whileHover={{ x: 5 }}
                    onClick={() => navigate(`/projects/${project.id}`)}
                  >
                    View Project
                    <motion.span
                      className="ml-2 inline-block"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      →
                    </motion.span>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
