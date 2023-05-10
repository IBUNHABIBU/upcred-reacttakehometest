import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import FacebookComponent from '../components/FacebookComponent';
import GoogleComponent from '../components/GoogleComponent';
import { urlBase } from '../constants';
import Form from '../components/Form';
import { setUser } from '../redux/actions/actions';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [errors, setErrors] = useState('');

  const handleSubmit = (data) => {
    axios.post(`${urlBase}/sessions`, {
      user: {
        email: data.email,
        password: data.password,
      },
    },
    { withCredentials: true }).then((response) => {
      if (response.data.status === 'created') {
        dispatch(setUser(response.data));
        localStorage.setItem('isLogged', user);
        navigate('/products');
      } else {
        setErrors(response.data.error);
      }
    });
  };

  return (
    <div className="login">
      <div className="container">
        <div className="form">
          <Form
            errors={errors}
            message={errors}
            field={
        [
          {
            name: 'email', type: 'email', label: 'Email', required: true,
          },
          {
            name: 'password', type: 'password', label: 'Password', required: true,
          },
        ]
      }
            onSubmit={(formData) => handleSubmit(formData)}
            action="Login"
          />
        </div>
        <p>
          New to this site?
          <NavLink to="/signup" className="Link"> Register</NavLink>
        </p>
        <hr className="hr" />
        <h6 className="h6">Or </h6>
        <div className="service">
          <FacebookComponent />
          <GoogleComponent />
        </div>
      </div>
    </div>
  );
};

export default Login;
