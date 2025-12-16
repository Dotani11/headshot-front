import { Sparkles, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-6 sm:py-8 px-4 bg-navy-dark text-primary-foreground/70">
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-gold flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-foreground" />
            </div>
            <span className="font-bold text-primary-foreground text-sm sm:text-base">AI Headshots</span>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-xs sm:text-sm">
            <span>נבנה עם</span>
            <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold fill-gold" />
            <span>למתווכים</span>
          </div>

          {/* Year */}
          <div className="text-xs sm:text-sm">
            © {new Date().getFullYear()} כל הזכויות שמורות
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;