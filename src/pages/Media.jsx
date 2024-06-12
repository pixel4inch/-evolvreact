import React, { useState } from 'react'




//import component 
import { Helmet, PageTitle } from '../components'

function Media() {

 const [UserData, PostUserData] = useState(
  {
    "FirstName":"",
    "LastNameName":"",
    "Position":"",
    "Company":"",
    "LinkedIn":"",
    "Email":"",
    "Phone":"",
  }

 )

const submitMediaData =() =>{


}



  return (
    <Helmet title="MEDIA">
    <section className="design-team section pt-2">
      <div className="container">

      <div class="w-100 text-center">
      <PageTitle title="Please register to access our events and content." />
      </div>
        <div className="col-xl-10 col-lg-12 col-12 mx-auto">

        <div className="row mx-0 mt-3" id="formblock">

        <div className="col-sm-6 mb-3 px-1">
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


        <div className="col-sm-12 mb-3 px-1">
            <input className="form-control w-100 border-radius-0" type="text"  value={UserData.LinkedIn}  onChange={PostUserData} required="" id="LinkedIn" name="LinkedIn" />
            <span className="floating-label"> LinkedIn<span className="text-danger">*</span> </span>
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
            <button className="btn btn-main-md mx-auto py-2 px-2" onClick={submitMediaData}>Submit</button>
        </div>

    </div>


        </div>
      </div>
    </section>
    </Helmet>
  )
}

export default Media