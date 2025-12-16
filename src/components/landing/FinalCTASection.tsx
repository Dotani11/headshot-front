import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, MessageCircle, Shield, Clock, CheckCircle2, Users, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect } from "react";

const FinalCTASection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 47, seconds: 33 });

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const trustBadges = [
    { icon: Shield, text: "תשלום מאובטח" },
    { icon: Clock, text: "אספקה ב-24 שעות" },
    { icon: CheckCircle2, text: "החזר כספי מלא" },
  ];

  return (
    <section ref={ref} id="final-cta" className="relative py-16 sm:py-24 md:py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-navy to-navy-dark" />
      
      {/* Animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-gold/15 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-gold/10 rounded-full blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Urgency - Countdown */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-8"
          >
            <div className="bg-red-500/20 border border-red-500/40 rounded-2xl px-6 py-4">
              <p className="text-red-400 text-sm font-bold mb-2">⏰ המבצע נגמר בעוד:</p>
              <div className="flex items-center justify-center gap-3">
                {[
                  { value: timeLeft.hours, label: "שעות" },
                  { value: timeLeft.minutes, label: "דקות" },
                  { value: timeLeft.seconds, label: "שניות" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span className="text-2xl sm:text-3xl font-black text-white bg-white/10 rounded-lg px-3 py-1 min-w-[50px]">
                      {String(item.value).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] text-white/60 mt-1">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-6"
          >
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <Users className="w-4 h-4 text-gold" />
              <span>500+ מתווכים כבר השתמשו</span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
              <span className="text-white/80 text-sm mr-1">4.9</span>
            </div>
          </motion.div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6">
            תמונה אחת טובה
            <br />
            <span className="text-gradient-gold">= לקוח אחד נוסף</span>
          </h2>

          <div className="space-y-3 text-lg text-white/80 mb-8">
            <p>לקוח אחד — זה כבר אלפי שקלים.</p>
            <div className="flex items-center justify-center gap-3">
              <span className="line-through text-white/50">₪350</span>
              <span className="text-3xl font-black text-gold">₪100 בלבד</span>
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">71% הנחה</span>
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-8"
          >
            <Button
              variant="premium"
              size="xl"
              className="group text-base sm:text-lg px-10 py-7 w-full sm:w-auto max-w-md shadow-[0_0_50px_rgba(212,175,55,0.4)] hover:shadow-[0_0_60px_rgba(212,175,55,0.5)]"
              onClick={() => window.open("https://wa.me/972500000000?text=היי, אני מעוניין/ת בתמונות תדמית", "_blank")}
            >
              <MessageCircle className="w-5 h-5" />
              <span>כן, אני רוצה תמונות תדמית!</span>
              <Sparkles className="w-5 h-5" />
            </Button>
            
            <p className="text-white/50 text-sm mt-3">
              לחיצה → מעבר לווטסאפ להזמנה מיידית
            </p>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-6 text-white/70"
          >
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <badge.icon className="w-4 h-4 text-green-400" />
                <span>{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
