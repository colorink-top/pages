const initRulerFn=()=>{let e=0,t=[];const i=document.querySelector(".top-ruler"),n=document.querySelector(".bottom-ruler"),o=document.querySelector(".left-ruler"),r=document.querySelector(".right-ruler"),l=i.scrollWidth;for(;e<=l;)e%50==0?t.push(`<div class="tick tick-label" style="left: ${e}px;">${e}</div>`):e%10==0?t.push(`<div class="tick tick-major" style="left: ${e}px;"></div>`):e%5==0&&t.push(`<div class="tick tick-minor" style="left: ${e}px;"></div>`),e+=5;for(i.innerHTML=t.join(""),n.innerHTML=t.join(""),t.length=0,e=0;e<=o.scrollHeight;)e%50==0?t.push(`<div class="tick tick-label" style="top: ${e}px;">${e}</div>`):e%10==0?t.push(`<div class="tick tick-major" style="top: ${e}px;"></div>`):e%5==0&&t.push(`<div class="tick tick-minor" style="top: ${e}px;"></div>`),e+=5;o.innerHTML=t.join(""),r.innerHTML=t.join("")};initRulerFn(),window.onresize=initRulerFn,window.initRulerFn=initRulerFn,window.joppInit=e=>{window.onresize=null;const{pdfInfo:t}=e;return document.querySelector(".ruler-container").remove(),new Promise(((e,i)=>{const n=document.createElement("iframe");n.style.width=t.width+"px",n.style.height=t.height+"px",n.src=document.location.href,document.body.append(n),n.onload=()=>{const t=n.contentWindow;n.contentDocument;t.initRulerFn(),e()}}))};