import { Mail, Linkedin, Github, Instagram, Send } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:jaydenl@andrew.cmu.edu",
      color: "text-red-500",
      description: "Drop me a line"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/jaydenlin0",
      color: "text-blue-600",
      description: "Professional network"
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/jhtl99",
      color: "text-gray-800",
      description: "Code repositories"
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/jay.den.paints",
      color: "text-pink-500",
      description: "@jay.den.paints"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Let's Connect
            </h2>
            {/* <p className="text-xl text-gray-medium max-w-3xl mx-auto">
              Interested in collaboration, have a project idea, or just want to chat about technology and creativity?
            </p> */}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <Card className="glass-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">Send a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-muted/50 border-border focus:border-secondary"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-muted/50 border-border focus:border-secondary"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={5}
                        className="bg-muted/50 border-border focus:border-secondary resize-none"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90">
                      <Send size={16} className="mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Social Links */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {/* Availability */}
              <Card className="glass-card hover-lift">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Currently Available For</h3>
                  <ul className="space-y-3 text-gray-medium">
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
                      Summer 2026 Internship Opportunities
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-secondary mr-3"></div>
                      Collaborative Projects & Research
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-secondary mr-3"></div>
                      Technical Mentoring & Consulting
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Connect With Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link, index) => (
                    <Card key={link.name} className="glass-card hover-lift group cursor-pointer">
                      <CardContent className="p-6 text-center">
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <link.icon 
                            size={32} 
                            className={`mx-auto mb-3 ${link.color} group-hover:scale-110 transition-transform`} 
                          />
                          <h4 className="font-semibold text-primary mb-1">{link.name}</h4>
                          <p className="text-sm text-gray-medium">{link.description}</p>
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Quote */}
              {/* <div className="p-6 rounded-2xl bg-gradient-to-br from-secondary/10 to-primary/10 border border-secondary/20">
                <p className="text-center text-primary font-medium text-lg mb-2">
                  "Let's build something amazing together"
                </p>
                <p className="text-center text-gray-medium text-sm">
                  Always excited to connect with fellow creators, innovators, and problem-solvers.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;