import CrelioHealth from "../assets/images/creliohealth.png";
import PoiseCode from "../assets/images/poisecode.png";
import Godrej from "../assets/images/godrej.png";
import GITCoatings from "../assets/images/gitcoatings.png";

type Props = {};

const experiences = [
  {
    title: "Database and Cloud Developer",
    company: "GIT Coatings",
    duration: "September 2024 - Present",
    website: "https://gitcoatings.com/",
    logo: GITCoatings,
  },
  {
    title: "Software Developer",
    company: "CrelioHealth",
    duration: "June 2021 - July 2023",
    website: "https://creliohealth.com/",
    logo: CrelioHealth,
  },
  {
    title: "Software Engineer Intern",
    company: "TritaTech",
    duration: "January 2021 - May 2021",
    website: "https://www.poisecode.com/",
    logo: PoiseCode,
  },
  {
    title: "Java Developer Intern",
    company: "Godrej Infotech Ltd.",
    duration: "June 2019 - July 2019",
    website: "https://www.godrejinfotech.com/",
    logo: Godrej,
  },
];

const Experience = (props: Props) => {
  return (
    <div className="my-5" style={{ minHeight: "70vh" }}>
      <h1 className="display-4 mt-5">Experience</h1>
      <h1 className="bold-text bg-text">Profile</h1>
      <div className="row d-flex">
        <div className="col-md-10">
          <div className="mt-3">
            {experiences?.map((experience, index: number) => (
              <div className="py-4 d-flex align-items-start" key={index}>
                <img
                  src={experience.logo}
                  alt={experience.company}
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "contain",
                  }}
                />
                <div className="ms-3">
                  <div className="desc">
                    <h4>{experience.title}</h4>
                    <a
                      href={experience.website}
                      className="link-dark"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {experience.company}
                    </a>
                  </div>
                  <div>
                    <span>{experience.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
