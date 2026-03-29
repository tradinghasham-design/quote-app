import React, { useState } from 'react';
import QuoteCard from './component/QuoteCard.jsx';
import Login from './pages/Login';
import Favorites from './pages/Favorites';

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
    <div style={{backgroundColor:'#f0f0f0', minHeight:'100vh'}}>
      <nav style={{backgroundColor:'#4CAF50', padding:'15px', textAlign:'center'}}>
        <button onClick={()=>setPage('home')} style={{marginRight:'10px', padding:'8px 20px', border:'none', borderRadius:'6px', cursor:'pointer'}}>Home</button>
        <button onClick={()=>setPage('favorites')} style={{marginRight:'10px', padding:'8px 20px', border:'none', borderRadius:'6px', cursor:'pointer'}}>❤ Favorites ({favorites.length})</button>
        {user ? (
          <span style={{color:'#fff', marginLeft:'10px'}}>Hello, {user}!</span>
        ) : (
          <button onClick={()=>setPage('login')} style={{padding:'8px 20px', border:'none', borderRadius:'6px', cursor:'pointer'}}>Login</button>
        )}
      </nav>
      {page === 'home' && <QuoteCard onFavorite={addFavorite} />}
      {page === 'favorites' && <Favorites favorites={favorites} />}
      {page === 'login' && <Login onLogin={handleLogin} />}
    </div>
  );
}

export default App;