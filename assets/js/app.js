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








function showToast(message){let t=$("#bbToast");if(!t){t=document.createElement("div");t.id="bbToast";t.className="bb-toast";document.body.appendChild(t)}t.textContent=message;t.classList.add("show");clearTimeout(window.__bbToast);window.__bbToast=setTimeout(()=>t.classList.remove("show"),2600)}





function footer(){
 const f=$("#siteFooter");if(!f)return;const base=location.pathname.includes("/landing/")?"../":"";f.className="site-footer";
 f.innerHTML=`<div class="wrap"><div class="footer-top">
 <div class="footer-brand"><a class="brand" href="${base}index.html"><span class="brand-mark" style="background:#fff;color:#171717">BB</span><span>BALI BAGUS<small>DEV STUDIO</small></span></a><p>Website, aplikasi, produk digital, dan solusi digital yang dirancang untuk membantu bisnis bergerak dengan tujuan.</p><div class="socials"><a href="#" aria-label="Instagram">ig</a><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="LinkedIn">in</a><a href="#" aria-label="YouTube">▶</a><a href="#" aria-label="X">𝕏</a></div></div>
 <div class="footer-col"><b>Website</b><a href="${base}website-packages.html">Paket website</a><a href="${base}website-collection.html">Website Collection</a><a href="${base}client-websites.html">Website klien</a><a href="${base}booking.html">Custom website</a></div>
 <div class="footer-col"><b>Produk digital</b><a href="${base}products.html">Website templates</a><a href="${base}products.html">Blogger templates</a><a href="${base}products.html">UI kits & components</a><a href="${base}products.html">Digital products</a></div>
 <div class="footer-col"><b>Bali Bagus Dev</b><a href="${base}services.html">Layanan</a><a href="${base}portfolio.html">Portfolio & demo</a><a href="${base}articles.html">Artikel & insight</a><a href="${base}contact.html">Kontak & bantuan</a><a href="${base}terms.html">Syarat & ketentuan</a><a href="${base}privacy.html">Kebijakan privasi</a><a href="${base}refund.html">Kebijakan refund</a></div></div>
 <div class="footer-pay"><span>METODE PEMBAYARAN<br><small>Metode akan aktif setelah integrasi gateway produksi</small></span><div class="pay-icons"><b>QRIS*</b><b>VISA*</b><b>Mastercard*</b><b>PayPal*</b><b>Bank Transfer*</b></div></div>
 <div class="footer-bottom"><span>© ${new Date().getFullYear()} Bali Bagus Dev. All rights reserved.</span><span>Credit by Bagus Dev · Indonesia / English</span></div></div>`;
}
let english=false;
function toggleLang(){english=!english;document.documentElement.lang=english?"en":"id";const dict=english?{"Beranda":"Home","Website":"Website","Produk":"Products","Portfolio":"Portfolio","Artikel":"Articles","Kontak":"Contact","Konsultasi":"Book a call","Cari solusi":"Find solutions"}:{"Home":"Beranda","Website":"Website","Products":"Produk","Portfolio":"Portfolio","Articles":"Artikel","Contact":"Kontak","Book a call":"Konsultasi","Find solutions":"Cari solusi"};document.querySelectorAll(".nav a,.header-actions .button").forEach(e=>{let t=e.textContent.replace(/\s+/g," ").trim();Object.keys(dict).forEach(k=>{if(t.startsWith(k))e.childNodes[0].textContent=dict[k]})});const b=$("#langToggle");if(b)b.innerHTML=english?"EN <span>⌄</span>":"ID <span>⌄</span>";const search=$("#globalSearch");if(search)search.placeholder=english?"What would you like to build today?":"Apa yang ingin Anda bangun hari ini?"}


