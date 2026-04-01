import React, { useState } from 'react';
import axios from 'axios';

const API = 'https://quote-backend-jsy677wit-onlinesellingpak-9181s-projects.vercel.app';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setMessage('');
    try {
      if (isRegister) {
        await axios.post(`${API}/api/auth/register`, { name, email, password });
        setMessage('Account ban gaya! Ab login karo!');
        setIsRegister(false);
      } else {
        const res = await axios.post(`${API}/api/auth/login`, { email, password });
        localStorage.setItem('token', res.data.token);
        onLogin(res.data.name);
      }
    } catch (err) {
      setMessage('Error! Dobara try karo!');
    }
    setLoading(false);
  };

  return (
    <div style={{minHeight:'90vh', background:'linear-gradient(135deg, #0f0c29, #302b63, #24243e)', display:'flex', alignItems:'center', justifyContent:'center', padding:'20px'}}>
      <div style={{maxWidth:'420px', width:'100%'}}>
        <div style={{textAlign:'center', marginBottom:'40px'}}>
          <div style={{fontSize:'60px', marginBottom:'10px'}}>🔐</div>
          <p style={{fontSize:'12px', letterSpacing:'5px', color:'#43e97b', fontWeight:'700'}}>{isRegister ? 'CREATE ACCOUNT' : 'WELCOME BACK'}</p>
        </div>
        <div style={{background:'rgba(255,255,255,0.05)', backdropFilter:'blur(20px)', borderRadius:'24px', padding:'40px', border:'1px solid rgba(255,255,255,0.1)'}}>
          {isRegister && (
            <input placeholder="Your Name" value={name} onChange={e=>setName(e.target.value)} style={{width:'100%', padding:'14px 20px', marginBottom:'15px', borderRadius:'50px', border:'1px solid rgba(255,255,255,0.2)', background:'rgba(255,255,255,0.05)', color:'#fff', fontSize:'15px', boxSizing:'border-box', outline:'none'}} />
          )}
          <input placeholder="Email Address" value={email} onChange={e=>setEmail(e.target.value)} style={{width:'100%', padding:'14px 20px', marginBottom:'15px', borderRadius:'50px', border:'1px solid rgba(255,255,255,0.2)', background:'rgba(255,255,255,0.05)', color:'#fff', fontSize:'15px', boxSizing:'border-box', outline:'none'}} />
          <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} style={{width:'100%', padding:'14px 20px', marginBottom:'20px', borderRadius:'50px', border:'1px solid rgba(255,255,255,0.2)', background:'rgba(255,255,255,0.05)', color:'#fff', fontSize:'15px', boxSizing:'border-box', outline:'none'}} />
          {message && <p style={{color: message.includes('ban') ? '#43e97b' : '#f5576c', textAlign:'center', marginBottom:'15px', fontSize:'14px'}}>{message}</p>}
          <button onClick={handleSubmit} disabled={loading} style={{width:'100%', padding:'16px', background:'linear-gradient(135deg, #43e97b, #38f9d7)', color:'#000', border:'none', borderRadius:'50px', fontSize:'16px', cursor:'pointer', fontWeight:'700'}}>
            {loading ? 'Wait...' : isRegister ? '🚀 Create Account' : '✨ Login'}
          </button>
          <p onClick={()=>setIsRegister(!isRegister)} style={{textAlign:'center', marginTop:'20px', cursor:'pointer', color:'rgba(255,255,255,0.5)', fontSize:'14px'}}>
            {isRegister ? 'Already have account? Login' : "Don't have account? Register"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
