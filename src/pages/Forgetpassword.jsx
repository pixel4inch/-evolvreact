import React from 'react'

//
import { Helmet, PageTitle } from '../components'
import { Link } from 'react-router-dom'

function Forgetpassword() {
  return(
    <>
  <Helmet title={'FORGET PASSWORD'}>
    
    <section className="section py-0 w-100" id='forgetpassword'>
        <div className="container">
            <div className="row "> 
                    <div className='text-center w-100'>
                     <PageTitle title="Forgot Password" />
                </div>
            </div>


        <form action='method'>
        <div id='formblock'>
        <div className='container'>
           <div className="row">
           <div className="col-lg-5 col-md-10 col-12 py-3 mx-auto shadow-sm border">

           <h5 class="text-center font-weight-bold">PASSWORD RETRIEVAL PROCESS</h5>

                    <p className='text-center my-3 para-display3'>Enter your email and we'll send you a link to reset your password.</p>

              <div className="col-12 mt-4  mb-2">
                  <input className="form-control w-100 border-radius-0" type="text" autoComplete='off' required="" id="Email" name="Email" />
                  <span className="floating-label"> Email <span className="text-danger">*</span> </span>
                </div>
               
                <div className="col-12 mt-2 mb-4">
                <p className="text-xl-left text-lg-left text-md-left text-sm-left text-center mt-0  mandatory-msg text-danger">We Cannot find your email.</p>
                </div>
                <div className="col-12 text-center my-4">
                  <button className="btn btn-main-md mx-auto py-2 px-2">Submit</button>
                </div>

                <Link to='/login' className='text-center w-100 d-block my-3'> <i className="fa-angle-left fa mr-2"></i> Back to login </Link>


            </div>
            </div>
        </div>
        </div>
        </form>
        </div>
      </section>
    
      </Helmet>
  </>  

)

  
}

export default Forgetpassword