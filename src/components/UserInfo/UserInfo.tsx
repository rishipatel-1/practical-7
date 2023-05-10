import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function UserInfo() {
  return (
    <MDBCard className='w-25 h-50'>
      <MDBCardImage  src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Simform User</MDBCardTitle>
        <MDBCardText>
          Welcome , name 
          Your Credentials are Email Mobile No :-

        </MDBCardText>
        <button className='btn btn-success'><Link to="/Login" className='text-white'>Logout</Link></button>
      </MDBCardBody>
    </MDBCard>
  );
}