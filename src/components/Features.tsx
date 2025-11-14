import { motion } from "framer-motion";
import { Camera, FileText, Languages, Leaf } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "AI Disease Detection",
    description: "Instantly identify common coffee plant diseases with 95% accuracy",
  },
  {
    icon: Leaf,
    title: "Treatment Recommendations",
    description: "Get personalized treatment plans based on disease stage and coffee variety",
  },
  {
    icon: FileText,
    title: "Disease Management Guide",
    description: "Access comprehensive guides with symptoms, prevention, and treatment for each disease",
  },
  {
    icon: Languages,
    title: "Multi-language Support",
    description: "Use the app in your preferred language with support for local dialects",
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Empowering Farmers with{" "}
            <span className="text-primary">Smart Technology</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            KAPPI combines cutting-edge AI with agricultural expertise to protect your coffee crops
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 h-full border border-border shadow-sm hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;