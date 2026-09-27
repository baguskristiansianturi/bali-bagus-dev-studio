/* Bali Bagus Dev Studio — V2 frontend core
   Visual system intentionally preserved. Replace demo storage/API seams with backend before transactions.
*/
const PRODUCTS=[
{id:"barber",name:"Barbershop Website Kit",category:"Business",type:"Website Template",price:790000,old:1190000,tag:"BESTSELLER",desc:"Template barbershop modern dengan halaman layanan, galeri, booking CTA, dan struktur responsif.",features:["Responsive desktop & mobile","Homepage, layanan, galeri, kontak","Struktur SEO dasar","Panduan instalasi","Opsi kustomisasi"],visual:"barber"},
{id:"villa",name:"Hospitality & Villa Template",category:"Hospitality",type:"Website Template",price:1250000,old:1590000,tag:"NEW",desc:"Konsep website villa dan hospitality dengan galeri, fasilitas, pengalaman menginap, dan CTA reservasi.",features:["Responsive desktop & mobile","Halaman kamar dan fasilitas","Galeri & CTA reservasi","Struktur SEO dasar","Demo konsep"],visual:"villa"},
{id:"commerce",name:"Commerce Launch Kit",category:"Commerce",type:"E-commerce UI Kit",price:990000,old:0,tag:"DIGITAL KIT",desc:"Fondasi storefront untuk brand retail yang ingin menampilkan katalog secara profesional.",features:["Product listing UI","Product detail UI","Cart & checkout UI concept","Responsive components","UI customization"],visual:"shop"},
{id:"blogger",name:"Editorial Blogger Template",category:"Blogger",type:"Blogger Template",price:350000,old:0,tag:"BLOGGER",desc:"Template editorial untuk artikel, blog bisnis, dan konten edukasi dengan tata letak yang rapi.",features:["Layout artikel & kategori","Responsive design","Widget-ready concept","Typography system","Panduan pemasangan"],visual:"shop"},
{id:"landing",name:"Conversion Landing Page Kit",category:"Business",type:"Landing Page",price:490000,old:0,tag:"QUICK START",desc:"Landing page kit untuk memperkenalkan penawaran, mengarahkan CTA, dan mengumpulkan leads.",features:["Hero & CTA sections","Benefit & FAQ sections","Responsive layout","Lead form UI","Easy customization"],visual:"barber"},
{id:"dashboard",name:"Business Dashboard UI",category:"Commerce",type:"UI Kit",price:650000,old:0,tag:"UI KIT",desc:"Komponen antarmuka dashboard bisnis untuk mempercepat eksplorasi produk aplikasi.",features:["Dashboard components","Tables & status UI","Responsive patterns","Reusable design tokens","Figma-ready handoff concept"],visual:"villa"}
];

