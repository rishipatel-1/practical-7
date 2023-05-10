import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
  from 'mdb-react-ui-kit';
import "./Login.css"
import { Link } from 'react-router-dom';

function Login() {
  return (
    <MDBContainer className="my-6 Login">

      <MDBCard className='loginrow'>
        <MDBRow className='g-0 h-100'>

          <MDBCol md='6' className="contentCenter">

            <iframe title="Lottie Animation" id="iframebg"className='m-0 p-0 mb-2' style={{ width: "100%", height: "100%" }} src="https://embed.lottiefiles.com/animation/70640"></iframe>
          </MDBCol>

          <MDBCol md='6' className="LoginComponent">
            <div className='loginDiv'>
              <MDBCardBody className='logincard'>


                <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>
                <div className="form-group">
                  <input type="email" className="form-control" id="email" placeholder="Email" />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>
               <div className='loginbtn'>
               <MDBBtn className="mb-4 px-5" color='dark'><Link to="/userinfo" className='text-white'>Login</Link></MDBBtn>
                {/* <a className="small text-muted m-2" href="#!">Forgot password?</a> */}
                <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <Link to="/" style={{ color: '#393f81' }}>Register here</Link></p>

               </div>

              </MDBCardBody>
            </div>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default Login;