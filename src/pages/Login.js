import React, { useState } from 'react';
import axios from 'axios';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    try {
      if (isRegister) {
        await axios.post('http://localhost:5000/api/auth/register', { name, email, password });
        setMessage('Account ban gaya! Ab login karo!');
        setIsRegister(false);
      } else {
        const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
        localStorage.setItem('token', res.data.token);
        onLogin(res.data.name);
      }
    } catch (err) {
      setMessage('Error! Dobara try karo!');
    }
  };

  return (
    <div style={{maxWidth:'400px', margin:'100px auto', padding:'40px', borderRadius:'12px', boxShadow:'0 4px 20px rgba(0,0,0,0.1)', backgroundColor:'#fff'}}>
      <h2 style={{textAlign:'center', marginBottom:'30px'}}>{isRegister ? 'Register' : 'Login'}</h2>
      {isRegister && <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} style={{width:'100%', padding:'10px', marginBottom:'15px', borderRadius:'8px', border:'1px solid #ddd', boxSizing:'border-box'}} />}
      <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} style={{width:'100%', padding:'10px', marginBottom:'15px', borderRadius:'8px', border:'1px solid #ddd', boxSizing:'border-box'}} />
      <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} style={{width:'100%', padding:'10px', marginBottom:'20px', borderRadius:'8px', border:'1px solid #ddd', boxSizing:'border-box'}} />
      {message && <p style={{color:'green', textAlign:'center'}}>{message}</p>}
      <button onClick={handleSubmit} style={{width:'100%', padding:'12px', backgroundColor:'#4CAF50', color:'#fff', border:'none', borderRadius:'8px', fontSize:'16px', cursor:'pointer'}}>{isRegister ? 'Register' : 'Login'}</button>
      <p onClick={()=>setIsRegister(!isRegister)} style={{textAlign:'center', marginTop:'15px', cursor:'pointer', color:'#4CAF50'}}>{isRegister ? 'Login karo' : 'Account banao'}</p>
    </div>
  );
}

export default Login;