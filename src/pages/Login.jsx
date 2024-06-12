import React, { useState } from 'react';
import { Helmet, PageTitle } from '../components';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [username, setUsername] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const loginSubmit = (e) => {
    e.preventDefault();

    if (loginValidation()) {
      console.log('login process');
    }
  };

  const loginValidation = () => {
    let result = true;

    if (username === '' || username === null) {
      result = false;
      alert('Please Enter User Details');
      toast.warning('Please Enter User Details');
    }

    if (userPassword === '' || userPassword === null) {
      result = false;
      alert('Please Enter User Password');
      toast.warning('Please Enter User Password');
    }

    return result;
  };

  return (
    <Helmet title={'LOGIN'}>
      <>
        <section className="section py-0" id="profile">
          <div className="container">
            <div className="row ">
              <div className="text-center w-100">
                <PageTitle title="LOGIN TO ACCESS PROGRAMS" />
              </div>
            </div>
          </div>
        </section>

        <section className="p-3">
          <form onSubmit={loginSubmit}>
            <div id="formblock">
              <div className="container">
                <div className="row">
                  <div className="col-lg-5 col-md-10 col-12 py-3 mx-auto shadow-sm border">
                    <div className="col-12 my-4">
                      <input
                        className="form-control w-100 border-radius-0"
                        type="text"
                        autoComplete="off"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required=""
                        id="Email"
                        name="Email"
                      />
                      <span className="floating-label">
                        User Name <span className="text-danger">*</span>{' '}
                      </span>
                    </div>
                    <div className="col-12 my-4">
                      <input
                        className="form-control w-100 border-radius-0"
                        type="password"
                        maxLength="15"
                        autoComplete="off"
                        value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}
                        id="password"
                        name="password"
                      />
                      <span className="floating-label">
                        Password <span className="text-danger">*</span>{' '}
                      </span>
                    </div>
                    <div className="col-12 my-4">
                      <div className="d-flex w-100 justify-content-center align-items-center flex-wrap" style={{ gap: '30px' }}>
                        <Link to="/forgetpassword"> Forgot Password </Link>
                        <Link to="/changepassword"> Change Password </Link>
                        <Link to="/registration"> New User </Link>
                      </div>
                    </div>
                    <div className="col-12 my-4">
                      <p className="text-xl-left text-lg-left text-md-left text-sm-left text-center mt-0 mandatory-msg ">
                        Fields marked <span>*</span> are mandatory
                      </p>
                    </div>
                    <div className="col-12 text-center my-4">
                      <button className="btn btn-main-md mx-auto py-2 px-2">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      </>
    </Helmet>
  );
}

export default Login;
