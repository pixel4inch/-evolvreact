import React from 'react'


function Form1({fnameid, lnameid, positionid, companyid, emailid, phoneid, onclickfun}) {
    return (
        <>
            <div className="w-100 mx-0">
                <div className="col-xl-10 col-lg-9 col-md-12 col-12 mx-auto p-3  ">

                    <div className="row mx-0 mt-3" id="formblock">

                        <div className="col-sm-6 mb-3 px-1">
                            <input className="form-control w-100 border-radius-0 " type="text" required="" id={fnameid} name={fnameid} />
                            <span className="floating-label"> First Name <span className="text-danger">*</span> </span>
                        </div>

                        <div className="col-sm-6 mb-3 px-1 ">
                            <input className="form-control w-100 border-radius-0" type="text" required="" id={lnameid} name={lnameid} />
                            <span className="floating-label"> Last Name <span className="text-danger">*</span> </span>
                        </div>

                        <div className="col-sm-6 mb-3 px-1">
                            <input className="form-control w-100 border-radius-0" type="text" required="" id={positionid} name={positionid} />
                            <span className="floating-label"> Position <span className="text-danger">*</span> </span>
                        </div>

                        <div className="col-sm-6 mb-3 px-1">
                            <input className="form-control w-100 border-radius-0" type="text" required="" id={companyid} name={companyid} />
                            <span className="floating-label"> Company <span className="text-danger">*</span> </span>
                        </div>


                        <div className="col-sm-6 mb-3 px-1">
                            <input className="form-control w-100 border-radius-0" type="text" required="" id={emailid} name={emailid} />
                            <span className="floating-label"> Email <span className="text-danger">*</span> </span>
                        </div>

                        <div className="col-sm-6 mb-3 px-1">
                            <input className="form-control w-100 border-radius-0" type="text" id={phoneid} name={phoneid} />
                            <span className="floating-label"> Phone  </span>
                        </div>
                       
                        <p className="text-xl-left text-lg-left ml-2 text-md-left text-sm-left text-center mt-0  mandatory-msg ">Fields marked  <span >*</span> are mandatory</p>
                        
                        <input type="hidden" name="page_source" id="page_source" value="" />
                       
                        <div className="col-12 text-center my-4">
                            <button className="btn btn-main-md mx-auto py-2 px-2" onClick={onclickfun}>Submit</button>
                        </div>

                    </div>

                </div>
            </div>



        </>
    )
}

export default Form1