import React from "react";

type Props = {};

const Experience = (props: Props) => {
  return (
    <div className="my-5" style={{ minHeight: "70vh" }}> 
      <h1 className="display-4 mt-5">Experience</h1>
      <h1 className="bold-text bg-text">Profile</h1>
      <div className="row d-flex">
        <div className="col-md-10">
          <h4 className="dmb-4 mt-2 profile-text">
            I'm a Software Developer from India. Bees have 100 percent
            employment, but we do jobs like taking the crud out.
          </h4>

          <div className="mt-3">
            <div className="py-4">
              <div className="desc">
                <h4>UX & Interaction Designer</h4>
                <p>The Bee Company</p>
              </div>
              <div>
                <p>2020 - 2020</p>
              </div>
            </div>

            <div className="py-4">
              <div className="desc">
                <h4>jobPosition</h4>
                <p>company</p>
              </div>
              <div>
                <p>startYear - endYear</p>
              </div>
            </div>

            <div className="py-4">
              <div className="desc">
                <h4>jobPosition</h4>
                <p>company</p>
              </div>
              <div>
                <p>startYear - endYear</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
