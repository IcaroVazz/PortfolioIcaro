import React, { useState, useEffect, useRef } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  ArrowUpRight,
  ArrowUp,
  Monitor,
  Smartphone,
  Database,
  Layers,
  Terminal,
  Briefcase,
  Code2,
  Cpu,
  Globe,
  Server,
  GitBranch,
  FileText,
  Wrench
} from 'lucide-react';

/* --- COMPONENTE DE FUNDO DE GALÁXIA (MANTIDO) --- */
const GalaxyBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrameId;

    canvas.width = width;
    canvas.height = height;

    const stars = [];
    const numStars = 150;

    class Star {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.brightness = Math.random();
        this.change = Math.random() * 0.02;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.brightness += this.change;
        if (this.brightness <= 0 || this.brightness >= 1) {
          this.change = -this.change;
        }
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.brightness})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < numStars; i++) {
      stars.push(new Star());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      stars.forEach(star => {
        star.update();
        star.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      // Mantendo o fundo escuro e profundo
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 bg-slate-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black"
    />
  );
};

/* --- DADOS (MANTIDOS) --- */
const skillCategories = [
  {
    title: "Core & Languages",
    icon: Cpu,
    skills: ["Full Stack Development", "JavaScript & TypeScript", "Python Automation", "Java (OOP)", "C# (Learning Path)"]
  },
  {
    title: "Frontend Ecosystem",
    icon: Monitor,
    skills: ["React.js & Next.js", "Responsive UI Design", "Modern CSS & Styling", "Component Patterns", "DOM Manipulation"]
  },
  {
    title: "Backend & Database",
    icon: Database,
    skills: ["Node.js Runtime", "MongoDB & NoSQL", "Firebase & Firestore", "Prisma ORM", "REST API Development"]
  },
  {
    title: "Tools & Versioning",
    icon: GitBranch,
    skills: ["Git & GitHub", "VS Code Environment", "Package Managers", "Basic CI/CD"]
  },
  {
    title: "Analysis & Education",
    icon: Globe,
    skills: ["Systems Analysis", "Software Requirements", "Logic & Algorithms", "Academic Research"]
  },
  {
    title: "Maintenance & Quality",
    icon: Wrench,
    skills: ["Debugging", "Code Refactoring", "Error Handling", "Clean Code Basics"]
  }
];

const typingSkills = skillCategories.flatMap(cat => cat.skills);

const portfolioData = {
  name: "Ícaro Vaz",
  role: "Full Stack Developer",
  bio: "Desenvolvimento de software navegando entre arquitetura robusta e interfaces estelares.",
  email: "icarovaz952@gmail.com",
  social: {
    github: "https://github.com/IcaroVazz",
    linkedin: "https://www.linkedin.com/in/icarovazz",
    email: "mailto:icarovaz952@gmail.com"
  },
  experience: [
    {
      year: "2026 - Presente",
      role: "Desenvolvedor Full Stack Junior",
      company: "Secretaria de Educação da Bahia",
      desc: "Desenvolvimento de módulos e ferramentas do ecossistema AcompanhaTec, atuando na implementação de funcionalidades backend, manutenção do sistema e colaboração na definição de soluções técnicas."
    },
    {
      year: "2024",
      role: "Frontend Developer",
      company: "Freelancer Projects",
      desc: "Atuação como frontend developer em projetos freelance, desenvolvendo interfaces completas, módulos reutilizáveis e integração com APIs."
    }
  ],
  skills: [
    { name: "Frontend Architecture", icon: Monitor },
    { name: "Backend Systems", icon: Database },
    { name: "Mobile Solutions", icon: Smartphone },
    { name: "UI/UX Design", icon: Layers }
  ],
  projects: [
    {
      title: "AcompanhaTec",
      category: "Government System",
      description: "Sistema de gestão em larga escala para acompanhamento pedagógico institucional.",
      tech: ["Next.js", "Firebase", "Analytics"],
      link: "https://acompanhatec.educacao.ba.gov.br/"
    },
    {
      title: "Barber Shop Plan",
      category: "SaaS Solution",
      description: "Solução digital completa para gestão de barbearias, otimizando o agendamento.",
      tech: ["React", "Scheduling Logic", "Modern UI"],
      link: "https://barbershopplan.netlify.app"
    },
  ]
};

/* --- COMPONENTES UI (CORES MODIFICADAS PARA TEAL/EMERALD) --- */

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Mudança: border-teal-500/20 e shadow teal
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 border-b border-teal-500/20 backdrop-blur-md shadow-[0_0_15px_rgba(20,184,166,0.1)]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Mudança: hover:text-teal-400 e ponto emerald */}
        <a href="#" className="text-xl font-bold tracking-tighter text-white hover:text-teal-400 transition-colors group">
          ICARO<span className="text-teal-500 group-hover:text-emerald-400 transition-colors">.</span>VAZ
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {/* Mudança: hover:text-teal-400 */}
          <a href="#projects" className="text-sm font-medium text-slate-300 hover:text-teal-400 transition-colors">Projetos</a>
          <a href="#about" className="text-sm font-medium text-slate-300 hover:text-teal-400 transition-colors">Sobre</a>
          <a href="#timeline" className="text-sm font-medium text-slate-300 hover:text-teal-400 transition-colors">Jornada</a>

          {/* Mudança: Botão Teal */}
          <a href="#contact" className="px-5 py-2 bg-slate-800/50 border border-teal-500/30 text-teal-400 text-sm font-bold rounded-full hover:bg-teal-500/10 hover:border-teal-400 hover:shadow-[0_0_10px_rgba(45,212,191,0.4)] transition-all">
            Contato
          </a>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <button className="text-white hover:text-teal-400 transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden flex flex-col space-y-4 shadow-xl">
          <a href="#projects" className="text-slate-300 hover:text-teal-400" onClick={() => setIsOpen(false)}>Projetos</a>
          <a href="#about" className="text-slate-300 hover:text-teal-400" onClick={() => setIsOpen(false)}>Sobre</a>
          <a href="#timeline" className="text-slate-300 hover:text-teal-400" onClick={() => setIsOpen(false)}>Jornada</a>
          <a href="#contact" className="text-teal-400 font-bold" onClick={() => setIsOpen(false)}>Contato</a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % typingSkills.length;
      const fullText = typingSkills[i];

      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 40 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="min-h-screen flex items-center pt-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight leading-[1.1] mb-4">
            Ícaro <br className="hidden md:block" />
            {/* Mudança: Gradiente Teal -> Emerald */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-500 to-teal-600 animate-pulse">
              Vaz
            </span>
            <span className="text-teal-400">.</span>
          </h1>

          <div className="h-[60px] flex items-center mb-8">
            <span className="text-xl md:text-3xl font-mono text-slate-400">
              {/* Mudança: Cursor e texto Teal */}
              {'>'} <span className="text-teal-300 drop-shadow-[0_0_5px_rgba(45,212,191,0.8)]">{text}</span>
              <span className="animate-pulse ml-1 text-teal-500">|</span>
            </span>
          </div>

          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed mb-12">
            {portfolioData.bio}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* Mudança: Botão principal Teal e sombra Teal */}
            <a href="#projects" className="px-8 py-4 bg-teal-600 text-white font-bold rounded-sm hover:bg-teal-500 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(13,148,136,0.4)] hover:shadow-[0_0_30px_rgba(45,212,191,0.6)] border border-teal-400/20">
              Ver Projetos <ArrowUpRight size={18} />
            </a>

            {/* Mudança: Botão secundário hover Teal */}
            <a
              href="#"
              className="px-8 py-4 bg-transparent border border-white/20 text-slate-200 font-bold rounded-sm hover:border-teal-500 hover:text-teal-400 hover:bg-teal-500/10 transition-all flex items-center justify-center gap-2"
            >
              <FileText size={18} /> Download CV
            </a>

            <a
              href={portfolioData.social.github}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 border border-white/10 text-slate-400 font-medium rounded-sm hover:bg-white/5 hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  return (
    <div className="bg-slate-900/40 border-y border-white/5 backdrop-blur-sm relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {portfolioData.skills.map((skill, idx) => (
          <div key={idx} className="flex flex-col gap-2 group cursor-default">
            {/* Mudança: hover:text-teal-400 */}
            <skill.icon className="text-slate-500 group-hover:text-teal-400 transition-colors duration-300" size={24} />
            <h3 className="text-slate-200 font-bold group-hover:text-white transition-colors">{skill.name}</h3>
            {/* Mudança: Gradiente da barra Teal -> Emerald */}
            <div className="h-0.5 w-12 bg-slate-700 group-hover:bg-gradient-to-r from-teal-500 to-emerald-600 transition-all duration-300 mt-2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TechArsenal = () => {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Capacidades Técnicas</h2>
          {/* Mudança: Barra de título Teal -> Emerald */}
          <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-emerald-600"></div>
          <p className="mt-4 text-slate-400 max-w-2xl text-lg">
            Stack tecnológica organizada por domínios de competência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              // Mudança: hover:border-teal-500/50
              className="group bg-slate-900/40 backdrop-blur-md border border-white/5 p-8 hover:border-teal-500/50 hover:bg-slate-800/60 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-6">
                {/* Mudança: Ícone Teal e sombra Emerald */}
                <div className="p-2 bg-slate-800/50 rounded-lg text-teal-400 group-hover:text-emerald-300 group-hover:shadow-[0_0_15px_rgba(52,211,153,0.4)] transition-all">
                  <category.icon size={20} />
                </div>
                {/* Mudança: Título hover Teal */}
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-teal-300 transition-colors">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    // Mudança: Pills hover border/text Teal
                    className="px-3 py-1.5 bg-slate-950/50 text-slate-400 text-xs font-mono border border-white/10 rounded-full group-hover:border-teal-500/30 group-hover:text-teal-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Timeline = () => {
  return (
    <section id="timeline" className="py-32 relative z-10 bg-slate-950/50 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Jornada Profissional</h2>
          {/* Mudança: Barra de título Teal -> Emerald */}
          <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-emerald-600"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Linha Central: Gradiente Teal para escuro */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500 via-emerald-900 to-transparent opacity-30"></div>

          {portfolioData.experience.map((item, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row items-start md:items-center justify-between mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Ponto Central: Borda e Sombra Teal */}
              <div className="absolute left-[-5px] md:left-1/2 w-3 h-3 bg-slate-950 border-2 border-teal-400 rounded-full md:-translate-x-1/2 z-20 shadow-[0_0_10px_rgba(45,212,191,0.8)]"></div>

              <div className="hidden md:block w-5/12"></div>

              <div className="w-full md:w-5/12 pl-8 md:pl-0 relative z-10">
                {/* Mudança: Hover border Teal */}
                <div className="group p-6 bg-slate-900/40 border border-white/5 rounded-lg hover:border-teal-500/30 transition-all">
                  {/* Mudança: Ano e sombra Teal */}
                  <span className="text-teal-400 font-mono text-xs font-bold mb-2 block tracking-widest drop-shadow-[0_0_5px_rgba(45,212,191,0.5)]">{item.year}</span>
                  {/* Mudança: Role hover Teal */}
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-teal-300 transition-colors">{item.role}</h3>
                  <div className="text-slate-400 text-sm font-medium mb-4 flex items-center gap-2">
                    {/* Mudança: Ícone Teal */}
                    <Briefcase size={14} className="text-teal-500" /> {item.company}
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 relative z-10 border-y border-white/5 bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div className="relative order-2 lg:order-1">
            {/* Efeito de brilho atrás do terminal: Teal/Emerald */}
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-lg blur opacity-20 animate-pulse"></div>

            <div className="relative bg-slate-950 border border-slate-800 rounded-lg overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-700/50" />
                  <div className="w-3 h-3 rounded-full bg-slate-700/50" />
                  <div className="w-3 h-3 rounded-full bg-slate-700/50" />
                </div>
                <div className="text-xs text-slate-500 font-mono flex items-center gap-2">
                  <Terminal size={12} /> icaro@universe:~
                </div>
              </div>
              <div className="p-6 overflow-x-auto bg-slate-950/90">
                {/* Cores do terminal ajustadas para remover roxo/amarelo e usar tons frios */}
                <pre className="font-mono text-sm leading-relaxed text-slate-300">
                  <div className="flex"><span className="text-teal-500 mr-2">const</span> <span className="text-slate-200">profile</span> <span className="text-teal-500">=</span> <span className="text-emerald-500">{`{`}</span></div>
                  <div className="flex ml-4"><span className="text-teal-400">name:</span> <span className="text-slate-300">"{portfolioData.name}"</span>,</div>
                  <div className="flex ml-4"><span className="text-teal-400">role:</span> <span className="text-slate-300">"{portfolioData.role}"</span>,</div>
                  <div className="flex ml-4"><span className="text-teal-400">focus:</span> <span className="text-emerald-500">[</span></div>
                  <div className="flex ml-8"><span className="text-slate-300">"Full Stack"</span>,</div>
                  <div className="flex ml-8"><span className="text-slate-300">"Automation"</span>,</div>
                  <div className="flex ml-8"><span className="text-slate-300">"System Analysis"</span></div>
                  <div className="flex ml-4"><span className="text-emerald-500">]</span>,</div>
                  <div className="flex ml-4"><span className="text-teal-500">init:</span> <span className="text-teal-500">async</span> <span className="text-emerald-500">()</span> <span className="text-teal-500">=&gt;</span> <span className="text-emerald-500">{`{`}</span></div>
                  <div className="flex ml-8"><span className="text-teal-500">return</span> <span className="text-slate-200">Code</span>.<span className="text-teal-300">deploy</span>(<span className="text-slate-300">"Excellence"</span>);</div>
                  <div className="flex ml-4"><span className="text-emerald-500">{'}'}</span></div>
                  <div className="flex"><span className="text-emerald-500">{'}'}</span>;</div>
                </pre>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-white mb-8">Arquitetura & Design</h2>
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                Tecnologia é sobre resolver problemas reais. Meu foco é desenvolver aplicações Full Stack funcionais e bem estruturadas, unindo a teoria da Análise de Sistemas com a prática de um código limpo e eficiente.
              </p>
              <p>
                Com versatilidade para transitar entre o desenvolvimento Web (Next.js, Node) e automação (Python, Java), não apenas escrevo código, mas crio soluções que modernizam processos e entregam valor.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6">
              {/* Mudança: Bordas e gradientes para Teal/Emerald */}
              <div className="border-l-2 border-teal-500 pl-6 bg-gradient-to-r from-teal-900/10 to-transparent py-2">
                <h4 className="text-white font-bold mb-2">Frontend</h4>
                <p className="text-sm text-slate-400">React, Next.js, Tailwind</p>
              </div>
              <div className="border-l-2 border-emerald-500 pl-6 bg-gradient-to-r from-emerald-900/10 to-transparent py-2">
                <h4 className="text-white font-bold mb-2">Backend</h4>
                <p className="text-sm text-slate-400">Node.js, Firebase, MongoDB</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  return (
    // Mudança: hover border Teal, shadow Teal, gradient overlay Teal/Emerald
    <a href={project.link} target="_blank" rel="noreferrer" className="group block bg-slate-900/40 backdrop-blur-md border border-white/5 hover:border-teal-500/50 transition-all duration-300 h-full flex flex-col hover:shadow-[0_0_20px_rgba(45,212,191,0.15)] rounded-sm overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

      <div className="p-8 flex flex-col h-full relative z-10">
        <div className="flex justify-between items-start mb-6">
          {/* Mudança: Tag Teal */}
          <span className="text-xs font-bold uppercase tracking-widest text-teal-400 border border-teal-500/20 px-2 py-1 rounded-sm bg-teal-950/30">
            {project.category}
          </span>
          {/* Mudança: Icon hover Teal */}
          <ArrowUpRight className="text-slate-500 group-hover:text-teal-400 transition-colors" size={20} />
        </div>

        {/* Mudança: Title hover Teal */}
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-400 leading-relaxed mb-8 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
          {project.tech.map((tech, i) => (
            // Mudança: Tech tags hover Teal
            <span key={i} className="text-xs font-mono text-slate-500 group-hover:text-teal-400 transition-colors">
              {tech}{i < project.tech.length - 1 ? ' •' : ''}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Projetos Selecionados</h2>
            {/* Mudança: Barra Teal -> Emerald */}
            <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-emerald-600"></div>
          </div>
          {/* Mudança: Link hover border Teal */}
          <a href={portfolioData.social.github} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium border-b border-transparent hover:border-teal-500 pb-1">
            Ver repositório completo <Github size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 border-t border-white/5 relative z-10 bg-gradient-to-b from-transparent to-slate-900/80">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Pronto para colaborar?</h2>
        <p className="text-slate-400 text-xl mb-12">
          Estou disponível para projetos de alta complexidade e consultoria estratégica.
        </p>
        {/* Mudança: Botão principal com gradiente Teal e sombra Teal */}
        <a
          href={`mailto:${portfolioData.email}`}
          className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-bold text-lg rounded-full hover:shadow-[0_0_30px_rgba(45,212,191,0.5)] transition-all hover:-translate-y-1"
        >
          <Mail size={20} /> Iniciar Conversa
        </a>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-500 text-sm font-mono">
          © {new Date().getFullYear()} Ícaro Vaz. All rights reserved.
        </div>
        <div className="flex space-x-6">
          {/* Mudança: Hover social links Teal */}
          <a href={portfolioData.social.github} className="text-slate-500 hover:text-teal-400 transition-colors">
            <Github size={20} />
          </a>
          <a href={portfolioData.social.linkedin} className="text-slate-500 hover:text-teal-400 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${portfolioData.email}`} className="text-slate-500 hover:text-teal-400 transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      // Mudança: Botão Teal e sombra Teal
      className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-teal-500 text-white shadow-[0_0_15px_rgba(45,212,191,0.5)] hover:bg-teal-400 transition-all duration-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
    >
      <ArrowUp size={24} />
    </button>
  );
};

const App = () => {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    // Mudança: Cor de seleção de texto para Teal
    <div className="min-h-screen font-sans text-slate-200 selection:bg-teal-500/30 selection:text-teal-100 relative overflow-hidden">
      <GalaxyBackground />
      <Navbar />
      <Hero />
      <Stats />
      <TechArsenal />
      <Timeline />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;