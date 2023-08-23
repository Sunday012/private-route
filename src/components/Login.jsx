import React, { useState } from 'react';
import './General.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Auth';

export default function Login() {
  const [user, setUser] = useState(''); 
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    auth.login(user);
    navigate('/private');
  };

  return (
    <>
      <h2>Fill in this form to continue</h2>
      <div>
        <form onSubmit={handleLogin}>
          Username:<input type="text" onChange={(e) => setUser(e.target.value)} required/>
         <input type="submit"></input>
        </form>
      </div>
    </>
  );
}
