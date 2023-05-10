import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./SignUp.css"
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../actions/signupAction';

interface User {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  image: string;
  mobile: string;
}



interface User {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  image: string;
  mobile: string;
}

const SignUp: React.FC = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
    mobile: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, files } = event.target;
  
    if (id === "image" && files && files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageBase64 = reader.result as string;
        setUser((prevUser) => ({ ...prevUser, [id]: imageBase64 }));
      };
      reader.readAsDataURL(files[0]);
    } else {
      const { value } = event.target;
      setUser((prevUser) => ({ ...prevUser, [id]: value }));
    }
  };
    
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const storedUsers: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    const updatedUsers = [...storedUsers, user];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    dispatch(registerUser(user));
    setUser({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      image: "",
      mobile: "",
    });
  };

  

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
      <div className="login-container">
        <div className='d-flex col-12'>
          <h2 className="text-center mb-4 Signup">Sign up</h2>
          <div className='col-md-6 col-6 ImagesignUpContainer'>
            <iframe
              title="Lottie Animation"
              className='m-0 p-0 mb-2'
              style={{ width: "20vw", height: "10vh" }}
              src="https://embed.lottiefiles.com/animation/51971"
            ></iframe>
          </div>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Name"
              value={user.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              value={user.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={user.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={user.confirmPassword}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="image" className='float-start ms-2'>Image</label>
            <input
              type="file"
              className="form-control-file"
              id="image"
          
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              className="form-control"
              id="mobile"
              placeholder="Mobile Number"
              value={user.mobile}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Register</button>
          <h6 className='mt-3'>Already have an Account
            <Link to="/Login">Login</Link></h6>
        </form>
      </div>


    </div>
  );
};

export default SignUp;
