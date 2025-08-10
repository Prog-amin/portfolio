import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarDays, MapPin, ExternalLink, Briefcase, GraduationCap, Building, Users } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'AI Engineer',
      company: 'Corelayerlink',
      location: 'Remote',
      period: '2025 – Present',
      type: 'Full-time',
      current: true,
      description: 'Developing AI solutions and working on machine learning projects in a collaborative environment. Focus on building scalable AI systems and contributing to research-driven product development.',
      achievements: [
        'Building scalable AI systems for production environments',
        'Contributing to research-driven product development',
        'Collaborating with cross-functional teams on ML projects',
        'Optimizing AI model performance and deployment strategies'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Machine Learning', 'AI Research', 'Model Deployment']
    },
    {
      title: 'Natural Language Processing Intern',
      company: 'Pantech e Learning Pvt. Ltd.',
      location: 'Chennai, India',
      period: '2024 – 2025',
      type: 'Internship',
      current: false,
      description: 'Specialized in fine-tuning large language models for domain-specific tasks and deploying NLP models using cloud services.',
      achievements: [
        'Fine-tuned large language models (LLMs) for domain-specific tasks',
        'Deployed NLP models using AWS cloud services (EC2, Lambda)',
        'Engineered effective prompts to enhance LLM performance',
        'Improved model accuracy by 25% through advanced fine-tuning techniques',
        'Reduced inference time by 40% through optimization strategies'
      ],
      technologies: ['Python', 'NLP', 'LLMs', 'AWS', 'EC2', 'Lambda', 'Transformers', 'Hugging Face']
    },
    {
      title: 'Digital Marketing & Backend Support',
      company: 'Chennai Chairs',
      location: 'Chennai, India',
      period: '2023 – 2024',
      type: 'Part-time',
      current: false,
      description: 'Managed digital marketing campaigns and provided backend technical support for e-commerce platform.',
      achievements: [
        'Managed social media campaigns to boost viewer engagement by 60%',
        'Optimized Google Ads to improve online reach and conversions',
        'Maintained and updated backend systems using nopCommerce',
        'Implemented SEO strategies that increased organic traffic by 45%',
        'Streamlined backend processes, reducing manual work by 30%'
      ],
      technologies: ['Google Ads', 'Social Media Marketing', 'nopCommerce', 'SEO', 'Analytics', 'Backend Management']
    }
  ];

  const clientProject = {
    name: 'Aalampana Overseas Pvt. Ltd.',
    description: 'Comprehensive platform providing overseas opportunities with excellence in employment, visa services, and educational consultancy across Tamil Nadu',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Express.js', 'MongoDB', 'Vercel'],
    website: 'https://www.aalampana.com/',
    features: [
      '100+ dynamic pages with fully responsive design',
      'Modern, clean UI with smooth animations',
      'Integrated high-quality visuals and content',
      'SEO-optimized with Google Analytics integration',
      'Cross-platform compatibility (mobile, tablet, desktop)'
    ],
    testimonial: {
      text: "Amin exceeded our expectations. His efforts were outstanding, and we truly appreciate the way he made our business more visible. Thank you for your fantastic work!",
      author: "Afzal",
      position: "CEO of Aalampana Overseas"
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="text-gradient-primary">Experience</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A journey through my professional growth, from internships to full-time roles, showcasing impactful projects and continuous learning.
          </p>
        </div>

        {/* Experience Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Professional <span className="text-gradient-accent">Journey</span>
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block"></div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={`${exp.company}-${exp.period}`} className="relative animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-primary rounded-full border-4 border-background hidden md:block"></div>
                  
                  <Card className="md:ml-16 bg-gradient-card p-6 hover-lift">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div className="flex items-center gap-3 mb-2 sm:mb-0">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <Briefcase className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{exp.title}</h3>
                          <p className="text-muted-foreground font-medium">{exp.company}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-start sm:items-end gap-2">
                        <div className="flex items-center gap-4">
                          <Badge variant={exp.current ? "default" : "secondary"} className={exp.current ? "bg-gradient-accent text-accent-foreground" : ""}>
                            {exp.current ? 'Current' : exp.type}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CalendarDays className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Client Project */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured <span className="text-gradient-primary">Client Project</span>
          </h2>
          
          <Card className="bg-gradient-card p-8 hover-lift animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <Building className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{clientProject.name}</h3>
                    <a 
                      href={clientProject.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent-dark transition-colors flex items-center gap-1 text-sm"
                    >
                      Visit Website <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">{clientProject.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {clientProject.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {clientProject.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <Card className="bg-background-secondary p-6 border-accent/20">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-6 h-6 text-accent" />
                    <h4 className="font-semibold">Client Testimonial</h4>
                  </div>
                  <blockquote className="text-muted-foreground italic mb-4 leading-relaxed">
                    "{clientProject.testimonial.text}"
                  </blockquote>
                  <div className="text-right">
                    <p className="font-semibold text-foreground">{clientProject.testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{clientProject.testimonial.position}</p>
                  </div>
                </Card>
                
                <div className="mt-6 text-center">
                  <Button asChild className="bg-gradient-accent hover:opacity-90 text-accent-foreground hover-lift">
                    <a href={clientProject.website} target="_blank" rel="noopener noreferrer">
                      View Live Project <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Career Highlights */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">
            Career <span className="text-gradient-accent">Highlights</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-card p-6 text-center hover-lift animate-fade-in">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">2+ Years</h3>
              <p className="text-muted-foreground">Professional Experience</p>
            </Card>
            
            <Card className="bg-gradient-card p-6 text-center hover-lift animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">10+ Projects</h3>
              <p className="text-muted-foreground">Completed Successfully</p>
            </Card>
            
            <Card className="bg-gradient-card p-6 text-center hover-lift animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">Continuous</h3>
              <p className="text-muted-foreground">Learning & Growth</p>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;