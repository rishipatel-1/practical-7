import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import { Link, useLocation } from 'react-router-dom';

interface User {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  image: string;
  mobile: string;
}

const UserInfo: React.FC = () => {
  const location = useLocation();
  const user: User | undefined = location.state && location.state.user;
  console.log(user);
  
  return (
    <MDBCard style={{borderRadius:"20px"}}>
   
      <div className="card/." style={{width:" rem",borderRadius:"20px"}}>
  <img className="card-img-top mt-3" style={ {width:"17rem",borderRadius:"20px"}} src={user?.image} alt="Card image cap"/>
  <div className="card-body">
  {user ? (
          <MDBCardText>
          Welcome, {user.name}!<br />
          Your Credentials are:<br />
          Email: {user.email}<br />
          Mobile No: {user.mobile}
        </MDBCardText>
        ) : (
          <MDBCardText>No user information available.</MDBCardText>
        )}
        <button className='btn btn-success'>
          <Link to="/Login" className='text-white'>Logout</Link>
        </button>
  </div>
</div>
    </MDBCard>
  );
}

export default UserInfo;
