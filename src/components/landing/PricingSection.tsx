import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Crown, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const packages = [
  {
    name: "BASIC",
    nameHe: "בסיסי",
    price: "100",
    icon: Zap,
    popular: false,
    color: "from-slate-500 to-slate-600",
    features: [
      "6 תמונות תדמית",
      "שיפור תאורה וצבע",
      "רקע נקי / מודרני",
      "מסירה תוך 24 שעות",
    ],
  },
  {
    name: "STANDARD",
    nameHe: "מומלץ",
    price: "199",
    icon: Star,
    popular: true,
    color: "from-gold to-gold-dark",
    features: [
      "12 תמונות תדמית",
      "מגוון זוויות ופוזות",
      "רקעים שונים",
      "שיפור סטייל ב-AI",
      "מסירה תוך 24 שעות",
    ],
  },
  {
    name: "PREMIUM",
    nameHe: "פרימיום",
    price: "299",
    icon: Crown,
    popular: false,
    color: "from-navy to-navy-dark",
    features: [
      "25 תמונות תדמית",
      "מגוון סטיילים",
      "התאמה לכל הפלטפורמות",
      "תיקונים ללא הגבלה",
      "מסירה תוך 12 שעות",
    ],
  },
];

const PricingSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const scrollToContact = () => {
    document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} id="pricing" className="py-16 sm:py-20 md:py-32 px-4 bg-gradient-to-b from-card to-cream relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] sm:h-[500px] md:h-[600px] bg-gradient-to-b from-gold/10 via-gold/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 md:mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs sm:text-sm font-semibold mb-4 sm:mb-5"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            חבילות ומחירים
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-3 sm:mb-4 px-2">
            בחרו את <span className="text-gradient-gold">החבילה</span> שלכם
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-xl mx-auto px-4">
            כל החבילות כוללות תמונות באיכות גבוהה
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-4 md:gap-5 lg:gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className={`relative ${pkg.popular ? "sm:-mt-4 sm:mb-[-16px] order-first sm:order-none" : ""}`}
            >
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`relative h-full flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden ${
                  pkg.popular
                    ? "bg-gradient-navy text-primary-foreground"
                    : "bg-card text-foreground border border-border/50"
                }`}
                style={{
                  boxShadow: pkg.popular
                    ? "0 30px 80px -20px rgba(30, 41, 59, 0.35), 0 15px 40px -15px rgba(30, 41, 59, 0.25)"
                    : "0 10px 40px -10px rgba(0, 0, 0, 0.08)",
                }}
              >
                {/* Popular badge */}
                {pkg.popular && (
                  <motion.div 
                    className="absolute -top-px left-0 right-0 flex justify-center"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="flex items-center gap-1.5 bg-gradient-gold text-foreground px-4 sm:px-6 py-2 sm:py-2.5 rounded-b-lg sm:rounded-b-xl text-xs sm:text-sm font-bold shadow-gold">
                      <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                      הכי פופולרי
                    </div>
                  </motion.div>
                )}

                <div className="p-5 sm:p-6 md:p-8 flex flex-col h-full pt-8 sm:pt-10 md:pt-12">
                  {/* Header */}
                  <div className="text-center mb-5 sm:mb-6 md:mb-8">
                    <div className={`inline-flex w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl items-center justify-center mb-3 sm:mb-4 bg-gradient-to-br ${pkg.color} shadow-lg`}>
                      <pkg.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <div className="mb-1">
                      <span className={`text-[10px] sm:text-xs font-semibold uppercase tracking-wider ${pkg.popular ? "text-gold" : "text-muted-foreground"}`}>
                        {pkg.name}
                      </span>
                    </div>
                    <h3 className={`text-lg sm:text-xl font-bold mb-3 sm:mb-4 ${pkg.popular ? "text-primary-foreground" : "text-foreground"}`}>
                      {pkg.nameHe}
                    </h3>
                    <div className="flex items-baseline justify-center gap-0.5 sm:gap-1">
                      <span className="text-4xl sm:text-5xl md:text-6xl font-black">{pkg.price}</span>
                      <span className={`text-lg sm:text-xl font-medium ${pkg.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>₪</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="flex-1 space-y-2.5 sm:space-y-3 md:space-y-4 mb-5 sm:mb-6 md:mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        className="flex items-start gap-2 sm:gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 + featureIndex * 0.05 }}
                      >
                        <div className={`flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center mt-0.5 ${
                          pkg.popular ? "bg-gold/20" : "bg-gold/10"
                        }`}>
                          <Check className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
                        </div>
                        <span className={`text-xs sm:text-sm leading-relaxed ${pkg.popular ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Button */}
                  <Button
                    variant={pkg.popular ? "gold" : "goldOutline"}
                    size="lg"
                    onClick={scrollToContact}
                    className="w-full text-sm sm:text-base"
                  >
                    {pkg.popular ? "בחירת חבילה מומלצת" : "בחירת חבילה"}
                  </Button>
                </div>

                {/* Glow effect for popular */}
                {pkg.popular && (
                  <motion.div 
                    className="absolute -inset-1 bg-gradient-to-b from-gold/30 via-transparent to-gold/30 rounded-2xl sm:rounded-3xl blur-xl -z-10"
                    animate={{ opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-8 sm:mt-12"
        >
          <p className="text-muted-foreground text-xs sm:text-sm">
            💳 תשלום מאובטח • ✨ שביעות רצון מובטחת • 🚀 אספקה מהירה
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;