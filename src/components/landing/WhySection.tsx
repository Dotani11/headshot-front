import { motion } from "framer-motion";
import { Eye, Heart, Sparkles, TrendingUp, Lightbulb } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
  {
    icon: Eye,
    title: "המראה שלך משפיע על כמות הפניות",
    description: "לקוחות בוחרים מתווכים שנראים מקצועיים",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Heart,
    title: "תמונה טובה יוצרת אמון מיידי",
    description: "הרושם הראשוני נוצר תוך שניות",
    color: "from-rose-500 to-rose-600",
  },
  {
    icon: Sparkles,
    title: "AI ברמת צילום מקצועי",
    description: "ללא צורך בצלם או סטודיו",
    color: "from-gold to-gold-dark",
  },
  {
    icon: TrendingUp,
    title: "עלות נמוכה — תוצאה גבוהה",
    description: "מחזיר את עצמו בלקוח הראשון",
    color: "from-emerald-500 to-emerald-600",
  },
];

const WhySection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-32 px-4 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-navy/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

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
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs sm:text-sm font-semibold mb-4 sm:mb-5"
          >
            <Lightbulb className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            למה זה עובד
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-3 sm:mb-4 px-2">
            תמונה מקצועית = יותר <span className="text-gradient-gold">פניות</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-xl mx-auto px-4">
            הלקוחות שלכם מחפשים מתווך שנראה מקצועי ואמין
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <motion.div 
                className="group relative h-full p-5 sm:p-6 md:p-8 bg-background rounded-xl sm:rounded-2xl border border-border/50 overflow-hidden"
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                style={{
                  boxShadow: "0 10px 40px -10px rgba(0, 0, 0, 0.08)",
                }}
              >
                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gold/20 to-navy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-[1px] rounded-xl sm:rounded-2xl bg-background" />
                
                <div className="relative z-10 flex items-start gap-3 sm:gap-4 md:gap-5">
                  <motion.div 
                    className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <benefit.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </motion.div>
                  <div className="pt-0.5 sm:pt-1">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-1 sm:mb-2 leading-snug">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;