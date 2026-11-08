"use client";

import { useState } from "react";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Check, Code2, Command,
  Github, Layers3, Mail, Menu, Monitor, Terminal, X
} from "lucide-react";

const projects = [
  {
    number: "01",
    name: "HyperIsland OS",
    category: "DESKTOP APPLICATION",
    description:
      "A custom lightweight Dynamic Island desktop application for Windows 11. Designed to bring a focused, polished utility layer to the desktop with a native-minded experience.",
    stack: ["Tauri", "Rust", "React", "Tailwind CSS", "TypeScript"],
    type: "desktop",
    featured: true,
    visual: "hyper"
  },
  {
    number: "02",
    name: "RuangNiaga",
    category: "E-COMMERCE PLATFORM",
    description:
      "A modern e-commerce marketplace web application designed around intuitive navigation, a clear shopping journey, and seamless product management.",
    stack: ["React", "Tailwind CSS", "JavaScript"],
    type: "web",
    featured: false,
    visual: "commerce"
  },
  {
    number: "03",
    name: "Resto Warung Papatong",
    category: "RESTAURANT WEBSITE",
    description:
      "An official responsive web presence for a restaurant in Cibinong, Bogor, bringing menus, essential restaurant information, and location details into one accessible experience.",
    stack: ["Next.js", "Tailwind CSS", "React"],
    type: "web",
    featured: false,
    visual: "restaurant"
  }
];

