import React, { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import FacebookComponent from '../components/FacebookComponent';
import GoogleComponent from '../components/GoogleComponent';
import { cliendId, urlBase } from '../constants';
import Form from '../components/Form';
import { setUser } from '../redux/actions/actions';

const Login = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.user);
  console.log(userLogin);
  const navigate = useNavigate();
  const [errors, setErrors] = useState('');
  const handleSubmit = (data) => {
    console.log('Data', data);
    axios.post(`${urlBase}/sessions`, {
      user: {
        email: data.email,
        password: data.password,
      },
    },
    { withCredentials: true }).then((response) => {

        console.log(response.data);
        if (response.data.status === 'created') {
          dispatch(setUser(response.data));
          navigate('/models');
        } else {
          setErrors(response.data.error);
        }
    }).catch((error) => {
      console.log(error.response.data.error);
    });
  };

  useEffect(() => {
    gapi.load('auth2', () => {
      gapi.auth2.init({
        client_id: cliendId,
      });
    });
  }, []);


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
