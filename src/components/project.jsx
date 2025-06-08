import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectDetails = () => {
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
      <section
        id="project-details"
        className="py-24 bg-black overflow-hidden"
        style={{
          fontFamily:
            "'Playfair Display', 'Cormorant Garamond', 'Crimson Text', serif",
        }}
      >
        <div className="container mx-auto px-8 max-w-6xl">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-6 text-white tracking-wide"
            style={{
              fontWeight: 300,
              letterSpacing: "0.05em",
            }}
          >
            {project.title}
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="h-px bg-white mx-auto mb-16"
          />

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto max-h-[400px] object-cover rounded-lg border border-gray-800 shadow-2xl transition-transform duration-300 hover:scale-105"
            />
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          >
            {project.tags.map((tag) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-center py-3 px-4 border border-gray-600 transition-all duration-300 hover:border-white hover:bg-gray-900"
                style={{
                  letterSpacing: "0.05em",
                }}
              >
                <span className="text-gray-300 font-light text-sm uppercase tracking-wider">
                  {tag}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg leading-relaxed mb-16"
            style={{
              fontWeight: 300,
              lineHeight: "1.7",
            }}
          >
            {project.description}
          </motion.p>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectDetails;
