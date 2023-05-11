import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./SignUp.css"
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../actions/signupAction';
import { useFormik } from 'formik';

interface User {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  image: null|string;
  mobile: string; 
}

const SignUp: React.FC = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState<User>({  
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: null,
    mobile: "",
  });

   function toBase64(file: File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = () => {
        const base64String = reader.result as string;
        resolve(base64String);
      };
  
      reader.onerror = () => {
        reject(new Error('Failed to convert the image to base64.'));
      };
  
      reader.readAsDataURL(file);
    });
  }
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      image: null as File | null,
      mobile: '',
    },
    validate: (values) => {
      const errors: Partial<User> = {};

      if (!values.name) {
        errors.name = 'Name is required';
      } else if (values.name.length < 15) {
        errors.name = 'Name should be at least 15 characters long';
      }

      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
        errors.email = 'Invalid email';
      }

      if (!values.mobile) {
        errors.mobile = 'Mobile number is required';
      } else if (!/^[6-9]\d{9}$/.test(values.mobile)) {
        errors.mobile = 'Invalid mobile number';
      }

      if (!values.password) {
        errors.password = 'Password is required';
      } else if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*]).{8,}$/.test(values.password)) {
        errors.password = 'Invalid password. Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long.';
      }
      

      if (values.password !== values.confirmPassword) {
        errors.confirmPassword = 'Passwords must match';
        console.log(values.image);

      }
      // if (values.image && values.image.size > 2 * 1024 * 1024) {
      //   errors.image = 'File size should be less than 2MB';
      // }
      const maxSize = 2 * 1024 * 1024; // 2MB

      if (values.image && values.image.size > maxSize) {
        errors.image = 'Image size should be less than 2MB';
      }




      return errors;
    },
    onSubmit: async (values) => {
      const storedUsers: User[] = JSON.parse(localStorage.getItem('users') || '[]');
console.log(values.image);

      // Convert the image file to base64 string
      let imageBase64 = '';
      if (values.image) {
        imageBase64 = await toBase64(values.image);
      }

      const updatedValues = {
        ...values,
        image: imageBase64, // Store the base64 string in the form values
      };

      const updatedUsers = [...storedUsers, updatedValues];
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      dispatch(registerUser(updatedValues));
      formik.resetForm();
    },
  });
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, files } = event.target;

    if (id === 'image' && files && files.length > 0) {
      formik.setFieldValue('image', files[0]); // Set the File object to formik state
    } else {
      formik.handleChange(event); // Handle other input changes as usual
    }
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
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="error">{formik.errors.name}</div>
            )}
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="error">{formik.errors.email}</div>
            )}
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="error">{formik.errors.password}</div>
            )}
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <div className="error">{formik.errors.confirmPassword}</div>
            )}
          </div>
       
          <div className="form-group">
  <label htmlFor="image" className=" ms-2 mb-3">
    Image +
    <br />
    {formik.touched.image && formik.errors.image && (
      <div className="error">{formik.errors.image}</div>
    )}
  </label>
  <input
    type="file"
    className="form-control-file visually-hidden"
    id="image"
    onChange={(event) => {
      const file = event.currentTarget.files?.[0];
      formik.setFieldValue('image', file);
    }}
    onBlur={formik.handleBlur}
  />
  {formik.values.image && (
    <div className="image-name m-2">{formik.values.image.name}</div>
  )}
</div>



          <div className="form-group">
            <input
              type="tel"
              className="form-control"
              id="mobile"
              placeholder="Mobile Number"
              value={formik.values.mobile}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.mobile && formik.errors.mobile && (
              <div className="error">{formik.errors.mobile}</div>
            )}
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