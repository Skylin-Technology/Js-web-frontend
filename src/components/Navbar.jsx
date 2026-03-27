import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const active = (p) => pathname === p || (p !== '/' && pathname.startsWith(p));
  const links = [['/', '🏫 Colleges'], ['/abroad', '✈ Study Abroad'], ['/why-us', '⭐ Why Us'], ['/about', '🏢 About Us'], ['/contact', '📋 Contact']];

  return (
    <>
      <nav style={{background:'#fff',borderBottom:'1.5px solid var(--border)',position:'sticky',top:0,zIndex:700,boxShadow:'0 2px 18px rgba(0,0,0,.07)'}}>
        <div style={{maxWidth:1400,margin:'0 auto',padding:'0 2rem',display:'flex',alignItems:'center',height:68,gap:'1.5rem'}}>
          <Link to="/" style={{display:'flex',alignItems:'center',gap:10,flexShrink:0,textDecoration:'none'}}>
            <div style={{width:48,height:48,background:'linear-gradient(135deg,#e8192c,#1a237e)',borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontFamily:"'Playfair Display',serif",fontWeight:900,fontSize:'1.3rem',flexShrink:0}}>JS</div>
            <div><strong style={{display:'block',fontFamily:"'Playfair Display',serif",fontSize:'1.15rem',color:'var(--ink)'}}>JS Education</strong><span style={{fontSize:'.6rem',letterSpacing:'.08em',textTransform:'uppercase',color:'var(--muted)'}}>Attain Your Destination</span></div>
          </Link>
          <div style={{display:'flex',gap:2,marginLeft:'1rem'}} className="desk-nav">
            {links.map(([to, label]) => (
              <Link key={to} to={to} style={{padding:'.42rem .85rem',borderRadius:7,fontSize:'.84rem',fontWeight:active(to)?700:500,color:active(to)?'var(--red)':'#444',background:active(to)?'#f5eded':'transparent',textDecoration:'none',whiteSpace:'nowrap'}}>
                {label}
              </Link>
            ))}
          </div>
          <div style={{marginLeft:'auto',display:'flex',gap:'.6rem',alignItems:'center'}}>
            <Link to="/admin" style={{background:'linear-gradient(135deg,#0a1628,#1a3a6e)',color:'#fff',padding:'.42rem .9rem',borderRadius:8,fontSize:'.8rem',fontWeight:700,textDecoration:'none',whiteSpace:'nowrap'}}>🔐 Admin</Link>
            <a href="tel:9524222347" style={{background:'var(--red)',color:'#fff',padding:'.42rem .9rem',borderRadius:8,fontSize:'.8rem',fontWeight:700,whiteSpace:'nowrap'}}>📞 9524222347</a>
            <button onClick={()=>setOpen(o=>!o)} className="ham" style={{display:'none',flexDirection:'column',gap:5,background:'none',border:'none',padding:6}}>
              {[0,1,2].map(i=><span key={i} style={{display:'block',width:22,height:2,background:'var(--ink)',borderRadius:2}}></span>)}
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div style={{position:'fixed',top:68,left:0,right:0,background:'#fff',zIndex:699,padding:'1.2rem 1.5rem',borderBottom:'2px solid var(--border)',boxShadow:'0 10px 30px rgba(0,0,0,.12)'}}>
          {links.map(([to, label]) => <Link key={to} to={to} onClick={()=>setOpen(false)} style={{display:'block',padding:'.7rem 0',fontSize:'.95rem',fontWeight:600,borderBottom:'1px solid #f0ede8',color:active(to)?'var(--red)':'var(--ink)',textDecoration:'none'}}>{label}</Link>)}
          <a href="tel:9524222347" style={{display:'block',marginTop:'.8rem',background:'var(--red)',color:'#fff',textAlign:'center',padding:'.8rem',borderRadius:9,fontWeight:700}}>📞 Call Now — 9524222347</a>
        </div>
      )}

      <style>{`@media(max-width:900px){.desk-nav{display:none!important}.ham{display:flex!important}}`}</style>

      <a href="https://wa.me/919524222347?text=Hi%20I%20need%20college%20counselling" target="_blank" rel="noreferrer" style={{position:'fixed',bottom:'1.5rem',right:'1.2rem',zIndex:9999,background:'#25D366',color:'#fff',width:56,height:56,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.6rem',boxShadow:'0 4px 20px rgba(37,211,102,.5)',textDecoration:'none'}}>💬</a>
      <a href="tel:9524222347" style={{position:'fixed',bottom:'1.5rem',left:'1.2rem',zIndex:9999,background:'var(--red)',color:'#fff',width:56,height:56,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.4rem',boxShadow:'0 4px 20px rgba(232,25,44,.4)',textDecoration:'none'}}>📞</a>
    </>
  );
}
