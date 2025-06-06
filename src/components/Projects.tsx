
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, team collaboration features, and analytics.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather application with location-based forecasts, interactive maps, and weather alerts.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "API Integration", "Chart.js", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-green-500 to-teal-500",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-10 animate-float"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-r from-purple-200 to-pink-200 rounded-lg rotate-12 opacity-10 animate-float" style={{animationDelay: '4s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
              <div className="relative overflow-hidden">
                {/* Gradient overlay on image */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10`}></div>
                
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4 z-20">
                  <Button size="sm" variant="secondary" className="hover:scale-105 transition-transform">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="secondary" className="hover:scale-105 transition-transform">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
              <CardContent className="p-6 bg-gradient-to-br from-white to-slate-50 relative">
                {/* Decorative element */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient}`}></div>
                
                <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="text-xs hover:scale-105 transition-transform hover:shadow-md"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
