import { motion } from "framer-motion";
import { Camera, Scan, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "Capture",
    description: "Take a clear photo of the affected leaf or fruit using your smartphone's camera.",
    step: 1,
  },
  {
    icon: Scan,
    title: "Analyze",
    description: "Our AI model instantly scans the visual patterns to identify disease markers.",
    step: 2,
  },
  {
    icon: CheckCircle2,
    title: "Resolve",
    description: "Get immediate treatment recommendations and prevention tips to save your crop.",
    step: 3,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 md:py-32 bg-zinc-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
            Simple Steps to <span className="text-primary">Healthier Crops</span>
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            No complex equipment needed. Just you, your phone, and our intelligent diagnostic engine working together in seconds.
          </p>
        </motion.div>

        <div className="relative">
          {/* Process Flow Line */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] border-t-2 border-dashed border-zinc-300 -z-10" />

          <div className="grid md:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group flex flex-col items-center"
                >
                  {/* Floating Squircle Card */}
                  <div className="relative">
                    {/* Badge Step Number */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center text-sm font-bold border-4 border-zinc-50 z-10">
                      {step.step}
                    </div>

                    {/* Icon Container */}
                    <div className="w-24 h-24 rounded-3xl bg-white border-2 border-zinc-200 flex items-center justify-center transition-all duration-300 group-hover:border-primary group-hover:shadow-md">
                      <Icon className="w-10 h-10 text-zinc-700" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-zinc-900 mt-6 mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-500 text-center leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;