(()=>{"use strict";let e=document.getElementsByClassName("projectDiv")[0],t=document.getElementsByClassName("rightside-header-title")[0],n=!1;const l=(e,l)=>{l.target.setAttribute("class","active"),t.innerText=e.title,n=!0},s=[];function c(e){this.title=e}function i(e,t){this.title=e,this.description=t}let o=document.getElementById("projectBtn"),a=document.getElementById("projectSubmitBtn"),d=document.getElementById("taskBtn"),m=document.getElementById("taskSubmitBtn");o.addEventListener("click",(()=>{document.querySelector("#projectModal").showModal()})),a.addEventListener("click",(()=>{(()=>{let e=document.getElementById("projectName"),t={title:new c(e.value).title,element:"",tasks:[{"Default Task":"Just an example"}]};s.push(t),e.value=""})(),(t=>{e.innerText="";for(let s=0;s<t.length;s++){const c=t[s],i=document.createElement("div");i.setAttribute("id",s),i.innerText=c.title,c.element=i,e.appendChild(i),i.addEventListener("click",(e=>{1==n&&document.getElementsByClassName("active")[0].removeAttribute("class"),l(c,e)}))}})(s)})),d.addEventListener("click",(()=>{document.querySelector("#taskModal").showModal()})),m.addEventListener("click",(()=>{(()=>{let e,t=document.getElementById("taskName"),n=document.getElementById("taskDescription"),l=new i(t.value,n.value);console.log(l);for(let t=0;t<s.length;t++)e=s.find((e=>"active"==e.element.className)),console.log(e);e.tasks.push(l),console.log(s)})()}))})();