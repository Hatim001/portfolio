import GuessMe from "../assets/images/guessme.png";
import ReFacto from "../assets/images/re-facto.png";
import DocGenie from "../assets/images/docgenie.png";
import VizWicket from "../assets/images/vizwicket.png";
import DalPortfolio from "../assets/images/dal-portfolio.png";
import TemperatureAnalysis from "../assets/images/temperature-analysis.png";

type Props = {};

const Projects = (props: Props) => {
  const projects = [
    {
      title: "Re-facto",
      description:
        "Developed a GitHub application for analyzing and refactoring code commits across programming languages. Enhanced coding standards compliance through automated suggestions.",
      image: ReFacto,
      link: "https://github.com/Hatim001/re-facto",
    },
    {
      title: "VizWicket",
      description:
        "The application leverages the latest web technologies to transform IPL statistics into engaging visual stories, allowing users to delve into matches, player performance, and season trends with just a few clicks.",
      image: VizWicket,
      link: "https://vizwicket.netlify.app/",
    },
    {
      title: "DocGenie",
      description: "A powerful and intuitive application designed to bring the best features of Google Docs to your fingertips, with an added twist of AI-powered content generation. Whether you're drafting a document, brainstorming ideas, or crafting a resume, DocGenie is here to assist you with a seamless, user-friendly interface and cutting-edge technology.",
      image: DocGenie,
      link: "https://doc-genie.netlify.app/"
    },
    {
      title: "DalPortfolio",
      description:
        "Created a comprehensive University Portfolio Management System to streamline the presentation of academic and professional achievements.",
      image: DalPortfolio,
      link: "https://portfolio-dal.netlify.app/",
    },
    {
      title: "Guess Me with Neural Networks",
      description: "This project implements a 20 Questions game using a neural network to predict the animal the user is thinking of. The game interacts with the user through a Streamlit web app, asking up to 20 yes/no questions to guess the animal. The neural network is trained on a dataset of animals and their characteristics, and it learns to make better guesses over time as it is updated with new data.",
      image: GuessMe,
      link: "https://github.com/Hatim001/guess-me-with-neural-networks"
    },
    {
      title: "Temperature Analysis",
      description:
        "Architected a robust AWS cloud-based solution to process and monitor temperature data in real time. It detects anomalies, alerts stakeholders, and provides statistical analysis through a user-friendly API.",
      image: TemperatureAnalysis,
      link: "https://github.com/Hatim001/temperature-analysis-aws-stack",
    },
  ];

  return (
    <div className="my-5" style={{ minHeight: "70vh" }}>
      <h1 className="display-4 mt-5">Some of my Projects</h1>
      <h1 className="bold-text bg-text">Projects</h1>
      <div className="row mt-5 mb-5">
        {projects?.map((project, index: number) => (
          <div className="col-md-4" key={index}>
            <div className="blog-entry">
              <img
                className="img-fluid border"
                src={project?.image}
                alt={project?.title}
                style={{ objectFit: "contain", height: "250px", width: "400px" }}
              />
              <div className="text py-4 d-block">
                <h3 className="heading">
                  <a
                    className="link-secondary"
                    href={project?.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project?.title}
                  </a>
                </h3>
                <div className="meta mb-3">
                  <div>{project?.description}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
