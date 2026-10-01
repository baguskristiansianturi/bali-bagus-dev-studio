/* Bali Bagus Dev Studio — V2 frontend core
   Frontend saat ini berjalan sebagai katalog dan alur pemesanan awal. Integrasi transaksi production akan ditambahkan bertahap.
*/
const CORE_PRODUCTS=[
{id:"bali-car-rental-starter",name:"Bali Bagus Car Rental — One Page",category:"Starter",type:"Website Starter",price:1250000,old:0,tag:"STARTER · NEW",desc:"Website rental mobil Bali satu halaman dengan hero, 6 pilihan mobil, galeri foto, kontak, alamat, FAQ, dan booking langsung via WhatsApp.",features:["1 halaman responsive","6 fleet cards & starting price","Photo gallery","Contact + address section","Direct WhatsApp CTA","FAQ & mobile-first layout"],visual:"shop",status:"available",url:"https://baguskristiansianturi.github.io/Bali-Bagus-Car-Rental/"},
{id:"barber",name:"Barbershop Website Kit",category:"Business",type:"Website Template",price:790000,old:1190000,tag:"BARBER SPECIAL",desc:"Template barbershop modern dengan halaman layanan, galeri, booking CTA, dan struktur responsif.",features:["Responsive desktop & mobile","Homepage, layanan, galeri, kontak","Struktur SEO dasar","Panduan instalasi","Opsi kustomisasi"],visual:"barber"},
{id:"villa",name:"Hospitality & Villa Template",category:"Hospitality",type:"Website Template",price:1250000,old:1590000,tag:"NEW",desc:"Fondasi website hospitality untuk menampilkan properti, fasilitas, pengalaman menginap, lokasi, dan jalur reservasi secara jelas.",features:["Responsive desktop & mobile","Halaman kamar dan fasilitas","Galeri & CTA reservasi","Struktur SEO dasar","Preview konsep"],visual:"villa"},
{id:"commerce",name:"Commerce Launch Kit",category:"Commerce",type:"E-commerce UI Kit",price:990000,old:0,tag:"DIGITAL KIT",desc:"Fondasi storefront untuk brand retail yang ingin menampilkan katalog secara profesional.",features:["Product listing UI","Product detail UI","Cart & checkout interface","Responsive components","UI customization"],visual:"shop"},
{id:"blogger",name:"Editorial Blogger Template",category:"Blogger",type:"Blogger Template",price:350000,old:0,tag:"BLOGGER",desc:"Template editorial untuk blog bisnis, dan konten edukasi dengan tata letak yang rapi.",features:["Layout artikel & kategori","Responsive design","Struktur widget siap dikembangkan","Typography system","Panduan pemasangan"],visual:"shop"},
{id:"landing",name:"Conversion Landing Page Kit",category:"Business",type:"Landing Page",price:490000,old:0,tag:"QUICK START",desc:"Landing page kit untuk memperkenalkan penawaran, mengarahkan CTA, dan mengumpulkan leads.",features:["Hero & CTA sections","Benefit & FAQ sections","Responsive layout","Lead form UI","Easy customization"],visual:"barber"},
{id:"dashboard",name:"Business Dashboard UI",category:"Commerce",type:"UI Kit",price:650000,old:0,tag:"UI KIT",desc:"Komponen antarmuka dashboard bisnis untuk mempercepat eksplorasi produk aplikasi.",features:["Dashboard components","Tables & status UI","Responsive patterns","Reusable design tokens","Struktur komponen siap dikembangkan"],visual:"villa"}
];

const PACKAGES=[
{id:"starter",name:"Starter",price:1250000,tag:"ONLINE PRESENCE",desc:"Untuk online presence sederhana. Website satu halaman untuk bisnis yang membutuhkan kehadiran digital yang rapi dan jelas.",scope:"1 halaman",time:"± 5–7 hari kerja",features:["1 halaman responsive","Logo, nomor & alamat bisnis","6 kartu produk / layanan","Galeri foto","Kontak + tombol WhatsApp","Basic technical SEO","2x revisi tampilan"]},
{id:"business",name:"Business",price:2900000,tag:"COMPANY PROFILE",desc:"Untuk company profile dan service business. Website multi-halaman dengan struktur yang lebih lengkap untuk membangun kepercayaan.",scope:"Hingga 5 halaman",time:"± 7–12 hari kerja",features:["Hingga 5 halaman","Responsive desktop / tablet / mobile","Form & CTA terstruktur","Basic technical SEO","Google Analytics/Search Console setup","3x revisi tampilan"],featured:false},
{id:"growth",name:"Growth",price:5500000,tag:"CONTENT & LEADS",desc:"Untuk content dan lead generation. Website yang siap dikembangkan dengan blog, landing pages, dan fondasi pengukuran.",scope:"Hingga 8 halaman",time:"± 10–16 hari kerja",features:["Hingga 8 halaman","Blog / article structure","SEO technical foundation","Analytics & conversion events","Lead form flow","4x revisi tampilan"]},
{id:"commerce",name:"Commerce",price:8500000,tag:"ONLINE SELLING",desc:"Untuk online selling. Fondasi toko online dengan katalog, keranjang, checkout, dan integrasi pembayaran sesuai kebutuhan.",scope:"E-commerce",time:"± 14–25 hari kerja",features:["Katalog & detail produk","Cart & checkout flow","Payment gateway integration*","Order flow","Basic admin integration*","Testing & handover"],note:"*Biaya gateway, hosting, domain, plugin, dan layanan pihak ketiga dapat terpisah."},
{id:"custom",name:"Custom Web App",price:15000000,tag:"CUSTOM WORKFLOW",desc:"Untuk workflow khusus. Aplikasi web dengan alur pengguna, dashboard, dan integrasi yang dirancang berdasarkan kebutuhan bisnis.",scope:"Custom scope",time:"± 21–40 hari kerja",features:["Requirement mapping","User flow & dashboard","Authentication / roles sesuai scope","API integration sesuai scope","Testing & documentation","Deployment assistance"]},
{id:"system",name:"Business System",price:27000000,tag:"MULTI-ROLE OPERATIONS",desc:"Untuk operasional multi-role. Sistem web kompleks dengan modul, role, data, dan integrasi yang lebih luas.",scope:"Full custom",time:"± 30–60+ hari kerja",features:["Discovery & system architecture","Multi-role workflow","Dashboard & reporting","API / third-party integration","QA & acceptance testing","Deployment & handover"],note:"Harga awal. Estimasi final ditetapkan setelah scope, integrasi, dan kebutuhan infrastruktur disepakati."}
];

const DEMOS=[
{id:"villa",category:"Hospitality",businessType:"Villa / hospitality",name:"Villa / Hospitality",title:"THE ART OF",em:"SLOW LIVING.",desc:"Preview website hospitality yang menata informasi properti, fasilitas, pengalaman menginap, galeri, dan jalur reservasi.",direction:"Editorial hospitality · calm premium",goal:"Membantu calon tamu memahami pengalaman, fasilitas, dan langkah reservasi.",features:["Room / stay showcase","Facilities & gallery","Reservation CTA","Responsive mobile experience"],pages:["Home","Rooms / Stay","Facilities","Experience","Location / Contact"]},
{id:"barber",category:"Local Business",businessType:"Barbershop / service business",name:"Barbershop / Service",title:"GOOD CUTS.",em:"GOOD ENERGY.",desc:"Preview pengalaman website dan booking flow untuk bisnis jasa lokal.",direction:"Bold service-led · modern",goal:"Membuat layanan mudah dipahami dan booking mudah ditemukan.",features:["Services","Barber profiles","Gallery","Booking CTA"],pages:["Home","Services","Barbers","Gallery","Booking"]},
{id:"commerce",category:"Retail & Commerce",businessType:"Retail / commerce",name:"Retail / Commerce",title:"EVERYDAY",em:"ESSENTIALS.",desc:"Preview storefront dengan fokus pada penemuan produk, detail yang jelas, dan jalur pembelian.",direction:"Editorial commerce · product-first",goal:"Membantu pengunjung menemukan produk lalu menuju detail dan pembelian.",features:["Product discovery","Category navigation","Product detail","Conversion CTA"],pages:["Home","Collection","Product Detail","About","Contact"]},
{id:"corporate",category:"Professional Services",businessType:"Company / professional service",name:"Company Profile",title:"BUILT FOR",em:"THE NEXT STEP.",desc:"Preview company profile untuk perusahaan, studio, agency, dan layanan profesional.",direction:"Editorial corporate · structured",goal:"Menjelaskan capability, proof, dan langkah kontak secara ringkas.",features:["Service architecture","Capability sections","Trust / proof area","Lead CTA"],pages:["Home","About","Services","Work / Proof","Contact"]},
{id:"restaurant",category:"Hospitality",businessType:"Restaurant / F&B",name:"Restaurant / F&B",title:"GOOD FOOD.",em:"GOOD PLACE.",desc:"Preview website F&B yang menata menu, cerita brand, lokasi, dan reservasi.",direction:"Editorial food · visual menu",goal:"Membantu pengunjung memahami menu, lokasi, dan cara reservasi.",features:["Menu showcase","Story","Location","Reservation CTA"],pages:["Home","Menu","Story","Location","Reservation"]},
{id:"tour",category:"Travel & Mobility",businessType:"Tour / travel",name:"Tour & Travel",title:"GO",em:"SOMEWHERE.",desc:"Preview website travel untuk paket perjalanan, itinerary, inquiry, dan informasi kepercayaan.",direction:"Travel utility · conversion-focused",goal:"Membantu calon pelanggan membandingkan paket dan mengirim inquiry.",features:["Package cards","Itinerary","Inquiry flow","Trust / FAQ"],pages:["Home","Packages","Itinerary","FAQ","Inquiry"]}
];

const CLIENTS=[];

