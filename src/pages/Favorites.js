import React from 'react';

function Favorites({ favorites }) {
  return (
    <div style={{minHeight:'90vh', background:'linear-gradient(135deg, #0f0c29, #302b63, #24243e)', padding:'40px 20px'}}>
      <div style={{maxWidth:'650px', margin:'0 auto', textAlign:'center'}}>
        <div style={{fontSize:'60px', marginBottom:'10px'}}>❤️</div>
        <p style={{fontSize:'12px', letterSpacing:'5px', color:'#f5576c', fontWeight:'700', marginBottom:'40px'}}>MY FAVORITES</p>

        {favorites.length === 0 ? (
          <div style={{background:'rgba(255,255,255,0.05)', borderRadius:'24px', padding:'50px', border:'1px solid rgba(255,255,255,0.1)'}}>
            <p style={{color:'rgba(255,255,255,0.5)', fontSize:'18px'}}>Koi favorite nahi abhi! 😊</p>
            <p style={{color:'rgba(255,255,255,0.3)', fontSize:'14px', marginTop:'10px'}}>Home pe jao aur quotes save karo!</p>
          </div>
        ) : (
          favorites.map((q, i) => (
            <div key={i} style={{background:'rgba(255,255,255,0.05)', backdropFilter:'blur(20px)', borderRadius:'20px', padding:'30px', border:'1px solid rgba(255,255,255,0.1)', marginBottom:'20px', textAlign:'left'}}>
              <p style={{fontSize:'18px', color:'#fff', lineHeight:'1.8', fontStyle:'italic', marginBottom:'15px'}}>"{q.text}"</p>
              <div style={{width:'30px', height:'2px', background:'linear-gradient(135deg,#f093fb,#f5576c)', marginBottom:'12px'}}></div>
              <p style={{color:'#f093fb', fontWeight:'600'}}>— {q.author}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Favorites;