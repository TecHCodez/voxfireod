import { Instagram } from "lucide-react";
import voxfireLogo from "@/assets/voxfire-logo.jpg";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 noise-overlay">
      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3">
              <img src={voxfireLogo} alt="VoxFire" className="h-8 w-8 object-cover rounded-none" />
              <p className="font-heading text-xl font-bold tracking-tighter text-foreground uppercase">VOXFIRE</p>
            </div>
            <p className="font-body text-xs text-muted-foreground mt-1">
              © {new Date().getFullYear()} VoxFire Odisha. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/voxfire.od"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
