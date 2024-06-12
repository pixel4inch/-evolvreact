import React, { useState } from 'react'


//import component 
import { PageTitle } from '../components'

function Sponsors() {

  const [UserData, PostUserData] = useState(
    {
      "FirstName":"",
      "LastNameName":"",
      "Position":"",
      "Company":"",
      "Email":"",
      "Phone":"",
    }
  
   )
  
  const submitSponsorsData =() =>{
  
  
  }



  return (
    <section className="design-team section pt-2">
    <div className="container">
    <div className='col-lg-10  col-md-9 col-12 mx-auto text-center'>
      <PageTitle title="EVOLVE SV offers compelling value propositions to supporting entities." />
    </div>
    
      <div className="col-xl-10 col-lg-12 col-12 mx-auto">

      <div className="row mx-0 mt-3" id="formblock">

      <div className=" w-100 ml-4 pl-2 pb-2 d-flex align-items-center  justify-content-start mb-3 px-1">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" name="exampleCheck1"/>
                <label className="form-check-labe ml-2 font-weight-bold mb-0 mt-1" for="exampleCheck1">Request Sponsorship Details</label>
      </div>

      <div className="col-sm-6 mb-3 px-1 ">
          <input className="form-control w-100 border-radius-0 " type="text"  value={UserData.FirstName} onChange={PostUserData}   id="FirstName" name="FirstName" required="" />
          <span className="floating-label"> First Name <span className="text-danger">*</span> </span>
      </div>

      <div className="col-sm-6 mb-3 px-1 ">
          <input className="form-control w-100 border-radius-0" type="text" value={UserData.LastNameName}  onChange={PostUserData} required="" id="LastName" name="LastName" />
          <span className="floating-label"> Last Name <span className="text-danger">*</span> </span>
      </div>

      <div className="col-sm-6 mb-3 px-1">
          <input className="form-control w-100 border-radius-0" type="text"value={UserData.Position}  onChange={PostUserData} required="" id="Position" name="Position" />
          <span className="floating-label"> Position <span className="text-danger">*</span> </span>
      </div>

      <div className="col-sm-6 mb-3 px-1">
        <input className="form-control w-100 border-radius-0" type="text"  value={UserData.Company}  onChange={PostUserData} required="" id="Company" name="Company" />
        <span className="floating-label"> Company <span className="text-danger">*</span> </span>
      </div>

      <div className="col-sm-6 mb-3 px-1">
          <input className="form-control w-100 border-radius-0" type="text" value={UserData.Email}   onChange={PostUserData} required="" id="Email" name="Email" />
          <span className="floating-label"> Email <span className="text-danger">*</span> </span>
      </div>

      <div className="col-sm-6 mb-3 px-1">
          <input className="form-control w-100 border-radius-0" type="text" value={UserData.Phone}  onChange={PostUserData} id="Phone" name="Phone" />
          <span className="floating-label"> Phone  </span>
      </div>
     
      <p className="text-xl-left text-lg-left ml-2 text-md-left text-sm-left text-center mt-0  mandatory-msg ">Fields marked  <span className='text-danger'>*</span> are mandatory</p>
      <div className="col-12 text-center my-4">
          <button className="btn btn-main-md mx-auto py-2 px-2" onClick={submitSponsorsData}>Submit</button>
      </div>

  </div>

      </div>
    </div>
  </section>
  )
}

export default Sponsors