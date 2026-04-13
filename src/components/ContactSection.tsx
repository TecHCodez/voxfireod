import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 noise-overlay">
      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <motion.p
          className="font-heading text-xs tracking-[0.4em] text-muted-foreground uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
        >
          // Contact Us
        </motion.p>
        <motion.h2
          className="font-heading text-4xl md:text-6xl font-bold tracking-tighter text-foreground uppercase mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>

        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-start gap-4">
            <Mail size={18} className="text-muted-foreground mt-1 shrink-0" />
            <div>
              <p className="font-body text-xs tracking-[0.2em] text-muted-foreground uppercase mb-1">Email</p>
              <p className="font-body text-foreground">hello@voxfireodisha.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone size={18} className="text-muted-foreground mt-1 shrink-0" />
            <div>
              <p className="font-body text-xs tracking-[0.2em] text-muted-foreground uppercase mb-1">Phone</p>
              <p className="font-body text-foreground">+91 98765 43210</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin size={18} className="text-muted-foreground mt-1 shrink-0" />
            <div>
              <p className="font-body text-xs tracking-[0.2em] text-muted-foreground uppercase mb-1">Location</p>
              <p className="font-body text-foreground">Bhubaneswar, Odisha</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
