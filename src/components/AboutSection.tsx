import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 noise-overlay">
      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-heading text-xs tracking-[0.4em] text-muted-foreground uppercase mb-4">
              // About Us
            </p>
            <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tighter text-foreground uppercase leading-[0.95]">
              Crafting
              <br />
              Experiences
            </h2>
          </motion.div>

          <motion.div
            className="border-l-2 border-foreground/20 pl-6 md:pl-10 mt-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-body text-lg md:text-xl text-secondary-foreground leading-relaxed max-w-2xl">
              VoxFire Odisha is an event management company focused on live entertainment,
              concerts, and large-scale experiences. Based in Bhubaneswar, we bring raw energy
              and premium production to every stage we build.
            </p>
          </motion.div>

          <motion.div
            className="mt-16 grid grid-cols-3 gap-px bg-border"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {[
              { num: "50+", label: "Events" },
              { num: "100K+", label: "Attendees" },
              { num: "2024", label: "Est." },
            ].map((stat) => (
              <div key={stat.label} className="bg-background p-6 md:p-8 text-center">
                <p className="font-heading text-3xl md:text-4xl font-bold text-foreground">{stat.num}</p>
                <p className="font-body text-xs tracking-[0.2em] text-muted-foreground uppercase mt-2">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