const fmt=n=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(n);
const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
const store={get(k,d=[]){try{return JSON.parse(localStorage.getItem("bb_"+k))??d}catch{return d}},set(k,v){try{localStorage.setItem("bb_"+k,JSON.stringify(v));return true}catch(e){showToast("Penyimpanan browser tidak tersedia.");return false}}};
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
 const f=$("#siteFooter");if(!f)return;
 const base=(location.pathname.includes("/landing/")||location.pathname.includes("/website-category/"))?"../":"";
 f.className="site-footer";
 f.innerHTML=`<div class="wrap footer-wrap">
  <div class="footer-main">
   <div class="footer-brand">
    <a class="footer-logo" href="${base}index.html" aria-label="Bali Bagus Dev Studio home"><span class="brand-mark">BB</span><span>BALI BAGUS<small>DEV STUDIO</small></span></a>
    <p>Digital products and services built around real business needs — from launch to growth.</p>
    <div class="footer-socials"><a href="https://wa.me/628218187917" target="_blank" rel="noopener">WhatsApp ↗</a><span>Instagram · @bbstudio</span></div>
   </div>
   <div class="footer-nav-group"><b>EXPLORE</b><a href="${base}services.html">Solutions</a><a href="${base}products.html">Products</a><a href="${base}website-collection.html">Websites</a><a href="${base}portfolio.html">Work</a></div>
   <div class="footer-nav-group"><b>STUDIO</b><a href="${base}about.html">About</a><a href="${base}articles.html">Insights</a><a href="${base}booking.html">Start a project</a><a href="${base}contact.html">Contact</a></div>
   <div class="footer-nav-group"><b>SUPPORT</b><a href="${base}help.html">Help Center</a><a href="${base}faq.html">FAQ</a><a href="${base}cart.html">Cart</a><a href="${base}account.html">${isLogged()?"Account":"Sign in"}</a></div>
  </div>
  <div class="footer-bottom"><span>© 2026 Bali Bagus Dev Studio</span><span>Design · Technology · Growth</span><span>credit by bagus dev</span></div>
 </div>`;
}
const FAQ_DATA=[
 {cat:"Produk Digital",q:"Apa saja produk yang tersedia?",a:"Katalog berisi template website, UI kit, content kit, dan produk digital lain yang ditampilkan dengan harga, fitur, serta preview. Status produk ditampilkan secara terbuka."},
 {cat:"Produk Digital",q:"Apakah template bisa dikustomisasi?",a:"Ya. Produk tertentu dapat dikembangkan melalui layanan customization atau custom website. Scope disepakati sebelum pengerjaan."},
 {cat:"Website",q:"Apakah Bali Bagus Dev menerima custom website?",a:"Ya. Custom website dimulai dari discovery untuk memahami bisnis, target pengguna, struktur halaman, fitur, dan prioritas."},
 {cat:"Website",q:"Apakah website responsive?",a:"Frontend studio dirancang untuk desktop, tablet, dan mobile. Setiap proyek tetap melalui penyesuaian sesuai kebutuhan konten dan perangkat."},
 {cat:"Layanan",q:"Layanan apa saja yang tersedia?",a:"Website & E-commerce, Web Apps & Business Systems, Copywriting & Conversion, Blog & Content, SEO & Local Search, Google Ads & Campaign Setup, Maintenance & Support, serta Discovery & Digital Strategy."},
 {cat:"Layanan",q:"Bagaimana menentukan layanan yang saya butuhkan?",a:"Mulai dari kebutuhan atau masalah bisnisnya. Discovery membantu memetakan apakah solusinya website, content, SEO, campaign, aplikasi, atau kombinasi beberapa layanan."},
 {cat:"Konsultasi",q:"Bagaimana cara memulai proyek?",a:"Anda dapat booking konsultasi, mengirim brief melalui contact form, atau menghubungi WhatsApp. Untuk kebutuhan kompleks, discovery digunakan untuk menentukan scope dan prioritas."},
 {cat:"Konsultasi",q:"Apakah tersedia konsultasi berbayar?",a:"Tersedia sesi konsultasi 60 menit dengan biaya Rp990.000. Detail format pertemuan dan kebutuhan proyek dibahas saat booking."},
 {cat:"Pembayaran",q:"Bagaimana metode pembayaran saat ini?",a:"Saat ini pembayaran dilakukan melalui transfer bank BCA ke rekening 1460137710 atas nama Bagus Kristian Sianturi. Setelah transfer, bukti pembayaran dikonfirmasi melalui halaman konfirmasi atau WhatsApp."},
 {cat:"Pembayaran",q:"Bagaimana proses setelah checkout?",a:"Checkout mengumpulkan detail pesanan dan menampilkan rekening BCA. Setelah transfer, buka halaman konfirmasi untuk menyiapkan bukti pembayaran dan lanjutkan konfirmasi melalui WhatsApp. Order otomatis dan verifikasi server akan ditambahkan pada tahap backend."},
 {cat:"Support",q:"Bagaimana support setelah website launch?",a:"Maintenance & Support dapat mencakup update konten, perbaikan bug, pengecekan teknis, performance/SEO maintenance, dan pengembangan lanjutan sesuai scope."},
 {cat:"Support",q:"Apakah ada bantuan melalui WhatsApp?",a:"Ya. WhatsApp dapat digunakan untuk percakapan dan follow-up kebutuhan. Live agent production akan berkembang bersama sistem backend."},
 {cat:"SEO",q:"Apakah Bali Bagus Dev menyediakan SEO?",a:"Ya. Layanannya mencakup technical SEO audit, on-page/local SEO structure, keyword/content mapping, measurement, dan improvement plan."},
 {cat:"Blog & Content",q:"Apakah tersedia jasa penulisan Blog?",a:"Ya. Blog & Content mencakup perencanaan topik, struktur SEO-friendly, konten edukasi/bisnis, content calendar, dan internal linking."},
 {cat:"Launch",q:"Kapan Bali Bagus Dev Studio mulai launching?",a:"Target launch Bali Bagus Dev Studio adalah 27 Oktober 2026. Status fitur ditampilkan transparan karena sebagian sistem production masih dikembangkan."},
 {cat:"Perusahaan",q:"Siapa founder Bali Bagus Dev Studio?",a:"Founder dan owner Bali Bagus Dev Studio adalah Bagus Kristian Sianturi."},
 {cat:"Produk Digital",q:"Apa yang saya dapat setelah membeli produk digital?",a:"Detail file, lisensi, panduan, dan metode delivery mengikuti produk yang dipilih. Halaman produk menjadi sumber informasi utama sebelum pembelian."},
 {cat:"Produk Digital",q:"Apakah semua produk langsung bisa di-download?",a:"Belum tentu. Metode delivery mengikuti tipe produk. Secure digital delivery production akan dihubungkan setelah backend tersedia."},
 {cat:"Website",q:"Apakah domain dan hosting termasuk?",a:"Tergantung paket dan scope. Halaman paket menjelaskan batasannya; kebutuhan domain, hosting, lisensi, dan layanan pihak ketiga dapat dihitung terpisah."},
 {cat:"Website",q:"Berapa lama pengerjaan website?",a:"Estimasi bergantung pada scope, kesiapan materi, revisi, integrasi, dan kompleksitas. Paket menampilkan estimasi awal untuk membantu perencanaan."},
 {cat:"Website",q:"Apakah saya bisa memilih template lalu mengubahnya?",a:"Ya, untuk template yang mendukung customization. Fondasi visual dapat dipilih lebih dahulu lalu kebutuhan bisnis dan scope dibahas."},
 {cat:"Layanan",q:"Apakah Bali Bagus Dev hanya membuat website?",a:"Tidak. Ekosistemnya mencakup website, aplikasi, copywriting, Blog & Content, SEO, campaign, maintenance, dan discovery."},
 {cat:"Layanan",q:"Apakah bisa menggabungkan beberapa layanan?",a:"Bisa. Scope dapat menggabungkan website dengan copywriting, content, SEO, tracking, maintenance, atau kebutuhan lain sesuai prioritas."},
 {cat:"Konsultasi",q:"Berapa biaya konsultasi?",a:"Sesi konsultasi berdurasi 60 menit dengan biaya Rp990.000. Biaya tersebut net; biaya tempat atau venue pertemuan tidak termasuk."},
 {cat:"Konsultasi",q:"Apakah konsultasi bisa online?",a:"Ya. Booking menyediakan pilihan online maupun tatap muka dengan lokasi yang disepakati."},
 {cat:"Konsultasi",q:"Apakah lokasi fisik Bali Bagus Dev sudah tersedia?",a:"Belum. Studio fisik belum tersedia. Pertemuan tatap muka dilakukan di lokasi yang disepakati."},
 {cat:"Support",q:"Bagaimana menghubungi support?",a:"Anda dapat menggunakan halaman Bantuan, FAQ, contact form, atau WhatsApp support untuk follow-up."},
 {cat:"Support",q:"Apakah sudah ada live chat agent?",a:"Belum. Support Assistant saat ini membantu menjawab pertanyaan umum. Live agent membutuhkan integrasi layanan chat."},
 {cat:"SEO",q:"Apakah SEO menjamin ranking Google?",a:"Tidak ada jaminan ranking tertentu. SEO berfokus pada technical foundation, relevansi konten, struktur, measurement, dan perbaikan berkelanjutan."},
 {cat:"Blog & Content",q:"Apakah bisa dibuatkan content calendar?",a:"Ya. Content calendar dapat disusun berdasarkan tujuan bisnis, topik, keyword, funnel, dan kapasitas produksi."},
 {cat:"Launch",q:"Apa yang masih belum tersedia saat launch?",a:"Backend production, payment gateway, authentication production, order processing, admin dashboard, secure delivery, email automation, dan real-time live chat masih berada pada tahap berikutnya."},
 {cat:"Perusahaan",q:"Di mana Bali Bagus Dev berbasis?",a:"Bali, Indonesia. Studio fisik belum tersedia dan detail lokasi dapat diperbarui saat sudah ditetapkan."},
 {cat:"Perusahaan",q:"Siapa yang membangun Bali Bagus Dev Studio?",a:"Founder dan owner adalah Bagus Kristian Sianturi. Tim tambahan akan dibentuk sesuai kebutuhan pengembangan studio."},
];
function renderFAQ(){
 const list=$("#faqList"),cats=$("#faqCategories");if(!list)return;
 const search=$("#faqSearch");
 const categories=["Semua",...new Set(FAQ_DATA.map(x=>x.cat))];let active="Semua";
 const drawCats=()=>{if(cats)cats.innerHTML=categories.map(x=>'<button class="'+(x===active?"active":"")+'" data-faq-cat="'+esc(x)+'">'+esc(x)+"</button>").join("")};
 const draw=()=>{const q=(search?.value||"").toLowerCase().trim();const items=FAQ_DATA.filter(x=>(active==="Semua"||x.cat===active)&&(!q||(x.q+" "+x.a+" "+x.cat).toLowerCase().includes(q)));list.innerHTML=items.map((x,i)=>'<details class="faq-item"><summary><span>'+String(i+1).padStart(2,"0")+' / '+esc(x.cat)+'</span><b>'+esc(x.q)+'</b><i>+</i></summary><div><p>'+esc(x.a)+'</p><a href="help.html" class="text-link">Butuh bantuan lebih lanjut ↗</a></div></details>').join("");$("#faqEmpty")?.toggleAttribute("hidden",items.length>0)};
 drawCats();draw();search?.addEventListener("input",draw);cats?.addEventListener("click",e=>{const b=e.target.closest("[data-faq-cat]");if(!b)return;active=b.dataset.faqCat;drawCats();draw()});
}
function helpAnswer(q){
 const s=q.toLowerCase();
 if(/payment|bayar|pembayaran|gateway|checkout|qris|transfer|kartu/.test(s))return "Payment gateway produksi belum aktif. Checkout frontend saat ini sudah mendukung alur pesanan, transfer BCA, dan konfirmasi WhatsApp; data masih tersimpan di browser sampai backend production tersedia.";
 if(/domain|hosting/.test(s))return "Domain dan hosting bergantung pada paket serta scope. Kebutuhan pihak ketiga dapat dihitung terpisah sesuai proyek.";
 if(/custom|website|web/.test(s))return "Bisa. Untuk custom website, mulai dari discovery agar kebutuhan, struktur, fitur, dan scope dapat ditentukan sebelum development.";
 if(/review|ulasan|testimoni/.test(s))return "Slider ulasan sudah disiapkan, tetapi belum ada ulasan terverifikasi yang ditampilkan. Review production akan muncul setelah sistem order dan verifikasi tersedia.";
 if(/live chat|chat agent|agen/.test(s))return "Support Assistant saat ini menjawab pertanyaan umum berbasis kata kunci. Live agent membutuhkan integrasi layanan chat.";
 if(/support|maintenance|setelah|launch/.test(s))return "Maintenance & Support tersedia sebagai layanan. Scope dapat mencakup update konten, bug fixes, technical checks, performance/SEO maintenance, dan improvement.";
 if(/seo|google|search/.test(s))return "Layanan SEO mencakup technical audit, on-page/local SEO, keyword/content mapping, measurement, dan improvement plan.";
 if(/blog|content|artikel|tulis/.test(s))return "Blog & Content mencakup topic planning, struktur SEO-friendly, konten edukasi/bisnis, content calendar, dan internal linking.";
 if(/harga konsultasi|biaya konsultasi|350|60 menit|sesi/.test(s))return "Konsultasi tersedia 60 menit dengan biaya Rp990.000, net. Biaya venue/tempat pertemuan tidak termasuk.";
 if(/lokasi|studio|kantor|alamat/.test(s))return "Bali, Indonesia. Studio fisik belum tersedia; pertemuan tatap muka dilakukan di lokasi yang disepakati.";
 if(/mulai|proyek|project|konsultasi|booking/.test(s))return "Mulai dari booking konsultasi, contact form, atau WhatsApp. Untuk kebutuhan kompleks, discovery digunakan untuk menentukan scope dan prioritas.";
 if(/launch|lounch|tanggal|kapan/.test(s))return "Target launch Bali Bagus Dev Studio adalah 27 Oktober 2026. Fitur production yang belum tersedia tetap ditandai secara transparan.";
 return "Saya belum menemukan jawaban yang cukup spesifik. Coba gunakan kata kunci seperti website, pembayaran, SEO, Blog, support, atau konsultasi. Jika perlu, lanjutkan ke FAQ atau WhatsApp.";
}
function setupFAQ(){renderFAQ()}
function setupHelp(){
 const box=$("#helpMessages"),form=$("#helpChatForm"),input=$("#helpInput");if(!box||!form)return;
 const send=q=>{q=q.trim();if(!q)return;box.insertAdjacentHTML("beforeend",'<div class="chat-message user"><small>Anda</small><p>'+esc(q)+'</p></div><div class="chat-message bot"><small>BB Support</small><p>'+esc(helpAnswer(q))+'</p></div>');box.scrollTop=box.scrollHeight};
 form.addEventListener("submit",e=>{e.preventDefault();send(input.value);input.value=""});
 document.querySelectorAll("[data-help-q]").forEach(b=>b.addEventListener("click",()=>send(b.dataset.helpQ)));
}
const REVIEWS=[];
function setupReviewSlider(){
 const track=$("#reviewTrack"),count=$("#reviewCount"),prev=$("#reviewPrev"),next=$("#reviewNext");if(!track)return;
 if(!REVIEWS.length){track.innerHTML='<article class="review-card review-empty"><span>REVIEWS / READY</span><h3>Ruang ulasan pelanggan sudah disiapkan.</h3><p>Belum ada ulasan terverifikasi yang ditampilkan. Saat review production tersedia, kartu ini akan berubah menjadi slider ulasan tanpa mengubah layout homepage.</p><a href="contact.html" class="button button-dark">Jadi pelanggan pertama ↗</a></article>';if(count)count.textContent="READY";prev?.setAttribute("disabled","true");next?.setAttribute("disabled","true");return}
 let i=0;const draw=()=>{const r=REVIEWS[i];track.innerHTML='<article class="review-card"><span>'+esc(r.meta)+'</span><blockquote>“'+esc(r.text)+'”</blockquote><b>'+esc(r.name)+'</b><small>'+esc(r.role)+'</small></article>';if(count)count.textContent=(i+1)+" / "+REVIEWS.length};prev?.addEventListener("click",()=>{i=(i-1+REVIEWS.length)%REVIEWS.length;draw()});next?.addEventListener("click",()=>{i=(i+1)%REVIEWS.length;draw()});draw();
}

