import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ownPhoto from './img/own pic.jpeg';
import yuvaCer from './img/yuva cer.jpeg';
import marathiCer from './img/marathi cer.jpeg';
import jobCer from './img/job cer.jpeg';
import evwCer from './img/evw cer.jpeg';
import {
  FaArrowRight,
  FaCode,
  FaDatabase,
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaGraduationCap,
  FaLinkedin,
  FaPhone,
  FaProjectDiagram,
  FaTools,
  FaTrophy,
} from 'react-icons/fa';
import './App.css';

const skills = [
  { title: 'Programming', items: ['C', 'C++', 'Java', 'JavaScript'], glow: 'from-cyan-500 to-blue-500' },
  { title: 'Web Development', items: ['HTML', 'CSS', 'Tailwind CSS', 'React'], glow: 'from-fuchsia-500 to-pink-500' },
  { title: 'Database', items: ['MySQL'], glow: 'from-emerald-500 to-cyan-500' },
  { title: 'Tools', items: ['Git', 'GitHub', 'VS Code'], glow: 'from-violet-500 to-purple-500' },
];

const achievements = [
  { value: '90%', label: 'Second-year score' },
  { value: '3rd', label: 'Year student' },
  { value: '4+', label: 'Core tech skills' },
  { value: '10+', label: 'Hands-on projects' },
];

const projects = [
  {
    title: 'Student Management System',
    description: 'A practical dashboard to manage records, attendance and learning progress with a clean student-friendly experience.',
    stack: ['Java', 'MySQL', 'JavaFX'],
    image: '/gallery/gallery-1.svg',
  },
  {
    title: 'Portfolio Website',
    description: 'A modern personal brand site with smooth motion, polished visuals and an approachable first impression.',
    stack: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: '/gallery/gallery-2.svg',
  },
  {
    title: 'Library Management System',
    description: 'An organized system for book tracking, borrowing activity and simple library operations.',
    stack: ['C++', 'File Handling', 'OOP'],
    image: '/gallery/gallery-3.svg',
  },
  {
    title: 'Health Care',
    description: 'A healthcare-focused platform designed to simplify appointment booking, services and patient access.',
    stack: ['React', 'Tailwind CSS', 'UI/UX'],
    image: '/gallery/gallery-4.svg',
  },
  {
    title: 'Food Ease',
    description: 'A food ordering and discovery experience built to make browsing meals and placing orders feel effortless.',
    stack: ['JavaScript', 'CSS', 'Frontend'],
    image: '/gallery/gallery-1.svg',
    link: 'https://food-ease-45ek1wrkd-prapti12308.vercel.app/',
  },
];

const certificates = [
  { title: 'Yuva Certificate', image: yuvaCer },
  { title: 'Marathi Certificate', image: marathiCer },
  { title: 'Job Certificate', image: jobCer },
  { title: 'EVW Certificate', image: evwCer },
];

