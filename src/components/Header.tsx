import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card mx-4 mt-4 rounded-xl">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-orbitron font-bold text-lg">AB</span>
            </div>
            <span className="text-xl font-orbitron font-bold text-glow-blue">
              Air Blaster
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Button
              variant="ghost"
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary font-exo"
            >
              Home
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('students')}
              className="text-foreground hover:text-primary font-exo"
            >
              Students
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('teachers')}
              className="text-foreground hover:text-primary font-exo"
            >
              Teachers
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('help-desk')}
              className="text-foreground hover:text-primary font-exo"
            >
              Help Desk
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('live-discussion')}
              className="text-foreground hover:text-primary font-exo"
            >
              Live Discussion
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;