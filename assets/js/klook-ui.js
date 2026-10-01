/* BB Studio discovery shell — marketplace-inspired, original implementation. */
(function(){
"use strict";
if(window.__BB_DISCOVERY_UI__)return;
window.__BB_DISCOVERY_UI__=true;
function run(){
 var header=document.querySelector(".site-header");
 if(!header)return;
 var path=location.pathname;
 var isHome=/(\/index\.html)?\/$/.test(path) || /\/index\.html$/.test(path);
 var base=(path.indexOf("/landing/")>-1 || path.indexOf("/website-category/")>-1)?"../":"";
 var logged=false;
 try{logged=!!JSON.parse(localStorage.getItem("bb_account"));}catch(e){logged=false;}

 if(!isHome){
  header.className="site-header bb-discovery-header";
  header.innerHTML='<div class="bb-utility"><div class="bb-header-inner"><span>Digital Product + Digital Service Studio</span><div><a href="'+base+'articles.html">Blog</a><a href="'+base+'help.html">Bantuan</a><a href="'+base+'compare.html">Baru dilihat</a><a href="'+base+'account.html">Mendaftar</a><a href="'+base+'account.html">'+(logged?"Akun":"Masuk")+'</a></div></div></div>'+
  '<div class="bb-main-header"><div class="bb-header-inner"><a class="brand" href="'+base+'index.html" aria-label="Bali Bagus Dev Studio"><span class="brand-mark">BB</span><span>BALI BAGUS<small>DEV STUDIO</small></span></a><form class="bb-site-search" action="'+base+'products.html"><input name="q" type="search" placeholder="Cari template, website, layanan, atau insight..." aria-label="Cari"><button aria-label="Cari">⌕</button></form><div class="bb-main-actions"><a href="'+base+'cart.html">Keranjang <b id="bbHeaderCart">0</b></a><a class="bb-start" href="'+base+'booking.html">Mulai proyek ↗</a></div><button class="bb-menu" type="button" aria-label="Buka menu" aria-expanded="false">☰</button></div></div>'+
  '<div class="bb-category-bar"><div class="bb-header-inner"><nav><a href="'+base+'services.html">Solusi</a><a href="'+base+'products.html">Template & Produk</a><a href="'+base+'website-collection.html">Website by Industry</a><a href="'+base+'portfolio.html">Work & Preview</a><a href="'+base+'articles.html">Insights</a><a href="'+base+'about.html">BB Studio</a></nav><a class="bb-consult" href="'+base+'booking.html">Konsultasi 60 menit ↗</a></div></div>'+
  '<div class="bb-mobile-menu"><form action="'+base+'products.html"><input name="q" type="search" placeholder="Cari di BB Studio"><button type="submit">Cari</button></form><a href="'+base+'services.html">Solusi</a><a href="'+base+'products.html">Template & Produk</a><a href="'+base+'website-collection.html">Website by Industry</a><a href="'+base+'portfolio.html">Work & Preview</a><a href="'+base+'articles.html">Insights</a><a href="'+base+'about.html">BB Studio</a><a href="'+base+'help.html">Bantuan</a><a href="'+base+'cart.html">Keranjang</a><a class="bb-mobile-start" href="'+base+'booking.html">Mulai proyek ↗</a></div>';
 }

 function updateCart(){
  var n=0;
  try{var cart=JSON.parse(localStorage.getItem("bb_cart"))||[];cart.forEach(function(x){n+=Number(x.qty)||1;});}catch(e){}
  var badge=document.getElementById("bbHeaderCart");if(badge)badge.textContent=n;
 }
 updateCart();window.setInterval(updateCart,1000);

 var heroMap={
  "about":["ABOUT","Studio digital dari Bali untuk bisnis yang ingin tumbuh.","https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=82"],
  "services":["SOLUTIONS","Pilih kapabilitas berdasarkan kebutuhan bisnis Anda.","https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=82"],
  "products":["DIGITAL STORE","Fondasi digital yang siap digunakan, dipilih, lalu dikembangkan.","https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1800&q=82"],
  "articles":["INSIGHTS","Insight praktis untuk keputusan digital yang lebih baik.","https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1800&q=82"],
  "faq":["FAQ","Jawaban yang jelas sebelum Anda mulai.","https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1800&q=82"],
  "help":["HELP CENTER","Cari jawaban, pilih topik, lalu lanjutkan jika perlu.","https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=82"],
  "contact":["CONTACT","Satu percakapan untuk menentukan langkah berikutnya.","https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=82"],
  "booking":["START A PROJECT","Mulai dari kebutuhan, bukan asumsi.","https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1800&q=82"],
  "portfolio":["WORK","Lihat arah visual dan kemungkinan pengembangan.","https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=82"],
  "website-collection":["WEBSITE COLLECTION","Temukan fondasi website berdasarkan industri dan kebutuhan.","https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=82"],
  "website-packages":["WEBSITE PACKAGES","Pilih level pengembangan yang sesuai tahap bisnis.","https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=82"],
  "website-order":["WEBSITE ORDER","Lanjutkan pilihan Anda menjadi project yang jelas.","https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=82"],
  "article-detail":["INSIGHTS / FEATURE","Website yang bekerja dimulai dari tujuan bisnis, bukan sekadar tampilan.","https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1800&q=82"],
  "article-conversion":["INSIGHTS / CONVERSION","Perbaiki perjalanan pengguna sebelum menambah traffic.","https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=82"],
  "article-copywriting":["INSIGHTS / COPYWRITING","Copy yang jelas membantu orang memahami nilai sebuah produk.","https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1800&q=82"],
  "article-seo":["INSIGHTS / SEO","Bangun visibilitas organik dari fondasi yang benar.","https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1800&q=82"],
  "article-social-vs-website":["INSIGHTS / STRATEGY","Social media dan website punya peran berbeda dalam sistem digital.","https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=82"],
  "account":["ACCOUNT","Kelola pilihan, pesanan, dan kebutuhan digital Anda dalam satu tempat.","https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=82"],
  "client-websites":["CLIENT WORK","Karya yang dipublikasikan dengan persetujuan pemilik.","https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=82"],
  "compare":["WISHLIST","Simpan pilihan menarik dan bandingkan saat Anda siap.","https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1800&q=82"],
  "terms":["LEGAL","Ketentuan penggunaan layanan dan produk Bali Bagus Dev.","https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1800&q=82"],
  "privacy":["LEGAL","Cara kami menjelaskan penggunaan data dan privasi pengguna.","https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1800&q=82"],
  "refund":["LEGAL","Ketentuan pengembalian dana untuk produk dan layanan.","https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1800&q=82"],
  "404":["404","Halaman ini tidak tersedia, tetapi Anda tetap bisa melanjutkan eksplorasi.","https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1800&q=82"]
 };

 var filename=path.toLowerCase().replace(/\/$/,"").split("/").pop().replace(/\.html$/,"");
 var key=heroMap[filename]?filename:null;
 if(!key && path.indexOf("/website-category/")>-1)key="website-collection";
 var main=document.querySelector("main.page-main");

 if(key && main && !main.querySelector(".bb-page-hero") && !document.querySelector(".hero-grid")){
  var cfg=heroMap[key];
  var frame=main.querySelector(":scope > .page-title-frame");
  var scope=frame||main;
  var children=Array.prototype.slice.call(scope.children);
  var eyebrow=children.find(function(x){return x.classList.contains("eyebrow");});
  var title=children.find(function(x){return x.tagName==="H1";});
  var lead=children.find(function(x){return x.classList.contains("lead");});
  if(eyebrow && title){
   var hero=document.createElement("section");
   hero.className="bb-page-hero";
   hero.style.setProperty("--bb-hero-image",'url("'+cfg[2]+'")');
   hero.innerHTML='<div class="bb-page-hero-inner"><div class="bb-hero-copy"><span class="bb-hero-kicker">'+cfg[0]+'</span><h1></h1><p class="bb-hero-lead"></p></div></div>';
   hero.querySelector("h1").innerHTML=title.innerHTML;
   hero.querySelector("p").innerHTML=lead?lead.innerHTML:cfg[1];
   if(eyebrow.parentNode)eyebrow.parentNode.removeChild(eyebrow);
   if(title.parentNode)title.parentNode.removeChild(title);
   if(lead && lead.parentNode)lead.parentNode.removeChild(lead);
   if(frame && frame.parentNode)frame.parentNode.removeChild(frame);
   main.insertBefore(hero,main.firstChild);
  }
 }

 if(path.toLowerCase().endsWith("help.html")){
  var help=document.querySelector("main.help-page");
  if(help && !help.querySelector(".bb-help-discovery")){
   var box=document.createElement("section");
   box.className="bb-help-discovery";
   box.innerHTML='<div><span>HELP CENTER</span><h2>Bagaimana kami bisa membantu?</h2><p>Cari jawaban tentang produk, website, pembayaran, pesanan, dan proses proyek.</p></div><form><input type="search" placeholder="Cari pertanyaan atau topik..." aria-label="Cari bantuan"><button type="submit">Cari</button></form><div class="bb-help-topics"><a href="faq.html">Produk & layanan</a><a href="faq.html">Pesanan & pembayaran</a><a href="faq.html">Website & project</a><a href="contact.html">Hubungi BB Studio</a></div>';
   var layout=help.querySelector(".help-layout");
   help.insertBefore(box,layout||help.firstChild);
   var form=box.querySelector("form");
   form.addEventListener("submit",function(e){
    e.preventDefault();
    var q=form.querySelector("input").value.trim();
    if(q)location.href="faq.html?q="+encodeURIComponent(q);
   });
  }
 }

 var menu=header.querySelector(".bb-menu");
 var mobile=header.querySelector(".bb-mobile-menu");
 if(menu && mobile){
  menu.addEventListener("click",function(){
   var open=mobile.classList.toggle("open");
   menu.setAttribute("aria-expanded",String(open));
   menu.textContent=open?"×":"☰";
  });
 }
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",run);else run();
})();