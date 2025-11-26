import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

const diseases = [
  {
    name: "Leaf Rust",
    description: "Fungal disease causing yellow-orange spots on coffee leaves",
  },
  {
    name: "Leaf Spot",
    description: "Dark spots on leaves that can lead to defoliation",
  },
  {
    name: "Brown Spot",
    description: "Brown lesions on leaves affecting plant health",
  },
  {
    name: "Sooty Mold",
    description: "Black fungal growth on leaves reducing photosynthesis",
  },
];

const Diseases = () => {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
            Diseases we detect
          </h2>
          <p className="text-zinc-500">
            Trained to identify the most common coffee plant diseases
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {diseases.map((disease, index) => (
            <motion.div
              key={disease.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="space-y-3">
                <Leaf className="w-8 h-8 text-zinc-400" strokeWidth={1.5} />
                <h3 className="text-lg font-semibold text-zinc-900">
                  {disease.name}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {disease.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diseases;