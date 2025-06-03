
import React from 'react';
import { Award, BookOpen } from 'lucide-react';

interface SkillCategory {
  title: string;
  skills: string[];
  color: string;
}

export const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Mobile Development",
      color: "from-blue-500 to-cyan-500",
      skills: [
        "React Native (CLI & Expo)",
        "Redux, React Query, Async Storage",
        "Firebase (Remote Config, Firestore, Authentication, Cloud Messaging)",
        "iOS (Swift, SwiftUI)"
      ]
    },
    {
      title: "Frontend Development", 
      color: "from-purple-500 to-pink-500",
      skills: [
        "React & JavaScript (ES6+)",
        "TypeScript & Next.js",
        "HTML, CSS, SASS, Tailwind CSS",
        "Redux Toolkit & Redux Thunk & Zustand",
        "Unit Testing (Jest)"
      ]
    },
    {
      title: "Tools & Technologies",
      color: "from-green-500 to-teal-500",
      skills: [
        "Git & GitHub",
        "Figma (Prototyping & Design Handoff)",
        "JIRA & Agile Development"
      ]
    }
  ];

  const certificates = [
    {
      title: "Stanford CS193p (Swift)",
      provider: "Stanford University",
      duration: "20 Hours"
    },
    {
      title: "React Advanced Course",
      provider: "Udemy",
      duration: "40 Hours"
    },
    {
      title: "Web Development",
      provider: "Udacity",
      duration: "3 Months"
    },
    {
      title: "Testing Foundation",
      provider: "Ministry of Communication and Information Technology",
      duration: "2 Months"
    },
    {
      title: "Database Fundamentals",
      provider: "Mahara-Tech",
      duration: "3 Hours"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-secondary/10 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-100 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-100 rounded-full opacity-20 animate-float animate-delay-400"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 gradient-text opacity-0 animate-fadeInUp">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12 opacity-0 animate-fadeInUp animate-delay-200"></div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className={`group bg-white dark:bg-gray-900 border rounded-2xl p-6 hover-lift transition-all duration-500 opacity-0 animate-fadeInUp`}
                style={{ animationDelay: `${0.4 + index * 0.2}s` }}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-6 h-6 bg-white rounded opacity-80"></div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full mt-2 flex-shrink-0`}></div>
                      <span className="leading-relaxed">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="glass p-8 rounded-2xl opacity-0 animate-fadeInUp animate-delay-800">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold gradient-text">Courses & Certificates</h3>
              <p className="text-muted-foreground mt-2">Continuous learning and professional development</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {certificates.map((cert, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl hover-lift transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <BookOpen className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground mb-1">{cert.provider}</p>
                    <span className="inline-flex items-center px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {cert.duration}
                    </span>
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
