import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    question: "זה נראה אמיתי?",
    answer: "בהחלט! התמונות טבעיות לחלוטין, לא מצוירות. AI מתקדם יוצר תמונות שנראות כמו צילום מקצועי בסטודיו.",
  },
  {
    question: "צריך סט צילום?",
    answer: "לא! מספיקות כמה תמונות רגילות מהטלפון. ככל שהתמונות באיכות טובה יותר, כך התוצאה תהיה טובה יותר.",
  },
  {
    question: "אפשר תיקונים?",
    answer: "כן! בחבילת PREMIUM תוכלו לבקש תיקונים ללא הגבלה עד שתהיו מרוצים לחלוטין.",
  },
  {
    question: "מה קורה אחרי התשלום?",
    answer: "מקבלים קישור להעלאת תמונות ואנחנו מתחילים מיד. התמונות מוכנות תוך 12-24 שעות.",
  },
];

const FAQItem = ({ faq, index, isOpen, onClick }: { faq: typeof faqs[0]; index: number; isOpen: boolean; onClick: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        className={`bg-background rounded-xl sm:rounded-2xl border overflow-hidden transition-all duration-300 ${
          isOpen ? "border-gold/30 shadow-card-hover" : "border-border/50 shadow-card hover:shadow-card-hover"
        }`}
        whileHover={!isOpen ? { y: -2 } : {}}
      >
        <button
          onClick={onClick}
          className="w-full flex items-center justify-between gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 text-right"
        >
          <span className="text-sm sm:text-base md:text-lg font-bold text-foreground text-right flex-1">
            {faq.question}
          </span>
          <motion.div 
            className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 ${
              isOpen ? "bg-gradient-gold" : "bg-gold/10"
            }`}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
            ) : (
              <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
            )}
          </motion.div>
        </button>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6">
                <div className="pt-2 border-t border-border/50">
                  <p className="text-muted-foreground leading-relaxed pt-3 sm:pt-4 text-sm sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-32 px-4 bg-secondary/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] h-[300px] sm:h-[400px] bg-gold/5 rounded-full blur-3xl" />

      <div className="container max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs sm:text-sm font-semibold mb-4 sm:mb-5"
          >
            <HelpCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            שאלות נפוצות
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-3 sm:mb-4 px-2">
            יש לכם <span className="text-gradient-gold">שאלות</span>?
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg px-4">
            התשובות לשאלות הנפוצות ביותר
          </p>
        </motion.div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;