import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

const ProjectDetails = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const { id } = useParams();
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
      title: "Modern Residential Villa",
      description:
        "A conceptual design for a modern villa focused on open space, natural lighting, and sustainability.",
      tags: ["Revit", "Lumion", "AutoCAD", "Sustainable Design"],
      image:
        "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
  ];

  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white">
        <h1 className="text-2xl font-light">Project not found</h1>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="bg-black min-h-screen py-24 px-6 md:px-16 font-serif text-white">
        <div className="max-w-6xl mx-auto">
          {/* Project Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl mb-4 tracking-wide"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
          >
            {project.title}
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="origin-left w-24 h-[2px] bg-gradient-to-r from-white to-gray-500 mb-12"
          />

          {/* Image Reveal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="rounded-lg overflow-hidden shadow-2xl border border-gray-800 mb-16"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto max-h-[500px] object-cover"
            />
          </motion.div>

          {/* Tags */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-16"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {project.tags.map((tag, index) => (
              <motion.div
                key={tag}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="bg-white bg-opacity-5 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-600 text-sm text-center uppercase tracking-widest hover:bg-opacity-10 transition duration-300"
              >
                {tag}
              </motion.div>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-gray-300 text-lg leading-relaxed tracking-wide"
            style={{ fontWeight: 300, lineHeight: "1.75" }}
          >
            {project.description}
          </motion.p>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectDetails;
