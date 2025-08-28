const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="text-center space-y-8 px-4 max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 className="font-orbitron font-black text-6xl md:text-8xl text-glow-blue float">
          AIR BLASTER
        </h1>
        
        {/* Hero Message */}
        <div className="space-y-4">
          <h2 className="font-orbitron font-bold text-3xl md:text-5xl text-glow-purple">
            Happy Teacher's Day
          </h2>
          <p className="font-exo text-lg md:text-2xl text-foreground/80 max-w-2xl mx-auto">
            A Special Tribute from Air Blaster
          </p>
          <p className="font-exo text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Celebrating the bond of learning and guidance in a futuristic way. 
            Join us in honoring those who shape our minds and illuminate our paths through the cosmos of knowledge.
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center items-center space-x-8 mt-12">
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          <div className="w-4 h-4 rounded-full bg-primary animate-pulse"></div>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;