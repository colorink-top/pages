const headerEl=document.querySelector(".header"),bodyEl=document.querySelector(".body"),footerEl=document.querySelector(".footer");window.joppInit=async function(e){const{templateInfo:t,documentInfo:o,pdfInfo:r}=e;document.body.style.display="block";const d=new Date;switch(t.region){case"header":{bodyEl.classList.add("hide"),footerEl.classList.add("hide");const e=headerEl.querySelector(".page-link");e.innerText=o.hostname.toUpperCase(),e.href=o.url;break}case"footer":{headerEl.classList.add("hide"),bodyEl.classList.add("hide");const e=document.querySelector(".footer time");e.setAttribute("datetime",d.toISOString()),e.innerText=d.toLocaleString();const t=footerEl.querySelector(".jopp-footer-title>a");t.href=o.url,t.innerText=o.title;break}}};