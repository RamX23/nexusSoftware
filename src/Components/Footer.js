import React from 'react'
import { useState } from "react";

function Footer() {

  const [data,setdata]=useState({
    name:"",
    surname:"",
    email:"",
    feedback:"",
  }
  );
  let name,value;
  const handlechange=(e)=>{
   name=e.target.name;
   value=e.target.value;
   setdata({ ...data,[name]:value})
   console.log({data});
  }

  const handlesubmit=async(e)=>{
     e.preventDefault();  

     const {name,surname,email,feedback}= data;
     if(name&&surname&&email&&feedback){

       const res = await fetch("https://feedback-2c098-default-rtdb.firebaseio.com/feedbackform.json",
       {
         method:"POST",
         headers:{
           'contentType':'application/json',
         },
         body:JSON.stringify({
          data
         })
       }
       );
       if(res){
     setdata({
         name:"",
         surname:"",
         email:"",
         feedback:"",
       })
     alert("you'r feedback has been recorded");
       }
     }
     else{
      alert("please fill all the required details");
     }
  };
  return (
    <div>
       <div className="container">
  <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 border-top">
    {/* <div className="col mb-3">
    
      <p className="text-body-dark">© 2024</p>
    </div> */}


  
    <div className="col mb-3">
      <h3 style={{color:'black',marginBottom:'4px'}}>contact us</h3>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Coimbatore south Tamilnadu</a></li>
        <li className="nav-item mb-2"><a href="mailto:info@hoolix.com" className="nav-link p-0 text-body-secondary">contact.nexusinfo@gmail.com</a></li>
        <li className="nav-item mb-2">contact us at:<a href="tel:+918778993293" className="nav-link p-0 text-body-secondary">+91 8778993293</a></li>

      </ul>
    </div>
        
    <div className="container d-flex justify-content-center">
  <main>
    <div className="py-2 text-center">
      <h2>Feedback</h2>

    </div>

    <div className="row g-5">

      <div>
        <form className="needs-validation" method="POST" id='Feedback'>
          <div className="row g-3">
            <div className="col-12">
              <label htmlFor="email" className="form-label">Email <span className="text-body-secondary"></span></label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com" required="/" onChange={handlechange} name='email' value={data.email}/>
              <div className="invalid-feedback">
                Please enter a valid email address for updates.
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="username" className="form-label">Feedback</label>
              <div className="input-group has-validation">
                <textarea type="text" className="form-control col-md-12" rows="7 " id="username" placeholder="You'r Feedback" required="/" onChange={handlechange} name='feedback' value={data.feedback}/>
              <div className="invalid-feedback">
                  Enter Feedback
                </div>
              </div>
            </div>

          </div>
          
          <div className='d-flex justify-content-center my-4'>
          <button type="submit" className="btn btn-dark" onClick={handlesubmit}> 
        
          Submit</button>
          </div>

          <hr className="my-4"/>

        </form>
      </div>
    </div>
  </main>


</div>

  </footer>
</div>

    </div>
  )
}

export default Footer
