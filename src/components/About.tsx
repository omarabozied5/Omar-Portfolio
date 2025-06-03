import React from "react";
import { Code, Smartphone, Globe, Users } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "React, React Native, and backend integration",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Cross-platform iOS and Android development",
    },
    {
      icon: Globe,
      title: "Web Solutions",
      description: "Modern, responsive web applications",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Agile development and collaboration",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 gradient-text opacity-0 animate-fadeInUp">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12 opacity-0 animate-fadeInUp animate-delay-200"></div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 opacity-0 animate-fadeInLeft animate-delay-400">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Frontend Developer with a strong foundation in
                modern web and mobile technologies. My journey in software
                development has equipped me with comprehensive skills in React,
                React Native, and iOS development.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I thrive in collaborative environments and am highly adaptable,
                always eager to learn new technologies and deliver innovative
                solutions that drive business success.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  What I Bring:
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Cross-platform mobile development expertise
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Frontend web development with React
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    Experience with modern state management solutions
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    API integration and backend communication
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Team collaboration and agile development
                  </li>
                </ul>
              </div>
            </div>

            <div className="opacity-0 animate-fadeInRight animate-delay-600">
              <div className="glass p-8 rounded-2xl hover-lift">
                <h3 className="text-2xl font-semibold mb-6 gradient-text">
                  Education
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-foreground">
                      Bachelor's Degree in Information Systems
                    </h4>
                    <p className="text-primary font-medium">
                      Helwan University • 2022
                    </p>
                    <p className="text-muted-foreground">
                      Minor: Computer Science
                    </p>
                    <p className="text-muted-foreground">
                      GPA: 3.1/4 (Very Good)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className={`glass p-6 rounded-xl text-center hover-lift opacity-0 animate-fadeInUp`}
                style={{ animationDelay: `${0.8 + index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mb-4">
                  <highlight.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {highlight.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
