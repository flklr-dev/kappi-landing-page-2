import { motion } from "framer-motion";

const technologies = [
  {
    name: "React Native",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Firebase",
    logo: "https://firebase.google.com/static/downloads/brand-guidelines/SVG/logo-logomark.svg",
  },
  {
    name: "Cloudinary",
    logo: "https://www.svgrepo.com/show/353566/cloudinary.svg",
  },
  {
    name: "AWS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "TensorFlow",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
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

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <p className="text-sm text-center text-muted-foreground font-medium">
                {tech.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;