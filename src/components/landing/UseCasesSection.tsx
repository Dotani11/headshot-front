import { motion } from "framer-motion";
import { MessageCircle, Mail, Building, Linkedin, Instagram, CreditCard, Globe, Megaphone, Target } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const useCases = [
  { icon: MessageCircle, text: "ווצאפ עסקי", color: "from-green-500 to-green-600" },
  { icon: Mail, text: "חתימת מייל", color: "from-blue-500 to-blue-600" },
  { icon: Building, text: "פלטפורמות נכסים", color: "from-slate-500 to-slate-600" },
  { icon: Linkedin, text: "לינקדאין", color: "from-sky-600 to-sky-700" },
  { icon: Instagram, text: "אינסטגרם", color: "from-pink-500 to-rose-500" },
  { icon: CreditCard, text: "כרטיס ביקור", color: "from-violet-500 to-violet-600" },
  { icon: Globe, text: "דף נחיתה", color: "from-teal-500 to-teal-600" },
  { icon: Megaphone, text: "מודעות", color: "from-orange-500 to-orange-600" },
];

const UseCasesSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-32 px-4 bg-gradient-to-b from-card to-background relative overflow-hidden">
      <div className="container max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-navy/10 border border-navy/20 text-navy text-xs sm:text-sm font-semibold mb-4 sm:mb-5"
          >
            <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            שימושים
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-3 sm:mb-4 px-2">
            איפה <span className="text-gradient-navy">משתמשים</span> בתמונות
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-xl mx-auto px-4">
            תמונה אחת טובה עובדת בכל הפלטפורמות
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {useCases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.07 }}
            >
              <motion.div 
                className="group relative p-4 sm:p-5 md:p-6 bg-background rounded-xl sm:rounded-2xl border border-border/50 overflow-hidden text-center"
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                style={{
                  boxShadow: "0 8px 30px -10px rgba(0, 0, 0, 0.08)",
                }}
              >
                {/* Hover gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10 flex flex-col items-center gap-2.5 sm:gap-3 md:gap-4">
                  <motion.div 
                    className={`w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                  </motion.div>
                  <span className="text-xs sm:text-sm md:text-base font-bold text-foreground">
                    {item.text}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;