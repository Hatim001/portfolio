import HatimPic1 from "../assets/images/HatimPic1.jpg";
import HatimPic2 from "../assets/images/HatimPic2.jpeg";

const Hero = () => {
  const images = [HatimPic1, HatimPic2];

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  return (
    <div className="landing">
      <div className="row vertical-center">
        <div className="col-lg-8 text-left pb-5">
          <h1 className="display-1">Hatim Patrawala</h1>
          <p className="lead pl-2">Software Developer</p>
        </div>
        <div className="col-lg-4 text-center my-auto pb-5">
          <img
            className="img-fluid"
            src={getRandomImage()}
            alt="Hatim Patrawala"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
