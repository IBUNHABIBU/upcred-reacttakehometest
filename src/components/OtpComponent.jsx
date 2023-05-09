import React, { useState } from 'react';
import axios from 'axios';
import { gushupAppId, gushupApiKey } from '../constants';

const OtpComponent = () => {
  const [phoneNo, setPhoneNo] = useState('');
  const [otp, setOtp] = useState('');
  const [sentOtp, setSentOtp] = useState('');

  const generateOtp = () => {
    const otpValue = Math.floor(832 + Math.random() * 9000).toString();

    const requestOptions = {

      method: 'sendMessage',
      sendTo: { phoneNo },
      msg: `Your OTP is ${otpValue}`,
      msgType: 'TEXT',
      userId: { gushupAppId },
      password: { gushupApiKey },
      auth_scheme: 'plain',
    };

    axios.post('https://api.gupshup.io/sm/api/v1/msg', requestOptions)
      .then((response) => {
        console.log(response);
        setSentOtp(otpValue);
      });
  };

  const handlePhoneChange = (event) => {
    setPhoneNo(event.target.value);
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    generateOtp();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="phone">
          Enter Phone Number:
          <input type="text" value={phoneNo} onChange={handlePhoneChange} />
        </label>
        <br />
        <button type="submit">Send OTP</button>
      </form>
      <form>
        <label htmlFor="otp">
          Enter OTP:
          <input type="text" value={otp} onChange={handleOtpChange} />
        </label>
        <br />
        {otp === sentOtp && <div>OTP Verified!</div>}
      </form>
    </div>
  );
};

export default OtpComponent;
