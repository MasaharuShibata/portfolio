document.addEventListener('DOMContentLoaded',()=>{
  const form=document.getElementById('contactForm');
  const msg=document.getElementById('formMsg');
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const data=new FormData(form);
    const name=data.get('name').trim();
    const email=data.get('email').trim();
    const message=data.get('message').trim();
    if(!name||!email||!message){
      msg.textContent='全ての項目を入力してください。';
      msg.className='';
      return;
    }
    msg.textContent='送信しました（ダミー処理）。ありがとうございます！';
    msg.className='';
    form.reset();
    setTimeout(()=>{msg.className='sr-only';},4000);
  });
});