function setupCheckoutGuard(){
 const link=$("#checkoutLink");if(!link)return;
 link.addEventListener("click",e=>{
  if(link.dataset.disabled==="true"){e.preventDefault();showToast("Tambahkan produk terlebih dahulu.");}
 });
}
function renderPackages(target="#packagesGrid",limit=6){const el=$(target);if(!el)return;el.innerHTML=PACKAGES.slice(0,limit).map(p=>`<article class="package-card ${p.featured?"featured":""}">${p.featured?'<span class="package-badge">RECOMMENDED FORMAT</span>':''}<div class="eyebrow">${esc(p.tag)}</div><h3>${esc(p.name)}</h3><p>${esc(p.desc)}</p><div class="package-price">${fmt(p.price)} <small>mulai</small></div><div class="package-note">${esc(p.scope)} · ${esc(p.time)}</div><ul>${p.features.map(f=>`<li>${esc(f)}</li>`).join("")}</ul><a class="button ${p.featured?"button-dark":""}" href="website-package.html?id=${encodeURIComponent(p.id)}">Lihat website dalam paket ${icon("arrow")}</a>${p.note?`<div class="package-note">${esc(p.note)}</div>`:""}</article>`).join("")}
function renderPackageExperience(){
 const el=$("#packageExperience");if(!el)return;
 const id=new URLSearchParams(location.search).get("id")||"starter";
 const p=PACKAGES.find(x=>x.id===id)||PACKAGES[0];
 const examples=WEBSITE_COLLECTION.filter(x=>x.status==="active" && (!x.availablePackages||x.availablePackages.includes(p.id))).slice(0,7);
 const allCats=WEBSITE_CATEGORIES.filter(x=>x!=="All");
 el.innerHTML=`
 <div class="breadcrumb"><a href="website-packages.html">Paket website</a> / ${esc(p.name)}</div>
 <section class="package-experience-hero">
  <div><div class="eyebrow">${esc(p.tag)} / PILIHAN PAKET</div><h1>${esc(p.name)}<br><em>${fmt(p.price)} mulai</em></h1><p class="lead">${esc(p.desc)}</p><div class="package-experience-meta"><span>${esc(p.scope)}</span><span>${esc(p.time)}</span><span>${p.features.length} fitur utama</span></div></div>
  <aside class="package-experience-summary"><span class="eyebrow">DALAM PAKET INI</span><ul>${p.features.map(f=>`<li>${esc(f)}</li>`).join("")}</ul><p>Harga adalah harga mulai. Scope final disepakati setelah kebutuhan dan materi dipahami.</p></aside>
 </section>
 <section class="section package-examples-section">
  <div class="section-head"><div><div class="eyebrow">STEP 02 / PILIH FONDASI</div><h2>Lihat koleksi ${esc(p.name)}.</h2><p>Beberapa contoh dengan spek yang sama. Pilih kategori atau gaya yang paling dekat dengan bisnis Anda. Satu kategori dapat memiliki beberapa pilihan.</p></div></div>
  <div class="demo-grid">${examples.map(x=>`<article class="demo-card"><div class="demo-visual"><div class="demo-browser"><div class="demo-bar"><i></i><i></i><i></i><span>${esc(x.name.toLowerCase().replace(/[^a-z0-9]+/g,"-"))}.demo</span></div><div class="demo-screen"><small>${esc(x.category.toUpperCase())}</small><b>${esc(x.name)}</b><small>${esc(x.style)}</small></div></div></div><div class="port-info"><b>${esc(x.name)}</b><p>${esc(x.desc)}</p><a class="button button-dark small" href="${esc(x.demo)}&package=${encodeURIComponent(p.id)}">Lihat & rasakan website ${icon("arrow")}</a></div></article>`).join("")}</div>
  <div class="section-actions" style="margin-top:28px"><a class="button" href="website-collection.html">Lihat semua kategori ${icon("arrow")}</a></div>
 </section>
 <section class="section package-category-section"><div class="section-head"><div><div class="eyebrow">STEP 03 / KATEGORI</div><h2>Bisnis apa pun, mulai dari fondasi yang sesuai.</h2><p>Kategori yang belum punya koleksi aktif tetap terlihat. Ini menjadi ruang pengembangan koleksi berikutnya, bukan halaman kosong.</p></div></div><div class="package-category-list">${allCats.map(cat=>{const active=WEBSITE_COLLECTION.some(x=>x.category===cat&&x.status==="active"&&(!x.availablePackages||x.availablePackages.includes(p.id)));return `<a class="package-category-chip ${active?"is-in":"is-out"}" href="website-collection.html?category=${encodeURIComponent(cat)}"><span>${esc(cat)}</span><small>${active?"Ada pilihan dalam/terkait paket ini":"Coming soon / request category"}</small></a>`}).join("")}</div></section>
 <section class="section package-upgrade-section"><div class="inline-cta"><div class="cta-inline-grid"><div><div class="eyebrow">NEXT STEP</div><h2>Sudah menemukan arah website Anda?</h2><p>Pilih contoh yang paling dekat. Di halaman berikutnya Anda dapat merasakan pengalaman website tersebut sebelum memesan.</p></div><a class="button button-white" href="${examples[0]?examples[0].demo+"&package="+encodeURIComponent(p.id):"website-collection.html"}">Lihat pengalaman website ${icon("arrow")}</a></div></div></section>`;
}