const PACKAGES=[
{id:"starter",name:"Starter",price:1250000,tag:"UNTUK MULAI",desc:"Website satu halaman untuk bisnis yang membutuhkan kehadiran digital yang rapi dan jelas.",scope:"1 halaman",time:"± 5–7 hari kerja",features:["1 halaman responsive","Struktur konten & CTA","Form kontak / WhatsApp link","Basic technical SEO","2x revisi tampilan"]},
{id:"business",name:"Business",price:2900000,tag:"PALING FLEKSIBEL",desc:"Website bisnis multi-halaman dengan struktur yang lebih lengkap untuk membangun kepercayaan.",scope:"Hingga 5 halaman",time:"± 7–12 hari kerja",features:["Hingga 5 halaman","Responsive desktop / tablet / mobile","Form & CTA terstruktur","Basic technical SEO","Google Analytics/Search Console setup","3x revisi tampilan"],featured:true},
{id:"growth",name:"Growth",price:5500000,tag:"BISNIS BERKEMBANG",desc:"Website yang siap dikembangkan dengan blog, landing pages, dan fondasi pengukuran.",scope:"Hingga 8 halaman",time:"± 10–16 hari kerja",features:["Hingga 8 halaman","Blog / article structure","SEO technical foundation","Analytics & conversion events","Lead form flow","4x revisi tampilan"]},
{id:"commerce",name:"Commerce",price:8500000,tag:"ONLINE STORE",desc:"Fondasi toko online dengan katalog, keranjang, checkout, dan integrasi pembayaran sesuai kebutuhan.",scope:"E-commerce",time:"± 14–25 hari kerja",features:["Katalog & detail produk","Cart & checkout flow","Payment gateway integration*","Order flow","Basic admin integration*","Testing & handover"],note:"*Biaya gateway, hosting, domain, plugin, dan layanan pihak ketiga dapat terpisah."},
{id:"custom",name:"Custom Web App",price:15000000,tag:"ALUR KHUSUS",desc:"Aplikasi web dengan alur pengguna, dashboard, dan integrasi yang dirancang berdasarkan kebutuhan bisnis.",scope:"Custom scope",time:"± 21–40 hari kerja",features:["Requirement mapping","User flow & dashboard","Authentication / roles sesuai scope","API integration sesuai scope","Testing & documentation","Deployment assistance"]},
{id:"system",name:"Business System",price:27000000,tag:"FULL CUSTOM",desc:"Sistem web kompleks untuk proses bisnis yang membutuhkan modul, role, data, dan integrasi lebih luas.",scope:"Full custom",time:"± 30–60+ hari kerja",features:["Discovery & system architecture","Multi-role workflow","Dashboard & reporting","API / third-party integration","QA & acceptance testing","Deployment & handover"],note:"Harga awal. Estimasi final ditetapkan setelah scope, integrasi, dan kebutuhan infrastruktur disepakati."}
];

const DEMOS=[
{id:"villa",category:"Hospitality",name:"Villa / Hospitality",title:"THE ART OF",em:"SLOW LIVING.",desc:"Contoh struktur untuk villa, resort, homestay, atau hospitality."},
{id:"barber",category:"Service Business",name:"Barbershop / Service",title:"GOOD CUTS.",em:"GOOD ENERGY.",desc:"Contoh landing dan booking flow untuk bisnis jasa."},
{id:"commerce",category:"Retail",name:"Retail / Commerce",title:"EVERYDAY",em:"ESSENTIALS.",desc:"Contoh katalog produk dengan fokus visual dan conversion."},
{id:"corporate",category:"Corporate",name:"Company Profile",title:"BUILT FOR",em:"THE NEXT STEP.",desc:"Contoh website perusahaan, agency, atau profesional."},
{id:"restaurant",category:"F&B",name:"Restaurant / F&B",title:"GOOD FOOD.",em:"GOOD PLACE.",desc:"Contoh menu, location, reservation, dan story."},
{id:"tour",category:"Travel",name:"Tour & Travel",title:"GO",em:"SOMEWHERE.",desc:"Contoh paket, itinerary, inquiry, dan trust section."}
];

const CLIENTS=[
{id:"client-01",name:"Client Website — Hospitality",category:"Hospitality",status:"Published with permission",url:"#",desc:"Contoh slot publikasi website klien. Ganti data ini setelah izin dan URL resmi tersedia."},
{id:"client-02",name:"Client Website — Business",category:"Business",status:"Published with permission",url:"#",desc:"Contoh slot publikasi website klien. Logo, screenshot, dan URL hanya ditampilkan setelah persetujuan."}
];

