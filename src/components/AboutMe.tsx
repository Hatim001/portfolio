import React from "react";

type Props = {};

const AboutMe = (props: Props) => {
  return (
    <div className="my-5" style={{ minHeight: "70vh" }}>
      <h4 className="display-4">A little about me,</h4>
      <div className="row">
        <div className="col-lg-6 wrap text-left">
          <div className="about-desc">
            <h1 className="bold-text">About</h1>
            <div className="pt-5">
              <h2 className="mb-5">Hello!</h2>
              <p>
                Most bee jobs are small ones. But bees know that every small
                job, if it's done well means a lot. But choose carefully because
                you'll stay in the job you pick for the rest of your life.
              </p>
              <ul className="social-links list-unstyled mt-4">
                <li>
                  <a href="#">
                    <i className="fa-regular fa-envelope"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-6 wrap align-content-center">
          <div className="row mt-5 flex-column">
            <div className="col-md-8">
              <h2 className="mb-4">My Skills</h2>
            </div>
            <div className="col-md-6 mt-3">
              <div className="progress-wrap">
                <h4>Skill 1</h4>
                <div className="progress progress-style">
                  <div
                    className="progress-bar color-1"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-3">
              <div className="progress-wrap">
                <h4>Skill 2</h4>
                <div className="progress progress-style">
                  <div
                    className="progress-bar color-1"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-3">
              <div className="progress-wrap">
                <h4>Skill 3</h4>
                <div className="progress progress-style">
                  <div
                    className="progress-bar color-1"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
