// Live approval card: walks a request through each approval step, then the next request. Shared by demo screens.
(function(){var D={"roles": [["Campus Pastor", "Request submitted", "Submitting…"], ["Comms", "Copy approved", "Checking copy…"], ["Creative", "Design approved, on-brand", "Checking brand…"], ["Delivered", "Out everywhere", "Sending out…"]], "reqs": [["Fall Fest door hangers", "North Campus · 500 copies", "#1C2B4A", "#E8674A", ["🖨 Printed", "📱 Instagram", "🌐 Website"]], ["Easter invite video", "South Campus · 30 seconds", "#2B1C4A", "#F2B84B", ["⛪ Sunday slides", "📱 Social", "✉️ Email"]], ["Baptism Sunday stories", "Downtown · Social", "#123A3A", "#7C9BFF", ["📱 Instagram", "👍 Facebook", "🌐 Website"]]]};
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
function go(){var pipe=document.querySelector('.pipe');if(!pipe){return setTimeout(go,100);}
 var sts=pipe.querySelectorAll('.st'),fill=pipe.querySelector('.rail i'),outs=pipe.querySelector('.outs'),th=pipe.querySelector('.thumb'),tb=pipe.querySelector('.pt b'),ts=pipe.querySelector('.pt span'),ri=0,timers=[];
 function at(ms,fn){timers.push(setTimeout(fn,ms));}
 function run(){timers.forEach(clearTimeout);timers=[];var r=D.reqs[ri];
  tb.style.opacity=ts.style.opacity=0;
  at(600,function(){tb.textContent=r[0];ts.textContent=r[1];th.style.background=r[2];th.style.borderTopColor=r[3];tb.style.opacity=ts.style.opacity=1;});
  var box=fill.parentNode.parentNode;box.style.transition='opacity .5s ease';box.style.opacity=0;outs.style.transition='opacity .5s ease';outs.style.opacity=0;
  at(550,function(){sts.forEach(function(el,i){el.className='st';el.querySelector('small').textContent=D.roles[i][2];});
   fill.style.height='0';outs.innerHTML='';
   r[4].forEach(function(o){var c=document.createElement('span');c.className='out';c.textContent=o;outs.appendChild(c);});box.style.opacity=1;outs.style.opacity=1;});
  var t=1200;
  sts.forEach(function(el,i){
   at(t,function(){el.classList.add('act');});
   t+=1500;
   at(t,function(){var sm=el.querySelector('small');sm.style.opacity=0;el.classList.remove('act');el.classList.add('ok');if(i===3)el.classList.add('fin');fill.style.height=(i/3*100)+'%';setTimeout(function(){sm.textContent=D.roles[i][1];sm.style.opacity=1;},350);});
   t+=400;});
  r[4].forEach(function(o,k){at(t+k*350,function(){var c=outs.children[k];if(c)c.classList.add('on');});});
  at(t+4500,function(){ri=(ri+1)%D.reqs.length;run();});}
 if(!reduce){setTimeout(run,700);}
 document.addEventListener('visibilitychange',function(){if(document.hidden){timers.forEach(clearTimeout);}else if(!reduce){run();}});}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',go);}else{go();}})();
