import React, { useState } from 'react';

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
                password: {gushupApiKey},
                auth_scheme: 'plain',
             }

  };
  return (
    <div>OtpComponent</div>
  );
};

export default OtpComponent;
