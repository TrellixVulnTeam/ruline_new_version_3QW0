(()=>{const e=document.querySelectorAll(".slide"),t=e.length,o=document.querySelector(".next"),c=document.querySelector(".previous");let n=0;console.log(e,o,c),o.addEventListener("click",(function(){e[n].classList.remove("active"),n<t-1?n++:n=0,e[n].classList.add("active"),console.log(n)})),c.addEventListener("click",(function(){e[n].classList.remove("active"),n>0?n--:n=t-1,e[n].classList.add("active"),console.log(n)})),document.querySelector(".toggle-icon-container").addEventListener("click",(()=>{console.log("radi"),document.querySelector(".nav-menu").style.display="flex"})),document.querySelector(".clear-span").addEventListener("click",(()=>{document.querySelector(".nav-menu").style.display="none"})),document.querySelector(".seeMoreButton").addEventListener("click",(()=>{document.querySelector(".more").style.display="block",document.querySelector(".dots").style.display="none",document.querySelector(".seeMoreButton").style.display="none"}))})();