import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

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
    image: "data:image/jpeg;base64,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",
  },
  {
    name: "Francis Lloyd G. Catog",
    role: "Front Developer & Quality Assurance",
    responsibilities: "Frontend development, UI/UX design, and quality assurance testing",
    image: "https://philnews.ph/wp-content/uploads/2019/03/ed-caluag.jpg",
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