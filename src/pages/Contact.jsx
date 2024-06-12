import React from 'react'
import { useState } from 'react'
import { Helmet } from '../components';



function Contact() {

  const [UserData, SetUserData] = useState(
    {
      FirstName: "",
      LastName: "",
      Position: "",
      Company: "",
      Email: " ",
      Phone: ""
    }
  );



  // ON CHANGE SET VALUES
  let name, value;
  const PostUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    SetUserData({ ...UserData, [name]: value })

  };




  // CUNNECTING TO FIREBASE
  const submitContactData = async (event) => {
    event.preventDefault();
    const { FirstName, LastName, Position, Company, Email, Phone } = UserData

    if (FirstName && LastName && Position && Company && Email && Phone) {

      const res = fetch("https://evolv-e3df4-default-rtdb.firebaseio.com/contactDataRecord.json",
        {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({
            FirstName,
            LastName,
            Position,
            Company,
            Email,
            Phone
          })
        }
      );


      if (res) {
        SetUserData({
          FirstName: "",
          LastName: "",
          Position: "",
          Company: "",
          Email: " ",
          Phone: ""
        })
        alert("Data Added Successfuly")
      }

    } else {
      alert("Please Fill All Forms")
    }
  }

  return (
  <Helmet title="CONTACT">
    <div className='d-flex flex-column'>
      <section className="address section p-3  bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mt-3 mt-lg-0">
              <div className="block">
                <div className="address-block text-center mb-3">
                  <div className="icon">
                    <i className="ti-map-alt"></i>
                  </div>
                  <div className="details">
                    <h3 className="mb-0">6150 Hellyer Ave., San Jose, CA 95138, USA</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-3 mt-lg-0">
              <div className="block">
                <div className="address-block text-center mb-3">
                  <div className="icon">
                    <i className="ti-mobile"></i>
                  </div>
                  <div className="details">
                    <h3>+1 (669) 400-8001</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-3 mt-lg-0">
              <div className="block">
                <div className="address-block text-center mb-3">
                  <div className="icon">
                    <i className="ti-email"></i>
                  </div>
                  <div className="details">
                    <h3>contact@evolv.cc</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-3">
        <form action='method'>
          <div className="w-100 mx-0">
            <div className="col-xl-10 col-lg-9 col-md-12 col-12 mx-auto p-3  ">

              <div className="row mx-0 mt-3" id="formblock">

                <div className="col-sm-6 mb-3 px-1">
                  <input className="form-control w-100 border-radius-0" type="text" autoComplete='off' value={UserData.FirstName} onChange={PostUserData} id="FirstName" name="FirstName" required="" />
                  <span className="floating-label"> First Name <span className="text-danger">*</span> </span>
                </div>

                <div className="col-sm-6 mb-3 px-1 ">
                  <input className="form-control w-100 border-radius-0" type="text" autoComplete='off' value={UserData.LastNameName} onChange={PostUserData} required="" id="LastName" name="LastName" />
                  <span className="floating-label"> Last Name <span className="text-danger">*</span> </span>
                </div>

                <div className="col-sm-6 mb-3 px-1">
                  <input className="form-control w-100 border-radius-0" type="text" autoComplete='off' value={UserData.Position} onChange={PostUserData} required="" id="Position" name="Position" />
                  <span className="floating-label"> Position <span className="text-danger">*</span> </span>
                </div>

                <div className="col-sm-6 mb-3 px-1">
                  <input className="form-control w-100 border-radius-0" type="text" autoComplete='off' value={UserData.Company} onChange={PostUserData} required="" id="Company" name="Company" />
                  <span className="floating-label"> Company <span className="text-danger">*</span> </span>
                </div>


                <div className="col-sm-6 mb-3 px-1">
                  <input className="form-control w-100 border-radius-0" type="text" autoComplete='off' value={UserData.Email} onChange={PostUserData} required="" id="Email" name="Email" />
                  <span className="floating-label"> Email <span className="text-danger">*</span> </span>
                </div>

                <div className="col-sm-6 mb-3 px-1">
                  <input className="form-control w-100 border-radius-0" type="text" maxlength="10" autoComplete='off' value={UserData.Phone} onChange={PostUserData} id="Phone" name="Phone" />
                  <span className="floating-label"> Phone  </span>
                </div>

                <p className="text-xl-left text-lg-left ml-2 text-md-left text-sm-left text-center mt-0  mandatory-msg ">Fields marked  <span >*</span> are mandatory</p>

                <div className="col-12 text-center my-4">
                  <button className="btn btn-main-md mx-auto py-2 px-2" onClick={submitContactData}>Submit</button>
                </div>

              </div>

            </div>
          </div>
        </form>
      </section>
    </div>f
    </Helmet>
  )
}

export default Contact