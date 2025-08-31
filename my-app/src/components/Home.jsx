import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import pdf from "../pdf/Rajendra_Mewada.pdf";
import hero from "./data/hero.json";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile 👋",
        "I'm Rajendra Mewada 🚀",
        "MERN Stack Developer 💻",
        "Freelancer 🌐 and Investor 🔑",
        "Expertise in Digital Marketing 📊, Online Advertising 🎯",
      ],

      typeSpeed: 48,
      backSpeed: 40,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home">
        {/* Left Section */}
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1>
            <span ref={typedRef}></span>
          </h1>
          <a
            href={pdf}
            download="Rajendra_resume.pdf"
            className="btn btn-outline-warning"
          >
            Download Resume
          </a>
        </div>

        {/* Right Section */}
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
