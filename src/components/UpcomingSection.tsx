import { motion } from "framer-motion";
import { Calendar, MapPin, Music } from "lucide-react";

const UpcomingSection = () => {
  return (
    <section id="upcoming" className="py-24 md:py-32 noise-overlay">
      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <motion.p
          className="font-heading text-xs tracking-[0.4em] text-muted-foreground uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
        >
          // Upcoming
        </motion.p>
        <motion.h2
          className="font-heading text-4xl md:text-6xl font-bold tracking-tighter text-foreground uppercase mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Next Event
        </motion.h2>

        <motion.div
          className="border border-border bg-card p-8 md:p-12 rounded-none sharp-shadow relative overflow-hidden group"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ scale: 1.01 }}
        >
          {/* Diagonal accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-foreground/[0.03] -skew-x-12 translate-x-8 -translate-y-4" />

          <div className="relative z-10">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center gap-2 border border-border px-3 py-1 font-body text-xs tracking-widest text-muted-foreground uppercase">
                <Music size={12} />
                Live Concert
              </span>
            </div>

            <h3 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground uppercase leading-[0.9]">
              11 JULY
              <br />
              <span className="text-muted-foreground">2026</span>
            </h3>

            <div className="mt-8 flex flex-col sm:flex-row gap-6 text-muted-foreground">
              <div className="flex items-center gap-2 font-body text-sm tracking-wide">
                <Calendar size={14} />
                <span>Saturday, 11 July 2026</span>
              </div>
              <div className="flex items-center gap-2 font-body text-sm tracking-wide">
                <MapPin size={14} />
                <span>Bhubaneswar, Odisha</span>
              </div>
            </div>

            <motion.div
              className="mt-10 h-[1px] bg-border group-hover:bg-foreground/30 transition-colors duration-300"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a
                href="https://bookmyshow.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-foreground text-background font-heading text-sm tracking-widest uppercase px-8 py-4 hover:bg-foreground/90 transition-colors"
              >
                Buy Tickets
              </a>
              <p className="font-body text-sm text-muted-foreground max-w-lg">
                Details coming soon. Stay tuned for the biggest live concert experience in Odisha. Follow our <a href="https://instagram.com/voxfire.od" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80 transition-colors">Instagram Page</a> for updates
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UpcomingSection;