function renderPackages(target="#packagesGrid",limit=6){
 const el=$(target);if(!el)return;
 const labels={starter:"Online presence sederhana",business:"Company profile & service business",growth:"Content & lead generation",commerce:"Online selling",custom:"Workflow khusus",system:"Operasional multi-role"};
 const problems={starter:"Belum punya fondasi online yang rapi.",business:"Butuh company profile yang lebih lengkap dan meyakinkan.",growth:"Sudah punya website dan ingin membangun content serta leads.",commerce:"Ingin menampilkan katalog dan menyiapkan alur penjualan online.",custom:"Kebutuhan bisnis tidak cocok dengan website standar.",system:"Operasional membutuhkan alur multi-role, data, dan integrasi khusus."};
 el.innerHTML=PACKAGES.slice(0,limit).map(p=>`<article class="package-card ${p.featured?"featured":""}">
   <div class="eyebrow">${esc(p.tag)}</div><h3>${esc(p.name)}</h3>
   <div class="package-fit"><span>UNTUK</span><b>${esc(labels[p.id]||p.tag)}</b><small>${esc(problems[p.id]||"Scope disusun berdasarkan kebutuhan bisnis.")}</small></div>
   <p>${esc(p.desc)}</p>
   <div class="package-price">${fmt(p.price)} <small>mulai</small></div>
   <div class="package-note">${esc(p.scope)} · ${esc(p.time)}</div>
   <div class="package-includes"><span>TERMASUK</span><ul>${p.features.map(f=>`<li>${esc(f)}</li>`).join("")}</ul></div>
   <a class="button ${p.featured?"button-dark":""}" href="website-collection.html?package=${encodeURIComponent(p.id)}">Lihat website dalam paket ${icon("arrow")}</a>
   ${p.note?`<div class="package-note"><b>Catatan:</b> ${esc(p.note)}</div>`:""}
 </article>`).join("");
}
function renderPackageExperience(){
 const el=$("#packageExperience");if(!el)return;
 const id=new URLSearchParams(location.search).get("id")||"starter";
 const p=PACKAGES.find(x=>x.id===id)||PACKAGES[0];
 const isStarter=p.id==="starter";
 const isBusiness=p.id==="business";
 const examples=WEBSITE_COLLECTION.filter(x=>x.status==="active"&&(!x.availablePackages||x.availablePackages.includes(p.id))).slice(0,7);
 const allCats=WEBSITE_CATEGORIES.filter(x=>x!=="All");
 const pages=isStarter?["Home / Hero","Services atau Offer","Gallery / Portfolio","Contact / WhatsApp","FAQ"]:isBusiness?["Home","About","Services","Gallery / Portfolio","Contact"]:["Home","About","Services","Gallery","Content / Blog","Contact"];
 const upgrades=isStarter?[
  ["Business","Rp2.900.000","Hingga 5 halaman","Tambah About, Services, Gallery, Contact dan struktur bisnis yang lebih lengkap.","website-package.html?id=business"],
  ["Growth","Rp5.500.000","Hingga 8 halaman","Untuk bisnis yang mulai membutuhkan content, lead generation dan fondasi SEO yang lebih luas.","website-package.html?id=growth"],
  ["Commerce","Rp8.500.000","E-commerce","Untuk katalog, cart, checkout dan alur order yang membutuhkan integrasi produksi.","website-package.html?id=commerce"]
 ]:[["Growth","Rp5.500.000","Hingga 8 halaman","Tambahan ruang untuk content, landing pages dan conversion measurement.","website-package.html?id=growth"],["Commerce","Rp8.500.000","E-commerce","Katalog, cart, checkout dan integrasi pembayaran sesuai scope.","website-package.html?id=commerce"],["Custom Web App","Rp15.000.000","Custom scope","Naik dari website ke aplikasi ketika kebutuhan sudah membutuhkan workflow dan dashboard.","website-package.html?id=custom"]];
 const comparisonRows=[
  ["Jumlah halaman",isStarter?"1 halaman":"Hingga 5 halaman","Hingga 5 halaman"],
  ["Responsive", "Desktop · Tablet · Mobile","Desktop · Tablet · Mobile"],
  ["Konten utama",isStarter?"Hero, offer, gallery, contact, FAQ":"Home, About, Services, Gallery, Contact","Home, About, Services, Gallery, Contact"],
  ["CTA & inquiry","WhatsApp + contact CTA","CTA terstruktur + form"],
  ["SEO","Basic technical SEO","Basic technical SEO"],
  ["Analytics","—","Google Analytics / Search Console setup"],
  ["Revisi","2×","3×"],
  ["Estimasi",isStarter?"± 5–7 hari":"± 7–12 hari","± 7–12 hari"]
 ];
 el.innerHTML=`
 <div class="breadcrumb"><a href="website-packages.html">Paket website</a> / ${esc(p.name)}</div>
 <section class="package-experience-hero package-detail-premium">
  <div><div class="eyebrow">${esc(p.tag)} / WEBSITE DEVELOPMENT</div><h1>${esc(p.name)}<br><em>${fmt(p.price)} mulai</em></h1><p class="lead">${esc(p.desc)}</p><div class="package-experience-meta"><span>${esc(p.scope)}</span><span>${esc(p.time)}</span><span>Responsive</span><span>CTA siap</span></div></div>
  <aside class="package-experience-summary"><span class="eyebrow">SPEK UTAMA</span><ul>${p.features.map(f=>`<li>✓ ${esc(f)}</li>`).join("")}</ul><div class="package-price-note"><b>${fmt(p.price)}</b><small>harga mulai</small></div><a class="button button-dark full" href="booking.html?package=${encodeURIComponent(p.id)}">Mulai konsultasi ${icon("arrow")}</a></aside>
 </section>
 <section class="section package-spec-section">
  <div class="section-head"><div><div class="eyebrow">01 / WHAT YOU GET</div><h2>Spesifikasi yang <em>jelas.</em></h2><p>Bukan hanya tampilan. Setiap paket punya batas scope, struktur halaman, fitur dan jalur pengembangan yang bisa dipahami sejak awal.</p></div></div>
  <div class="package-spec-grid">
   <article><span>01</span><b>Scope</b><strong>${esc(p.scope)}</strong><small>Struktur halaman mengikuti paket.</small></article>
   <article><span>02</span><b>Responsive</b><strong>Desktop · Tablet · Mobile</strong><small>Tampilan disiapkan untuk berbagai ukuran layar.</small></article>
   <article><span>03</span><b>Timeline</b><strong>${esc(p.time)}</strong><small>Estimasi bergantung materi, revisi dan scope final.</small></article>
   <article><span>04</span><b>CTA</b><strong>Contact · WhatsApp · Inquiry</strong><small>Jalur tindakan dibuat jelas untuk calon pelanggan.</small></article>
  </div>
  <div class="package-page-map"><div><div class="eyebrow">PAGE STRUCTURE</div><h3>Halaman yang disiapkan</h3></div><div class="page-map-list">${pages.map((x,i)=>`<span><b>0${i+1}</b>${esc(x)}</span>`).join("")}</div></div>
 </section>
 <section class="section package-preview-section">
  <div class="section-head"><div><div class="eyebrow">02 / PREVIEW EXPERIENCE</div><h2>Lihat di <em>desktop & mobile.</em></h2><p>Preview interaktif di halaman detail membantu calon klien memahami bagaimana website akan berperilaku sebelum masuk tahap produksi.</p></div></div>
  <div class="package-preview-shell">
   <div class="experience-toolbar"><div><b>RESPONSIVE PREVIEW</b><small>Ganti ukuran layar</small></div><div class="experience-switch" role="group" aria-label="Ukuran preview"><button class="active" type="button" data-package-preview="desktop">DESKTOP</button><button type="button" data-package-preview="tablet">TABLET</button><button type="button" data-package-preview="mobile">MOBILE</button></div></div>
   <div class="live-preview package-live-preview"><div class="preview-window experience-preview" data-mode="desktop">
    <div class="preview-nav"><b>YOUR BUSINESS</b><span>HOME</span><span>SERVICES</span><span>ABOUT</span><span>CONTACT</span></div>
    <div class="preview-hero"><small>${esc(p.name.toUpperCase())} / CONCEPT</small><h2>Built for your<br><em>next business move.</em></h2><p>Struktur website yang jelas, responsive, dan fokus pada kebutuhan pelanggan.</p><button class="button button-dark small" type="button">Mulai konsultasi ↗</button></div>
    <div class="preview-blocks"><div><small>01</small><b>What we offer</b><span>Services, products or packages.</span></div><div><small>02</small><b>Why choose us</b><span>Trust, proof and key benefits.</span></div><div><small>03</small><b>Take action</b><span>Contact, booking or WhatsApp.</span></div></div>
    <div class="preview-footer"><span>YOUR BUSINESS</span><small>Responsive website · ${esc(p.name)} package</small></div>
   </div></div>
  </div>
 </section>
 <section class="section package-upgrade-block">
  <div class="section-head"><div><div class="eyebrow">03 / UPGRADE PATH</div><h2>Mulai sederhana, <em>naik saat bisnis siap.</em></h2><p>Anda tidak harus langsung membangun website besar. Struktur paket disiapkan agar website dapat berkembang ketika kebutuhan bertambah.</p></div></div>
  <div class="upgrade-grid">${upgrades.map((u,i)=>`<a class="upgrade-card" href="${u[4]}"><span>0${i+1} / UPGRADE</span><b>${esc(u[0])}</b><strong>${esc(u[1])}</strong><small>${esc(u[2])}</small><p>${esc(u[3])}</p><i>Lihat detail paket ↗</i></a>`).join("")}</div>
 </section>
 ${isStarter?`<section id="business-comparison" class="section package-compare-detail">
  <div class="section-head"><div><div class="eyebrow">04 / NEXT LEVEL</div><h2>Starter vs <em>Business.</em></h2><p>Business disiapkan sebagai tahap berikutnya ketika satu halaman sudah tidak cukup untuk menjelaskan bisnis, layanan dan informasi penting secara terpisah.</p></div><a class="text-link" href="website-package.html?id=business">Buka konsep Business ↗</a></div>
  <div class="package-compare"><table><thead><tr><th>Spesifikasi</th><th>Starter · ${fmt(PACKAGES[0].price)}</th><th>Business · ${fmt(PACKAGES[1].price)}</th></tr></thead><tbody>${comparisonRows.map(r=>`<tr><th>${esc(r[0])}</th><td>${esc(r[1])}</td><td>${esc(r[2])}</td></tr>`).join("")}</tbody></table></div>
  <div class="business-concept-card"><div><span>BUSINESS / CONCEPT READY</span><h3>Konsep halaman Business sudah disiapkan.</h3><p>Koleksi Business sedang dikembangkan dan akan dipublikasikan setelah siap digunakan. Halaman detail ini menjadi blueprint: Home, About, Services, Gallery, Contact, CTA, form, responsive preview, spesifikasi, harga mulai dan jalur upgrade.</p></div><a class="button button-dark" href="website-package.html?id=business">Lihat konsep Business ${icon("arrow")}</a></div>
 </section>`:`<section class="section package-business-note"><div class="business-concept-card"><div><span>BUSINESS / READY TO EXPAND</span><h3>Gunakan paket Business sebagai fondasi multi-halaman.</h3><p>Koleksi akan diperluas bertahap dengan standar informasi produk, preview, spesifikasi, dan alur pemesanan yang konsisten.</p></div><a class="button button-dark" href="website-package.html?id=business">Lihat paket Business ${icon("arrow")}</a></div></section>`}
 <section class="section package-example-section">
  <div class="section-head"><div><div class="eyebrow">05 / WEBSITE COLLECTION</div><h2>${isBusiness?"Koleksi akan bertambah bertahap.":"Pilih arah visual website."}</h2><p>${isBusiness?"Halaman paket Business sudah siap sebagai konsep. Contoh website Business dapat dimasukkan kemudian ketika produk siap dipublikasikan.":"Untuk Starter, contoh pertama yang sudah tersedia dapat dirasakan sebelum memesan."}</p></div></div>
  ${isBusiness?`<div class="business-coming"><span>BUSINESS WEBSITE / COMING SOON</span><b>Example websites will appear here.</b><p>Struktur katalog, detail, preview desktop/mobile dan CTA sudah disiapkan. Koleksi Business sedang dalam tahap pengembangan dan belum tersedia untuk pemesanan.</p></div>`:`<div class="demo-grid">${examples.map(x=>`<article class="demo-card"><div class="demo-visual"><div class="demo-browser"><div class="demo-bar"><i></i><i></i><i></i><span>${esc(x.name.toLowerCase().replace(/[^a-z0-9]+/g,"-"))}</span></div><div class="demo-screen"><small>${esc(x.category.toUpperCase())}</small><b>${esc(x.name)}</b><small>${esc(x.style)}</small></div></div></div><div class="port-info"><b>${esc(x.name)}</b><p>${esc(x.desc)}</p><a class="button button-dark small" href="${esc(x.demo)}&package=${encodeURIComponent(p.id)}">Lihat website ${icon("arrow")}</a></div></article>`).join("")}</div>`}
 </section>
 <section class="section package-cta-final"><div class="inline-cta"><div class="cta-inline-grid"><div><div class="eyebrow">06 / READY TO START</div><h2>${isBusiness?"Siap menyiapkan website Business Anda?":"Siap mulai dari Starter?"}</h2><p>Harga mulai transparan. Scope final dibahas berdasarkan kebutuhan, materi, halaman dan integrasi yang benar-benar diperlukan.</p></div><div class="cta-actions"><a class="button button-white" href="booking.html?package=${encodeURIComponent(p.id)}">Mulai proyek ${icon("arrow")}</a><a class="button button-outline-light" href="https://wa.me/628218187917?text=${encodeURIComponent("Halo Bali Bagus Dev, saya ingin membahas paket "+p.name)}" target="_blank" rel="noopener">WhatsApp</a></div></div></div></section>`;
 $$("#packageExperience [data-package-preview]").forEach(btn=>btn.addEventListener("click",()=>{
   $$("#packageExperience [data-package-preview]").forEach(x=>x.classList.toggle("active",x===btn));
   const preview=$("#packageExperience .package-live-preview .experience-preview");if(preview)preview.dataset.mode=btn.dataset.packagePreview;
 }));
}
function renderPackageDetail(){const el=$("#packageDetail");if(!el)return;const id=new URLSearchParams(location.search).get("id")||"business",p=PACKAGES.find(x=>x.id===id)||PACKAGES[1];el.innerHTML=`<div class="breadcrumb"><a href="website-packages.html">Paket website</a> / ${esc(p.name)}</div><div class="product-detail-layout"><div><div class="detail-art package-visual"><div class="eyebrow">${esc(p.tag)}</div><h2>${esc(p.name)}<br><em>${fmt(p.price)} mulai</em></h2><p>${esc(p.desc)}</p></div><div class="detail-tabs"><h2>Yang termasuk</h2><ul>${p.features.map(f=>`<li>${esc(f)}</li>`).join("")}</ul><h2>Estimasi</h2><p>${esc(p.time)}. Waktu dapat berubah mengikuti kesiapan materi, revisi, integrasi, dan scope yang disepakati.</p><h2>Yang belum termasuk</h2><p>Domain, hosting, layanan pihak ketiga, biaya gateway, lisensi berbayar, pembuatan konten khusus, dan kebutuhan di luar scope dapat dihitung terpisah.</p></div></div><aside class="detail-info"><div class="product-meta">WEBSITE DEVELOPMENT · ${esc(p.scope.toUpperCase())}</div><h2>${esc(p.name)}</h2><div class="price">${fmt(p.price)} <small>mulai</small></div><p>${esc(p.desc)}</p><a class="button button-dark full" href="booking.html?package=${encodeURIComponent(p.id)}">Mulai diskusi ${icon("arrow")}</a><a class="button" style="border-color:#ddd;width:100%" href="portfolio.html#demos">Lihat contoh website ${icon("external")}</a></aside></div>`}
function renderDemos(){const el=$("#demoGrid");if(!el)return;el.innerHTML=DEMOS.map(d=>`<article class="demo-card" data-category="${esc(d.category)}"><div class="demo-visual"><div class="demo-browser"><div class="demo-bar"><i></i><i></i><i></i><span>${esc(d.name.toLowerCase().replace(/[^a-z0-9]+/g,"-"))}</span></div><div class="demo-screen"><small>${esc(d.category.toUpperCase())} / CONCEPT</small><b>${esc(d.title)}<br><em>${esc(d.em)}</em></b><small>RESPONSIVE · CUSTOMIZABLE · UI CONCEPT</small></div></div></div><div class="port-info"><b>${esc(d.name)}</b><span>CONCEPT / PREVIEW · ${esc(d.businessType)}</span><p>${esc(d.desc)}</p><p class="tiny"><b>Design:</b> ${esc(d.direction)} · <b>Goal:</b> ${esc(d.goal)}</p><div class="section-actions"><a class="button button-dark small" data-track="demo_click" data-track-id="${esc(d.id)}" href="demo.html?id=${encodeURIComponent(d.id)}">Lihat Preview ${icon("external")}</a><a class="mini-link" data-track="consultation_click" href="booking.html?demo=${encodeURIComponent(d.id)}">Custom</a></div></div></article>`).join("")}
function renderClients(){const el=$("#clientGrid");if(!el)return;el.innerHTML=CLIENTS.map(c=>`<article class="client-card"><div class="client-preview"><div class="demo-browser"><div class="demo-bar"><i></i><i></i><i></i><span>client-preview</span></div><div class="demo-screen"><small>${esc(c.category.toUpperCase())}</small><b>${esc(c.name.replace("Client Website — ",""))}</b><small>${esc(c.status.toUpperCase())}</small></div></div></div><div class="port-info"><b>${esc(c.name)}</b><span>${esc(c.status)}</span><p>${esc(c.desc)}</p>${c.url!="#"?`<a class="mini-link" href="${esc(c.url)}" rel="noopener">Visit website ↗</a>`:""}</div></article>`).join("")}
function renderDemoDetail(){
 const el=$("#demoDetail");if(!el)return;
 const params=new URLSearchParams(location.search),templateId=params.get("template"),d=templateId?WEBSITE_COLLECTION.find(x=>x.id===templateId):null;
 const legacy=DEMOS.find(x=>x.id===(params.get("id")||"villa"))||DEMOS[0];
 const item=d||{id:legacy.id,category:legacy.category,name:legacy.name,style:"Responsive / Customizable",desc:legacy.desc};
 const packageId=params.get("package")||((item.availablePackages&&item.availablePackages[0])||"business"),p=PACKAGES.find(x=>x.id===packageId)||PACKAGES[1];
 const orderUrl=`website-order.html?package=${encodeURIComponent(p.id)}&template=${encodeURIComponent(item.id)}`;
 const pages=p.id==="starter"?["Home","Services / Offer","Contact"]:p.id==="business"?["Home","About","Services","Gallery","Contact"]:["Home","About","Services","Gallery","Content","Contact"];
 const themes={Villa:["THE ART OF SLOW LIVING.","A quieter hospitality experience.",["Rooms","Facilities","Experience"]],Restaurant:["GOOD FOOD. GOOD PLACE.","A visual menu and reservation journey.",["Menu","Story","Location"]],"Barbershop":["GOOD CUTS. GOOD ENERGY.","A sharper service-led website.",["Services","Barbers","Booking"]],"Car Rental":["MOVE FREELY AROUND THE ISLAND.","Fleet, pricing and inquiry in one flow.",["Fleet","Rates","Inquiry"]]};
 const theme=themes[item.category]||["GOOD BUSINESS. CLEAR DIGITAL PRESENCE.","A focused digital foundation for your business.",["Services","Proof","Contact"]];
 el.innerHTML=`<div class="breadcrumb"><a href="website-package.html?id=${encodeURIComponent(p.id)}">${esc(p.name)}</a> / ${esc(item.category)} / ${esc(item.name)}</div>
 <section class="live-experience-hero"><div><div class="eyebrow">STEP 04 / EXPERIENCE</div><h1>${esc(item.name)}<br><em>${esc(item.style)}</em></h1><p class="lead">Rasakan arah visual, struktur halaman, dan alur CTA sebelum memilih untuk memesan. Konten dan identitas final akan mengikuti bisnis Anda.</p><div class="experience-badges"><span>${esc(p.name)} package</span><span>${esc(p.scope)}</span><span>Responsive</span></div></div><aside class="experience-price"><small>PAKET DIPILIH</small><strong>${fmt(p.price)}</strong><span>mulai · ${esc(p.name)}</span></aside></section>
 <section class="section"><div class="experience-toolbar"><div><div class="eyebrow">LIVE WEBSITE EXPERIENCE</div><b>Ubah ukuran preview</b></div><div class="experience-switch" role="group" aria-label="Ukuran preview"><button class="active" type="button" data-exp-mode="desktop">DESKTOP</button><button type="button" data-exp-mode="tablet">TABLET</button><button type="button" data-exp-mode="mobile">MOBILE</button></div></div>
 <div class="live-preview"><div class="preview-window experience-preview" data-mode="desktop">
  <div class="preview-nav"><b>${esc(item.name.toUpperCase())}</b><span>HOME</span><span>${esc(theme[2][0].toUpperCase())}</span><span>${esc(theme[2][1].toUpperCase())}</span><span>CONTACT</span></div>
  <div class="preview-hero"><small>${esc(item.category.toUpperCase())} / CONCEPT · PREVIEW</small><h2>${esc(theme[0])}</h2><p>${esc(theme[1])} ${esc(item.desc)}</p><div class="demo-detail-meta"><b>Business type</b><span>${esc(item.businessType)}</span><b>Design direction</b><span>${esc(item.direction)}</span><b>User goal</b><span>${esc(item.goal)}</span><b>UX features</b><span>${esc(item.features.join(" · "))}</span><b>Example pages</b><span>${esc(item.pages.join(" · "))}</span></div><p class="tiny">Halaman ini merupakan preview konsep. Fitur dan scope final ditentukan berdasarkan kebutuhan bisnis.</p><a class="button button-dark small" data-track="consultation_click" href="#order">Diskusikan konsep</a></div>
  <div class="preview-blocks">${theme[2].map((x,i)=>`<div><small>0${i+1}</small><b>${esc(x)}</b><span>Content structure ready to customize.</span></div>`).join("")}</div>
  <div class="preview-footer"><span>${esc(item.name)}</span><small>Responsive concept · ${esc(p.name)} package</small></div>
 </div></div></section>
 <section class="section experience-detail-grid"><div><div class="eyebrow">WHAT YOU CAN IMAGINE</div><h2>Ini bukan hasil akhir.<br><em>Ini fondasi bisnis Anda.</em></h2><p>Logo, nama usaha, foto, teks, layanan, harga, warna dan detail bisnis dapat disesuaikan sesuai scope paket. Anda melihat pengalaman pelanggan terlebih dahulu, lalu memutuskan apakah fondasi ini cocok.</p></div><div class="experience-checks"><b>Halaman dalam fondasi ini</b>${pages.map(x=>`<span>✓ ${esc(x)}</span>`).join("")}<b>Yang dapat disesuaikan</b><span>✓ Logo & nama bisnis</span><span>✓ Foto & konten</span><span>✓ Warna & detail visual</span><span>✓ CTA & informasi kontak</span></div></section>
 <section id="order" class="section order-cta-section"><div class="inline-cta"><div class="cta-inline-grid"><div><div class="eyebrow">READY WHEN YOU ARE</div><h2>Pesan website ini sekarang.</h2><p>Form akan otomatis membawa paket <b>${esc(p.name)}</b> dan template <b>${esc(item.name)}</b>. Anda dapat melanjutkan dengan brief atau WhatsApp.</p></div><a class="button button-white" href="${orderUrl}">Pesan website ini ${icon("arrow")}</a></div></div></section>`;
 $$("#demoDetail [data-exp-mode]").forEach(btn=>btn.addEventListener("click",()=>{
   $$("#demoDetail [data-exp-mode]").forEach(x=>x.classList.toggle("active",x===btn));
   const preview=$("#demoDetail .experience-preview");if(preview)preview.dataset.mode=btn.dataset.expMode;
 }));
}function initA11y(){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.classList.add("reduced-motion")}

