import { Heart, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-4 border-t border-border/30">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Inspirational Quote */}
        <div className="mb-8">
          <div className="flex justify-center mb-4">
            <Heart className="w-8 h-8 text-primary animate-pulse" />
          </div>
          
          <blockquote className="font-exo text-xl md:text-2xl text-foreground/90 italic font-light max-w-3xl mx-auto leading-relaxed">
            "A teacher takes a hand, opens a mind, and touches a heart."
          </blockquote>
        </div>
        
        {/* Decorative Elements */}
        <div className="flex justify-center items-center space-x-6 mb-8">
          <Sparkles className="w-6 h-6 text-secondary animate-pulse" />
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
          <Sparkles className="w-6 h-6 text-primary animate-pulse" />
        </div>
        
        {/* Air Blaster Branding */}
        <div className="mb-6">
          <h3 className="font-orbitron font-bold text-2xl text-glow-blue mb-2">
            AIR BLASTER
          </h3>
          <p className="font-exo text-muted-foreground">
            Celebrating Education in the Digital Cosmos
          </p>
        </div>
        
        {/* Copyright */}
        <div className="text-center">
          <p className="font-exo text-sm text-muted-foreground">
            © 2025 Air Blaster – All Rights Reserved
          </p>
          <p className="font-exo text-xs text-muted-foreground/60 mt-2">
            Built with 💙 for Teachers' Day Special
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;