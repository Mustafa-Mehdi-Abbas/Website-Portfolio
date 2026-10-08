import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/*
  Skills display: verified only.
  Groups: Languages | AI & LLM | Data & ML | Backend | Frontend | Databases | Tools

  // VERIFY (do not render until confirmed):
  // Pandas, NumPy, Scikit-learn, Matplotlib/Seaborn, Excel, Power BI, Tableau,
  // statistics, data cleaning, EDA, A/B testing, Docker, AWS
*/

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>DATA &amp; AI</h3>
              <h4>Analysis, ML, LLMs</h4>
              <p>
                Data preprocessing, machine learning, deep learning, NLP, RAG,
                and AI agents, from cleaned datasets to working intelligent
                systems.
              </p>
              <h5>Languages</h5>
              <div className="what-content-flex">
                <div className="what-tags">Python</div>
                <div className="what-tags">SQL</div>
                <div className="what-tags">JavaScript</div>
              </div>
              <h5>AI &amp; LLM</h5>
              <div className="what-content-flex">
                <div className="what-tags">LangChain</div>
                <div className="what-tags">LangGraph</div>
                <div className="what-tags">Hugging Face</div>
                <div className="what-tags">RAG</div>
                <div className="what-tags">NLP</div>
                <div className="what-tags">PyTorch</div>
              </div>
              <h5>Data &amp; ML</h5>
              <div className="what-content-flex">
                <div className="what-tags">machine learning</div>
                <div className="what-tags">deep learning</div>
                <div className="what-tags">data preprocessing</div>
                <div className="what-tags">PyTorch</div>
                {/* // VERIFY: Pandas, NumPy, Scikit-learn, Matplotlib/Seaborn,
                    Excel, Power BI, Tableau, statistics, data cleaning, EDA, A/B testing */}
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>FULL-STACK</h3>
              <h4>APIs, interfaces, data</h4>
              <p>
                Services, interfaces, and databases that put models and insights
                in front of users with React, Node.js, and Git end to end.
              </p>
              <h5>Backend</h5>
              <div className="what-content-flex">
                <div className="what-tags">Node.js</div>
                <div className="what-tags">Express</div>
                <div className="what-tags">REST APIs</div>
              </div>
              <h5>Frontend</h5>
              <div className="what-content-flex">
                <div className="what-tags">React.js</div>
                <div className="what-tags">Next.js</div>
              </div>
              <h5>Databases</h5>
              <div className="what-content-flex">
                <div className="what-tags">PostgreSQL</div>
                <div className="what-tags">MongoDB</div>
              </div>
              <h5>Tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Git</div>
                <div className="what-tags">GitHub</div>
                <div className="what-tags">Microsoft Office</div>
                {/* // VERIFY: Docker, AWS */}
              </div>
              <h5>Soft skills</h5>
              <div className="what-content-flex">
                <div className="what-tags">Public speaking</div>
                <div className="what-tags">Event planning &amp; management</div>
                <div className="what-tags">Analytical problem solving</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
