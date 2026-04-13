import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollToUpcoming = () => {
    document.querySelector("#upcoming")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
      {/* Directional streaks */}
      <div className="absolute inset-0 z-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-foreground/[0.03]"
            style={{
              width: `${60 + i * 20}%`,
              height: "1px",
              top: `${10 + i * 11}%`,
              left: "-10%",
              transform: `rotate(${-5 + i * 1.5}deg)`,
            }}
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 1.6 + i * 0.1 }}
          />
        ))}
        {/* Starburst accent */}
        <motion.div
          className="absolute w-32 h-32 md:w-48 md:h-48 right-[15%] top-[20%]"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.06, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          <div className="w-full h-[1px] bg-foreground absolute top-1/2 left-0" />
          <div className="w-[1px] h-full bg-foreground absolute left-1/2 top-0" />
          <div className="w-full h-[1px] bg-foreground absolute top-1/2 left-0 rotate-45" />
          <div className="w-full h-[1px] bg-foreground absolute top-1/2 left-0 -rotate-45" />
        </motion.div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="overflow-hidden">
          <motion.h1
            className="font-heading text-[clamp(3rem,12vw,10rem)] font-bold leading-[0.9] tracking-tighter text-foreground uppercase"
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
          >
            VOXFIRE
            <br />
            ODISHA
          </motion.h1>
        </div>

        <motion.p
          className="font-body text-sm md:text-base tracking-[0.3em] text-muted-foreground uppercase mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          Live Entertainment. Elevated.
        </motion.p>

        <motion.button
          onClick={scrollToUpcoming}
          className="mt-10 px-8 py-3 border border-foreground text-foreground font-heading text-sm uppercase tracking-widest rounded-none sharp-shadow hover:bg-foreground hover:text-background hover:glow-hover transition-all duration-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.3 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          View Upcoming Events
        </motion.button>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
