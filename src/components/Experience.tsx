import React from "react";
import { Calendar, MapPin, ChevronRight } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location?: string;
  description: string[];
  technologies?: string[];
  logo?: string; // URL to company logo
}

export const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "React Native Developer",
      company: "Giza Systems",
      period: "Sep 2024 – Mar 2025",
      location: "Cairo, Egypt",
      technologies: ["React Native", "Redux", "Firebase", "SwiftUI", "MVVM"],
      logo: "/giz.jpg",
      description: [
        "Developed & maintained React Native applications for smooth user experiences",
        "Integrated APIs and managed state using Redux/Context API",
        "Implemented Firebase (Remote Config, offline storage)",
        "Built user management with authentication & roles",
        "Developed an iOS app with SwiftUI & MVVM architecture",
        "Integrated Tenor API for GIFs with offline caching",
      ],
    },
    {
      title: "Web Developer",
      company: "HNT - Hani Naguib Training",
      period: "May 2024 – Sep 2024",
      location: "Cairo, Egypt",
      technologies: ["Wix", "Figma", "Web Design"],
      logo: "hnt.jpg",
      description: [
        "Built, managed, and updated a full website using Wix",
        "Learned and introduced new technologies like Figma",
        "Trained team members to integrate new tools into workflow",
      ],
    },
    {
      title: "Frontend React Developer",
      company: "Jewel Hotels",
      period: "Oct 2022 – Dec 2023",
      location: "Cairo, Egypt",
      technologies: ["React.js", "JavaScript", "CSS"],
      logo: "jew.png",
      description: [
        "Maintained and enhanced the Jewel Hotels website using React.js",
        "Ensured smooth performance and optimal user experience for visitors",
      ],
    },
    {
      title: "Programming Instructor",
      company: "3C Creative Children Community",
      period: "Jan 2021 – Sep 2022",
      location: "Cairo, Egypt",
      technologies: ["Scratch", "App Inventor", "HTML", "CSS"],
      logo: "3c.png",
      description: [
        "Taught children foundational computer science concepts",
        "Designed interactive lessons using Scratch, App Inventor, HTML, and CSS",
        "Encouraged problem-solving and logical thinking through hands-on exercises",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-secondary/10 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-purple-100 rounded-full opacity-20 animate-float animate-delay-400"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 gradient-text opacity-0 animate-fadeInUp">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12 opacity-0 animate-fadeInUp animate-delay-200"></div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-start gap-6 opacity-0 animate-fadeInLeft`}
                  style={{ animationDelay: `${0.4 + index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-background mt-6"></div>

                  {/* Content */}
                  <div className="flex-1 bg-background border rounded-2xl p-6 shadow-sm hover-lift hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                      <div className="flex items-start gap-4 flex-1">
                        {/* Company Logo */}
                        {exp.logo && (
                          <div className="flex-shrink-0">
                            <img
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              className="w-12 h-12 rounded-lg object-contain"
                            />
                          </div>
                        )}

                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-foreground mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-primary font-medium text-lg">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col lg:items-end mt-2 lg:mt-0 space-y-1">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        {exp.location && (
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {exp.technologies && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    <ul className="space-y-2">
                      {exp.description.map((desc, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <ChevronRight className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
