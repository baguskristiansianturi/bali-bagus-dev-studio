/* BB Studio — discovery shell inspired by modern marketplace/travel UX.
   Original BB Studio implementation. */
(()=>{const run=()=>{
 const h=document.querySelector(".site-header");if(!h)return;
 const path=location.pathname,base=(path.includes("/landing/")||path.includes("/website-category/"))?"../":"";
 const logged=!!(()=>{try{return JSON.parse(localStorage.getItem("bb_account"))}catch{return null}})();
 h.className="site-header bb-discovery-header";
 h.innerHTML=`<div class="bb-utility"><div class="bb-header-inner"><span>Digital Product + Digital Service Studio</span><div><a href="${base}articles.html">Blog</a><a href="${base}help.html">Bantuan</a><a href="${base}compare.html">Baru dilihat</a><a href="${base}account.html">Mendaftar</a><a href="${base}account.html">${logged?"Akun":"Masuk"}</a></div></div></div>
 <div class="bb-main-header"><div class="bb-header-inner"><a class="brand" href="${base}index.html" aria-label="Bali Bagus Dev Studio"><span class="brand-mark">BB</span><span>BALI BAGUS<small>DEV STUDIO</small></span></a><form class="bb-site-search" action="${base}products.html"><input name="q" type="search" placeholder="Cari template, website, layanan, atau insight..." aria-label="Cari"><button>⌕</button></form><div class="bb-main-actions"><a href="${base}cart.html">Keranjang <b id="bbHeaderCart">0</b></a><a class="bb-start" href="${base}booking.html">Mulai proyek ↗</a></div><button class="bb-menu" type="button" aria-label="Buka menu" aria-expanded="false">☰</button></div></div>
 <div class="bb-category-bar"><div class="bb-header-inner"><nav><a href="${base}services.html">Solusi</a><a href="${base}products.html">Template & Produk</a><a href="${base}website-collection.html">Website by Industry</a><a href="${base}portfolio.html">Work & Preview</a><a href="${base}articles.html">Insights</a><a href="${base}about.html">BB Studio</a></nav><a class="bb-consult" href="${base}booking.html">Konsultasi 60 menit ↗</a></div></div>
 <div class="bb-mobile-menu"><form action="${base}products.html"><input name="q" type="search" placeholder="Cari di BB Studio"><button>Cari</button></form><a href="${base}services.html">Solusi</a><a href="${base}products.html">Template & Produk</a><a href="${base}website-collection.html">Website by Industry</a><a href="${base}portfolio.html">Work & Preview</a><a href="${base}articles.html">Insights</a><a href="${base}about.html">BB Studio</a><a href="${base}help.html">Bantuan</a><a href="${base}cart.html">Keranjang</a><a class="bb-mobile-start" href="${base}booking.html">Mulai proyek ↗</a></div>`;
 const count=()=>{try{const c=JSON.parse(localStorage.getItem("bb_cart"))||[];const n=c.reduce((a,x)=>a+(Number(x.qty)||1),0);const e=document.querySelector("#bbHeaderCart");if(e)e.textContent=n}catch{}};
 count(); setInterval(count,800);
 const b=h.querySelector(".bb-menu"),m=h.querySelector(".bb-mobile-menu");b?.addEventListener("click",()=>{const open=m.classList.toggle("open");b.setAttribute("aria-expanded",String(open));b.textContent=open?"×":"☰"});
};
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",run);else run();
})();