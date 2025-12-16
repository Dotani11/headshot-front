import { motion } from "framer-motion";
import { Star, Quote, MessageSquare, BadgeCheck, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "יוסי כהן",
    role: "מתווך בכיר, RE/MAX תל אביב",
    content: "מאז שהחלפתי את התמונה, קיבלתי 40% יותר פניות. ההשקעה הכי משתלמת שעשיתי.",
    rating: 5,
    initials: "יכ",
    color: "from-blue-500 to-blue-600",
    metric: "+40% פניות",
    verified: true,
  },
  {
    name: "מיכל לוי",
    role: "מתווכת, אנגלו סכסון רמת גן",
    content: "לא האמנתי שאפשר לקבל תוצאה כזו בלי צלם. נראה בדיוק כמו צילום סטודיו של 2,000 ש\"ח.",
    rating: 5,
    initials: "מל",
    color: "from-rose-500 to-rose-600",
    metric: "חסכתי 1,800₪",
    verified: true,
  },
  {
    name: "דני אברהם",
    role: "יועץ נדל\"ן, קולדוול בנקר ירושלים",
    content: "תוך יום קיבלתי 12 תמונות מושלמות. לקוחות שואלים אותי מי הצלם. ממליץ בחום!",
    rating: 5,
    initials: "דא",
    color: "from-emerald-500 to-emerald-600",
    metric: "תוך 24 שעות",
    verified: true,
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-28 px-4 bg-gradient-to-b from-cream to-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-navy/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          {/* Stats badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200 text-green-700 text-xs sm:text-sm font-bold mb-5"
          >
            <TrendingUp className="w-4 h-4" />
            <span>94% מהלקוחות מדווחים על עלייה בפניות</span>
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-foreground mb-4">
            מתווכים <span className="text-gradient-gold">מספרים</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
            הצטרפו למאות מתווכים שכבר שדרגו את התדמית וראו תוצאות
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <motion.div 
                className="relative h-full p-5 sm:p-6 bg-white rounded-2xl border border-border/50 overflow-hidden group"
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                style={{
                  boxShadow: "0 10px 40px -10px rgba(0, 0, 0, 0.1)",
                }}
              >
                {/* Metric badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gold/15 text-gold text-[11px] font-bold">
                    <TrendingUp className="w-3 h-3" />
                    {testimonial.metric}
                  </span>
                </div>

                {/* Quote icon */}
                <div className="flex justify-end mb-4">
                  <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center">
                    <Quote className="w-5 h-5 text-navy/30" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground leading-relaxed mb-6 text-sm sm:text-base font-medium">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${testimonial.color} flex items-center justify-center shadow-lg`}>
                    <span className="text-base font-bold text-white">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5">
                      <p className="font-bold text-foreground text-sm">{testimonial.name}</p>
                      {testimonial.verified && (
                        <BadgeCheck className="w-4 h-4 text-blue-500" />
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10"
        >
          <p className="text-muted-foreground text-sm">
            <span className="font-bold text-foreground">500+</span> מתווכים כבר השתמשו בשירות
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
