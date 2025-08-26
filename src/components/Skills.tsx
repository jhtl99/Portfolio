import { Code, Cpu, Brain, Smartphone, Palette, Music, Camera, Activity } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { useMemo } from "react";

const Skills = () => {
  const skills = useMemo(() => [
    {
      icon: Smartphone,
      title: "App Development",
      description: "Building innovative mobile and web applications",
      technologies: ["React", "TypeScript", "Swift", "Android"]
    },
    {
      icon: Cpu,
      title: "Computer Systems",
      description: "Research in architecture and performance optimization",
      technologies: ["C/C++", "Assembly", "System Design", "Hardware"]
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Exploring intelligent systems and algorithms",
      technologies: ["Python", "TensorFlow", "PyTorch", "Neural Networks"]
    },
    {
      icon: Code,
      title: "Software Engineering",
      description: "Full-stack development and system architecture",
      technologies: ["JavaScript", "Node.js", "Database Design", "APIs"]
    }
  ], []);

  const creativeSkills = useMemo(() => [
    {
      icon: Palette,
      title: "Digital Painting",
      description: "Creating stunning digital artwork and illustrations",
      platform: "@jay.den.paints"
    },
    {
      icon: Music,
      title: "Music Production",
      description: "Composing and producing original music tracks"
    },
    {
      icon: Camera,
      title: "Food Photography",
      description: "Capturing beautiful culinary moments with humor"
    },
    {
      icon: Activity,
      title: "Fitness & Wellness",
      description: "Maintaining balance through physical activity"
    }
  ], []);

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Skills & Interests
            </h2>
            <p className="text-xl text-gray-medium max-w-3xl mx-auto">
              Combining technical expertise with creative passion to deliver innovative solutions
            </p>
          </div>

          {/* Technical Skills */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-primary mb-8 text-center">
              Technical Expertise
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <Card key={skill.title} className="glass-card hover-lift group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="skill-icon group-hover:scale-110 transition-transform flex-shrink-0">
                        <skill.icon size={28} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-primary mb-2">{skill.title}</h4>
                        <p className="text-gray-medium mb-4">{skill.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {skill.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Creative Skills */}
          <div>
            <h3 className="text-3xl font-bold text-primary mb-8 text-center">
              Creative Pursuits
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {creativeSkills.map((skill, index) => (
                <Card key={skill.title} className="glass-card hover-lift group animate-fade-in" style={{ animationDelay: `${(index + 4) * 0.1}s` }}>
                  <CardContent className="p-6 text-center">
                    <div className="skill-icon mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <skill.icon size={28} />
                    </div>
                    <h4 className="text-lg font-bold text-primary mb-2">{skill.title}</h4>
                    <p className="text-sm text-gray-medium mb-3">{skill.description}</p>
                    {skill.platform && (
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-secondary/20 to-primary/20 text-secondary text-xs rounded-full font-semibold">
                        {skill.platform}
                      </span>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;