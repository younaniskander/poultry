import React, { useState, useEffect } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing eye icons
import confirm from "../images/poult.png";
import { useLocation } from 'react-router-dom';

function ChangePassword() {
  const location = useLocation();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetPasswordHash, setResetPasswordHash] = useState('');
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  useEffect(() => {
    if (location.search) {
      const params = new URLSearchParams(location.search);
      const hash = params.get("hash");

      if (hash) {
        setResetPasswordHash(hash);
      }
    }
  }, [location]);

  const validatePassword = (password) => {
    if (!password) {
      return 'Password cannot be empty';
    }
    if (password.length < 6) {
      return 'Password must be more than 6 characters';
    }
    return '';
  };

  const handleConfirm = async () => {
    const passwordError = validatePassword(password);
    const confirmPasswordError = password !== confirmPassword ? "Passwords do not match" : '';

    if (passwordError || confirmPasswordError) {
      setErrors({ password: passwordError, confirmPassword: confirmPasswordError });
      return;
    }

    setErrors({ password: '', confirmPassword: '' });
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('https://the-poultry-api.aiotgroups.com/api/user/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          newPassword: password,
          hash: resetPasswordHash
        }),
      });

      if (response.ok) {
        setMessage('Password changed successfully!');
      } else {
        setMessage('Failed to change password. Please try again.');
      }

    } catch (error) {
      setMessage('An error occurred. Please try again.');
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bg-white'>
      <div className='bg-[#cedbea] h-[85vh] flex justify-center items-center'>
        <div className='w-11/12 h-auto md:w-1/2 bg-white rounded-xl flex flex-col p-4 justify-center items-center gap-6'>
          <div className='w-28 h-28'>
            <img loading="lazy" src={confirm} alt='iconImage' className='' />
          </div>
          <p className='text-sm md:text-lg text-black w-11/12 text-center'>Enter A New Password</p>
          <div className="input-group w-full">
            <div className="relative ">
              <input
                className="w-full outline-none p-3  rounded border-[#cedbea] border-[1px] border-solid"
                type={showPassword ? "text" : "password"} // Toggle password visibility
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.password && <p className="text-red-700 text-sm">{errors.password}</p>}
          </div>
          <div className="input-group w-full">
            <div className="relative">
              <input
                className="w-full outline-none p-3  rounded border-[#cedbea] border-[1px] border-solid"
                type={showPassword ? "text" : "password"}
                required
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.confirmPassword && <p className="text-red-700 text-sm">{errors.confirmPassword}</p>}
          </div>
          <button onClick={handleConfirm} className={`py-2 px-4 md:py-4 md:px-6 rounded ${loading ? "bg-gray-400" : "bg-[#F7B712]"}`}>
            {loading ? "Sending..." : "Send Password"}
          </button>
          {message && <p className={`text-sm ${message.includes('successfully') ? 'text-green-600' : 'text-red-700'}`}>{message}</p>}
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
