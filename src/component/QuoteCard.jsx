import React, { useState, useEffect } from 'react';
import axios from 'axios';

const quotes = [
  { text: "The best time to start was yesterday.", author: "Unknown" },
  { text: "Work hard in silence, let success make the noise.", author: "Frank Ocean" },
  { text: "Dream big, start small, act now.", author: "Robin Sharma" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
];

function QuoteCard({ onFavorite }) {
  const [index, setIndex] = useState(0);
  const [saved, setSaved] = useState(false);
  const [backendStatus, setBackendStatus] = useState('');

  useEffect(() => {
axios.get('https://quote-backend-opgfjleau-onlinesellingpak-9181s-projects.vercel.app/')      .then(res => setBackendStatus('Backend Connected!'))
      .catch(() => setBackendStatus('Backend not connected'));
  }, []);

  const newQuote = () => {
    setIndex(Math.floor(Math.random() * quotes.length));
    setSaved(false);
  };

  const saveQuote = () => {
    onFavorite(quotes[index]);
    setSaved(true);
  };

  return (
    <div style={{maxWidth:'600px', margin:'100px auto', padding:'40px', borderRadius:'12px', boxShadow:'0 4px 20px rgba(0,0,0,0.1)', textAlign:'center', backgroundColor:'#fff'}}>
      <p style={{fontSize:'12px', color: backendStatus === 'Backend Connected!' ? 'green' : 'red'}}>{backendStatus}</p>
      <p style={{fontSize:'14px', color:'#888'}}>QUOTE OF THE DAY</p>
      <p style={{fontSize:'24px', color:'#333'}}>"{quotes[index].text}"</p>
      <p style={{color:'#666'}}>— {quotes[index].author}</p>
      <button onClick={newQuote} style={{marginTop:'20px', marginRight:'10px', padding:'10px 30px', backgroundColor:'#4CAF50', color:'#fff', border:'none', borderRadius:'8px', cursor:'pointer'}}>New Quote</button>
      <button onClick={saveQuote} style={{marginTop:'20px', padding:'10px 30px', backgroundColor: saved ? '#ccc' : '#e74c3c', color:'#fff', border:'none', borderRadius:'8px', cursor:'pointer'}}>
        {saved ? 'Saved!' : '❤ Save'}
      </button>
    </div>
  );
}

export default QuoteCard;