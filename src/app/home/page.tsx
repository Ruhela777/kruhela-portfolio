"use client";
import "./home.css";
import { useEffect, useRef, useState } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiMysql,
  SiMongodb,
  SiGoogle,
  SiGit,
  SiVercel,
  SiFigma,
} from "react-icons/si";
import { FaDatabase, FaTools, FaBrain, FaServer, FaCode } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Link from "next/link";

const LIGHT_IMAGE = "/profile.png";

const typewriterLines = [
  "Hello,",
  "meet the creative",
  "Full Stack Developer",
  "in this era.",
];

gsap.registerPlugin(ScrollTrigger);

// ---------------- STATEMENT SECTION ----------------

const StatementSection = ({ darkMode = false }: { darkMode?: boolean }) => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const statementBig = sectionRef.current!.querySelector(
        ".statement-big"
      ) as HTMLElement | null;

      if (!statementBig) return;

      const split = new SplitType(statementBig, {
        types: "chars",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
          pin: true,
        },
      });

      tl.to(split.chars, {
        opacity: 0,
        x: () => gsap.utils.random(-400, 400),
        y: () => gsap.utils.random(-300, 300),
        z: () => gsap.utils.random(-1000, 1000),
        rotation: () => gsap.utils.random(-360, 360),
        scale: 0.1,
        stagger: { each: 0.005, from: "random" },
        duration: 3,
        ease: "power2.in",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`statement-section ${darkMode ? "dark" : "light"}`}
    >
      <div className="statement-center">
        <div className="statement-small">FOR ME</div>

        <div className="statement-big">
          <span>CODE</span>
          <span>IS NOT JUST LOGIC,</span>
          <span>BUT A LANGUAGE TO</span>
          <span>DESIGN THE FUTURE I ENVISION.</span>
        </div>
      </div>
    </section>
  );
};

// ---------------- TECH STACK VISUALIZATION ----------------