const skillGroups = [
  {
    icon: Code2,
    title: "Frontend core",
    index: "01",
    description: "The building blocks behind reliable, maintainable interfaces.",
    skills: ["React", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"]
  },
  {
    icon: Layers3,
    title: "Styling & UI",
    index: "02",
    description: "Turning product intent into clear, responsive experiences.",
    skills: ["Tailwind CSS", "Responsive Design", "UI/UX Prototyping"]
  },
  {
    icon: Terminal,
    title: "Tools & workflow",
    index: "03",
    description: "A practical toolkit for shipping, refining, and maintaining work.",
    skills: ["Git", "Tauri", "Rust (basics)", "Vite", "Performance Optimization", "VS Code"]
  }
];

const milestones = [
  {
    year: "FOUNDATION",
    title: "Exploring the web",
    text: "Built a practical foundation in web technologies, learning how interfaces are structured, styled, and brought to life."
  },
  {
    year: "BUILDING",
    title: "Frontend development",
    text: "Moved into component-based development with React, modern JavaScript, and Tailwind CSS, focusing on responsive UI and clean implementation."
  },
  {
    year: "EXPERIMENTING",
    title: "Beyond the browser",
    text: "Started exploring desktop utilities with Tauri and Rust, combining web technologies with lightweight desktop experiences."
  },
  {
    year: "NOW",
    title: "Building with intent",
    text: "Continuing to refine performance, architecture, and interaction design through practical projects and continuous learning."
  }
];

function SectionHeading({ number, label, title, detail }: {
  number: string; label: string; title: React.ReactNode; detail?: string;
}) {
  return (
    <div className="mb-12 grid gap-5 md:grid-cols-[1fr_1fr] md:items-end">
      <div>
        <p className="eyebrow mb-4">{number} / {label}</p>
        <h2 className="text-3xl font-semibold tracking-[-0.055em] text-zinc-100 sm:text-4xl">{title}</h2>
      </div>
      {detail && <p className="max-w-md text-sm leading-7 text-zinc-500 md:justify-self-end">{detail}</p>}
    </div>
  );
}

function ProjectVisual({ kind }: { kind: string }) {
  if (kind === "hyper") {
    return (
      <div className="relative flex h-full min-h-[220px] items-center justify-center overflow-hidden bg-[#111713] p-6 sm:min-h-[270px]">
        <div className="absolute inset-0 grid-lines opacity-70" />
        <div className="relative w-full max-w-[390px] rounded-2xl border border-white/10 bg-[#080b09] p-3 shadow-2xl shadow-black/50">
          <div className="mb-3 flex items-center justify-between px-1">
            <div className="flex gap-1.5"><i className="h-2 w-2 rounded-full bg-zinc-700"/><i className="h-2 w-2 rounded-full bg-zinc-700"/><i className="h-2 w-2 rounded-full bg-zinc-700"/></div>
            <span className="font-mono text-[9px] tracking-widest text-zinc-600">HYPERISLAND / 01</span>
          </div>
          <div className="rounded-xl border border-lime-300/20 bg-[#141b14] px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-lime-300/10 text-lime-300"><Monitor size={17}/></div>
                <div><p className="text-xs font-semibold text-zinc-100">Now playing</p><p className="mt-1 text-[10px] text-zinc-500">Desktop activity</p></div>
              </div>
              <span className="rounded-full border border-lime-300/20 px-2 py-1 text-[9px] text-lime-300">ACTIVE</span>
            </div>
            <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[62%] rounded-full bg-lime-300"/></div>
          </div>
          <div className="mt-2 flex items-center justify-between px-1 text-[9px] text-zinc-600"><span>LIGHTWEIGHT · NATIVE-MINDED</span><span>WINDOWS 11</span></div>
        </div>
        <span className="absolute bottom-4 right-5 font-mono text-[9px] tracking-[.25em] text-lime-300/60">TAURI / RUST</span>
      </div>
    );
  }
  if (kind === "commerce") {
    return (
      <div className="relative flex h-full min-h-[190px] items-center justify-center overflow-hidden bg-[#15151b] p-6 sm:min-h-[220px]">
        <div className="absolute inset-0 grid-lines opacity-60"/>
        <div className="relative w-full max-w-[370px] rounded-xl border border-white/10 bg-[#0c0c10] p-4 shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-3"><span className="text-xs font-bold tracking-tight">ruang<span className="text-lime-300">niaga.</span></span><div className="flex gap-3 text-[9px] text-zinc-500"><span>Discover</span><span>Products</span><span>Cart (2)</span></div></div>
          <div className="py-4"><p className="text-[9px] uppercase tracking-[.2em] text-zinc-500">Curated marketplace</p><p className="mt-1 text-xl font-semibold tracking-tight">Find your next <span className="text-lime-300">favorite.</span></p></div>
          <div className="grid grid-cols-3 gap-2">
            {["#343b34", "#39333c", "#34383e"].map((c, i) => <div key={c} className="rounded-lg border border-white/10 p-2"><div className="mb-2 h-12 rounded-md" style={{background: `linear-gradient(145deg, ${c}, #17171b)`}}/><div className="h-1.5 w-3/4 rounded bg-zinc-700"/><div className="mt-1.5 h-1 w-1/2 rounded bg-zinc-800"/></div>)}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="relative flex h-full min-h-[190px] items-center justify-center overflow-hidden bg-[#171511] p-6 sm:min-h-[220px]">
      <div className="absolute inset-0 grid-lines opacity-60"/>
      <div className="relative w-full max-w-[370px] overflow-hidden rounded-xl border border-white/10 bg-[#11100d] shadow-2xl">
        <div className="relative flex h-28 items-end bg-gradient-to-br from-[#5d4a2c] via-[#272116] to-[#12110e] p-4">
          <div className="absolute right-7 top-5 h-16 w-16 rounded-full border border-amber-200/20"/>
          <div className="absolute right-11 top-9 h-8 w-8 rounded-full border border-amber-200/20"/>
          <div><p className="text-[8px] tracking-[.25em] text-amber-100/70">CIBINONG · BOGOR</p><p className="mt-1 text-lg font-semibold tracking-tight text-white">Warung Papatong</p></div>
        </div>
        <div className="flex items-center justify-between p-3"><span className="text-[9px] text-zinc-400">Authentic taste, welcoming place.</span><span className="rounded-full border border-amber-200/20 px-2 py-1 text-[8px] text-amber-100/80">EXPLORE MENU ↗</span></div>
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "cmnaufalazaqi@gmail.com";

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="noise" aria-hidden="true"/>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/[0.07] bg-zinc-950/80 backdrop-blur-xl">
        <nav className="container-shell flex h-[72px] items-center justify-between" aria-label="Main navigation">
          <a href="#home" className="group flex items-center gap-2.5" onClick={closeMenu}>
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-lime-300/30 bg-lime-300/[0.08] font-mono text-xs font-bold text-lime-300">NA</span>
            <span className="text-sm font-semibold tracking-tight text-zinc-100">naufal<span className="text-zinc-500">.dev</span></span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {["About", "Projects", "Skills", "Journey"].map((item) => <a key={item} className="nav-link text-xs" href={`#${item.toLowerCase()}`}>{item}</a>)}
          </div>
          <div className="hidden items-center gap-4 md:flex">
            <span className="flex items-center gap-2 text-[10px] text-zinc-400"><span className="accent-dot"/> Available for freelance work</span>
            <a href="#contact" className="rounded-full border border-zinc-700 px-4 py-2 text-xs font-medium text-zinc-100 transition hover:border-lime-300/50 hover:bg-lime-300/10">Let&apos;s talk <ArrowUpRight className="ml-1 inline" size={13}/></a>
          </div>
          <button className="rounded-lg border border-white/10 p-2 text-zinc-300 md:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={19}/> : <Menu size={19}/>}</button>
        </nav>
        {menuOpen && <div className="border-t border-white/10 bg-zinc-950 px-6 py-5 md:hidden"><div className="container-shell flex flex-col gap-5">{["About", "Projects", "Skills", "Journey", "Contact"].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu} className="text-sm text-zinc-300">{item}<ArrowUpRight className="ml-2 inline" size={13}/></a>)}<p className="flex items-center gap-2 text-xs text-zinc-500"><span className="accent-dot"/> Available for freelance work</p></div></div>}
      </header>

      <main id="home">
        <section className="relative flex min-h-[760px] items-center overflow-hidden pt-24 sm:min-h-[820px]">
          <div className="absolute inset-0 grid-lines opacity-60"/>
          <div className="absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-lime-300/[0.035] to-transparent"/>
          <div className="container-shell relative z-10 grid gap-14 pb-20 pt-16 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
            <div>
              <div className="mb-9 inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900/70 px-3 py-2 text-[10px] tracking-wide text-zinc-400">
                <span className="accent-dot"/> INDEPENDENT DEVELOPER <span className="text-zinc-700">/</span> WEST JAVA, ID
              </div>
              <p className="eyebrow mb-5">Digital craft. Thoughtful engineering.</p>
              <h1 className="hero-title max-w-4xl text-[clamp(4rem,10vw,8.7rem)] font-semibold leading-[.86] text-zinc-50">M Naufal<br/><span className="text-zinc-500">Azaqi</span><span className="text-lime-300">.</span></h1>
              <div className="mt-9 flex flex-col gap-6 sm:flex-row sm:items-center">
                <p className="max-w-xl text-base leading-8 text-zinc-400 sm:text-[17px]">Building high-performance web applications, custom digital tools, and immersive frontend experiences with clean code.</p>
                <div className="hidden h-14 w-px bg-white/10 sm:block"/>
                <div className="shrink-0"><p className="text-xs font-medium text-zinc-200">Frontend Web Developer</p><p className="mt-1 text-xs text-zinc-500">& Content Creator</p></div>
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href="#projects" className="group inline-flex items-center gap-3 rounded-full bg-lime-300 px-6 py-3.5 text-xs font-bold text-zinc-950 transition hover:bg-lime-200">Explore work <ArrowUpRight size={15} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/></a>
                <a href="#contact" className="inline-flex items-center gap-3 rounded-full border border-zinc-700 px-6 py-3.5 text-xs font-semibold text-zinc-200 transition hover:border-zinc-500 hover:bg-white/[0.04]">Get in touch <ArrowRight size={14}/></a>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[390px] lg:justify-self-end">
              <div className="absolute -inset-5 border border-white/[0.06]"/>
              <div className="relative border border-white/10 bg-[#0e0e10] p-5 shadow-2xl shadow-black/40">
                <div className="mb-10 flex items-center justify-between"><span className="font-mono text-[10px] tracking-[.2em] text-zinc-600">PROFILE / 001</span><Command size={15} className="text-zinc-600"/></div>
                <div className="mb-8 flex h-24 w-24 items-center justify-center border border-lime-300/25 bg-lime-300/[0.06] text-3xl font-semibold tracking-[-.08em] text-lime-300">NA<span className="text-white">.</span></div>
                <p className="text-2xl font-semibold tracking-[-.05em] text-zinc-100">Ideas into<br/>interfaces<span className="text-lime-300">.</span></p>
                <p className="mt-4 max-w-[260px] text-xs leading-6 text-zinc-500">A hands-on approach to building digital products that feel considered, fast, and useful.</p>
                <div className="mt-10 grid grid-cols-2 border-t border-white/10 pt-4">
                  <div><p className="font-mono text-[9px] tracking-widest text-zinc-600">FOCUS</p><p className="mt-2 text-xs text-zinc-300">Frontend & UI</p></div>
                  <div><p className="font-mono text-[9px] tracking-widest text-zinc-600">BASED IN</p><p className="mt-2 text-xs text-zinc-300">Indonesia, ID</p></div>
                </div>
                <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-4"><span className="font-mono text-[9px] text-zinc-600">STATUS</span><span className="flex items-center gap-2 text-[10px] text-lime-300"><span className="accent-dot"/> Open to opportunities</span></div>
              </div>
              <span className="absolute -bottom-8 -left-8 font-mono text-[9px] tracking-[.25em] text-zinc-700">CRAFT / CODE / CREATE</span>
            </div>
          </div>
          <a href="#about" aria-label="Scroll to about section" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[9px] tracking-[.2em] text-zinc-600 transition hover:text-lime-300 sm:flex">SCROLL TO EXPLORE <ArrowDownRight size={13}/></a>
        </section>

        <section id="about" className="section-rule py-24 sm:py-28">
          <div className="container-shell">
            <SectionHeading number="01" label="A little about me" title={<>Curious by nature.<br/>Builder by practice.</>} detail="I enjoy the space where thoughtful design meets practical engineering — making technology feel straightforward and enjoyable to use."/>
            <div className="grid gap-10 md:grid-cols-[.75fr_1.25fr]">
              <div className="flex flex-col justify-between border-l border-lime-300/40 pl-5">
                <p className="text-sm leading-7 text-zinc-400">19 years old <span className="text-zinc-700">/</span> West Java, Indonesia</p>
                <p className="mt-8 font-mono text-[10px] leading-6 tracking-widest text-zinc-600">LEARN CONSTANTLY.<br/>BUILD INTENTIONALLY.</p>
              </div>
              <div className="max-w-2xl">
                <p className="text-lg leading-9 text-zinc-300 sm:text-xl">I&apos;m a hands-on developer and tech enthusiast passionate about modern web architectures, performance optimization, and building sleek user interfaces.</p>
                <p className="mt-5 text-sm leading-8 text-zinc-500">My day-to-day interests revolve around React, Next.js, and Tailwind CSS — from shaping responsive interfaces to exploring how web technologies can power custom desktop tools. I value clean code, useful details, and learning by making real things.</p>
                <div className="mt-8 flex flex-wrap gap-2">{["Frontend development", "Web performance", "Digital products", "Desktop utilities"].map((tag) => <span key={tag} className="skill-tag rounded-full px-3 py-2 text-[10px] text-zinc-400">{tag}</span>)}</div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section-rule py-24 sm:py-28">
          <div className="container-shell">
            <SectionHeading number="02" label="Selected work" title={<>Things I&apos;ve<br/>put into the world.</>} detail="A selection of web and desktop projects exploring useful functionality, clear interfaces, and thoughtful implementation."/>
            <div className="grid gap-5 md:grid-cols-2">
              {projects.map((project) => (
                <article key={project.number} className={`project-card group overflow-hidden border border-white/10 bg-[#0d0d0f] ${project.featured ? "md:col-span-2" : ""}`}>
                  <div className={project.featured ? "grid md:grid-cols-[1.08fr_.92fr]" : ""}>
                    <div className={project.featured ? "order-2" : ""}><ProjectVisual kind={project.visual}/></div>
                    <div className={`flex flex-col justify-between p-6 sm:p-8 ${project.featured ? "order-1 md:p-10" : "min-h-[270px]"}`}>
                      <div>
                        <div className="mb-5 flex items-center justify-between"><span className="font-mono text-[10px] tracking-widest text-zinc-600">PROJECT / {project.number}</span><span className="text-[9px] tracking-[.16em] text-zinc-600">{project.category}</span></div>
                        <h3 className="text-2xl font-semibold tracking-[-.05em] text-zinc-100 sm:text-3xl">{project.name}<span className="text-lime-300">.</span></h3>
                        <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-500">{project.description}</p>
                      </div>
                      <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
                        <div className="flex max-w-md flex-wrap gap-2">{project.stack.map((tech) => <span key={tech} className="rounded-full border border-white/10 px-2.5 py-1.5 text-[9px] text-zinc-400">{tech}</span>)}</div>
                        <span className="project-arrow text-zinc-500" aria-label="Project detail"><ArrowUpRight size={19}/></span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-6 text-[10px] leading-6 text-zinc-600">Project previews are visual representations. For source code and collaboration, visit my GitHub profile.</p>
          </div>
        </section>

        <section id="skills" className="section-rule py-24 sm:py-28">
          <div className="container-shell">
            <SectionHeading number="03" label="Capabilities" title="Tools of the trade." detail="A growing toolkit shaped by hands-on projects, experimentation, and a focus on practical frontend craft."/>
            <div className="grid gap-4 md:grid-cols-3">
              {skillGroups.map((group) => {
                const Icon = group.icon;
                return <div key={group.index} className="border border-white/10 bg-[#0d0d0f] p-6 transition-colors hover:border-lime-300/25 sm:p-7">
                  <div className="mb-10 flex items-center justify-between"><div className="flex h-10 w-10 items-center justify-center border border-lime-300/20 bg-lime-300/[0.06] text-lime-300"><Icon size={18}/></div><span className="font-mono text-[10px] text-zinc-700">{group.index}</span></div>
                  <h3 className="text-lg font-semibold tracking-tight text-zinc-100">{group.title}</h3>
                  <p className="mt-2 min-h-[48px] text-xs leading-6 text-zinc-500">{group.description}</p>
                  <div className="mt-7 flex flex-wrap gap-2">{group.skills.map((skill) => <span key={skill} className="skill-tag rounded-md px-2.5 py-2 text-[10px] text-zinc-400">{skill}</span>)}</div>
                </div>;
              })}
            </div>
          </div>
        </section>

        <section id="journey" className="section-rule py-24 sm:py-28">
          <div className="container-shell">
            <SectionHeading number="04" label="The journey" title={<>Progress over<br/>perfection.</>} detail="Every project is a chance to understand a little more, solve a real problem, and improve the way I build."/>
            <div className="relative ml-2 border-l border-zinc-800 md:ml-0">
              {milestones.map((item, index) => <div key={item.year} className="relative grid gap-3 pb-12 pl-8 last:pb-0 md:grid-cols-[.5fr_1fr] md:gap-12 md:pl-10">
                <span className="absolute -left-[5px] top-1 h-[9px] w-[9px] rounded-full border border-lime-300/70 bg-zinc-950"/>
                <div><p className="font-mono text-[10px] tracking-[.2em] text-lime-300">{item.year}</p><p className="mt-2 text-[10px] text-zinc-700">0{index + 1} — MILESTONE</p></div>
                <div><h3 className="text-lg font-semibold tracking-tight text-zinc-200">{item.title}</h3><p className="mt-3 max-w-xl text-sm leading-7 text-zinc-500">{item.text}</p></div>
              </div>)}
            </div>
          </div>
        </section>

        <section id="contact" className="section-rule py-24 sm:py-32">
          <div className="container-shell">
            <div className="relative overflow-hidden border border-white/10 bg-[#0d0f0b] px-6 py-12 sm:px-12 sm:py-16">
              <div className="absolute inset-y-0 right-0 hidden w-1/2 grid-lines opacity-60 md:block"/>
              <div className="absolute right-12 top-10 hidden h-40 w-40 rounded-full border border-lime-300/10 md:block"/>
              <div className="absolute right-20 top-18 hidden h-24 w-24 rounded-full border border-lime-300/10 md:block"/>
              <div className="relative z-10 max-w-2xl">
                <p className="eyebrow mb-5">05 / Make something useful</p>
                <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-.06em] text-zinc-100 sm:text-6xl">Have a good idea?<br/><span className="text-zinc-500">Let&apos;s build it.</span></h2>
                <p className="mt-6 max-w-lg text-sm leading-7 text-zinc-400">Open to freelance projects, collaborations, and opportunities to create thoughtful digital experiences. Tell me what you&apos;re working on.</p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <a href={`mailto:${email}?subject=Project%20Inquiry`} className="inline-flex items-center gap-3 rounded-full bg-lime-300 px-6 py-3.5 text-xs font-bold text-zinc-950 transition hover:bg-lime-200">Start a conversation <ArrowUpRight size={15}/></a>
                  <button onClick={copyEmail} className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-3.5 text-xs font-medium text-zinc-300 transition hover:border-zinc-500 hover:bg-white/[0.04]">{copied ? <Check size={14}/> : <Mail size={14}/>} {copied ? "Email copied" : "Copy email"}</button>
                </div>
                <div className="mt-10 flex items-center gap-5 border-t border-white/10 pt-6">
                  <a href="https://github.com/ktzo007" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs text-zinc-400 transition hover:text-lime-300"><Github size={15}/> GitHub <ArrowUpRight size={12}/></a>
                  <a href={`mailto:${email}`} className="inline-flex items-center gap-2 text-xs text-zinc-400 transition hover:text-lime-300"><Mail size={15}/> Email <ArrowUpRight size={12}/></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/[0.07] py-7">
        <div className="container-shell flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <a href="#home" className="text-xs font-semibold tracking-tight text-zinc-300">naufal<span className="text-zinc-600">.dev</span></a>
          <p className="text-[10px] text-zinc-600">© {new Date().getFullYear()} M Naufal Azaqi. Designed & built with intention.</p>
          <a href="#home" className="inline-flex items-center gap-2 text-[10px] text-zinc-500 transition hover:text-lime-300">Back to top <ArrowUpRight size={12}/></a>
        </div>
      </footer>
    </>
  );
}
