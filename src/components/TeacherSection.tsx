import { Button } from "@/components/ui/button";
import { BookOpen, ExternalLink, Star } from "lucide-react";
import { useState } from "react";

const TeacherSection = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleFormClick = () => {
    setShowMessage(true);
  };

  return (
    <section id="teachers" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-glow-blue mb-4">
            👩‍🏫 Teacher Section
          </h2>
        </div>
        
        <div className="glass-card p-8 md:p-12 text-center float">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
              <BookOpen className="w-10 h-10 text-primary" />
            </div>
          </div>
          
          {!showMessage ? (
            <>
              <h3 className="font-orbitron font-semibold text-2xl md:text-3xl text-foreground mb-4">
                Guiding Stars of Knowledge
              </h3>
              
              <p className="font-exo text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Your wisdom illuminates minds across the cosmos. Share your valuable insights 
                and reflections as we celebrate your dedication to shaping future generations.
              </p>
              
              <Button
                onClick={handleFormClick}
                className="btn-neon-blue font-exo text-lg px-12 py-6 h-auto"
              >
                Click here to fill the form
              </Button>
            </>
          ) : (
            <div className="space-y-6">
              <div className="flex justify-center">
                <Star className="w-12 h-12 text-secondary animate-pulse" />
              </div>
              
              <h3 className="font-orbitron font-semibold text-2xl md:text-3xl text-foreground">
                Dear Teachers,
              </h3>
              
              <p className="font-exo text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                We value your guidance and dedication. Kindly share your words with us by filling this form. 
                Your insights help us create a better learning environment that spans across the universe of education.
              </p>
              
              <Button
                asChild
                className="btn-neon-purple font-exo text-lg px-12 py-6 h-auto"
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

export default TeacherSection;