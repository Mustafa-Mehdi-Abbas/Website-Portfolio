import "./styles/Education.css";

const education = [
  {
    title: "BE, Computer Information Systems",
    org: "NED University of Engineering & Technology",
    dates: "Aug 2021 - Jul 2025",
    year: "2025",
    detail:
      "Bachelor's in Computer Information Systems with focus on software engineering, data systems, and applied AI coursework.",
  },
  {
    title: "Pre-Engineering",
    org: "Malir Cantt College of Science & Technology",
    dates: "2019 - 2021",
    year: "2021",
    detail:
      "Completed intermediate pre-engineering studies as preparation for university-level CIS and computing programs.",
  },
];

const certifications = [
  {
    title: "IBM Data Science Professional Certificate",
    org: "IBM / Coursera",
    dates: "Professional Certificate",
  },
  {
    title: "Cisco Data Science Course",
    org: "Cisco Networking Academy",
    dates: "Course Certificate",
  },
  {
    title: "Introduction to LangGraph",
    org: "LangChain Academy",
    dates: "Course Certificate",
  },
  {
    title: "Open Source Models with Hugging Face",
    org: "DeepLearning.AI",
    dates: "Course Certificate",
  },
  {
    title: "AI Workshop",
    org: "FAST University",
    dates: "Workshop",
  },
];

const Education = () => {
  return (
    <div className="education-section section-container" id="education">
      <div className="education-container">
        <h2>
          My education <span>&</span>
          <br /> certifications
        </h2>
        <div className="education-info">
          <div className="education-timeline">
            <div className="education-dot"></div>
          </div>

          <div className="education-col education-col-left">
            <h3 className="education-side-label">Education</h3>
            {education.map((item) => (
              <div className="education-info-box" key={item.title}>
                <div className="education-role">
                  <div className="education-role-head">
                    <h4>{item.title}</h4>
                    <span className="education-year">{item.year}</span>
                  </div>
                  <h5>{item.org}</h5>
                  <p className="education-dates">{item.dates}</p>
                </div>
                <div className="education-copy">
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="education-col education-col-right">
            <h3 className="education-side-label">Certifications</h3>
            {certifications.map((item) => (
              <div className="education-info-box" key={item.title}>
                <div className="education-role">
                  <h4>{item.title}</h4>
                  <h5>{item.org}</h5>
                  <p className="education-dates">{item.dates}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
