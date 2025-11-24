import { motion } from "framer-motion";
import { Camera, Leaf, FileText, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "AI Disease Detection",
    description: "Instantly identify coffee plant diseases with 95% accuracy",
  },
  {
    icon: Leaf,
    title: "Treatment Plans",
    description: "Get personalized recommendations based on disease stage",
  },
  {
    icon: FileText,
    title: "Disease Management",
    description: "Access comprehensive guides for symptoms and prevention",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track disease patterns and monitor crop health trends",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
            Everything you need
          </h2>
          <p className="text-zinc-500">
            Professional tools for modern agriculture
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-zinc-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-zinc-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-zinc-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;