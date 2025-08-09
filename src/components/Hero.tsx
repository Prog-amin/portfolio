import { Button } from './ui/button';
import { ArrowRight, Download, Mail, Github, Linkedin, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const skills = ['AI Engineering', 'Full-Stack Development', 'Machine Learning', 'NLP'];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-accent rounded-full opacity-30 animate-float" style={{ animationDelay: '-2s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-primary rounded-full opacity-25 animate-float" style={{ animationDelay: '-4s' }}></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-accent rounded-full opacity-20 animate-float" style={{ animationDelay: '-1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-inter">
            <span className="block text-foreground">Hi, I'm</span>
            <span className="block text-gradient-primary">Al Amin</span>
            <span className="block text-2xl md:text-4xl text-gradient-accent font-medium mt-2">(ProgaMi)</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-4xl mx-auto leading-relaxed">
            <span className="text-gradient-primary font-semibold">AI Engineer</span> & 
            <span className="text-gradient-accent font-semibold"> Full-Stack Developer</span>
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Transforming business challenges into intelligent digital solutions
          </p>

          {/* Skills Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {skills.map((skill, index) => (
              <div 
                key={skill} 
                className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium animate-fade-in hover-lift"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {skill}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/projects">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-8 py-6 text-lg font-semibold hover-lift glow-primary">
                View My Work <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg font-semibold hover-lift">
                Let's Connect <Mail className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Chennai, Tamil Nadu, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+919363661594" className="text-sm hover:text-accent transition-colors">
                +91 93636 61594
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:alamin03rockz@gmail.com" className="text-sm hover:text-accent transition-colors">
                alamin03rockz@gmail.com
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mt-8">
            <a 
              href="https://linkedin.com/in/al-amin23" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-300 hover-lift"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/Prog-amin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-300 hover-lift"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;