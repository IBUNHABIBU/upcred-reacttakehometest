import React, { useEffect } from 'react';
import { gapi } from 'gapi-script';
import { useDispatch } from 'react-redux';
import FacebookComponent from '../components/FacebookComponent';
import GoogleComponent from '../components/GoogleComponent';
import { cliendId } from '../constants';
import Form from '../components/Form';

const Login = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.register);
  const [isMounted, setIsMounted] = useState(true);
  const navigate = useNavigate();
  const [errors, setErrors] = useState('');
  const handleSubmit = (data) => {
    axios.post(`${urlBase}/sessions`, {
      user: {
        email: data.email,
        password: data.password,
      },
    },
    { withCredentials: true }).then((response) => {
      if (isMounted) {
        if (response.data.status === 'created') {
          dispatch(setUser(response.data));
          navigate('/models');
        } else {
          setErrors(response.data.error);
        }
      }
    });
  };

  useEffect(() => {
    gapi.load('auth2', () => {
      gapi.auth2.init({
        client_id: cliendId,
      });
    });
    setIsMounted(false);
  }, []);


  return (
    <div className="login">
      <div className="container">
        <div className="form">
          <Form
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
