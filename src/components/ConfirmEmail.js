import React, { useState, useEffect } from 'react';
import confirm from "../images/poult.png";
import { useLocation } from 'react-router-dom';

function ConfirmEmail() {
  const location = useLocation();
  const [confirmationHash, setConfirmationHash] = useState("");
  const [message, setMessage] = useState("");
  const [loading , setLoading] = useState(false);

  useEffect(() => {
    // استخراج الـ hash من الـ query string باستخدام URLSearchParams
    const params = new URLSearchParams(location.search);
    const hash = params.get("hash"); // الحصول على قيمة الـ hash من الـ query parameter

    if (hash) {
      setConfirmationHash(hash);
    }
  }, [location]);

  const handleConfirm = async () => {

    setLoading(true)

    try {
      
      const response = await fetch('https://the-poultry-api.aiotgroups.com/api/user/verify-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ hash: confirmationHash }),
      });


      if (response.ok) {
        setMessage('Confirm successfully!');
      } 
    } catch (error) {
      setMessage('An error occurred. Please try again.');

    }finally{
      setLoading(false)
    }
  };


  return (
    <div className='bg-white'>
      <div className='bg-[#eee] h-screen flex justify-center items-center'>
        <div className='w-11/12  md:w-1/2 bg-white rounded-xl flex flex-col p-4 items-center gap-6'>
          <div className='w-28 h-28'>
            <img loading="lazy" src={confirm} alt='iconImage' className='' /> 
          </div>
          <p className='text-sm md:text-lg  text-[#F7B712] w-11/12 text-center'>We are excited to have you get started. First, You need to confirm your account. just press the button below.</p>
          <button onClick={handleConfirm} className={`py-2 px-4 md:py-4 md:px-6 rounded  ${loading ? "bg-gray-400": "bg-[#F7B712]" }`}>{loading? "Confirming...":"Confirm Email"}</button>
          {message && <p className={`text-sm ${message.includes('successfully') ? 'text-green-600' : 'text-red-700'}`}>{message}</p>}
        </div>
      </div>
    </div>
  );

}



export default ConfirmEmail;
