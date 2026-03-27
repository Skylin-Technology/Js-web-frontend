import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer style={{background:'#080808',color:'rgba(255,255,255,.5)',padding:'3.5rem 2rem 2rem'}}>
      <div style={{maxWidth:1400,margin:'0 auto',display:'grid',gridTemplateColumns:'2fr 1fr 1fr 1fr',gap:'2.5rem',marginBottom:'2.5rem'}} className="foot-grid">
        <div>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:'1rem'}}>
            <div style={{width:44,height:44,background:'linear-gradient(135deg,#e8192c,#1a237e)',borderRadius:9,display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontFamily:"'Playfair Display',serif",fontWeight:900,fontSize:'1.1rem'}}>JS</div>
            <strong style={{fontFamily:"'Playfair Display',serif",fontSize:'1.3rem',color:'#fff'}}>JS Education</strong>
          </div>
          <p style={{fontSize:'.8rem',lineHeight:1.75,marginBottom:'1rem'}}>Tamil Nadu's most trusted college consultancy. Expert guidance for Engineering, Medical, Arts & Science, Law, Pharmacy and International universities. 100% Free.</p>
          <div style={{display:'flex',gap:'.6rem',flexWrap:'wrap'}}>
            <a href="tel:9524222347" style={{background:'var(--red)',color:'#fff',padding:'.38rem .85rem',borderRadius:7,fontSize:'.77rem',fontWeight:700}}>📞 9524222347</a>
            <a href="https://wa.me/919524222347" target="_blank" rel="noreferrer" style={{background:'#25D366',color:'#fff',padding:'.38rem .85rem',borderRadius:7,fontSize:'.77rem',fontWeight:700}}>💬 WhatsApp</a>
          </div>
        </div>
        <div>
          <h4 style={{color:'#fff',fontSize:'.7rem',textTransform:'uppercase',letterSpacing:'.1em',fontWeight:800,marginBottom:'.9rem'}}>Quick Links</h4>
          <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'.4rem'}}>
            {[['/', '🏫 Browse Colleges'],['/abroad','✈ Study Abroad'],['/why-us','⭐ Why Us'],['/about','🏢 About Us'],['/contact','📋 Contact'],['/admin','🔐 Admin']].map(([to,l])=>(
              <li key={to}><Link to={to} style={{fontSize:'.79rem',color:'rgba(255,255,255,.5)',textDecoration:'none'}}>{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 style={{color:'#fff',fontSize:'.7rem',textTransform:'uppercase',letterSpacing:'.1em',fontWeight:800,marginBottom:'.9rem'}}>Streams</h4>
          <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'.4rem'}}>
            {['Engineering','Arts & Science','Medical','Pharmacy','Law','Management','Study Abroad'].map(s=>(
              <li key={s}><Link to={`/?cat=${s}`} style={{fontSize:'.79rem',color:'rgba(255,255,255,.5)',textDecoration:'none'}}>{s}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 style={{color:'#fff',fontSize:'.7rem',textTransform:'uppercase',letterSpacing:'.1em',fontWeight:800,marginBottom:'.9rem'}}>Contact</h4>
          <div style={{display:'flex',flexDirection:'column',gap:'.65rem',fontSize:'.79rem'}}>
            <div>📍 1st Floor, Karthikeyan Complex,<br/>Railady Street, Attur TK, Salem DT</div>
            <div>📞 <a href="tel:9524222347" style={{color:'var(--red)',fontWeight:700}}>9524222347</a></div>
            <div>🕐 Mon–Sun · 9AM–8PM</div>
            <div>💬 <a href="https://wa.me/919524222347" target="_blank" rel="noreferrer" style={{color:'#25D366',fontWeight:700}}>WhatsApp Us</a></div>
          </div>
        </div>
      </div>
      <div style={{borderTop:'1px solid rgba(255,255,255,.07)',paddingTop:'1.5rem',maxWidth:1400,margin:'0 auto',display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:'.5rem'}}>
        <p style={{fontSize:'.77rem'}}>© 2025 <strong style={{color:'var(--red)'}}>JS Education & Research Foundation</strong>. All rights reserved.</p>
        <p style={{fontSize:'.77rem'}}>Made with ❤️ for Tamil Nadu students</p>
      </div>
      <style>{`@media(max-width:768px){.foot-grid{grid-template-columns:1fr!important}}`}</style>
    </footer>
  );
}
