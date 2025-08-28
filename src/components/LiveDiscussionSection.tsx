import { Button } from "@/components/ui/button";
import { MessageCircle, Users, Sparkles } from "lucide-react";

const LiveDiscussionSection = () => {
  return (
    <section id="live-discussion" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-glow-purple mb-4">
            💬 Live Discussion Group
          </h2>
        </div>
        
        <div className="glass-card p-8 md:p-12 text-center float relative overflow-hidden">
          {/* Glowing background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 animate-pulse"></div>
          
          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
                <MessageCircle className="w-10 h-10 text-primary" />
              </div>
            </div>
            
            <h3 className="font-orbitron font-semibold text-2xl md:text-3xl text-glow-blue mb-4">
              Join the Live Discussion
            </h3>
            
            <p className="font-exo text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Connect with fellow students, teachers, and cosmic learners in real-time. 
              Share love, gratitude, and futuristic ideas in our interactive space station.
            </p>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <Users className="w-6 h-6 text-secondary" />
              <span className="font-exo text-sm text-muted-foreground">Live Community Discussion</span>
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            </div>
            
            <p className="font-exo text-base text-foreground/80 mb-8 italic">
              "Let's share love, gratitude, and futuristic ideas together."
            </p>
            
            <Button
              asChild
              className="btn-neon-blue font-exo text-lg px-12 py-6 h-auto group"
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                <span className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 group-hover:animate-bounce" />
                  Join Now
                </span>
              </a>
            </Button>
            
            <p className="font-exo text-sm text-muted-foreground mt-4">
              Available on Google Meet, WhatsApp, or Telegram
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDiscussionSection;