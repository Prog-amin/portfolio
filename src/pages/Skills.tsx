import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Code2, Brain, Database, Cloud, Wrench, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code2,
      color: 'text-blue-400',
      skills: [
        { name: 'HTML & CSS', proficiency: 85 },
        { name: 'React/NextJS', proficiency: 85 },
        { name: 'JavaScript/TypeScript', proficiency: 85 },
        { name: 'Tailwind CSS', proficiency: 80 },
      ]
    },
    {
      title: 'Backend Development',
      icon: Database,
      color: 'text-green-400',
      skills: [
        { name: 'Django', proficiency: 90 },
        { name: 'Flask', proficiency: 90 },
        { name: 'FastAPI', proficiency: 90 },
        { name: 'Node.js', proficiency: 75 },
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'text-purple-400',
      skills: [
        { name: 'Machine Learning', proficiency: 95 },
        { name: 'Natural Language Processing', proficiency: 95 },
        { name: 'TensorFlow', proficiency: 90 },
        { name: 'PyTorch', proficiency: 90 },
        { name: 'Large Language Models', proficiency: 95 },
      ]
    },
    {
      title: 'Database & Storage',
      icon: Database,
      color: 'text-orange-400',
      skills: [
        { name: 'SQL Databases', proficiency: 85 },
        { name: 'MongoDB', proficiency: 85 },
        { name: 'Redis', proficiency: 70 },
        { name: 'PostgreSQL', proficiency: 80 },
      ]
    },
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      color: 'text-cyan-400',
      skills: [
        { name: 'Git & GitHub', proficiency: 80 },
        { name: 'Docker', proficiency: 80 },
        { name: 'AWS (EC2, Lambda)', proficiency: 75 },
        { name: 'Vercel', proficiency: 80 },
        { name: 'GoDaddy Hosting', proficiency: 80 },
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      color: 'text-pink-400',
      skills: [
        { name: 'Cursor IDE', proficiency: 95 },
        { name: 'Windsurf', proficiency: 95 },
        { name: 'Claude AI', proficiency: 95 },
        { name: 'Firebase', proficiency: 80 },
        { name: 'React Native', proficiency: 75 },
      ]
    }
  ];

  const topSkills = [
    { name: 'Machine Learning & NLP', proficiency: 95, description: 'Expert in ML algorithms, deep learning, and natural language processing' },
    { name: 'Python Development', proficiency: 95, description: 'Advanced proficiency in Python for web development and AI solutions' },
    { name: 'Django & FastAPI', proficiency: 90, description: 'Building robust, scalable backend applications and APIs' },
    { name: 'React & Frontend', proficiency: 85, description: 'Creating modern, responsive user interfaces and web applications' },
    { name: 'Database Management', proficiency: 85, description: 'SQL and NoSQL database design, optimization, and management' },
    { name: 'Cloud & DevOps', proficiency: 80, description: 'Deployment, containerization, and cloud infrastructure management' },
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="text-gradient-primary">Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise and proficiency levels across different technologies and domains.
          </p>
        </div>

        {/* Top Skills Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-gradient-accent">Core Expertise</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topSkills.map((skill, index) => (
              <Card key={skill.name} className="bg-gradient-card p-6 hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{skill.name}</h3>
                    <Badge variant="secondary" className="bg-gradient-primary text-primary-foreground">
                      {skill.proficiency}%
                    </Badge>
                  </div>
                  <div className="skill-bar h-2 mb-3">
                    <div 
                      className="skill-progress h-full"
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Detailed Skills by Category */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">
            Detailed <span className="text-gradient-primary">Breakdown</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title} 
                className="bg-gradient-card p-6 hover-lift animate-fade-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <category.icon className={`w-6 h-6 text-primary-foreground`} />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="animate-fade-in" style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.proficiency}%</span>
                      </div>
                      <div className="skill-bar h-2">
                        <div 
                          className="skill-progress h-full"
                          style={{ width: `${skill.proficiency}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Technologies Used */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-gradient-accent">Technologies & Tools</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Python', 'JavaScript', 'TypeScript', 'React', 'NextJS', 'Django', 'FastAPI', 'Flask',
              'TensorFlow', 'PyTorch', 'scikit-learn', 'Pandas', 'NumPy', 'OpenAI', 'Hugging Face',
              'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'AWS', 'Vercel', 'GitHub', 'Git',
              'Tailwind CSS', 'Material-UI', 'Firebase', 'React Native', 'Node.js', 'Express.js',
              'Jupyter', 'VS Code', 'Cursor', 'Windsurf', 'Postman', 'Figma'
            ].map((tech, index) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer animate-fade-in hover-lift"
                style={{ animationDelay: `${index * 0.02}s` }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        {/* Learning Philosophy */}
        <section className="mt-16">
          <Card className="bg-gradient-card p-8 text-center hover-lift">
            <Palette className="w-16 h-16 mx-auto mb-4 text-gradient-primary" />
            <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
              Technology evolves rapidly, and I'm committed to staying at the forefront. I regularly explore new frameworks, 
              experiment with emerging AI technologies, and contribute to open-source projects. My goal is to not just keep up 
              with industry trends, but to help shape the future of intelligent software development.
            </p>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Skills;