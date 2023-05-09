import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../redux/actions/actions';
import { urlBase } from '../constants';
import Form from '../components/Form';

const Signup = () => {
  const userLogin = useSelector((state) => state.register);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = (data) => {
    axios.post(`${urlBase}/users`, {
      name: data.name,
      email: data.email,
      password: data.password,
      password_confirmation: data.password_confirmation,
    },
    { withCredentials: true }).then((response) => {
      if (response.data.status === 'created') {
        dispatch(setUser(response.data));
        navigate('/models');
        setMessage('User created successfully');
      }
      setErrors(response.data.error);
    });
  };

  return (
    <div className="signup">
      <div className="signup__header">
        <h1>Register</h1>
      </div>
      <Form
        errors={errors}
        message={message}
        field={
          [
            {
              name: 'name', type: 'name', label: 'name', required: true,
            },
            {
              name: 'email', type: 'email', label: 'Email', required: true,
            },
            {
              name: 'password', type: 'password', label: 'Password', required: true,
            },
            {
              name: 'password_confirmation', type: 'password', label: 'Password_confirmation', required: true,
            },
          ]
        }
        onSubmit={(formData) => handleSubmit(formData)}
        action="Signup"
      />
      <p>
        Already Member?
        <Link to="/login" className="link"> Login</Link>
      </p>
    </div>
  );
};

export default Signup;
