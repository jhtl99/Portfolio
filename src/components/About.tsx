import { GraduationCap, Brain, Palette, Music, Camera, Dumbbell, Guitar } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const About = () => {
  const interests = [
    { icon: Guitar, label: "Music" },
    { icon: Palette, label: "Digital Art" },
    { icon: Camera, label: "Photography" },
    { icon: Dumbbell, label: "Fitness" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-light/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              About Me
            </h2>
            <p className="text-xl text-gray-medium max-w-3xl mx-auto">
              A passionate ECE student at Carnegie Mellon University, combining technical expertise 
              with creative expression to build meaningful experiences.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 animate-fade-in">
              <Card className="glass-card hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="w-8 h-8 text-secondary mr-4" />
                    <h3 className="text-2xl font-bold text-primary">Education</h3>
                  </div>
                  <p className="text-gray-medium mb-4">
                    <strong className="text-primary">Carnegie Mellon University</strong>
                  </p>
                  <p className="text-gray-medium mb-2">
                    Bachelor of Science in Electrical & Computer Engineering
                  </p>
                  <p className="text-gray-medium mb-4">
                    Minor in Artificial Intelligence
                  </p>
                  <p className="text-sm text-secondary font-semibold">
                    Expected Graduation: 2026
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Brain className="w-8 h-8 text-secondary mr-4" />
                    <h3 className="text-2xl font-bold text-primary">Focus Areas</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-secondary mr-3"></div>
                      <span className="text-gray-medium">App Development & Systems</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-secondary mr-3"></div>
                      <span className="text-gray-medium">Computer Architecture Research</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-secondary mr-3"></div>
                      <span className="text-gray-medium">Artificial Intelligence & Machine Learning</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Interests Grid */}
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-3xl font-bold text-primary mb-8 text-center lg:text-left">
                Creative Interests
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {interests.map((interest, index) => (
                  <Card key={interest.label} className="glass-card hover-lift group cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="skill-icon mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <interest.icon size={28} />
                      </div>
                      <h4 className="font-semibold text-primary">{interest.label}</h4>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-secondary/10 to-primary/10 border border-secondary/20">
                <p className="text-center text-primary font-medium text-lg">
                  "Always creating something"
                </p>
                <p className="text-center text-gray-medium mt-2">
                  Whether it's building apps, creating digital art, or exploring new technologies, 
                  I'm constantly pushing the boundaries of what's possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;