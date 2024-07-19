import React, { useState } from 'react';
import { Helmet } from '../components';
import app from '../firebaseConfig.js';
import { getDatabase, ref, set, push } from 'firebase/database';

function Contact() {
  const [UserData, SetUserData] = useState({
    FirstName: "",
    LastName: "",
    Position: "",
    Company: "",
    Email: "",
    Phone: ""
  });

  const resetForm = () => {
    SetUserData({
      FirstName: "",
      LastName: "",
      Position: "",
      Company: "",
      Email: "",
      Phone: ""
    });
  };

  const submitContactData = async (e) => {
    e.preventDefault();
    console.log("Submitting data:", UserData);
    try {
      const db = getDatabase(app);
      const newDocRef = push(ref(db, 'evolve/contact'));
      await set(newDocRef, {
        FirstName: UserData.FirstName,
        LastName: UserData.LastName,
        Position: UserData.Position,
        Company: UserData.Company,
        Email: UserData.Email,
        Phone: UserData.Phone
      });
      alert("Data Saved");
      resetForm()
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Error: " + error.message);
    }

  };

  return (
    <Helmet title="CONTACT">
      <div className='d-flex flex-column'>
        <section className="address section p-3 bg-light">
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
          <form onSubmit={submitContactData}>
            <div className="w-100 mx-0">
              <div className="col-xl-10 col-lg-9 col-md-12 col-12 mx-auto p-3">
                <div className="row mx-0 mt-3" id="formblock">
                  <div className="col-sm-6 mb-3 px-1">
                    <input className="form-control w-100 border-radius-0" type="text" autoComplete='off' value={UserData.FirstName} onChange={(e) => SetUserData({...UserData, FirstName: e.target.value})} id="FirstName" name="FirstName" required />
                    <span className="floating-label"> First Name <span className="text-danger">*</span> </span>
                  </div>
                  <div className="col-sm-6 mb-3 px-1">
                    <input className="form-control w-100 border-radius-0" type="text" autoComplete='off' value={UserData.LastName} onChange={(e) => SetUserData({...UserData, LastName: e.target.value})} required id="LastName" name="LastName" />
                    <span className="floating-label"> Last Name <span className="text-danger">*</span> </span>
                  </div>
                  <div className="col-sm-6 mb-3 px-1">
                    <input className="form-control w-100 border-radius-0" type="text" autoComplete='off' value={UserData.Position} onChange={(e) => SetUserData({...UserData, Position: e.target.value})} required id="Position" name="Position" />
                    <span className="floating-label"> Position <span className="text-danger">*</span> </span>
                  </div>
                  <div className="col-sm-6 mb-3 px-1">
                    <input className="form-control w-100 border-radius-0" type="text" autoComplete='off' value={UserData.Company} onChange={(e) => SetUserData({...UserData, Company: e.target.value})} required id="Company" name="Company" />
                    <span className="floating-label"> Company <span className="text-danger">*</span> </span>
                  </div>
                  <div className="col-sm-6 mb-3 px-1">
                    <input className="form-control w-100 border-radius-0" type="email" autoComplete='off' value={UserData.Email} onChange={(e) => SetUserData({...UserData, Email: e.target.value})} required id="Email" name="Email" />
                    <span className="floating-label"> Email <span className="text-danger">*</span> </span>
                  </div>
                  <div className="col-sm-6 mb-3 px-1">
                    <input className="form-control w-100 border-radius-0" type="text" maxLength="10" autoComplete='off' value={UserData.Phone} onChange={(e) => SetUserData({...UserData, Phone: e.target.value})} id="Phone" name="Phone" />
                    <span className="floating-label"> Phone </span>
                  </div>
                  <p className="text-xl-left text-lg-left ml-2 text-md-left text-sm-left text-center mt-0 mandatory-msg">Fields marked <span>*</span> are mandatory</p>
                  <div className="col-12 text-center my-4">
                    <button className="btn btn-main-md mx-auto py-2 px-2" type="submit">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    </Helmet>
  );
}

export default Contact;
