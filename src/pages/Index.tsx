import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HelpDeskSection from "@/components/HelpDeskSection";
import StudentSection from "@/components/StudentSection";
import TeacherSection from "@/components/TeacherSection";
import LiveDiscussionSection from "@/components/LiveDiscussionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <HelpDeskSection />
        <StudentSection />
        <TeacherSection />
        <LiveDiscussionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
