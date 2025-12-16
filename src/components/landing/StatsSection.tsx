import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Users, Image, Clock, TrendingUp, Star } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "מתווכים", subLabel: "משתמשים בשירות" },
  { icon: Image, value: "5,000+", label: "תמונות", subLabel: "נוצרו החודש" },
  { icon: Clock, value: "24", label: "שעות", subLabel: "זמן אספקה" },
  { icon: Star, value: "4.9", label: "דירוג", subLabel: "מתוך 5 כוכבים" },
];

const StatsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section ref={ref} className="py-12 sm:py-16 px-4 bg-gradient-to-r from-navy-dark via-navy to-navy-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-gold/10 rounded-full blur-3xl" />
      
      <div className="container max-w-5xl mx-auto relative z-10">
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-8"
        >
          <span className="inline-flex items-center gap-2 text-white/70 text-sm">
            <TrendingUp className="w-4 h-4 text-green-400" />
            נתונים בזמן אמת
          </span>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div 
                className="inline-flex w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 items-center justify-center mb-3"
                whileHover={{ scale: 1.1 }}
              >
                <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 text-gold" />
              </motion.div>
              <motion.div 
                className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-1"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm font-bold text-gold">{stat.label}</div>
              <div className="text-xs text-white/50">{stat.subLabel}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
