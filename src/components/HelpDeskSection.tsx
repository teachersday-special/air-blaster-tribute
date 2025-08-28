import { Button } from "@/components/ui/button";
import { Mail, HelpCircle } from "lucide-react";

const HelpDeskSection = () => {
  return (
    <section id="help-desk" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-glow-blue mb-4">
            📩 Help Desk
          </h2>
        </div>
        
        <div className="glass-card p-8 md:p-12 text-center float">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
              <HelpCircle className="w-10 h-10 text-primary" />
            </div>
          </div>
          
          <h3 className="font-orbitron font-semibold text-2xl md:text-3xl text-foreground mb-4">
            Need Assistance?
          </h3>
          
          <p className="font-exo text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            For any queries, technical support, or guidance about our Teacher's Day celebration, 
            our dedicated team is here to help you navigate through the cosmos of learning.
          </p>
          
          <div className="space-y-4">
            <p className="font-exo text-lg text-foreground">
              Reach us at:
            </p>
            
            <Button
              asChild
              className="btn-neon-blue font-exo text-lg px-8 py-6 h-auto"
            >
              <a href="mailto:therishu15@gmail.com" className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                therishu15@gmail.com
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpDeskSection;