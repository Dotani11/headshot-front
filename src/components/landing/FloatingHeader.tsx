import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const FloatingHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isScrolled && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 py-2 sm:py-3"
        >
          <div className="container max-w-5xl mx-auto">
            <div className="flex items-center justify-between gap-3 sm:gap-4 px-3 sm:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl glass-strong shadow-card">
              {/* Logo/Brand */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
                </div>
                <span className="font-bold text-foreground text-sm sm:text-base hidden xs:block">AI Headshots</span>
              </div>

              {/* CTA */}
              <Button
                variant="gold"
                size="sm"
                onClick={scrollToPricing}
                className="text-xs sm:text-sm px-3 sm:px-4"
              >
                לחבילות והזמנה
              </Button>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default FloatingHeader;