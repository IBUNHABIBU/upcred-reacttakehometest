import React, { useState } from 'react';
import axios from 'axios';

const OtpComponent = () => {
  const [phoneNo, setPhoneNo] = useState('');
  const [otp, setOtp] = useState('');
  const [sentOtp, setSentOtp] = useState('');

  const generateOtp = () => {
    const otpValue = Math.floor(832 + Math.random() * 9000).toString();
    const requestOptions = {
      To: '+255689982923',
      From: '+255752443624',
      Body: `Your OTP is ${otpValue}`,
    };

    axios.post('url/Accounts/accountId/Messages.json',
      requestOptions,
      {
        auth: {
          username: 'twillioAccountId',
          password: 'twillioAuthToken',
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setSentOtp(otpValue);
        }
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