function initPremiumInteractions(){
 if(document.documentElement.classList.contains("reduced-motion"))return;
 const fine=window.matchMedia("(hover:hover) and (pointer:fine)").matches;
 if(!fine)return;
 document.querySelectorAll(".product-card,.package-card,.demo-card,.collection-card,.category-card,.service-detail-grid article").forEach(card=>{
   card.addEventListener("pointermove",e=>{
     const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
     card.style.setProperty("--mx",(x*100).toFixed(1)+"%");
     card.style.setProperty("--my",(y*100).toFixed(1)+"%");
     card.style.transform=`perspective(900px) rotateX(${(-y*1.8).toFixed(2)}deg) rotateY(${(x*1.8).toFixed(2)}deg) translateY(-4px)`;
   });
   card.addEventListener("pointerleave",()=>{card.style.transform=""});
 });
 document.querySelectorAll(".hero-visual,.campaign-hero,.live-experience-hero>div,.package-experience-hero>div").forEach(el=>{
   el.addEventListener("pointermove",e=>{
     const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
     el.style.setProperty("--px",(x*18).toFixed(1)+"px");
     el.style.setProperty("--py",(y*18).toFixed(1)+"px");
   });
   el.addEventListener("pointerleave",()=>{el.style.setProperty("--px","0px");el.style.setProperty("--py","0px")});
 });
}



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
 {id:"villa-pro",name:"Villa Retreat",category:"Website",type:"Website Template",price:1590000,old:0,tag:"HOSPITALITY",desc:"Template hospitality dengan room showcase, facilities, gallery dan booking CTA.",features:["Room showcase","Facilities","Gallery","Booking CTA","Responsive layout"],visual:"villa"},
 {id:"car-rental-bali",name:"Bali Car Rental Experience",category:"Website",type:"Website Template",price:0,old:0,tag:"COMING SOON",status:"planned",desc:"Konsep website rental mobil Bali dengan fleet, tarif, inquiry, pickup area dan WhatsApp.",features:["Fleet & pricing","Pickup area","Availability UI","WhatsApp inquiry","Mobile-first flow"],visual:"shop"},
 {id:"motor-rental-bali",name:"Bali Motorbike Rental",category:"Website",type:"Website Template",price:0,old:0,tag:"COMING SOON",status:"planned",desc:"Konsep rental motor untuk wisatawan dengan katalog motor, durasi sewa, area delivery dan inquiry.",features:["Motor catalog","Rental duration","Delivery area","Terms & FAQ","WhatsApp inquiry"],visual:"barber"},
 {id:"trolley-rental-bali",name:"Trolley & Mobility Rental",category:"Website",type:"Website Template",price:0,old:0,tag:"COMING SOON",status:"planned",desc:"Konsep layanan sewa trolley dan mobility support untuk hotel, event, venue, dan kebutuhan wisata.",features:["Equipment catalog","Rental schedule","Venue inquiry","Availability UI","Request form"],visual:"villa"},
 {id:"hotel-bali",name:"Bali Hotel Booking Concept",category:"Website",type:"Website Template",price:0,old:0,tag:"COMING SOON",status:"planned",desc:"Konsep website hotel dengan kamar, fasilitas, promo, lokasi, FAQ dan jalur reservasi.",features:["Room showcase","Facilities","Offers","Location","Reservation CTA"],visual:"villa"},
 {id:"homestay-bali",name:"Bali Homestay & Guesthouse",category:"Website",type:"Website Template",price:0,old:0,tag:"COMING SOON",status:"planned",desc:"Website penginapan lokal dengan kamar, pengalaman sekitar, aturan menginap dan inquiry.",features:["Room types","Local guide","House rules","Gallery","Inquiry flow"],visual:"villa"},
 {id:"tour-operator-bali",name:"Bali Tour Operator",category:"Website",type:"Website Template",price:0,old:0,tag:"COMING SOON",status:"planned",desc:"Konsep tour operator untuk paket wisata, itinerary, private tour, group tour dan inquiry.",features:["Tour packages","Itinerary","Private/group options","Inquiry flow","Trust sections"],visual:"shop"},
 {id:"bali-activities",name:"Bali Activities & Experiences",category:"Website",type:"Website Template",price:0,old:0,tag:"COMING SOON",status:"planned",desc:"Konsep discovery aktivitas Bali seperti snorkeling, rafting, cooking class, spa, cycling dan experience lainnya.",features:["Activity catalog","Filters","Schedule UI","Experience detail","Booking CTA"],visual:"barber"},
 {id:"airport-transfer-bali",name:"Airport Transfer & Driver",category:"Website",type:"Website Template",price:0,old:0,tag:"COMING SOON",status:"planned",desc:"Konsep transfer bandara dan private driver dengan rute, kendaraan, harga mulai dan inquiry.",features:["Route selector","Vehicle types","Fare estimate UI","Driver inquiry","WhatsApp CTA"],visual:"shop"},
 {id:"travel-agency-bali",name:"Bali Travel Agency",category:"Website",type:"Website Template",price:0,old:0,tag:"COMING SOON",status:"planned",desc:"Website agen perjalanan dengan paket, transport, hotel, activity dan custom itinerary.",features:["Package catalog","Custom itinerary","Transport options","Hotel/activity cross-sell","Inquiry flow"],visual:"villa"},
 {id:"cafe-umkm-bali",name:"Bali Cafe & UMKM",category:"Website",type:"Website Template",price:0,old:0,tag:"COMING SOON",status:"planned",desc:"Konsep website untuk cafe, warung, coffee shop, bakery, craft, retail kecil dan UMKM Bali.",features:["Menu/catalog","Location","Story","Promo section","WhatsApp CTA"],visual:"barber"},
 {id:"restaurant-bali",name:"Bali Restaurant & Dining",category:"Website",type:"Website Template",price:0,old:0,tag:"COMING SOON",status:"planned",desc:"Konsep restoran Bali dengan menu, reservation, private dining, location dan social proof.",features:["Menu","Reservation","Private dining","Gallery","Location"],visual:"villa"},
 {id:"villa-management",name:"Villa Management System",category:"Software",type:"Business System",price:0,old:0,tag:"PLANNED",status:"planned",desc:"Rancangan sistem manajemen villa untuk booking, housekeeping, maintenance, occupancy dan reporting.",features:["Booking dashboard","Housekeeping","Maintenance","Occupancy","Reporting"],visual:"villa"},
 {id:"employee-management",name:"Employee Management System",category:"Software",type:"Business System",price:0,old:0,tag:"PLANNED",status:"planned",desc:"Rancangan sistem karyawan untuk data staf, attendance, leave, roles, payroll preparation dan reporting.",features:["Employee records","Attendance UI","Leave management","Roles","Reports"],visual:"shop"},
 {id:"inventory-system",name:"Stock & Inventory Management",category:"Software",type:"Business System",price:0,old:0,tag:"PLANNED",status:"planned",desc:"Rancangan sistem stok untuk UMKM, retail, hospitality dan bisnis dengan banyak SKU.",features:["Stock dashboard","SKU management","Low-stock alerts","Movement history","Reports"],visual:"shop"},
 {id:"accounting-system",name:"Accounting & Finance System",category:"Software",type:"Business System",price:0,old:0,tag:"PLANNED",status:"planned",desc:"Rancangan sistem akuntansi dan keuangan untuk pencatatan transaksi, cashflow, invoice dan laporan.",features:["Transactions","Cashflow","Invoices","Expense tracking","Reports"],visual:"villa"},
 {id:"pos-bali-fnb",name:"POS & F&B Management",category:"Software",type:"Business System",price:0,old:0,tag:"PLANNED",status:"planned",desc:"Rancangan POS untuk cafe dan restoran dengan menu, meja, order, kitchen flow dan laporan.",features:["POS","Table management","Kitchen flow","Menu management","Reports"],visual:"barber"},
 {id:"booking-engine",name:"Booking & Reservation Engine",category:"Software",type:"Business System",price:0,old:0,tag:"PLANNED",status:"planned",desc:"Rancangan mesin booking untuk hospitality, rental, activity, tour, appointment dan layanan berbasis jadwal.",features:["Availability","Calendar","Booking flow","Customer records","Notifications"],visual:"villa"},
 {id:"crm-leads",name:"CRM & Lead Management",category:"Software",type:"Business System",price:0,old:0,tag:"PLANNED",status:"planned",desc:"Rancangan CRM untuk menangkap lead, follow-up, pipeline dan histori komunikasi.",features:["Lead inbox","Pipeline","Follow-up","Customer history","Reporting"],visual:"shop"}
];
const PRODUCTS=[...CORE_PRODUCTS,...EXTRA_PRODUCTS];
const WEBSITE_COLLECTION=[
 {id:"car-rental-starter-001",category:"Car Rental",name:"Bali Bagus Car Rental",badge:"TERBARU",premium:true,elegant:true,style:"One Page / Fleet / WhatsApp",desc:"Produk Starter pertama: website rental mobil Bali satu halaman dengan fleet, harga mulai, airport transfer, private driver dan booking via WhatsApp.",demo:"https://baguskristiansianturi.github.io/Bali-Bagus-Car-Rental/",status:"active",availablePackages:["starter"]},
 {id:"barber-001",category:"Barbershop",name:"Bagus Barbershop",badge:"BARBERSHOP",premium:true,style:"Modern / Booking",desc:"Clean service-led experience for modern barbershops.",demo:"demo.html?template=barber-001",status:"active",availablePackages:["starter","business"]},
 {id:"barber-002",category:"Barbershop",name:"Barber House",badge:"PREMIUM",premium:true,elegant:true,style:"Premium / Appointment",desc:"Editorial presentation for a premium barber brand.",demo:"demo.html?template=barber-002",status:"active",availablePackages:["starter","business"]},
 {id:"barber-003",category:"Barbershop",name:"Classic Barber",style:"Classic / Local",desc:"Straightforward local-first barbershop experience.",demo:"demo.html?template=barber-003",status:"active",availablePackages:["starter","business"]},
 {id:"villa-001",category:"Villa",name:"Villa Retreat",badge:"ELEGAN",premium:true,elegant:true,style:"Hospitality / Booking",desc:"A visual-first hospitality experience.",demo:"demo.html?template=villa-001",status:"active",availablePackages:["business","growth"]},
 {id:"hotel-001",category:"Hotel",name:"Bali Hotel House",badge:"PREMIUM",premium:true,elegant:true,style:"Hospitality / Reservation",desc:"Hotel experience with rooms, facilities, offers, location and reservation flow.",demo:"demo.html?template=hotel-001",status:"active",availablePackages:["business","growth"]},
 {id:"homestay-001",category:"Homestay",name:"Island Guesthouse",style:"Local Stay / Inquiry",desc:"Guesthouse and homestay concept with rooms, local guide and inquiry flow.",demo:"demo.html?template=homestay-001",status:"active",availablePackages:["starter","business"]},
 {id:"restaurant-001",category:"Restaurant",name:"Restaurant Atelier",badge:"ELEGAN",elegant:true,style:"Editorial / Reservation",desc:"Menu, story, gallery and reservation journey.",demo:"demo.html?template=restaurant-001",status:"active",availablePackages:["starter","business","growth"]},
 {id:"cafe-001",category:"Cafe",name:"Daily Coffee",style:"Menu / Local",desc:"Compact café website for menu, location, story and local discovery.",demo:"demo.html?template=cafe-001",status:"active",availablePackages:["starter","business"]},
 {id:"travel-001",category:"Travel",name:"Island Routes",style:"Tour / Inquiry",desc:"Tour package and itinerary discovery concept.",demo:"demo.html?template=travel-001",status:"active",availablePackages:["business","growth"]},
 {id:"tour-operator-001",category:"Tour Operator",name:"Bali Private Journeys",style:"Tours / Itinerary",desc:"Private tour, group tour, itinerary and inquiry experience.",demo:"demo.html?template=tour-operator-001",status:"active",availablePackages:["business","growth"]},
 {id:"activity-001",category:"Activities",name:"Bali Experiences",style:"Activity / Booking",desc:"Experience discovery for snorkeling, rafting, cooking class, cycling, spa and other activities.",demo:"demo.html?template=activity-001",status:"active",availablePackages:["business","growth"]},
 {id:"car-rental-001",category:"Car Rental",name:"Island Drive",style:"Fleet / WhatsApp",desc:"Practical rental website with fleet presentation, pricing and inquiry flow.",demo:"demo.html?template=carrental-001",status:"active",availablePackages:["business","growth"]},
 {id:"motor-rental-001",category:"Motorbike Rental",name:"Bali Ride",style:"Fleet / Delivery",desc:"Motorbike rental concept with vehicle catalog, duration, delivery area and inquiry.",demo:"demo.html?template=motor-rental-001",status:"active",availablePackages:["starter","business"]},
 {id:"airport-transfer-001",category:"Airport Transfer",name:"Bali Transfer",style:"Route / Driver",desc:"Airport transfer and private driver flow with vehicle types, route and inquiry.",demo:"demo.html?template=airport-transfer-001",status:"active",availablePackages:["starter","business"]},
 {id:"trolley-001",category:"Trolley Rental",name:"Mobility & Trolley",style:"Rental / Schedule",desc:"Equipment rental concept for hotel, venue, event and tourism mobility needs.",demo:"demo.html?template=trolley-001",status:"active",availablePackages:["starter","business"]},
 {id:"property-001",category:"Property",name:"Property House",style:"Listings / Inquiry",desc:"Property discovery and inquiry concept.",demo:"demo.html?template=property-001",status:"active",availablePackages:["business","growth"]},
 {id:"company-001",category:"Company Profile",name:"Built Forward",style:"Corporate / Trust",desc:"Professional company profile structure for services and credibility.",demo:"demo.html?template=company-001",status:"active",availablePackages:["business","growth"]},
 {id:"cafe-umkm-001",category:"UMKM",name:"Bali Local Brand",style:"Catalog / Story",desc:"Website concept for café, bakery, craft, local retail and other UMKM.",demo:"demo.html?template=cafe-umkm-001",status:"active",availablePackages:["starter","business"]},
 {id:"villa-system-001",category:"Villa Management",name:"Villa Operations",style:"Dashboard / Operations",desc:"Business system concept for booking, housekeeping, maintenance, occupancy and reporting.",demo:"demo.html?template=villa-system-001",status:"active",availablePackages:["custom","system"]},
 {id:"employee-system-001",category:"Employee Management",name:"People Operations",style:"HR / Dashboard",desc:"Employee records, attendance, leave, roles and reporting system concept.",demo:"demo.html?template=employee-system-001",status:"active",availablePackages:["custom","system"]},
 {id:"inventory-system-001",category:"Inventory",name:"Stock Control",style:"Inventory / Dashboard",desc:"Stock, SKU, movement, low-stock alerts and reporting system concept.",demo:"demo.html?template=inventory-system-001",status:"active",availablePackages:["custom","system"]},
 {id:"accounting-system-001",category:"Accounting",name:"Finance Desk",style:"Finance / Reporting",desc:"Transaction, cashflow, invoice, expense and reporting system concept.",demo:"demo.html?template=accounting-system-001",status:"active",availablePackages:["custom","system"]},
 {id:"pos-system-001",category:"POS & F&B",name:"F&B Control",style:"POS / Kitchen",desc:"POS, table, menu, kitchen flow and reporting concept for cafés and restaurants.",demo:"demo.html?template=pos-system-001",status:"active",availablePackages:["custom","system"]},
 {id:"booking-system-001",category:"Booking System",name:"Booking Engine",style:"Calendar / Reservation",desc:"Availability, calendar, reservation and notification flow for schedule-based businesses.",demo:"demo.html?template=booking-system-001",status:"active",availablePackages:["custom","system"]},
 {id:"crm-system-001",category:"CRM",name:"Lead Desk",style:"CRM / Pipeline",desc:"Lead inbox, pipeline, follow-up, customer history and reporting concept.",demo:"demo.html?template=crm-system-001",status:"active",availablePackages:["custom","system"]}
];
const WEBSITE_CATEGORIES=[
 "All","Barbershop","Salon","Spa","Beauty & Personal Care","Fitness","Villa","Hotel","Homestay","Resort","Guesthouse",
 "Restaurant","Cafe","Bakery","Food & Beverage","UMKM","Retail","E-commerce","Property","Real Estate","Apartment","Real Estate Agency",
 "Travel","Tour Operator","Activities","Car Rental","Motorbike Rental","Airport Transfer","Private Driver","Trolley Rental","Boat Rental",
 "Company Profile","Corporate","Agency","Consultant","Law Firm","Accounting & Finance","Construction","Contractor","Architecture","Interior Design",
 "Workshop","Automotive","Clinic","Dental Clinic","Medical","Pharmacy","Education","School","Course & Training","University",
 "Event Organizer","Wedding","Photography","Videography","Creative Studio","Startup","SaaS","Technology","Software","Community","Nonprofit",
 "Professional Services","Logistics","Cleaning Service","Laundry","Pet Care","Agriculture","Real Estate Development","Villa Management",
 "Employee Management","Inventory","Accounting","POS & F&B","Booking System","CRM","Dashboard","Marketplace","Membership"
];

