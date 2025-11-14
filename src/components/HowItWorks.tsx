import { motion } from "framer-motion";
import { Camera, Brain, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "Capture",
    description: "Take a photo of affected plant parts using your smartphone camera",
    step: "01",
  },
  {
    icon: Brain,
    title: "Analyze",
    description: "Our AI analyzes the image to detect diseases and their severity",
    step: "02",
  },
  {
    icon: CheckCircle,
    title: "Act",
    description: "Receive immediate treatment recommendations to save your crop",
    step: "03",
  },
];

const HowItWorks = () => {
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
            Simple Steps to Protect Your{" "}
            <span className="text-primary">Coffee Plants</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting started with KAPPI is easy. Just three simple steps to healthier crops.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Lines for Desktop */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-soft transition-all duration-300 hover:-translate-y-2 relative z-10">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-soft">
                  {step.step}
                </div>

                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-center">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;