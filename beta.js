// Beta bar on every demo screen: says it's a demo and offers to join the beta (English or Spanish by page language).
(function(){
  var es=(document.documentElement.lang||'').toLowerCase().indexOf('es')===0;
  var subj=es?'Unirme a la beta de Streamlined':'Join the Streamlined beta';
  var body=es?'Iglesia:\nSu función:\nNúmero de campus:\n¿Qué le gustaría que Streamlined resuelva primero?\n':'Church:\nYour role:\nNumber of campuses:\nWhat would you love Streamlined to fix first?\n';
  var href='mailto:hello@parkermanuel.com?subject='+encodeURIComponent(subj)+'&body='+encodeURIComponent(body);
  function add(){
    if(!document.body||document.getElementById('beta-bar'))return;
    var b=document.createElement('div');b.id='beta-bar';b.setAttribute('role','note');
    b.style.cssText='display:flex;align-items:center;justify-content:center;gap:10px;flex-wrap:wrap;padding:9px 16px;padding-top:calc(9px + env(safe-area-inset-top,0px));background:#2E55E6;color:#FFFFFF;font:600 13px/1.3 Inter,system-ui,sans-serif;text-align:center;position:relative;z-index:50';
    b.innerHTML='<span>'+(es?'Está probando la demostración':'You\u2019re trying the demo')+'</span><a href="'+href+'" style="color:#FFFFFF;font-weight:800;text-decoration:underline;text-underline-offset:3px">'+(es?'Únase a la beta':'Join the beta')+'</a>';
    document.body.insertBefore(b,document.body.firstChild);
  }
  function watch(){add();new MutationObserver(add).observe(document.body,{childList:true});}
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',watch);}else{watch();}
})();
