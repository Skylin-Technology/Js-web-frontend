import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { COLLEGES } from '../data/colleges';
import CollegeCard from '../components/CollegeCard';

const DISTS = ['CHENNAI','COIMBATORE','MADURAI','TRICHY','SALEM','NAMAKKAL','ERODE','TIRUPPUR','VELLORE','THANJAVUR','TIRUNELVELI','KANCHIPURAM','PERAMBALUR','KALLAKURICHI','DINDIGUL','KRISHNAGIRI','CUDDALORE','VILLUPURAM','NAGAPATTINAM','KARUR','DHARMAPURI','SIVAGANGA','RAMANATHAPURAM','THOOTHUKUDI','THIRUVANNAMALAI','KANNIYAKUMARI','PUDUCHERRY'];
const STREAMS = ['Engineering','Arts & Science','Medical','Dental','Pharmacy','Nursing','Law','Management','Architecture','Agriculture','Veterinary','Education','Fine Arts','Music','Polytechnic'];
const TYPES = ['Government','Autonomous','Deemed University','Private','Aided','University'];
const CATS = [['','🏫 All'],['Engineering','⚙️ Engineering'],['Arts & Science','🎓 Arts & Science'],['Medical','🏥 Medical'],['Management','💼 Management'],['Law','⚖️ Law'],['Pharmacy','💊 Pharmacy'],['Nursing','🩺 Nursing'],['Agriculture','🌾 Agriculture'],['Architecture','🏛️ Architecture'],['Dental','🦷 Dental'],['Veterinary','🐾 Veterinary'],['Education','📚 Education'],['Fine Arts','🎨 Fine Arts'],['Polytechnic','🔧 Polytechnic']];
const PAGE = 12;

