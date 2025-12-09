import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
// Import local images
import kitAdrianImg from "@/assets/kit-adrian.jpg";
import francisLloydImg from "@/assets/francis-lloyd.jpg";

const developers = [
  {
    name: "Jenny Babe C. Arac",
    role: "Project Manager & Backend Developer",
    responsibilities: "API development, database management, and project coordination",
    image: "https://media1.tenor.com/m/g9UQqenQHRcAAAAC/kween-yasmin-yasmin-asistido.gif",
  },
  {
    name: "Kit Adrian B. Diocares",
    role: "Mobile App Developer & ML Engineer",
    responsibilities: "React Native development and machine learning model implementation",
    image: kitAdrianImg,
  },
  {
    name: "Francis Lloyd G. Catog",
    role: "Front Developer & Quality Assurance",
    responsibilities: "Frontend development, UI/UX design, and quality assurance testing",
    image: francisLloydImg,
  },
];

const adviser = {
  name: "Dr. Lanie Laureano",
  title: "Associate Professor of Information Technology",
  role: "Providing technical guidance and industry expertise for the KAPPI project development",
  image: "https://media.licdn.com/dms/image/v2/D5603AQFYzyVmVXZ9nQ/profile-displayphoto-crop_800_800/B56ZrAzJbdHAAI-/0/1764171225690?e=1766016000&v=beta&t=cyW-1Armr4KFu0dHgCES3eSoXIMTQEUgMylOXwM-LpI",
};

const Team = () => {
  return (
    <section id="team" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Developers Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Meet Our <span className="text-primary">Development Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The talented developers behind the KAPPI application
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {developers.map((dev, index) => (
            <motion.div
              key={dev.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-soft transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all" />
                  <img
                    src={dev.image}
                    alt={dev.name}
                    className="relative w-full h-full rounded-full border-4 border-primary/20 group-hover:border-primary/40 transition-colors object-cover"
                  />
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {dev.name}
                  </h3>
                  <p className="text-primary font-semibold mb-3">{dev.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {dev.responsibilities}
                  </p>

                  <div className="flex justify-center gap-3">
                    <a
                      href="#"
                      className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Adviser Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="text-primary">Capstone</span> Adviser
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Guiding our project with expertise and experience
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl" />
                <img
                  src={adviser.image}
                  alt={adviser.name}
                  className="relative w-40 h-40 rounded-full border-4 border-accent/30 object-cover"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  {adviser.name}
                </h3>
                <p className="text-accent font-semibold mb-3">{adviser.title}</p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {adviser.role}
                </p>

                <div className="flex justify-center md:justify-start gap-3">
                  <a
                    href="https://www.linkedin.com/in/lanie-laureano-4a1401264/"
                    className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;