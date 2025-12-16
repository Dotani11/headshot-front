import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, CheckCircle2, Users, Clock, Shield, Star, Zap } from "lucide-react";
import heroAgent1 from "@/assets/hero-agent-1.jpg";
import heroAgent2 from "@/assets/hero-agent-2.jpg";
import heroAgent3 from "@/assets/hero-agent-3.jpg";

const HeroSection = () => {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  const benefits = [
    { icon: Clock, text: "תוך 24 שעות" },
    { icon: Shield, text: "100% שביעות רצון" },
    { icon: Zap, text: "ללא צילום פיזי" },
  ];

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden px-4 py-8 sm:py-12 md:py-16">
      {/* Premium animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light">
        {/* Animated gradient mesh */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-30"
          style={{
            background: "radial-gradient(ellipse at 30% 20%, rgba(212,175,55,0.4) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(212,175,55,0.2) 0%, transparent 50%)"
          }}
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container relative z-10 flex flex-col items-center text-center max-w-6xl mx-auto">
        {/* Live indicator + Social proof */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 mb-6 sm:mb-8"
        >
          {/* Live indicator */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-medium text-white/90">12 לקוחות הזמינו היום</span>
          </div>
          
          {/* Rating */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-xs sm:text-sm font-medium text-white/90">4.9 (127 ביקורות)</span>
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 sm:mb-8"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-4 px-2">
            תמונת תדמית מקצועית
            <br />
            <span className="relative inline-block">
              <span className="text-gradient-gold">ב-24 שעות</span>
              <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-gold/0 via-gold to-gold/0"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            שלח תמונות מהטלפון ← קבל תמונות תדמית ברמה של צילום סטודיו מקצועי
          </p>
        </motion.div>

        {/* Images showcase - More dramatic */}
        <motion.div 
          className="relative flex items-center justify-center mb-8 sm:mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Glow behind images */}
          <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full scale-150" />
          
          <div className="relative flex items-end justify-center gap-2 sm:gap-4 md:gap-6">
            {/* Left image */}
            <motion.div 
              className="relative w-24 h-32 sm:w-32 sm:h-44 md:w-40 md:h-56 rounded-xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: -50, rotate: -15 }}
              animate={{ opacity: 1, x: 0, rotate: -8 }}
              transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
              whileHover={{ scale: 1.05, rotate: -4, y: -10 }}
            >
              <img src={heroAgent1} alt="תמונת תדמית מתווך" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>
            
            {/* Center image - Hero */}
            <motion.div 
              className="relative w-32 h-44 sm:w-44 sm:h-60 md:w-56 md:h-80 z-10"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              {/* Premium glow */}
              <motion.div 
                className="absolute -inset-3 bg-gradient-to-b from-gold via-gold/50 to-gold rounded-2xl blur-lg"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              {/* Golden frame */}
              <div className="absolute inset-0 rounded-xl p-[3px] bg-gradient-to-b from-gold-light via-gold to-gold-dark shadow-2xl">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <img src={heroAgent2} alt="תמונת תדמית מתווכת" className="w-full h-full object-cover" />
                </div>
              </div>
              {/* Badge */}
              <motion.div 
                className="absolute -top-3 -right-3 bg-gold text-navy-dark text-[10px] sm:text-xs font-bold px-2 py-1 rounded-full shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
              >
                ✨ AI מתקדם
              </motion.div>
            </motion.div>
            
            {/* Right image */}
            <motion.div 
              className="relative w-24 h-32 sm:w-32 sm:h-44 md:w-40 md:h-56 rounded-xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 50, rotate: 15 }}
              animate={{ opacity: 1, x: 0, rotate: 8 }}
              transition={{ duration: 0.8, delay: 0.7, type: "spring" }}
              whileHover={{ scale: 1.05, rotate: 4, y: -10 }}
            >
              <img src={heroAgent3} alt="תמונת תדמית מתווך" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.text}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white"
            >
              <benefit.icon className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium">{benefit.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col items-center gap-4 w-full px-4"
        >
          {/* Price anchor */}
          <div className="flex items-center gap-3 text-white/80">
            <span className="text-sm line-through text-white/50">₪350</span>
            <span className="text-2xl sm:text-3xl font-black text-gold">₪100</span>
            <span className="px-2 py-0.5 rounded bg-red-500/90 text-white text-xs font-bold animate-pulse">71% הנחה</span>
          </div>
          
          <Button
            variant="premium"
            size="xl"
            onClick={scrollToPricing}
            className="group text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-7 w-full sm:w-auto max-w-md shadow-[0_0_40px_rgba(212,175,55,0.4)]"
          >
            <Sparkles className="w-5 h-5" />
            <span>אני רוצה תמונות תדמית עכשיו</span>
          </Button>
          
          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-4 text-white/60 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-green-400" />
              <span>תשלום מאובטח</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-gold" />
              <span>500+ לקוחות מרוצים</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-gold" />
              <span>החזר כספי מלא</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