const fmt=n=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(n);
const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
const store={get(k,d=[]){try{return JSON.parse(localStorage.getItem("bb_"+k))??d}catch{return d}},set(k,v){localStorage.setItem("bb_"+k,JSON.stringify(v))}};
const esc=v=>String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
const icon=(name,cls="icon-svg")=>{const p={arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',check:'<path d="m5 12 4 4L19 6"/>',cart:'<circle cx="9" cy="19" r="1"/><circle cx="17" cy="19" r="1"/><path d="M3 4h2l2.5 10h9.7l2-7H6"/>',external:'<path d="M14 5h5v5M19 5l-8 8"/><path d="M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',close:'<path d="m6 6 12 12M18 6 6 18"/>'};return `<svg class="${cls}" aria-hidden="true" viewBox="0 0 24 24">${p[name]||p.arrow}</svg>`};

function art(p){
 return `<div class="product-art ${esc(p.visual)}" role="img" aria-label="${esc(p.name)} preview">
   <span class="art-label">BB / ${esc(p.category.toUpperCase())}</span><span class="art-price">${esc(p.tag)}</span>
   <div class="product-mock"><span>BALI BAGUS / DIGITAL STUDIO</span><b>${p.visual==="villa"?"THE ART OF<br>SLOW LIVING.":p.visual==="barber"?"GOOD CUTS.<br>GOOD ENERGY.":esc(p.name.split(" ").slice(0,2).join("<br>"))}</b><i></i></div>
 </div>`;
}
function card(p){
 return `<article class="product-card">${art(p)}<div class="product-card-body"><div class="product-meta">${esc(p.type.toUpperCase())} · ${esc(p.category.toUpperCase())}</div><h3>${esc(p.name)}</h3><p>${esc(p.desc)}</p><div class="product-card-foot"><span class="product-price">${fmt(p.price)}</span><a href="product-detail.html?id=${encodeURIComponent(p.id)}">Detail ${icon("arrow")}</a></div></div></article>`;
}
function renderProducts(target,list){const el=$(target);if(el)el.innerHTML=list.length?list.map(card).join(""):'<div class="empty-state">Tidak ada hasil yang sesuai. Coba kata kunci lain.</div>'}
function normalizeCart(raw){
 if(!Array.isArray(raw))return [];
 const merged=new Map();
 raw.forEach(item=>{
  if(!item||typeof item.id!=="string")return;
  if(!PRODUCTS.some(p=>p.id===item.id))return;
  const qty=Math.max(1,Math.min(99,Number.isFinite(Number(item.qty))?Math.floor(Number(item.qty)):1));
  merged.set(item.id,Math.min(99,(merged.get(item.id)||0)+qty));
 });
 return [...merged].map(([id,qty])=>({id,qty}));
}
function getCart(){return normalizeCart(store.get("cart",[]))}
function saveCart(c){store.set("cart",normalizeCart(c));updateCount()}
function updateCount(){const count=getCart().reduce((a,x)=>a+x.qty,0);$$('#cartCount').forEach(e=>e.textContent=count)}
function addCart(id){
 const p=PRODUCTS.find(x=>x.id===id);if(!p)return;
 const c=getCart(),item=c.find(x=>x.id===id);
 item?item.qty=Math.min(99,item.qty+1):c.push({id,qty:1});
 saveCart(c);showToast(`${p.name} ditambahkan ke keranjang.`);
}
function changeQty(id,delta){
 const c=getCart(),item=c.find(x=>x.id===id);if(!item)return;
 item.qty=Math.max(1,Math.min(99,item.qty+Number(delta||0)));
 saveCart(c);renderCart();renderSummary("#checkoutSummary");
}
function showToast(message){let t=$("#bbToast");if(!t){t=document.createElement("div");t.id="bbToast";t.className="bb-toast";document.body.appendChild(t)}t.textContent=message;t.classList.add("show");clearTimeout(window.__bbToast);window.__bbToast=setTimeout(()=>t.classList.remove("show"),2600)}
function renderDetail(){
 const el=$("#productDetail");if(!el)return;
 const p=PRODUCTS.find(x=>x.id===new URLSearchParams(location.search).get("id"))||PRODUCTS[0];
 el.innerHTML=`<div class="breadcrumb"><a href="products.html">Produk digital</a> / ${esc(p.name)}</div><div class="product-detail-layout"><div><div class="detail-art">${art(p)}</div><div class="detail-tabs"><h2>Deskripsi produk</h2><p>${esc(p.desc)}</p><h2>Fitur dan spesifikasi</h2><ul>${p.features.map(f=>`<li>${esc(f)}</li>`).join("")}</ul><h2>Lisensi & dukungan</h2><p>Detail lisensi, format file, update, dukungan, dan opsi instalasi ditampilkan sebelum produk produksi diterbitkan.</p></div></div><aside class="detail-info"><div class="product-meta">${esc(p.type.toUpperCase())} · ${esc(p.category.toUpperCase())}</div><h2>${esc(p.name)}</h2><p>${esc(p.desc)}</p><div class="price">${fmt(p.price)}</div><p class="tiny">Harga contoh katalog. Ketentuan produk final mengikuti lisensi yang tercantum saat diterbitkan.</p><ul>${p.features.map(f=>`<li>${esc(f)}</li>`).join("")}</ul><button class="button button-dark" type="button" onclick="addCart('${esc(p.id)}')">Tambah ke keranjang ${icon("cart")}</button><a class="button" style="border-color:#ddd;width:100%" href="booking.html?service=${encodeURIComponent("Kustomisasi "+p.name)}">Tanyakan kustomisasi ${icon("arrow")}</a></aside></div>`;
}
function renderCart(){
 const el=$("#cartItems");if(!el)return;const cart=getCart();
 const checkout=$("#checkoutLink");
 if(!cart.length){
  el.innerHTML='<div class="empty-state">Keranjang Anda masih kosong. <a class="text-link" href="products.html">Jelajahi produk ↗</a></div>';
  $("#cartSummary").innerHTML='<div class="summary-total"><span>Total</span><span>Rp0</span></div>';
  if(checkout){checkout.setAttribute("aria-disabled","true");checkout.setAttribute("tabindex","-1");checkout.dataset.disabled="true";}
  return;
 }
 el.innerHTML=cart.map(x=>{
  const p=PRODUCTS.find(p=>p.id===x.id);if(!p)return "";
  return `<div class="cart-row"><div class="cart-thumb">${icon("arrow")}</div><div class="cart-row-info"><b>${esc(p.name)}</b><small>${fmt(p.price)} · Qty ${x.qty}</small><small>${fmt(p.price*x.qty)}</small></div><div class="cart-qty" aria-label="Jumlah ${esc(p.name)}"><button type="button" aria-label="Kurangi ${esc(p.name)}" onclick="changeQty('${esc(p.id)}',-1)" ${x.qty<=1?"disabled":""}>−</button><span>${x.qty}</span><button type="button" aria-label="Tambah ${esc(p.name)}" onclick="changeQty('${esc(p.id)}',1)" ${x.qty>=99?"disabled":""}>+</button></div><button type="button" onclick="removeCart('${esc(p.id)}')">Hapus</button></div>`;
 }).join("");
 const total=cart.reduce((s,x)=>s+(PRODUCTS.find(p=>p.id===x.id)?.price||0)*x.qty,0);
 $("#cartSummary").innerHTML=`${cart.map(x=>{const p=PRODUCTS.find(p=>p.id===x.id);return `<div class="summary-line"><span>${esc(p.name)} × ${x.qty}</span><b>${fmt(p.price*x.qty)}</b></div>`}).join("")}<div class="summary-total"><span>Total</span><span>${fmt(total)}</span></div>`;
 if(checkout){checkout.removeAttribute("aria-disabled");checkout.removeAttribute("tabindex");checkout.dataset.disabled="false";}
}
function removeCart(id){saveCart(getCart().filter(x=>x.id!==id));renderCart();renderSummary("#checkoutSummary");showToast("Produk dihapus dari keranjang.")}
function renderSummary(target){
 const el=$(target);if(!el)return;const cart=getCart(),total=cart.reduce((s,x)=>s+(PRODUCTS.find(p=>p.id===x.id)?.price||0)*x.qty,0);
 el.innerHTML=cart.length?cart.map(x=>{const p=PRODUCTS.find(p=>p.id===x.id);return `<div class="summary-line"><span>${esc(p.name)} × ${x.qty}</span><b>${fmt(p.price*x.qty)}</b></div>`}).join("")+`<div class="summary-total"><span>Total</span><span>${fmt(total)}</span></div>`:'<p class="tiny">Keranjang kosong.</p>';
}
function header(){
 const h=$(".site-header");if(!h||h.children.length)return;
 h.innerHTML=`<a class="brand" href="index.html" aria-label="Bali Bagus Dev home"><span class="brand-mark">BB</span><span>BALI BAGUS<small>DEV STUDIO</small></span></a>
 <button class="mobile-toggle" id="menuToggle" aria-label="Buka menu" aria-expanded="false">${icon("menu")}</button>
 <nav class="nav" id="mainNav" aria-label="Navigasi utama"><a href="index.html">Beranda</a><a href="website-packages.html">Website</a><a href="products.html">Produk</a><a href="portfolio.html">Portfolio</a><a href="articles.html">Artikel</a><a href="contact.html">Kontak</a></nav>
 <div class="header-actions"><button class="lang" id="langToggle" type="button">ID <span>⌄</span></button><a class="icon-btn" href="cart.html" aria-label="Keranjang">${icon("cart")}<b id="cartCount">0</b></a><a class="button button-dark small" href="booking.html">Konsultasi ${icon("arrow")}</a></div>`;
 const page=location.pathname.split("/").pop()||"index.html";
 h.querySelectorAll(".nav a").forEach(a=>{
 const href=a.getAttribute("href").split("?")[0];if(href===page)a.classList.add("active");
 a.addEventListener("click",()=>{if(window.innerWidth<=800){$("#mainNav").classList.remove("open");$("#menuToggle")?.setAttribute("aria-expanded","false");$("#menuToggle")?.setAttribute("aria-label","Buka menu");$("#menuToggle").innerHTML=icon("menu")}});
});
 $("#menuToggle")?.addEventListener("click",()=>{
 const open=$("#mainNav").classList.toggle("open");
 $("#menuToggle").setAttribute("aria-expanded",String(open));
 $("#menuToggle").setAttribute("aria-label",open?"Tutup menu":"Buka menu");
 $("#menuToggle").innerHTML=icon(open?"close":"menu");
});
 $("#langToggle")?.addEventListener("click",toggleLang);
}
function footer(){
 const f=$("#siteFooter");if(!f)return;f.className="site-footer";
 f.innerHTML=`<div class="wrap"><div class="footer-top"><div class="footer-brand"><a class="brand" href="index.html"><span class="brand-mark" style="background:#fff;color:#171717">BB</span><span>BALI BAGUS<small>DEV STUDIO</small></span></a><p>Website, aplikasi, dan solusi digital yang dirancang untuk membantu bisnis bergerak dengan tujuan.</p><div class="socials"><a href="#" aria-label="Instagram">ig</a><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="LinkedIn">in</a><a href="#" aria-label="YouTube">▶</a><a href="#" aria-label="X">𝕏</a></div></div>
 <div class="footer-col"><b>Website</b><a href="website-packages.html">Paket website</a><a href="portfolio.html#demos">Contoh website</a><a href="portfolio.html#clients">Website klien</a><a href="booking.html">Konsultasi custom</a></div>
 <div class="footer-col"><b>Produk digital</b><a href="products.html">Website templates</a><a href="products.html">Blogger templates</a><a href="products.html">UI kits</a><a href="cart.html">Keranjang</a></div>
 <div class="footer-col"><b>Bali Bagus Dev</b><a href="services.html">Layanan</a><a href="articles.html">Artikel & insight</a><a href="contact.html">Kontak</a><a href="terms.html">Syarat & ketentuan</a><a href="privacy.html">Kebijakan privasi</a><a href="refund.html">Kebijakan refund</a></div></div>
 <div class="footer-pay"><span>METODE PEMBAYARAN<br><small>Aktif setelah gateway produksi dikonfigurasi</small></span><div class="pay-icons"><b>QRIS*</b><b>VISA*</b><b>Mastercard*</b><b>PayPal*</b><b>Bank Transfer*</b></div></div>
 <div class="footer-bottom"><span>© ${new Date().getFullYear()} Bali Bagus Dev. All rights reserved.</span><span>Indonesia / English</span></div></div>`;
}
let english=false;
function toggleLang(){english=!english;document.documentElement.lang=english?"en":"id";const dict=english?{"Beranda":"Home","Website":"Website","Produk":"Products","Portfolio":"Portfolio","Artikel":"Articles","Kontak":"Contact","Konsultasi":"Book a call","Cari solusi":"Find solutions"}:{"Home":"Beranda","Website":"Website","Products":"Produk","Portfolio":"Portfolio","Articles":"Artikel","Contact":"Kontak","Book a call":"Konsultasi","Find solutions":"Cari solusi"};document.querySelectorAll(".nav a,.header-actions .button").forEach(e=>{let t=e.textContent.replace(/\s+/g," ").trim();Object.keys(dict).forEach(k=>{if(t.startsWith(k))e.childNodes[0].textContent=dict[k]})});const b=$("#langToggle");if(b)b.innerHTML=english?"EN <span>⌄</span>":"ID <span>⌄</span>";const search=$("#globalSearch");if(search)search.placeholder=english?"What would you like to build today?":"Apa yang ingin Anda bangun hari ini?"}
function setupForms(){
 const bf=$("#bookingForm");if(bf){const s=new URLSearchParams(location.search).get("service");if(s&&$("#bookingService"))$("#bookingService").value=s;
 bf.addEventListener("submit",e=>{e.preventDefault();const data=Object.fromEntries(new FormData(bf));data.id="BB-"+Date.now();data.status="inquiry-demo";data.createdAt=new Date().toISOString();const arr=store.get("bookings",[]);arr.push(data);store.set("bookings",arr);$("#bookingResult").innerHTML='<span class="form-status">Permintaan tersimpan sebagai demo lokal. Untuk produksi, hubungkan form ini ke email/CRM/backend dan tambahkan anti-spam.</span>';bf.reset()})}
 const cf=$("#contactForm");if(cf)cf.addEventListener("submit",e=>{e.preventDefault();const arr=store.get("messages",[]);arr.push({...Object.fromEntries(new FormData(cf)),id:"MSG-"+Date.now(),status:"demo-local"});store.set("messages",arr);$("#contactResult").innerHTML='<span class="form-status">Pesan tersimpan sebagai demo lokal. Pada produksi, pesan akan diteruskan ke inbox/CRM.</span>';cf.reset()});
 const co=$("#checkoutForm");if(co)co.addEventListener("submit",e=>{e.preventDefault();const cart=getCart();const data=Object.fromEntries(new FormData(co));if(!cart.length&&data.orderType!=="website"){co.insertAdjacentHTML("afterend",'<div class="form-status">Tidak ada item digital di keranjang.</div>');return}const order={id:"ORDER-"+Date.now(),type:data.orderType||"digital",customer:data,items:cart,status:"inquiry-demo",createdAt:new Date().toISOString()};const orders=store.get("orders",[]);orders.push(order);store.set("orders",orders);saveCart([]);$("#checkoutResult").innerHTML=`<span class="form-status">Permintaan <b>${esc(order.id)}</b> tersimpan sebagai demo. Belum ada pembayaran nyata. Untuk produksi, hubungkan payment gateway dan verifikasi webhook di server.</span>`;co.reset();renderSummary("#checkoutSummary")})}
function setupSearch(){
 const b=$("#searchButton");if(b)b.addEventListener("click",()=>{const q=$("#globalSearch").value.trim(),cat=$("#searchCategory").value;const url=cat==="service"?"website-packages.html":cat==="article"?"articles.html":"products.html";location.href=url+(q?"?q="+encodeURIComponent(q):"")});
 const q=new URLSearchParams(location.search).get("q");if(q&&$("#catalogSearch"))$("#catalogSearch").value=q;
 function filter(){const q=($("#catalogSearch")?.value||"").toLowerCase(),cat=$("#productFilter")?.value||"all",sort=$("#sortProducts")?.value||"featured";let list=PRODUCTS.filter(p=>(cat==="all"||p.category===cat)&&(p.name+" "+p.desc+" "+p.category).toLowerCase().includes(q));if(sort==="low")list.sort((a,b)=>a.price-b.price);if(sort==="high")list.sort((a,b)=>b.price-a.price);renderProducts("#allProducts",list)}
 $("#catalogSearch")?.addEventListener("input",filter);$("#productFilter")?.addEventListener("change",filter);$("#sortProducts")?.addEventListener("change",filter);if($("#allProducts"))filter();
}
function setupCheckoutGuard(){
 const link=$("#checkoutLink");if(!link)return;
 link.addEventListener("click",e=>{
  if(link.dataset.disabled==="true"){e.preventDefault();showToast("Tambahkan produk terlebih dahulu.");}
 });
}
function renderPackages(target="#packagesGrid",limit=6){const el=$(target);if(!el)return;el.innerHTML=PACKAGES.slice(0,limit).map(p=>`<article class="package-card ${p.featured?"featured":""}">${p.featured?'<span class="package-badge">RECOMMENDED FORMAT</span>':''}<div class="eyebrow">${esc(p.tag)}</div><h3>${esc(p.name)}</h3><p>${esc(p.desc)}</p><div class="package-price">${fmt(p.price)} <small>mulai</small></div><div class="package-note">${esc(p.scope)} · ${esc(p.time)}</div><ul>${p.features.map(f=>`<li>${esc(f)}</li>`).join("")}</ul><a class="button ${p.featured?"button-dark":""}" href="booking.html?package=${encodeURIComponent(p.id)}">Bahas paket ${icon("arrow")}</a>${p.note?`<div class="package-note">${esc(p.note)}</div>`:""}</article>`).join("")}
function renderPackageDetail(){const el=$("#packageDetail");if(!el)return;const id=new URLSearchParams(location.search).get("id")||"business",p=PACKAGES.find(x=>x.id===id)||PACKAGES[1];el.innerHTML=`<div class="breadcrumb"><a href="website-packages.html">Paket website</a> / ${esc(p.name)}</div><div class="product-detail-layout"><div><div class="detail-art package-visual"><div class="eyebrow">${esc(p.tag)}</div><h2>${esc(p.name)}<br><em>${fmt(p.price)} mulai</em></h2><p>${esc(p.desc)}</p></div><div class="detail-tabs"><h2>Yang termasuk</h2><ul>${p.features.map(f=>`<li>${esc(f)}</li>`).join("")}</ul><h2>Estimasi</h2><p>${esc(p.time)}. Waktu dapat berubah mengikuti kesiapan materi, revisi, integrasi, dan scope yang disepakati.</p><h2>Yang belum termasuk</h2><p>Domain, hosting, layanan pihak ketiga, biaya gateway, lisensi berbayar, pembuatan konten khusus, dan kebutuhan di luar scope dapat dihitung terpisah.</p></div></div><aside class="detail-info"><div class="product-meta">WEBSITE DEVELOPMENT · ${esc(p.scope.toUpperCase())}</div><h2>${esc(p.name)}</h2><div class="price">${fmt(p.price)} <small>mulai</small></div><p>${esc(p.desc)}</p><a class="button button-dark full" href="booking.html?package=${encodeURIComponent(p.id)}">Mulai diskusi ${icon("arrow")}</a><a class="button" style="border-color:#ddd;width:100%" href="portfolio.html#demos">Lihat contoh website ${icon("external")}</a></aside></div>`}
function renderDemos(){const el=$("#demoGrid");if(!el)return;el.innerHTML=DEMOS.map(d=>`<article class="demo-card" data-category="${esc(d.category)}"><div class="demo-visual"><div class="demo-browser"><div class="demo-bar"><i></i><i></i><i></i><span>${esc(d.name.toLowerCase().replace(/[^a-z0-9]+/g,"-"))}.demo</span></div><div class="demo-screen"><small>${esc(d.category.toUpperCase())} / CONCEPT</small><b>${esc(d.title)}<br><em>${esc(d.em)}</em></b><small>RESPONSIVE · CUSTOMIZABLE · UI CONCEPT</small></div></div></div><div class="port-info"><b>${esc(d.name)}</b><p>${esc(d.desc)}</p><div class="section-actions"><a class="button button-dark small" href="demo.html?id=${encodeURIComponent(d.id)}">Lihat demo ${icon("external")}</a><a class="mini-link" href="booking.html?demo=${encodeURIComponent(d.id)}">Custom</a></div></div></article>`).join("")}
function renderClients(){const el=$("#clientGrid");if(!el)return;el.innerHTML=CLIENTS.map(c=>`<article class="client-card"><div class="client-preview"><div class="demo-browser"><div class="demo-bar"><i></i><i></i><i></i><span>client-preview</span></div><div class="demo-screen"><small>${esc(c.category.toUpperCase())}</small><b>${esc(c.name.replace("Client Website — ",""))}</b><small>${esc(c.status.toUpperCase())}</small></div></div></div><div class="port-info"><b>${esc(c.name)}</b><span>${esc(c.status)}</span><p>${esc(c.desc)}</p>${c.url!="#"?`<a class="mini-link" href="${esc(c.url)}" rel="noopener">Visit website ↗</a>`:""}</div></article>`).join("")}
function renderDemoDetail(){const el=$("#demoDetail");if(!el)return;const id=new URLSearchParams(location.search).get("id")||"villa",d=DEMOS.find(x=>x.id===id)||DEMOS[0];el.innerHTML=`<div class="breadcrumb"><a href="portfolio.html#demos">Contoh website</a> / ${esc(d.name)}</div><div class="demo-detail"><div class="demo-detail-browser"><div class="demo-bar"><i></i><i></i><i></i><span>${esc(d.name.toLowerCase().replace(/[^a-z0-9]+/g,"-"))}.demo</span></div><div class="demo-detail-screen"><small>${esc(d.category.toUpperCase())} / DEMO CONCEPT</small><h1>${esc(d.title)}<br><em>${esc(d.em)}</em></h1><p>${esc(d.desc)} Contoh ini dibuat untuk menunjukkan arah visual dan struktur halaman; seluruh konten, warna minor, section, fitur, dan alur dapat disesuaikan.</p><div><a class="button button-dark" href="booking.html?demo=${encodeURIComponent(d.id)}">Custom demo ${icon("arrow")}</a><a class="button" href="portfolio.html#demos">Kembali</a></div></div></div></div>`}
function initA11y(){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.classList.add("reduced-motion")}
document.addEventListener("DOMContentLoaded",()=>{
 initA11y();header();footer();updateCount();renderProducts("#featuredProducts",PRODUCTS.slice(0,3));
 setupSearch();renderDetail();renderPackageDetail();renderPackages();renderDemos();renderClients();renderDemoDetail();
 renderCart();renderSummary("#checkoutSummary");setupCheckoutGuard();setupForms();
 const pkg=new URLSearchParams(location.search).get("package");if(pkg&&$("#bookingPackage"))$("#bookingPackage").value=pkg;
 const dateInput=document.querySelector('input[name="date"]');if(dateInput)dateInput.min=new Date().toISOString().slice(0,10);
});
window.addCart=addCart;window.removeCart=removeCart;window.changeQty=changeQty;
