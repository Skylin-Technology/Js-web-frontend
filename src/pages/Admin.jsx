import { useState, useEffect } from 'react';
const API = 'http://localhost:4000';
const ADMIN_PASS = 'jseducation2025';

function Login({ onLogin }) {
  const [pass, setPass] = useState(''); const [err, setErr] = useState('');
  const submit = () => { if (pass === ADMIN_PASS) { onLogin(); localStorage.setItem('jsadmin','1'); } else setErr('Invalid password'); };
  return (
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0a1628,#1a237e)',display:'flex',alignItems:'center',justifyContent:'center',padding:'2rem'}}>
      <div style={{background:'#fff',borderRadius:20,padding:'2.5rem',width:'100%',maxWidth:420,boxShadow:'0 24px 64px rgba(0,0,0,.4)'}}>
        <div style={{textAlign:'center',marginBottom:'2rem'}}>
          <div style={{width:64,height:64,background:'linear-gradient(135deg,#e8192c,#1a237e)',borderRadius:16,display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontFamily:"'Playfair Display',serif",fontWeight:900,fontSize:'1.6rem',margin:'0 auto 1rem'}}>JS</div>
          <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'1.6rem',marginBottom:'.3rem'}}>Admin Login</h2>
          <p style={{color:'var(--muted)',fontSize:'.85rem'}}>JS Education Dashboard</p>
        </div>
        <div style={{marginBottom:'1rem'}}>
          <label style={{display:'block',fontSize:'.68rem',fontWeight:800,textTransform:'uppercase',letterSpacing:'.07em',color:'var(--muted)',marginBottom:'.3rem'}}>Password</label>
          <input type="password" value={pass} onChange={e=>setPass(e.target.value)} onKeyDown={e=>e.key==='Enter'&&submit()} placeholder="Enter admin password" style={{width:'100%',padding:'.6rem .82rem',border:'1.5px solid var(--border)',borderRadius:8,fontSize:'.9rem',outline:'none'}} onFocus={e=>e.target.style.borderColor='var(--red)'} onBlur={e=>e.target.style.borderColor='var(--border)'}/>
        </div>
        {err && <div style={{color:'var(--red)',fontSize:'.82rem',marginBottom:'.8rem',fontWeight:600}}>⚠️ {err}</div>}
        <button onClick={submit} style={{width:'100%',background:'var(--red)',color:'#fff',border:'none',borderRadius:8,padding:'.72rem',fontSize:'.9rem',fontWeight:700,cursor:'pointer'}}>🔐 Login to Dashboard</button>
        <p style={{textAlign:'center',fontSize:'.75rem',color:'var(--muted)',marginTop:'1rem'}}>Default password: jseducation2025</p>
      </div>
    </div>
  );
}

