import React from "react";

type Props = {};

const TechStack = (props: Props) => {
  return (
    <div className="interests my-5" style={{ minHeight: "70vh" }}>
      <h1 className="display-4">Tech I'm familiar with</h1>
      <h1 className="bold-text bg-text">Tech Stack</h1>

      <div className="row pt-5">
        <div className="col-lg-3 col-md-4">
          <div className="icon-box">
            <i className="fa-brands fa-html5"></i>
            <h3>Add</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
          <div className="icon-box">
          <i className="fa-brands fa-css3-alt"></i>
            <h3>your</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
          <div className="icon-box">
          <i className="fa-brands fa-js"></i>
            <h3>tech</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
          <div className="icon-box">
          <i className="fa-brands fa-react"></i>
            <h3>stack here</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4">
          <div className="icon-box">
          <i className="fa-brands fa-android"></i>
            <h3>Agent P</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4">
          <div className="icon-box">
          <i className="fa-brands fa-python"></i>
            <h3>Doobie</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4">
          <div className="icon-box">
          <i className="fa-solid fa-code-branch"></i>
            <h3>Doobie</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4">
          <div className="icon-box">
          <i className="fa-brands fa-github"></i>
            <h3>Dooba</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
