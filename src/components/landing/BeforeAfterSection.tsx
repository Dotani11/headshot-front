import { motion } from "framer-motion";
import { Sparkles, ArrowLeftRight, Zap, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import beforeImage from "@/assets/before-1.jpg";
import afterImage from "@/assets/after-1.jpg";

const BeforeAfterSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  const transformations = [
    "תאורה מקצועית",
    "רקע נקי",
    "עריכת פנים",
    "סטייל מושלם",
  ];

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-28 px-4 bg-gradient-to-b from-background to-cream relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs sm:text-sm font-bold mb-5"
          >
            <Zap className="w-4 h-4" />
            טרנספורמציה מיידית
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-foreground mb-4">
            ראה את <span className="text-gradient-gold">ההבדל</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
            מתמונה רגילה מהטלפון לתמונת תדמית מקצועית — באותו יום
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Images comparison */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <motion.div 
                className="relative w-44 h-56 sm:w-56 sm:h-72 md:w-64 md:h-80 rounded-2xl overflow-hidden border-4 border-muted"
                whileHover={{ scale: 1.02 }}
                style={{ boxShadow: "0 20px 50px -15px rgba(0, 0, 0, 0.15)" }}
              >
                <img src={beforeImage} alt="לפני - תמונה רגילה" className="w-full h-full object-cover grayscale-[30%]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-flex items-center gap-2 px-3 py-2 bg-white/90 backdrop-blur-sm rounded-lg text-xs font-bold text-muted-foreground">
                    📱 תמונה מהטלפון
                  </span>
                </div>
              </motion.div>
              <div className="absolute -top-3 right-4 px-3 py-1 bg-muted rounded-lg text-xs font-bold text-muted-foreground">
                לפני
              </div>
            </motion.div>

            {/* Arrow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col items-center gap-2"
            >
              <motion.div 
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-lg"
                animate={{ 
                  boxShadow: [
                    "0 10px 40px -10px rgba(212,175,55,0.4)",
                    "0 20px 60px -15px rgba(212,175,55,0.6)",
                    "0 10px 40px -10px rgba(212,175,55,0.4)",
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-8 h-8 text-navy-dark" />
                </motion.div>
              </motion.div>
              <span className="text-sm font-bold text-gold">AI Magic</span>
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="relative"
            >
              <motion.div 
                className="absolute -inset-3 bg-gradient-to-r from-gold/30 via-gold/20 to-gold/30 rounded-2xl blur-xl"
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div 
                className="relative w-44 h-56 sm:w-56 sm:h-72 md:w-64 md:h-80 rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 rounded-2xl p-[3px] bg-gradient-to-b from-gold-light via-gold to-gold-dark">
                  <div className="w-full h-full rounded-xl overflow-hidden">
                    <img src={afterImage} alt="אחרי - תמונת תדמית" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="absolute inset-[3px] bg-gradient-to-t from-navy/40 to-transparent rounded-xl pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-flex items-center gap-2 px-3 py-2 bg-gradient-gold rounded-lg text-xs font-bold text-navy-dark shadow-lg">
                    ✨ תמונת תדמית מקצועית
                  </span>
                </div>
              </motion.div>
              <div className="absolute -top-3 right-4 px-3 py-1 bg-gradient-gold rounded-lg text-xs font-bold text-navy-dark shadow-lg">
                אחרי
              </div>
            </motion.div>
          </div>

          {/* Features list */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col gap-4 mt-8 lg:mt-0"
          >
            <h3 className="text-lg sm:text-xl font-bold text-foreground text-center lg:text-right mb-2">
              מה כולל השדרוג?
            </h3>
            {transformations.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-border/50 shadow-sm"
              >
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{item}</span>
              </motion.div>
            ))}
            
            <Button 
              variant="gold" 
              size="lg" 
              onClick={scrollToPricing}
              className="mt-4 w-full"
            >
              <Sparkles className="w-4 h-4" />
              אני רוצה גם!
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