function renderPackageDetail(){const el=$("#packageDetail");if(!el)return;const id=new URLSearchParams(location.search).get("id")||"business",p=PACKAGES.find(x=>x.id===id)||PACKAGES[1];el.innerHTML=`<div class="breadcrumb"><a href="website-packages.html">Paket website</a> / ${esc(p.name)}</div><div class="product-detail-layout"><div><div class="detail-art package-visual"><div class="eyebrow">${esc(p.tag)}</div><h2>${esc(p.name)}<br><em>${fmt(p.price)} mulai</em></h2><p>${esc(p.desc)}</p></div><div class="detail-tabs"><h2>Yang termasuk</h2><ul>${p.features.map(f=>`<li>${esc(f)}</li>`).join("")}</ul><h2>Estimasi</h2><p>${esc(p.time)}. Waktu dapat berubah mengikuti kesiapan materi, revisi, integrasi, dan scope yang disepakati.</p><h2>Yang belum termasuk</h2><p>Domain, hosting, layanan pihak ketiga, biaya gateway, lisensi berbayar, pembuatan konten khusus, dan kebutuhan di luar scope dapat dihitung terpisah.</p></div></div><aside class="detail-info"><div class="product-meta">WEBSITE DEVELOPMENT · ${esc(p.scope.toUpperCase())}</div><h2>${esc(p.name)}</h2><div class="price">${fmt(p.price)} <small>mulai</small></div><p>${esc(p.desc)}</p><a class="button button-dark full" href="booking.html?package=${encodeURIComponent(p.id)}">Mulai diskusi ${icon("arrow")}</a><a class="button" style="border-color:#ddd;width:100%" href="portfolio.html#demos">Lihat contoh website ${icon("external")}</a></aside></div>`}
function renderDemos(){const el=$("#demoGrid");if(!el)return;el.innerHTML=DEMOS.map(d=>`<article class="demo-card" data-category="${esc(d.category)}"><div class="demo-visual"><div class="demo-browser"><div class="demo-bar"><i></i><i></i><i></i><span>${esc(d.name.toLowerCase().replace(/[^a-z0-9]+/g,"-"))}.demo</span></div><div class="demo-screen"><small>${esc(d.category.toUpperCase())} / CONCEPT</small><b>${esc(d.title)}<br><em>${esc(d.em)}</em></b><small>RESPONSIVE · CUSTOMIZABLE · UI CONCEPT</small></div></div></div><div class="port-info"><b>${esc(d.name)}</b><p>${esc(d.desc)}</p><div class="section-actions"><a class="button button-dark small" href="demo.html?id=${encodeURIComponent(d.id)}">Lihat demo ${icon("external")}</a><a class="mini-link" href="booking.html?demo=${encodeURIComponent(d.id)}">Custom</a></div></div></article>`).join("")}
function renderClients(){const el=$("#clientGrid");if(!el)return;el.innerHTML=CLIENTS.map(c=>`<article class="client-card"><div class="client-preview"><div class="demo-browser"><div class="demo-bar"><i></i><i></i><i></i><span>client-preview</span></div><div class="demo-screen"><small>${esc(c.category.toUpperCase())}</small><b>${esc(c.name.replace("Client Website — ",""))}</b><small>${esc(c.status.toUpperCase())}</small></div></div></div><div class="port-info"><b>${esc(c.name)}</b><span>${esc(c.status)}</span><p>${esc(c.desc)}</p>${c.url!="#"?`<a class="mini-link" href="${esc(c.url)}" rel="noopener">Visit website ↗</a>`:""}</div></article>`).join("")}
function renderDemoDetail(){
 const el=$("#demoDetail");if(!el)return;
 const params=new URLSearchParams(location.search);
 const templateId=params.get("template");
 const d=templateId?WEBSITE_COLLECTION.find(x=>x.id===templateId):null;
 const legacy=DEMOS.find(x=>x.id===(params.get("id")||"villa"))||DEMOS[0];
 const item=d||{id:legacy.id,category:legacy.category,name:legacy.name,style:"Responsive / Customizable",desc:legacy.desc};
 const packageId=params.get("package")||((item.availablePackages&&item.availablePackages[0])||"business");
 const p=PACKAGES.find(x=>x.id===packageId)||PACKAGES[1];
 const orderUrl=`website-order.html?package=${encodeURIComponent(p.id)}&template=${encodeURIComponent(item.id)}`;
 const pages=p.id==="starter"?["Home","Services / Offer","Contact"]:p.id==="business"?["Home","About","Services","Gallery","Contact"]:["Home","About","Services","Gallery","Content","Contact"];
 el.innerHTML=`<div class="breadcrumb"><a href="website-package.html?id=${encodeURIComponent(p.id)}">${esc(p.name)}</a> / ${esc(item.category)} / ${esc(item.name)}</div>
 <section class="live-experience-hero"><div><div class="eyebrow">STEP 04 / EXPERIENCE</div><h1>${esc(item.name)}<br><em>${esc(item.style)}</em></h1><p class="lead">Bayangkan struktur ini menggunakan logo, nama bisnis, foto, layanan, harga, warna, dan informasi bisnis Anda sendiri.</p><div class="experience-badges"><span>${esc(p.name)} package</span><span>${esc(p.scope)}</span><span>Responsive</span></div></div><aside class="experience-price"><small>PAKET DIPILIH</small><strong>${fmt(p.price)}</strong><span>mulai · ${esc(p.name)}</span></aside></section>
 <section class="section"><div class="live-preview"><div class="preview-toolbar"><span>LIVE WEBSITE EXPERIENCE / CONCEPT</span><span>Desktop · Tablet · Mobile</span></div><div class="preview-window"><div class="preview-nav"><b>${esc(item.name.toUpperCase())}</b><span>HOME</span><span>SERVICES</span><span>ABOUT</span><span>CONTACT</span></div><div class="preview-hero"><small>${esc(item.category.toUpperCase())}</small><h2>${item.category==="Villa"?"THE ART OF SLOW LIVING.":item.category==="Restaurant"?"GOOD FOOD. GOOD PLACE.":item.category==="Car Rental"?"MOVE FREELY AROUND THE ISLAND.":"GOOD BUSINESS. CLEAR DIGITAL PRESENCE."}</h2><p>${esc(item.desc)}</p><a class="button button-dark small" href="#order">Explore / Contact</a></div><div class="preview-blocks"><div><small>01</small><b>${esc(p.features[0]||"Responsive experience")}</b></div><div><small>02</small><b>${esc(p.features[1]||"Clear CTA")}</b></div><div><small>03</small><b>${esc(p.features[2]||"Business content")}</b></div></div></div></div></section>
 <section class="section experience-detail-grid"><div><div class="eyebrow">WHAT YOU CAN IMAGINE</div><h2>Ini bukan hasil akhir.<br><em>Ini fondasi bisnis Anda.</em></h2><p>Logo, nama usaha, foto, teks, layanan, harga, warna dan detail bisnis dapat disesuaikan sesuai scope paket. Tujuannya agar Anda dapat melihat bentuk pengalaman pelanggan sebelum memutuskan untuk memesan.</p></div><div class="experience-checks"><b>Halaman dalam fondasi ini</b>${pages.map(x=>`<span>✓ ${esc(x)}</span>`).join("")}<b>Yang dapat disesuaikan</b><span>✓ Logo & nama bisnis</span><span>✓ Foto & konten</span><span>✓ Warna & detail visual</span><span>✓ CTA & informasi kontak</span></div></section>
 <section id="order" class="section order-cta-section"><div class="inline-cta"><div class="cta-inline-grid"><div><div class="eyebrow">READY WHEN YOU ARE</div><h2>Pesan website ini sekarang.</h2><p>Form akan otomatis membawa paket <b>${esc(p.name)}</b> dan template <b>${esc(item.name)}</b>. Setelah itu Anda dapat memilih checkout dengan akun atau mengirim brief rapi melalui WhatsApp.</p></div><a class="button button-white" href="${orderUrl}">Pesan website ini ${icon("arrow")}</a></div></div></section>`;
}

function initA11y(){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.classList.add("reduced-motion")}
);
window.addCart=addCart;window.removeCart=removeCart;window.changeQty=changeQty;


