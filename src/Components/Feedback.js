import React, { useState } from 'react'

function Feedback() {
 
  const [data,setdata]=useState({
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

     const {email,feedback}= data;
     if(email&&feedback){

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
      <div className="container d-flex justify-content-center">
  <main>
    <div className="py-5 text-center">
      <h2>Feedback Form</h2>

    </div>

    <div className="row g-5">

      <div>
        <form className="needs-validation" method="POST">
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
    </div>
  )
}

export default Feedback
