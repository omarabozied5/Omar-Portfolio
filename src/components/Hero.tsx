import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MapPin, ArrowDown } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950 dark:via-indigo-950 dark:to-purple-950"></div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-10 w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 animate-float animate-delay-400"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-indigo-200 dark:bg-indigo-800 rounded-full opacity-20 animate-float animate-delay-800"></div>

      <div className="container mx-auto px-4 text-center relative z-10 pt-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 opacity-0 animate-fadeInUp">
            <div className="inline-block p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <img
                src="/me.jpg"
                alt="Omar Ahmed Abuzaid"
                className="w-32 h-32 rounded-full object-cover border-4 border-white/20"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 opacity-0 animate-fadeInUp animate-delay-200">
            <span className="gradient-text">Omar Ahmed</span>
            <br />
            <span className="text-foreground">Abuzaid</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 opacity-0 animate-fadeInUp animate-delay-400">
            Frontend Developer specializing in React & React Native
          </p>

          <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground opacity-0 animate-fadeInUp animate-delay-600">
            Motivated developer with experience in mobile and web applications.
            Proficient in JavaScript-TypScript, state management, and API
            integration. Passionate about learning and delivering innovative
            solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 opacity-0 animate-fadeInUp animate-delay-800">
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="hover-lift bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              size="lg"
              className="hover-lift glass"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-8 opacity-0 animate-fadeInUp animate-delay-600">
            <div className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              +201113747308
            </div>
            <div className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-4 w-4" />
              omarabozeid.pro@gmail.com
            </div>
            <div className="flex items-center gap-2 hover:text-primary transition-colors">
              <MapPin className="h-4 w-4" />
              Nozha, Cairo, Egypt
            </div>
          </div>

          <div className="flex justify-center gap-4 mb-12 opacity-0 animate-fadeInUp animate-delay-800">
            <a
              href="https://www.linkedin.com/in/omar-abuzaid-65449b201/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/omarabozied5/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>

          <div className="absolute bottom-8 right-3 transform -translate-x-1/2 opacity-0 animate-fadeInUp animate-delay-800">
            <button
              onClick={() => scrollToSection("about")}
              className="animate-bounce hover:scale-110 transition-transform"
            >
              <ArrowDown className="h-6 w-6 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
