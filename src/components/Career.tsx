import "./styles/Career.css";

const roles = [
  {
    title: "Associate AI Engineer",
    org: "Kodexo Labs",
    dates: "Aug 2025 - Present",
    year: "NOW",
    bullets: [
      "Build and deploy production AI/ML systems with LLMs, RAG pipelines, and intelligent agents that automate enterprise workflows.",
      "Handle data preprocessing, embeddings, and vector search so retrieval stays grounded in source documents.",
      "Apply prompt engineering and REST API integration to connect agents with client systems.",
      "Collaborate with stakeholders to scope automation, cutting manual steps in those workflows by ~35%.",
    ],
    tech: ["Python", "LangChain", "LangGraph", "REST APIs", "NLP"],
  },
  {
    title: "AI/ML Intern",
    org: "Kodexo Labs",
    dates: "May 2025 - Jul 2025",
    year: "2025",
    bullets: [
      "Designed RAG systems with LangChain so users could query documents in natural language.",
      "Implemented multi-step AI agents in LangGraph for automation tasks a single prompt could not finish.",
      "Applied NLP techniques to interpret requests before they reached the model.",
      "Delivered 4 prototypes the team could extend toward production.",
    ],
    tech: ["Python", "LangChain", "LangGraph", "NLP"],
  },
  {
    title: "Frontend Developer Intern",
    org: "Chaynz Tech",
    dates: "Feb 2025 - Mar 2025",
    year: "2025",
    bullets: [
      "Built and optimized responsive React.js components for business-facing web apps.",
      "Improved UI efficiency so shared interface pieces stayed consistent across pages.",
      "Adjusted layouts for smaller screens so primary actions remained usable across 10+ screens.",
    ],
    tech: ["React.js"],
  },
  {
    title: "IT Intern",
    org: "Karachi Development Authority, IT Dept.",
    dates: "Mar 2024 - Apr 2024",
    year: "2024",
    bullets: [
      "Assisted with network management and issue diagnosis in a government IT department.",
      "Followed connectivity and system faults through to a fix, building professional troubleshooting habits.",
      "Supported routine maintenance and documented recurring issues to speed later diagnosis by ~25%.",
    ],
    // Microsoft Office is a verified soft skill; useful in this government IT context
    tech: ["Microsoft Office"],
  },
  {
    title: "Artificial Intelligence Club",
    org: "NEDUET CIS Society",
    dates: "During CIS studies",
    year: "2022",
    bullets: [
      "Collaborated on 3 AI-powered web projects with CIS Society members.",
      "Joined technical workshops and applied the material in club builds.",
      "Competed in 2 inter-university hackathons, finishing working demos within the event window.",
    ],
    // Suggested stack for club projects; verify before adding: Python, React.js
    tech: ["Python", "Git"],
  },
];

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {roles.map((role) => (
            <div className="career-info-box" key={role.title + role.dates}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{role.title}</h4>
                  <h5>{role.org}</h5>
                  <p className="career-dates">{role.dates}</p>
                </div>
                <h3>{role.year}</h3>
              </div>
              <div className="career-copy">
                <ul>
                  {role.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className="career-tech-row" aria-label="Tech used">
                  {role.tech.map((item) => (
                    <span className="career-tech-chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
