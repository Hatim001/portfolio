import React from "react";

type Props = {};

const Experience = (props: Props) => {
  return (
    <div className="my-5" style={{ minHeight: "70vh" }}>
      <h1 className="display-4 mt-5">Experience</h1>
      <h1 className="bold-text bg-text">Profile</h1>
      <div className="row d-flex">
        <div className="col-md-10">
          <div className="mt-3">
            <div className="py-4">
              <div className="desc">
                <h4>Software Developer</h4>
                <p>CrelioHealth</p>
              </div>
              <div>
                <p>June 2021 - July 2023</p>
              </div>
            </div>

            <div className="py-4">
              <div className="desc">
                <h4>Software Engineer Intern</h4>
                <p>TritaTech</p>
              </div>
              <div>
                <p>January 2021 - May 2021</p>
              </div>
            </div>

            <div className="py-4">
              <div className="desc">
                <h4>Java Developer Intern</h4>
                <p>Godrej Infotech Ltd.</p>
              </div>
              <div>
                <p>June 2019 - July 2019</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
