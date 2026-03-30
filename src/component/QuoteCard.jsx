import React, { useState } from 'react';

const quotes = [
  { text: "The best time to start was yesterday.", author: "Unknown" },
  { text: "Work hard in silence, let success make the noise.", author: "Frank Ocean" },
  { text: "Dream big, start small, act now.", author: "Robin Sharma" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
];

function QuoteCard({ onFavorite }) {
  const [index, setIndex] = useState(0);
  const [saved, setSaved] = useState(false);
  const [animate, setAnimate] = useState(false);

  const newQuote = () => {
    setAnimate(true);
    setTimeout(() => {
      setIndex(Math.floor(Math.random() * quotes.length));
      setSaved(false);
      setAnimate(false);
    }, 300);
  };

  const saveQuote = () => {
    onFavorite(quotes[index]);
    setSaved(true);
  };

  return (
    <div style={{minHeight:'90vh', background:'linear-gradient(135deg, #0f0c29, #302b63, #24243e)', display:'flex', alignItems:'center', justifyContent:'center', padding:'20px'}}>
      <div style={{maxWidth:'650px', width:'100%', textAlign:'center'}}>
        <div style={{fontSize:'80px', marginBottom:'20px', filter:'drop-shadow(0 0 20px rgba(102,126,234,0.8))'}}>💬</div>
        <p style={{fontSize:'12px', letterSpacing:'5px', color:'#667eea', fontWeight:'700', marginBottom:'40px'}}>QUOTE OF THE DAY</p>
        <div style={{background:'rgba(255,255,255,0.05)', backdropFilter:'blur(20px)', borderRadius:'24px', padding:'50px 40px', border:'1px solid rgba(255,255,255,0.1)', marginBottom:'30px', opacity: animate ? 0 : 1, transition:'opacity 0.3s ease'}}>
          <p style={{fontSize:'24px', color:'#fff', lineHeight:'1.9', marginBottom:'25px', fontStyle:'italic', fontWeight:'300'}}>"{quotes[index].text}"</p>
          <div style={{width:'50px', height:'2px', background:'linear-gradient(135deg,#667eea,#764ba2)', margin:'0 auto 20px'}}></div>
          <p style={{fontSize:'16px', color:'#667eea', fontWeight:'600'}}>— {quotes[index].author}</p>
        </div>
        <div style={{display:'flex', gap:'15px', justifyContent:'center'}}>
          <button onClick={newQuote} style={{padding:'16px 40px', background:'linear-gradient(135deg, #667eea, #764ba2)', color:'#fff', border:'none', borderRadius:'50px', fontSize:'16px', cursor:'pointer', fontWeight:'600', boxShadow:'0 10px 30px rgba(102,126,234,0.4)'}}>✨ New Quote</button>
          <button onClick={saveQuote} style={{padding:'16px 40px', background: saved ? 'rgba(255,255,255,0.1)' : 'linear-gradient(135deg, #f093fb, #f5576c)', color:'#fff', border:'none', borderRadius:'50px', fontSize:'16px', cursor:'pointer', fontWeight:'600'}}>{saved ? '✅ Saved!' : '❤️ Save'}</button>
        </div>
      </div>
    </div>
  );
}

export default QuoteCard;