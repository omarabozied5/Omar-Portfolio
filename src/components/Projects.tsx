import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Smartphone, Globe, Server } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  type: "web" | "mobile" | "fullstack";
  demoUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
}

export const Projects = () => {
  const projects: Project[] = [
    {
      title: "Movie App",
      description:
        "Interactive movie discovery platform with advanced search and filtering capabilities.",
      technologies: ["React", "Tailwind CSS", "Zustand", " TypeScript"],
      type: "web",
      demoUrl: "https://movielfy.netlify.app/",
      imageUrl: "/movilify.png",
      features: [
        "Movie search and discovery",
        "Advanced filtering options",
        "Responsive design",
        "Real-time API integration",
        "User-friendly interface",
      ],
    },
    {
      title: "Movies Database Platform",
      description:
        "Comprehensive movie database with detailed information and user ratings.",
      technologies: ["React", "Figma", "Tailwind CSS", "Zustand"],
      type: "web",
      demoUrl: "https://moviesdbt.netlify.app/",
      imageUrl: "/moviedb.png",
      features: [
        "Extensive movie database",
        "User ratings and reviews",
        "Detailed movie information",
        "Search functionality",
        "Responsive interface",
      ],
    },
    {
      title: "Goldady Platform",
      description:
        "Modern web application with elegant design and smooth user experience.",
      technologies: ["React", "Tailwind", "TypeScript", "Redux Toolkit", "MUI"],
      type: "web",
      demoUrl: "https://goldady.netlify.app/",
      imageUrl: "/goldady.png",
      features: [
        "Modern UI/UX design",
        "Smooth animations",
        "Mobile-first approach",
        "Performance optimized",
        "Cross-browser compatibility",
      ],
    },
    {
      title: "E-Commerce Platform",
      description:
        "Scalable e-commerce platform with secure authentication and seamless API integration.",
      technologies: ["React", "Strapi", "PostgreSQL", "Redux"],
      type: "fullstack",
      imageUrl: "/ecom.png",
      features: [
        "Secure authentication system",
        "State management with Redux",
        "Responsive UI design",
        "Optimized shopping experience",
        "Cross-device compatibility",
      ],
    },
    {
      title: "Headway iOS App",
      description:
        "Native iOS application with modern SwiftUI interface and comprehensive user management.",
      technologies: ["Swift", "SwiftUI", "MVVM", "Firebase"],
      type: "mobile",
      imageUrl: "ios.png",
      features: [
        "Authentication and user profiles",
        "Multi-language support",
        "Tenor API integration for GIFs",
        "Offline caching functionality",
        "Real-time updates",
        "Input validation",
      ],
    },
    {
      title: "Headway React Native App",
      description:
        "Cross-platform mobile application for both iOS and Android with advanced features.",
      technologies: ["React Native", "Redux", "Firebase", "API Integration"],
      type: "mobile",
      imageUrl: "/reactnative.png",
      features: [
        "Cross-platform compatibility",
        "RESTful API integration",
        "Firebase Remote Config",
        "Async Storage for offline functionality",
        "Complete user model with authentication",
        "Role-based access control",
      ],
    },
  ];

  const getProjectIcon = (type: string) => {
    switch (type) {
      case "web":
        return Globe;
      case "mobile":
        return Smartphone;
      case "fullstack":
        return Server;
      default:
        return Globe;
    }
  };

  const getProjectGradient = (type: string) => {
    switch (type) {
      case "web":
        return "from-blue-500 to-cyan-500";
      case "mobile":
        return "from-purple-500 to-pink-500";
      case "fullstack":
        return "from-green-500 to-teal-500";
      default:
        return "from-blue-500 to-purple-500";
    }
  };

  return (
    <section
      id="projects"
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-100 dark:bg-purple-800 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-100 dark:bg-blue-800 rounded-full opacity-20 animate-float animate-delay-600"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 gradient-text opacity-0 animate-fadeInUp">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4 opacity-0 animate-fadeInUp animate-delay-200"></div>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto opacity-0 animate-fadeInUp animate-delay-400">
            Explore my latest work showcasing modern web and mobile applications
            with cutting-edge technologies.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const IconComponent = getProjectIcon(project.type);
              const gradientClass = getProjectGradient(project.type);

              return (
                <div
                  key={index}
                  className={`group bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border rounded-2xl overflow-hidden hover-lift transition-all duration-500 opacity-0 animate-fadeInUp`}
                  style={{ animationDelay: `${0.6 + index * 0.2}s` }}
                >
                  {/* Project image */}
                  {project.imageUrl && (
                    <div className="h-48 overflow-hidden">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  <div className="p-6">
                    {/* Project type indicator */}
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${gradientClass} text-white rounded-full text-xs font-medium mb-4`}
                    >
                      <IconComponent className="h-3 w-3" />
                      {project.type.charAt(0).toUpperCase() +
                        project.type.slice(1)}
                    </div>

                    <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-medium text-foreground mb-2 text-sm">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-medium text-foreground mb-2 text-sm">
                        Key Features:
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1 max-h-24 overflow-hidden">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                        {project.features.length > 3 && (
                          <li className="text-xs text-muted-foreground/70">
                            +{project.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    <div className="flex gap-2 mt-auto">
                      {project.githubUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex items-center gap-1 hover-scale"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </Button>
                      )}
                      {project.demoUrl ? (
                        <Button
                          size="sm"
                          className={`flex items-center gap-1 bg-gradient-to-r ${gradientClass} hover:shadow-lg transition-all duration-300`}
                          onClick={() => window.open(project.demoUrl, "_blank")}
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          disabled
                          className="flex items-center gap-1"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Coming Soon
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
