import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Play, Brain, BarChart3, Database, MessageSquare, Smartphone, Globe } from 'lucide-react';

import ragAgentImg from '@/assets/projects/rag-agent.jpg';
import airlineAnalyzerImg from '@/assets/projects/airline-analyzer.jpg';
import dataAnalystAgentImg from '@/assets/projects/data-analyst-agent.jpg';
import pdfQaImg from '@/assets/projects/pdf-qa-chatbot.jpg';
import aalampanaImg from '@/assets/projects/aalampana-platform.jpg';
import fitnessAppImg from '@/assets/projects/fitness-app.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'RAG Agentic System',
      description: 'Intelligent Retrieval-Augmented Generation chatbot for searching U.S. federal documents with natural conversation interface',
      longDescription: 'An advanced AI system that combines retrieval-augmented generation with agentic capabilities to provide intelligent document search and analysis. The system can understand complex queries, retrieve relevant information from federal documents, and provide contextual answers through natural language conversations.',
      technologies: ['Python', 'FastAPI', 'NLP', 'Llama', 'RAG', 'FAISS', 'Transformers'],
      category: 'AI/ML',
      status: 'Live',
      icon: Brain,
      image: ragAgentImg,
      links: {
        live: 'https://huggingface.co/spaces/Prog-amin/federal-rag-agentic-chatbot',
        github: 'https://github.com/Prog-amin/federal-rag-agentic-chatbot2'
      },
      features: [
        'Advanced RAG architecture with FAISS vector store',
        'Natural language query processing',
        'Context-aware document retrieval',
        'Real-time conversational interface',
        'Optimized for federal document corpus'
      ]
    },
    {
      title: 'Airline Market Demand Analyzer',
      description: 'Python web app analyzing airline booking trends with interactive dashboards and LLM-powered insights',
      longDescription: 'A comprehensive data analysis platform that scrapes airline booking data, processes market trends, and provides actionable insights through interactive visualizations and AI-powered analysis.',
      technologies: ['React', 'Flask', 'Data Scraping', 'Llama', 'Plotly', 'Pandas'],
      category: 'Data Analytics',
      status: 'Complete',
      icon: BarChart3,
      image: airlineAnalyzerImg,
      links: {
        demo: 'https://www.youtube.com/watch?v=RhJnKhCWQL0',
        github: 'https://github.com/Prog-amin/airline-market-demand-analyzer'
      },
      features: [
        'Real-time data scraping from airline websites',
        'Interactive dashboard with multiple visualizations',
        'Market trend analysis and forecasting',
        'LLM-powered insights and recommendations',
        'Responsive design for all devices'
      ]
    },
    {
      title: 'Data Analyst Agent',
      description: 'AI-powered data analysis application with file processing, visualization, and Q&A capabilities',
      longDescription: 'An intelligent data analysis platform that automates the entire data science workflow from data ingestion to insights generation, featuring automated EDA, visualization, and natural language querying.',
      technologies: ['Streamlit', 'Python', 'Scikit-learn', 'LLM', 'Pandas', 'Plotly'],
      category: 'AI/ML',
      status: 'Live',
      icon: Database,
      image: dataAnalystAgentImg,
      links: {
        live: 'https://prog-amin-data-analyst-agent.streamlit.app/',
        github: 'https://github.com/Prog-amin/data-analyst-agent'
      },
      features: [
        'Automated exploratory data analysis (EDA)',
        'Interactive data visualizations',
        'Natural language queries on datasets',
        'ML model suggestions and training',
        'Export capabilities for reports and charts'
      ]
    },
    {
      title: 'PDF Q&A Chatbot',
      description: 'End-to-end PDF processing system enabling natural language queries on document content',
      longDescription: 'A sophisticated document processing system that extracts, indexes, and enables semantic search across PDF documents using advanced NLP techniques and vector databases.',
      technologies: ['NextJS', 'FastAPI', 'NLP', 'LLM', 'ChromaDB', 'PDF Processing'],
      category: 'AI/ML',
      status: 'Complete',
      icon: MessageSquare,
      image: pdfQaImg,
      links: {
        live: 'https://huggingface.co/spaces/Prog-amin/pdf-qa-chatbot/tree/main'
      },
      features: [
        'Advanced PDF text extraction and chunking',
        'Semantic search with vector embeddings',
        'Context-aware answer generation',
        'Multi-document support and indexing',
        'Real-time query processing'
      ]
    },
    {
      title: 'Aalampana Overseas Platform',
      description: 'Comprehensive business platform for overseas employment, visa services, and educational consultancy',
      longDescription: 'A complete digital transformation project for Aalampana Overseas, featuring over 100 dynamic pages with modern design, SEO optimization, and integrated analytics.',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Express.js', 'MongoDB', 'Vercel'],
      category: 'Web Development',
      status: 'Live',
      icon: Globe,
      image: aalampanaImg,
      links: {
        live: 'https://www.aalampana.com/'
      },
      features: [
        '100+ responsive dynamic pages',
        'Modern UI/UX with smooth animations',
        'SEO optimized with Google Analytics',
        'Content management system',
        'Multi-device compatibility'
      ]
    },
    {
      title: 'Health and Fitness App',
      description: 'AI-powered personalized fitness and diet tracking mobile app with tailored workout plans',
      longDescription: 'A comprehensive mobile application that leverages AI to provide personalized fitness routines, nutrition recommendations, and lifestyle guidance based on user preferences and goals.',
      technologies: ['React Native', 'Django', 'SQLite', 'Recommenders', 'LLMs', 'Langchain'],
      category: 'Mobile Development',
      status: 'In Progress',
      icon: Smartphone,
      image: fitnessAppImg,
      links: {},
      features: [
        'AI-powered workout plan generation',
        'Personalized nutrition recommendations',
        'Progress tracking and analytics',
        'Social features and challenges',
        'Integration with health devices'
      ]
    }
  ];

  const categories = ['All', 'AI/ML', 'Web Development', 'Mobile Development', 'Data Analytics'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-gradient-accent text-accent-foreground';
      case 'Complete': return 'bg-gradient-primary text-primary-foreground';
      case 'In Progress': return 'bg-muted text-muted-foreground';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="text-gradient-primary">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative solutions spanning AI/ML, web development, and mobile applications. 
            Each project demonstrates technical excellence and real-world impact.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`animate-fade-in hover-lift ${
                selectedCategory === category 
                  ? 'bg-gradient-primary text-primary-foreground' 
                  : 'border-accent text-accent hover:bg-accent hover:text-accent-foreground'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.title} 
              className="bg-gradient-card p-6 hover-lift animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:animate-pulse">
                    <project.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <Badge className={`${getStatusColor(project.status)} text-xs`}>
                  {project.status}
                </Badge>
              </div>

              <div className="aspect-video rounded-lg overflow-hidden mb-4 relative">
                <img src={project.image} alt={`${project.title} project thumbnail`} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              </div>
              <p className="text-muted-foreground mb-4 text-sm sm:text-base">{project.description}</p>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {project.longDescription}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  {project.features.slice(0, 3).map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                  {project.features.length > 3 && (
                    <li className="text-xs italic">+{project.features.length - 3} more features...</li>
                  )}
                </ul>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {project.links.live && (
                  <Button 
                    asChild 
                    size="sm" 
                    className="bg-gradient-primary hover:opacity-90 text-primary-foreground hover-lift"
                  >
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
                
                {project.links.demo && (
                  <Button 
                    asChild 
                    size="sm" 
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground hover-lift"
                  >
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      <Play className="w-4 h-4 mr-2" />
                      Demo Video
                    </a>
                  </Button>
                )}
                
                {project.links.github && (
                  <Button 
                    asChild 
                    size="sm" 
                    variant="outline"
                    className="hover-lift"
                  >
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Project Stats */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Project <span className="text-gradient-accent">Statistics</span>
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="bg-gradient-card p-6 text-center hover-lift animate-fade-in">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-2">4</h3>
              <p className="text-muted-foreground">AI/ML Projects</p>
            </Card>
            
            <Card className="bg-gradient-card p-6 text-center hover-lift animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-2">2</h3>
              <p className="text-muted-foreground">Web Applications</p>
            </Card>
            
            <Card className="bg-gradient-card p-6 text-center hover-lift animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-2">1</h3>
              <p className="text-muted-foreground">Mobile App</p>
            </Card>
            
            <Card className="bg-gradient-card p-6 text-center hover-lift animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-2">100%</h3>
              <p className="text-muted-foreground">Success Rate</p>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <Card className="bg-gradient-card p-8 hover-lift">
            <h2 className="text-2xl font-bold mb-4">Interested in working together?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and create innovative solutions. 
              Let's discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground hover-lift glow-primary">
                <Link to="/contact">
                  Start a Project
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground hover-lift">
                <a href="https://github.com/Prog-amin" target="_blank" rel="noopener noreferrer">
                  View All Code <Github className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Projects;