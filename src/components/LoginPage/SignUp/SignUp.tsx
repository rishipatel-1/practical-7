import React, { useState, ChangeEvent, FormEvent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { signUp } from '../../../actions/signupAction';
import { RootState } from '../../../store/store';
import { Link } from 'react-router-dom';

// Props from Redux store
const mapState = (state: RootState) => ({
  // map any required state properties here
});

// Dispatch actions from Redux store
const mapDispatch = {
  signUp: (formData: FormData) => signUp(formData),
};

// Merge props
const connector = connect(mapState, mapDispatch);

// Component props
type PropsFromRedux = ConnectedProps<typeof connector>;

// Component state
interface ComponentState {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  image: string;
  mobile: string;
}

const SignUp: React.FC<PropsFromRedux> = ({ signUp }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [formValues, setFormValues] = useState<ComponentState>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    image: '',
    mobile: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
  
    // Additional logic for form submission (e.g., API request)
  };

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
      <div className="login-container">
     <div className='d-flex col-12'>
   


          <h2 className="text-center mb-4  Signup">Sign up</h2>

 
     <div className='col-md-6 col-6 ImagesignUpContainer'>
        <iframe title="Lottie Animation" className='m-0 p-0 mb-2' style={{ width: "20vw",height: "10vh",}} src="https://embed.lottiefiles.com/animation/51971"></iframe>
      </div>
     </div>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" id="name" placeholder="Name" />
          </div>
          <div className="form-group">
            <input type="email" className="form-control" id="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id="password" placeholder="Password" />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" />
          </div>
          <div className="form-group">
            <label htmlFor="image" className='float-start ms-2'>Image</label>
            <input type="file" className="form-control-file" id="image" />
          </div>
          <div className="form-group">
            <input type="tel" className="form-control" id="mobile" placeholder="Mobile Number" />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Register</button>
          <h6 className='mt-3'>Already have an Account <Link to="/Login" onClick={handleLoginClick}>Login</Link></h6>
        </form>
      </div>

  
    </div>
  );
};

export default connector(SignUp);
