import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, PlayCircle } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Start Protecting Your Coffee Plants{" "}
            <span className="text-primary">Today</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join thousands of farmers who are already using KAPPI to increase their crop yield
            and protect their livelihoods
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              variant="hero"
              size="hero"
              className="group"
              onClick={() => {
                // Scroll to download section
                window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
              }}
            >
              <Download className="w-5 h-5" />
              Download Now
            </Button>

            <Button
              variant="heroSecondary"
              size="hero"
              className="group"
              onClick={() => {
                // Request demo functionality
                alert("Demo request feature coming soon!");
              }}
            >
              <PlayCircle className="w-5 h-5" />
              Request a Demo
            </Button>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto pt-12 border-t border-border/50"
          >
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">10k+</p>
              <p className="text-sm text-muted-foreground">Active Users</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</p>
              <p className="text-sm text-muted-foreground">Accuracy Rate</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">5+</p>
              <p className="text-sm text-muted-foreground">Diseases Detected</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</p>
              <p className="text-sm text-muted-foreground">Support Available</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;