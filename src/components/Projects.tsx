import ReFacto from "../assets/images/re-facto.png";
import VizWicket from "../assets/images/vizwicket.png";
import DalPortfolio from "../assets/images/dal-portfolio.png";
import TemperatureAnalysis from "../assets/images/temperature-analysis.png";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="my-5" style={{ minHeight: "70vh" }}>
      <h1 className="display-4 mt-5">Some of my Projects</h1>
      <h1 className="bold-text bg-text">Projects</h1>
      <div className="row mt-5 mb-5">
        <div className="col-md-4">
          <div className="blog-entry">
            <a href="#">
              <img
                className="img-fluid border"
                src={ReFacto}
                alt={"Re-Facto"}
              />
            </a>
            <div className="text py-4 d-block">
              <h3 className="heading">
                <a className="link" href="#">
                  Re-facto
                </a>
              </h3>
              <div className="meta mb-3">
                <div>
                  Developed a GitHub application for analyzing and refactoring
                  code commits across programming languages. Enhanced coding
                  standards compliance through automated suggestions.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="blog-entry">
            <a href="#">
              <img
                className="img-fluid border"
                src={VizWicket}
                alt="VizWicket"
              />
            </a>
            <div className="text py-4">
              <h3 className="heading">
                <a className="link" href="#">
                  VizWicket
                </a>
              </h3>
              <div className="meta mb-3">
                <div>
                  The application leverages the latest web technologies to
                  transform IPL statistics into engaging visual stories,
                  allowing users to delve into matches, player performance, and
                  season trends with just a few clicks.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="blog-entry">
            <a href="#">
              <img
                className="img-fluid border"
                src={DalPortfolio}
                alt="Dal Portfolio"
              />
            </a>
            <div className="text py-4">
              <h3 className="heading">
                <a className="link" href="#">
                  DalPortfolio
                </a>
              </h3>
              <div className="meta mb-3">
                <div>
                  Created a comprehensive University Portfolio Management System
                  to streamline the presentation of academic and professional
                  achievements.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="blog-entry">
            <a href="#">
              <img
                className="img-fluid border"
                src={TemperatureAnalysis}
                alt="Temperature Analysis"
              />
            </a>
            <div className="text py-4 d-block">
              <h3 className="heading">
                <a className="link" href="#">
                  Temperature Analysis
                </a>
              </h3>
              <div className="meta mb-3">
                <div>
                  Architected a robust AWS cloud-based solution to process and
                  monitor temperature data in real time. It detects anomalies,
                  alerts stakeholders, and provides statistical analysis through
                  a user-friendly API.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
