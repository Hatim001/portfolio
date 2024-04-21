import React from "react";

type Props = {};

const Education = (props: Props) => {
  return (
    <div className="my-5" style={{ minHeight: "70vh" }}> 
      <h1 className="display-4 mt-5">Education</h1>
      <h1 className="bold-text bg-text">Academics</h1>
      <div className="row d-flex">
        <div className="col-md-10">
          <div className="py-4">
            <div className="desc">
              <h4>Master Degree in Computer Science</h4>
              <p>Harvard University</p>
            </div>
            <div>
              <p>2013 - 2014</p>
            </div>
          </div>

          <div className="py-4">
            <div className="desc">
              <h4>degree</h4>
              <p>schoolName</p>
            </div>
            <div>
              <p>startYear - endYear</p>
            </div>
          </div>

          <div className="py-4">
            <div className="desc">
              <h4>degree</h4>
              <p>schoolName</p>
            </div>
            <div>
              <p>startYear - endYear</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
