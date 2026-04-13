import { motion } from "framer-motion";

const events = [
  { name: "Sonic Pulse", year: "2025", caption: "A high-energy electronic night with 5000+ attendees." },
  { name: "Echoes Live", year: "2025", caption: "An intimate acoustic concert under the open sky." },
  { name: "Bass Nation", year: "2024", caption: "Bhubaneswar's largest bass music festival." },
  { name: "Voltage", year: "2024", caption: "A multi-genre music showcase with national artists." },
];

const PreviousEventsSection = () => {
  return (
    <section id="previous-events" className="py-24 md:py-32 noise-overlay">
      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <motion.p
          className="font-heading text-xs tracking-[0.4em] text-muted-foreground uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
        >
          // Previous Events
        </motion.p>
        <motion.h2
          className="font-heading text-4xl md:text-6xl font-bold tracking-tighter text-foreground uppercase mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Past Shows
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {events.map((event, i) => (
            <motion.div
              key={event.name}
              className="bg-background group relative overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              {/* Image placeholder */}
              <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-heading text-6xl md:text-7xl font-bold text-foreground/[0.04] uppercase tracking-tighter">
                    {event.name}
                  </span>
                </div>

                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 z-20 bg-background/90 flex items-end p-6 md:p-8"
                  initial={{ y: "100%" }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="font-body text-sm text-secondary-foreground leading-relaxed">
                    {event.caption}
                  </p>
                </motion.div>
              </div>

              <div className="p-6 relative z-10">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground uppercase tracking-tight">
                    {event.name}
                  </h3>
                  <span className="font-heading text-sm text-muted-foreground">{event.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviousEventsSection;
