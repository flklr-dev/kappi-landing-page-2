import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-farmer.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-background overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
              Protect Your Coffee Crops with{" "}
              <span className="text-primary">AI-Powered</span> Disease Detection
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              KAPPI helps coffee farmers identify plant diseases early and take
              timely action to save their harvest
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                variant="hero"
                size="hero"
                className="group"
                onClick={() => {
                  // Scroll to download section or open app store
                  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
                }}
              >
                <Download className="w-5 h-5" />
                Download KAPPI App
              </Button>

              <Button
                variant="heroSecondary"
                size="hero"
                className="group"
                onClick={() => {
                  // Scroll to features section
                  const featuresSection = document.getElementById("features");
                  if (featuresSection) {
                    featuresSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Learn More
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap items-center gap-6 pt-6 border-t border-border/50"
            >
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">10k+</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Active Users</p>
                  <p className="text-xs text-muted-foreground">Coffee farmers worldwide</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent">98%</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Accuracy</p>
                  <p className="text-xs text-muted-foreground">Disease detection rate</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={heroImage}
                  alt="Coffee farmer using KAPPI app to detect plant diseases"
                  className="w-full h-auto object-cover"
                />
                
                {/* Overlay Gradient for better contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl shadow-elevated p-6 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Real-time Detection</p>
                    <p className="text-xs text-muted-foreground">Instant results in seconds</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;