function allProducts(){return PRODUCTS.filter(p=>p.category!=="Hardware"&&p.category!=="Software")}
window.BB_CATALOG=allProducts;
function findProduct(id){return allProducts().find(p=>p.id===id)}
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
function updateCount(){const count=getCart().reduce((a,x)=>a+x.qty,0);$$('#cartCount,#mobileCartCount').forEach(e=>e.textContent=count)}
function addCart(id){
 const p=findProduct(id);if(!p)return;
 if(p.status==="planned"){showToast("Produk ini belum tersedia. Simpan ke wishlist untuk dibandingkan nanti.");return;}
 const c=getCart(),item=c.find(x=>x.id===id);
 item?item.qty=Math.min(99,item.qty+1):c.push({id,qty:1});
 saveCart(c);trackEvent("add_to_cart",{id:p.id,label:p.name});showToast(`${p.name} ditambahkan ke keranjang.`);
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
 const phone=window.BB_WHATSAPP_NUMBER||"628218187917";
 return "https://wa.me/"+phone+"?text="+encodeURIComponent(message);
}
function productWhatsApp(p){
 const msg=`Halo Bali Bagus Dev, saya tertarik dengan produk "${p.name}". Saya ingin bertanya lebih detail sebelum membeli. Link produk: ${location.origin+location.pathname.replace(/[^/]+$/,"")}product-detail.html?id=${encodeURIComponent(p.id)}`;
 return whatsappUrl(msg);
}
function renderHomeMerchandising(){
 const grid=$("#homeMerchandising"),tabs=$("[data-home-merch]");if(!grid)return;
 const data={
  featured:allProducts().filter(p=>p.status!=="planned").slice(0,6),
  new:allProducts().filter(p=>/NEW|HOSPITALITY/.test(p.tag)&&p.status!=="planned").slice(0,6),
  launch:allProducts().filter(p=>/NEW|BARBER SPECIAL|QUICK START/.test(p.tag)&&p.status!=="planned").slice(0,6),
  promo:allProducts().filter(p=>p.old&&p.price&&p.old>p.price).sort((a,b)=>(b.old-b.price)-(a.old-a.price)).slice(0,6),
  soon:allProducts().filter(p=>p.status==="planned").slice(0,6)
 };
 const draw=key=>{grid.innerHTML=(data[key]||[]).map(card).join("")||'<div class="empty-state">Koleksi ini sedang kami siapkan.</div>';renderCompareBar()};
 tabs.forEach(t=>t.addEventListener("click",()=>{tabs.forEach(x=>x.classList.toggle("active",x===t));draw(t.dataset.homeMerch)}));
 draw("featured");
}
function renderProducts(target,list){
 const el=$(target);if(!el)return;
 el.innerHTML=list.length?list.map(card).join(""):`<div class="empty-state">Tidak ada hasil yang sesuai. <a class="text-link" href="contact.html">Minta produk khusus ↗</a></div>`;
}
function normalizeWishlist(){
 const raw=store.get("wishlist",[]);
 if(!Array.isArray(raw))return [];
 return raw.map(x=>typeof x==="string"?{kind:findProduct(x)?"product":"website",id:x,addedAt:Date.now()}:x).filter(x=>(x.kind==="product"&&findProduct(x.id))||(x.kind==="website"&&WEBSITE_COLLECTION.some(w=>w.id===x.id))).slice(-80);
}
function getWishlist(){return normalizeWishlist()}
function saveWishlist(w){store.set("wishlist",w.slice(-80))}
function wishlistHas(kind,id){return getWishlist().some(x=>x.kind===kind&&x.id===id)}
function toggleWishlist(id,kind="product"){
 const w=getWishlist(),exists=w.some(x=>x.kind===kind&&x.id===id);
 saveWishlist(exists?w.filter(x=>!(x.kind===kind&&x.id===id)):[...w,{kind,id,addedAt:Date.now()}]);
 $$("[data-wishlist=\""+CSS.escape(id)+"\"][data-wishlist-kind=\""+kind+"\"]").forEach(el=>{const on=!exists;el.classList.toggle("active",on);el.setAttribute("aria-pressed",String(on))});
 renderWishlistPage();updateCount();showToast(!exists?"Disimpan ke wishlist.":"Dihapus dari wishlist.");
}
function renderWishlistPage(){
 const grid=$("#wishlistGrid"),compare=$("#wishlistCompareGrid"),count=$("#wishlistCount");if(!grid)return;
 const allItems=getWishlist(),term=($("#wishlistSearch")?.value||"").trim().toLowerCase(),kind=($("#wishlistType")?.value||"all"),items=allItems.filter(x=>{const p=x.kind==="product"?findProduct(x.id):WEBSITE_COLLECTION.find(w=>w.id===x.id);return p&&(!term||(p.name+" "+(p.category||"")+" "+(p.type||p.style||"")).toLowerCase().includes(term))&&(kind==="all"||x.kind===kind)});if(count)count.textContent=term||kind!=="all"?items.length+" / "+allItems.length:String(items.length);
 grid.innerHTML=items.length?items.map(x=>{
  const p=x.kind==="product"?findProduct(x.id):WEBSITE_COLLECTION.find(w=>w.id===x.id);if(!p)return "";
  const category=p.category||"Website",type=p.type||p.style||"Website",price=x.kind==="product"?(p.status==="planned"?"Belum tersedia":fmt(p.price)):"Preview siap dikembangkan";
  const href=x.kind==="product"?"product-detail.html?id="+encodeURIComponent(p.id):p.demo+"&package="+encodeURIComponent((p.availablePackages&&p.availablePackages[0])||"business");
  return "<article class=\"wishlist-item\"><div class=\"wishlist-item-art\"><span>"+esc(category.toUpperCase())+"</span><b>"+esc(p.name)+"</b><small>"+esc(type)+"</small></div><div class=\"wishlist-item-body\"><div><b>"+esc(p.name)+"</b><span>"+esc(price)+"</span></div><p>"+esc(p.desc||"")+"</p><div class=\"wishlist-item-actions\"><a class=\"button button-dark small\" href=\""+href+"\">Buka detail "+icon("arrow")+"</a><button class=\"button-reset mini-link active\" type=\"button\" data-wishlist=\""+esc(p.id)+"\" data-wishlist-kind=\""+x.kind+"\" aria-pressed=\"true\">♥ Hapus</button><label class=\"wishlist-pick\"><input type=\"checkbox\" data-wishlist-pick=\""+x.kind+":"+esc(p.id)+"\"> Bandingkan</label></div></div></article>";
 }).join(""):"<div class=\"empty-state\"><h2>Wishlist Anda masih kosong.</h2><p>Simpan produk atau konsep website saat menjelajah. Semua pilihan tersimpan di satu tempat.</p><a class=\"button button-dark\" href=\"products.html\">Jelajahi Katalog ↗</a> <a class=\"button\" href=\"website-collection.html\">Jelajahi website ↗</a></div>";
 if(compare){
  const selected=[...document.querySelectorAll("[data-wishlist-pick]:checked")].map(el=>{const parts=el.dataset.wishlistPick.split(":");return {kind:parts.shift(),id:parts.join(":")}}).slice(0,4);
  if(!selected.length)compare.innerHTML="<div class=\"wishlist-compare-empty\">Pilih item di atas jika Anda ingin membandingkan beberapa pilihan. Tidak ada perbandingan otomatis.</div>";
  else {const getItem=x=>x.kind==="product"?findProduct(x.id):WEBSITE_COLLECTION.find(w=>w.id===x.id);compare.innerHTML="<div class=\"wishlist-compare-note\"><b>"+selected.length+" pilihan dipilih</b><span>Perbandingan hanya dibuat dari item yang Anda pilih di Wishlist.</span></div><div class=\"compare-table-wrap\"><table class=\"compare-table\"><thead><tr><th>Aspek</th>"+selected.map(x=>"<th>"+esc(getItem(x).name)+"</th>").join("")+"</tr></thead><tbody><tr><th>Kategori</th>"+selected.map(x=>"<td>"+esc(getItem(x).category||"")+"</td>").join("")+"</tr><tr><th>Tipe / gaya</th>"+selected.map(x=>"<td>"+esc(getItem(x).type||getItem(x).style||"Website")+"</td>").join("")+"</tr><tr><th>Status / harga</th>"+selected.map(x=>"<td>"+(x.kind==="product"?(getItem(x).status==="planned"?"BELUM TERSEDIA":fmt(getItem(x).price)):"PREVIEW SIAP DIKEMBANGKAN")+"</td>").join("")+"</tr></tbody></table></div>"}
 }
 document.querySelectorAll("[data-wishlist-pick]").forEach(el=>el.addEventListener("change",renderWishlistPage));
}
function setupProductChoices(){document.addEventListener("click",e=>{const w=e.target.closest("[data-wishlist]");if(w){e.preventDefault();toggleWishlist(w.dataset.wishlist,w.dataset.wishlistKind||"product")}});$("#wishlistSearch")?.addEventListener("input",renderWishlistPage);$("#wishlistType")?.addEventListener("change",renderWishlistPage);renderWishlistPage()}