/* ============================================================
   V2.2 EXPERIENCE LAYER
   Keep visual DNA; extend commerce, collection, account, FAQ,
   verified-review UX and WhatsApp-assisted ordering.
   Production auth/payment/realtime reviews remain backend work.
============================================================ */
const EXTRA_PRODUCTS=[
 {id:"cctv",name:"CCTV Business Starter",category:"Hardware",type:"Hardware",price:1850000,old:0,tag:"HARDWARE",desc:"Paket awal CCTV untuk bisnis kecil, dengan opsi konsultasi pemasangan.",features:["Camera package","DVR/NVR option","Installation consultation","Warranty information"],visual:"shop"},
 {id:"pos",name:"POS Starter Software",category:"Software",type:"Software License",price:1290000,old:0,tag:"SOFTWARE",desc:"Fondasi POS untuk usaha retail dan F&B yang membutuhkan pencatatan penjualan.",features:["Sales dashboard","Product management","Basic reporting","License activation"],visual:"villa"},
 {id:"seo-kit",name:"Local SEO Content Kit",category:"Digital Product",type:"Content Kit",price:390000,old:0,tag:"SEO",desc:"Template dan struktur konten untuk membantu bisnis lokal menyiapkan fondasi SEO.",features:["Content structure","Local SEO checklist","Article templates","Internal linking guide"],visual:"barber"},
 {id:"barber-pro",name:"Barber Studio Pro",category:"Website",type:"Website Template",price:1190000,old:0,tag:"NEW",desc:"Website barbershop premium dengan layanan, barber profile, gallery dan booking CTA.",features:["Responsive website","Services","Barber profiles","Gallery","Booking CTA"],visual:"barber"},
 {id:"restaurant-pro",name:"Restaurant Atelier",category:"Website",type:"Website Template",price:1390000,old:0,tag:"NEW",desc:"Template restoran dengan menu, story, gallery, location dan reservation CTA.",features:["Menu layout","Gallery","Location","Reservation CTA","Mobile responsive"],visual:"villa"},
 {id:"villa-pro",name:"Villa Retreat",category:"Website",type:"Website Template",price:1590000,old:0,tag:"HOSPITALITY",desc:"Template hospitality dengan room showcase, facilities, gallery dan booking CTA.",features:["Room showcase","Facilities","Gallery","Booking CTA","Responsive layout"],visual:"villa"}
];
const STORE_PRODUCTS=[...PRODUCTS,...EXTRA_PRODUCTS];
const WEBSITE_COLLECTION=[
 {id:"barber-001",category:"Barbershop",name:"Bagus Barbershop",style:"Modern / Booking",desc:"Clean service-led experience for modern barbershops.",demo:"demo.html?template=barber-001",status:"active",availablePackages:["starter","business"]},
 {id:"barber-002",category:"Barbershop",name:"Barber House",style:"Premium / Appointment",desc:"Editorial presentation for a premium barber brand.",demo:"demo.html?template=barber-002",status:"active",availablePackages:["starter","business"]},
 {id:"barber-003",category:"Barbershop",name:"Classic Barber",style:"Classic / Local",desc:"Straightforward local-first barbershop experience.",demo:"demo.html?template=barber-003",status:"active",availablePackages:["starter","business"]},
 {id:"barber-004",category:"Barbershop",name:"Barber Studio",style:"Minimal / Modern",desc:"Minimal portfolio-led design for a studio concept.",demo:"demo.html?template=barber-004",status:"active",availablePackages:["business","growth"]},
 {id:"villa-001",category:"Villa",name:"Villa Retreat",style:"Hospitality / Booking",desc:"A visual-first hospitality experience.",demo:"demo.html?template=villa-001",status:"active",availablePackages:["business","growth"]},
 {id:"restaurant-001",category:"Restaurant",name:"Restaurant Atelier",style:"Editorial / Reservation",desc:"Menu, story, gallery and reservation journey.",demo:"demo.html?template=restaurant-001",status:"active",availablePackages:["starter","business","growth"]},
 {id:"restaurant-002",category:"Restaurant",name:"Table & Story",style:"Local / Conversion",desc:"A compact restaurant website direction focused on menu, location and WhatsApp inquiry.",demo:"demo.html?template=restaurant-002",status:"active",availablePackages:["starter","business"]},
 {id:"property-001",category:"Property",name:"Property House",style:"Listings / Inquiry",desc:"Property discovery and inquiry concept.",demo:"demo.html?template=property-001",status:"active",availablePackages:["business","growth"]},
 {id:"travel-001",category:"Travel",name:"Island Routes",style:"Tour / Inquiry",desc:"Tour package and itinerary discovery concept.",demo:"demo.html?template=travel-001",status:"active",availablePackages:["business","growth"]},
 {id:"carrental-001",category:"Car Rental",name:"Island Drive",style:"Fleet / WhatsApp",desc:"A practical rental website with fleet presentation, pricing and inquiry flow.",demo:"demo.html?template=carrental-001",status:"active",availablePackages:["business","growth"]},
 {id:"cafe-001",category:"Cafe",name:"Daily Coffee",style:"Menu / Local",desc:"Compact café website for menu, location, story and local discovery.",demo:"demo.html?template=cafe-001",status:"active",availablePackages:["starter","business"]},
 {id:"company-001",category:"Company Profile",name:"Built Forward",style:"Corporate / Trust",desc:"Professional company profile structure for services and credibility.",demo:"demo.html?template=company-001",status:"active",availablePackages:["business","growth"]}
];
const WEBSITE_CATEGORIES=[
 "All","Barbershop","Villa","Restaurant","Property","Travel","Hotel","Cafe","Salon","Spa","Fitness",
 "Car Rental","Workshop","Contractor","Architecture","Interior Design","Clinic","Dental Clinic",
 "Education","Consultant","Law Firm","Real Estate","Event Organizer","Wedding","Photography",
 "Company Profile","Startup","SaaS","Community"
];

