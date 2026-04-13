import { Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 noise-overlay">
      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-heading text-xl font-bold tracking-tighter text-foreground uppercase">VOXFIRE</p>
            <p className="font-body text-xs text-muted-foreground mt-1">
              © {new Date().getFullYear()} VoxFire Odisha. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            {[Instagram, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="Social media"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
