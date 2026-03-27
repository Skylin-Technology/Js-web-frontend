import { useState, useEffect } from 'react';
const API = 'http://localhost:4000';
export default function CollegeModal({ college: c, onClose }) {
  const [name, setName] = useState(''); const [phone, setPhone] = useState(''); const [ok, setOk] = useState(false);
  useEffect(() => { document.body.style.overflow='hidden'; return()=>{ document.body.style.overflow=''; }; }, []);
  const submit = async () => {
    if (!name.trim()||!phone.trim()) { alert('Enter name and phone'); return; }
    const text = `📋 *College Enquiry — JS Education*\n\n*College:* ${c.n}\n*Name:* ${name}\n*Phone:* ${phone}\n\n_JS Education website_`;
    window.open(`https://wa.me/919524222347?text=${encodeURIComponent(text)}`, '_blank');
    try { await fetch(`${API}/api/enquiries`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ name, phone, college: c.n, district: c.d, stream: c.s, type:'college' }) }); } catch(e){}
    setOk(true);
  };
  return (
    <div onClick={onClose} style={{display:'flex',position:'fixed',inset:0,background:'rgba(0,0,0,.75)',zIndex:1000,alignItems:'flex-start',justifyContent:'center',padding:'1.2rem 1rem',overflowY:'auto'}}>
      <div onClick={e=>e.stopPropagation()} style={{background:'#fff',borderRadius:22,width:'100%',maxWidth:1080,overflow:'hidden',animation:'mUp .26s ease',margin:'auto'}}>
        {/* Banner */}
        <div style={{background:'linear-gradient(135deg,#0f0c0c,#1a237e)',position:'relative',overflow:'hidden'}}>
          {c.img && <img src={c.img} alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',opacity:.18}}/>}
          <div style={{position:'relative',zIndex:1,padding:'1.8rem 2rem 0'}}>
            <button onClick={onClose} style={{position:'absolute',top:'1rem',right:'1rem',background:'rgba(255,255,255,.15)',border:'none',color:'#fff',width:36,height:36,borderRadius:'50%',fontSize:'1.1rem',cursor:'pointer'}}>✕</button>
            <div style={{fontSize:'.7rem',textTransform:'uppercase',letterSpacing:'.1em',color:'rgba(255,255,255,.55)',marginBottom:'.3rem'}}>{c.s} · {c.d}</div>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(1.1rem,2.5vw,1.55rem)',color:'#fff',marginBottom:'.4rem'}}>{c.n}</h2>
            <div style={{fontSize:'.78rem',color:'rgba(255,255,255,.6)',marginBottom:'1rem'}}>Affiliated to {c.a} · {c.t}</div>
          </div>
          <div style={{display:'flex',gap:'.8rem',padding:'0 2rem 1.4rem',flexWrap:'wrap',position:'relative',zIndex:1}}>
            {[['🎓',c.courses.length,'Courses'],['📍',c.d,'District'],['🏛️',c.t,'Type'],['🏨',c.hostel?.length?'✅ Yes':'❌ No','Hostel']].map(([ico,val,lbl])=>(
              <div key={lbl} style={{background:'rgba(255,255,255,.1)',borderRadius:10,padding:'.55rem .85rem',textAlign:'center',minWidth:80}}>
                <div style={{fontSize:'.95rem',fontWeight:800,color:'#fff'}}>{ico} {val}</div>
                <div style={{fontSize:'.6rem',textTransform:'uppercase',color:'rgba(255,255,255,.5)',marginTop:'.1rem'}}>{lbl}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Body */}
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr'}} className="modal-body">
          <div style={{padding:'1.6rem 2rem',borderRight:'1px solid var(--border)'}}>
            {c.desc && <><div style={{fontSize:'.7rem',fontWeight:800,textTransform:'uppercase',letterSpacing:'.08em',color:'var(--muted)',marginBottom:'.5rem'}}>About</div><p style={{fontSize:'.83rem',color:'#555',lineHeight:1.75,marginBottom:'1.4rem'}}>{c.desc}</p></>}
            <div style={{fontSize:'.7rem',fontWeight:800,textTransform:'uppercase',letterSpacing:'.08em',color:'var(--muted)',marginBottom:'.7rem'}}>Courses & Fees</div>
            <div style={{border:'1px solid var(--border)',borderRadius:10,overflow:'hidden'}}>
              <table style={{width:'100%',borderCollapse:'collapse',fontSize:'.79rem'}}>
                <thead><tr style={{background:'#f8f7f3'}}>
                  <th style={{padding:'.45rem .7rem',textAlign:'left',fontWeight:700,borderBottom:'1px solid var(--border)'}}>Course</th>
                  <th style={{padding:'.45rem .7rem',textAlign:'right',fontWeight:700,borderBottom:'1px solid var(--border)'}}>MQ Fee</th>
                  <th style={{padding:'.45rem .7rem',textAlign:'right',fontWeight:700,borderBottom:'1px solid var(--border)'}}>GQ Fee</th>
                </tr></thead>
                <tbody>{c.courses.map((x,i)=>(
                  <tr key={x.n} style={{background:i%2===0?'#fff':'#fafaf6'}}>
                    <td style={{padding:'.42rem .7rem',fontWeight:600}}>{x.n}</td>
                    <td style={{padding:'.42rem .7rem',textAlign:'right',color:x.mq?'var(--red)':'var(--muted)',fontWeight:x.mq?700:400}}>{x.mq?`₹${x.mq.toLocaleString('en-IN')}`:'—'}</td>
                    <td style={{padding:'.42rem .7rem',textAlign:'right',color:x.gq?'var(--blue)':'var(--muted)',fontWeight:x.gq?700:400}}>{x.gq?`₹${x.gq.toLocaleString('en-IN')}`:'—'}</td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
            {c.hostel?.length>0 && (
              <div style={{marginTop:'1.1rem'}}>
                <div style={{fontSize:'.7rem',fontWeight:800,textTransform:'uppercase',letterSpacing:'.08em',color:'var(--muted)',marginBottom:'.5rem'}}>Hostel Fees</div>
                <div style={{display:'flex',gap:'.5rem',flexWrap:'wrap'}}>
                  {c.hostel.map((fee,i)=>(
                    <div key={i} style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'.5rem .9rem',textAlign:'center'}}>
                      <div style={{fontSize:'.7rem',color:'#166534',fontWeight:800}}>Tier {i+1}</div>
                      <div style={{fontSize:'.88rem',fontWeight:800,color:'#15803d'}}>₹{fee.toLocaleString('en-IN')}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div style={{padding:'1.6rem 2rem'}}>
            <div style={{fontFamily:"'Playfair Display',serif",fontSize:'1.25rem',fontWeight:700,marginBottom:'.3rem'}}>Book Free Counselling</div>
            <p style={{fontSize:'.81rem',color:'var(--muted)',marginBottom:'1.2rem',lineHeight:1.6}}>Get expert guidance about {c.n}. Completely free.</p>
            {[['Full Name','text',name,setName,'Your full name'],['Phone Number','tel',phone,setPhone,'+91 XXXXX XXXXX']].map(([l,t,v,s,p])=>(
              <div key={l} style={{marginBottom:'.8rem'}}>
                <label style={{display:'block',fontSize:'.68rem',fontWeight:800,textTransform:'uppercase',letterSpacing:'.07em',color:'var(--muted)',marginBottom:'.28rem'}}>{l}</label>
                <input type={t} placeholder={p} value={v} onChange={e=>s(e.target.value)} style={{width:'100%',padding:'.55rem .78rem',border:'1.5px solid var(--border)',borderRadius:7,fontSize:'.85rem',outline:'none'}} onFocus={e=>e.target.style.borderColor='var(--red)'} onBlur={e=>e.target.style.borderColor='var(--border)'}/>
              </div>
            ))}
            <input value={c.n} readOnly style={{width:'100%',padding:'.55rem .78rem',border:'1.5px solid var(--border)',borderRadius:7,fontSize:'.85rem',background:'#f8f7f3',color:'var(--muted)',marginBottom:'.8rem'}}/>
            <button onClick={submit} style={{background:'var(--red)',color:'#fff',border:'none',borderRadius:8,padding:'.68rem',fontSize:'.88rem',fontWeight:700,width:'100%',cursor:'pointer'}}>💬 Enquire via WhatsApp →</button>
            {ok && <div style={{background:'#dcfce7',color:'#166534',padding:'.8rem',borderRadius:8,marginTop:'.7rem',textAlign:'center',fontWeight:700,fontSize:'.85rem'}}>✅ WhatsApp opened! We'll reply within 2 hours.</div>}
            <div style={{marginTop:'1.3rem',background:'#fef3c7',borderRadius:12,padding:'.95rem'}}>
              <div style={{fontSize:'.79rem',fontWeight:800,color:'#92400e',marginBottom:'.3rem'}}>📞 Prefer a Call?</div>
              <p style={{fontSize:'.77rem',color:'#78350f',lineHeight:1.6,marginBottom:'.5rem'}}>Mon–Sun 9AM–8PM · Free consultation</p>
              <a href="tel:9524222347" style={{display:'inline-block',background:'#f59e0b',color:'#000',padding:'.38rem .9rem',borderRadius:7,fontSize:'.79rem',fontWeight:700}}>📞 Call 9524222347</a>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:640px){.modal-body{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}
