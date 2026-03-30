import React, { useState } from 'react';
import QuoteCard from './component/QuoteCard.jsx';
import Login from './pages/Login';
import Favorites from './pages/Favorites';
import About from './pages/About';

function App() {
  const [page, setPage] = useState('home');
  const [favorites, setFavorites] = useState([]);
  const [user, setUser] = useState(null);

  const addFavorite = (quote) => {
    setFavorites([...favorites, quote]);
  };

  const handleLogin = (name) => {
    setUser(name);
    setPage('home');
  };

  return (
    <div style={{minHeight:'100vh', background:'#0f0c29'}}>
      <nav style={{background:'rgba(255,255,255,0.05)', backdropFilter:'blur(10px)', padding:'15px 30px', display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'1px solid rgba(255,255,255,0.1)'}}>
        <div style={{color:'#fff', fontSize:'22px', fontWeight:'700', letterSpacing:'2px'}}>✨ QuoteApp</div>
        <div style={{display:'flex', gap:'10px', flexWrap:'wrap'}}>
          <button onClick={()=>setPage('home')} style={{padding:'8px 20px', background: page==='home' ? 'linear-gradient(135deg,#667eea,#764ba2)' : 'transparent', color:'#fff', border:'1px solid rgba(255,255,255,0.3)', borderRadius:'50px', cursor:'pointer', fontSize:'14px'}}>Home</button>
          <button onClick={()=>setPage('favorites')} style={{padding:'8px 20px', background: page==='favorites' ? 'linear-gradient(135deg,#f093fb,#f5576c)' : 'transparent', color:'#fff', border:'1px solid rgba(255,255,255,0.3)', borderRadius:'50px', cursor:'pointer', fontSize:'14px'}}>❤️ {favorites.length}</button>
          <button onClick={()=>setPage('about')} style={{padding:'8px 20px', background: page==='about' ? 'linear-gradient(135deg,#43e97b,#38f9d7)' : 'transparent', color:'#fff', border:'1px solid rgba(255,255,255,0.3)', borderRadius:'50px', cursor:'pointer', fontSize:'14px'}}>👨‍💻 About</button>
          {user ? (
            <span style={{color:'#fff', padding:'8px 20px', background:'rgba(255,255,255,0.1)', borderRadius:'50px', fontSize:'14px'}}>👤 {user}</span>
          ) : (
            <button onClick={()=>setPage('login')} style={{padding:'8px 20px', background:'linear-gradient(135deg,#43e97b,#38f9d7)', color:'#000', border:'none', borderRadius:'50px', cursor:'pointer', fontSize:'14px', fontWeight:'600'}}>Login</button>
          )}
        </div>
      </nav>
      {page === 'home' && <QuoteCard onFavorite={addFavorite} />}
      {page === 'favorites' && <Favorites favorites={favorites} />}
      {page === 'login' && <Login onLogin={handleLogin} />}
      {page === 'about' && <About />}
    </div>
  );
}

export default App;