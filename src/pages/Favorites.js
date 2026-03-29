import React from 'react';

function Favorites({ favorites }) {
  return (
    <div style={{maxWidth:'600px', margin:'50px auto', padding:'20px'}}>
      <h2 style={{textAlign:'center', color:'#333', marginBottom:'30px'}}>❤ My Favorites</h2>
      {favorites.length === 0 ? (
        <p style={{textAlign:'center', color:'#888'}}>Koi favorite nahi hai abhi!</p>
      ) : (
        favorites.map((q, i) => (
          <div key={i} style={{backgroundColor:'#fff', padding:'20px', borderRadius:'12px', marginBottom:'15px', boxShadow:'0 2px 10px rgba(0,0,0,0.1)'}}>
            <p style={{fontSize:'18px', color:'#333'}}>"{q.text}"</p>
            <p style={{color:'#666'}}>— {q.author}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Favorites;