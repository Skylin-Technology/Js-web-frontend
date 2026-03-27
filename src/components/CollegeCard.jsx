import { useState } from 'react';
import CollegeModal from './CollegeModal';
const TC = {Autonomous:{bg:'#ede9fe',c:'#5b21b6'},Government:{bg:'#dcfce7',c:'#14532d'},Private:{bg:'#fef3c7',c:'#92400e'},'Deemed University':{bg:'#fce7f3',c:'#9d174d'},University:{bg:'#dbeafe',c:'#1e40af'},Aided:{bg:'#d1fae5',c:'#065f46'}};
const SC = {Engineering:{bg:'#fee2e2',c:'#991b1b'},'Arts & Science':{bg:'#e0f2fe',c:'#0369a1'},Medical:{bg:'#d1fae5',c:'#065f46'},Law:{bg:'#fef9c3',c:'#713f12'},Pharmacy:{bg:'#f3e8ff',c:'#6b21a8'},Management:{bg:'#fff7ed',c:'#9a3412'},Nursing:{bg:'#fdf2f8',c:'#9d174d'},Agriculture:{bg:'#ecfdf5',c:'#15803d'}};
export default function CollegeCard({ college: c }) {
  const [modal, setModal] = useState(false);
  const fees = c.courses.map(x=>x.mq||x.gq).filter(Boolean);
  const minFee = fees.length ? Math.min(...fees) : null;
  const tb = TC[c.t]||{bg:'#f0f0f0',c:'#555'};
  const sb = SC[c.s]||{bg:'#f5f0e8',c:'#555'};
  return (
    <>
      <div onClick={()=>setModal(true)} style={{background:'#fff',borderRadius:14,border:'1px solid var(--border)',overflow:'hidden',cursor:'pointer',transition:'.22s',display:'flex',flexDirection:'column'}} onMouseOver={e=>{e.currentTarget.style.transform='translateY(-4px)';e.currentTarget.style.boxShadow='0 14px 44px rgba(0,0,0,.1)';e.currentTarget.style.borderColor='rgba(232,25,44,.22)';}} onMouseOut={e=>{e.currentTarget.style.transform='';e.currentTarget.style.boxShadow='';e.currentTarget.style.borderColor='var(--border)';}}>
        <div style={{height:150,position:'relative',overflow:'hidden',background:'#f0ede6'}}>
          {c.img ? <img src={c.img} alt={c.n} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/> : <div style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'3rem'}}>🏫</div>}
          <div style={{position:'absolute',top:'.55rem',left:'.55rem',display:'flex',gap:'.3rem',flexWrap:'wrap'}}>
            <span style={{padding:'.14rem .48rem',borderRadius:5,fontSize:'.62rem',fontWeight:800,textTransform:'uppercase',background:tb.bg,color:tb.c}}>{c.t}</span>
            <span style={{padding:'.14rem .48rem',borderRadius:5,fontSize:'.62rem',fontWeight:800,textTransform:'uppercase',background:sb.bg,color:sb.c}}>{c.s}</span>
          </div>
        </div>
        <div style={{padding:'.95rem 1.05rem .7rem',flex:1,display:'flex',flexDirection:'column'}}>
          <div style={{fontFamily:"'Playfair Display',serif",fontSize:'.93rem',fontWeight:700,lineHeight:1.35,marginBottom:'.32rem'}}>{c.n}</div>
          <div style={{fontSize:'.74rem',color:'var(--muted)',marginBottom:'.5rem'}}>📍 {c.d} · {c.a}</div>
          <div style={{display:'flex',flexWrap:'wrap',gap:'.28rem',marginTop:'auto',paddingTop:'.4rem'}}>
            {c.courses.slice(0,4).map(x=><span key={x.n} style={{padding:'.12rem .44rem',borderRadius:4,fontSize:'.65rem',background:'#f5f0e8',color:'#555',border:'1px solid #e0d8c8'}}>{x.n}</span>)}
            {c.courses.length>4 && <span style={{padding:'.12rem .44rem',borderRadius:4,fontSize:'.65rem',background:'rgba(59,130,246,.12)',color:'#1d4ed8',fontWeight:600,border:'1px solid #bfdbfe'}}>+{c.courses.length-4} more</span>}
          </div>
        </div>
        <div style={{padding:'.72rem 1.05rem',borderTop:'1px solid #f5f0e8',display:'flex',alignItems:'center',justifyContent:'space-between',background:'#fafaf6'}}>
          <div>
            <div style={{fontSize:'.67rem',color:'var(--muted)'}}>Fees from</div>
            <div style={{fontSize:'.88rem',fontWeight:800,color:minFee?'var(--red)':'var(--muted)'}}>{minFee?`₹${minFee.toLocaleString('en-IN')}/yr`:'Contact us'}</div>
          </div>
          <button style={{fontSize:'.75rem',fontWeight:700,color:'var(--red)',background:'none',border:'none',cursor:'pointer'}}>View →</button>
        </div>
      </div>
      {modal && <CollegeModal college={c} onClose={()=>setModal(false)}/>}
    </>
  );
}
