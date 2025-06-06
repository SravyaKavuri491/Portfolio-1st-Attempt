
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-gradient-to-r from-purple-200 to-pink-200 rounded-lg rotate-45 opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with a keen eye for design and a love for creating exceptional digital experiences.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Profile"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover relative z-10 hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="space-y-6">
            <Card className="border-none shadow-lg hover-glow transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 bg-gradient-to-br from-white to-blue-50">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  With over 5 years of experience in web development, I specialize in creating modern, 
                  responsive applications using cutting-edge technologies. My passion lies in solving 
                  complex problems and bringing ideas to life through code.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="hover:scale-105 transition-transform">Problem Solver</Badge>
                  <Badge variant="secondary" className="hover:scale-105 transition-transform">Creative Thinker</Badge>
                  <Badge variant="secondary" className="hover:scale-105 transition-transform">Team Player</Badge>
                  <Badge variant="secondary" className="hover:scale-105 transition-transform">Continuous Learner</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover-glow transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 bg-gradient-to-br from-white to-purple-50">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">What I Do</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center hover:text-foreground transition-colors">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 animate-pulse-slow"></span>
                    Full Stack Web Development
                  </li>
                  <li className="flex items-center hover:text-foreground transition-colors">
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3 animate-pulse-slow"></span>
                    UI/UX Design & Prototyping
                  </li>
                  <li className="flex items-center hover:text-foreground transition-colors">
                    <span className="w-2 h-2 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mr-3 animate-pulse-slow"></span>
                    Mobile App Development
                  </li>
                  <li className="flex items-center hover:text-foreground transition-colors">
                    <span className="w-2 h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mr-3 animate-pulse-slow"></span>
                    Performance Optimization
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
