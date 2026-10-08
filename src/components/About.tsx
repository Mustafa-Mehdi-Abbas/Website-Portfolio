import "./styles/About.css";

const quickFacts = [
  { label: "Location", value: "Karachi, Pakistan" },
  { label: "Current Role", value: "Associate AI Engineer" },
];

const detailFacts = [
  { label: "Education", value: "BE CIS, NEDUET" },
  { label: "Focus", value: "Data, ML & LLM systems" },
];

const highlights = [
  { value: "10+", label: "projects delivered" },
  { value: "5", label: "certifications" },
  { value: "1.5+", label: "years industry experience" },
  { value: "2+", label: "hackathons" },
];

const processSteps = [
  { step: "01", title: "Understand", text: "Clarify the question and the data available." },
  { step: "02", title: "Prepare Data", text: "Clean, preprocess, and structure inputs for models." },
  { step: "03", title: "Build", text: "Train models or wire LLM/RAG agents and APIs." },
  { step: "04", title: "Ship & Improve", text: "Deploy, measure, and iterate with stakeholders." },
];

const helpItems = [
  {
    title: "Data Analysis & Insights",
    text: "Query, preprocess, and interpret data so stakeholders can act with confidence.",
  },
  {
    title: "Machine Learning Models",
    text: "Train and evaluate models for prediction and automation on real datasets.",
  },
  {
    title: "LLM / RAG & AI Agents",
    text: "Design retrieval pipelines and agent workflows that automate business tasks.",
  },
  {
    title: "Full-Stack Web Apps",
    text: "Ship React and Node.js applications that put models and data in front of users.",
  },
];

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>

        <div className="about-facts" aria-label="Quick facts">
          {quickFacts.map((fact) => (
            <div className="about-fact" key={fact.label}>
              <span className="about-fact-label">{fact.label}</span>
              <span className="about-fact-value">{fact.value}</span>
            </div>
          ))}
          {detailFacts.map((fact) => (
            <div className="about-fact" key={fact.label}>
              <span className="about-fact-label">{fact.label}</span>
              <span className="about-fact-value">{fact.value}</span>
            </div>
          ))}
        </div>

        <p className="para">
          I graduated with a BE in Computer Information Systems from NED
          University of Engineering & Technology in July 2025. Today I am an
          Associate AI Engineer at Kodexo Labs in Karachi. I work across data
          science, machine learning, LLM systems, and full-stack delivery, not
          only one title. My path ran from IT and frontend internships into
          AI/ML work: RAG pipelines, AI agents, data preprocessing, and apps
          people can use. When I solve a problem I start with the data, build
          something that runs, ship it, then measure what changed. I am open to
          remote roles and relocation. I am targeting Data Scientist, Data
          Analyst, ML Engineer, AI/LLM Engineer, or Full-Stack Developer roles
          where I own the loop from data to product.
        </p>

        <div className="about-highlights" aria-label="Highlights">
          {highlights.map((item) => (
            <div className="about-highlight" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <div className="about-help">
          <h4>What I can help with</h4>
          <div className="about-help-grid">
            {helpItems.map((item) => (
              <div className="about-help-card" key={item.title}>
                <h5>{item.title}</h5>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-process">
          <h4>How I work</h4>
          <div className="about-process-grid">
            {processSteps.map((item) => (
              <div className="about-process-step" key={item.step}>
                <span className="about-process-num">{item.step}</span>
                <h5>{item.title}</h5>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials: hidden until you add real quotes
        <div className="about-testimonials" hidden>
          <h4>Recommendations</h4>
          <blockquote>
            "[Quote from manager or teammate]"
            <cite>[Name], [Role], [Company]</cite>
          </blockquote>
          <blockquote>
            "[Second recommendation]"
            <cite>[Name], [Role], [Company]</cite>
          </blockquote>
        </div>
        */}
      </div>
    </div>
  );
};

export default About;
