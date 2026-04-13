import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
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

          {/* Form */}
          <motion.form
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="font-body text-xs tracking-[0.2em] text-muted-foreground uppercase block mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-transparent border border-border px-4 py-3 font-body text-sm text-foreground rounded-none focus:outline-none focus:border-foreground transition-colors"
              />
            </div>
            <div>
              <label className="font-body text-xs tracking-[0.2em] text-muted-foreground uppercase block mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-transparent border border-border px-4 py-3 font-body text-sm text-foreground rounded-none focus:outline-none focus:border-foreground transition-colors"
              />
            </div>
            <div>
              <label className="font-body text-xs tracking-[0.2em] text-muted-foreground uppercase block mb-2">Message</label>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full bg-transparent border border-border px-4 py-3 font-body text-sm text-foreground rounded-none focus:outline-none focus:border-foreground transition-colors resize-none"
              />
            </div>
            <motion.button
              type="submit"
              className="px-8 py-3 border border-foreground text-foreground font-heading text-sm uppercase tracking-widest rounded-none sharp-shadow hover:bg-foreground hover:text-background transition-all duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
