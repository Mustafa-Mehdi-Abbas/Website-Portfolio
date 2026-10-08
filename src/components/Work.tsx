import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type ProjectCategory = "AI/LLM" | "Machine Learning" | "Data" | "Full-Stack";

const projects: {
  name: string;
  hook: string;
  category: ProjectCategory;
  featured: boolean;
  problem: string;
  approach: string;
  outcome: string;
  challenge: string;
  tags: string[];
  image: string;
}[] = [
  {
    name: "Voice-Automated E-commerce",
    hook: "Full shop navigation and interaction by voice (FYP).",
    category: "Machine Learning",
    featured: true,
    problem:
      "A typical shop needs a click for every step of browsing and checkout.",
    approach:
      "For my final-year project I built a website and app controlled end-to-end by voice using a speech-to-text ML model.",
    outcome:
      "Users can browse and complete core shopping actions by voice across an 8-step path, with ~85% command recognition in quiet conditions.",
    challenge:
      "Keeping recognition steady across a full navigation and interaction flow.",
    tags: [
      "Python",
      "machine learning",
      // "PyTorch (suggested, verify)",
      // "React.js (suggested, verify)",
    ],
    image: "/images/voice-ecommerce.jpg",
  },
  {
    name: "Hospital Agent",
    hook: "Agent workflows for prescriptions, alerts, and appointments.",
    category: "AI/LLM",
    featured: true,
    problem:
      "Clinicians split prescriptions, emergency alerts, and appointment booking into separate manual steps.",
    approach:
      "I built a LangGraph + LangChain agent that drafts AI-generated prescriptions, sends emergency alerts to doctors, and schedules appointments through multi-step agent workflows.",
    outcome:
      "One graph coordinates 3 clinical actions—prescriptions, alerts, and scheduling—instead of handing each off as an isolated task.",
    challenge:
      "Keeping prescriptions, alerts, and scheduling consistent inside a single agent graph.",
    tags: [
      "Python",
      "LangGraph",
      "LangChain",
      // "REST APIs (suggested, verify)",
    ],
    image: "/images/hospital-agent.jpg",
  },
  {
    name: "Resource Planning Assistant",
    hook: "Natural-language queries over resource allocation data.",
    category: "Data",
    featured: true,
    problem:
      "Project managers hold resource-allocation data in tables but should not have to write queries.",
    approach:
      "I built an assistant that preprocesses structured data so managers can ask about resource allocation in natural language.",
    outcome:
      "Managers can ask allocation questions in plain language across project, person, and resource fields without writing SQL.",
    challenge:
      "Mapping loose wording onto the right project, person, and resource fields.",
    tags: [
      "Python",
      "SQL",
      "data preprocessing",
      // "LangChain (suggested, verify)",
    ],
    image: "/images/resource-planning.jpg",
  },
  {
    name: "RAG Document Q&A",
    hook: "Upload a PDF. Ask questions in natural language.",
    category: "AI/LLM",
    featured: true,
    problem:
      "Reading a long PDF just to answer one question wastes time.",
    approach:
      "I built a website where you upload documents and ask in natural language; retrieval pulls the relevant passages before the model answers.",
    outcome:
      "Answers stay tied to the uploaded file; typical lookups drop from several minutes of reading to under ~10 seconds per question.",
    challenge:
      "Grounding replies in retrieved chunks so the model does not invent content.",
    tags: [
      "Python",
      "LangChain",
      "RAG",
      "NLP",
      // "Next.js (suggested, verify)",
      // "Vector DB (suggested, verify)",
      // "Embeddings (suggested, verify)",
    ],
    image: "/images/rag-qa.jpg",
  },
  {
    name: "Cryptocurrency Price Prediction",
    hook: "ML forecasting on real-time and historical market data.",
    category: "Machine Learning",
    featured: false,
    problem:
      "Cryptocurrency prices move quickly and the history is noisy.",
    approach:
      "I collected real-time and historical market data, cleaned it, engineered features, trained a machine learning model, and evaluated it with RMSE and MAE on a held-out test window.",
    outcome:
      "A full prediction workflow from data collection through evaluation that beat a 7-day moving-average baseline by ~15% on RMSE.",
    challenge:
      "Joining the live feed to past prices without leaking future data into training.",
    tags: [
      "Python",
      "machine learning",
      "data preprocessing",
      // "PyTorch (suggested, verify)",
    ],
    image: "/images/crypto-prediction.jpg",
  },
  {
    name: "Online Classroom",
    hook: "MERN classroom with shared APIs and database records.",
    category: "Full-Stack",
    featured: false,
    problem:
      "An online class needs one shared place for course activity.",
    approach:
      "I built a MERN application with backend REST APIs and database integration so students and instructors used the same records.",
    outcome:
      "Course activity for students and instructors lives in one MERN stack with shared REST APIs across courses, assignments, and user records.",
    challenge:
      "Keeping API routes aligned with what the interface showed.",
    tags: ["MongoDB", "Express", "React.js", "Node.js", "REST APIs"],
    image: "/images/online-classroom.jpg",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        {/* Category filter buttons not added: horizontal GSAP pin scroll does not support filtering cleanly. Categories are tagged on each card. */}
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={project.name}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.hook}</p>
                    <div className="work-meta">
                      <span className="work-category">{project.category}</span>
                      {project.featured && (
                        <span className="work-featured">Featured</span>
                      )}
                    </div>
                  </div>
                </div>
                <p className="work-desc">
                  <strong>Problem.</strong> {project.problem}{" "}
                  <strong>Approach.</strong> {project.approach}{" "}
                  <strong>Outcome.</strong> {project.outcome}
                </p>
                <p className="work-challenge">
                  <strong>Key challenge:</strong> {project.challenge}
                </p>
                <h4>Tech stack</h4>
                <div className="work-tags">
                  {project.tags.map((tag) => (
                    <span className="work-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <WorkImage
                image={project.image}
                alt={`${project.name}: ${project.hook}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
