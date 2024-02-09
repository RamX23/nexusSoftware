import React from 'react'
import '../Components/navstyle.css'
function Hero() {
  return (
    <div>
         <div className="container col-xxl-8 px-4 py-5" id="hero">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6 heroimage">
            <img
              src="https://cdn.dribbble.com/users/1138853/screenshots/4834993/06_08_gif.gif"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="700"
              loading="lazy"
              style={{
                height: "450px",
                width: "450px",
                borderRadius: "50%",
                position: "relative",
                left: "90px",
              }}
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Compco Software Services
            </h1>
            <p className="lead">
              Transform your business digitally with our cutting-edge solutions,
              tailored to boost your online presence and drive unparalleled
              success. Step into a world where technology meets progress, and
              let Nexus Info be your partner in achieving new heights of digital
              growth.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <a href="#about">
              <button
                type="button"
                className="btn btn-dark btn-lg px-4 me-md-2"
              >
                Discover more
              </button>
              </a>
     
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
