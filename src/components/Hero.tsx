import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="landing">
      <div className="row vertical-center">
        <div className="col-lg-8 text-left pb-5">
          <h1 className="display-1">Hatim Patrawala</h1>
          <p className="lead pl-2">Software Developer</p>
        </div>
        <div className="col-lg-4 text-center my-auto pb-5 rounded-circle">
          <img
            className="img-fluid rounded-circle"
            src="https://picsum.photos/512"
            alt="Hatim Patrawala"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
