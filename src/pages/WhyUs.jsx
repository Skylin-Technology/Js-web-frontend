export default function WhyUs() {
  return (
    <div className="page-fade">
      {/* Hero */}
      <section style={{position:'relative',minHeight:380,display:'flex',alignItems:'center',justifyContent:'center',overflow:'hidden'}}>
        <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1400&q=80" alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}/>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(135deg,rgba(10,5,5,.88),rgba(26,35,126,.8))'}}></div>
        <div style={{position:'relative',zIndex:2,textAlign:'center',padding:'4.5rem 2rem 3.5rem',maxWidth:700,margin:'0 auto'}}>
          <div style={{display:'inline-block',padding:'.26rem .88rem',borderRadius:99,fontSize:'.7rem',textTransform:'uppercase',letterSpacing:'.1em',fontWeight:800,background:'rgba(251,191,36,.15)',color:'#fbbf24',marginBottom:'1rem'}}>⭐ Why Choose Us</div>
          <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(2rem,5vw,3.4rem)',color:'#fff',lineHeight:1.1,marginBottom:'1rem'}}>Tamil Nadu's Most Trusted<br/><em style={{color:'#fbbf24'}}>College Consultancy</em></h1>
          <p style={{color:'rgba(255,255,255,.7)',fontSize:'.95rem',lineHeight:1.82}}>From 12th results to college admission — we guide you every step of the way, completely free.</p>
        </div>
      </section>

      {/* Stats */}
      <div style={{background:'var(--red)',padding:'1.4rem 2rem'}}>
        <div style={{maxWidth:1200,margin:'0 auto',display:'flex',justifyContent:'space-around',flexWrap:'wrap',gap:'1rem',textAlign:'center'}}>
          {[['694+','TN Colleges Listed'],['15+','Countries Abroad'],['500+','Students Placed'],['₹0','Consultation Fee'],['100%','Free Service']].map(([n,l])=>(
            <div key={l}><div style={{fontSize:'1.8rem',fontWeight:900,color:'#fff'}}>{n}</div><div style={{fontSize:'.7rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'.06em',color:'rgba(255,255,255,.8)'}}>{l}</div></div>
          ))}
        </div>
      </div>

      {/* Main Why Cards */}
      <section style={{padding:'4.5rem 2rem',background:'#fff'}}>
        <div style={{maxWidth:1200,margin:'0 auto'}}>
          <div style={{textAlign:'center',marginBottom:'3rem'}}>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(1.8rem,3vw,2.5rem)',marginBottom:'.6rem'}}>Why Thousands of Students Trust JS Education</h2>
            <p style={{color:'var(--muted)',fontSize:'.92rem',maxWidth:540,margin:'0 auto'}}>We are not just a consultancy — we are your career partners, guiding you from 12th to your dream college.</p>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(320px,1fr))',gap:'1.5rem'}}>
            {[
              ['📊','Real & Verified Fee Data','Access verified 2025 MQ, GQ and TN Admission fees for 694+ colleges across all streams and districts. No hidden costs, no surprises — what you see is what you pay.','#fee2e2','var(--red)'],
              ['🔍','Smart Search & Filter','Our intelligent filter system lets you narrow down colleges by stream, district, college type, fee range, hostel availability and TN admission status — all in seconds.','#dbeafe','#1e40af'],
              ['🏨','Complete Hostel Info','We list hostel tiers (I, II, III) with exact annual fees so your family can plan finances precisely. No last-minute surprises on accommodation costs.','#dcfce7','#14532d'],
              ['📞','100% Free Guidance','Our Salem-based expert counselors provide honest, unbiased college guidance at absolutely zero cost. We are paid by no college — our loyalty is only to you.','#fef3c7','#92400e'],
              ['✈️','Study Abroad Experts','Full end-to-end support for USA, UK, Canada, Australia, Germany, Singapore, UAE and 10+ more countries — SOP, visa, scholarships, and pre-departure orientation.','#f3e8ff','#6b21a8'],
              ['🏛️','All College Types','We cover Government, Autonomous, Deemed University, Private, Aided and University colleges — giving you a complete, honest comparison across all types.','#ecfdf5','#15803d'],
              ['📱','WhatsApp Support','Instant responses via WhatsApp. Send your 12th mark sheet, NEET score, or cut-off and get personalised college recommendations within hours.','#fdf2f8','#9d174d'],
              ['🎓','Career Counselling','Not just college selection — we help you understand career paths, course outcomes, placement records and post-graduation options for informed decision-making.','#fff7ed','#9a3412'],
            ].map(([ico,h,p,bg,c])=>(
              <div key={h} style={{background:'#fff',borderRadius:16,overflow:'hidden',border:'1px solid var(--border)',transition:'.22s',boxShadow:'0 2px 12px rgba(0,0,0,.06)'}} onMouseOver={e=>{e.currentTarget.style.transform='translateY(-4px)';e.currentTarget.style.boxShadow='0 12px 36px rgba(0,0,0,.1)';}} onMouseOut={e=>{e.currentTarget.style.transform='';e.currentTarget.style.boxShadow='0 2px 12px rgba(0,0,0,.06)';}}>
                <div style={{height:8,background:c}}></div>
                <div style={{padding:'1.4rem'}}>
                  <div style={{width:48,height:48,borderRadius:12,background:bg,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.4rem',marginBottom:'.9rem'}}>{ico}</div>
                  <h3 style={{fontSize:'1.05rem',fontWeight:800,marginBottom:'.55rem',color:'#111'}}>{h}</h3>
                  <p style={{fontSize:'.83rem',color:'#555',lineHeight:1.65}}>{p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{padding:'4rem 2rem',background:'var(--bg)'}}>
        <div style={{maxWidth:1200,margin:'0 auto'}}>
          <div style={{textAlign:'center',marginBottom:'2.5rem'}}>
            <div style={{display:'inline-block',padding:'.26rem .88rem',borderRadius:99,fontSize:'.7rem',textTransform:'uppercase',letterSpacing:'.1em',fontWeight:800,background:'#fee2e2',color:'var(--red)',marginBottom:'.7rem'}}>Student Stories</div>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(1.7rem,2.8vw,2.3rem)'}}>Real Students, Real Results</h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:'1.2rem'}}>
            {[['Arjun K.','B.E CSE · Mahendra Engineering College','JS Education compared 20+ colleges for me. Got GQ seat saving ₹60,000/year!'],['Muthu R.','B.Tech CSE · SRM University','Fee comparison table was incredibly transparent. No hidden fees at all.'],['Priya N.','MS Data Science · Leeds, UK','Visa approved in 3 weeks. Complete abroad support made my dream possible.'],['Kavya S.','B.E ECE · Paavai, Namakkal','Hostel fee breakdown was perfect. Family planned finances without surprise.'],['Ravi M.','MBBS · Russia (NMC Recognised)','Affordable MBBS abroad. JS Education handled everything from application to visa.'],['Santhiya P.','MBA · UK University','Got scholarship guidance that covered 40% of my tuition. Life-changing!']].map(([n,m,t])=>(
              <div key={n} style={{background:'#fff',borderRadius:14,padding:'1.35rem',border:'1px solid var(--border)',boxShadow:'0 2px 12px rgba(0,0,0,.05)',transition:'.2s'}} onMouseOver={e=>e.currentTarget.style.transform='translateY(-3px)'} onMouseOut={e=>e.currentTarget.style.transform=''}>
                <div style={{color:'#f59e0b',marginBottom:'.65rem'}}>★★★★★</div>
                <p style={{fontSize:'.83rem',color:'#444',lineHeight:1.75,marginBottom:'.85rem',fontStyle:'italic'}}>"{t}"</p>
                <div style={{fontWeight:800,fontSize:'.82rem'}}>{n}</div>
                <div style={{fontSize:'.72rem',color:'var(--muted)',marginTop:'.07rem'}}>{m}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{padding:'4rem 2rem',background:'linear-gradient(135deg,#e8192c,#b91020)',textAlign:'center'}}>
        <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(1.8rem,3vw,2.6rem)',color:'#fff',marginBottom:'.8rem'}}>Ready to Find Your Dream College?</h2>
        <p style={{color:'rgba(255,255,255,.8)',fontSize:'.95rem',marginBottom:'2rem'}}>Call us today — completely free counselling, no obligation.</p>
        <div style={{display:'flex',gap:'1rem',justifyContent:'center',flexWrap:'wrap'}}>
          <a href="tel:9524222347" style={{display:'inline-flex',alignItems:'center',gap:'.5rem',padding:'.75rem 2rem',borderRadius:10,fontWeight:700,fontSize:'.95rem',background:'#fff',color:'var(--red)'}}>📞 Call 9524222347</a>
          <a href="https://wa.me/919524222347" target="_blank" rel="noreferrer" style={{display:'inline-flex',alignItems:'center',gap:'.5rem',padding:'.75rem 2rem',borderRadius:10,fontWeight:700,fontSize:'.95rem',background:'rgba(255,255,255,.15)',color:'#fff',border:'1.5px solid rgba(255,255,255,.4)'}}>💬 WhatsApp Now</a>
        </div>
      </section>
    </div>
  );
}