const galleryItems = [
  { title: 'My Photo', image: ownPhoto },
  { title: 'Yuva Certificate', image: yuvaCer },
  { title: 'Marathi Certificate', image: marathiCer },
  { title: 'Job Certificate', image: jobCer },
];

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <motion.div
          className="absolute h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl"
          animate={{ x: mousePos.x - 160, y: mousePos.y - 160 }}
          transition={{ type: 'spring', stiffness: 80, damping: 25 }}
        />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="text-lg font-semibold tracking-[0.25em] text-cyan-300">PRAPTI</a>
          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-cyan-300">About</a>
            <a href="#skills" className="transition hover:text-cyan-300">Skills</a>
            <a href="#projects" className="transition hover:text-cyan-300">Projects</a>
            <a href="#contact" className="transition hover:text-cyan-300">Contact</a>
          </div>
        </nav>
      </header>

      <main className="relative z-10">
        <section id="home" className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
              Diploma Computer Engineering Student
            </div>
            <div className="space-y-4">
              <p className="text-lg text-slate-300">Hi, I am</p>
              <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">Prapti Deepak Ahirrao</h1>
              <div className="text-2xl font-semibold text-transparent sm:text-3xl lg:text-4xl">
                <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-pink-400 bg-clip-text">
                  Web Developer • Future Software Engineer • AI Curious Learner
                </span>
              </div>
              <p className="max-w-2xl text-lg text-slate-300">
                I enjoy turning ideas into useful digital experiences with a friendly, thoughtful and growth-driven approach to coding.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="/resume/resume.pdf" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 font-semibold text-white transition hover:scale-105">
                <FaDownload /> Download Resume
              </a>
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-slate-100 transition hover:border-cyan-300/60">
                Explore Projects <FaArrowRight />
              </a>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-slate-400">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Friendly & collaborative</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">AI + web curiosity</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Always learning</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative mx-auto w-full max-w-md">
            <div className="hero-ring absolute inset-4 rounded-full" />
            <div className="glass-card relative overflow-hidden rounded-[2rem] p-3">
              <img src={ownPhoto} alt="Prapti Ahirrao" className="h-[420px] w-full rounded-[1.5rem] object-cover" />
            </div>
          </motion.div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="glass-card grid gap-8 rounded-[2rem] p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-3 py-2 text-sm text-fuchsia-200">
                <FaGraduationCap /> About Me
              </div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Building ideas with curiosity and code.</h2>
            </div>
            <p className="text-lg leading-8 text-slate-300">
              I am Prapti Deepak Ahirrao, a diploma computer engineering student at Bhausaheb Vartak Polytechnic. I enjoy building thoughtful web experiences and learning how modern tools like AI and design systems can make technology feel more human.
            </p>
          </motion.div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="space-y-6">
            <div className="flex items-center gap-3">
              <FaCode className="text-fuchsia-300" size={24} />
              <h2 className="text-3xl font-bold text-white">Skills</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {skills.map((group) => (
                <div key={group.title} className="glass-card rounded-[1.5rem] p-6">
                  <div className={`mb-4 h-1.5 w-20 rounded-full bg-gradient-to-r ${group.glow}`} />
                  <h3 className="mb-4 text-xl font-semibold text-white">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-slate-200">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="achievements" className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="glass-card rounded-[2rem] p-8 lg:p-10">
            <div className="mb-8 flex items-center gap-3">
              <FaTrophy className="text-pink-300" size={24} />
              <h2 className="text-3xl font-bold text-white">Achievements</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {achievements.map((achievement) => (
                <div key={achievement.label} className="rounded-[1.25rem] border border-white/10 bg-slate-900/60 p-5 text-center">
                  <p className="text-4xl font-black text-cyan-300">{achievement.value}</p>
                  <p className="mt-2 text-slate-300">{achievement.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="space-y-6">
            <div className="flex items-center gap-3">
              <FaProjectDiagram className="text-fuchsia-300" size={24} />
              <h2 className="text-3xl font-bold text-white">Projects</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => (
                <div key={project.title} className="glass-card overflow-hidden rounded-[1.5rem] p-0">
                  <img src={project.image} alt={project.title} className="h-40 w-full object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-2 text-slate-300">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span key={tech} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">{tech}</span>
                      ))}
                    </div>
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200">
                        View Project <FaArrowRight />
                      </a>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="certificates" className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="space-y-6">
            <div className="flex items-center gap-3">
              <FaTrophy className="text-cyan-300" size={24} />
              <h2 className="text-3xl font-bold text-white">Certificates</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {certificates.map((certificate) => (
                <button key={certificate.title} onClick={() => setActiveImage(certificate)} className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/70 text-left transition hover:-translate-y-1">
                  <img src={certificate.image} alt={certificate.title} className="h-44 w-full object-cover transition duration-300 group-hover:scale-105" />
                  <div className="p-4">
                    <h3 className="font-semibold text-white">{certificate.title}</h3>
                    <p className="mt-2 text-sm text-slate-400">Tap to preview</p>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="glass-card grid gap-8 rounded-[2rem] p-8 lg:grid-cols-[0.8fr_1.2fr] lg:p-10">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-white">Let's connect</h2>
                <p className="mt-3 text-slate-300">I am open to internships, collaborations and opportunities in web development and software engineering.</p>
              </div>
              <div className="space-y-4 text-slate-300">
                <a href="mailto:ahirraoprapti@example.com" className="flex items-center gap-3 transition hover:text-cyan-300"><FaEnvelope /> ahirraoprapti@example.com</a>
                <a href="tel:+919999999999" className="flex items-center gap-3 transition hover:text-cyan-300"><FaPhone /> +91 99999 99999</a>
                <a href="https://www.linkedin.com/" className="flex items-center gap-3 transition hover:text-cyan-300"><FaLinkedin /> LinkedIn</a>
                <a href="https://github.com/" className="flex items-center gap-3 transition hover:text-cyan-300"><FaGithub /> GitHub</a>
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/60 p-6">
              <p className="text-slate-300">I am always happy to connect about internships, creative projects, collaborations and anything that blends technology with user-friendly design.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="mailto:ahirraoprapti@example.com" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">Email Me</a>
                <a href="#home" className="rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-4 py-2 text-sm text-fuchsia-200">Back to Top</a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-slate-950/90 px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-slate-400">© 2026 Prapti Deepak Ahirrao. Crafted with curiosity and care.</p>
          <div className="flex gap-4 text-slate-300">
            <a href="https://github.com/" className="transition hover:text-cyan-300"><FaGithub /></a>
            <a href="https://www.linkedin.com/" className="transition hover:text-cyan-300"><FaLinkedin /></a>
            <a href="mailto:ahirraoprapti@example.com" className="transition hover:text-cyan-300"><FaEnvelope /></a>
          </div>
        </div>
      </footer>

      {activeImage ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-6" onClick={() => setActiveImage(null)}>
          <div className="relative max-w-4xl rounded-[2rem] border border-white/10 bg-slate-900/95 p-3" onClick={(event) => event.stopPropagation()}>
            <button onClick={() => setActiveImage(null)} className="absolute right-4 top-4 rounded-full bg-slate-800/80 p-2 text-white">X</button>
            <img src={activeImage.image} alt={activeImage.title} className="max-h-[75vh] w-full rounded-[1.5rem] object-contain" />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