export default function Home() {
  const [sp] = useSearchParams();
  const [q,setQ]=useState(''); const [cat,setCat]=useState(sp.get('cat')||'');
  const [dist,setDist]=useState(''); const [type,setType]=useState('');
  const [minFee,setMinFee]=useState(''); const [maxFee,setMaxFee]=useState('');
  const [hostel,setHostel]=useState(''); const [tn,setTN]=useState('');
  const [sort,setSort]=useState('name'); const [pg,setPg]=useState(1);

  useEffect(()=>{ const c=sp.get('cat'); if(c) setCat(c); },[sp]);

  const filtered = useMemo(()=>{
    let r = COLLEGES.filter(c=>{
      const sq=q.toLowerCase();
      if(sq && !c.n.toLowerCase().includes(sq) && !c.d.toLowerCase().includes(sq) && !c.courses.some(x=>x.n.toLowerCase().includes(sq))) return false;
      if(cat && c.s!==cat) return false;
      if(dist && c.d!==dist) return false;
      if(type && c.t!==type) return false;
      if(hostel==='yes' && (!c.hostel||!c.hostel.length)) return false;
      if(hostel==='no' && c.hostel?.length) return false;
      if(tn==='yes' && !c.tn) return false;
      const fees=c.courses.map(x=>x.mq||x.gq).filter(Boolean);
      const mf=fees.length?Math.min(...fees):null;
      if(minFee && mf && mf<Number(minFee)) return false;
      if(maxFee && mf && mf>Number(maxFee)) return false;
      return true;
    });
    r.sort((a,b)=>{
      if(sort==='name') return a.n.localeCompare(b.n);
      const fa=Math.min(...a.courses.map(x=>x.mq||x.gq).filter(Boolean),Infinity);
      const fb=Math.min(...b.courses.map(x=>x.mq||x.gq).filter(Boolean),Infinity);
      return sort==='fee_asc'?fa-fb:fb-fa;
    });
    return r;
  },[q,cat,dist,type,minFee,maxFee,hostel,tn,sort]);

  const shown = filtered.slice(0, pg*PAGE);
  const clear = ()=>{ setQ('');setCat('');setDist('');setType('');setMinFee('');setMaxFee('');setHostel('');setTN('');setSort('name');setPg(1); };
  const inp={padding:'.5rem .78rem',border:'1.5px solid var(--border)',borderRadius:7,fontSize:'.82rem',outline:'none',background:'#fff',color:'var(--ink)',width:'100%'};

  return (
    <div className="page-fade">
      {/* HERO */}
      <section style={{position:'relative',minHeight:640,display:'flex',alignItems:'center',background:'#060606'}}>
        <div style={{position:'absolute',inset:0,overflow:'hidden'}}>
          <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1800&q=80" alt="" style={{width:'100%',height:'100%',objectFit:'cover',opacity:.28}}/>
        </div>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(115deg,rgba(5,4,4,.97) 0%,rgba(15,13,50,.85) 52%,rgba(100,8,18,.5) 100%)'}}></div>
        <div style={{position:'relative',zIndex:2,maxWidth:1400,margin:'0 auto',padding:'5rem 2rem',width:'100%',display:'grid',gridTemplateColumns:'1.1fr 1fr',gap:'3.5rem',alignItems:'center',boxSizing:'border-box'}} className="hero-grid">
          <div>
            <div style={{display:'inline-flex',alignItems:'center',gap:'.5rem',background:'rgba(255,255,255,.09)',border:'1px solid rgba(255,255,255,.18)',padding:'.28rem .88rem',borderRadius:99,fontSize:'.7rem',letterSpacing:'.1em',textTransform:'uppercase',color:'rgba(255,255,255,.8)',marginBottom:'1.3rem'}}>
              <span style={{width:7,height:7,borderRadius:'50%',background:'#4ade80',animation:'pulse 2s infinite',display:'inline-block'}}></span> Admissions Open 2025–26
            </div>
            <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(2.4rem,4.2vw,3.9rem)',lineHeight:1.08,color:'#fff',marginBottom:'1.1rem'}}>Find Your Perfect College,<br/><em style={{color:'#fbbf24'}}>Shape Your Future</em></h1>
            <p style={{fontSize:'.97rem',color:'rgba(255,255,255,.62)',lineHeight:1.82,marginBottom:'2rem',maxWidth:510}}>JS Education & Research Foundation — Tamil Nadu's most trusted college consultancy. 694+ colleges, all streams. 100% Free guidance.</p>
            <div style={{display:'flex',gap:'.9rem',flexWrap:'wrap',marginBottom:'2.8rem'}}>
              <a href="#browse" style={{display:'inline-flex',alignItems:'center',gap:'.5rem',padding:'.72rem 1.75rem',borderRadius:9,fontWeight:700,fontSize:'.88rem',background:'var(--red)',color:'#fff'}}>🔍 Browse 694+ Colleges</a>
              <a href="tel:9524222347" style={{display:'inline-flex',alignItems:'center',gap:'.5rem',padding:'.72rem 1.75rem',borderRadius:9,fontWeight:700,fontSize:'.88rem',background:'rgba(255,255,255,.1)',color:'#fff',border:'1.5px solid rgba(255,255,255,.3)'}}>📞 Free Counselling</a>
            </div>
            <div style={{display:'flex',gap:'2.2rem',flexWrap:'wrap'}}>
              {[['694+','TN Colleges'],['40+','Courses'],['15+','Countries'],['Free','Counselling']].map(([n,l])=>(
                <div key={l}><div style={{fontFamily:"'Playfair Display',serif",fontSize:'2.1rem',fontWeight:900,color:'#fff',lineHeight:1}}>{n}</div><div style={{fontSize:'.68rem',textTransform:'uppercase',letterSpacing:'.08em',color:'rgba(255,255,255,.48)',marginTop:'.15rem'}}>{l}</div></div>
              ))}
            </div>
          </div>
          <div className="hero-img" style={{borderRadius:18,overflow:'hidden',height:360,boxShadow:'0 24px 64px rgba(0,0,0,.45)',position:'relative'}}>
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&q=85" alt="Students" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center top'}}/>
            <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,transparent 40%,rgba(5,4,20,.82) 100%)'}}></div>
            <div style={{position:'absolute',bottom:0,left:0,right:0,padding:'1.4rem 1.5rem'}}>
              <div style={{fontFamily:"'Playfair Display',serif",fontSize:'1.1rem',fontWeight:700,color:'#fff',marginBottom:'.5rem'}}>🎓 Students from Every Stream</div>
              <div style={{display:'flex',gap:'.4rem',flexWrap:'wrap'}}>
                {['⚙️ Engineering','🎨 Arts','🏥 Medical','⚖️ Law','✈️ Abroad'].map(t=>(
                  <span key={t} style={{padding:'.18rem .65rem',borderRadius:99,fontSize:'.67rem',fontWeight:700,border:'1.5px solid rgba(255,255,255,.35)',color:'rgba(255,255,255,.9)',background:'rgba(255,255,255,.08)'}}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-grid{grid-template-columns:1fr!important}.hero-img{display:none!important}}`}</style>
      </section>

      {/* SEARCH */}
      <div id="browse" style={{background:'#fff',padding:'1.6rem 2rem',borderBottom:'1.5px solid var(--border)',boxShadow:'0 4px 18px rgba(0,0,0,.05)'}}>
        <div style={{maxWidth:1400,margin:'0 auto'}}>
          <div style={{display:'flex',gap:'.75rem',marginBottom:'.85rem',flexWrap:'wrap'}}>
            <div style={{flex:1,minWidth:240,position:'relative'}}>
              <span style={{position:'absolute',left:'1rem',top:'50%',transform:'translateY(-50%)',pointerEvents:'none'}}>🔍</span>
              <input value={q} onChange={e=>{setQ(e.target.value);setPg(1);}} placeholder="Search college, city, course..." style={{width:'100%',padding:'.8rem 1rem .8rem 2.7rem',border:'2px solid var(--border)',borderRadius:9,fontSize:'.92rem',outline:'none'}} onFocus={e=>e.target.style.borderColor='var(--red)'} onBlur={e=>e.target.style.borderColor='var(--border)'}/>
            </div>
            <button onClick={()=>setPg(1)} style={{background:'var(--red)',color:'#fff',border:'none',borderRadius:9,padding:'.75rem 1.6rem',fontSize:'.9rem',fontWeight:700,cursor:'pointer'}}>Search</button>
          </div>
          <div style={{display:'flex',gap:'.55rem',flexWrap:'wrap'}}>
            {[['Stream',STREAMS,cat,v=>{setCat(v);setPg(1);}],['District',DISTS.map(d=>({value:d,label:d.charAt(0)+d.slice(1).toLowerCase()})),dist,v=>{setDist(v);setPg(1);}],['Type',TYPES,type,v=>{setType(v);setPg(1);}]].map(([label,opts,val,setter])=>(
              <select key={label} value={val} onChange={e=>setter(e.target.value)} style={{padding:'.54rem .82rem',border:'1.5px solid var(--border)',borderRadius:7,fontSize:'.81rem',outline:'none',background:'#fff',cursor:'pointer',color:'var(--ink)'}}>
                <option value="">All {label}s</option>
                {opts.map(o=>typeof o==='string'?<option key={o}>{o}</option>:<option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            ))}
          </div>
          <div style={{display:'flex',gap:'.42rem',flexWrap:'wrap',marginTop:'.85rem'}}>
            {CATS.map(([v,l])=>(
              <button key={v} onClick={()=>{setCat(v);setPg(1);}} style={{padding:'.3rem .88rem',borderRadius:99,border:'1.5px solid',fontSize:'.77rem',fontWeight:600,cursor:'pointer',whiteSpace:'nowrap',background:cat===v?'var(--red)':'#fff',color:cat===v?'#fff':'#555',borderColor:cat===v?'var(--red)':'var(--border)'}}>
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div style={{maxWidth:1400,margin:'2rem auto',padding:'0 2rem',display:'grid',gridTemplateColumns:'260px 1fr',gap:'2rem',alignItems:'start'}} className="layout-grid">
        {/* Sidebar */}
        <aside style={{background:'#fff',borderRadius:14,border:'1px solid var(--border)',padding:'1.4rem',position:'sticky',top:84}}>
          <div style={{fontSize:'.74rem',fontWeight:800,textTransform:'uppercase',letterSpacing:'.08em',color:'var(--muted)',marginBottom:'1rem',paddingBottom:'.65rem',borderBottom:'1px solid var(--border)'}}>Refine Results</div>
          {[['Min Fees/Year (₹)',minFee,setMinFee,'number','e.g. 30000'],['Max Fees/Year (₹)',maxFee,setMaxFee,'number','e.g. 300000']].map(([l,v,s,t,p])=>(
            <div key={l} style={{marginBottom:'.95rem'}}>
              <label style={{display:'block',fontSize:'.7rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'.06em',color:'var(--muted)',marginBottom:'.32rem'}}>{l}</label>
              <input type={t} placeholder={p} value={v} onChange={e=>{s(e.target.value);setPg(1);}} style={inp}/>
            </div>
          ))}
          {[['Hostel',hostel,setHostel,[['','Any'],['yes','✅ With Hostel'],['no','❌ Without']]],['TN Admission',tn,setTN,[['','Any'],['yes','TN Adm Open']]],['Sort By',sort,setSort,[['name','Name A–Z'],['fee_asc','Fee: Low → High'],['fee_desc','Fee: High → Low']]]].map(([l,v,s,opts])=>(
            <div key={l} style={{marginBottom:'.95rem'}}>
              <label style={{display:'block',fontSize:'.7rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'.06em',color:'var(--muted)',marginBottom:'.32rem'}}>{l}</label>
              <select value={v} onChange={e=>{s(e.target.value);setPg(1);}} style={{...inp,cursor:'pointer'}}>
                {opts.map(([ov,ol])=><option key={ov} value={ov}>{ol}</option>)}
              </select>
            </div>
          ))}
          <button onClick={clear} style={{width:'100%',padding:'.5rem',border:'1.5px solid var(--border)',borderRadius:7,background:'#f8f7f3',fontSize:'.79rem',fontWeight:700,cursor:'pointer',color:'var(--muted)'}}>✕ Clear All Filters</button>
          <div style={{marginTop:'.85rem',fontSize:'.77rem',color:'var(--muted)'}}>{filtered.length} colleges found</div>
        </aside>

        {/* Grid */}
        <div>
          <div style={{fontSize:'.81rem',color:'var(--muted)',marginBottom:'1rem'}}>
            Showing <strong style={{color:'var(--red)'}}>{shown.length}</strong> of <strong>{filtered.length}</strong> colleges
          </div>
          {filtered.length===0 ? (
            <div style={{textAlign:'center',padding:'5rem 2rem',color:'var(--muted)'}}>
              <div style={{fontSize:'4rem',marginBottom:'1rem'}}>🔍</div>
              <h3 style={{marginBottom:'.5rem'}}>No colleges found</h3>
              <button onClick={clear} style={{background:'var(--red)',color:'#fff',border:'none',borderRadius:8,padding:'.5rem 1.2rem',fontWeight:700,cursor:'pointer',marginTop:'.5rem'}}>Clear Filters</button>
            </div>
          ) : (
            <>
              <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(min(240px,100%),1fr))',gap:'1.25rem'}}>
                {shown.map(c=><CollegeCard key={c.id} college={c}/>)}
              </div>
              {shown.length<filtered.length && (
                <div style={{textAlign:'center',padding:'2rem 0'}}>
                  <button onClick={()=>setPg(p=>p+1)} style={{background:'var(--red)',color:'#fff',border:'none',borderRadius:9,padding:'.72rem 2rem',fontSize:'.9rem',fontWeight:700,cursor:'pointer'}}>
                    Load More ({filtered.length-shown.length} remaining)
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* WHY US */}
      <section style={{padding:'4.5rem 2rem',background:'#111'}}>
        <div style={{maxWidth:1400,margin:'0 auto'}}>
          <div style={{textAlign:'center',marginBottom:'2.8rem'}}>
            <div style={{display:'inline-block',padding:'.26rem .88rem',borderRadius:99,fontSize:'.7rem',textTransform:'uppercase',letterSpacing:'.1em',fontWeight:800,background:'rgba(232,25,44,.18)',color:'#ff8a9a',marginBottom:'.8rem'}}>Why Choose Us</div>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'#fff',lineHeight:1.2}}>Tamil Nadu's Most Trusted<br/><em style={{color:'#fbbf24'}}>College Consultancy</em></h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))',gap:'1.2rem'}}>
            {[['📊','Real 2025 Fee Data','Verified MQ, GQ and TN Admission fees for 694+ colleges across all streams. No surprises.'],['🔍','Smart Filter & Search','Filter by stream, district, course, fee range, hostel and TN admission to find your match.'],['🏨','Hostel Info','Hostel tiers (I, II, III) listed with exact annual fees so families can plan finances precisely.'],['📞','100% Free Guidance','Expert counselors based in Salem help you choose the right college at zero cost.'],['✈️','Study Abroad','Full support for USA, UK, Canada, Australia, Germany & 10+ countries with visa assistance.'],['🏛️','All College Types','Government, Autonomous, Deemed, Private — compare all types with honest information.']].map(([ico,h,p])=>(
              <div key={h} style={{background:'rgba(255,255,255,.04)',border:'1px solid rgba(255,255,255,.08)',borderRadius:14,padding:'1.4rem',transition:'.2s'}} onMouseOver={e=>e.currentTarget.style.background='rgba(255,255,255,.08)'} onMouseOut={e=>e.currentTarget.style.background='rgba(255,255,255,.04)'}>
                <div style={{width:44,height:44,borderRadius:11,background:'rgba(232,25,44,.15)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.3rem',marginBottom:'.85rem'}}>{ico}</div>
                <h4 style={{fontSize:'.93rem',fontWeight:700,color:'#fff',marginBottom:'.38rem'}}>{h}</h4>
                <p style={{fontSize:'.79rem',color:'rgba(255,255,255,.5)',lineHeight:1.7}}>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{padding:'4rem 2rem',background:'#fff'}}>
        <div style={{maxWidth:1400,margin:'0 auto'}}>
          <div style={{textAlign:'center',marginBottom:'2.5rem'}}>
            <div style={{display:'inline-block',padding:'.26rem .88rem',borderRadius:99,fontSize:'.7rem',textTransform:'uppercase',letterSpacing:'.1em',fontWeight:800,background:'#fee2e2',color:'var(--red)',marginBottom:'.7rem'}}>Student Stories</div>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(1.7rem,2.8vw,2.4rem)'}}>What Our Students Say</h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(270px,1fr))',gap:'1.2rem'}}>
            {[['Arjun K.','B.E CSE · Mahendra Engineering College, Namakkal','JS Education helped me compare 20+ colleges in Salem and Namakkal. Got into Mahendra Autonomous with GQ seat — saved ₹60,000 per year!'],['Muthu R.','B.Tech CSE · SRM Institute of Science & Technology','Thanks to JS Education I got into SRM. Their fee comparison table showed me exactly what each seat costs — no hidden fees.'],['Priya N.','MS Data Science · University of Leeds, UK','I wanted to study abroad. JS Education helped me apply to a UK university with scholarship. Visa approved in 3 weeks!'],['Kavya S.','B.E ECE · Paavai Engineering College, Namakkal','The hostel fee breakdown helped my family plan perfectly. Found a college with three hostel tiers matching our exact budget.']].map(([n,m,t])=>(
              <div key={n} style={{background:'var(--bg)',borderRadius:14,padding:'1.35rem',border:'1px solid var(--border)'}}>
                <div style={{color:'#f59e0b',marginBottom:'.65rem'}}>★★★★★</div>
                <p style={{fontSize:'.83rem',color:'#444',lineHeight:1.78,marginBottom:'.85rem',fontStyle:'italic'}}>"{t}"</p>
                <div style={{fontSize:'.81rem',fontWeight:800}}>{n}</div>
                <div style={{fontSize:'.72rem',color:'var(--muted)',marginTop:'.08rem'}}>{m}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style>{`@media(max-width:768px){.layout-grid{grid-template-columns:1fr!important}aside{position:static!important}}`}</style>
    </div>
  );
}
