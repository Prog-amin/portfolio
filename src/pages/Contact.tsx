import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageCircle, Clock, Users } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: ''
  });

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 93636 61594',
      href: 'tel:+919363661594',
      description: 'Available Mon-Fri, 9 AM - 6 PM IST'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'alamin03rockz@gmail.com',
      href: 'mailto:alamin03rockz@gmail.com',
      description: 'I typically respond within 24 hours'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Chennai, Tamil Nadu, India',
      href: 'https://maps.google.com/?q=Chennai,Tamil+Nadu,India',
      description: 'Available for remote work worldwide'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/al-amin23',
      description: 'Professional network & updates'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Prog-amin',
      description: 'Code repositories & projects'
    }
  ];

  const projectTypes = [
    'Web Development',
    'Mobile App Development',
    'AI/ML Solutions',
    'Data Analytics',
    'Consulting',
    'Other'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Send via WhatsApp
    const phone = '919363661594'; // WhatsApp requires country code without '+'
    const text = encodeURIComponent(
      `*Freelance inquiry*\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Project Type:* ${formData.projectType}\n` +
      `*Subject:* ${formData.subject}\n` +
      `*Message:*\n${formData.message}`
    );
    const whatsappUrl = `https://wa.me/${phone}?text=${text}`;

    const opened = window.open(whatsappUrl, '_blank');
    if (!opened) {
      window.location.href = whatsappUrl;
    }

    toast({
      title: "Opening WhatsApp...",
      description: "Your message has been prepared in WhatsApp.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      projectType: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Let's <span className="text-gradient-primary">Connect</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to turn your ideas into reality? I'm here to help you build innovative solutions 
            that drive results. Let's discuss your project!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 text-gradient-accent">Get In Touch</h2>
            
            {/* Contact Methods */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((contact, index) => (
                <Card key={contact.label} className="bg-gradient-card p-6 hover-lift" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <contact.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{contact.label}</h3>
                      <a 
                        href={contact.href}
                        target={contact.href.startsWith('http') ? '_blank' : '_self'}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="text-accent hover:text-accent-dark transition-colors font-medium"
                      >
                        {contact.value}
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">{contact.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Connect on Social</h3>
              <div className="flex gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="bg-gradient-card p-4 hover-lift group-hover:bg-gradient-primary transition-all duration-300">
                      <div className="text-center">
                        <social.icon className="w-8 h-8 mx-auto mb-2 group-hover:text-primary-foreground transition-colors" />
                        <h4 className="font-semibold text-sm group-hover:text-primary-foreground transition-colors">{social.label}</h4>
                        <p className="text-xs text-muted-foreground group-hover:text-primary-foreground/80 transition-colors">
                          {social.description}
                        </p>
                      </div>
                    </Card>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <Card className="bg-gradient-card p-6 hover-lift">
              <h3 className="text-xl font-bold mb-4">Why Work With Me?</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Clock className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h4 className="font-semibold">24h Response</h4>
                  <p className="text-sm text-muted-foreground">Quick turnaround time</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Users className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold">10+ Projects</h4>
                  <p className="text-sm text-muted-foreground">Successfully delivered</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <Card className="bg-gradient-card p-8 hover-lift">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MessageCircle className="w-6 h-6 text-gradient-primary" />
                Send a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="projectType" className="text-sm font-medium">Project Type *</Label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-full px-3 py-2 bg-input border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label htmlFor="subject" className="text-sm font-medium">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                    placeholder="Brief description of your project"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="mt-1"
                    placeholder="Tell me more about your project, requirements, timeline, and budget..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground hover-lift glow-primary"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send on WhatsApp
                </Button>
              </form>
            </Card>

            {/* Services Pricing Quick Reference */}
            <Card className="bg-gradient-card p-6 mt-6 hover-lift">
              <h3 className="text-lg font-bold mb-4">Starting Prices</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span>Web Development</span>
                  <span className="font-semibold text-accent">₹1,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>AI/ML Solutions</span>
                  <span className="font-semibold text-accent">₹2,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Mobile App Development</span>
                  <span className="font-semibold text-accent">₹3,000+</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                * Prices vary based on project complexity and requirements. Custom quotes provided after discussion.
              </p>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently <span className="text-gradient-primary">Asked Questions</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-card p-6 hover-lift animate-fade-in">
              <h3 className="font-bold mb-3">What's your typical project timeline?</h3>
              <p className="text-muted-foreground text-sm">
                Project timelines vary based on complexity. Simple websites take 1-2 weeks, 
                while complex AI solutions may take 4-8 weeks. I provide detailed timelines during consultation.
              </p>
            </Card>
            
            <Card className="bg-gradient-card p-6 hover-lift animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h3 className="font-bold mb-3">Do you work with international clients?</h3>
              <p className="text-muted-foreground text-sm">
                Yes! I work with clients worldwide. I'm flexible with time zones and communicate 
                regularly through email, video calls, and project management tools.
              </p>
            </Card>
            
            <Card className="bg-gradient-card p-6 hover-lift animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="font-bold mb-3">What technologies do you specialize in?</h3>
              <p className="text-muted-foreground text-sm">
                I specialize in Python, React, AI/ML (TensorFlow, PyTorch), Django, FastAPI, 
                and cloud platforms. I stay updated with the latest tech trends.
              </p>
            </Card>
            
            <Card className="bg-gradient-card p-6 hover-lift animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h3 className="font-bold mb-3">Do you provide ongoing support?</h3>
              <p className="text-muted-foreground text-sm">
                Yes! I offer maintenance and support services after project completion. 
                This includes bug fixes, updates, and feature enhancements as needed.
              </p>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;