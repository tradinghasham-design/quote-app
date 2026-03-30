import React from 'react';

function About() {
  return (
    <div style={{minHeight:'90vh', background:'linear-gradient(135deg, #0f0c29, #302b63, #24243e)', display:'flex', alignItems:'center', justifyContent:'center', padding:'20px'}}>
      <div style={{maxWidth:'500px', width:'100%', textAlign:'center'}}>

        <div style={{fontSize:'80px', marginBottom:'20px'}}>👨‍💻</div>

        <div style={{background:'rgba(255,255,255,0.05)', backdropFilter:'blur(20px)', borderRadius:'24px', padding:'40px', border:'1px solid rgba(255,255,255,0.1)'}}>

          <h1 style={{color:'#fff', fontSize:'28px', fontWeight:'700', marginBottom:'5px'}}>Hasham Khan</h1>
          <p style={{color:'#667eea', fontSize:'14px', letterSpacing:'3px', marginBottom:'30px'}}>SOFTWARE ENGINEER</p>

          <div style={{width:'50px', height:'2px', background:'linear-gradient(135deg,#667eea,#764ba2)', margin:'0 auto 30px'}}></div>

          <div style={{display:'flex', flexDirection:'column', gap:'15px'}}>

            <a href="tel:03090649180" style={{display:'flex', alignItems:'center', gap:'15px', background:'rgba(255,255,255,0.05)', borderRadius:'50px', padding:'15px 25px', textDecoration:'none', border:'1px solid rgba(255,255,255,0.1)'}}>
              <span style={{fontSize:'20px'}}>📞</span>
              <span style={{color:'#fff', fontSize:'15px'}}>03090649180</span>
            </a>

            <a href="https://www.tiktok.com/@itshtr" target="_blank" rel="noreferrer" style={{display:'flex', alignItems:'center', gap:'15px', background:'rgba(255,255,255,0.05)', borderRadius:'50px', padding:'15px 25px', textDecoration:'none', border:'1px solid rgba(255,255,255,0.1)'}}>
              <span style={{fontSize:'20px'}}>🎵</span>
              <span style={{color:'#fff', fontSize:'15px'}}>@itshtr — TikTok</span>
            </a>

          </div>

        </div>
      </div>
    </div>
  );
}

export default About;