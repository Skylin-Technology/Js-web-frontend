import { useState } from 'react';
const API = 'http://localhost:4000';
export default function Contact() {
  const [name,setName]=useState(''); const [phone,setPhone]=useState('');
  const [interest,setInterest]=useState(''); const [msg,setMsg]=useState('');
  const [ok,setOk]=useState(false);
  const submit = async () => {
    if(!name.trim()||!phone.trim()){alert('Enter name and phone');return;}
    const text=`📋 *Free Enquiry — JS Education*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Interested In:* ${interest}\n${msg?'*Message:* '+msg:''}\n\n_JS Education website_`;
    window.open(`https://wa.me/919524222347?text=${encodeURIComponent(text)}`, '_blank');
    try { await fetch(`${API}/api/enquiries`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name,phone,college:'',stream:interest,type:'general',notes:msg})}); } catch(e){}
    setOk(true);
  };
  const inp={width:'100%',padding:'.58rem .82rem',border:'1.5px solid var(--border)',borderRadius:7,fontSize:'.86rem',outline:'none',background:'#fff'};
  return (
    <div className="page-fade">
      {/* Hero */}
      <section style={{position:'relative',minHeight:340,display:'flex',alignItems:'center',justifyContent:'center',overflow:'hidden'}}>
        <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1400&q=80" alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}/>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(135deg,rgba(232,25,44,.88),rgba(26,35,126,.85))'}}></div>
        <div style={{position:'relative',zIndex:2,textAlign:'center',padding:'4rem 2rem 3rem',maxWidth:620,margin:'0 auto'}}>
          <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(2rem,5vw,3.2rem)',color:'#fff',lineHeight:1.1,marginBottom:'.9rem'}}>Let's Find Your<br/><em style={{color:'#fbbf24'}}>Perfect College</em></h1>
          <p style={{color:'rgba(255,255,255,.8)',fontSize:'.95rem',lineHeight:1.8}}>Reach out to our counselors — completely free. We'll help you shortlist colleges based on your cut-off, budget and preferred location.</p>
        </div>
      </section>

      {/* Contact Grid */}
      <section style={{padding:'4rem 2rem',background:'linear-gradient(135deg,#f8f7f3,#ede8de)'}}>
        <div style={{maxWidth:1000,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1.3fr',gap:'3.5rem',alignItems:'start'}} className="contact-grid">
          {/* Info */}
          <div>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'1.9rem',marginBottom:'.7rem',lineHeight:1.2}}>Contact Information</h2>
            <p style={{color:'var(--muted)',lineHeight:1.8,marginBottom:'1.8rem',fontSize:'.9rem'}}>Our counselors are available 7 days a week to help you make the right college choice.</p>
            {[['📞','Phone','Call Us Directly',<a href="tel:9524222347" style={{color:'var(--red)',fontWeight:700,fontSize:'.95rem'}}>9524222347</a>],['💬','WhatsApp','Quick Response',<a href="https://wa.me/919524222347" target="_blank" rel="noreferrer" style={{color:'#25D366',fontWeight:700,fontSize:'.95rem'}}>Chat on WhatsApp →</a>],['📍','Address','Visit Our Office',<span style={{fontWeight:600,fontSize:'.88rem'}}>1st Floor, Karthikeyan Complex,<br/>Railady Street, Attur TK, Salem DT</span>],['🕐','Office Hours','We are Open',<span style={{fontWeight:600,fontSize:'.88rem'}}>Monday – Sunday · 9AM – 8PM</span>]].map(([ico,lbl,sub,val])=>(
              <div key={lbl} style={{display:'flex',gap:'.9rem',alignItems:'flex-start',marginBottom:'1.3rem'}}>
                <div style={{width:44,height:44,borderRadius:11,background:'#fee2e2',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.05rem',flexShrink:0}}>{ico}</div>
                <div><div style={{fontSize:'.68rem',fontWeight:800,textTransform:'uppercase',letterSpacing:'.07em',color:'var(--muted)'}}>{lbl} · {sub}</div><div style={{marginTop:'.12rem',lineHeight:1.5}}>{val}</div></div>
              </div>
            ))}
            <div style={{background:'#fff',borderRadius:14,padding:'1.2rem',border:'1px solid var(--border)',marginTop:'1.5rem'}}>
              <div style={{fontWeight:800,fontSize:'.88rem',marginBottom:'.5rem',color:'var(--ink)'}}>📱 Contact for Abroad Enquiries</div>
              <p style={{fontSize:'.82rem',color:'var(--muted)',lineHeight:1.7,marginBottom:'.7rem'}}>For Study Abroad guidance (USA, UK, Canada, Australia, Germany), WhatsApp us mentioning "Study Abroad enquiry".</p>
              <a href="https://wa.me/919524222347?text=I%20am%20enquiring%20about%20Study%20Abroad" target="_blank" rel="noreferrer" style={{display:'inline-block',background:'#25D366',color:'#fff',padding:'.4rem .9rem',borderRadius:7,fontSize:'.8rem',fontWeight:700}}>💬 WhatsApp — Abroad Enquiry</a>
            </div>
          </div>

          {/* Form */}
          <div style={{background:'#fff',borderRadius:18,padding:'2rem',boxShadow:'0 8px 32px rgba(0,0,0,.08)'}}>
            <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:'1.4rem',marginBottom:'1.2rem'}}>Free Enquiry Form</h3>
            {[['Full Name','text',name,setName,'Your full name'],['Phone Number','tel',phone,setPhone,'+91 XXXXX XXXXX']].map(([l,t,v,s,p])=>(
              <div key={l} style={{marginBottom:'.85rem'}}>
                <label style={{display:'block',fontSize:'.68rem',fontWeight:800,textTransform:'uppercase',letterSpacing:'.07em',color:'var(--muted)',marginBottom:'.3rem'}}>{l}</label>
                <input type={t} placeholder={p} value={v} onChange={e=>s(e.target.value)} style={inp} onFocus={e=>e.target.style.borderColor='var(--red)'} onBlur={e=>e.target.style.borderColor='var(--border)'}/>
              </div>
            ))}
            <div style={{marginBottom:'.85rem'}}>
              <label style={{display:'block',fontSize:'.68rem',fontWeight:800,textTransform:'uppercase',letterSpacing:'.07em',color:'var(--muted)',marginBottom:'.3rem'}}>I'm Interested In</label>
              <select value={interest} onChange={e=>setInterest(e.target.value)} style={{...inp,cursor:'pointer'}} onFocus={e=>e.target.style.borderColor='var(--red)'} onBlur={e=>e.target.style.borderColor='var(--border)'}>
                <option value="">Select an option</option>
                {['Engineering Colleges','Arts & Science Colleges','Medical Colleges','Pharmacy Colleges','Law Colleges','Management / MBA','Study Abroad — USA','Study Abroad — UK','Study Abroad — Canada','Study Abroad — Australia','Other'].map(o=><option key={o}>{o}</option>)}
              </select>
            </div>
            <div style={{marginBottom:'.85rem'}}>
              <label style={{display:'block',fontSize:'.68rem',fontWeight:800,textTransform:'uppercase',letterSpacing:'.07em',color:'var(--muted)',marginBottom:'.3rem'}}>Message</label>
              <textarea value={msg} onChange={e=>setMsg(e.target.value)} rows={3} placeholder="Your 12th cut-off / NEET score, preferred district, budget range..." style={{...inp,resize:'vertical'}} onFocus={e=>e.target.style.borderColor='var(--red)'} onBlur={e=>e.target.style.borderColor='var(--border)'}/>
            </div>
            <button onClick={submit} style={{background:'var(--red)',color:'#fff',border:'none',borderRadius:8,padding:'.72rem',fontSize:'.9rem',fontWeight:700,cursor:'pointer',width:'100%',marginTop:'.3rem'}}>💬 Send via WhatsApp →</button>
            {ok && <div style={{background:'#dcfce7',color:'#166534',padding:'.85rem',borderRadius:8,marginTop:'.8rem',textAlign:'center',fontWeight:700,fontSize:'.87rem'}}>✅ WhatsApp opened! We'll respond within 2 hours.</div>}
          </div>
        </div>
      </section>
      <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}
