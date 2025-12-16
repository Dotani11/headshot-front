import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      // Show after scrolling past first section
      setIsVisible(scrollPosition > windowHeight * 0.5 && !isDismissed);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const handleWhatsApp = () => {
    window.open("https://wa.me/972500000000?text=היי, אני מעוניין/ת בתמונות תדמית", "_blank");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-50"
        >
          <div className="relative flex items-center gap-3 p-3 sm:p-4 bg-gradient-to-r from-navy to-navy-dark rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] border border-white/10">
            {/* Dismiss button */}
            <button
              onClick={() => setIsDismissed(true)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-3 h-3" />
            </button>

            <div className="hidden sm:block">
              <p className="text-white text-sm font-bold">מוכן לשדרג את התדמית?</p>
              <p className="text-white/60 text-xs">החל מ-100₪ בלבד</p>
            </div>

            <Button
              variant="gold"
              size="sm"
              onClick={handleWhatsApp}
              className="flex-shrink-0 gap-2 text-sm px-4 py-2 sm:py-2.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>הזמינו עכשיו</span>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
