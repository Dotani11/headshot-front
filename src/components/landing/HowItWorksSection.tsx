import { motion } from "framer-motion";
import { Upload, Wand2, Images, MessageSquare, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "מעלים תמונות",
    subtitle: "מהטלפון",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Wand2,
    number: "02",
    title: "AI עובד",
    subtitle: "משדרג ומייפה",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Images,
    number: "03",
    title: "מקבלים תוצאות",
    subtitle: "סט מקצועי",
    color: "from-gold to-gold-dark",
  },
  {
    icon: MessageSquare,
    number: "04",
    title: "תיקונים",
    subtitle: "לפי בקשה",
    color: "from-emerald-500 to-emerald-600",
  },
];

const HowItWorksSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-32 px-4 bg-gradient-to-b from-background to-card relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-l from-transparent via-gold/30 to-transparent hidden md:block" />
      </div>

      <div className="container max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 md:mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-navy/10 border border-navy/20 text-navy text-xs sm:text-sm font-semibold mb-4 sm:mb-5"
          >
            <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            תהליך פשוט
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-3 sm:mb-4 px-2">
            איך זה <span className="text-gradient-navy">עובד</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-xl mx-auto px-4">
            4 צעדים פשוטים לתמונות תדמית מקצועיות
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line - Desktop */}
          <div className="hidden md:block absolute top-[72px] left-[10%] right-[10%] z-0">
            <motion.div 
              className="h-1.5 bg-gradient-to-l from-gold via-gold/50 to-gold rounded-full"
              initial={{ scaleX: 0 }}
              animate={isVisible ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.5 }}
              style={{ transformOrigin: "right" }}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="relative"
              >
                <div className="group flex flex-col items-center text-center">
                  {/* Icon container */}
                  <div className="relative mb-4 sm:mb-6">
                    <motion.div 
                      className={`relative z-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl`}
                      whileHover={{ scale: 1.08, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <step.icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
                    </motion.div>
                    {/* Glow */}
                    <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${step.color} opacity-30 blur-xl -z-10 group-hover:opacity-50 transition-opacity duration-300`} />
                    {/* Number badge */}
                    <motion.div 
                      className="absolute -top-1.5 sm:-top-2 -right-1.5 sm:-right-2 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-lg sm:rounded-xl bg-background border-2 border-gold flex items-center justify-center shadow-lg"
                      initial={{ scale: 0 }}
                      animate={isVisible ? { scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    >
                      <span className="text-[10px] sm:text-xs font-black text-gold">{step.number}</span>
                    </motion.div>
                  </div>
                  
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground mb-0.5 sm:mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {step.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;