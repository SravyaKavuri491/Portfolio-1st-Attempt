
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "JavaScript", level: 92 },
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 82 },
        { name: "MongoDB", level: 80 },
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS/Cloud", level: 78 },
        { name: "Figma", level: 85 },
      ],
      gradient: "from-green-500 to-teal-500",
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-10 animate-float"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-purple-200 to-pink-200 rounded-lg rotate-12 opacity-10 animate-float" style={{animationDelay: '3s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group hover-glow">
              <CardContent className="p-8 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
                {/* Decorative gradient overlay */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.gradient}`}></div>
                
                <h3 className={`text-2xl font-bold mb-6 text-center bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium group-hover/skill:text-primary transition-colors">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="relative">
                        <Progress value={skill.level} className="h-2" />
                        <div 
                          className={`absolute top-0 left-0 h-2 bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out opacity-80`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
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

export default Skills;