function card(p){
 const planned=p.status==="planned";
 return `<article class="product-card commerce-card ${planned?"is-planned":""}">
   ${art(p)}
   <div class="product-card-body">
    <div class="product-meta">${esc(p.type.toUpperCase())} · ${esc(p.category.toUpperCase())}</div>
    <h3>${esc(p.name)}</h3>
    <p>${esc(p.desc)}</p>
    <div class="product-card-foot">
      <span class="product-price">${planned?"BELUM TERSEDIA":fmt(p.price)}</span>
      <a class="product-detail-cta" href="product-detail.html?id=${encodeURIComponent(p.id)}" aria-label="Lihat detail ${esc(p.name)}">Lihat detail ${icon("arrow")}</a>
    </div>
   </div>
 </article>`;
}
function renderCart(){
 const el=$("#cartItems");if(!el)return;
 const raw=getCart();
 const cart=raw.filter(x=>{const p=findProduct(x.id);return p&&p.price>0&&p.status!=="planned";});
 if(cart.length!==raw.length) saveCart(cart);
 const checkout=$("#checkoutLink");
 if(!cart.length){
  el.innerHTML='<div class="empty-state"><b>Keranjang Anda masih kosong.</b><p>Tambahkan produk yang tersedia dari Katalog untuk melanjutkan.</p><a class="text-link" href="products.html">Jelajahi Katalog ↗</a></div>';
  $("#cartSummary").innerHTML='<div class="summary-total"><span>Total</span><span>Rp0</span></div>';
  if(checkout){checkout.setAttribute("aria-disabled","true");checkout.dataset.disabled="true";checkout.removeAttribute("href");checkout.setAttribute("tabindex","-1");}
  return;
 }
 el.innerHTML=cart.map(x=>{
  const p=findProduct(x.id);
  return '<div class="cart-row"><div class="cart-thumb">'+icon("arrow")+'</div><div class="cart-row-info"><b>'+esc(p.name)+'</b><small>'+esc(p.type)+' · '+fmt(p.price)+'</small><small>Subtotal · '+fmt(p.price*x.qty)+'</small></div><div class="cart-qty"><button type="button" aria-label="Kurangi jumlah '+esc(p.name)+'" onclick="changeQty(\''+esc(p.id)+'\',-1)">−</button><span aria-live="polite">'+x.qty+'</span><button type="button" aria-label="Tambah jumlah '+esc(p.name)+'" onclick="changeQty(\''+esc(p.id)+'\',1)">+</button></div><button type="button" onclick="removeCart(\''+esc(p.id)+'\')">Hapus</button></div>';
 }).join("");
 const total=cart.reduce((sum,x)=>{const p=findProduct(x.id);return sum+p.price*x.qty;},0);
 $("#cartSummary").innerHTML=cart.map(x=>{const p=findProduct(x.id);return '<div class="summary-line"><span>'+esc(p.name)+' × '+x.qty+'</span><b>'+fmt(p.price*x.qty)+'</b></div>';}).join("")+'<div class="summary-total"><span>Total</span><span>'+fmt(total)+'</span></div>';
 if(checkout){checkout.removeAttribute("aria-disabled");checkout.dataset.disabled="false";checkout.setAttribute("href","checkout.html");checkout.removeAttribute("tabindex");}
}
function renderSummary(target){
 const el=$(target);if(!el)return;
 const params=new URLSearchParams(location.search);
 const websiteOrder=params.get("orderType")==="website"?store.get("websiteOrder",null):null;
 if(websiteOrder){const p=PACKAGES.find(x=>x.id===websiteOrder.packageId),t=WEBSITE_COLLECTION.find(x=>x.id===websiteOrder.templateId);el.innerHTML=`<div class="summary-line"><span>Website</span><b>${esc(p?.name||"Custom")}</b></div><div class="summary-line"><span>Template</span><b>${esc(t?.name||"Fondasi pilihan")}</b></div><div class="summary-line"><span>Scope</span><b>${esc(p?.scope||"Custom")}</b></div><div class="summary-total"><span>Harga mulai</span><span>${fmt(p?.price||0)}</span></div><p class="tiny">Harga final mengikuti scope, materi, integrasi dan kebutuhan produksi yang disepakati.</p>`;return;}
 const cart=getCart(),total=cart.reduce((s,x)=>s+(findProduct(x.id)?.price||0)*x.qty,0);
 el.innerHTML=cart.length?cart.map(x=>{const p=findProduct(x.id);if(!p)return "";return `<div class="summary-line"><span>${esc(p.name)} × ${x.qty}</span><b>${fmt(p.price*x.qty)}</b></div>`}).join("")+`<div class="summary-total"><span>Total</span><span>${fmt(total)}</span></div>`:'<p class="tiny">Keranjang kosong.</p>';
}
function renderDetail(){
 const el=$("#productDetail");if(!el)return;
 const p=findProduct(new URLSearchParams(location.search).get("id"));
 if(!p){el.innerHTML=`<div class="empty-state"><h2>Produk tidak ditemukan.</h2><p>Produk yang Anda cari tidak tersedia atau link sudah berubah.</p><a class="button button-dark" href="products.html">Kembali ke Katalog ↗</a></div>`;return;}
 const reviews=store.get("reviews_"+p.id,[]);
 const account=store.get("account",null);
 const eligible=account && store.get("orders",[]).some(o=>["paid","processing","shipped","delivered","completed"].includes(o.status)&&Array.isArray(o.items)&&o.items.some(i=>i.id===p.id));
 const avg=reviews.length?(reviews.reduce((a,r)=>a+r.rating,0)/reviews.length).toFixed(1):"—";
 el.innerHTML=`<div class="breadcrumb"><a href="products.html">Katalog</a> / ${esc(p.name)}</div>
 <div class="product-detail-layout commerce-detail">
  <div>
   <div class="detail-art">${art(p)}</div>
   <div class="experience-switch" role="group" aria-label="Ukuran preview">
    <button class="active" type="button" data-preview="desktop">DESKTOP</button>
    <button type="button" data-preview="mobile">MOBILE</button>
    <a class="mini-link" href="demo.html?id=${encodeURIComponent(p.id)}">Buka live preview ↗</a>
   </div>
   <div class="live-preview product-live-preview" id="productLivePreview">
    <div class="preview-browser preview-browser-responsive" data-mode="desktop">
     <div class="demo-bar"><i></i><i></i><i></i><span>${esc(p.name.toLowerCase().replace(/[^a-z0-9]+/g,"-"))}</span></div>
     <div class="preview-screen">${art(p)}</div>
    </div>
   </div>
   <div class="detail-tabs">
    <h2>Tentang produk</h2><p>${esc(p.desc)}</p>
    <h2>Fitur & spesifikasi</h2><ul>${p.features.map(f=>`<li>${esc(f)}</li>`).join("")}</ul>
    <h2>Yang termasuk</h2><ul><li>File / license sesuai tipe produk</li><li>Panduan penggunaan atau instalasi bila tersedia</li><li>Informasi dukungan dan update</li></ul>
    <h2>FAQ</h2><div class="faq-list">
      <details open><summary>Apakah saya bisa bertanya dulu?</summary><p>Bisa. Gunakan tombol WhatsApp untuk bertanya sebelum membeli.</p></details>
      <details><summary>Apakah produk bisa dikustomisasi?</summary><p>Jika tersedia, opsi kustomisasi ditampilkan di halaman ini. Untuk kebutuhan khusus, kirim pertanyaan melalui WhatsApp.</p></details>
      <details><summary>Bagaimana proses setelah membeli?</summary><p>Untuk produk fisik, alamat dan pilihan pengiriman diisi saat checkout. Produk digital mengikuti metode delivery yang tercantum.</p></details>
      <details><summary>Apakah saya bisa checkout langsung?</summary><p>Bisa. Tambahkan produk ke keranjang lalu lanjutkan ke checkout.</p></details>
    </div>
    <h2>Review pelanggan</h2>
    <div class="review-summary"><strong>${avg}</strong><span>★</span><small>${reviews.length} customer review${reviews.length===1?"":"s"}</small></div>
    ${reviews.length?reviews.map(r=>`<article class="review-item"><div><strong>${esc(r.name)}</strong><span class="verified-badge">Review pelanggan</span></div><div class="stars">${"★".repeat(r.rating)}${"☆".repeat(5-r.rating)}</div><p>${esc(r.text)}</p><small>${new Date(r.createdAt).toLocaleDateString("id-ID")}</small></article>`).join(""):'<div class="notice">Belum ada review pelanggan untuk produk ini. Review akan tersedia setelah sistem order produksi terhubung.</div>'}
    ${eligible?`<form id="reviewForm" class="review-form"><h3>Bagikan pengalaman Anda</h3><label>Rating<select name="rating" required><option value="5">5 — Sangat baik</option><option value="4">4 — Baik</option><option value="3">3 — Cukup</option></select></label><label>Review<textarea name="text" rows="4" required placeholder="Ceritakan pengalaman Anda..."></textarea></label><button class="button button-dark" type="submit">Kirim review</button></form>`:'<div class="review-login"><p>Sudah membeli produk ini? Login untuk menulis review setelah pesanan selesai.</p><a class="button" href="account.html?next='+encodeURIComponent(location.href)+'">Masuk / Daftar</a></div>'}
   </div>
  </div>
  <aside class="detail-info sticky-detail">
   <div class="product-meta">${esc(p.type.toUpperCase())} · ${esc(p.category.toUpperCase())}</div>
   <h2>${esc(p.name)}</h2><p>${esc(p.desc)}</p><div class="price">${p.status==="planned"?"BELUM TERSEDIA":fmt(p.price)}</div>
   <div class="delivery-box"><strong>Status</strong><span>✓ ${p.status==="planned"?"Konsep sudah disiapkan · produksi belum tersedia":"Produk dapat dibahas sekarang"}</span><span>✓ Simpan ke wishlist atau bandingkan untuk keputusan berikutnya</span></div>
   ${p.status==="planned"?`<button class="button button-dark full" type="button" onclick="toggleWishlist('${esc(p.id)}')">♡ Simpan ke wishlist</button>`:`<button class="button button-dark full" type="button" onclick="addCart('${esc(p.id)}')">Tambah ke keranjang ${icon("cart")}</button>
   <button class="button full" type="button" onclick="buyNow('${esc(p.id)}')">Beli sekarang ${icon("arrow")}</button>`}

   <a class="button whatsapp-button full" href="${productWhatsApp(p)}" target="_blank" rel="noopener">Tanya via WhatsApp ↗</a>
   <a class="mini-link" href="booking.html?service=${encodeURIComponent("Kustomisasi "+p.name)}">Butuh kustomisasi?</a>
  </aside>
 </div>`;
 $$("#productDetail [data-preview]").forEach(btn=>btn.addEventListener("click",()=>{
   $$("#productDetail [data-preview]").forEach(x=>x.classList.toggle("active",x===btn));
   const preview=$("#productLivePreview .preview-browser-responsive");
   if(preview)preview.dataset.mode=btn.dataset.preview;
 }));
 $("#reviewForm")?.addEventListener("submit",e=>{
   e.preventDefault();const data=Object.fromEntries(new FormData(e.currentTarget)),arr=store.get("reviews_"+p.id,[]);
   arr.push({name:account.name,rating:Number(data.rating),text:data.text,createdAt:new Date().toISOString(),verified:true});
   store.set("reviews_"+p.id,arr);renderDetail();showToast("Review tersimpan pada perangkat ini.");
 });
}function buyNow(id){addCart(id);location.href="checkout.html";}
function collectionRank(x){
 const score=(x.badge==="TERBARU"?80:0)+(x.premium?40:0)+(x.elegant?30:0);
 return score;
}
function renderCollection(){
 const grid=$("#websiteCollectionGrid");if(!grid)return;
 const q=($("#collectionSearch")?.value||"").toLowerCase().trim();
 const categoryPage=window.BB_CATEGORY_PAGE?.category||"";
 const requestedCategory=categoryPage||"All";
 const cat=document.querySelector("#collectionCategoryList .collection-category-row.is-active")?.dataset.category||requestedCategory||"All";
 const packageControl=$("#collectionPackageList");
 const packageId=packageControl?.value||new URLSearchParams(location.search).get("package")||"all";
 const mode=$("#collectionSort")?.value||"recommended";
 const categoryScoped=Boolean(categoryPage);
 const base=WEBSITE_COLLECTION.filter(x=>
   (cat==="All"||x.category===cat)&&
   (packageId==="all"||x.availablePackages?.includes(packageId))&&
   (x.name+" "+x.category+" "+(x.style||"")+" "+(x.desc||"")).toLowerCase().includes(q)&&
   x.status==="active"&&
   (categoryScoped || ["starter","business","growth","commerce"].some(id=>x.availablePackages?.includes(id)))
 );
 const list=[...base].sort((a,b)=>{
   if(mode==="new")return (b.badge==="TERBARU")-(a.badge==="TERBARU")||collectionRank(b)-collectionRank(a);
   if(mode==="premium")return Number(b.premium)-Number(a.premium)||collectionRank(b)-collectionRank(a);
   if(mode==="elegant")return Number(b.elegant)-Number(a.elegant)||collectionRank(b)-collectionRank(a);
   if(mode==="az")return a.name.localeCompare(b.name);
   return collectionRank(b)-collectionRank(a);
 });
 const count=$("#collectionCount");if(count)count.textContent=list.length+" "+(categoryScoped?"hasil tersedia":"website tersedia");
 const activePkg=packageId==="all"?"Semua paket":(PACKAGES.find(p=>p.id===packageId)?.name||packageId);
 const modeLabel={recommended:"Rekomendasi",new:"Terbaru",premium:"Premium",elegant:"Elegan",az:"A–Z"}[mode]||"Rekomendasi";
 const state=$("#collectionState");
 if(state)state.innerHTML=`<b>${esc(modeLabel)}</b><span>${esc(activePkg)} · ${esc(cat==="All"?"Semua kategori":cat)}</span>`;
 grid.innerHTML=list.map((x,i)=>{
  const pkg=packageId!=="all"?packageId:((x.availablePackages&&x.availablePackages[0])||"custom");
  const packageData=PACKAGES.find(p=>p.id===pkg);
  const badges=[x.badge,x.premium?"PREMIUM":null].filter(Boolean).slice(0,2);
  return `<article class="collection-card">
   <a class="collection-visual" href="${esc(x.demo)+(x.demo.includes("?")?"&":"?")}package=${encodeURIComponent(pkg)}" aria-label="Lihat preview ${esc(x.name)}">
    <div class="collection-visual-head"><span>0${String(i+1).padStart(2,"0")}</span><span>${esc(x.category.toUpperCase())}</span></div>
    <div class="collection-art"><span class="collection-art-kicker">${esc(x.style||"Custom experience")}</span><strong>${esc(x.name)}</strong><i></i><small>${categoryScoped?"Preview / Custom":"Responsive website"}</small></div>
    <div class="collection-badges">${badges.map(b=>`<b>${esc(b)}</b>`).join("")}</div>
    <span class="collection-preview-link">Preview ↗</span>
   </a>
   <div class="collection-info">
    <div class="collection-title-row"><div><span>${esc(x.category)}</span><h3>${esc(x.name)}</h3></div><span class="collection-ready">${categoryScoped&&pkg==="custom"?"CUSTOM":"READY"}</span></div>
    <p>${esc(x.desc||"")}</p>
    <div class="collection-tags"><span>${esc((x.style||"Custom").split(" / ")[0])}</span><span>${categoryScoped?"Scope tersedia":"Responsive"}</span><span>${esc(packageData?.name||"Custom")}</span></div>
    <div class="collection-card-footer"><div><small>MULAI DARI</small><strong>${packageData?fmt(packageData.price):"Custom"}</strong></div><div class="collection-card-actions"><a class="button button-dark small" href="${esc(x.demo)+(x.demo.includes("?")?"&":"?")}package=${encodeURIComponent(pkg)}">Preview ${icon("arrow")}</a><a class="button small" href="website-order.html?package=${encodeURIComponent(pkg)}&template=${encodeURIComponent(x.id)}">Pilih website</a></div></div>
    <a class="collection-spec-link" href="website-package.html?id=${encodeURIComponent(pkg)}">Spesifikasi paket <span>↗</span></a>
   </div>
  </article>`;
 }).join("")||`<div class="empty-state"><h2>Belum ada hasil untuk kategori ini.</h2><p>Coba kategori, paket, atau pencarian lain. Jika kebutuhannya belum ada, kami dapat menyusun scope custom.</p><a class="button button-dark" href="booking.html?service=Request%20website">Request website ${icon("arrow")}</a></div>`;
}
function setupCollection(){
 const s=$("#collectionSearch"),categoryList=$("#collectionCategoryList"),packageList=$("#collectionPackageList"),sort=$("#collectionSort"),reset=$("#collectionReset");
 if(!s||!categoryList||!packageList)return;
 if(s.dataset.bound)return;s.dataset.bound="true";
 const params=new URLSearchParams(location.search),categoryPage=window.BB_CATEGORY_PAGE?.category||"",requested=params.get("category")||categoryPage||"All",requestedPackage=params.get("package")||"all";
 const ctx=$("#collectionPackageContext"),selectedPackage=PACKAGES.find(p=>p.id===requestedPackage);
 if(ctx)ctx.innerHTML=selectedPackage?`<div><span class="eyebrow">${esc(selectedPackage.tag)} / PACKAGE SCOPE</span><h2>${esc(selectedPackage.name)} <em>${fmt(selectedPackage.price)} mulai</em></h2><p>${esc(selectedPackage.desc)}</p></div><div class="collection-package-specs"><b>${esc(selectedPackage.scope)}</b><span>${esc(selectedPackage.time)}</span>${selectedPackage.features.slice(0,5).map(f=>`<span>✓ ${esc(f)}</span>`).join("")}</div>`:`<div><span class="eyebrow">${categoryPage?"CATEGORY / "+esc(categoryPage.toUpperCase()):"ALL WEBSITES / READY-TO-USE"}</span><h2>${categoryPage?"Contoh untuk "+esc(categoryPage)+" <em>yang bisa dikembangkan.</em>":"Seluruh koleksi website <em>yang tersedia.</em>"}</h2><p>${categoryPage?"Lihat contoh yang paling dekat dengan kebutuhan ini, buka demo, lalu lanjutkan ke paket atau scope custom.":"Pilih kategori bisnis atau style, lalu buka preview website yang paling dekat dengan kebutuhan Anda."}</p></div><div class="collection-package-specs"><b>${categoryPage?"Kategori aktif":"Semua koleksi"}</b><span>${categoryPage?"Ready / Concept":"Semua kategori"}</span><span>Desktop · Tablet · Mobile</span><span>Preview tersedia</span></div>`;
 const readyWebsites=WEBSITE_COLLECTION.filter(x=>x.status==="active"&&["starter","business","growth","commerce"].some(id=>x.availablePackages?.includes(id)));
 const sourceForCategories=categoryPage?WEBSITE_COLLECTION.filter(x=>x.status==="active"):readyWebsites;
 const categoryCounts=sourceForCategories.reduce((m,x)=>{m[x.category]=(m[x.category]||0)+1;return m;},{});
 const categories=["All",...WEBSITE_CATEGORIES.filter(x=>x!=="All"&&categoryCounts[x]).sort((a,b)=>a.localeCompare(b))];
 categoryList.innerHTML=categories.map(cat=>`<button type="button" class="collection-category-row${cat===requested?" is-active":""}" data-category="${esc(cat)}"><span>${esc(cat==="All"?"Semua website":cat)}</span><small>${cat==="All"?sourceForCategories.length:(categoryCounts[cat]||0)}</small></button>`).join("");
 const packageIds=categoryPage?["starter","business","growth","commerce","custom","system"]:["starter","business","growth","commerce"];
 const packageOptions=[{id:"all",name:"Semua paket"},...PACKAGES.filter(x=>packageIds.includes(x.id)).map(x=>({id:x.id,name:x.name}))];
 packageList.innerHTML=packageOptions.map(x=>`<option value="${esc(x.id)}"${requestedPackage===x.id?" selected":""}>${esc(x.name)}</option>`).join("");
 if(!categoryPage)packageList.value=requestedPackage;
 categoryList.addEventListener("click",e=>{const button=e.target.closest("[data-category]");if(!button)return;categoryList.querySelectorAll("[data-category]").forEach(el=>el.classList.remove("is-active"));button.classList.add("is-active");renderCollection();});
 packageList.addEventListener("change",renderCollection);
 sort?.addEventListener("change",renderCollection);
 reset?.addEventListener("click",()=>{const all=categoryList.querySelector('[data-category="All"]');categoryList.querySelectorAll("[data-category]").forEach(el=>el.classList.remove("is-active"));all?.classList.add("is-active");packageList.value="all";if(sort)sort.value="recommended";s.value="";renderCollection();});
 s.addEventListener("input",renderCollection);
 renderCollection();
}
function renderShellFallback(){
 const base=(location.pathname.includes("/landing/")||location.pathname.includes("/website-category/"))?"../":"";
 const h=document.querySelector(".site-header");
 if(h){
  h.className="site-header";
  h.innerHTML=`<div class="top-header-row"><a class="brand" href="${base}index.html" aria-label="Bali Bagus Dev"><span class="brand-mark">BB</span><span>BALI BAGUS<small>DEV STUDIO</small></span></a><div class="header-top-actions"><a class="header-utility" href="${base}articles.html">Blog</a><a class="header-utility" href="${base}help.html">Bantuan</a><a class="header-utility" href="${base}compare.html">Baru dilihat</a><a class="header-signup" href="${base}account.html">Mendaftar</a><a class="header-login" href="${base}account.html">Masuk</a></div><button class="mobile-toggle" id="menuToggle" type="button" aria-label="Buka menu" aria-expanded="false">${icon("menu")}</button></div><div class="category-nav-row"><nav class="category-nav" id="mainNav" aria-label="Navigasi utama"><div class="mobile-quick-links"><a href="${base}articles.html">Blog</a><a href="${base}help.html">Bantuan</a><a href="${base}cart.html">Keranjang <b class="header-badge" id="mobileCartCount">0</b></a><a href="${base}compare.html">Baru dilihat</a><a href="${base}account.html">Mendaftar</a><a href="${base}account.html">Masuk</a></div><div class="mega-item"><a class="mega-trigger" href="${base}services.html">Build</a></div><div class="mega-item"><a class="mega-trigger" href="${base}products.html">Templates</a></div><div class="mega-item"><a class="mega-trigger" href="${base}services.html">Solutions</a></div><div class="mega-item"><a class="mega-trigger" href="${base}portfolio.html">Work</a></div><div class="mega-item"><a class="mega-trigger" href="${base}articles.html">Insights</a></div><div class="mega-item"><a class="mega-trigger" href="${base}about.html">About</a></div></nav><a class="member-entry" href="${base}booking.html"><span class="member-mark">BB</span><span>Konsultasi</span></a></div>`;
 }
 const f=document.querySelector("#siteFooter");
 if(f){
  f.className="site-footer";
  f.innerHTML=`<div class="wrap"><div class="footer-top"><div class="footer-brand"><a class="brand" href="${base}index.html"><span class="brand-mark" style="background:#fff;color:#171717">BB</span><span>BALI BAGUS<small>DEV STUDIO</small></span></a><p>Solusi digital yang dibangun berdasarkan kebutuhan bisnis nyata.</p></div><div class="footer-col"><b>BUILD</b><a href="${base}services.html#website">Website</a><a href="${base}services.html#application">Web Apps</a><a href="${base}services.html#application">Custom Systems</a></div><div class="footer-col"><b>PRODUCTS</b><a href="${base}products.html">Templates</a><a href="${base}products.html?q=ui">UI Kits</a><a href="${base}products.html">Digital Products</a></div><div class="footer-col"><b>GROW</b><a href="${base}services.html#seo">SEO</a><a href="${base}services.html#content">Content</a><a href="${base}services.html#ads">Ads</a><a href="${base}services.html#maintenance">Maintenance</a></div><div class="footer-col"><b>COMPANY</b><a href="${base}about.html">About</a><a href="${base}portfolio.html">Work</a><a href="${base}articles.html">Insights</a><a href="${base}contact.html">Contact</a></div><div class="footer-col"><b>LEGAL</b><a href="${base}terms.html">Terms</a><a href="${base}privacy.html">Privacy</a><a href="${base}refund.html">Refund</a></div></div><div class="footer-bottom"><span>© 2026 Bali Bagus Dev Studio</span><span>Credit by Bagus Dev · Indonesia</span></div></div>`;
 }
}

