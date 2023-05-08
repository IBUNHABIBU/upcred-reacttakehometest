import React, { useState } from 'react';
import { gushupAppId, gushupApiKey } from '../constants';
import axios from 'axios';

const OtpComponent = () => {
  const [phoneNo, setPhoneNo] = useState('');
  const [otp, setOtp] = useState('');
  const [sentOtp, setSentOtp] = useState('');

  const generateOtp = () => {
    const otpValue = Math.floor(832 + Math.random() * 9000).toString();

    const requestOptions = {

      method: 'sendMessage',
      sendTo: phoneNo,
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
      })
  };
  return (
    <div>OtpComponent</div>
  );
};

export default OtpComponent;
