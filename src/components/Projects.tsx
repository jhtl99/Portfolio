import { useState } from "react";
import { X, ExternalLink, Github, Code, Cpu, Palette } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import appDevProject from "@/assets/app-development-project.jpg";
import computerSystemsProject from "@/assets/computer-systems-research.jpg";
import digitalArtProject from "@/assets/digital-art-project.jpg";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  icon: any;
  color: string;
  links?: {
    demo?: string;
    github?: string;
    external?: string;
  };
}

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: "app-dev",
      title: "Summer Internship App",
      category: "Mobile Development",
      description: "Innovative mobile application developed during summer internship",
      longDescription: "During my summer internship, I led the development of a comprehensive mobile application that streamlined user workflows and improved engagement by 40%. The app features a modern UI, real-time data synchronization, and advanced user analytics. I worked closely with the design team to implement a user-centric approach and collaborated with backend engineers to ensure optimal performance.",
      image: appDevProject,
      technologies: ["React Native", "TypeScript", "Firebase", "REST APIs"],
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      id: "systems-research",
      title: "Prefetching Research",
      category: "Computer Systems",
      description: "Research project on computer system prefetching optimization",
      longDescription: "Conducted extensive research on memory prefetching techniques in modern computer architectures. Developed and tested novel algorithms that improved cache performance by 25% in specific workloads. The project involved deep analysis of memory access patterns, implementation of custom prefetching strategies, and comprehensive benchmarking across different system configurations. Results were presented at the university research symposium.",
      image: computerSystemsProject,
      technologies: ["C++", "Assembly", "Performance Analysis", "SPEC Benchmarks"],
      icon: Cpu,
      color: "from-purple-500 to-pink-500",
      links: {
        external: "#"
      }
    },
    {
      id: "digital-art",
      title: "Digital Art Collection",
      category: "Creative Work",
      description: "Stunning digital paintings and artistic creations",
      longDescription: "My digital art journey on Instagram @jay.den.paints showcases a diverse collection of paintings, portraits, and creative illustrations. Using professional digital painting software, I explore various artistic styles from photorealism to abstract expressionism. Each piece tells a story and represents my growth as both a technical professional and creative artist. The collection has gained recognition in the digital art community with over 10,000 followers.",
      image: digitalArtProject,
      technologies: ["Adobe Photoshop", "Procreate", "Digital Illustration", "Color Theory"],
      icon: Palette,
      color: "from-orange-500 to-red-500",
      links: {
        external: "https://instagram.com/jay.den.paints"
      }
    }
  ];

  const openProject = (projectId: string) => {
    setExpandedProject(projectId);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeProject = () => {
    setExpandedProject(null);
    document.body.style.overflow = 'unset';
  };

  const expandedProjectData = projects.find(p => p.id === expandedProject);

  return (
    <section id="projects" className="py-20 bg-gray-light/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-medium max-w-3xl mx-auto">
              Interactive showcase of my technical and creative work - click to explore in detail
            </p>
          </div>

          {/* Project Bubbles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="project-bubble animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => openProject(project.id)}
              >
                <Card className="h-full border-0 bg-transparent shadow-none">
                  <CardContent className="p-0 h-full">
                    <div className="relative h-80 rounded-2xl overflow-hidden">
                      {/* Background Image */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      
                      {/* Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80`} />
                      
                      {/* Content */}
                      <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                        <div className="flex items-center justify-between">
                          <project.icon size={32} className="text-white" />
                          <span className="text-xs bg-white/20 px-3 py-1 rounded-full font-medium">
                            {project.category}
                          </span>
                        </div>
                        
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                          <p className="text-white/90 text-sm leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Expanded Project Modal */}
      {expandedProject && expandedProjectData && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
            {/* Header */}
            <div className="relative">
              <img
                src={expandedProjectData.image}
                alt={expandedProjectData.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${expandedProjectData.color} opacity-80 rounded-t-2xl`} />
              <button
                onClick={closeProject}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              >
                <X size={24} />
              </button>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center mb-2">
                  <expandedProjectData.icon size={32} className="mr-3" />
                  <span className="text-sm bg-white/20 px-3 py-1 rounded-full font-medium">
                    {expandedProjectData.category}
                  </span>
                </div>
                <h3 className="text-4xl font-bold">{expandedProjectData.title}</h3>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <p className="text-gray-medium text-lg leading-relaxed mb-8">
                {expandedProjectData.longDescription}
              </p>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-primary mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {expandedProjectData.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-secondary/10 text-secondary rounded-lg font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              {expandedProjectData.links && (
                <div className="flex gap-4">
                  {expandedProjectData.links.demo && (
                    <Button className="bg-secondary hover:bg-secondary/90">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                  )}
                  {expandedProjectData.links.github && (
                    <Button variant="outline">
                      <Github size={16} className="mr-2" />
                      View Code
                    </Button>
                  )}
                  {expandedProjectData.links.external && (
                    <Button variant="outline">
                      <ExternalLink size={16} className="mr-2" />
                      Learn More
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;