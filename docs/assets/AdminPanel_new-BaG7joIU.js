import{u as be,r as u,j as e}from"./index-CY_oNBJB.js";const ye=()=>{const C=be(),[l,H]=u.useState("menu"),[N,A]=u.useState(""),[m,k]=u.useState({menu:[],services:[],hero:[],testimonials:[],about:[],contact:[],pages:{},menuSections:["Chef's Choice / Premium","Modern Tasting Menu","Family Style / Share Plates","Blindfolded Dinner (Dine in the Dark)","Events & Catering Menus","Seasonal Specials & Add-ons"]}),[a,f]=u.useState(null),[G,S]=u.useState(!1),[z,D]=u.useState({show:!1,message:""}),B=u.useRef(null),[v,y]=u.useState([]),[I,L]=u.useState([]),[j,U]=u.useState(!0),[E,M]=u.useState(!1);u.useEffect(()=>{$(),K()},[]);const Y=()=>{if(!E)return null;const t=window.location.pathname||"/",r=m.pages[t]||[];return e.jsx("div",{className:"modal-overlay",children:e.jsxs("div",{className:`modal ${j?"dark":"light"}`,children:[e.jsxs("div",{className:"modal-header",children:[e.jsxs("h3",{children:["Detected Page Sections (",r.length,")"]}),e.jsx("button",{onClick:()=>M(!1),className:"btn-close",children:"Close"})]}),e.jsx("div",{className:"modal-body",children:r.length===0?e.jsx("p",{children:'No sections detected yet. Use "Detect Content" first.'}):e.jsx("ul",{className:"detected-sections-list",children:r.map(i=>{var n;return e.jsxs("li",{className:"detected-section-item",children:[e.jsx("strong",{children:i.heading||"(no heading)"}),e.jsxs("div",{className:"detected-meta",children:[e.jsxs("span",{children:["Images: ",i.images.length]}),e.jsxs("span",{children:["Chars: ",((n=i.text)==null?void 0:n.length)||0]})]})]},i.id)})})})]})})},$=()=>{try{const t=localStorage.getItem("siteContent");if(t){const r=JSON.parse(t);k(r),c("Content loaded successfully")}else{const r=W();k(r),c("Sample content loaded")}}catch(t){console.error("Error loading content:",t),c("Error loading content","error")}},W=()=>({menuSections:["Chef's Choice / Premium","Modern Tasting Menu","Family Style / Share Plates","Blindfolded Dinner (Dine in the Dark)","Events & Catering Menus","Seasonal Specials & Add-ons"],menu:[{id:"menu_1",title:"Chef's Choice / Premium: Gourmet Tasting Menu",subtitle:"An unforgettable culinary journey",description:"Experience Chef Deniz's signature 7-course tasting menu featuring the finest seasonal ingredients and innovative techniques.",price:"$250 per person",images:["/imggallery/278237612_128420249532692_7345261953775011443_n.jpg","/imggallery/278530833_660667775045864_1228330850447914314_n.jpg"],order:1,category:"Chef's Choice / Premium"},{id:"menu_2",title:"Family Style / Share Plates: Mediterranean Feast",subtitle:"Perfect for gatherings",description:"A generous selection of artisanal share plates inspired by Chef Deniz's Turkish heritage and Mediterranean influences.",price:"$180 per person (minimum 4 guests)",images:["/imggallery/299622273_867508887542151_6159437778816378211_n.jpg"],order:2,category:"Family Style / Share Plates"}],services:[{id:"service_1",title:"Private Chef Experience",subtitle:"Bespoke dining in your home",description:"Chef Deniz brings the restaurant experience to you, creating a memorable dining event in the comfort of your home.",details:["Custom menu planning based on your preferences","Ingredient sourcing from local farms and premium suppliers","Full service including plating, serving, and cleanup"],images:["/imggallery/283669946_4610482689053285_5972101986939321638_n.jpg"],order:1}],hero:[{id:"hero_1",title:"Culinary Artistry",subtitle:"Elevating dining experiences",description:"Michelin-trained Chef Deniz Sezer creates unforgettable culinary experiences with creativity and passion.",images:["/imggallery/306431890_838509097573244_4219760642394676583_n.jpg"],order:1}],testimonials:[{id:"testimonial_1",title:"An Unforgettable Experience",author:"Jennifer R.",role:"Private Dinner Client",description:"Chef Deniz created the most extraordinary dining experience for our anniversary. Every dish was a work of art, and the flavors were incredible.",images:["/imggallery/289888444_764784084705431_5104627132645856332_n.jpg"],order:1}],about:[{id:"about_1",title:"Chef Deniz Sezer",subtitle:"Culinary Visionary",description:"With training from Michelin-starred restaurants across Europe and a passion for innovative cuisine, Chef Deniz Sezer brings a unique perspective to each culinary creation. Drawing inspiration from his Turkish heritage and global experiences, he crafts dishes that tell a story through flavor.",images:["/imggallery/316119619_6422508417765998_6768193420321574199_n.jpg"],order:1}],contact:[{id:"contact_1",title:"Get in Touch",description:"For inquiries about private dining experiences, events, or collaborations, please reach out using the contact information below.",email:"chef@denizsezer.com",phone:"+1 (415) 555-7890",address:"San Francisco Bay Area, California",socialMedia:{instagram:"https://instagram.com/chefdenizsezer",facebook:"https://facebook.com/chefdenizsezer"},images:[],order:1}],pages:{"/services":[{id:"services_hero",heading:"Private Chef Services",html:"<p>Bespoke private chef experiences tailored to your tastes.</p>",text:"Bespoke private chef experiences tailored to your tastes — Michelin‑trained craft with Anatolian soul.",images:["/imggallery/denizsezeridea.jpeg"],order:0}]}}),V=async()=>{try{const t={menu:[],services:[],hero:[],testimonials:[],about:[],contact:[]},r=(s,h)=>{var d;const b=s.querySelector(h);return b&&((d=b.textContent)==null?void 0:d.trim())||""},i=document.querySelector("#hero")||document.querySelector(".hero");i&&t.hero.push({id:`hero_detected_${Date.now()}`,title:r(i,"h1, h2, .title"),subtitle:r(i,"h2, h3, .subtitle"),description:r(i,"p, .lead"),images:Array.from(i.querySelectorAll("img")).map(s=>s.getAttribute("src")||""),order:0});const n=document.querySelector("#about")||document.querySelector(".about");n&&t.about.push({id:`about_detected_${Date.now()}`,title:r(n,"h1, h2, .title"),subtitle:r(n,"h2, h3, .subtitle"),description:r(n,"p"),images:Array.from(n.querySelectorAll("img")).map(s=>s.getAttribute("src")||""),order:0});const o=document.querySelector("#contact")||document.querySelector(".contact");o&&t.contact.push({id:`contact_detected_${Date.now()}`,title:r(o,"h1, h2, .title"),subtitle:"",description:r(o,"p"),email:r(o,'a[href^="mailto:"]')||r(o,'input[name="email"], .email'),phone:r(o,'a[href^="tel:"]')||r(o,".phone"),address:r(o,".address"),images:Array.from(o.querySelectorAll("img")).map(s=>s.getAttribute("src")||""),order:0}),document.querySelectorAll(".testimonial, .testimonials, #testimonials").forEach((s,h)=>{const b=r(s,".name, .author, h3"),d=r(s,".role, .title"),p=r(s,"p, .quote");t.testimonials.push({id:`testimonial_detected_${Date.now()}_${h}`,title:p||b,subtitle:"",description:p,author:b,role:d,images:Array.from(s.querySelectorAll("img")).map(x=>x.getAttribute("src")||""),order:h})}),document.querySelectorAll(".menu, .menu-section, [data-menu]").forEach((s,h)=>{s.querySelectorAll(".menu-item, .item, li").forEach((d,p)=>{t.menu.push({id:`menu_detected_${Date.now()}_${h}_${p}`,title:r(d,"h3, .title, .name"),subtitle:r(d,".subtitle"),description:r(d,".description, p"),price:r(d,".price, .cost"),images:Array.from(d.querySelectorAll("img")).map(x=>x.getAttribute("src")||""),order:p,category:r(s,"h2, h3")||""})})}),document.querySelectorAll(".services, .service-list, [data-services]").forEach((s,h)=>{s.querySelectorAll(".service, .service-item, li").forEach((d,p)=>{t.services.push({id:`service_detected_${Date.now()}_${h}_${p}`,title:r(d,"h3, .title"),subtitle:r(d,".subtitle"),description:r(d,"p, .description"),images:Array.from(d.querySelectorAll("img")).map(x=>x.getAttribute("src")||""),order:p})})});const _=[];document.querySelectorAll('section, [role="region"], .section, .page-section, [data-section]').forEach((s,h)=>{var J;const b=r(s,"h1, h2, h3, .title"),d=s.innerHTML||"",p=((J=s.textContent)==null?void 0:J.trim())||"",x=Array.from(s.querySelectorAll("img")).map(pe=>pe.getAttribute("src")||"");(b||p||x.length)&&_.push({id:`section_${Date.now()}_${h}`,heading:b||void 0,html:d.slice(0,2e3),text:p.slice(0,2e3),images:x,order:h})});const O=window.location.pathname||"/";k(s=>({...s,menu:t.menu.length?t.menu:s.menu,services:t.services.length?t.services:s.services,hero:t.hero.length?t.hero:s.hero,testimonials:t.testimonials.length?t.testimonials:s.testimonials,about:t.about.length?t.about:s.about,contact:t.contact.length?t.contact:s.contact,pages:{...s.pages,[O]:_.length?_:s.pages[O]||[]}})),c(`Website content detected and loaded (${_.length} page sections)`)}catch(t){console.error("Error detecting website content:",t),c("Error detecting website content","error")}},K=()=>{L(["/imggallery/146036331_2570005219790657_2835741437971567938_n.jpg","/imggallery/149537444_115806570503750_6955106662995791129_n.jpg","/imggallery/278237612_128420249532692_7345261953775011443_n.jpg","/imggallery/278530833_660667775045864_1228330850447914314_n.jpg","/imggallery/280949690_725467548767333_4553270213043954652_n.jpg","/imggallery/281702814_728529544951109_6603836699030402746_n.jpg","/imggallery/283669946_4610482689053285_5972101986939321638_n.jpg","/imggallery/289888444_764784084705431_5104627132645856332_n.jpg","/imggallery/290201033_365343522335822_6989121683645521651_n.jpg","/imggallery/298262238_1003468893663263_5635158051316616602_n.jpg","/imggallery/299220748_486389583312196_2918701892607691025_n.jpg","/imggallery/299622273_867508887542151_6159437778816378211_n.jpg","/imggallery/306431890_838509097573244_4219760642394676583_n.jpg","/imggallery/310038471_641913360867435_675961683670589393_n.jpg","/imggallery/312832450_183603154242544_3364490850470574658_n.jpg","/imggallery/313873528_1866452180360149_4966383405849033872_n.jpg","/imggallery/316119619_6422508417765998_6768193420321574199_n.jpg","/imggallery/318235503_536005258138307_7765495500139449825_n.jpg","/imggallery/324544066_152195107605724_1918904625421334616_n.jpg","/imggallery/339508856_885513272544585_8268982997877371805_n.jpg","/imggallery/340490753_536729521725498_7803232779063458043_n.jpg","/imggallery/denizsezeridea.jpeg","/imggallery/vegetable.jpg","/imggallery/vegi.jpeg"])},c=(t,r="success")=>{D({show:!0,message:t,type:r}),setTimeout(()=>{D({show:!1,message:""})},3e3)},Q=()=>{try{const t={...m};localStorage.setItem("siteContent",JSON.stringify(t)),c("Changes saved successfully!");try{const r=new CustomEvent("siteContentUpdated",{detail:{content:t}});window.dispatchEvent(r)}catch(r){console.warn("Could not dispatch siteContentUpdated event:",r)}}catch(t){console.error("Error saving changes:",t),c("Error saving changes","error")}},X=async()=>{try{const t={...m};localStorage.setItem("publishedContent",JSON.stringify(t)),c("Content saved locally and attempting to publish...");const r=prompt("Your GitHub username:")||"albertfast",i=prompt("GitHub repository name:")||"teiraculinaria",n=prompt("Your GitHub Personal Access Token (PAT) (This should ideally be handled by a backend service for security):");if(!r||!i||!n){c("Publishing cancelled. GitHub username, repository, and token are required.","error");return}c(`Simulating deploy for ${r}/${i}... This would involve:
      1. Building the project (e.g., 'npm run build' on a server).
      2. Committing the new 'dist' folder or updated content JSON.
      3. Pushing to GitHub (origin main/gh-pages).
      4. Triggering GitHub Pages/Vercel/Netlify build.`,"info"),await new Promise(o=>setTimeout(o,3e3)),c(`Content successfully published to ${r}/${i} repository! GitHub Actions triggered (simulated).`,"success")}catch(t){console.error("Error publishing changes:",t),c("Error publishing changes","error")}},Z=()=>{const t=prompt("Enter new section name:");t&&t.trim()!==""&&(k(r=>({...r,menuSections:[...r.menuSections,t.trim()]})),c(`"${t}" section successfully added`))},P=()=>{let t={id:`${l}_${Date.now()}`,title:"",description:"",images:[],order:m[l].length};switch(l){case"menu":t={...t,price:"",subtitle:"",category:N||(m.menuSections.length>0?m.menuSections[0]:"General")};break;case"services":t={...t,details:[]};break;case"testimonials":t={...t,author:"",role:""};break;case"contact":t={...t,email:"",phone:"",address:"",socialMedia:{}};break}f(t),S(!0),y([])},ee=t=>{f(JSON.parse(JSON.stringify(t))),S(!0),y(t.images||[])},te=t=>{window.confirm("Are you sure you want to delete this item?")&&(k(r=>{const i=r[l].filter(n=>n.id!==t);return{...r,[l]:i}}),c("Item successfully deleted"))},g=t=>{if(!a)return;const{name:r,value:i}=t.target;if(r.includes(".")){const[n,o]=r.split(".");f({...a,[n]:{...a[n]||{},[o]:i}})}else f({...a,[r]:i})},re=(t,r)=>{if(!a||l!=="services")return;const i=[...a.details||[]];i[r]=t,f({...a,details:i})},ie=()=>{if(!a||l!=="services")return;const t=[...a.details||[],""];f({...a,details:t})},ne=t=>{if(!a||l!=="services")return;const r=[...a.details||[]];r.splice(t,1),f({...a,details:r})},F=t=>{a&&(v.includes(t)?y(v.filter(r=>r!==t)):y([...v,t]))},oe=t=>{const r=t.target.files;if(!r||r.length===0)return;const i=Math.min(r.length,I.length),n=I.slice(0,i);y(o=>[...o,...n]),c("Images uploaded")},ae=t=>{if(t.preventDefault(),!a)return;const r={...a,images:v};k(i=>{const n={...i},o=[...i[l]],w=o.findIndex(T=>T.id===r.id);return w>=0?(o[w]=r,c("Item updated successfully")):(o.push(r),c("New item added successfully")),n[l]=o,n}),S(!1),f(null),y([])},q=()=>{window.confirm("Are you sure you want to cancel editing? All your changes will be lost.")&&(S(!1),f(null),y([]))},se=N?m.menu.filter(t=>t.category===N):m.menu,le=()=>{U(!j)},ce=()=>e.jsxs("header",{className:`header ${j?"dark":"light"}`,children:[e.jsxs("div",{className:"logo-container",children:[e.jsx("div",{className:"logo",children:e.jsx("img",{src:"/imggallery/denizsezeridea.jpeg",alt:"Logo"})}),e.jsx("h1",{children:"Deniz Sezer | Admin Panel"})]}),e.jsxs("div",{className:"header-actions",children:[e.jsx("button",{onClick:()=>C("/contact"),className:"btn-outline",children:"Contact"}),e.jsx("button",{onClick:()=>C("/"),className:"btn-outline",children:"Home"}),e.jsx("button",{onClick:()=>window.open("/admin-local","_blank"),className:"btn-info",children:"Modern Admin"}),e.jsx("button",{onClick:()=>C("/menu"),className:"btn-warning",children:"Menu"}),e.jsx("button",{onClick:V,className:"btn-primary",children:"Detect Content"}),e.jsx("button",{onClick:()=>M(!E),className:"btn-info",children:"Show Page Sections"}),e.jsx("button",{onClick:()=>{const t="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(m,null,2));window.open(t,"_blank")},className:"btn-outline",children:"Export JSON"}),e.jsx("button",{onClick:()=>{var t;(t=navigator.clipboard)==null||t.writeText(JSON.stringify(m,null,2)).then(()=>{c("Content JSON copied to clipboard")}).catch(()=>{c("Failed to copy JSON to clipboard","error")})},className:"btn-outline",children:"Copy JSON"}),e.jsx("button",{onClick:le,className:`btn-theme ${j?"light":"dark"}`,children:j?"🌞":"🌙"})]})]}),de=()=>e.jsx("nav",{className:`main-nav ${j?"dark":"light"}`,children:e.jsx("ul",{children:R.map(t=>e.jsx("li",{children:e.jsx("button",{onClick:()=>{H(t.id),A("")},className:l===t.id?"active":"",children:t.label})},t.id))})}),R=[{id:"menu",label:"Menu"},{id:"services",label:"Services"},{id:"hero",label:"Hero"},{id:"testimonials",label:"Testimonials"},{id:"about",label:"About"},{id:"contact",label:"Contact"}],me=()=>z.show&&e.jsx("div",{className:`notification ${z.type}`,children:e.jsxs("div",{className:"notification-content",children:[e.jsx("p",{children:z.message}),e.jsx("button",{onClick:()=>D({show:!1,message:""}),children:"×"})]})}),ge=()=>e.jsxs("div",{className:"menu-sections",children:[e.jsxs("div",{className:"section-header",children:[e.jsx("h2",{children:"Menu Sections"}),e.jsx("button",{onClick:Z,className:"btn-primary",children:"+ Add New Section"})]}),e.jsxs("div",{className:"section-buttons",children:[e.jsx("button",{onClick:()=>A(""),className:N===""?"active":"",children:"All"}),(m.menuSections||[]).map(t=>e.jsx("button",{onClick:()=>A(t),className:N===t?"active":"",children:t},t))]})]}),ue=()=>{var r;let t=[];switch(l){case"menu":t=se;break;default:Array.isArray(m[l])?t=m[l]:t=[]}return e.jsxs("div",{className:"content-list",children:[e.jsxs("div",{className:"content-header",children:[e.jsx("h2",{children:N||((r=R.find(i=>i.id===l))==null?void 0:r.label)}),e.jsx("button",{onClick:P,className:"btn-primary",children:"+ Add New"})]}),e.jsx("div",{className:"items-container",children:t.length===0?e.jsxs("div",{className:"empty-state",children:[e.jsx("p",{children:"No content in this section yet."}),e.jsx("button",{onClick:P,className:"btn-primary",children:"Add First Item"})]}):t.map(i=>e.jsxs("div",{className:"content-item",children:[e.jsxs("div",{className:"item-header",children:[e.jsx("h3",{children:i.title}),i.subtitle&&e.jsx("p",{className:"subtitle",children:i.subtitle})]}),e.jsxs("div",{className:"item-body",children:[e.jsxs("div",{className:"item-text",children:[e.jsx("p",{className:"description",children:i.description}),l==="menu"&&e.jsxs("p",{className:"price",children:[e.jsx("strong",{children:"Price:"})," ",i.price]}),l==="testimonials"&&e.jsxs("p",{className:"author",children:[e.jsx("strong",{children:"Author:"})," ",i.author," ",i.role&&`(${i.role})`]}),l==="services"&&i.details&&e.jsxs("div",{className:"details",children:[e.jsx("strong",{children:"Details:"}),e.jsx("ul",{children:i.details.map((n,o)=>e.jsx("li",{children:n},o))})]}),l==="contact"&&e.jsxs("div",{className:"contact-details",children:[i.email&&e.jsxs("p",{children:[e.jsx("strong",{children:"Email:"})," ",i.email]}),i.phone&&e.jsxs("p",{children:[e.jsx("strong",{children:"Phone:"})," ",i.phone]}),i.address&&e.jsxs("p",{children:[e.jsx("strong",{children:"Address:"})," ",i.address]})]})]}),i.images&&i.images.length>0&&e.jsx("div",{className:"item-images",children:i.images.map((n,o)=>e.jsx("div",{className:"image-thumbnail",children:e.jsx("img",{src:n,alt:`${i.title} ${o+1}`})},o))})]}),e.jsxs("div",{className:"item-actions",children:[e.jsx("button",{className:"btn-edit",onClick:()=>ee(i),children:"Edit"}),e.jsx("button",{className:"btn-delete",onClick:()=>te(i.id),children:"Delete"})]})]},i.id))})]})},he=()=>{var t,r,i;return a?e.jsxs("div",{className:"edit-form-container",children:[e.jsxs("div",{className:"edit-form-header",children:[e.jsx("h2",{children:a.id.includes("_new")?"Add New Item":"Edit Item"}),e.jsx("button",{onClick:q,className:"btn-close",children:"×"})]}),e.jsxs("form",{onSubmit:ae,className:"edit-form",children:[e.jsxs("div",{className:"form-grid",children:[e.jsxs("div",{className:"form-column",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"title",children:"Title"}),e.jsx("input",{type:"text",id:"title",name:"title",value:a.title,onChange:g,required:!0})]}),(l==="menu"||l==="services"||l==="testimonials"||l==="hero"||l==="about")&&e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"subtitle",children:"Subtitle"}),e.jsx("input",{type:"text",id:"subtitle",name:"subtitle",value:a.subtitle||"",onChange:g})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"description",children:"Description"}),e.jsx("textarea",{id:"description",name:"description",value:a.description,onChange:g,rows:4,required:!0})]}),l==="menu"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"price",children:"Price"}),e.jsx("input",{type:"text",id:"price",name:"price",value:a.price||"",onChange:g,placeholder:"e.g: $250 per person",required:!0})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"category",children:"Category"}),e.jsxs("select",{id:"category",name:"category",value:a.category||"",onChange:g,required:!0,children:[e.jsx("option",{value:"",children:"Select Category"}),m.menuSections.map(n=>e.jsx("option",{value:n,children:n},n))]})]})]}),l==="testimonials"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"author",children:"Author"}),e.jsx("input",{type:"text",id:"author",name:"author",value:a.author||"",onChange:g,required:!0})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"role",children:"Title/Role (optional)"}),e.jsx("input",{type:"text",id:"role",name:"role",value:a.role||"",onChange:g})]})]})]}),e.jsxs("div",{className:"form-column",children:[l==="contact"&&e.jsxs("div",{className:"contact-form-section",children:[e.jsx("h3",{children:"Contact Details"}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"email",children:"Email"}),e.jsx("input",{type:"email",id:"email",name:"email",value:a.email||"",onChange:g})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"phone",children:"Phone"}),e.jsx("input",{type:"text",id:"phone",name:"phone",value:a.phone||"",onChange:g})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"address",children:"Address"}),e.jsx("textarea",{id:"address",name:"address",value:a.address||"",onChange:g,rows:3})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Social Media"}),e.jsxs("div",{className:"social-media-inputs",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"instagram",children:"Instagram"}),e.jsx("input",{type:"text",id:"instagram",name:"socialMedia.instagram",value:((t=a.socialMedia)==null?void 0:t.instagram)||"",onChange:g,placeholder:"Instagram URL"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"facebook",children:"Facebook"}),e.jsx("input",{type:"text",id:"facebook",name:"socialMedia.facebook",value:((r=a.socialMedia)==null?void 0:r.facebook)||"",onChange:g,placeholder:"Facebook URL"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"twitter",children:"Twitter"}),e.jsx("input",{type:"text",id:"twitter",name:"socialMedia.twitter",value:((i=a.socialMedia)==null?void 0:i.twitter)||"",onChange:g,placeholder:"Twitter URL"})]})]})]})]}),l==="services"&&e.jsxs("div",{className:"service-details-section",children:[e.jsx("h3",{children:"Service Details"}),(a.details||[]).map((n,o)=>e.jsxs("div",{className:"detail-item",children:[e.jsx("input",{type:"text",value:n,onChange:w=>re(w.target.value,o),placeholder:`Detay ${o+1}`}),e.jsx("button",{type:"button",onClick:()=>ne(o),className:"btn-remove",children:"Delete"})]},o)),e.jsx("button",{type:"button",onClick:ie,className:"btn-secondary",children:"+ Add Detail"})]}),e.jsxs("div",{className:"image-selection-section",children:[e.jsx("h3",{children:"Resimler"}),e.jsxs("div",{className:"selected-images",children:[e.jsx("h4",{children:"Selected Images"}),e.jsx("div",{className:"image-grid",children:v.length===0?e.jsx("p",{className:"no-images",children:"No images selected yet"}):v.map((n,o)=>e.jsxs("div",{className:"image-thumbnail selected",children:[e.jsx("img",{src:n,alt:`Selected ${o+1}`}),e.jsx("button",{type:"button",onClick:()=>F(n),className:"remove-btn",children:"×"})]},o))})]}),e.jsxs("div",{className:"image-upload",children:[e.jsx("h4",{children:"Upload Images"}),e.jsxs("div",{className:"upload-container",children:[e.jsx("input",{type:"file",ref:B,onChange:oe,multiple:!0,accept:"image/*",id:"file-upload"}),e.jsx("label",{htmlFor:"file-upload",className:"upload-label",children:"Select Images"})]}),e.jsx("small",{className:"info-text",children:"Note: In demo mode, selected files will be chosen from the existing image gallery instead of server storage."})]}),e.jsxs("div",{className:"available-images",children:[e.jsx("h4",{children:"Mevcut Resimler"}),e.jsx("div",{className:"image-grid",children:I.map((n,o)=>e.jsx("div",{className:`image-thumbnail ${v.includes(n)?"selected":""}`,onClick:()=>F(n),children:e.jsx("img",{src:n,alt:`Available ${o+1}`})},o))})]})]})]})]}),e.jsxs("div",{className:"form-actions",children:[e.jsx("button",{type:"submit",className:"btn-success",children:"Save"}),e.jsx("button",{type:"button",onClick:q,className:"btn-secondary",children:"Cancel"})]})]})]}):null};return e.jsxs("div",{className:`admin-panel ${j?"dark-mode":"light-mode"}`,children:[e.jsx(ce,{}),e.jsx(de,{}),e.jsxs("div",{className:"main-container",children:[e.jsxs("div",{className:"action-bar",children:[e.jsx("button",{onClick:Q,className:"btn-primary",children:"Save"}),e.jsx("button",{onClick:X,className:"btn-success",children:"Publish"}),e.jsx("button",{onClick:$,className:"btn-info",children:"Reload Content"})]}),e.jsxs("div",{className:"content-container",children:[l==="menu"&&e.jsx(ge,{}),G?e.jsx(he,{}):e.jsx(ue,{})]})]}),e.jsx(me,{}),e.jsx(Y,{}),e.jsx("style",{jsx:!0,children:`
        :root {
          --primary-color: #a16207;
          --secondary-color: #1e293b;
          --accent-color: #f39c12;
          --success-color: #2ecc71;
          --error-color: #e74c3c;
          --info-color: #3498db;
          --warning-color: #f1c40f;
          --dark-bg: #0f172a;
          --dark-card: #1e293b;
          --dark-text: #f8fafc;
          --light-bg: #f8fafc;
          --light-card: #ffffff;
          --light-text: #0f172a;
          --border-radius: 8px;
          --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          --transition: all 0.3s ease;
        }
        
        .admin-panel {
          min-height: 100vh;
          font-family: 'Inter', sans-serif;
        }
        
        .dark-mode {
          background-color: var(--dark-bg);
          color: var(--dark-text);
        }
        
        .light-mode {
          background-color: var(--light-bg);
          color: var(--light-text);
        }
        
        /* Header Styles */
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .header.dark {
          background-color: var(--dark-card);
        }
        
        .header.light {
          background-color: var(--light-card);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }
        
        .logo-container {
          display: flex;
          align-items: center;
        }
        
        .logo {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          overflow: hidden;
          margin-right: 1rem;
        }
        
        .logo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .header h1 {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0;
        }
        
        .header-actions {
          display: flex;
          gap: 0.5rem;
        }
        
        /* Navigation Styles */
        .main-nav {
          padding: 0.5rem;
        }
        
        .main-nav.dark {
          background-color: var(--dark-card);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .main-nav.light {
          background-color: var(--light-card);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }
        
        .main-nav ul {
          display: flex;
          list-style: none;
          padding: 0;
          margin: 0;
          overflow-x: auto;
        }
        
        .main-nav li {
          margin: 0;
        }
        
        .main-nav button {
          padding: 0.75rem 1.25rem;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          font-weight: 500;
          color: inherit;
          position: relative;
          transition: var(--transition);
        }
        
        .main-nav button.active {
          color: var(--accent-color);
        }
        
        .main-nav button.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 20%;
          width: 60%;
          height: 3px;
          background-color: var(--accent-color);
          border-radius: 3px;
        }
        
        /* Main Container */
        .main-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1.5rem;
        }
        
        /* Action Bar */
        .action-bar {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        
        /* Menu Sections */
        .menu-sections {
          margin-bottom: 2rem;
          padding: 1.5rem;
          border-radius: var(--border-radius);
          background-color: rgba(255, 255, 255, 0.05);
        }
        
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .section-header h2 {
          margin: 0;
          font-size: 1.25rem;
        }
        
        .section-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1rem;
        }
        
        .section-buttons button {
          padding: 0.5rem 1rem;
          background-color: rgba(255, 255, 255, 0.1);
          border: none;
          border-radius: var(--border-radius);
          cursor: pointer;
          transition: var(--transition);
          color: inherit;
        }
        
        .section-buttons button.active {
          background-color: var(--accent-color);
          color: #fff;
        }
        
        /* Content List */
        .content-list {
          margin-top: 1rem;
        }
        
        .content-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        
        .content-header h2 {
          margin: 0;
          font-size: 1.5rem;
        }
        
        .items-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
          gap: 1.5rem;
        }
        
        .content-item {
          border-radius: var(--border-radius);
          overflow: hidden;
          box-shadow: var(--shadow);
          transition: var(--transition);
        }
        
        .dark-mode .content-item {
          background-color: var(--dark-card);
        }
        
        .light-mode .content-item {
          background-color: var(--light-card);
        }
        
        .item-header {
          padding: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .light-mode .item-header {
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }
        
        .item-header h3 {
          margin: 0 0 0.5rem 0;
          font-size: 1.2rem;
        }
        
        .subtitle {
          margin: 0;
          font-size: 0.9rem;
          opacity: 0.7;
        }
        
        .item-body {
          padding: 1rem;
        }
        
        .description {
          margin-top: 0;
        }
        
        .details ul {
          margin-top: 0.5rem;
          padding-left: 1.5rem;
        }
        
        .item-images {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1rem;
        }
        
        .image-thumbnail {
          width: 80px;
          height: 80px;
          border-radius: 4px;
          overflow: hidden;
          position: relative;
        }
        
        .image-thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .item-actions {
          display: flex;
          padding: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .light-mode .item-actions {
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }
        
        /* Empty State */
        .empty-state {
          grid-column: 1 / -1;
          text-align: center;
          padding: 3rem;
          background-color: rgba(255, 255, 255, 0.05);
          border-radius: var(--border-radius);
        }
        
        .empty-state p {
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }
        
        /* Edit Form */
        .edit-form-container {
          background-color: rgba(0, 0, 0, 0.3);
          border-radius: var(--border-radius);
          padding: 2rem;
          margin-top: 1rem;
        }
        
        .light-mode .edit-form-container {
          background-color: rgba(0, 0, 0, 0.05);
        }
        
        .edit-form-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        
        .edit-form-header h2 {
          margin: 0;
        }
        
        .btn-close {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: inherit;
          opacity: 0.7;
          transition: opacity 0.2s;
        }
        
        .btn-close:hover {
          opacity: 1;
        }
        
        .form-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
        }
        
        .form-group {
          margin-bottom: 1rem;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }
        
        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 0.75rem;
          border-radius: 4px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background-color: rgba(255, 255, 255, 0.1);
          color: inherit;
          font-family: inherit;
          font-size: 1rem;
        }
        
        .light-mode .form-group input,
        .light-mode .form-group textarea,
        .light-mode .form-group select {
          border: 1px solid rgba(0, 0, 0, 0.2);
          background-color: rgba(0, 0, 0, 0.05);
        }
        
        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          outline: none;
          border-color: var(--accent-color);
        }
        
        .detail-item {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }
        
        .service-details-section,
        .contact-form-section,
        .image-selection-section {
          margin-top: 2rem;
        }
        
        .service-details-section h3,
        .contact-form-section h3,
        .image-selection-section h3 {
          margin-top: 0;
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }
        
        .selected-images,
        .image-upload,
        .available-images {
          margin-bottom: 1.5rem;
        }
        
        .selected-images h4,
        .image-upload h4,
        .available-images h4 {
          margin-top: 0;
          margin-bottom: 0.5rem;
          font-size: 1rem;
        }
        
        .image-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
          gap: 0.5rem;
          margin-top: 0.5rem;
        }
        
        .image-thumbnail.selected {
          box-shadow: 0 0 0 3px var(--accent-color);
        }
        
        .image-thumbnail .remove-btn {
          position: absolute;
          top: 2px;
          right: 2px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          font-size: 1rem;
          line-height: 0;
          padding: 0;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .upload-container {
          display: flex;
          align-items: center;
          margin-top: 0.5rem;
        }
        
        #file-upload {
          display: none;
        }
        
        .upload-label {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          background-color: var(--secondary-color);
          color: white;
          border-radius: 4px;
          cursor: pointer;
          transition: var(--transition);
        }
        
        .upload-label:hover {
          background-color: #2c3e50;
        }
        
        .info-text {
          display: block;
          margin-top: 0.5rem;
          font-size: 0.8rem;
          opacity: 0.7;
        }
        
        .form-actions {
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
          margin-top: 2rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .light-mode .form-actions {
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }
        
        .social-media-inputs {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        
        .no-images {
          grid-column: 1 / -1;
          text-align: center;
          padding: 1rem;
          background-color: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
          font-size: 0.9rem;
        }
        
        .light-mode .no-images {
          background-color: rgba(0, 0, 0, 0.05);
        }
        
        /* Button Styles */
        button {
          cursor: pointer;
          border: none;
          font-family: inherit;
          font-size: 1rem;
          transition: var(--transition);
        }
        
        .btn-primary {
          background-color: var(--primary-color);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 30px;
        }
        
        .btn-primary:hover {
          background-color: #8f5804;
        }
        
        .btn-success {
          background-color: var(--success-color);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 30px;
        }
        
        .btn-success:hover {
          background-color: #27ae60;
        }
        
        .btn-info {
          background-color: var(--info-color);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 30px;
        }
        
        .btn-info:hover {
          background-color: #2980b9;
        }
        
        .btn-warning {
          background-color: var(--warning-color);
          color: #333;
          padding: 0.75rem 1.5rem;
          border-radius: 30px;
        }
        
        .btn-warning:hover {
          background-color: #f39c12;
        }
        
        .btn-secondary {
          background-color: var(--secondary-color);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 30px;
        }
        
        .btn-secondary:hover {
          background-color: #2c3e50;
        }
        
        .btn-outline {
          background-color: transparent;
          color: inherit;
          padding: 0.75rem 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 30px;
        }
        
        .light-mode .btn-outline {
          border: 1px solid rgba(0, 0, 0, 0.3);
        }
        
        .btn-outline:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
        
        .light-mode .btn-outline:hover {
          background-color: rgba(0, 0, 0, 0.05);
        }
        
        .btn-theme {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }
        
        .btn-theme.light {
          background-color: #f39c12;
          color: #333;
        }
        
        .btn-theme.dark {
          background-color: #2c3e50;
          color: white;
        }
        
        .btn-edit {
          background-color: var(--info-color);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 30px;
          font-size: 0.9rem;
        }
        
        .btn-edit:hover {
          background-color: #2980b9;
        }
        
        .btn-delete {
          background-color: var(--error-color);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 30px;
          font-size: 0.9rem;
          margin-left: 0.5rem;
        }
        
        .btn-delete:hover {
          background-color: #c0392b;
        }
        
        .btn-remove {
          background-color: var(--error-color);
          color: white;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.8rem;
        }
        
        /* Notification Styles */
        .notification {
          position: fixed;
          bottom: 20px;
          right: 20px;
          padding: 0.5rem 1rem;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow);
          z-index: 1000;
          min-width: 300px;
          opacity: 0;
          animation: fadeIn 0.3s forwards;
        }
        
        .notification.success {
          background-color: var(--success-color);
          color: white;
        }
        
        .notification.error {
          background-color: var(--error-color);
          color: white;
        }
        
        .notification-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .notification-content p {
          margin: 0;
          padding: 0.5rem 0;
        }
        
        .notification-content button {
          background: none;
          border: none;
          color: inherit;
          font-size: 1.2rem;
          cursor: pointer;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Responsive Adjustments */
        @media (max-width: 768px) {
          .form-grid {
            grid-template-columns: 1fr;
          }
          
          .items-container {
            grid-template-columns: 1fr;
          }
          
          .header {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }
          
          .logo-container {
            flex-direction: column;
          }
          
          .logo {
            margin-right: 0;
            margin-bottom: 0.5rem;
          }
          
          .header-actions {
            flex-wrap: wrap;
            justify-content: center;
          }
          
          .main-nav ul {
            justify-content: center;
          }
          
          .action-bar {
            flex-direction: column;
          }
          
          .content-header {
            flex-direction: column;
            gap: 1rem;
          }
          
          /* Modal Overlay Styles */
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1001;
          }
          
          .modal {
            background-color: var(--light-card);
            padding: 1.5rem;
            border-radius: var(--border-radius);
            max-width: 90%;
            max-height: 90%;
            overflow-y: auto;
          }
          
          .modal.dark {
            background-color: var(--dark-card);
          }
          
          .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
          }
          
          .detected-sections-list {
            list-style: none;
            padding: 0;
          }
          
          .detected-section-item {
            padding: 0.75rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .modal.light .detected-section-item {
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          }
          
          .detected-meta {
            font-size: 0.8rem;
            opacity: 0.7;
            margin-top: 0.25rem;
          }
        }
      `})]})};export{ye as default};
