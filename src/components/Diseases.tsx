import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

const diseases = [
  {
    name: "Coffee Leaf Rust (CLR)",
    description: "A fungal disease that affects the leaves of coffee plants, reducing yield significantly",
    severity: "high",
  },
  {
    name: "Thread Blight",
    description: "A fungal infection causing thread-like structures on coffee plants",
    severity: "medium",
  },
  {
    name: "Anthracnose",
    description: "A group of fungal diseases that cause dark, sunken lesions on plant tissues",
    severity: "medium",
  },
  {
    name: "Coffee Wilt Disease",
    description: "A vascular disease causing wilting and eventual death of coffee plants",
    severity: "high",
  },
  {
    name: "Coffee Berry Disease",
    description: "A fungal disease affecting coffee berries, leading to significant crop loss",
    severity: "high",
  },
];

const Diseases = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Diseases We Can <span className="text-primary">Detect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            KAPPI is trained to identify the most common and destructive coffee plant diseases
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diseases.map((disease, index) => (
            <motion.div
              key={disease.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-soft transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    disease.severity === "high" 
                      ? "bg-destructive/10" 
                      : "bg-accent/10"
                  }`}>
                    <AlertCircle className={`w-5 h-5 ${
                      disease.severity === "high" 
                        ? "text-destructive" 
                        : "text-accent"
                    }`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {disease.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {disease.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diseases;