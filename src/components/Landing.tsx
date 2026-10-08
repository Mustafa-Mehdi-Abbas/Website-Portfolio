import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              MUSTAFA
              <br />
              <span>MEHDI</span>
            </h1>
            <span className="landing-badge" aria-label="Availability">
              Open to opportunities
            </span>
          </div>
          <div className="landing-copy">
            {/* Headline variants:
                1. "I turn data into intelligent products and decisions." (primary)
                2. "I build the bridge between raw data and working AI systems."
                3. "From datasets to deployed products: data, ML, and full-stack." */}
            <p className="landing-headline">
              I turn data into intelligent products and decisions.
            </p>
            <p className="landing-summary">
              I work across Python, SQL, machine learning, LLMs, and RAG, from
              data preprocessing to shipped applications. Associate AI Engineer
              at Kodexo Labs, based in Karachi and open to remote or relocation.
              {/* Relocation: [confirm] */}
            </p>
            <div className="landing-ctas">
              <a className="landing-cta landing-cta-primary" href="#work">
                View My Work
              </a>
              <a
                className="landing-cta landing-cta-secondary"
                href="/resume.pdf"
                download="Mustafa-Mehdi-CV.pdf"
                data-cursor="disable"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="landing-info">
            <h3>AI</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Engineer</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
