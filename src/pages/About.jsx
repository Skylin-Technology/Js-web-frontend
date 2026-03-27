export default function About() {
  return (
    <div className="page-fade">
      {/* Hero */}
      <section style={{position:'relative',minHeight:380,display:'flex',alignItems:'center',justifyContent:'center',overflow:'hidden'}}>
        <img src="https://images.unsplash.com/photo-1562774053-701939374585?w=1400&q=80" alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}/>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(135deg,rgba(10,5,5,.88),rgba(26,35,126,.8))'}}></div>
        <div style={{position:'relative',zIndex:2,textAlign:'center',padding:'4.5rem 2rem 3.5rem',maxWidth:700,margin:'0 auto'}}>
          <div style={{display:'inline-block',padding:'.26rem .88rem',borderRadius:99,fontSize:'.7rem',textTransform:'uppercase',letterSpacing:'.1em',fontWeight:800,background:'rgba(251,191,36,.15)',color:'#fbbf24',marginBottom:'1rem'}}>🏢 About Us</div>
          <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(2rem,5vw,3.4rem)',color:'#fff',lineHeight:1.1,marginBottom:'1rem'}}>About JS Education &<br/><em style={{color:'#fbbf24'}}>Research Foundation</em></h1>
          <p style={{color:'rgba(255,255,255,.7)',fontSize:'.95rem',lineHeight:1.82}}>Tamil Nadu's most trusted college consultancy, based in Attur, Salem District.</p>
        </div>
      </section>

      {/* Story */}
      <section style={{padding:'4.5rem 2rem',background:'#fff'}}>
        <div style={{maxWidth:1100,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'4rem',alignItems:'center'}} className="story-grid">
          <div>
            <div style={{display:'inline-block',padding:'.26rem .88rem',borderRadius:99,fontSize:'.7rem',textTransform:'uppercase',letterSpacing:'.1em',fontWeight:800,background:'#fee2e2',color:'var(--red)',marginBottom:'1rem'}}>Our Story</div>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(1.7rem,2.8vw,2.3rem)',marginBottom:'1rem',lineHeight:1.2}}>From Salem to the World — Shaping Student Futures</h2>
            <p style={{fontSize:'.9rem',color:'#555',lineHeight:1.85,marginBottom:'1rem'}}>JS Education & Research Foundation was founded with a single mission: to ensure that every school-leaving student in Tamil Nadu gets access to honest, expert, and completely free college guidance.</p>
            <p style={{fontSize:'.9rem',color:'#555',lineHeight:1.85,marginBottom:'1rem'}}>Based in Attur Taluk, Salem District, we have personally counselled hundreds of students — from government school toppers to urban students — helping them find colleges that match their academic profile, budget, and career aspirations.</p>
            <p style={{fontSize:'.9rem',color:'#555',lineHeight:1.85}}>Today, our database covers 694+ Tamil Nadu colleges across 15+ streams and our international division supports students going to 15+ countries. But our core promise has never changed: <strong style={{color:'var(--red)'}}>completely free, completely honest guidance.</strong></p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=700&q=80" alt="Students" style={{width:'100%',height:340,objectFit:'cover',borderRadius:20,boxShadow:'0 20px 50px rgba(0,0,0,.12)'}}/>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{padding:'4rem 2rem',background:'var(--bg)'}}>
        <div style={{maxWidth:1100,margin:'0 auto'}}>
          <div style={{textAlign:'center',marginBottom:'2.8rem'}}>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(1.7rem,2.8vw,2.3rem)'}}>Our Core Values</h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))',gap:'1.4rem'}}>
            {[['🎯','Honesty','We never accept payment from colleges for recommendations. Our advice is 100% unbiased.'],['💰','Free Forever','Our service to students will always be free. We believe guidance should not be gated by money.'],['📊','Transparency','Every fee we show is verified real data. No inflated numbers, no hidden charges.'],['🤝','Commitment','We stay with you from shortlisting to admission day — not just a one-time consultation.'],['🏆','Excellence','We continuously update our database with the latest fee data, courses and admission info.'],['❤️','Student First','Every decision we make prioritises the student\'s best interest, not business interest.']].map(([ico,h,p])=>(
              <div key={h} style={{background:'#fff',borderRadius:14,padding:'1.4rem',border:'1px solid var(--border)',textAlign:'center'}}>
                <div style={{fontSize:'2.2rem',marginBottom:'.7rem'}}>{ico}</div>
                <h3 style={{fontSize:'.95rem',fontWeight:800,marginBottom:'.4rem',color:'#111'}}>{h}</h3>
                <p style={{fontSize:'.8rem',color:'#555',lineHeight:1.65}}>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{padding:'4rem 2rem',background:'#fff'}}>
        <div style={{maxWidth:1100,margin:'0 auto'}}>
          <div style={{textAlign:'center',marginBottom:'2.5rem'}}>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(1.7rem,2.8vw,2.3rem)',marginBottom:'.5rem'}}>What We Help With</h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem'}} className="services-grid">
            {['College shortlisting based on cut-off & budget','Fee comparison (MQ, GQ, TN Admission)','Hostel fee planning and tier comparison','12th to UG admission guidance','Engineering / Arts / Medical / Law counselling','NEET / JEE score-based college matching','Study Abroad — USA, UK, Canada, Australia, Germany','SOP writing and university application help','Student visa documentation and filing','IELTS / GRE / TOEFL coaching referrals','Education loan assistance and bank tie-ups','Scholarship identification and application'].map(s=>(
              <div key={s} style={{background:'#f8f7f3',borderRadius:9,padding:'.78rem 1.05rem',fontSize:'.87rem',fontWeight:600,color:'#333',borderLeft:'3px solid var(--red)'}}>✅ {s}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section style={{padding:'3.5rem 2rem',background:'linear-gradient(135deg,#1a237e,#0a1628)',textAlign:'center'}}>
        <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'2rem',color:'#fff',marginBottom:'2rem'}}>Visit or Call Us Today</h2>
        <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap',gap:'2rem'}}>
          {[['📍','Address','1st Floor, Karthikeyan Complex, Railady Street, Attur TK, Salem DT'],['📞','Phone','9524222347'],['🕐','Office Hours','Monday – Sunday · 9AM – 8PM'],['💬','WhatsApp','9524222347']].map(([ico,l,v])=>(
            <div key={l} style={{textAlign:'center',minWidth:180}}>
              <div style={{fontSize:'2rem',marginBottom:'.5rem'}}>{ico}</div>
              <div style={{fontSize:'.68rem',fontWeight:800,textTransform:'uppercase',letterSpacing:'.08em',color:'rgba(255,255,255,.5)',marginBottom:'.3rem'}}>{l}</div>
              <div style={{fontSize:'.9rem',fontWeight:700,color:'#fff'}}>{v}</div>
            </div>
          ))}
        </div>
        <div style={{marginTop:'2rem',display:'flex',gap:'1rem',justifyContent:'center',flexWrap:'wrap'}}>
          <a href="tel:9524222347" style={{padding:'.72rem 1.8rem',borderRadius:9,fontWeight:700,fontSize:'.9rem',background:'var(--red)',color:'#fff'}}>📞 Call Now</a>
          <a href="https://wa.me/919524222347" target="_blank" rel="noreferrer" style={{padding:'.72rem 1.8rem',borderRadius:9,fontWeight:700,fontSize:'.9rem',background:'#25D366',color:'#fff'}}>💬 WhatsApp</a>
        </div>
      </section>
      <style>{`@media(max-width:768px){.story-grid{grid-template-columns:1fr!important}.services-grid{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}
