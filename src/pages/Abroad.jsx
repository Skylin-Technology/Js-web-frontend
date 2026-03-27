import { useState } from 'react';
const API = 'http://localhost:4000';
const COUNTRIES = [
  {flag:'🇺🇸',name:'USA',tags:['MS / PhD','MBA','STEM OPT','F-1 Visa'],desc:'Home to MIT, Stanford, Harvard. GRE/GMAT required. Strong post-study work with STEM OPT extension (3 years).',img:'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600&q=80',facts:[['3000+','Universities'],['$20K–60K','Tuition/Year'],['3 Years','OPT Work Permit']]},
  {flag:'🇬🇧',name:'United Kingdom',tags:['MSc','MBA','Graduate Route'],desc:'Oxford, Cambridge, Imperial. 1-year Masters. Graduate Route visa allows 2 years work after graduation.',img:'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80',facts:[['150+','Universities'],['£15K–35K','Tuition/Year'],['2 Years','Work After Study']]},
  {flag:'🇨🇦',name:'Canada',tags:['PR Pathway','PGWP','Study Permit'],desc:'World-class QS ranked universities. Post-Graduation Work Permit (3 years). Clear pathway to Permanent Residency.',img:'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=600&q=80',facts:[['100+','Universities'],['CAD 15K–40K','Tuition/Year'],['3 Years','Work Permit']]},
  {flag:'🇦🇺',name:'Australia',tags:['Group of 8','485 Visa','Scholarships'],desc:'Group of Eight universities. Post-study work visa (2–4 years). High quality of life and safe environment.',img:'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=600&q=80',facts:[['43','Universities'],['AUD 20K–45K','Tuition/Year'],['2–4 Years','Work Visa']]},
  {flag:'🇩🇪',name:'Germany',tags:['FREE Tuition','DAAD','Masters'],desc:'Most public universities charge zero tuition! DAAD scholarships available. Engineering & Technology powerhouse.',img:'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80',facts:[['400+','Universities'],['€0–3K','Tuition/Year'],['18 Months','Job Seeker Visa']]},
  {flag:'🇸🇬',name:'Singapore',tags:["NUS","NTU","Asia's Best"],desc:"NUS and NTU ranked in Asia's top 5. English-medium. Central location in Southeast Asia.",img:'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&q=80',facts:[['6','Top Universities'],['SGD 20K–40K','Tuition/Year'],['1 Year','E-Pass Eligible']]},
  {flag:'🇦🇪',name:'UAE / Dubai',tags:['International Campus','Work Permit','Tax Free'],desc:'Branch campuses of top global universities. Tax-free income. Strong Indian community and network.',img:'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80',facts:[['50+','Universities'],['AED 40K–80K','Tuition/Year'],['3 Years','Work Visa']]},
  {flag:'🇷🇺',name:'Russia / Ukraine',tags:['Affordable MBBS','NMC Recognised','Low Cost'],desc:'Affordable MBBS for Indian students. NMC (MCI) recognised universities. English medium available.',img:'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=600&q=80',facts:[['100+','Med Universities'],['₹20L–35L','Total Course'],['5.5 Years','MBBS Duration']]},
];
export default function Abroad() {
  const [name,setName]=useState(''); const [phone,setPhone]=useState(''); const [country,setCountry]=useState(''); const [course,setCourse]=useState(''); const [msg,setMsg]=useState(''); const [ok,setOk]=useState(false);
  const submit = async () => {
    if(!name.trim()||!phone.trim()){alert('Enter name and phone');return;}
    const text=`✈️ *Abroad Enquiry — JS Education*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Country:* ${country}\n*Course:* ${course}\n${msg?'*Message:* '+msg:''}\n\n_JS Education website_`;
    window.open(`https://wa.me/919524222347?text=${encodeURIComponent(text)}`, '_blank');
    try { await fetch(`${API}/api/enquiries`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name,phone,college:country,stream:'Abroad',type:'abroad',notes:course+' '+msg})}); } catch(e){}
    setOk(true);
  };
  const inp={width:'100%',padding:'.55rem .78rem',border:'1.5px solid var(--border)',borderRadius:7,fontSize:'.85rem',outline:'none',background:'#fff'};
  return (
    <div className="page-fade">
      {/* Hero */}
      <section style={{position:'relative',minHeight:440,display:'flex',alignItems:'center',justifyContent:'center',overflow:'hidden'}}>
        <img src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1400&q=80" alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',opacity:1}}/>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(135deg,rgba(4,8,15,.85),rgba(7,20,40,.8),rgba(13,26,69,.75))'}}></div>
        <div style={{position:'relative',zIndex:2,maxWidth:820,margin:'0 auto',padding:'5rem 2rem 4rem',textAlign:'center',width:'100%'}}>
          <div style={{display:'inline-flex',alignItems:'center',gap:'.5rem',background:'rgba(255,255,255,.09)',border:'1px solid rgba(255,255,255,.2)',padding:'.28rem .88rem',borderRadius:99,fontSize:'.7rem',letterSpacing:'.1em',textTransform:'uppercase',color:'rgba(255,255,255,.8)',marginBottom:'1.4rem'}}>
            <span style={{width:7,height:7,borderRadius:'50%',background:'#4ade80',animation:'pulse 2s infinite',display:'inline-block'}}></span>International Admissions 2025–26 Open
          </div>
          <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(2rem,5vw,3.6rem)',color:'#fff',lineHeight:1.1,marginBottom:'1.1rem'}}>Study Abroad —<br/><em style={{color:'#fbbf24'}}>Your Global Future Starts Here</em></h1>
          <p style={{color:'rgba(255,255,255,.72)',fontSize:'.97rem',lineHeight:1.85,maxWidth:600,margin:'0 auto 2rem'}}>Complete end-to-end support for international university admissions. Profile evaluation, university shortlisting, SOP writing, visa filing, scholarship guidance and pre-departure orientation.</p>
          <div style={{display:'flex',gap:'1rem',justifyContent:'center',flexWrap:'wrap'}}>
            <a href="tel:9524222347" style={{padding:'.75rem 1.9rem',borderRadius:9,fontWeight:700,fontSize:'.9rem',background:'#f59e0b',color:'#000'}}>📞 Free Counselling Call</a>
            <a href="https://wa.me/919524222347?text=I%20want%20to%20study%20abroad" target="_blank" rel="noreferrer" style={{padding:'.75rem 1.9rem',borderRadius:9,fontWeight:700,fontSize:'.9rem',background:'#25D366',color:'#fff'}}>💬 WhatsApp Us</a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div style={{background:'#f59e0b',padding:'1.2rem 2rem'}}>
        <div style={{maxWidth:1200,margin:'0 auto',display:'flex',justifyContent:'space-around',flexWrap:'wrap',gap:'1rem',textAlign:'center'}}>
          {[['500+','Students Placed'],['15+','Countries'],['200+','Universities'],['₹0','Consultation Fee'],['98%','Visa Success Rate']].map(([n,l])=>(
            <div key={l}><div style={{fontSize:'1.8rem',fontWeight:900,color:'#000'}}>{n}</div><div style={{fontSize:'.7rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'.06em',color:'#000'}}>{l}</div></div>
          ))}
        </div>
      </div>

      {/* Countries */}
      <section style={{padding:'4rem 2rem',background:'#f8f7f3'}}>
        <div style={{maxWidth:1300,margin:'0 auto'}}>
          <div style={{textAlign:'center',marginBottom:'2.8rem'}}>
            <div style={{display:'inline-block',padding:'.26rem .88rem',borderRadius:99,fontSize:'.7rem',textTransform:'uppercase',letterSpacing:'.1em',fontWeight:800,background:'#fef3c7',color:'#92400e',marginBottom:'.7rem'}}>Top Destinations</div>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(1.8rem,3vw,2.5rem)',marginBottom:'.5rem'}}>Choose Your Study Destination</h2>
            <p style={{fontSize:'.92rem',color:'var(--muted)'}}>Tie-ups with top universities across 15+ countries</p>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:'1.5rem'}}>
            {COUNTRIES.map(c=>(
              <div key={c.name} style={{background:'#fff',borderRadius:16,overflow:'hidden',border:'1px solid var(--border)',transition:'.22s',display:'flex',flexDirection:'column'}} onMouseOver={e=>{e.currentTarget.style.transform='translateY(-4px)';e.currentTarget.style.boxShadow='0 12px 36px rgba(0,0,0,.12)';}} onMouseOut={e=>{e.currentTarget.style.transform='';e.currentTarget.style.boxShadow='';}}>
                <div style={{height:170,overflow:'hidden'}}><img src={c.img} alt={c.name} style={{width:'100%',height:'100%',objectFit:'cover',display:'block',transition:'.35s'}}/></div>
                <div style={{padding:'1.4rem',display:'flex',flexDirection:'column',flex:1}}>
                  <div style={{display:'flex',alignItems:'center',gap:'.6rem',marginBottom:'.7rem'}}><span style={{fontSize:'2rem'}}>{c.flag}</span><h3 style={{fontSize:'1.15rem',fontWeight:800,color:'#111'}}>{c.name}</h3></div>
                  <div style={{display:'flex',flexWrap:'wrap',gap:'.32rem',marginBottom:'.8rem'}}>
                    {c.tags.map(t=><span key={t} style={{background:'#f0f4ff',color:'#1d4ed8',fontSize:'.69rem',fontWeight:700,padding:'.17rem .52rem',borderRadius:5}}>{t}</span>)}
                  </div>
                  <p style={{fontSize:'.83rem',color:'#555',lineHeight:1.65,marginBottom:'1rem',flex:1}}>{c.desc}</p>
                  <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'.5rem',marginBottom:'1.1rem',background:'#f8f7f3',borderRadius:10,padding:'.8rem'}}>
                    {c.facts.map(([v,l])=><div key={l} style={{textAlign:'center'}}><div style={{fontSize:'.8rem',fontWeight:800,color:'#111',lineHeight:1.2}}>{v}</div><div style={{fontSize:'.59rem',color:'#888',marginTop:'.18rem'}}>{l}</div></div>)}
                  </div>
                  <button onClick={()=>{setCountry(c.name);document.getElementById('abroad-form')?.scrollIntoView({behavior:'smooth',block:'center'});}} style={{width:'100%',background:'var(--red)',color:'#fff',border:'none',borderRadius:8,padding:'.7rem',fontSize:'.84rem',fontWeight:700,cursor:'pointer'}}>Apply for {c.name.split(' ')[0]} →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section style={{padding:'4rem 2rem',background:'#fff'}}>
        <div style={{maxWidth:1200,margin:'0 auto'}}>
          <div style={{textAlign:'center',marginBottom:'2.5rem'}}>
            <div style={{display:'inline-block',padding:'.26rem .88rem',borderRadius:99,fontSize:'.7rem',textTransform:'uppercase',letterSpacing:'.1em',fontWeight:800,background:'#fee2e2',color:'var(--red)',marginBottom:'.7rem'}}>How It Works</div>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(1.7rem,2.8vw,2.3rem)'}}>Your Abroad Admission in 6 Simple Steps</h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))',gap:'1.5rem'}}>
            {[['1','Free Profile Evaluation','We assess your academics, IELTS/GRE scores and budget to identify best-fit universities.'],['2','University Shortlist','Get a curated list of 8–12 universities across Dream, Target and Safe categories.'],['3','SOP & Application','Our writers craft compelling Statements of Purpose and help complete all application forms.'],['4','Scholarship & Loans','We identify scholarships and connect you with banks offering the best education loan rates.'],['5','Visa Filing','Complete visa documentation, DS-160/Tier 4/Student visa preparation and mock interviews.'],['6','Pre-Departure','Accommodation support, airport pickup coordination and orientation before you fly.']].map(([n,title,desc])=>(
              <div key={n} style={{textAlign:'center',padding:'1.4rem 1rem'}}>
                <div style={{width:48,height:48,borderRadius:'50%',background:'var(--red)',color:'#fff',fontFamily:"'Playfair Display',serif",fontSize:'1.3rem',fontWeight:900,display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 1rem'}}>{n}</div>
                <div style={{fontWeight:800,fontSize:'.91rem',marginBottom:'.38rem'}}>{title}</div>
                <div style={{fontSize:'.79rem',color:'var(--muted)',lineHeight:1.65}}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="abroad-form" style={{padding:'4rem 2rem',background:'linear-gradient(135deg,#04080f,#071428,#0b2040)'}}>
        <div style={{maxWidth:680,margin:'0 auto'}}>
          <div style={{textAlign:'center',marginBottom:'2rem'}}>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'2rem',color:'#fbbf24',marginBottom:'.5rem'}}>Book Your FREE Abroad Consultation</h2>
            <p style={{color:'rgba(255,255,255,.6)',fontSize:'.9rem'}}>Profile evaluation + personalised university shortlist. No cost, no obligation.</p>
          </div>
          <div style={{background:'rgba(255,255,255,.05)',border:'1px solid rgba(255,255,255,.1)',borderRadius:20,padding:'2rem'}}>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem',marginBottom:'1rem'}} className="form-grid">
              {[['Full Name','text',name,setName,'Your full name'],['Phone Number','tel',phone,setPhone,'+91 XXXXX XXXXX']].map(([l,t,v,s,p])=>(
                <div key={l}><label style={{display:'block',fontSize:'.68rem',fontWeight:800,textTransform:'uppercase',letterSpacing:'.07em',color:'rgba(255,255,255,.55)',marginBottom:'.28rem'}}>{l}</label><input type={t} placeholder={p} value={v} onChange={e=>s(e.target.value)} style={{...inp,background:'rgba(255,255,255,.08)',border:'1.5px solid rgba(255,255,255,.15)',color:'#fff'}} onFocus={e=>e.target.style.borderColor='#f59e0b'} onBlur={e=>e.target.style.borderColor='rgba(255,255,255,.15)'}/></div>
              ))}
            </div>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem',marginBottom:'1rem'}} className="form-grid">
              {[['Preferred Country',[country,setCountry],['','Select country',...COUNTRIES.map(c=>c.name)]],['Desired Course',[course,setCourse],['','Select course','MS Computer Science','MBA','MBBS','B.Sc Nursing','MS Electrical/Mechanical','MS Data Science','B.Sc / M.Sc','Architecture','Other']]].map(([l,[v,s],opts])=>(
                <div key={l}><label style={{display:'block',fontSize:'.68rem',fontWeight:800,textTransform:'uppercase',letterSpacing:'.07em',color:'rgba(255,255,255,.55)',marginBottom:'.28rem'}}>{l}</label>
                <select value={v} onChange={e=>s(e.target.value)} style={{...inp,background:'rgba(255,255,255,.08)',border:'1.5px solid rgba(255,255,255,.15)',color: v?'#fff':'rgba(255,255,255,.4)',cursor:'pointer'}} onFocus={e=>e.target.style.borderColor='#f59e0b'} onBlur={e=>e.target.style.borderColor='rgba(255,255,255,.15)'}>
                  {opts.map((o,i)=><option key={o} value={i===0?'':o} style={{background:'#1a237e',color:'#fff'}}>{o}</option>)}
                </select></div>
              ))}
            </div>
            <div style={{marginBottom:'1.2rem'}}>
              <label style={{display:'block',fontSize:'.68rem',fontWeight:800,textTransform:'uppercase',letterSpacing:'.07em',color:'rgba(255,255,255,.55)',marginBottom:'.28rem'}}>Message (Optional)</label>
              <textarea value={msg} onChange={e=>setMsg(e.target.value)} rows={3} placeholder="Your 12th marks, current qualification, budget range..." style={{...inp,background:'rgba(255,255,255,.08)',border:'1.5px solid rgba(255,255,255,.15)',color:'#fff',resize:'vertical'}} onFocus={e=>e.target.style.borderColor='#f59e0b'} onBlur={e=>e.target.style.borderColor='rgba(255,255,255,.15)'}/>
            </div>
            <button onClick={submit} style={{width:'100%',background:'linear-gradient(135deg,#f59e0b,#d97706)',color:'#000',border:'none',borderRadius:10,padding:'.82rem',fontSize:'.95rem',fontWeight:800,cursor:'pointer'}}>🎓 Book My Free Session via WhatsApp →</button>
            {ok && <div style={{background:'rgba(34,197,94,.15)',color:'#4ade80',border:'1px solid rgba(34,197,94,.3)',padding:'.85rem',borderRadius:8,marginTop:'.8rem',textAlign:'center',fontWeight:700}}>✅ WhatsApp opened! We'll respond within 2 hours.</div>}
          </div>
        </div>
        <style>{`@media(max-width:500px){.form-grid{grid-template-columns:1fr!important}}`}</style>
      </section>
    </div>
  );
}