function header(){
 const h=document.querySelector(".site-header");if(!h)return;
 const base=(location.pathname.includes("/landing/")||location.pathname.includes("/website-category/"))?"../":"";
 const recent=store.get("recentViews",[]);
 h.className="site-header";
 h.innerHTML=`<div class="bb-utility"><div class="bb-header-inner"><span>Digital Product + Digital Service Studio</span><div><a href="${base}articles.html">Blog</a><a href="${base}help.html">Bantuan</a><a href="${base}compare.html">Baru dilihat</a></div></div></div>
  <div class="top-header-row">
   <a class="brand" href="${base}index.html" aria-label="Beranda Bali Bagus Dev Studio"><span class="brand-mark">BB</span><span>BALI BAGUS<small>DEV STUDIO</small></span></a>
   <nav class="studio-primary-nav" aria-label="Navigasi utama">
    <a href="${base}services.html">Solutions</a><a href="${base}products.html">Products</a><a href="${base}website-collection.html">Industries</a><a href="${base}portfolio.html">Work</a><a href="${base}articles.html">Insights</a><a href="${base}about.html">About</a>
   </nav>
   <div class="header-top-actions"><a class="header-utility" href="${base}help.html">Bantuan</a><a class="header-utility header-cart-link" href="${base}cart.html">Cart <b class="header-badge" id="cartCount">0</b></a><a class="header-login" href="${base}account.html">${isLogged()?"Akun":"Masuk"}</a><a class="studio-start-button" href="${base}booking.html">Start a Project <span>↗</span></a></div>
   <button class="mobile-toggle" id="menuToggle" type="button" aria-label="Buka menu" aria-expanded="false">${icon("menu")}</button>
  </div>
  <div class="bb-category-bar"><div class="bb-header-inner"><nav aria-label="Kategori utama"><a href="${base}services.html">Solusi</a><a href="${base}products.html">Template & Produk</a><a href="${base}website-collection.html">Website by Industry</a><a href="${base}portfolio.html">Work & Preview</a><a href="${base}articles.html">Insights</a><a href="${base}about.html">BB Studio</a></nav><a class="bb-consult" href="${base}booking.html">Konsultasi 60 menit ↗</a></div></div>
  <div class="studio-mobile-nav" id="mainNav"><div class="mobile-nav-head"><span>MENU</span><button type="button" id="mobileNavClose" aria-label="Tutup menu">×</button></div><a href="${base}services.html">Solutions</a><a href="${base}products.html">Products & Template</a><a href="${base}website-collection.html">Website by Industry</a><a href="${base}portfolio.html">Work & Preview</a><a href="${base}articles.html">Insights</a><a href="${base}about.html">BB Studio</a><a href="${base}help.html">Bantuan</a><a href="${base}compare.html">Baru dilihat</a><a href="${base}cart.html">Keranjang <b class="header-badge" id="mobileCartCount">0</b></a><a href="${base}account.html">${isLogged()?"Akun":"Masuk"}</a><a class="mobile-start" href="${base}booking.html">Mulai proyek ↗</a></div>
  <div class="header-popover recent-popover" id="headerRecent" hidden><div><b>Baru dilihat</b><a href="${base}compare.html">Lihat semua</a></div><div class="recent-list">${recent.length?recent.slice(-5).reverse().map(x=>'<a href="'+base+esc(x.url||"products.html")+'"><span>'+esc(x.name||"Produk")+'</span><small>'+esc(x.type||"Discovery")+'</small></a>').join(""):'<p>Belum ada item yang dilihat.</p>'}</div></div>`;
 updateCount();
 const toggle=document.getElementById("menuToggle"),nav=document.getElementById("mainNav"),close=document.getElementById("mobileNavClose");
 const setNav=(open)=>{nav?.classList.toggle("open",open);toggle?.setAttribute("aria-expanded",String(open));toggle?.setAttribute("aria-label",open?"Tutup menu":"Buka menu");if(toggle)toggle.innerHTML=icon(open?"close":"menu");document.body.classList.toggle("nav-open",open);};
 toggle?.addEventListener("click",()=>setNav(!nav?.classList.contains("open")));
 close?.addEventListener("click",()=>setNav(false));
 nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>setNav(false)));
 document.addEventListener("keydown",e=>{if(e.key==="Escape"&&nav?.classList.contains("open"))setNav(false)},{once:true});
}
function setupCheckoutGuard(){
 const link=$("#checkoutLink");if(!link)return;
 link.addEventListener("click",e=>{if(link.dataset.disabled==="true"){e.preventDefault();showToast("Tambahkan produk terlebih dahulu.");return}if(!requireLogin("checkout.html"))e.preventDefault()});
}
function setupAccount(){
 const box=$("#accountState");if(!box||box.dataset.bound)return;if(box)box.dataset.bound="true";
 const a=store.get("account",null);
 if(a){
   box.innerHTML=`<div class="account-welcome"><span class="eyebrow">ACCOUNT / ACTIVE</span><h2>Halo, ${esc(a.name)}.</h2><p>${esc(a.email)}</p><div class="account-grid"><div><b>Pesanan</b><small>${store.get("orders",[]).length} pesanan</small></div><div><b>Review</b><small>Review pelanggan tersedia setelah pembelian</small></div><div><b>Wishlist</b><small>${getWishlist().length} item tersimpan</small></div><div><b>Alamat</b><small>Disimpan di checkout/backend</small></div></div><button id="logoutButton" class="button">Keluar</button></div>`;
   $("#logoutButton")?.addEventListener("click",()=>{store.set("account",null);location.reload()});
 }else{
   box.innerHTML=`<form id="loginForm" class="form-card account-form"><div class="eyebrow">ACCOUNT / LOGIN</div><h2>Masuk untuk melanjutkan.</h2><p class="tiny">Akun menjadi pusat pesanan, alamat, wishlist, download, dan review setelah sistem produksi terhubung.</p><label>Nama lengkap<input name="name" required autocomplete="name"></label><label>Email<input name="email" type="email" required autocomplete="email"></label><button class="button button-dark full" type="submit">Aktifkan sesi lokal</button></form>`;
   $("#loginForm")?.addEventListener("submit",e=>{e.preventDefault();const d=Object.fromEntries(new FormData(e.currentTarget));const saved=store.set("account",{name:d.name,email:d.email,loggedIn:true,createdAt:new Date().toISOString()});if(!saved)return;const next=new URLSearchParams(location.search).get("next")||"account.html";location.href=next});
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
   const message=`Halo Bali Bagus Dev, saya ingin memesan website.

Paket: ${p.name} — ${fmt(p.price)} mulai
Template: ${t?t.name:"Belum memilih template"}
Kategori: ${t?t.category:"-"}
Nama: ${data.name||"-"}
Email: ${data.email||"-"}
WhatsApp: ${data.phone||"-"}
Nama bisnis: ${data.business||"-"}
Kebutuhan/catatan: ${data.details||"-"}

Saya ingin melanjutkan pembahasan pemesanan.`;
   const url=whatsappUrl(message); window.open(url,"_blank","noopener");
  });
 }
 form.addEventListener("submit",e=>{e.preventDefault();const data=Object.fromEntries(new FormData(form));const saved=store.set("websiteOrder",{...data,packageId:p.id,templateId:t?.id||"",createdAt:new Date().toISOString()});if(!saved)return;requireLogin(`checkout.html?orderType=website&package=${encodeURIComponent(p.id)}&template=${encodeURIComponent(t?.id||"")}`)});
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
   trackEvent("checkout_submit",{type:isWebsite?"website":"digital"});
   const websiteOrder=isWebsite?store.get("websiteOrder",null):null;
   const order={id:"ORDER-"+Date.now(),type:isWebsite?"website":"digital",customer:data,items:isWebsite?[]:cart,status:"awaiting-payment-confirmation",createdAt:new Date().toISOString(),shipping:data.shipping||"Regular",payment:data.payment||"bank_transfer",website:websiteOrder?{packageId:websiteOrder.packageId,templateId:websiteOrder.templateId}:null};
   const orders=store.get("orders",[]);orders.push(order);store.set("orders",orders);if(!isWebsite)saveCart([]);
   $("#checkoutResult").innerHTML=`<span class="form-status">Pesanan <b>${esc(order.id)}</b> tercatat dan siap ditindaklanjuti. Pada production, pembayaran, email dan WhatsApp follow-up akan diproses backend.</span>`;
   renderSummary("#checkoutSummary");
 });
 const bf=$("#bookingForm");if(bf)bf.addEventListener("submit",e=>{e.preventDefault();const data=Object.fromEntries(new FormData(bf));const arr=store.get("bookings",[]);arr.push({...data,id:"BB-"+Date.now(),status:"inquiry",createdAt:new Date().toISOString()});const saved=store.set("bookings",arr);if(!saved)return;const result=$("#bookingResult");if(result)result.innerHTML=`<span class="form-status">Brief tersimpan. Untuk respons cepat, lanjutkan melalui WhatsApp. Untuk follow-up langsung, <a href="${whatsappUrl(`Halo Bali Bagus Dev, saya baru mengirim project brief. Nama: ${data.name||"-"}. Kebutuhan: ${data.service||"-"}.`)}" target="_blank" rel="noopener">lanjut ke WhatsApp ↗</a></span>`;});
 const cf=$("#contactForm");if(cf)cf.addEventListener("submit",e=>{e.preventDefault();const data=Object.fromEntries(new FormData(cf));const arr=store.get("messages",[]);arr.push({...data,id:"MSG-"+Date.now(),status:"local"});const saved=store.set("messages",arr);if(!saved)return;const result=$("#contactResult");if(result)result.innerHTML=`<span class="form-status">Pesan tersimpan. Untuk respons cepat, lanjutkan melalui WhatsApp. <a href="${whatsappUrl(`Halo Bali Bagus Dev, saya mengirim pertanyaan melalui website. Nama: ${data.name||"-"}. Topik: ${data.topic||"-"}.`)}" target="_blank" rel="noopener">Lanjutkan via WhatsApp ↗</a></span>`;});
}
function setupSearch(){
 const b=$("#searchButton");b?.addEventListener("click",()=>{const input=$("#globalSearch"),select=$("#searchCategory");if(!input||!select)return;const q=input.value.trim(),cat=select.value;location.href=(cat==="service"?"services.html":cat==="article"?"articles.html":cat==="product"?"products.html":"products.html")+(q?"?q="+encodeURIComponent(q):"")});
 const q=new URLSearchParams(location.search).get("q");if(q&&$("#catalogSearch"))$("#catalogSearch").value=q;
 function filter(){const q=($("#catalogSearch")?.value||"").toLowerCase(),cat=$("#productFilter")?.value||"all",sort=$("#sortProducts")?.value||"featured";let list=allProducts().filter(p=>(cat==="all"||p.category===cat)&&(p.name+" "+p.desc+" "+p.category+" "+p.type).toLowerCase().includes(q));if(sort==="low")list.sort((a,b)=>a.price-b.price);if(sort==="high")list.sort((a,b)=>b.price-a.price);renderProducts("#allProducts",list)}
 $("#catalogSearch")?.addEventListener("input",filter);$("#productFilter")?.addEventListener("change",filter);$("#sortProducts")?.addEventListener("change",filter);if($("#allProducts"))filter();
}

