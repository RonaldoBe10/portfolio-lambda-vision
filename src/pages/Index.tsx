
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen dark:bg-gray-900">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
