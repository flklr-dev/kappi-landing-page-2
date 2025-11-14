import { motion } from "framer-motion";
import { Code2, Database, Brain, Smartphone, Shield, Wrench } from "lucide-react";

const techCategories = [
  {
    category: "Frontend",
    icon: Code2,
    color: "primary",
    technologies: [
      { name: "React", description: "Building responsive user interfaces" },
      { name: "React Native", description: "Cross-platform mobile development" },
      { name: "TypeScript", description: "Type-safe development" },
      { name: "Shadcn UI", description: "Beautiful, accessible UI components" },
    ],
  },
  {
    category: "Backend",
    icon: Database,
    color: "accent",
    technologies: [
      { name: "Node.js & Express", description: "RESTful API backend" },
      { name: "MongoDB", description: "Flexible, scalable data storage" },
      { name: "Cloudinary", description: "Secure image hosting" },
    ],
  },
  {
    category: "Machine Learning",
    icon: Brain,
    color: "primary",
    technologies: [
      { name: "TensorFlow", description: "Training ML models" },
      { name: "Python", description: "Data science and ML" },
      { name: "TensorFlow Lite", description: "On-device ML inference" },
    ],
  },
  {
    category: "Mobile Development",
    icon: Smartphone,
    color: "accent",
    technologies: [
      { name: "Expo", description: "Streamlined mobile development" },
      { name: "React Native", description: "Native mobile experiences" },
    ],
  },
  {
    category: "Security",
    icon: Shield,
    color: "primary",
    technologies: [
      { name: "JWT", description: "Secure authentication" },
      { name: "Bcrypt", description: "Password hashing" },
      { name: "SecureStorage", description: "Secure data storage" },
    ],
  },
  {
    category: "Development Tools",
    icon: Wrench,
    color: "accent",
    technologies: [
      { name: "Git", description: "Version control" },
      { name: "ESLint", description: "Code quality" },
      { name: "Prettier", description: "Code formatting" },
    ],
  },
];

const Technologies = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Built with <span className="text-primary">Modern Technology</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            KAPPI leverages cutting-edge tools and technologies to deliver accurate disease detection
            and an exceptional user experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-soft transition-all duration-300 hover:-translate-y-1 h-full">
                <div className={`w-12 h-12 rounded-xl ${
                  category.color === "primary" ? "bg-primary/10" : "bg-accent/10"
                } flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className={`w-6 h-6 ${
                    category.color === "primary" ? "text-primary" : "text-accent"
                  }`} />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {category.category}
                </h3>

                <div className="space-y-3">
                  {category.technologies.map((tech) => (
                    <div key={tech.name} className="border-l-2 border-primary/20 pl-3">
                      <p className="font-semibold text-foreground text-sm">
                        {tech.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {tech.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;