function allProducts(){return STORE_PRODUCTS}
function findProduct(id){return allProducts().find(p=>p.id===id)||allProducts()[0]}
function normalizeCart(raw){
 if(!Array.isArray(raw))return [];
 const merged=new Map();
 raw.forEach(item=>{
   if(!item||typeof item.id!=="string"||!findProduct(item.id))return;
   const qty=Math.max(1,Math.min(99,Math.floor(Number(item.qty)||1)));
   merged.set(item.id,Math.min(99,(merged.get(item.id)||0)+qty));
 });
 return [...merged].map(([id,qty])=>({id,qty}));
}
function getCart(){return normalizeCart(store.get("cart",[]))}
function saveCart(c){store.set("cart",normalizeCart(c));updateCount()}
function updateCount(){const count=getCart().reduce((a,x)=>a+x.qty,0);$$('#cartCount').forEach(e=>e.textContent=count)}
function addCart(id){
 const p=findProduct(id);if(!p)return;
 const c=getCart(),item=c.find(x=>x.id===id);
 item?item.qty=Math.min(99,item.qty+1):c.push({id,qty:1});
 saveCart(c);showToast(`${p.name} ditambahkan ke keranjang.`);
}
function changeQty(id,delta){
 const c=getCart(),item=c.find(x=>x.id===id);if(!item)return;
 item.qty=Math.max(1,Math.min(99,item.qty+Number(delta||0)));
 saveCart(c);renderCart();renderSummary("#checkoutSummary");
}
function removeCart(id){saveCart(getCart().filter(x=>x.id!==id));renderCart();renderSummary("#checkoutSummary");showToast("Produk dihapus dari keranjang.")}
function isLogged(){return Boolean(store.get("account",null))}
function requireLogin(next){
 if(isLogged())return true;
 const target=next||location.href;
 location.href="account.html?next="+encodeURIComponent(target);
 return false;
}
function whatsappUrl(message){
 const phone=window.BB_WHATSAPP_NUMBER||"6281234567890";
 return "https://wa.me/"+phone+"?text="+encodeURIComponent(message);
}
function productWhatsApp(p){
 const msg=`Halo Bali Bagus Dev, saya tertarik dengan produk "${p.name}". Saya ingin bertanya lebih detail sebelum membeli. Link produk: ${location.origin+location.pathname.replace(/[^/]+$/,"")}product-detail.html?id=${encodeURIComponent(p.id)}`;
 return whatsappUrl(msg);
}
function renderProducts(target,list){
 const el=$(target);if(!el)return;
 el.innerHTML=list.length?list.map(card).join(""):`<div class="empty-state">Tidak ada hasil yang sesuai. <a class="text-link" href="contact.html">Minta produk khusus ↗</a></div>`;
}
function card(p){
 return `<article class="product-card commerce-card">
   ${art(p)}
   <div class="product-card-body">
    <div class="product-meta">${esc(p.type.toUpperCase())} · ${esc(p.category.toUpperCase())}</div>
    <h3>${esc(p.name)}</h3><p>${esc(p.desc)}</p>
    <div class="product-card-foot"><span class="product-price">${fmt(p.price)}</span><a href="product-detail.html?id=${encodeURIComponent(p.id)}">Lihat detail ${icon("arrow")}</a></div>
    <div class="product-card-actions"><a class="mini-link" href="product-detail.html?id=${encodeURIComponent(p.id)}">Live / Preview</a><button type="button" class="mini-link button-reset" onclick="addCart('${esc(p.id)}')">Tambah</button></div>
   </div>
 </article>`;
}
function renderCart(){
 const el=$("#cartItems");if(!el)return;const cart=getCart(),checkout=$("#checkoutLink");
 if(!cart.length){
  el.innerHTML='<div class="empty-state">Keranjang Anda masih kosong. <a class="text-link" href="products.html">Jelajahi Store ↗</a></div>';
  $("#cartSummary").innerHTML='<div class="summary-total"><span>Total</span><span>Rp0</span></div>';
  if(checkout){checkout.setAttribute("aria-disabled","true");checkout.dataset.disabled="true";}
  return;
 }
 el.innerHTML=cart.map(x=>{
  const p=findProduct(x.id);return `<div class="cart-row"><div class="cart-thumb">${icon("arrow")}</div><div class="cart-row-info"><b>${esc(p.name)}</b><small>${esc(p.type)} · ${fmt(p.price)}</small><small>${fmt(p.price*x.qty)}</small></div><div class="cart-qty"><button type="button" aria-label="Kurangi" onclick="changeQty('${esc(p.id)}',-1)">−</button><span>${x.qty}</span><button type="button" aria-label="Tambah" onclick="changeQty('${esc(p.id)}',1)">+</button></div><button type="button" onclick="removeCart('${esc(p.id)}')">Hapus</button></div>`;
 }).join("");
 const total=cart.reduce((s,x)=>s+findProduct(x.id).price*x.qty,0);
 $("#cartSummary").innerHTML=`${cart.map(x=>{const p=findProduct(x.id);return `<div class="summary-line"><span>${esc(p.name)} × ${x.qty}</span><b>${fmt(p.price*x.qty)}</b></div>`}).join("")}<div class="summary-total"><span>Total</span><span>${fmt(total)}</span></div>`;
 if(checkout){checkout.removeAttribute("aria-disabled");checkout.dataset.disabled="false";}
}
function renderSummary(target){
 const el=$(target);if(!el)return;
 const params=new URLSearchParams(location.search);
 const websiteOrder=params.get("orderType")==="website"?store.get("websiteOrder",null):null;
 if(websiteOrder){const p=PACKAGES.find(x=>x.id===websiteOrder.packageId),t=WEBSITE_COLLECTION.find(x=>x.id===websiteOrder.templateId);el.innerHTML=`<div class="summary-line"><span>Website</span><b>${esc(p?.name||"Custom")}</b></div><div class="summary-line"><span>Template</span><b>${esc(t?.name||"Fondasi pilihan")}</b></div><div class="summary-line"><span>Scope</span><b>${esc(p?.scope||"Custom")}</b></div><div class="summary-total"><span>Harga mulai</span><span>${fmt(p?.price||0)}</span></div><p class="tiny">Harga final mengikuti scope, materi, integrasi dan kebutuhan produksi yang disepakati.</p>`;return;}
 const cart=getCart(),total=cart.reduce((s,x)=>s+(findProduct(x.id)?.price||0)*x.qty,0);
 el.innerHTML=cart.length?cart.map(x=>{const p=findProduct(x.id);return `<div class="summary-line"><span>${esc(p.name)} × ${x.qty}</span><b>${fmt(p.price*x.qty)}</b></div>`}).join("")+`<div class="summary-total"><span>Total</span><span>${fmt(total)}</span></div>`:'<p class="tiny">Keranjang kosong.</p>';
}
function renderDetail(){
 const el=$("#productDetail");if(!el)return;
 const p=findProduct(new URLSearchParams(location.search).get("id"));
 const reviews=store.get("reviews_"+p.id,[]);
 const account=store.get("account",null); const eligible=account && store.get("orders",[]).some(o=>["paid","processing","shipped","delivered","completed"].includes(o.status) && Array.isArray(o.items) && o.items.some(i=>i.id===p.id));
 const avg=reviews.length?(reviews.reduce((a,r)=>a+r.rating,0)/reviews.length).toFixed(1):"—";
 el.innerHTML=`<div class="breadcrumb"><a href="products.html">Store</a> / ${esc(p.name)}</div>
 <div class="product-detail-layout commerce-detail">
  <div>
   <div class="detail-art">${art(p)}</div>
   <div class="experience-switch"><button class="active" type="button">DESKTOP</button><button type="button">MOBILE</button><a class="mini-link" href="demo.html?id=${encodeURIComponent(p.id)}">Open live demo ↗</a></div>
   <div class="live-preview"><div class="preview-browser"><div class="demo-bar"><i></i><i></i><i></i><span>${esc(p.name.toLowerCase().replace(/[^a-z0-9]+/g,"-"))}.demo</span></div><div class="preview-screen">${art(p)}</div></div></div>
   <div class="detail-tabs">
    <h2>Tentang produk</h2><p>${esc(p.desc)}</p>
    <h2>Fitur & spesifikasi</h2><ul>${p.features.map(f=>`<li>${esc(f)}</li>`).join("")}</ul>
    <h2>What's included</h2><ul><li>File / license sesuai tipe produk</li><li>Panduan penggunaan atau instalasi bila tersedia</li><li>Informasi dukungan dan update</li></ul>
    <h2>FAQ</h2><div class="faq-list">
      <details open><summary>Apakah saya bisa bertanya dulu?</summary><p>Bisa. Gunakan tombol WhatsApp untuk bertanya sebelum membeli.</p></details>
      <details><summary>Apakah produk bisa dikustomisasi?</summary><p>Jika tersedia, opsi kustomisasi ditampilkan di halaman ini. Untuk kebutuhan khusus, kirim pertanyaan melalui WhatsApp.</p></details>
      <details><summary>Bagaimana proses setelah membeli?</summary><p>Untuk produk fisik, alamat dan pilihan pengiriman diisi saat checkout. Produk digital mengikuti metode delivery yang tercantum.</p></details>
      <details><summary>Apakah saya bisa checkout langsung?</summary><p>Bisa. Tambahkan produk ke keranjang lalu lanjutkan ke checkout.</p></details>
    </div>
    <h2>Review pelanggan</h2>
    <div class="review-summary"><strong>${avg}</strong><span>★</span><small>${reviews.length} customer review${reviews.length===1?"":"s"}</small></div>
    ${reviews.length?reviews.map(r=>`<article class="review-item"><div><strong>${esc(r.name)}</strong><span class="verified-badge">Customer review</span></div><div class="stars">${"★".repeat(r.rating)}${"☆".repeat(5-r.rating)}</div><p>${esc(r.text)}</p><small>${new Date(r.createdAt).toLocaleDateString("id-ID")}</small></article>`).join(""):'<div class="notice">Belum ada review terverifikasi untuk produk ini. Review pelanggan akan tersedia setelah sistem order produksi terhubung.</div>'}
    ${eligible?`<form id="reviewForm" class="review-form"><h3>Bagikan pengalaman Anda</h3><label>Rating<select name="rating" required><option value="5">5 — Sangat baik</option><option value="4">4 — Baik</option><option value="3">3 — Cukup</option></select></label><label>Review<textarea name="text" rows="4" required placeholder="Ceritakan pengalaman Anda..."></textarea></label><button class="button button-dark" type="submit">Kirim review</button></form>`:'<div class="review-login"><p>Sudah membeli produk ini? Login untuk menulis review setelah pesanan selesai.</p><a class="button" href="account.html?next=${encodeURIComponent(location.href)}">Login / Daftar</a></div>'}
   </div>
  </div>
  <aside class="detail-info sticky-detail">
   <div class="product-meta">${esc(p.type.toUpperCase())} · ${esc(p.category.toUpperCase())}</div>
   <h2>${esc(p.name)}</h2><p>${esc(p.desc)}</p><div class="price">${fmt(p.price)}</div>
   <div class="delivery-box"><strong>Delivery</strong><span>✓ Pilihan pengiriman ditampilkan saat checkout</span><span>✓ Same Day / Regular / Cargo bila produk & lokasi mendukung</span></div>
   <button class="button button-dark full" type="button" onclick="addCart('${esc(p.id)}')">Tambah ke keranjang ${icon("cart")}</button>
   <button class="button full" type="button" onclick="buyNow('${esc(p.id)}')">Beli sekarang ${icon("arrow")}</button>
   <a class="button whatsapp-button full" href="${productWhatsApp(p)}" target="_blank" rel="noopener">Tanya via WhatsApp ↗</a>
   <a class="mini-link" href="booking.html?service=${encodeURIComponent("Kustomisasi "+p.name)}">Butuh kustomisasi?</a>
  </aside>
 </div>`;
 $("#reviewForm")?.addEventListener("submit",e=>{
   e.preventDefault();
   const data=Object.fromEntries(new FormData(e.currentTarget));
   const arr=store.get("reviews_"+p.id,[]);
   arr.push({name:account.name,rating:Number(data.rating),text:data.text,createdAt:new Date().toISOString(),verified:true});
   store.set("reviews_"+p.id,arr);renderDetail();showToast("Review tersimpan di demo lokal.");
 });
}
function buyNow(id){addCart(id);location.href="checkout.html";}
function renderCollection(){
 const grid=$("#websiteCollectionGrid");if(!grid)return;
 const q=($("#collectionSearch")?.value||"").toLowerCase(),cat=$("#collectionCategory")?.value||"All",packageId=new URLSearchParams(location.search).get("package");
 const list=WEBSITE_COLLECTION.filter(x=>(cat==="All"||x.category===cat)&&(x.name+" "+x.category+" "+x.style).toLowerCase().includes(q)&&(x.status==="active")&&(!packageId||!x.availablePackages||x.availablePackages.includes(packageId)));
 grid.innerHTML=list.map(x=>`<article class="collection-card"><div class="collection-visual"><span>${esc(x.category.toUpperCase())}</span><b>${esc(x.name)}</b><small>${esc(x.style)}</small></div><div class="collection-info"><div><span>${esc(x.category)}</span><b>${esc(x.name)}</b></div><p>${esc(x.desc)}</p><div><a class="button button-dark small" href="${esc(x.demo)}${x.demo.includes("?")?"&":"?"}package=${encodeURIComponent(packageId||((x.availablePackages&&x.availablePackages[0])||"business"))}">Experience website ${icon("arrow")}</a><a class="mini-link" href="website-order.html?package=${encodeURIComponent(packageId||((x.availablePackages&&x.availablePackages[0])||"business"))}&template=${encodeURIComponent(x.id)}">Pesan</a></div></div></article>`).join("")||`<div class="empty-state">Koleksi untuk kategori ini sedang kami kembangkan. <a class="text-link" href="booking.html?service=${encodeURIComponent("Request website "+cat)}">Request website kategori ini ↗</a></div>`;
}

