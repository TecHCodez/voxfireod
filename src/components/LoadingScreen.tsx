import { motion, AnimatePresence } from "framer-motion";
import voxfireLogo from "@/assets/voxfire-logo.jpg";

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background noise-overlay"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="relative z-10 flex flex-col items-center">
            <motion.img
              src={voxfireLogo}
              alt="VoxFire"
              className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-none mb-6"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.div className="overflow-hidden">
              <motion.h1
                className="font-heading text-6xl md:text-8xl font-bold tracking-tighter text-foreground uppercase"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                VOXFIRE
              </motion.h1>
            </motion.div>
            <motion.div className="overflow-hidden">
              <motion.p
                className="font-heading text-lg md:text-xl tracking-[0.4em] text-muted-foreground uppercase mt-2"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                ODISHA
              </motion.p>
            </motion.div>
            <motion.div
              className="mt-8 h-[2px] bg-foreground"
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
