import React from 'react'

function About() {
  return (
    <div>
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5" id='about'>
      <div class="col-10 col-sm-8 col-lg-5">
        <img src="https://nexusinfo.in/assets/images/Bg-2.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div class="col-lg-5">
        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
We design success for your future.</h1>
        <p class="lead">Welcome to Nexus, where standards and quality converge to redefine excellence in the digital realm.</p>
        <ul class="about-list" style={{fontSize:'30px', color:'rgb(120, 120, 120)'}}>

              <li>    
                Setting standards and quality in web products
              </li>

              <li>
                Elevating brands and fostering growth
              </li>

              <li>
                providing a dynamic and personalized educational experience
              </li>

            </ul>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
         <a href='tel:+918778993293'><button type="button" class="btn btn-dark btn-lg px-4 me-md-2">Contact us</button></a> 
        </div>
      </div>
    </div>
    </div>
  )
}

export default About