function setupCollection(){
 const s=$("#collectionSearch"),c=$("#collectionCategory");
 if((s||c)?.dataset?.bound)return;
 if(s||c){(s||c).dataset.bound="true";}
 if(window.BB_CATEGORY_PAGE && c){c.innerHTML=WEBSITE_CATEGORIES.map(x=>`<option>${x}</option>`).join("");c.value=window.BB_CATEGORY_PAGE.category;renderCollection();return;}
 if(!s&&!c)return;
 if(c){c.innerHTML=WEBSITE_CATEGORIES.map(x=>`<option>${x}</option>`).join("");const requested=new URLSearchParams(location.search).get("category");if(requested&&WEBSITE_CATEGORIES.includes(requested))c.value=requested;}
 s?.addEventListener("input",renderCollection);c?.addEventListener("change",renderCollection);renderCollection();
}
function header(){
 const h=$(".site-header");if(!h)return;
 const base=location.pathname.includes("/landing/")?"../":"";
 h.innerHTML=`<a class="brand" href="${base}index.html" aria-label="Bali Bagus Dev home"><span class="brand-mark">BB</span><span>BALI BAGUS<small>DEV STUDIO</small></span></a>
 <button class="mobile-toggle" id="menuToggle" aria-label="Buka menu" aria-expanded="false">${icon("menu")}</button>
 <nav class="nav" id="mainNav" aria-label="Navigasi utama"><a href="${base}index.html">Beranda</a><a href="${base}website-collection.html">Websites</a><a href="${base}products.html">Store</a><a href="${base}services.html">Services</a><a href="${base}portfolio.html">Portfolio</a><a href="${base}articles.html">Artikel</a><a href="${base}contact.html">Kontak</a></nav>
 <div class="header-actions"><a class="icon-btn account-link" href="${base}account.html" aria-label="Akun">${isLogged()?"●":"○"} Akun</a><a class="icon-btn" href="${base}cart.html" aria-label="Keranjang">${icon("cart")}<b id="cartCount">0</b></a><a class="button button-dark small" href="${base}booking.html">Konsultasi ${icon("arrow")}</a></div>`;
 const page=location.pathname.split("/").pop()||"index.html";
 h.querySelectorAll(".nav a").forEach(a=>{if(a.getAttribute("href").split("?")[0]===page)a.classList.add("active");a.addEventListener("click",()=>{if(innerWidth<=800){mainNav.classList.remove("open");menuToggle.setAttribute("aria-expanded","false")}})});
 const menuToggle=$("#menuToggle"),mainNav=$("#mainNav");
 menuToggle?.addEventListener("click",()=>{const open=mainNav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(open));menuToggle.innerHTML=icon(open?"close":"menu")});
}
function setupCheckoutGuard(){
 const link=$("#checkoutLink");if(!link)return;
 link.addEventListener("click",e=>{if(link.dataset.disabled==="true"){e.preventDefault();showToast("Tambahkan produk terlebih dahulu.");return}if(!requireLogin("checkout.html"))e.preventDefault()});
}
function setupAccount(){
 const box=$("#accountState");if(!box||box.dataset.bound)return;if(box)box.dataset.bound="true";
 const a=store.get("account",null);
 if(a){
   box.innerHTML=`<div class="account-welcome"><span class="eyebrow">ACCOUNT / ACTIVE</span><h2>Halo, ${esc(a.name)}.</h2><p>${esc(a.email)}</p><div class="account-grid"><div><b>Pesanan</b><small>${store.get("orders",[]).length} demo order</small></div><div><b>Review</b><small>Review pelanggan tersedia setelah pembelian</small></div><div><b>Wishlist</b><small>Siap diaktifkan</small></div><div><b>Alamat</b><small>Disimpan di checkout/backend</small></div></div><button id="logoutButton" class="button">Keluar</button></div>`;
   $("#logoutButton")?.addEventListener("click",()=>{store.set("account",null);location.reload()});
 }else{
   box.innerHTML=`<form id="loginForm" class="form-card account-form"><div class="eyebrow">ACCOUNT / LOGIN</div><h2>Masuk untuk melanjutkan.</h2><p class="tiny">Akun menjadi pusat pesanan, alamat, wishlist, download, dan review terverifikasi.</p><label>Nama lengkap<input name="name" required autocomplete="name"></label><label>Email<input name="email" type="email" required autocomplete="email"></label><button class="button button-dark full" type="submit">Masuk / Buat akun</button></form>`;
   $("#loginForm")?.addEventListener("submit",e=>{e.preventDefault();const d=Object.fromEntries(new FormData(e.currentTarget));store.set("account",{name:d.name,email:d.email,loggedIn:true,createdAt:new Date().toISOString()});const next=new URLSearchParams(location.search).get("next")||"account.html";location.href=next});
 }
}
function setupWebsiteOrder(){
 const form=$("#websiteOrderForm");if(!form||form.dataset.bound)return;form.dataset.bound="true";
 const params=new URLSearchParams(location.search),packageId=params.get("package")||"starter",templateId=params.get("template")||"";
 const p=PACKAGES.find(x=>x.id===packageId)||PACKAGES[0],t=WEBSITE_COLLECTION.find(x=>x.id===templateId);
 if($("#orderPackage")){ $("#orderPackage").value=`${p.name} — ${fmt(p.price)} mulai`; $("#orderPackageId").value=p.id; }
 if($("#orderTemplate")){ $("#orderTemplate").value=t?`${t.name} — ${t.category}`:"Belum memilih template"; $("#orderTemplateId").value=t?t.id:""; }
 if($("#orderWhatsApp")){
  $("#orderWhatsApp").addEventListener("click",()=>{
   if(!form.reportValidity())return;
   const data=Object.fromEntries(new FormData(form));
   const message=`Halo Bali Bagus Dev, saya ingin memesan website.\n\nPaket: ${p.name} — ${fmt(p.price)} mulai\nTemplate: ${t?t.name:"Belum memilih template"}\nKategori: ${t?t.category:"-"}\nNama: ${data.name||"-"}\nEmail: ${data.email||"-"}\nWhatsApp: ${data.phone||"-"}\nNama bisnis: ${data.business||"-"}\nKebutuhan/catatan: ${data.details||"-"}\n\nSaya ingin melanjutkan pembahasan pemesanan.`;
   const url=whatsappUrl(message); if(url.includes("6281234567890")) showToast("Nomor WhatsApp demo masih perlu diganti di konfigurasi."); window.open(url,"_blank","noopener");
  });
 }
 form.addEventListener("submit",e=>{e.preventDefault();const data=Object.fromEntries(new FormData(form));store.set("websiteOrder",{...data,packageId:p.id,templateId:t?.id||"",createdAt:new Date().toISOString()});requireLogin(`checkout.html?orderType=website&package=${encodeURIComponent(p.id)}&template=${encodeURIComponent(t?.id||"")}`)});
}

