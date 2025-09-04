import { GraduationCap, Brain, MapPin } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const About = () => {

  return (
    <section id="about" className="py-20 bg-gray-light/50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
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

            {/* Personal Biography */}
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Card className="glass-card hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <MapPin className="w-8 h-8 text-secondary mr-4" />
                    <h3 className="text-3xl font-bold text-primary">Personal Background</h3>
                  </div>
                  
                  <div className="space-y-6 text-gray-medium leading-relaxed">
                    <p className="text-lg">
                      Born and raised in the beautiful city of <strong className="text-primary">Vancouver, BC</strong>, 
                      I've always been drawn to the intersection of technology and creativity.
                    </p>
                    
                    <p>
                      When I'm not immersed in code or coursework, you'll find me pursuing my diverse range of passions. 
                      I create <strong className="text-primary">digital art</strong> that explores the boundaries between 
                      technology and artistic expression, sharing my work on Instagram @jay.den.paints.
                    </p>
                    
                    <p>
                      Physical wellness is equally important to me—I practice <strong className="text-primary">calisthenics</strong> to 
                      maintain strength and discipline. Music has been a constant companion throughout my life; I enjoy playing both 
                      <strong className="text-primary"> guitar and piano</strong>, finding that musical creativity complements 
                      my technical problem-solving skills.
                    </p>
                    
                    <p>
                      I'm also passionate about culinary arts and love <strong className="text-primary">documenting the food I make</strong>, 
                      treating each dish as both a creative project and a way to connect with friends and family.
                    </p>
                  </div>
                  
                  <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-secondary/10 to-primary/10 border border-secondary/20">
                    <p className="text-center text-primary font-medium text-lg">
                      "Progress Over Perfection"
                    </p>
                    <p className="text-center text-gray-medium mt-2">
                      Whether it's building apps, creating digital art, cooking or playing music, I know that discipline is the solution to worrying about perfection.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;