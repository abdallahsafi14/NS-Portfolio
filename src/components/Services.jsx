import { motion } from "framer-motion";

const services = [
  {
    title: "3D Modeling",
    description: "3D modeling from 2D architectural plans",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "BIM Design",
    description: "BIM-based design using Revit",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Rendering",
    description: "Realistic rendering using Lumion and Enscape",
    image:
      "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "3D Modeling",
    description: "3D modeling from 2D architectural plans",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "BIM Design",
    description: "BIM-based design using Revit",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Rendering",
    description: "Realistic rendering using Lumion and Enscape",
    image:
      "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
];

const Services = () => {
  return (
    <section
      id="services"
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
            style={{ fontWeight: 300, letterSpacing: "0.05em" }}
          >
            Services
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
            I offer a range of architectural visualization and modeling services
            to elevate your project presentations:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="border border-gray-600 bg-transparent rounded-lg shadow-lg p-6 transition duration-300 ease-in-out hover:shadow-xl"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover rounded-md mb-4 border border-gray-800"
              />
              <h3 className="text-xl md:text-2xl mb-2 text-white tracking-wide">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.description}</p>
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
            Whether you're an architect, interior designer, or developer, I
            bring your visions to life with clarity, precision, and emotion.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
