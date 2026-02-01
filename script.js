document.addEventListener('DOMContentLoaded',()=>{
  // ナビ切替（モバイル）
  const navToggle=document.getElementById('navToggle');
  const nav=document.getElementById('nav');
  navToggle&&navToggle.addEventListener('click',()=>{
    if(!nav) return;
    nav.style.display = (getComputedStyle(nav).display === 'none') ? 'flex' : 'none';
  });

  // スムーススクロール（アンカー）
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const href=a.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        const el=document.querySelector(href);
        if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });

  // フォーム（ダミー）
  const form=document.getElementById('contactForm');
  const msg=document.getElementById('formMsg');
  if(form){
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const data=new FormData(form);
      const name=(data.get('name')||'').toString().trim();
      const email=(data.get('email')||'').toString().trim();
      const message=(data.get('message')||'').toString().trim();
      if(!name||!email||!message){
        msg.textContent='全ての項目を入力してください。';
        return;
      }
      msg.textContent='送信しました（ダミー処理）。ありがとうございます！';
      form.reset();
    });
  }
});