export default function Admin() {
  const [authed, setAuthed] = useState(localStorage.getItem('jsadmin')==='1');
  const [tab, setTab] = useState('enquiries');
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [stats, setStats] = useState({total:0,today:0,college:0,abroad:0,general:0});
  const [adding, setAdding] = useState(false);
  const [newCollege, setNewCollege] = useState({name:'',district:'',stream:'',type:'',affiliation:'',courses:''});
  const [saveOk, setSaveOk] = useState('');

  const loadEnquiries = async () => {
    setLoading(true);
    try {
      const r = await fetch(`${API}/api/enquiries`);
      const data = await r.json();
      setEnquiries(data.enquiries || []);
      const today = new Date().toDateString();
      setStats({
        total: data.enquiries.length,
        today: data.enquiries.filter(e=>new Date(e.created_at).toDateString()===today).length,
        college: data.enquiries.filter(e=>e.type==='college').length,
        abroad: data.enquiries.filter(e=>e.type==='abroad').length,
        general: data.enquiries.filter(e=>e.type==='general').length,
      });
    } catch(e) { setEnquiries([]); }
    setLoading(false);
  };

  useEffect(() => { if (authed) loadEnquiries(); }, [authed]);

  const deleteEnq = async (id) => {
    if (!confirm('Delete this enquiry?')) return;
    try { await fetch(`${API}/api/enquiries/${id}`,{method:'DELETE'}); loadEnquiries(); } catch(e){}
  };

  const markContacted = async (id) => {
    try { await fetch(`${API}/api/enquiries/${id}`,{method:'PATCH',headers:{'Content-Type':'application/json'},body:JSON.stringify({contacted:1})}); loadEnquiries(); } catch(e){}
  };

  const saveCollege = async () => {
    if (!newCollege.name || !newCollege.district) { setSaveOk('❌ Name and district required'); return; }
    try {
      await fetch(`${API}/api/colleges`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...newCollege,courses:newCollege.courses.split(',').map(c=>({n:c.trim(),mq:null,gq:null}))})});
      setSaveOk('✅ College added successfully!');
      setNewCollege({name:'',district:'',stream:'',type:'',affiliation:'',courses:''});
      setAdding(false);
    } catch(e){ setSaveOk('❌ Backend not running. College not saved.'); }
  };

  const filtered = enquiries.filter(e=>{
    const q=search.toLowerCase();
    if(q && !e.name?.toLowerCase().includes(q) && !e.phone?.includes(q) && !e.college?.toLowerCase().includes(q)) return false;
    if(typeFilter && e.type!==typeFilter) return false;
    return true;
  });

  if (!authed) return <Login onLogin={()=>setAuthed(true)}/>;

  const tabStyle = (t) => ({padding:'.55rem 1.2rem',borderRadius:8,fontWeight:700,fontSize:'.85rem',cursor:'pointer',border:'none',background:tab===t?'var(--red)':'transparent',color:tab===t?'#fff':'var(--muted)',transition:'.18s'});
  const inp = {width:'100%',padding:'.52rem .78rem',border:'1.5px solid var(--border)',borderRadius:7,fontSize:'.84rem',outline:'none',background:'#fff'};

  return (
    <div style={{minHeight:'100vh',background:'#f8f7f3'}}>
      {/* Header */}
      <div style={{background:'linear-gradient(135deg,#0a1628,#1a237e)',padding:'1.2rem 2rem',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:'1rem'}}>
        <div style={{display:'flex',alignItems:'center',gap:'1rem'}}>
          <div style={{width:44,height:44,background:'linear-gradient(135deg,#e8192c,#3b52b4)',borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontFamily:"'Playfair Display',serif",fontWeight:900,fontSize:'1.1rem'}}>JS</div>
          <div><div style={{color:'#fff',fontWeight:800,fontSize:'1rem'}}>JS Education Admin</div><div style={{color:'rgba(255,255,255,.5)',fontSize:'.75rem'}}>Management Dashboard</div></div>
        </div>
        <div style={{display:'flex',gap:'.7rem',alignItems:'center'}}>
          <button onClick={loadEnquiries} style={{background:'rgba(255,255,255,.1)',color:'#fff',border:'1px solid rgba(255,255,255,.2)',borderRadius:8,padding:'.42rem .9rem',fontSize:'.82rem',fontWeight:700,cursor:'pointer'}}>🔄 Refresh</button>
          <button onClick={()=>{localStorage.removeItem('jsadmin');setAuthed(false);}} style={{background:'rgba(232,25,44,.3)',color:'#fff',border:'1px solid rgba(232,25,44,.4)',borderRadius:8,padding:'.42rem .9rem',fontSize:'.82rem',fontWeight:700,cursor:'pointer'}}>🚪 Logout</button>
        </div>
      </div>

      <div style={{maxWidth:1400,margin:'0 auto',padding:'2rem'}}>
        {/* Stats */}
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))',gap:'1rem',marginBottom:'2rem'}}>
          {[['📋',stats.total,'Total Enquiries','#fee2e2','var(--red)'],['📅',stats.today,'Today','#dbeafe','#1e40af'],['🏫',stats.college,'College','#dcfce7','#14532d'],['✈️',stats.abroad,'Abroad','#fef3c7','#92400e'],['💬',stats.general,'General','#f3e8ff','#6b21a8']].map(([ico,n,l,bg,c])=>(
            <div key={l} style={{background:'#fff',borderRadius:14,padding:'1.2rem',border:'1px solid var(--border)',textAlign:'center'}}>
              <div style={{width:42,height:42,borderRadius:10,background:bg,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.2rem',margin:'0 auto .7rem'}}>{ico}</div>
              <div style={{fontFamily:"'Playfair Display',serif",fontSize:'2rem',fontWeight:900,color:c,lineHeight:1}}>{n}</div>
              <div style={{fontSize:'.7rem',textTransform:'uppercase',letterSpacing:'.07em',color:'var(--muted)',marginTop:'.3rem'}}>{l}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{background:'#fff',borderRadius:14,border:'1px solid var(--border)',overflow:'hidden'}}>
          <div style={{display:'flex',gap:'.4rem',padding:'.8rem 1rem',borderBottom:'1px solid var(--border)',background:'#fafaf6'}}>
            <button style={tabStyle('enquiries')} onClick={()=>setTab('enquiries')}>📋 Enquiries ({enquiries.length})</button>
            <button style={tabStyle('colleges')} onClick={()=>setTab('colleges')}>🏫 Add College</button>
            <button style={tabStyle('export')} onClick={()=>setTab('export')}>📊 Export Data</button>
          </div>

          <div style={{padding:'1.5rem'}}>
            {/* ENQUIRIES TAB */}
            {tab==='enquiries' && (
              <>
                <div style={{display:'flex',gap:'.8rem',marginBottom:'1.2rem',flexWrap:'wrap'}}>
                  <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search name, phone, college..." style={{flex:1,minWidth:200,padding:'.5rem .78rem',border:'1.5px solid var(--border)',borderRadius:7,fontSize:'.84rem',outline:'none'}} onFocus={e=>e.target.style.borderColor='var(--red)'} onBlur={e=>e.target.style.borderColor='var(--border)'}/>
                  <select value={typeFilter} onChange={e=>setTypeFilter(e.target.value)} style={{padding:'.5rem .78rem',border:'1.5px solid var(--border)',borderRadius:7,fontSize:'.84rem',outline:'none',background:'#fff',cursor:'pointer'}}>
                    <option value="">All Types</option>
                    <option value="college">🏫 College</option>
                    <option value="abroad">✈️ Abroad</option>
                    <option value="general">💬 General</option>
                  </select>
                  <button onClick={loadEnquiries} style={{background:'var(--red)',color:'#fff',border:'none',borderRadius:7,padding:'.5rem 1rem',fontWeight:700,cursor:'pointer',fontSize:'.84rem'}}>🔄 Reload</button>
                </div>
                {loading ? (
                  <div style={{textAlign:'center',padding:'3rem',color:'var(--muted)'}}>
                    <div style={{width:36,height:36,border:'3px solid #f0f0f0',borderTopColor:'var(--red)',borderRadius:'50%',animation:'spin 1s linear infinite',margin:'0 auto 1rem'}}></div>
                    Loading enquiries...
                  </div>
                ) : filtered.length===0 ? (
                  <div style={{textAlign:'center',padding:'3rem',color:'var(--muted)'}}>
                    <div style={{fontSize:'3rem',marginBottom:'1rem'}}>📭</div>
                    <p>{enquiries.length===0 ? 'No enquiries yet. They will appear here when students submit forms.' : 'No enquiries match your search.'}</p>
                  </div>
                ) : (
                  <div style={{overflowX:'auto'}}>
                    <table style={{width:'100%',borderCollapse:'collapse',fontSize:'.82rem'}}>
                      <thead>
                        <tr style={{background:'#f8f7f3'}}>
                          {['#','Name','Phone','College / Interest','Stream','Type','Date','Status','Actions'].map(h=>(
                            <th key={h} style={{padding:'.5rem .7rem',textAlign:'left',fontWeight:700,borderBottom:'1px solid var(--border)',whiteSpace:'nowrap',fontSize:'.75rem',textTransform:'uppercase',letterSpacing:'.05em',color:'var(--muted)'}}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {filtered.map((e,i)=>(
                          <tr key={e.id} style={{borderBottom:'1px solid #f5f0e8',background:e.contacted?'#f0fdf4':'#fff',transition:'.15s'}} onMouseOver={ev=>ev.currentTarget.style.background=e.contacted?'#dcfce7':'#fafaf6'} onMouseOut={ev=>ev.currentTarget.style.background=e.contacted?'#f0fdf4':'#fff'}>
                            <td style={{padding:'.45rem .7rem',color:'var(--muted)'}}>{i+1}</td>
                            <td style={{padding:'.45rem .7rem',fontWeight:700}}>{e.name}</td>
                            <td style={{padding:'.45rem .7rem'}}><a href={`tel:${e.phone}`} style={{color:'var(--red)',fontWeight:700}}>{e.phone}</a></td>
                            <td style={{padding:'.45rem .7rem',maxWidth:180,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{e.college||'—'}</td>
                            <td style={{padding:'.45rem .7rem'}}>{e.stream||'—'}</td>
                            <td style={{padding:'.45rem .7rem'}}>
                              <span style={{padding:'.14rem .45rem',borderRadius:5,fontSize:'.67rem',fontWeight:800,textTransform:'uppercase',background:e.type==='abroad'?'#fef3c7':e.type==='college'?'#dcfce7':'#f3e8ff',color:e.type==='abroad'?'#92400e':e.type==='college'?'#14532d':'#6b21a8'}}>{e.type}</span>
                            </td>
                            <td style={{padding:'.45rem .7rem',whiteSpace:'nowrap',color:'var(--muted)'}}>{e.created_at ? new Date(e.created_at).toLocaleDateString('en-IN') : '—'}</td>
                            <td style={{padding:'.45rem .7rem'}}>
                              {e.contacted ? <span style={{color:'#15803d',fontWeight:700,fontSize:'.75rem'}}>✅ Done</span> : <span style={{color:'#d97706',fontWeight:700,fontSize:'.75rem'}}>⏳ Pending</span>}
                            </td>
                            <td style={{padding:'.45rem .7rem'}}>
                              <div style={{display:'flex',gap:'.4rem'}}>
                                <a href={`https://wa.me/91${e.phone}?text=Hi%20${encodeURIComponent(e.name||'')}%2C%20this%20is%20JS%20Education%20team.%20Regarding%20your%20college%20enquiry%2C%20we%20would%20like%20to%20assist%20you.`} target="_blank" rel="noreferrer" style={{background:'#25D366',color:'#fff',padding:'.25rem .55rem',borderRadius:5,fontSize:'.7rem',fontWeight:700,textDecoration:'none'}}>💬</a>
                                {!e.contacted && <button onClick={()=>markContacted(e.id)} style={{background:'#dbeafe',color:'#1d4ed8',border:'none',padding:'.25rem .55rem',borderRadius:5,fontSize:'.7rem',fontWeight:700,cursor:'pointer'}}>✓</button>}
                                <button onClick={()=>deleteEnq(e.id)} style={{background:'#fee2e2',color:'var(--red)',border:'none',padding:'.25rem .55rem',borderRadius:5,fontSize:'.7rem',fontWeight:700,cursor:'pointer'}}>🗑</button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </>
            )}

            {/* ADD COLLEGE TAB */}
            {tab==='colleges' && (
              <div style={{maxWidth:680}}>
                <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:'1.3rem',marginBottom:'.5rem'}}>Add New College</h3>
                <p style={{color:'var(--muted)',fontSize:'.85rem',marginBottom:'1.5rem',lineHeight:1.6}}>Add a new college to the database. It will appear immediately in the Browse Colleges page.</p>
                {saveOk && <div style={{padding:'.8rem',borderRadius:8,marginBottom:'1rem',background:saveOk.startsWith('✅')?'#dcfce7':'#fee2e2',color:saveOk.startsWith('✅')?'#166534':'var(--red)',fontWeight:700,fontSize:'.85rem'}}>{saveOk}</div>}
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem',marginBottom:'1rem'}} className="add-grid">
                  {[['College Name *','name','text','e.g. Mahendra Engineering College'],['District *','district','text','e.g. NAMAKKAL'],['Stream','stream','text','e.g. Engineering'],['College Type','type','text','e.g. Autonomous'],['Affiliation','affiliation','text','e.g. Anna University']].map(([l,k,t,p])=>(
                    <div key={k}><label style={{display:'block',fontSize:'.68rem',fontWeight:800,textTransform:'uppercase',letterSpacing:'.07em',color:'var(--muted)',marginBottom:'.28rem'}}>{l}</label><input type={t} placeholder={p} value={newCollege[k]} onChange={e=>setNewCollege(c=>({...c,[k]:e.target.value}))} style={inp} onFocus={e=>e.target.style.borderColor='var(--red)'} onBlur={e=>e.target.style.borderColor='var(--border)'}/></div>
                  ))}
                </div>
                <div style={{marginBottom:'1.2rem'}}>
                  <label style={{display:'block',fontSize:'.68rem',fontWeight:800,textTransform:'uppercase',letterSpacing:'.07em',color:'var(--muted)',marginBottom:'.28rem'}}>Courses (comma separated)</label>
                  <textarea value={newCollege.courses} onChange={e=>setNewCollege(c=>({...c,courses:e.target.value}))} placeholder="CSE, IT, ECE, EEE, MECHANICAL, CIVIL, AI&DS" style={{...inp,resize:'vertical'}} rows={2} onFocus={e=>e.target.style.borderColor='var(--red)'} onBlur={e=>e.target.style.borderColor='var(--border)'}/>
                </div>
                <button onClick={saveCollege} style={{background:'var(--red)',color:'#fff',border:'none',borderRadius:8,padding:'.68rem 1.6rem',fontSize:'.9rem',fontWeight:700,cursor:'pointer'}}>➕ Add College to Database</button>
                <style>{`@media(max-width:500px){.add-grid{grid-template-columns:1fr!important}}`}</style>
              </div>
            )}

            {/* EXPORT TAB */}
            {tab==='export' && (
              <div style={{maxWidth:500}}>
                <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:'1.3rem',marginBottom:'.5rem'}}>Export Data</h3>
                <p style={{color:'var(--muted)',fontSize:'.85rem',marginBottom:'1.5rem',lineHeight:1.6}}>Download enquiry data for follow-up or record-keeping.</p>
                <button onClick={()=>{
                  const csv = ['Name,Phone,College,Stream,Type,Date,Contacted',
                    ...enquiries.map(e=>`${e.name},${e.phone},${e.college||''},${e.stream||''},${e.type},${e.created_at?new Date(e.created_at).toLocaleDateString('en-IN'):''},${e.contacted?'Yes':'No'}`)
                  ].join('\n');
                  const b = new Blob([csv],{type:'text/csv'});
                  const a = document.createElement('a'); a.href=URL.createObjectURL(b); a.download='js-education-enquiries.csv'; a.click();
                }} style={{background:'var(--red)',color:'#fff',border:'none',borderRadius:8,padding:'.68rem 1.6rem',fontSize:'.9rem',fontWeight:700,cursor:'pointer',marginBottom:'1rem',display:'block',width:'fit-content'}}>⬇️ Download Enquiries CSV</button>
                <div style={{background:'#f8f7f3',borderRadius:12,padding:'1rem',fontSize:'.83rem',color:'var(--muted)',lineHeight:1.7}}>
                  <strong style={{color:'var(--ink)'}}>📊 Current Data:</strong><br/>
                  • Total enquiries: {stats.total}<br/>
                  • Today's enquiries: {stats.today}<br/>
                  • College enquiries: {stats.college}<br/>
                  • Abroad enquiries: {stats.abroad}<br/>
                  • Pending follow-ups: {enquiries.filter(e=>!e.contacted).length}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}