const TechStackVisualization = ({
  darkMode = false,
}: {
  darkMode?: boolean;
}) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [isRotating, setIsRotating] = useState(true);

  const centerX = 500;
  const centerY = 500;
  const radius = 260;

  const getCenteredIndex = (idx: number, total: number) =>
    idx - (total - 1) / 2;

  const rawCategories = [
    {
      id: "frontend",
      label: "Frontend",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      angleDeg: -90,
      color: "#ff6b6b",
      subIcons: [
        {
          name: "React",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          color: "#61dafb",
        },
        {
          name: "HTML",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          color: "#e34f26",
        },
        {
          name: "CSS",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          color: "#1572b6",
        },
        {
          name: "JS",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          color: "#f7df1e",
        },
        {
          name: "Tailwind",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
          color: "#06b6d4",
        },
      ],
    },
    {
      id: "backend",
      label: "Backend",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      angleDeg: -18,
      color: "#4ecdc4",
      subIcons: [
        {
          name: "Node",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          color: "#339933",
        },
        {
          name: "Express",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
          color: "#000000",
        },
        {
          name: "Flask",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
          color: "#000000",
        },
        {
          name: "APIs",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          color: "#339933",
        },
      ],
    },
    {
      id: "database",
      label: "Database",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      angleDeg: 54,
      color: "#ffe66d",
      subIcons: [
        {
          name: "MySQL",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
          color: "#4479a1",
        },
        {
          name: "MongoDB",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
          color: "#47a248",
        },
      ],
    },
    {
      id: "tools",
      label: "Tools",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      angleDeg: 126,
      color: "#ff8b94",
      subIcons: [
        {
          name: "Git",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          color: "#f05032",
        },
        {
          name: "Vercel",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
          color: "#000000",
        },
        {
          name: "Figma",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
          color: "#f24e1e",
        },
      ],
    },
    {
      id: "aiml",
      label: "AI ML",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      angleDeg: 198,
      color: "#a8e6cf",
      subIcons: [
        {
          name: "OCR",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
          color: "#4285f4",
        },
        {
          name: "Gemini",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
          color: "#4285f4",
        },
        {
          name: "ML Models",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
          color: "#ff6f00",
        },
      ],
    },
  ];

  const categories = rawCategories.map((cat) => {
    const rad = (cat.angleDeg * Math.PI) / 180;
    return {
      ...cat,
      position: {
        angle: cat.angleDeg,
        x: Math.cos(rad) * radius,
        y: Math.sin(rad) * radius,
      },
    };
  });

  const handleMouseEnterCategory = (id: string) => {
    setHoveredCategory(id);
    setIsRotating(false);
  };

  const handleMouseLeaveCategory = () => {
    setHoveredCategory(null);
    setIsRotating(true);
  };

  return (
    <div
      className={`tech-stack-visualization ${
        isRotating ? "tech-stack-rotating" : "tech-stack-rotating-paused"
      }`}
    >
      <svg
        ref={svgRef}
        className="tech-stack-svg"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid meet"
      >
        {categories.map((category, idx) => {
          const endX = centerX + category.position.x;
          const endY = centerY + category.position.y;
          return (
            <line
              key={category.id}
              x1={centerX}
              y1={centerY}
              x2={endX}
              y2={endY}
              className="tech-stack-line tech-stack-line-animated"
              stroke="#667eea"
              strokeWidth="3"
              opacity="0.6"
              style={{ animationDelay: `${idx * 0.6}s` }}
            />
          );
        })}

        {hoveredCategory &&
          categories
            .find((cat) => cat.id === hoveredCategory)
            ?.subIcons.map((subIcon, idx, arr) => {
              const mainCategory = categories.find(
                (cat) => cat.id === hoveredCategory
              );
              if (!mainCategory) return null;

              const mainX = centerX + mainCategory.position.x;
              const mainY = centerY + mainCategory.position.y;
              const mainAngle =
                (mainCategory.position.angle * Math.PI) / 180;

              const extendDistance = 110;
              const perpAngle = mainAngle + Math.PI / 2;
              const baseSpacing = 90;
              const centeredIdx = getCenteredIndex(idx, arr.length);
              const perpOffset = centeredIdx * baseSpacing;

              const extendX = Math.cos(mainAngle) * extendDistance;
              const extendY = Math.sin(mainAngle) * extendDistance;
              const perpX = Math.cos(perpAngle) * perpOffset;
              const perpY = Math.sin(perpAngle) * perpOffset;

              const subX = mainX + extendX + perpX;
              const subY = mainY + extendY + perpY;

              return (
                <line
                  key={`${hoveredCategory}-${idx}`}
                  x1={mainX}
                  y1={mainY}
                  x2={subX}
                  y2={subY}
                  className="tech-stack-sub-line tech-stack-sub-line-animated"
                  stroke="#667eea"
                  strokeWidth="2"
                  opacity="0.5"
                  style={{
                    animationDelay: `${
                      categories.findIndex(
                        (cat) => cat.id === hoveredCategory
                      ) *
                        0.6 +
                      idx * 0.15
                    }s`,
                  }}
                />
              );
            })}
      </svg>

      <div className="tech-stack-center">
        <div className="tech-stack-kr-logo tech-stack-kr-logo-animated">
          KR
        </div>
      </div>

      {categories.map((category, idx) => (
        <div
          key={category.id}
          className="tech-stack-category"
          style={{
            left: `${50 + (category.position.x / 1000) * 100}%`,
            top: `${50 + (category.position.y / 1000) * 100}%`,
          }}
          onMouseEnter={() => handleMouseEnterCategory(category.id)}
          onMouseLeave={handleMouseLeaveCategory}
        >
          <div
            className="tech-stack-category-icon tech-stack-category-icon-animated"
            style={{ animationDelay: `${idx * 0.6}s` }}
          >
            <img
              src={category.iconUrl}
              alt={category.label}
              className="tech-stack-icon-img"
            />
          </div>
          <div className="tech-stack-category-label">
            {category.label}
          </div>

          {hoveredCategory === category.id && (
            <div className="tech-stack-sub-icons">
              {category.subIcons.map((subIcon, sIdx, arr) => {
                const mainAngle =
                  (category.position.angle * Math.PI) / 180;
                const extendDistance = 110;
                const perpAngle = mainAngle + Math.PI / 2;
                const baseSpacing = 90;
                const centeredIdx = getCenteredIndex(sIdx, arr.length);
                const perpOffset = centeredIdx * baseSpacing;

                const extendX =
                  Math.cos(mainAngle) * extendDistance;
                const extendY =
                  Math.sin(mainAngle) * extendDistance;
                const perpX = Math.cos(perpAngle) * perpOffset;
                const perpY = Math.sin(perpAngle) * perpOffset;

                const offsetX = extendX + perpX;
                const offsetY = extendY + perpY;

                return (
                  <div
                    key={subIcon.name}
                    className="tech-stack-sub-icon tech-stack-sub-icon-animated"
                    style={{
                      left: `${offsetX}px`,
                      top: `${offsetY}px`,
                      animationDelay: `${
                        idx * 0.6 + sIdx * 0.15
                      }s`,
                    }}
                  >
                    <img
                      src={subIcon.iconUrl}
                      alt={subIcon.name}
                      className="tech-stack-sub-icon-img"
                    />
                    <span className="tech-stack-sub-label">
                      {subIcon.name}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// ---------------- PROFILE SCROLL SECTION ----------------

const ProfileImageScrollSection = ({
  darkMode = false,
}: {
  darkMode?: boolean;
}) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !imageRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(imageRef.current, {
        y: -window.innerHeight - 600,
        x: 0,
        opacity: 0,
        scale: 0.8,
      });

      gsap.set(textRef.current, {
        x: 100,
        opacity: 0,
      });

      gsap.to(imageRef.current, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "center center",
          scrub: 1.5,
        },
      });

      gsap.to(textRef.current, {
        x: 0,
        opacity: 1,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "center center",
          scrub: 1.5,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`profile-scroll-section ${darkMode ? "dark" : "light"}`}
    >
      <div className="profile-scroll-container">
        <div className="profile-scroll-image-wrapper">
          <img
            ref={imageRef}
            src="/profile.png"
            alt="Profile"
            className="profile-scroll-image"
          />
        </div>
        <div ref={textRef} className="profile-scroll-text">
          <h2 className="profile-scroll-heading">
            Hey I&apos;m <br />
            Kritika Ruhela......
          </h2>
          <p className="profile-scroll-paragraph">
            I&apos;m a full-stack-minded developer and AI enthusiast who blends
            design, code, and intelligence to build digital products with
            purpose. From clean, scalable interfaces to smart, data-driven
            systems, I transform ideas into experiences that feel intuitive,
            fast, and alive.
          </p>
          <p className="profile-scroll-paragraph">
            Whether it&apos;s crafting a modern web presence, engineering
            AI-powered applications, or prototyping solutions for real-world
            problems, I focus on creating technology that works hard, scales
            smart, and leaves an impact.
          </p>
          <p className="profile-scroll-paragraph">
            I don&apos;t just build projects — I design solutions, engineer
            experiences, and push ideas beyond the expected.
          </p>
        </div>
      </div>
    </section>
  );
};

// ---------------- CREATIVE DEVELOPER SECTION ----------------

function CreativeDeveloperSection(props: { darkMode: boolean }) {
  const imgSrc = "/profile.png";
  return (
    <section className="creative-section">
      <div className="creative-heading-row">
        <span className="creative-title">CREATIVE</span>
        <span className="creative-title-star">✦</span>
        <span className="creative-title">DEVELOPER</span>
      </div>
      <div className="creative-content-row">
        <div className="creative-info">
          <p>/ ART DIRECTION</p>
          <p>/ WEB DESIGN (UX/UI)</p>
          <p>/ WEB DEVELOPMENT</p>
        </div>
        <div className="creative-photo">
          <img src={imgSrc} alt="Developer" />
        </div>
      </div>
      <div className="creative-bio-text">
        <p>
          I’M EXPERIENCED WEB AND UX/UI DESIGNER,
          <br />
          WHO DESIGN MEMORABLE WEB EXPERIENCES FOR
          <br />
          BRANDS OF ALL SIZES
        </p>
      </div>
    </section>
  );
}

// ---------------- NEURON BACKGROUND ----------------

function NeuronBackground({ darkMode }: { darkMode: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let width = window.innerWidth * dpr;
    let height = window.innerHeight * dpr;
    canvas.width = width;
    canvas.height = height;

    const resize = () => {
      width = window.innerWidth * dpr;
      height = window.innerHeight * dpr;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", resize);

    const randDir = () => Math.random() * 1.2 - 0.6;
    const createNeuron = () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: randDir(),
      vy: randDir(),
      r: Math.random() * 2 + 1.2,
    });

    const neuronCount = 60;
    const neurons = Array.from({ length: neuronCount }, createNeuron);

    function animate() {
      ctx.clearRect(0, 0, width, height);
      const color = darkMode ? "white" : "black";

      for (let i = 0; i < neuronCount; i++) {
        for (let j = i + 1; j < neuronCount; j++) {
          const dx = neurons[i].x - neurons[j].x;
          const dy = neurons[i].y - neurons[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120 * dpr) {
            ctx.save();
            ctx.globalAlpha = 0.8 - dist / (120 * dpr);
            ctx.strokeStyle = color;
            ctx.lineWidth = 0.6 * dpr;
            ctx.beginPath();
            ctx.moveTo(neurons[i].x, neurons[i].y);
            ctx.lineTo(neurons[j].x, neurons[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      for (const n of neurons) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * dpr, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.shadowColor = color;
        ctx.shadowBlur = 10;
        ctx.fill();

        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }

      requestAnimationFrame(animate);
    }

    animate();
    return () => window.removeEventListener("resize", resize);
  }, [darkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="neuron-bg-canvas"
      aria-hidden="true"
    />
  );
}
// ---------------- SERVICES SECTION ----------------

const services = [
  {
    id: "creative-web-experiences",
    title: "Creative Web Experiences",
    subtitle:
      "Design and build visually rich, responsive portfolio and brand websites with smooth animations, interactions, and strong UX using React/Next.js.",
    image:
      "https://www.pranathiss.com/blog/wp-content/uploads/Art-of-Web-Design-Balancing-Creativity-and-Functionality.png",
  },
  {
    id: "fullstack-web-applications",
    title: "Full‑Stack Web Applications",
    subtitle:
      "Develop end‑to‑end products: modern frontends, secure Node/Express or Flask backends, and MongoDB/MySQL databases, including API design and integration.",
    image:
      "https://www.mascotsoftware.in/upload_assets/blogs/full-stack-web-developer.png",
  },
  {
    id: "ai-powered-features-automation",
    title: "AI‑Powered Features & Automation",
    subtitle:
      "Integrate AI models and APIs (chat, OCR, recommendations) into web apps to create smart assistants, content tools, and data‑driven experiences.",
    image:
      "https://static.vecteezy.com/system/resources/previews/056/410/456/non_2x/ai-powered-automation-streamlining-processes-with-integrated-systems-free-png.png",
  },
  {
    id: "ongoing-support-optimization-deployment",
    title: "Ongoing Support, Optimization & Deployment",
    subtitle:
      "Handle deployment (Vercel etc.), performance tuning, bug fixes, refactors, and continuous updates to keep projects fast, stable, and scalable.",
    image:
      "https://mattermost.com/wp-content/uploads/2022/08/10_Deploy_React_Kubernetes_Docker@2x.webp",
  },
];

function ServicesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [servicesTitleVisible, setServicesTitleVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom+=400 top",
          scrub: 1.2,
          pin: true,
        },
      });

      tl.to(".services-pie", {
        rotation: 18,
        duration: 1.5,
        ease: "power2.out",
      }).to(
        ".services-pie",
        {
          rotation: -10,
          duration: 1.5,
          ease: "power2.inOut",
        },
        ">",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // auto‑cycle active service
  useEffect(() => {
    const id = setInterval(
      () => setActiveIndex((prev) => (prev + 1) % services.length),
      2600,
    );
    return () => clearInterval(id);
  }, []);

  // SERVICES title reveal like ABOUT ME
  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setServicesTitleVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const activeService = services[activeIndex];

  return (
    <section ref={sectionRef} className="services-section">
      {/* star background layer */}
      <div className="services-stars" />

      <div className="services-inner">
        {/* heading like ABOUT ME */}
        <h2
          ref={titleRef}
          className={`services-title ${servicesTitleVisible ? "reveal" : ""}`}
        >
          <span>S</span>
          <span>E</span>
          <span>R</span>
          <span>V</span>
          <span>I</span>
          <span>C</span>
          <span>E</span>
          <span>S</span>
        </h2>

        {/* left text */}
        <div className="services-left">
          <p className="services-description">{activeService.subtitle}</p>
        </div>

        {/* center circular image */}
        <div className="services-center">
          <div className="services-pie-wrapper">
            <img
              src={activeService.image}
              alt={activeService.title}
              className="services-pie"
            />
            <div className="services-pie-glow" />
          </div>
        </div>

        {/* right title */}
        <div className="services-right">
          <span className="services-main-title">
            {activeService.title}
          </span>
        </div>

        {/* dots for manual switch */}
        <div className="services-dots">
          {services.map((svc, idx) => (
            <button
              key={svc.id}
              type="button"
              className={`services-dot ${
                idx === activeIndex ? "services-dot-active" : ""
              }`}
              onClick={() => setActiveIndex(idx)}
            />
          ))}
        </div>
      </div>
    </section>

  );
}


// ---------------- PROJECTS SECTION ----------------
const projects = [
  {
    id: "GreenPrompt",
    name: "GreenPrompt",
    thumbnail: "/projects/greenprompt-thumb.png",
  },
  {
    id: "DreamPartner",
    name: "DreamPartner",
    thumbnail: "/projects/dreampartner-thumb.png",
  },
  {
    id: "KASKA",
    name: "KASKA",
    thumbnail: "/projects/KASKA-thumb.png",
  },
  {
    id: "SpotifyClone",
    name: "SpotifyClone",
    thumbnail: "/projects/spotifyclone-thumb.jpg",
  },
];

function SelectedProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<
    (typeof projects)[number] | null
  >(null);

  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [isUserHoveringStrip, setIsUserHoveringStrip] = useState(false);

  // auto-loop horizontal scroll
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const speed = 0.5; // px per frame
    let animationFrameId: number;

    // width of one full set of items
    const halfWidth = scroller.scrollWidth / 2;

    const step = () => {
      if (!isUserHoveringStrip) {
        // advance
        scroller.scrollLeft += speed;

        // when we scrolled past one full set, jump back by that width
        if (scroller.scrollLeft >= halfWidth) {
          scroller.scrollLeft -= halfWidth;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isUserHoveringStrip]);

  // data duplicated so loop looks continuous
  const loopItems = [...projects, ...projects];

  return (
    <section className="selected-projects-section">
      {/* blue background */}
      <div className="selected-bg" />

      {/* concentric circles overlay */}
      <div className="selected-circles-overlay" />

      {/* your silhouette centered behind everything */}
      <div className="selected-photo-wrapper">
        <img
          src="/me-projects.png"
          alt="Kritika silhouette"
          className="selected-photo"
        />
        <div className="selected-photo-overlay" />
      </div>

      {/* LEFT: text */}
      <div className="selected-left">
        <div className="selected-text-block">
          <h2 className="selected-heading">
            <span className="selected-heading-main">PROJECTS</span>
          </h2>
          <p className="selected-description">
            Every project I create has a story behind it. It&apos;s not just
            about “making a website.” It&apos;s about exploring an idea,
            experimenting, failing a few times, and then finally watching it
            come alive on screen.
          </p>
        </div>
      </div>

      {/* RIGHT: preview + horizontal scroller */}
      <div className="selected-right">
        {hoveredProject && (
          <div className="selected-main-preview selected-main-preview-visible">
            <div className="selected-main-inner">
              <div className="selected-main-image-wrapper">
                <img
                  src={hoveredProject.thumbnail}
                  alt={hoveredProject.name}
                  className="selected-main-image"
                />
              </div>
              <h3 className="selected-main-title">
                {hoveredProject.name}
              </h3>
            </div>
          </div>
        )}

        <div className="selected-scroller-wrapper">
          <div
  className="selected-scroller"
  ref={scrollerRef}
  onMouseEnter={() => setIsUserHoveringStrip(true)}
  onMouseLeave={() => setIsUserHoveringStrip(false)}
>
  {loopItems.map((project, index) => (
    <Link
      key={`${project.id}-${index}`}
      href={`/projects/${project.id.toLowerCase()}`}
      className="selected-scroll-item-link"
    >
      <button
        className="selected-scroll-item"
        type="button"
        onMouseEnter={() => setHoveredProject(project)}
        onMouseLeave={() => setHoveredProject(null)}
      >
        <div className="selected-scroll-thumb">
          <img
            src={project.thumbnail}
            alt={project.name}
            className="selected-scroll-thumb-img"
          />
        </div>
        <span className="selected-scroll-name">
          {project.name}
        </span>
      </button>
    </Link>
  ))}
</div>

        </div>
      </div>
    </section>
  );
}


// ---------------- HOME PAGE ----------------

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(true);
  const [currentLine, setCurrentLine] = useState(0);
  const [display, setDisplay] = useState(["", "", "", ""]);
  const [charIdx, setCharIdx] = useState(0);

  const aboutRef = useRef<HTMLHeadingElement | null>(null);
  const [aboutVisible, setAboutVisible] = useState(false);

  const techStackRef = useRef<HTMLHeadingElement | null>(null);
  const [techStackVisible, setTechStackVisible] = useState(false);

  useEffect(() => {
    const el = aboutRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAboutVisible(true);
          } else {
            setAboutVisible(false);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = techStackRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTechStackVisible(true);
          } else {
            setTechStackVisible(false);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // typewriter
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const text = typewriterLines[currentLine];

    if (charIdx < text.length) {
      timeout = setTimeout(() => {
        setDisplay((prev) => {
          const copy = [...prev];
          copy[currentLine] += text[charIdx];
          return copy;
        });
        setCharIdx(charIdx + 1);
      }, 55);
    } else if (currentLine < typewriterLines.length - 1) {
      timeout = setTimeout(() => {
        setCurrentLine(currentLine + 1);
        setCharIdx(0);
      }, 300);
    } else {
      timeout = setTimeout(() => {
        setDisplay(["", "", "", ""]);
        setCurrentLine(0);
        setCharIdx(0);
      }, 1200);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, currentLine]);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <>
      <NeuronBackground darkMode={darkMode} />

      <div className={`navbar-img${darkMode ? " dark" : ""}`}>
        <div className="nav-img-left">
          <div className="nav-img-logo">KR</div>
          <div className="nav-img-logo-divider"></div>
          <div className="nav-img-message typewriter-multiline">
            {display.map((txt, i) => (
              <div key={i}>
                {txt}
                {currentLine === i && <span className="cursor">|</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="nav-img-center">
          <a href="#" className="nav-img-link">
            ABOUT <span className="nav-img-link-arrow">→</span>
          </a>
          <a href="#" className="nav-img-link">
            WORK <span className="nav-img-link-arrow">→</span>
          </a>
          <a href="#" className="nav-img-link">
            CONTACT <span className="nav-img-link-arrow">→</span>
          </a>
        </div>

        <div className="nav-img-icons-group">
          <div className="nav-img-icons-fullheight-divider"></div>
          <div className="nav-img-icons-col">
            <a
              href="https://github.com/YourGitHubUsername"
              target="_blank"
              className="nav-img-icon"
            >
              <FaGithub />
            </a>
            <div className="nav-img-hr-full"></div>
            <a
              href="https://www.linkedin.com/in/ruhela-kritika/"
              target="_blank"
              className="nav-img-icon"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <div className="nav-img-icons-fullheight-divider nav-img-icons-spacer-divider"></div>
          <button
            className="nav-img-icon theme-toggle"
            onClick={() => setDarkMode((prev) => !prev)}
          >
            {darkMode ? <BsSunFill /> : <BsFillMoonStarsFill />}
          </button>
        </div>

        <div className="nav-img-right">
          <div className="nav-img-right-top">Coding globally from India.</div>
          <div className="nav-img-right-bottom">
            Available for work → <span className="nav-img-hire">Hire me</span>
          </div>
        </div>
      </div>

      <div className="page-content">
        <CreativeDeveloperSection darkMode={darkMode} />
      </div>

      <div className="ican-row">
        <div className={`big-i-can ${darkMode ? "dark" : ""}`}>I can</div>

        <div className="ican-window">
          <div className="ican-track">
            <span>develop.</span>
            <span>innovate.</span>
            <span>design.</span>
            <span>build.</span>
            <span>prototype.</span>
            <span>collaborate.</span>
            <span>develop.</span>
          </div>
        </div>
      </div>

      <div className="about-me-section">
        <h2
          ref={aboutRef}
          className={`about-me-title ${aboutVisible ? "reveal" : ""}`}
        >
          <span>A</span>
          <span>B</span>
          <span>O</span>
          <span>U</span>
          <span>T</span>
          <span>&nbsp;</span>
          <span>M</span>
          <span>E</span>
        </h2>
      </div>

      <StatementSection />

      <ProfileImageScrollSection darkMode={darkMode} />

      <div className="tech-stack-section">
        <h2
          ref={techStackRef}
          className={`tech-stack-title ${techStackVisible ? "reveal" : ""}`}
        >
          <span>T</span>
          <span>E</span>
          <span>C</span>
          <span>H</span>
          <span>&nbsp;</span>
          <span>S</span>
          <span>T</span>
          <span>A</span>
          <span>C</span>
          <span>K</span>
        </h2>
      </div>

      <div className="tech-stack-viz-container">
        <TechStackVisualization darkMode={darkMode} />
      </div>

      {/* NEW SELECTED PROJECTS SECTION */}
      <SelectedProjectsSection />

      <ServicesSection />
    </>
  );
}
