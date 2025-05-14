'use client';

import React, { useState } from 'react';
import { 
  Send, 
  MapPin, 
  Mail, 
  Phone, 
  Link2, 
  X, 
  Linkedin, 
  Github, 
  Facebook,
  ChevronRight
} from 'lucide-react';

// Define types
interface ResearchArea {
  title: string;
  description: string;
  image: string;
  details: string;
}

interface Publication {
  title: string;
  conference: string;
  year: number;
  abstract: string;
  fullText: string;
}

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  fullBio: string;
}

interface ContactInfo {
  address: string;
  email: string;
  phone: string;
}

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{
    title: string;
    content: string;
    type: 'research' | 'publication' | 'team';
  } | null>(null);
  
  const [showAlert, setShowAlert] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowAlert(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
    setMobileMenuOpen(false);
  };
  
  const openModal = (title: string, content: string, type: 'research' | 'publication' | 'team') => {
    setModalContent({ title, content, type });
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };
  
  const researchAreas: ResearchArea[] = [
    {
      title: 'Natural Language Processing',
      description: 'Exploring advanced large language models, multilingual translation systems, and context-aware text understanding for improved human-AI interaction.',
      image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1000',
      details: 'Our NLP research focuses on developing more nuanced and contextually aware language models that can understand the subtleties of human communication. Current projects include developing cross-lingual transfer learning approaches, investigating ethical considerations in language generation, and creating more robust evaluation frameworks for conversational AI systems. We employ state-of-the-art transformer architectures and explore novel attention mechanisms to improve performance on tasks ranging from machine translation to sentiment analysis and beyond.',
    },
    {
      title: 'Computer Vision',
      description: 'Developing state-of-the-art image recognition, object detection, and scene understanding algorithms that can interpret visual information like humans.',
      image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=1000',
      details: 'Our computer vision lab investigates cutting-edge techniques for understanding visual information in complex environments. We work on projects spanning from medical image analysis to autonomous vehicle navigation systems. Current research includes developing self-supervised learning approaches for limited labeled data scenarios, investigating multi-modal fusion of visual and textual information, and creating robust systems that can operate in adverse conditions. Our team leverages deep learning architectures like convolutional neural networks, vision transformers, and graph neural networks to solve real-world problems.',
    },
    {
      title: 'Ethical AI & Governance',
      description: 'Researching methodologies to ensure AI systems are fair, transparent, accountable, and aligned with human values across diverse applications.',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000',
      details: 'The Ethical AI & Governance division develops frameworks, tools, and policies to ensure AI systems benefit humanity while minimizing potential harms. We conduct interdisciplinary research spanning computer science, philosophy, law, and social sciences to address challenges in fairness, accountability, transparency, and ethics. Current projects include developing auditing tools for algorithmic bias detection, creating explainable AI systems that maintain high performance, and designing participatory governance mechanisms for AI deployment in sensitive domains like healthcare, criminal justice, and finance.',
    },
  ];
  

  const publications: Publication[] = [
    {
      title: 'Transformer-based Architectures for Multimodal Learning',
      conference: 'Conference on Neural Information Processing Systems (NeurIPS)',
      year: 2024,
      abstract: 'We present a novel architecture that integrates vision and language understanding within a unified transformer framework, achieving state-of-the-art results on benchmark datasets.',
      fullText: 'This paper introduces MuViT (Multimodal Vision-Text Transformer), a novel neural architecture that effectively integrates visual and textual information in a unified framework. Unlike previous approaches that process modalities separately before fusion, MuViT employs a shared attention mechanism that allows for cross-modal interaction at multiple levels of representation. Our experiments on eight benchmark datasets show that MuViT consistently outperforms state-of-the-art methods on tasks including visual question answering, image captioning, and visual entailment. We provide detailed ablation studies demonstrating the contribution of each architectural component and analyze attention patterns to reveal how the model learns to align concepts across modalities. Furthermore, we introduce a new pretraining objective called "Cross-Modal Masked Prediction" that significantly improves downstream task performance while reducing computational requirements during fine-tuning.'
    },
    {
      title: 'Robust Reinforcement Learning for Real-world Applications',
      conference: 'International Conference on Machine Learning (ICML)',
      year: 2024,
      abstract: 'Our work addresses the challenges of deploying reinforcement learning algorithms in uncertain environments with safety guarantees and improved sample efficiency.',
      fullText: 'Deploying reinforcement learning (RL) algorithms in real-world settings presents numerous challenges: partial observability, distributional shift, safety constraints, and limited data. This paper introduces SARLO (Safety-Augmented Robust Learning for Operations), a framework that addresses these challenges through a combination of uncertainty estimation, conservative policy updates, and constraint satisfaction guarantees. We evaluate SARLO across three domains—robotic manipulation, autonomous driving, and resource allocation—demonstrating that it achieves comparable performance to state-of-the-art RL methods while providing formal safety guarantees and requiring significantly fewer environment interactions. Our approach incorporates a novel uncertainty-aware policy optimization method that explicitly accounts for epistemic uncertainty and a risk-sensitive reward formulation that balances exploration and exploitation in safety-critical domains.'
    },
    {
      title: 'Mitigating Bias in Large Language Models: A Comprehensive Approach',
      conference: 'ACL',
      year: 2024,
      abstract: 'This research introduces a framework for detecting and mitigating various forms of bias in language models while maintaining performance across core tasks.',
      fullText: 'As large language models (LLMs) increasingly influence digital information spaces, addressing embedded biases becomes crucial for ethical deployment. This paper presents DEBIAS (Detection and Elimination of Bias In Algorithmic Systems), a comprehensive framework that combines computational and sociotechnical approaches to bias mitigation in LLMs. Unlike previous work focusing on specific bias dimensions, DEBIAS introduces a taxonomic approach that systematically identifies and addresses multiple bias categories while monitoring performance trade-offs. We introduce three novel techniques: counterfactual data augmentation with fairness constraints, adversarial debiasing with demographic parity objectives, and a socially-informed fine-tuning curriculum. Evaluations across five established bias benchmarks show our approach reduces harmful biases by an average of 63% while maintaining or improving performance on core NLP tasks. We provide an open-source implementation of our framework and release a new evaluation dataset featuring intersectional bias scenarios.'
    },
  ];
  
 
  const teamMembers: TeamMember[] = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Lead AI Researcher',
      bio: 'With experience at leading research labs, Sarah specializes in deep learning architectures and their applications to real-world problems.',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=800',
      fullBio: 'Dr. Sarah Chen leads our AI research division, bringing over 15 years of experience in deep learning and neural network architectures. She earned her Ph.D. from MIT and completed postdoctoral work at Stanford\'s AI Lab. Before joining AI Science Hub, she led research teams at Google Brain and OpenAI, where she contributed to several breakthrough papers on generative models and reinforcement learning. Dr. Chen has published over 40 papers in top-tier conferences and journals, including NeurIPS, ICML, and JMLR. Her work on efficient transformer architectures received the Best Paper Award at NeurIPS 2022. Beyond research, she actively advocates for diverse representation in AI and mentors underrepresented groups in the field.',
    },
    {
      name: 'Dr. Michael Rodriguez',
      role: 'NLP Specialist',
      bio: 'Michael\'s work focuses on language understanding and generation, with contributions to several open-source language models.', 
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800',
      fullBio: 'Dr. Michael Rodriguez is our lead Natural Language Processing researcher with expertise in transformer architectures, multilingual models, and ethical considerations in language technologies. He received his Ph.D. from UC Berkeley where he developed novel approaches to cross-lingual transfer learning. Prior to joining AI Science Hub, he worked at DeepMind on large language model alignment and contributed significantly to the Ethical NLP community. Michael has helped develop three open-source language models widely used in academic research and leads our initiative on creating more resource-efficient NLP models. He regularly collaborates with linguists and social scientists to ensure language technologies respect cultural nuances and serve diverse communities.',
    },
    {
      name: 'Dr. Aisha Patel',
      role: 'Ethics & Governance Lead',
      bio: 'Aisha bridges technical expertise with policy insights to ensure responsible AI development and deployment.',
      image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=800',
      fullBio: 'Dr. Aisha Patel leads our Ethics and Governance division, bringing a unique interdisciplinary perspective that combines computer science, philosophy, and public policy. She holds a Ph.D. in Computer Science from Carnegie Mellon University and a Master\'s in Public Policy from Harvard Kennedy School. Before joining AI Science Hub, she served on the ethics boards of multiple tech companies and contributed to AI policy development at international organizations. Dr. Patel has published extensively on algorithmic fairness, transparency, and accountability. Her recent work focuses on participatory approaches to AI governance and developing practical frameworks for ethical AI auditing that consider stakeholder perspectives across different cultural contexts. She frequently advises governments and NGOs on AI policy.',
    },
    {
      name: 'Dr. David Kim',
      role: 'Computer Vision Researcher',
      bio: 'David specializes in visual perception systems and has contributed to breakthrough algorithms in image recognition.',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800',
      fullBio: 'Dr. David Kim leads our Computer Vision research team with specialization in 3D scene understanding, visual perception, and multimodal learning. He received his Ph.D. from ETH Zurich where he developed novel algorithms for real-time object detection in resource-constrained environments. His work has been implemented in multiple commercial applications, including autonomous vehicles and medical imaging systems. Before joining AI Science Hub, David worked at NVIDIA Research, where he led projects on efficient neural architecture design. He holds 12 patents related to computer vision technologies and has published over 30 papers in top conferences like CVPR, ICCV, and ECCV. David is particularly passionate about developing computer vision systems that can operate reliably in challenging conditions and diverse environments.',
    },
  ];
  

  const contactInfo: ContactInfo = {
    address: '123 Innovation Drive, Tech City, TC 98765',
    email: 'research@aisciencehub.org',
    phone: '+1 (555) 987-6543',
  };
  
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 overflow-x-hidden">
      <header className="sticky top-0 z-50 bg-white shadow-md border-b border-slate-200 transition-all duration-300">
        <div className="container mx-auto px-6 max-w-7xl">
          <nav className="flex justify-between items-center py-4">
            <a 
              href="#" 
              className="text-2xl font-bold flex items-center space-x-2 transition-transform hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              <span className="bg-blue-600 text-white p-2 rounded-lg">AI</span>
              <span>Science <span className="text-blue-600">Hub</span></span>
            </a>
            
            <ul className={`${mobileMenuOpen ? 'flex flex-col absolute top-16 left-0 right-0 bg-white p-4 shadow-md z-50 transition-all duration-300 ease-in-out' : 'hidden'} md:flex md:static md:flex-row md:space-x-8 md:p-0 md:shadow-none`}>
              {['about', 'research', 'publications', 'team', 'contact'].map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    className="font-medium hover:text-blue-600 transition-colors capitalize block py-2 md:py-0 relative group"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(section);
                    }}
                  >
                    {section}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
            
            <button 
              className="md:hidden text-2xl p-2 hover:bg-slate-100 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </nav>
        </div>
      </header>
      
      <section id="home" className="py-20 bg-gradient-to-r from-blue-600 to-indigo-500 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Advancing AI Science for Tomorrow's Innovations</h1>
          <p className="text-xl opacity-90 mb-8">Our interdisciplinary team explores cutting-edge artificial intelligence research across multiple organizations and applications.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              className="bg-white text-blue-600 cursor-pointer hover:bg-slate-100 px-6 py-3 rounded-md font-medium transform hover:-translate-y-0.5 transition-all shadow-lg hover:shadow-xl"
              onClick={() => scrollToSection('research')}
            >
              Explore Research
            </button>
            <button 
              className="bg-transparent cursor-pointer border border-white text-white hover:bg-white/10 px-6 py-3 rounded-md font-medium transform hover:-translate-y-0.5 transition-all"
              onClick={() => scrollToSection('contact')}
            >
              Get in Touch
            </button>
          </div>
        </div>
        <div 
          className="absolute inset-0 z-0 overflow-hidden"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000)', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            filter: 'blur(3px)'
          }}
        ></div>
      </section>
      
      <section id="about" className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-4">About Our Work</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12 rounded-full"></div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="mb-4 text-lg leading-relaxed">At AI Science Hub, we're a collaborative group of researchers and practitioners working across multiple organizations to advance the field of artificial intelligence. Our expertise spans machine learning, natural language processing, computer vision, and ethical AI development.</p>
              <p className="mb-4 text-lg leading-relaxed">Our team has contributed to significant AI advancements through collaborations with leading research institutions, technology companies, and academic organizations. We believe in open science and sharing knowledge to accelerate innovation in the field.</p>
              <p className="text-lg leading-relaxed">Through our interdisciplinary approach, we tackle complex AI challenges by combining theoretical innovations with practical applications, always keeping ethical considerations at the forefront of our work.</p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md h-80 overflow-hidden rounded-lg shadow-xl transform transition-all hover:scale-105 duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1573164574230-db1d5e960238?q=80&w=1000" 
                  alt="AI research team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="research" className="py-20 bg-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-4">Research Areas</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12 rounded-full"></div>
          <div className="grid md:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={area.image} 
                    alt={area.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{area.title}</h3>
                  <p className="text-slate-600 mb-4">{area.description}</p>
                  <button 
                    className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors flex items-center space-x-2"
                    onClick={() => openModal(area.title, area.details, 'research')}
                  >
                    <span>Learn More</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section id="publications" className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-4">Featured Publications</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12 rounded-full"></div>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:translate-x-1 border-l-4 border-blue-600"
              >
                <h3 className="text-xl font-bold mb-2">{pub.title}</h3>
                <p className="text-blue-600 text-sm mb-4">Published in {pub.conference} {pub.year}</p>
                <p className="mb-4 text-slate-700">{pub.abstract}</p>
                <button 
                  className="border cursor-pointer border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded transition-colors flex items-center space-x-2"
                  onClick={() => openModal(pub.title, pub.fullText, 'publication')}
                >
                  <span>Read Paper</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section id="team" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-4">Our Research Team</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12 rounded-full"></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="text-center bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden shadow-md border-4 border-white relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                <p className="text-blue-600 mb-3">{member.role}</p>
                <p className="text-sm text-slate-600 mb-4">{member.bio}</p>
                <button 
                  className="text-blue-600 cursor-pointer hover:text-blue-800 text-sm flex items-center space-x-1 mx-auto transition-colors"
                  onClick={() => openModal(member.name, member.fullBio, 'team')}
                >
                  <span>View Full Bio</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section id="contact" className="py-20 bg-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12 rounded-full"></div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-medium mb-2 text-slate-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-medium mb-2 text-slate-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block font-medium mb-2 text-slate-700">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block font-medium mb-2 text-slate-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-y transition-all"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 cursor-pointer text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center space-x-2 shadow-md hover:shadow-lg"
                >
                  <span>Send Message</span>
                  <Send size={16} />
                </button>
              </form>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px]">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Research Lab</h3>
                  <p className="text-slate-600">{contactInfo.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px]">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Email Us</h3>
                  <p className="text-blue-600 hover:underline">
                    <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px]">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Call Us</h3>
                  <p className="text-blue-600 hover:underline">
                    <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px]">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Link2 size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Follow Us</h3>
                  <div className="flex space-x-4 mt-2">
                    <a href="https://x.com" className="transition-transform hover:scale-110">
                      <div className="w-9 h-9 bg-slate-200 hover:bg-blue-100 rounded-full flex items-center justify-center">
                        <X size={18} className="text-slate-700" />
                      </div>
                    </a>
                    <a href="https://linkedin.com" className="transition-transform hover:scale-110">
                      <div className="w-9 h-9 bg-slate-200 hover:bg-blue-100 rounded-full flex items-center justify-center">
                        <Linkedin size={18} className="text-slate-700" />
                      </div>
                    </a>
                    <a href="https://github.com" className="transition-transform hover:scale-110">
                      <div className="w-9 h-9 bg-slate-200 hover:bg-blue-100 rounded-full flex items-center justify-center">
                        <Github size={18} className="text-slate-700" />
                      </div>
                    </a>
                    <a href="https://facebook.com" className="transition-transform hover:scale-110">
                      <div className="w-9 h-9 bg-slate-200 hover:bg-blue-100 rounded-full flex items-center justify-center">
                        <Facebook size={18} className="text-slate-700" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="bg-slate-800 text-white pt-16 pb-8">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="text-2xl font-bold mb-6 flex items-center space-x-2">
                <span className="bg-blue-600 text-white p-2 rounded-lg">AI</span>
                <span>Science <span className="text-blue-500">Hub</span></span>
              </div>
              <p className="opacity-80 mb-6 leading-relaxed">Advancing AI research through interdisciplinary collaboration and ethical innovation to solve complex problems and build a better future.</p>
              <div className="flex gap-4">
                <a href="https://x.com" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <X size={18} className="text-white" />
                </a>
                <a href="https://linkedin.com" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Linkedin size={18} className="text-white" />
                </a>
                <a href="https://github.com" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Github size={18} className="text-white" />
                </a>
                <a href="https://facebook.com" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Facebook size={18} className="text-white" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6 border-b border-slate-700 pb-2">Quick Links</h3>
              <ul className="space-y-3">
                {['about', 'research', 'publications', 'team', 'contact'].map((section) => (
                  <li key={section}>
                    <a
                      href={`#${section}`}
                      className="opacity-80 hover:opacity-100 transition-opacity capitalize flex items-center space-x-2 group"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(section);
                      }}
                    >
                      <ChevronRight size={16} className="text-blue-500" />
                      <span className="group-hover:translate-x-1 transition-transform">{section}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-white/10 text-sm opacity-60">
            <p>&copy; {new Date().getFullYear()} AI Science Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      {modalOpen && modalContent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div 
            className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden relative animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 flex justify-between items-start border-b">
              <h3 className="text-xl font-bold">{modalContent.title}</h3>
              <button 
                onClick={closeModal}
                className="text-slate-500 hover:text-slate-800 transition-colors"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[70vh]">
              <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                {modalContent.content}
              </p>
            </div>
            <div className="p-4 border-t bg-slate-50 flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {showAlert && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in flex items-center space-x-2">
          <span>Message sent successfully!</span>
          <button 
            onClick={() => setShowAlert(false)}
            className="ml-2 hover:text-green-200 transition-colors"
          >
            <X size={18} />
          </button>
        </div>
      )}
      
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}