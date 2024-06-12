import React from 'react'

import { PageTitle } from '../components'

function Registration() {
  return (
    <>
    <section className="section py-0 w-100" id='forgetpassword'>
        <div className="container">
            <div className="row "> 
                <div className='text-center w-100'>
                     <PageTitle title="CREATE PROFILE & JOIN US" />
                </div>
            </div>

            <div className=''id="formblock">
                <div className="row">
                    <div className="col-sm-6 mb-2 p-1">
                        <span className="floating-label">First Name<span className="text-danger">*</span> </span>
                        <input className="form-control main mb-1 " type="text" placeholder="" id="first_name" name="first_name" required=""/>
                    </div>
                    <div className="col-sm-6 mb-2 p-1">
                     <span className="floating-label">Last Name<span className="text-danger">*</span> </span>
                     <input className="form-control main mb-1" type="text" placeholder="" id="last_name" name="last_name" required=""/>
                    </div>

                    <div className="col-sm-6 mb-2 p-1">
                       <span className="floating-label">Email<span className="text-danger">*</span> </span>
                       <input className="form-control main mb-1" type="email" placeholder=" " id="email" name="email" required=""/>
                    </div>

                    <div className="col-sm-6 mb-2 p-1">
                        <span className="floating-label">Password<span className="text-danger">*</span> </span>
                        <input className="form-control main mb-1" type="password" placeholder="" id="password" name="password" required=""/>
                    </div>

                    <div className="col-sm-12 mb-2 p-1">
                        <span className="floating-label">Confirm Password<span className="text-danger">*</span> </span>
                        <input className="form-control main mb-1" type="password" placeholder="" id="Confirmpassword" name="Confirmpassword" required=""/>
                    </div>

                    <div className="col-sm-6 mb-2 p-1">
                        <span className="floating-label">Company<span className="text-danger">*</span> </span>
                        <input className="form-control main mb-1" type="text" placeholder="" id="company" name="company" required=""/>
                    </div>

                    <div className="col-sm-6 mb-2 p-1">
                        <span className="floating-label">Designation<span className="text-danger">*</span> </span>
                        <input className="form-control main mb-1" type="text" placeholder="" id="designation" name="designation" required=""/>
                    </div>
                    <div className="col-sm-12 mb-2 p-1">
                         <span className="floating-label">LinkedIn URL<span className="text-danger">*</span> </span>
                        <input className="form-control main mb-1" type="text" placeholder=" " id="linkedin_url" name="linkedin_url" required=""/>
                    </div>  
                    
                    <div className="col-sm-12 mb-2 p-1">
                        <span className="floating-label">Twitter Handle<span className="text-danger"></span> </span>
                        <input className="form-control main mb-1" type="text" placeholder=" " id="twitter_url" name="twitter_url" required=""/>
                    </div>

                    <div className="col-sm-12 mb-2 p-1">
                        <span className="floating-label">YouTube Channel<span className="text-danger"></span> </span>
                        <input className="form-control main mb-1" type="text" placeholder=" " id="youtube_url" name="youtube_url" required=""/>
                    </div>

                    <div className="col-sm-12 mb-0 p-1 mt-0 border-bottom pb-2 ">
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="formmandatory">* </span>
                            <p className="font-weight-bold main-font-color mb-0 ml-3">SPEAKING INTERESTS</p>
                        </div>
                    </div>

                    <div className="col-sm-12 mb-0 p-1 mt-1  pb-1 ">
				        <p className="text-left pl-3 mt-0 mb-1">Annual Speaking Engagements </p>            
    
                        <div className="d-flex  justify-content-start align-items-center  pl-2 w-100  ">
                            <span className="mr-3 ml-2 d-flex  justify-content-start align-items-center "> <input type="radio" value="5" id="AnnualSpeakingStandred" name="speaking"/><p className='mb-0 ml-2'> 5 </p> </span>
                            <span className="mx-3 d-flex  justify-content-start align-items-center "> <input type="radio" value="5-10" id="AnnualSpeakingsBeginer" name="speaking"/><p className='mb-0 ml-2'>5-10 </p></span>
                            <span className="mx-3 d-flex  justify-content-start align-items-center "><input type="radio" value="11-20" id="AnnualSpeakingeExecutive" name="speaking"/><p className='mb-0 ml-2'>11-20 </p> </span>
                            <span className="mx-3 d-flex  justify-content-start align-items-center "> <input type="radio" value="20+" id="AnnualSpeakingPrimum" name="speaking"/><p className='mb-0 ml-2'>20 </p></span>
                        </div>
                     </div>

                     <div className="col-sm-12 mb-0 p-1 mt-2  pb-2  ">
				        <p className="text-left pl-3 mt-0 mb-1">Future Speaking Interest </p>            
                        <div className="d-flex  justify-content-start align-items-center  pl-2 w-100  ">
                            <span className="mr-3 ml-2 d-flex  justify-content-start align-items-center "> <input type="radio" value="5" id="FutureSpeakingVirtual" name="speaking"/><p className='mb-0 ml-2'> Virtual </p> </span>
                            <span className="mx-3 d-flex  justify-content-start align-items-center "> <input type="radio" value="5-10" id="Future SpeakingHybrid" name="speaking"/><p className='mb-0 ml-2'>Hybrid </p></span>
                            <span className="mx-3 d-flex  justify-content-start align-items-center "><input type="radio" value="11-20" id="Future SpeakingInperson" name="speaking"/><p className='mb-0 ml-2'> In-Person </p> </span>
                            
                        </div>
                     </div>

                     <div className="col-sm-12 mb-0 p-1 mt-0 border-bottom pb-2 ">
                        <div className="d-flex justify-content-start align-items-center">
                            <span className="formmandatory">* </span>
                            <input type="checkbox" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" className="ml-3 collapsed"/>
                            <p className="font-weight-bold main-font-color mb-0 ml-2">RELEVANT DOMAINS</p>
                        </div>
                        <div class="w-100 m-2 collapse" id="collapseExample" >
                             <div class="col-sm-12 mb-0 p-0 border-bottom">
                                     <div>
                                                colapse
                                     </div>
                            </div>
                         </div>

                     </div>


                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Registration