function setupForms(){
 if(document.body.dataset.formsBound)return;document.body.dataset.formsBound="true";
 const co=$("#checkoutForm");
 if(co)co.addEventListener("submit",e=>{
   e.preventDefault();
   if(!requireLogin(location.href))return;
   const params=new URLSearchParams(location.search),isWebsite=params.get("orderType")==="website";
   if(isWebsite){const wo=store.get("websiteOrder",null),wp=wo&&PACKAGES.find(x=>x.id===wo.packageId),wt=wo&&WEBSITE_COLLECTION.find(x=>x.id===wo.templateId);if($("#checkoutOrderType"))$("#checkoutOrderType").value="website";if($("#checkoutPackageId"))$("#checkoutPackageId").value=wo?.packageId||"";if($("#checkoutTemplateId"))$("#checkoutTemplateId").value=wo?.templateId||"";if($("#websiteOrderNote")){$("#websiteOrderNote").style.display="block";$("#websiteOrderNote").textContent=`${wp?.name||"Website"} · ${wt?.name||"Fondasi pilihan"} · ${fmt(wp?.price||0)} mulai`;}}
   const cart=getCart();
   if(!cart.length&&!isWebsite){$("#checkoutResult").innerHTML='<span class="form-status">Keranjang kosong.</span>';return}
   const data=Object.fromEntries(new FormData(co));
   const websiteOrder=isWebsite?store.get("websiteOrder",null):null;
   const order={id:"ORDER-"+Date.now(),type:isWebsite?"website":"digital",customer:data,items:isWebsite?[]:cart,status:"payment-pending-demo",createdAt:new Date().toISOString(),shipping:data.shipping||"Regular",website:websiteOrder?{packageId:websiteOrder.packageId,templateId:websiteOrder.templateId}:null};
   const orders=store.get("orders",[]);orders.push(order);store.set("orders",orders);if(!isWebsite)saveCart([]);
   $("#checkoutResult").innerHTML=`<span class="form-status">Pesanan <b>${esc(order.id)}</b> tercatat sebagai demo. Pada production, pembayaran, email dan WhatsApp follow-up akan diproses backend.</span>`;
   renderSummary("#checkoutSummary");
 });
 const bf=$("#bookingForm");if(bf)bf.addEventListener("submit",e=>{e.preventDefault();const data=Object.fromEntries(new FormData(bf));const arr=store.get("bookings",[]);arr.push({...data,id:"BB-"+Date.now(),status:"inquiry-demo",createdAt:new Date().toISOString()});store.set("bookings",arr);$("#bookingResult").innerHTML='<span class="form-status">Permintaan tersimpan sebagai demo lokal.</span>';});
 const cf=$("#contactForm");if(cf)cf.addEventListener("submit",e=>{e.preventDefault();const arr=store.get("messages",[]);arr.push({...Object.fromEntries(new FormData(cf)),id:"MSG-"+Date.now(),status:"demo-local"});store.set("messages",arr);$("#contactResult").innerHTML='<span class="form-status">Pesan tersimpan sebagai demo lokal.</span>';});
}
function setupSearch(){
 const b=$("#searchButton");b?.addEventListener("click",()=>{const q=$("#globalSearch").value.trim(),cat=$("#searchCategory").value;location.href=(cat==="service"?"services.html":cat==="article"?"articles.html":cat==="product"?"products.html":"products.html")+(q?"?q="+encodeURIComponent(q):"")});
 const q=new URLSearchParams(location.search).get("q");if(q&&$("#catalogSearch"))$("#catalogSearch").value=q;
 function filter(){const q=($("#catalogSearch")?.value||"").toLowerCase(),cat=$("#productFilter")?.value||"all",sort=$("#sortProducts")?.value||"featured";let list=allProducts().filter(p=>(cat==="all"||p.category===cat)&&(p.name+" "+p.desc+" "+p.category+" "+p.type).toLowerCase().includes(q));if(sort==="low")list.sort((a,b)=>a.price-b.price);if(sort==="high")list.sort((a,b)=>b.price-a.price);renderProducts("#allProducts",list)}
 $("#catalogSearch")?.addEventListener("input",filter);$("#productFilter")?.addEventListener("change",filter);$("#sortProducts")?.addEventListener("change",filter);if($("#allProducts"))filter();
}
document.addEventListener("DOMContentLoaded",()=>{
 setupCollection();setupAccount();setupWebsiteOrder();
 const p=$("#productFilter");if(p)p.innerHTML=`<option value="all">Semua kategori</option>${[...new Set(allProducts().map(x=>x.category))].map(x=>`<option>${esc(x)}</option>`).join("")}`;
});
window.addCart=addCart;window.buyNow=buyNow;window.removeCart=removeCart;window.changeQty=changeQty;

