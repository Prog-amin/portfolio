import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Award, Briefcase, GraduationCap, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const services = [
    {
      title: 'Web Development',
      technologies: 'React, NextJS, Django, FastAPI',
      price: '₹1000',
      description: 'Modern, responsive web applications built with cutting-edge technologies.'
    },
    {
      title: 'Mobile App Development',
      technologies: 'React Native, JavaScript, Firebase',
      price: '₹3000',
      description: 'Cross-platform mobile apps with native performance and user experience.'
    },
    {
      title: 'AI Solutions',
      technologies: 'Python, TensorFlow, PyTorch, LLMs',
      price: '₹2000',
      description: 'Intelligent systems leveraging machine learning and natural language processing.'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Applications',
      institution: 'Loyola College',
      location: 'Chennai, India',
      period: '2022 - 2025',
      cgpa: '8.0',
      description: 'Comprehensive foundation in computer science fundamentals including programming languages, database systems, and Full-Stack development methodologies. Graduated with honors.'
    },
    {
      degree: 'Accounting',
      institution: 'Anjuman Matr. Hr. Sec. School',
      location: 'Chennai, India',
      period: '2021 - 2022',
      cgpa: '9.4',
      description: 'Studied core subjects in commerce including financial accounting, economics, and business mathematics. Developed a strong foundation in analytical and financial principles.'
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-gradient-primary">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about creating intelligent solutions that bridge the gap between complex technology and real-world business needs.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Story */}
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-gradient-accent">My Journey</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm an <strong className="text-foreground">AI Engineer</strong> at Corelayerlink, where I develop cutting-edge AI solutions and work on machine learning projects in a collaborative research environment. My focus is on building scalable AI systems that contribute to product innovation.
              </p>
              <p>
                As a <strong className="text-foreground">freelance Full-Stack developer</strong>, I partner with businesses under the ProgaMi brand, creating comprehensive web and mobile solutions. My expertise spans the entire technology stack, from frontend user experiences to backend architectures and AI integrations.
              </p>
              <p>
                With a strong foundation in <strong className="text-foreground">Machine Learning and NLP</strong> (95% proficiency), I specialize in transforming complex business challenges into intelligent digital solutions. My experience includes fine-tuning large language models, deploying AI systems on cloud platforms, and creating intuitive applications that drive growth and efficiency.
              </p>
              <p>
                Based in <strong className="text-foreground">Chennai, Tamil Nadu</strong>, I'm passionate about staying at the forefront of technology trends and continuously learning new approaches to solve real-world problems through innovative software solutions.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/experience">
                <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground hover-lift">
                  View Experience <Briefcase className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/skills">
                <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground hover-lift">
                  My Skills <Award className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats & Quick Info */}
          <div className="animate-fade-in">
            <Card className="bg-gradient-card p-8 hover-lift">
              <h3 className="text-2xl font-bold mb-6 text-gradient-primary">Quick Facts</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-muted-foreground">Chennai, Tamil Nadu, India</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Current Role</h4>
                    <p className="text-muted-foreground">AI Engineer at Corelayerlink</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Specialization</h4>
                    <p className="text-muted-foreground">AI, ML, NLP & Full-Stack Development</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Education</h4>
                    <p className="text-muted-foreground">BCA from Loyola College (8.0 CGPA)</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Services <span className="text-gradient-accent">Offered</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="bg-gradient-card p-6 hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <Badge variant="secondary" className="bg-gradient-primary text-primary-foreground">
                    Starting {service.price}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-1">
                  {service.technologies.split(', ').map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-gradient-primary">Education</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <Card key={edu.degree} className="bg-gradient-card p-6 hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                    <p className="text-muted-foreground font-medium">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary" className="mb-2">{edu.period}</Badge>
                    <p className="text-sm font-semibold text-gradient-accent">CGPA: {edu.cgpa}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{edu.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">Ready to work together?</h2>
          <p className="text-muted-foreground mb-6">Let's discuss how I can help bring your project to life.</p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-8 hover-lift glow-primary">
              Get In Touch <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;