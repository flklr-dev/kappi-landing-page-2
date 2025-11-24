import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";

const Hero = () => {
  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Team", href: "#team" },
    { name: "Terms & Conditions", href: "/terms-and-conditions" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col bg-white overflow-hidden">
      {/* Dot Pattern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
      
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 py-6 px-6 md:px-12 lg:px-24">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-foreground" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>KAPPI</div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <Button variant="ghost" className="md:hidden text-foreground">
            Menu
          </Button>
        </div>
      </header>
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

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 flex-grow flex items-center justify-center">
        <div className="max-w-3xl mx-auto text-center">
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 pt-16"
          >
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
              Protect Your Coffee with<br />
              <span className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">AI Precision.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              KAPPI helps coffee farmers identify plant diseases early and take
              timely action to save their harvest
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;