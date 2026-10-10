const reels = [
 {title:'Podify Promo', desc:'Promotional edit with bold pacing, a warm grade, and energetic visual storytelling.', img:'https://res.cloudinary.com/josvsdup/video/upload/v1784728255/uc_s2o4sz.jpg', video:'https://res.cloudinary.com/josvsdup/video/upload/v1784728255/uc_s2o4sz.mp4'},
 {title:'Twin Story', desc:'A storytelling episode built around archival imagery, atmosphere, and carefully paced reveals.', img:'https://res.cloudinary.com/josvsdup/video/upload/v1784728209/uc_dkpvie.jpg', video:'https://res.cloudinary.com/josvsdup/video/upload/v1784728209/uc_dkpvie.mp4'},
 {title:'Maximum Gym', desc:'A fitness edit focused on movement, strength, and cinematic rhythm.', img:'https://res.cloudinary.com/josvsdup/video/upload/v1784831241/uc_wqzpom.jpg', video:'https://res.cloudinary.com/josvsdup/video/upload/v1784831241/uc_wqzpom.mp4'},
 {title:'Trailer final', desc:'A short-form cinematic cut with a deliberate pace and bold visual transitions.', img:'https://res.cloudinary.com/josvsdup/video/upload/v1784831365/uc_yn8rov.jpg', video:'https://res.cloudinary.com/josvsdup/video/upload/v1784831365/uc_yn8rov.mp4'},
 {title:'Bar warriors', desc:'A high-energy street-workout edit shaped around motion and impact.', img:'https://res.cloudinary.com/josvsdup/video/upload/v1784831462/uc_ph3nh5.jpg', video:'https://res.cloudinary.com/josvsdup/video/upload/v1784831462/uc_ph3nh5.mp4'},
 {title:'Signature Cut', desc:'A vertical showcase reel with a cinematic finish and rhythmic editing.', img:'https://res.cloudinary.com/josvsdup/video/upload/v1784821666/uc_khbjvo.jpg', video:'https://res.cloudinary.com/josvsdup/video/upload/v1784821666/uc_khbjvo.mp4'},
 {title:'Mona', desc:'A cinematic portrait edit with intimate framing and measured pacing.', img:'https://res.cloudinary.com/josvsdup/video/upload/v1784823756/uc_yrxobs.jpg', video:'https://res.cloudinary.com/josvsdup/video/upload/v1784823756/uc_yrxobs.mp4'},
 {title:'Red Carpet', desc:'A polished interview edit designed to keep the focus on the story and the speaker.', img:'https://res.cloudinary.com/josvsdup/video/upload/v1784823725/uc_luqgjf.jpg', video:'https://res.cloudinary.com/josvsdup/video/upload/v1784823725/uc_luqgjf.mp4'},
 {title:'Awel marra', desc:'A heartfelt story shaped with natural moments, smooth pacing, and a cinematic finish.', img:'https://res.cloudinary.com/josvsdup/video/upload/v1784824253/uc_myxo3m.jpg', video:'https://res.cloudinary.com/josvsdup/video/upload/v1784824253/uc_myxo3m.mp4', link:'https://drive.google.com/file/d/16EtyOeTMpnoOaIQMu95CsTS6q6GSg2pl/view?usp=sharing'}
];
const reelGrid = document.querySelector('#reelGrid');
reels.forEach((reel, i) => {
 const card = document.createElement('article'); card.className = 'reel-card reveal'; card.tabIndex = 0; card.setAttribute('role','button'); card.setAttribute('aria-label',`Play ${reel.title}`);
 card.innerHTML = `<div class="reel-cover"><img loading="lazy" src="${reel.img}" alt="${reel.title} reel cover"><span class="reel-label">Reel ${String(i+1).padStart(2,'0')}</span><span class="reel-play">▶</span></div><h3>${reel.title}</h3><p>${reel.desc}</p><span class="tap-play">▷ Tap to watch</span>`;
 const open = () => showReel(i); card.addEventListener('click',open); card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open();}}); reelGrid.appendChild(card);
});
const modal = document.querySelector('#reelModal');
const modalVideo = document.querySelector('#modalVideo');
function showReel(i){
 const reel=reels[i];
 document.querySelector('#modalEyebrow').textContent=`REEL ${String(i+1).padStart(2,'0')}`;
 document.querySelector('#modalTitle').textContent=reel.title;
 document.querySelector('#modalDescription').textContent=reel.desc;
 modalVideo.poster=reel.img; modalVideo.src=reel.video; modalVideo.load();
 const external=document.querySelector('#modalExternal');
 if(reel.link){external.href=reel.link;external.hidden=false;}else{external.hidden=true;external.removeAttribute('href');}
 modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
 modalVideo.play().catch(()=>{});document.querySelector('.modal-close').focus();
}
function closeReel(){modalVideo.pause();modalVideo.removeAttribute('src');modalVideo.load();modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';document.querySelector('#reelGrid .reel-card')?.focus();}
document.querySelector('.modal-close').addEventListener('click',closeReel);modal.addEventListener('click',e=>{if(e.target===modal)closeReel();});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeReel();});
const toggle=document.querySelector('.menu-toggle'), menu=document.querySelector('.menu');toggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.12});document.querySelectorAll('.section-heading,.discipline-card,.client-row,.reel-card,.project-tile,.about-copy,.contact-links').forEach(el=>{el.classList.add('reveal');observer.observe(el);});
const glow=document.querySelector('.cursor-glow');window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';},{passive:true});
function updateClock(){const d=new Date();document.querySelector('#localTime').textContent=new Intl.DateTimeFormat('en-GB',{timeZone:'Africa/Cairo',hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}).format(d);}updateClock();setInterval(updateClock,1000);
// HTMX is loaded for progressive enhancement; the portfolio remains static-first and works without a backend.


// Scroll progress indicator, works without any framework.
const progressBar = document.querySelector('#pageProgressBar');
function updatePageProgress(){
 if(!progressBar) return;
 const max=document.documentElement.scrollHeight-window.innerHeight;
 const pct=max>0 ? (window.scrollY/max)*100 : 0;
 progressBar.style.width=Math.min(100,Math.max(0,pct))+'%';
}
window.addEventListener('scroll',updatePageProgress,{passive:true});window.addEventListener('resize',updatePageProgress);updatePageProgress();
// Animate the image reveal only after images load; failed remote images stay hidden instead of broken.
document.querySelectorAll('img').forEach(img=>{
 img.addEventListener('error',()=>{img.classList.add('image-unavailable'); if(img.classList.contains('discipline-photo')||img.classList.contains('tile-photo')) img.style.display='none';},{once:true});
});
