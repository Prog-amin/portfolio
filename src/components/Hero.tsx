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
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-10 h-10 sm:w-20 sm:h-20 bg-gradient-primary rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-32 sm:top-40 right-6 sm:right-20 w-8 h-8 sm:w-16 sm:h-16 bg-gradient-accent rounded-full opacity-30 animate-float" style={{ animationDelay: '-2s' }}></div>
        <div className="absolute bottom-32 sm:bottom-40 left-8 sm:left-20 w-6 h-6 sm:w-12 sm:h-12 bg-gradient-primary rounded-full opacity-25 animate-float" style={{ animationDelay: '-4s' }}></div>
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-accent rounded-full opacity-20 animate-float" style={{ animationDelay: '-1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 font-inter">
            <span className="block text-foreground">Hi, I'm</span>
            <span className="block text-gradient-primary">Al Amin</span>
            {/* <span className="block text-2xl md:text-4xl text-gradient-accent font-medium mt-2">(ProgaMi)</span> */}
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 max-w-4xl mx-auto leading-relaxed px-2">
            <span className="text-gradient-primary font-semibold">AI Engineer</span> & 
            <span className="text-gradient-accent font-semibold"> Full-Stack Developer</span>
          </p>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto px-2">
            Transforming business challenges into intelligent digital solutions
          </p>

          {/* Skills Pills */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 px-2">
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
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-12 px-4">
            <Link to="/projects">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground w-full sm:w-auto px-5 py-4 sm:px-8 sm:py-6 text-base sm:text-lg font-semibold hover-lift glow-primary">
                View My Work <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
            </Link>
            
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground w-full sm:w-auto px-5 py-4 sm:px-8 sm:py-6 text-base sm:text-lg font-semibold hover-lift">
                Let's Connect <Mail className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-muted-foreground px-4">
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
          <div className="flex justify-center gap-3 sm:gap-4 mt-8">
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
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 sm:w-6 h-9 sm:h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;