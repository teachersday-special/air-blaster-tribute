import { Button } from "@/components/ui/button";
import { GraduationCap, ExternalLink, Heart } from "lucide-react";
import { useState } from "react";

const StudentSection = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleFormClick = () => {
    setShowMessage(true);
  };

  return (
    <section id="students" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-glow-purple mb-4">
            🎓 Student Section
          </h2>
        </div>
        
        <div className="glass-card p-8 md:p-12 text-center float">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center">
              <GraduationCap className="w-10 h-10 text-secondary" />
            </div>
          </div>
          
          {!showMessage ? (
            <>
              <h3 className="font-orbitron font-semibold text-2xl md:text-3xl text-foreground mb-4">
                Share Your Gratitude
              </h3>
              
              <p className="font-exo text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Express your appreciation and share your heartfelt thoughts about the teachers 
                who have guided you through your learning journey in the vast universe of knowledge.
              </p>
              
              <Button
                onClick={handleFormClick}
                className="btn-neon-purple font-exo text-lg px-12 py-6 h-auto"
              >
                Click here to fill the form
              </Button>
            </>
          ) : (
            <div className="space-y-6">
              <div className="flex justify-center">
                <Heart className="w-12 h-12 text-primary animate-pulse" />
              </div>
              
              <h3 className="font-orbitron font-semibold text-2xl md:text-3xl text-foreground">
                Dear Students,
              </h3>
              
              <p className="font-exo text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Share your thoughts for Teacher's Day by filling this form. Your words of gratitude 
                will illuminate the cosmic bond between teachers and students across the galaxy of education.
              </p>
              
              <Button
                asChild
                className="btn-neon-blue font-exo text-lg px-12 py-6 h-auto"
              >
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <ExternalLink className="w-5 h-5" />
                  👉 Fill Google Form
                </a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default StudentSection;