function setupReadyUseMap(){document.querySelectorAll("[data-ready-filter]").forEach(card=>card.addEventListener("click",e=>{e.preventDefault();const raw=card.dataset.readyFilter||"";const termMap={Website:"Website Template",Landing:"Landing Page",Blogger:"Blogger Template","UI Kit":"UI Kit"};const term=termMap[raw]||raw;const input=document.querySelector("#catalogSearch"),filter=document.querySelector("#productFilter");if(filter)filter.value="all";if(input){input.value=term;input.dispatchEvent(new Event("input",{bubbles:true}));}document.querySelector("#allProducts")?.scrollIntoView({behavior:"smooth",block:"start"});}));}
function setupBlog(){const q=document.querySelector("#blogSearch"),cat=document.querySelector("#blogCategory"),cards=[...document.querySelectorAll("[data-blog-card]")],empty=document.querySelector("#blogEmpty");if(!q||!cat||!cards.length)return;const run=()=>{const term=q.value.trim().toLowerCase(),kind=cat.value;let shown=0;cards.forEach(card=>{const okCat=kind==="all"||card.dataset.category===kind;const okText=!term||card.textContent.toLowerCase().includes(term);const show=okCat&&okText;card.hidden=!show;if(show)shown++});if(empty)empty.hidden=shown!==0};q.addEventListener("input",run);cat.addEventListener("change",run)}
function setupArticleUX(){const main=document.querySelector(".article-main");if(!main)return;const bar=document.createElement("div");bar.className="reading-progress";bar.setAttribute("aria-hidden","true");document.body.appendChild(bar);const update=()=>{const max=document.documentElement.scrollHeight-innerHeight;const progress=max>0?scrollY/max:0;bar.style.transform="scaleX("+Math.max(0,Math.min(1,progress))+")"};addEventListener("scroll",update,{passive:true});update();const share=document.querySelector(".article-share");if(share&&!share.querySelector(".wa-share")){const a=document.createElement("a");a.className="wa-share";a.target="_blank";a.rel="noopener";a.href="https://wa.me/?text="+encodeURIComponent(document.title+" "+location.href);a.textContent="WhatsApp";share.appendChild(a)}const tocLinks=[...document.querySelectorAll(".toc a[href^='#']")];const sections=tocLinks.map(a=>document.querySelector(a.getAttribute("href"))).filter(Boolean);if(tocLinks.length&&sections.length){const sync=()=>{let active=0;sections.forEach((s,i)=>{if(s.getBoundingClientRect().top<=140)active=i});tocLinks.forEach((a,i)=>a.classList.toggle("is-active",i===active))};addEventListener("scroll",sync,{passive:true});sync()}}

function trackEvent(name,details={}){
 const payload={event:name,timestamp:new Date().toISOString(),page:location.pathname,...details};
 try{if(Array.isArray(window.dataLayer))window.dataLayer.push(payload);else{window.BB_EVENT_QUEUE=window.BB_EVENT_QUEUE||[];window.BB_EVENT_QUEUE.push(payload);}}catch(error){console.warn("BB analytics event skipped",error)}
}
function setupAnalytics(){
 if(document.body.dataset.analyticsBound)return;document.body.dataset.analyticsBound="true";
 const path=location.pathname.toLowerCase();
 if(path.endsWith("booking.html"))trackEvent("booking_start");
 if(path.endsWith("checkout.html"))trackEvent("checkout_start");
 if(path.endsWith("services.html"))trackEvent("service_view");
 if(path.endsWith("product-detail.html"))trackEvent("product_view");
 document.addEventListener("click",e=>{
  const el=e.target.closest("[data-track]");if(el){trackEvent(el.dataset.track,{id:el.dataset.trackId||undefined,label:(el.textContent||"").trim().slice(0,100)});return;}
  const a=e.target.closest("a");if(!a)return;
  const href=a.getAttribute("href")||"";
  if(a.closest(".hero-actions"))trackEvent("hero_cta_click",{label:(a.textContent||"").trim().slice(0,100)});
  if(href.includes("booking.html"))trackEvent("consultation_click");
  else if(href.includes("product-detail.html"))trackEvent("template_click",{id:new URL(a.href,location.href).searchParams.get("id")||undefined});
  else if(href.includes("portfolio.html")||href.includes("demo.html"))trackEvent("demo_click");
  else if(href.includes("services.html#"))trackEvent("service_view",{target:href.split("#")[1]});
  else if(href.includes("wa.me/"))trackEvent("whatsapp_click");
  if(a.closest("#needFinderOptions,.need-finder-options"))trackEvent("need_finder_select",{label:(a.textContent||"").trim().slice(0,100)});
  if(a.closest(".package-card,.package-grid,.packages-grid"))trackEvent("package_click",{label:(a.textContent||"").trim().slice(0,100)});
 });
 const bf=document.querySelector("#bookingForm");if(bf)bf.addEventListener("submit",()=>trackEvent("booking_submit"));
}
function ensureSharedShell(){
 const headerEl=document.querySelector(".site-header");
 if(!headerEl){
   const h=document.createElement("header");h.className="site-header";h.setAttribute("aria-label","Navigasi utama");
   document.body.insertBefore(h,document.body.firstElementChild||null);
 }
 let footerEl=document.querySelector("#siteFooter");
 if(!footerEl){
   footerEl=document.createElement("footer");footerEl.id="siteFooter";
   document.body.appendChild(footerEl);
 }
}
function decoratePageHeading(){
 const main=document.querySelector("main.page-main");
 if(!main||main.dataset.headingDecorated)return;
 const eyebrow=main.querySelector(":scope > .eyebrow");
 const title=main.querySelector(":scope > h1");
 const lead=main.querySelector(":scope > .lead");
 if(!eyebrow||!title)return;
 const frame=document.createElement("div");
 frame.className="page-title-frame";
 [eyebrow,title,lead].filter(Boolean).forEach(el=>frame.appendChild(el));
 main.insertBefore(frame,main.firstChild);
 main.dataset.headingDecorated="true";
}
function setupWizards(){
 const configs={bookingForm:{sizes:[3,4,4,99],titles:["Kontak","Kebutuhan","Rencana","Konfirmasi"]},websiteOrderForm:{sizes:[4,3,99],titles:["Pilihan & kontak","Bisnis","Brief & konfirmasi"]},contactForm:{sizes:[2,2,99],titles:["Kontak","Pesan"]}};
 Object.entries(configs).forEach(([id,cfg])=>{
  const form=document.getElementById(id); if(!form||form.dataset.wizardBound)return;
  const labels=[...form.querySelectorAll(":scope > label")]; if(labels.length<3)return;
  form.dataset.wizardBound="true";
  const progress=document.createElement("div");progress.className="wizard-progress";progress.setAttribute("aria-label","Tahapan formulir");
  const stepText=document.createElement("div");stepText.className="wizard-step-label";
  cfg.titles.forEach((_,i)=>{const dot=document.createElement("span");dot.dataset.step=i;progress.appendChild(dot)});
  const heading=form.querySelector("h2"); if(heading)heading.insertAdjacentElement("afterend",progress); else form.prepend(progress);
  if(heading)heading.insertAdjacentElement("afterend",stepText);
  const groups=[];let cursor=0;
  cfg.sizes.forEach(size=>{if(cursor>=labels.length)return;groups.push(labels.slice(cursor,Math.min(cursor+size,labels.length)));cursor+=size});
  let current=0;
  const actions=document.createElement("div");actions.className="wizard-actions";
  const back=document.createElement("button");back.type="button";back.className="button button-secondary";back.textContent="← Kembali";
  const next=document.createElement("button");next.type="button";next.className="button button-dark";next.textContent="Lanjut →";
  actions.append(back,next);
  const submit=form.querySelector('button[type="submit"]'); if(submit)submit.insertAdjacentElement("beforebegin",actions); else form.append(actions);
  const setRequired=(el,on)=>{el.querySelectorAll("input,select,textarea").forEach(x=>{if(x.dataset.wizardRequired===undefined)x.dataset.wizardRequired=x.required?"1":"0";x.required=on&&x.dataset.wizardRequired==="1"})};
  const render=()=>{
   groups.forEach((group,i)=>group.forEach(el=>{el.hidden=i!==current;setRequired(el,i===current)}));
   [...progress.children].forEach((dot,i)=>dot.classList.toggle("active",i<=current));
   stepText.textContent="Langkah "+(current+1)+" dari "+groups.length+" · "+(cfg.titles[current]||"Detail");
   back.hidden=current===0; next.hidden=current===groups.length-1;
   if(submit){submit.style.display=current===groups.length-1?"":"none";if(!submit.dataset.wizardClick){submit.dataset.wizardClick="1";submit.addEventListener("click",()=>{groups.flat().forEach(el=>setRequired(el,true));});}}
  };
  const validCurrent=()=>groups[current].every(el=>{const fields=[...el.querySelectorAll("input,select,textarea")];return fields.every(f=>f.reportValidity())});
  back.addEventListener("click",()=>{if(current>0){current--;render();form.scrollIntoView({behavior:"smooth",block:"start"})}});
  next.addEventListener("click",()=>{if(!validCurrent())return;if(current<groups.length-1){current++;render();form.scrollIntoView({behavior:"smooth",block:"start"})}});
  render();
 });
}
function setupContactPopup(){
 if(document.querySelector(".bb-contact-fab"))return;
 const fab=document.createElement("button");fab.className="bb-contact-fab";fab.type="button";fab.setAttribute("aria-label","Hubungi Bali Bagus Dev");fab.textContent="↗";
 const back=document.createElement("div");back.className="bb-modal-backdrop";back.innerHTML='<div class="bb-modal" role="dialog" aria-modal="true" aria-labelledby="bbModalTitle"><button class="bb-modal-close" type="button" aria-label="Tutup">×</button><div class="eyebrow">BALI BAGUS DEV</div><h2 id="bbModalTitle">Mari mulai dari kebutuhan Anda.</h2><p>Pilih cara yang paling nyaman. Kami bisa membantu menentukan website, produk digital, atau solusi custom yang sesuai dengan tujuan bisnis Anda.</p><div class="bb-modal-actions"><a class="button button-dark" href="booking.html">Mulai konsultasi ↗</a><a class="button button-white" href="https://wa.me/628218187917" target="_blank" rel="noopener">Chat WhatsApp ↗</a><a class="button button-white" href="contact.html">Kirim pertanyaan ↗</a></div></div>';
 const footer=document.querySelector("#siteFooter"); if(footer) footer.parentNode.insertBefore(fab,footer); else document.body.append(fab,back); if(footer) footer.parentNode.insertBefore(back,footer);
 const close=()=>back.classList.remove("open");fab.addEventListener("click",()=>back.classList.add("open"));back.addEventListener("click",e=>{if(e.target===back||e.target.closest(".bb-modal-close"))close()});document.addEventListener("keydown",e=>{if(e.key==="Escape")close()});
}

function loadDiscoveryUI(){if(document.querySelector('script[src$="klook-ui.js"]'))return;const x=document.createElement("script");x.src=(location.pathname.includes("/landing/")||location.pathname.includes("/website-category/"))?"../assets/js/klook-ui.js":"assets/js/klook-ui.js";document.head.appendChild(x)}
loadDiscoveryUI();
function ensureSharedChrome(){
 try{
  const h=document.querySelector(".site-header");
  if(h && !h.querySelector(".top-header-row")) header();
 }catch(error){console.error("BB header retry error",error)}
 try{
  const f=document.querySelector("#siteFooter");
  if(f && !f.querySelector(".footer-main")) footer();
 }catch(error){console.error("BB footer retry error",error)}
}
document.addEventListener("DOMContentLoaded",()=>{
 try{ensureSharedShell();}catch(error){console.error("BB shell error",error)}
 try{header();}catch(error){console.error("BB header error",error)}
 if(!document.querySelector(".site-header")?.querySelector(".top-header-row")){try{header()}catch(error){console.error("BB header retry error",error)}}
 try{footer();}catch(error){console.error("BB footer error",error)}
 if(!document.querySelector("#siteFooter")?.querySelector(".footer-main")){try{footer()}catch(error){console.error("BB footer retry error",error)}}
 try{decoratePageHeading();}catch(error){console.error("BB page title error",error)}
 requestAnimationFrame(ensureSharedChrome);
 try{setupProductChoices();}catch(error){console.error("BB wishlist setup error",error)}
 try{renderHomeMerchandising();}catch(error){console.error("BB merchandising error",error)}
 initA11y();
 updateCount();
 renderPackages();
 renderPackageExperience();
 renderPackageDetail();
 renderDemos();
 renderClients();
 renderDemoDetail();
 renderDetail();
 renderCart();
 renderSummary("#checkoutSummary");
 setupCollection();
 setupAccount();
 setupWebsiteOrder();
 setupCheckoutGuard();
 setupForms();
 setupSearch();
 setupReadyUseMap();
 setupFAQ();
 setupHelp();
 setupReviewSlider();
 initPremiumInteractions();
 setupBlog();
 setupArticleUX();
 setupWizards();
 setupContactPopup();
 const p=$("#productFilter");
 if(p)p.innerHTML=`<option value="all">Semua kategori</option>${[...new Set(allProducts().map(x=>x.category))].map(x=>`<option value="${esc(x)}">${esc(x)}</option>`).join("")}`;
 if($("#featuredProducts"))renderProducts("#featuredProducts",allProducts().slice(0,3));
 if($("#homePackages"))renderPackages("#homePackages",3);
});
window.addCart=addCart;window.buyNow=buyNow;window.removeCart=removeCart;window.changeQty=changeQty;window.toggleWishlist=toggleWishlist;window.BB_CATALOG=allProducts();window.BB_PACKAGES=PACKAGES;window.BB_WEBSITE_COLLECTION=WEBSITE_COLLECTION;window.BB_FORMAT_CURRENCY=fmt;



window.addEventListener("load",ensureSharedChrome,{once:true});

/* HERO SEARCH V3 */
(()=>{
 const input=document.getElementById("globalSearch");
 const button=document.getElementById("searchButton");
 const box=document.getElementById("heroSearch");
 if(!input||!button||!box)return;
 const chips=[...box.querySelectorAll(".search-chip")];
 const suggestions=document.getElementById("heroSearchSuggestions");
 let category="all";
 const terms={
  all:["website bisnis","template website","e-commerce","booking system"],
  product:["website template","landing page","Blogger template","UI kit"],
  service:["custom website","SEO","web app","maintenance"],
  article:["SEO","conversion","website bisnis","digital strategy"]
 };
 const renderSuggestions=()=>{
  suggestions.innerHTML=(terms[category]||terms.all).map(t=>'<button type="button" data-term="'+t+'">'+t+' ↗</button>').join("");
 };
 const submit=()=>{
  const q=input.value.trim();
  const target=category==="service"?"services.html":category==="article"?"articles.html":category==="product"?"products.html":"products.html";
  window.location.href=target+(q?"?q="+encodeURIComponent(q):"");
 };
 chips.forEach(chip=>chip.addEventListener("click",()=>{
  category=chip.dataset.searchCategory||"all";
  chips.forEach(x=>x.classList.toggle("is-active",x===chip));
  renderSuggestions();
  input.focus();
 }));
 suggestions.addEventListener("click",e=>{
  const b=e.target.closest("[data-term]");
  if(!b)return;
  input.value=b.dataset.term;
  submit();
 });
 button.addEventListener("click",submit);
 input.addEventListener("keydown",e=>{if(e.key==="Enter")submit()});
 renderSuggestions();
})();
