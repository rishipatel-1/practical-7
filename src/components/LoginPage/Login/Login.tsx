import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import "./Login.css"

function Login() {
  const navigate = useNavigate();
  const users = useSelector((state: RootState) => state.signUp.users);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



const handleFormSubmit = (event: React.FormEvent) => {
  event.preventDefault();
  console.log(users)
  let isValidCredentials = false;

  
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    
    if (user.email === email && user.password === password) {
      isValidCredentials = true;
      break;
    }
  }
  
  if (isValidCredentials) {
  
    navigate('/userinfo');
  } else {

    alert('Invalid email or password');
  }
  setEmail('');
  setPassword('');
};


  return (
    <MDBContainer className="my-6 Login">
      <MDBCard className='loginrow'>
        <MDBRow className='g-0 h-100'>
          <MDBCol md='6' className="contentCenter">
            <iframe title="Lottie Animation" id="iframebg" className='m-0 p-0 mb-2' style={{ width: "100%", height: "100%" }} src="https://embed.lottiefiles.com/animation/70640"></iframe>
          </MDBCol>
          <MDBCol md='6' className="LoginComponent">
            <div className='loginDiv'>
              <MDBCardBody className='logincard'>
                <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>
                <form onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <input type="email" className="form-control" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <div className='loginbtn'>
                    <MDBBtn className="mb-4 px-5" color='dark' type="submit">Login</MDBBtn>
                    <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <Link to="/" style={{ color: '#393f81' }}>Register here</Link></p>
                  </div>
                </form>
              </MDBCardBody>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default Login;
