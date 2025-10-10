import{u as be,r as u,f as _,j as e}from"./index-YMUwd-cO.js";const je=()=>{const A=be(),[l,G]=u.useState("menu"),[N,I]=u.useState(""),[m,k]=u.useState({menu:[],services:[],hero:[],testimonials:[],about:[],contact:[],pages:{},menuSections:["Chef's Choice / Premium","Modern Tasting Menu","Family Style / Share Plates","Blindfolded Dinner (Dine in the Dark)","Events & Catering Menus","Seasonal Specials & Add-ons"]}),[a,x]=u.useState(null),[L,S]=u.useState(!1),[$,D]=u.useState({show:!1,message:""}),U=u.useRef(null),[v,j]=u.useState([]),[E,B]=u.useState([]),[y,Y]=u.useState(!0),[z,M]=u.useState(!1);u.useEffect(()=>{q(),K()},[]);const W=()=>{if(!z)return null;const t=window.location.pathname||"/",r=m.pages[t]||[];return e.jsx("div",{className:"modal-overlay",children:e.jsxs("div",{className:`modal ${y?"dark":"light"}`,children:[e.jsxs("div",{className:"modal-header",children:[e.jsxs("h3",{children:["Detected Page Sections (",r.length,")"]}),e.jsx("button",{onClick:()=>M(!1),className:"btn-close",children:"Close"})]}),e.jsx("div",{className:"modal-body",children:r.length===0?e.jsx("p",{children:'No sections detected yet. Use "Detect Content" first.'}):e.jsx("ul",{className:"detected-sections-list",children:r.map(o=>{var i;return e.jsxs("li",{className:"detected-section-item",children:[e.jsx("strong",{children:o.heading||"(no heading)"}),e.jsxs("div",{className:"detected-meta",children:[e.jsxs("span",{children:["Images: ",o.images.length]}),e.jsxs("span",{children:["Chars: ",((i=o.text)==null?void 0:i.length)||0]})]})]},o.id)})})})]})})},q=()=>{try{const t=localStorage.getItem("siteContent");if(t){const r=JSON.parse(t);(!r.menuSections||r.menuSections.length===0)&&(r.menuSections=_.map(o=>o.title)),(!r.menu||r.menu.length===0)&&(r.menu=_.map((o,i)=>({id:o.key,title:o.title,description:o.desc,images:[o.img],order:i+1,category:o.title}))),k(r),c("Content loaded successfully")}else{const r={menuSections:_.map(o=>o.title),menu:_.map((o,i)=>({id:o.key,title:o.title,description:o.desc,images:[o.img],order:i+1,category:o.title})),services:[],hero:[],testimonials:[],about:[],contact:[],pages:{}};k(r),c("Content loaded from fallback data")}}catch(t){console.error("Error loading content:",t),c("Error loading content","error")}},V=async()=>{try{const t={menu:[],services:[],hero:[],testimonials:[],about:[],contact:[]},r=(s,h)=>{var d;const b=s.querySelector(h);return b&&((d=b.textContent)==null?void 0:d.trim())||""},o=document.querySelector("#hero")||document.querySelector(".hero");o&&t.hero.push({id:`hero_detected_${Date.now()}`,title:r(o,"h1, h2, .title"),subtitle:r(o,"h2, h3, .subtitle"),description:r(o,"p, .lead"),images:Array.from(o.querySelectorAll("img")).map(s=>s.getAttribute("src")||""),order:0});const i=document.querySelector("#about")||document.querySelector(".about");i&&t.about.push({id:`about_detected_${Date.now()}`,title:r(i,"h1, h2, .title"),subtitle:r(i,"h2, h3, .subtitle"),description:r(i,"p"),images:Array.from(i.querySelectorAll("img")).map(s=>s.getAttribute("src")||""),order:0});const n=document.querySelector("#contact")||document.querySelector(".contact");n&&t.contact.push({id:`contact_detected_${Date.now()}`,title:r(n,"h1, h2, .title"),subtitle:"",description:r(n,"p"),email:r(n,'a[href^="mailto:"]')||r(n,'input[name="email"], .email'),phone:r(n,'a[href^="tel:"]')||r(n,".phone"),address:r(n,".address"),images:Array.from(n.querySelectorAll("img")).map(s=>s.getAttribute("src")||""),order:0}),document.querySelectorAll(".testimonial, .testimonials, #testimonials").forEach((s,h)=>{const b=r(s,".name, .author, h3"),d=r(s,".role, .title"),p=r(s,"p, .quote");t.testimonials.push({id:`testimonial_detected_${Date.now()}_${h}`,title:p||b,subtitle:"",description:p,author:b,role:d,images:Array.from(s.querySelectorAll("img")).map(f=>f.getAttribute("src")||""),order:h})}),document.querySelectorAll(".menu, .menu-section, [data-menu]").forEach((s,h)=>{s.querySelectorAll(".menu-item, .item, li").forEach((d,p)=>{t.menu.push({id:`menu_detected_${Date.now()}_${h}_${p}`,title:r(d,"h3, .title, .name"),subtitle:r(d,".subtitle"),description:r(d,".description, p"),price:r(d,".price, .cost"),images:Array.from(d.querySelectorAll("img")).map(f=>f.getAttribute("src")||""),order:p,category:r(s,"h2, h3")||""})})}),document.querySelectorAll(".services, .service-list, [data-services]").forEach((s,h)=>{s.querySelectorAll(".service, .service-item, li").forEach((d,p)=>{t.services.push({id:`service_detected_${Date.now()}_${h}_${p}`,title:r(d,"h3, .title"),subtitle:r(d,".subtitle"),description:r(d,"p, .description"),images:Array.from(d.querySelectorAll("img")).map(f=>f.getAttribute("src")||""),order:p})})});const C=[];document.querySelectorAll('section, [role="region"], .section, .page-section, [data-section]').forEach((s,h)=>{var J;const b=r(s,"h1, h2, h3, .title"),d=s.innerHTML||"",p=((J=s.textContent)==null?void 0:J.trim())||"",f=Array.from(s.querySelectorAll("img")).map(pe=>pe.getAttribute("src")||"");(b||p||f.length)&&C.push({id:`section_${Date.now()}_${h}`,heading:b||void 0,html:d.slice(0,2e3),text:p.slice(0,2e3),images:f,order:h})});const H=window.location.pathname||"/";k(s=>({...s,menu:t.menu.length?t.menu:s.menu,services:t.services.length?t.services:s.services,hero:t.hero.length?t.hero:s.hero,testimonials:t.testimonials.length?t.testimonials:s.testimonials,about:t.about.length?t.about:s.about,contact:t.contact.length?t.contact:s.contact,pages:{...s.pages,[H]:C.length?C:s.pages[H]||[]}})),c(`Website content detected and loaded (${C.length} page sections)`)}catch(t){console.error("Error detecting website content:",t),c("Error detecting website content","error")}},K=()=>{B(["/imggallery/146036331_2570005219790657_2835741437971567938_n.jpg","/imggallery/149537444_115806570503750_6955106662995791129_n.jpg","/imggallery/278237612_128420249532692_7345261953775011443_n.jpg","/imggallery/278530833_660667775045864_1228330850447914314_n.jpg","/imggallery/280949690_725467548767333_4553270213043954652_n.jpg","/imggallery/281702814_728529544951109_6603836699030402746_n.jpg","/imggallery/283669946_4610482689053285_5972101986939321638_n.jpg","/imggallery/289888444_764784084705431_5104627132645856332_n.jpg","/imggallery/290201033_365343522335822_6989121683645521651_n.jpg","/imggallery/298262238_1003468893663263_5635158051316616602_n.jpg","/imggallery/299220748_486389583312196_2918701892607691025_n.jpg","/imggallery/299622273_867508887542151_6159437778816378211_n.jpg","/imggallery/306431890_838509097573244_4219760642394676583_n.jpg","/imggallery/310038471_641913360867435_675961683670589393_n.jpg","/imggallery/312832450_183603154242544_3364490850470574658_n.jpg","/imggallery/313873528_1866452180360149_4966383405849033872_n.jpg","/imggallery/316119619_6422508417765998_6768193420321574199_n.jpg","/imggallery/318235503_536005258138307_7765495500139449825_n.jpg","/imggallery/324544066_152195107605724_1918904625421334616_n.jpg","/imggallery/339508856_885513272544585_8268982997877371805_n.jpg","/imggallery/340490753_536729521725498_7803232779063458043_n.jpg","/imggallery/denizsezeridea.jpeg","/imggallery/vegetable.jpg","/imggallery/vegi.jpeg"])},c=(t,r="success")=>{D({show:!0,message:t,type:r}),setTimeout(()=>{D({show:!1,message:""})},3e3)},Q=()=>{try{const t={...m};localStorage.setItem("siteContent",JSON.stringify(t)),c("Changes saved successfully!");try{const r=new CustomEvent("siteContentUpdated",{detail:{content:t}});window.dispatchEvent(r)}catch(r){console.warn("Could not dispatch siteContentUpdated event:",r)}}catch(t){console.error("Error saving changes:",t),c("Error saving changes","error")}},X=async()=>{try{const t={...m};localStorage.setItem("publishedContent",JSON.stringify(t)),c("Content saved locally and attempting to publish...");const r=prompt("Your GitHub username:")||"albertfast",o=prompt("GitHub repository name:")||"teiraculinaria",i=prompt("Your GitHub Personal Access Token (PAT) (This should ideally be handled by a backend service for security):");if(!r||!o||!i){c("Publishing cancelled. GitHub username, repository, and token are required.","error");return}c(`Simulating deploy for ${r}/${o}... This would involve:
      1. Building the project (e.g., 'npm run build' on a server).
      2. Committing the new 'dist' folder or updated content JSON.
      3. Pushing to GitHub (origin main/gh-pages).
      4. Triggering GitHub Pages/Vercel/Netlify build.`,"info"),await new Promise(n=>setTimeout(n,3e3)),c(`Content successfully published to ${r}/${o} repository! GitHub Actions triggered (simulated).`,"success")}catch(t){console.error("Error publishing changes:",t),c("Error publishing changes","error")}},Z=()=>{const t=prompt("Enter new section name:");t&&t.trim()!==""&&(k(r=>({...r,menuSections:[...r.menuSections,t.trim()]})),c(`"${t}" section successfully added`))},F=()=>{let t={id:`${l}_${Date.now()}`,title:"",description:"",images:[],order:m[l].length};switch(l){case"menu":t={...t,price:"",subtitle:"",category:N||(m.menuSections.length>0?m.menuSections[0]:"General")};break;case"services":t={...t,details:[]};break;case"testimonials":t={...t,author:"",role:""};break;case"contact":t={...t,email:"",phone:"",address:"",socialMedia:{}};break}x(t),S(!0),j([])},ee=t=>{x(JSON.parse(JSON.stringify(t))),S(!0),j(t.images||[])},te=t=>{window.confirm("Are you sure you want to delete this item?")&&(k(r=>{const o=r[l].filter(i=>i.id!==t);return{...r,[l]:o}}),c("Item successfully deleted"))},g=t=>{if(!a)return;const{name:r,value:o}=t.target;if(r.includes(".")){const[i,n]=r.split(".");x({...a,[i]:{...a[i]||{},[n]:o}})}else x({...a,[r]:o})},re=(t,r)=>{if(!a||l!=="services")return;const o=[...a.details||[]];o[r]=t,x({...a,details:o})},oe=()=>{if(!a||l!=="services")return;const t=[...a.details||[],""];x({...a,details:t})},ie=t=>{if(!a||l!=="services")return;const r=[...a.details||[]];r.splice(t,1),x({...a,details:r})},P=t=>{a&&(v.includes(t)?j(v.filter(r=>r!==t)):j([...v,t]))},ne=t=>{const r=t.target.files;if(!r||r.length===0)return;const o=Math.min(r.length,E.length),i=E.slice(0,o);j(n=>[...n,...i]),c("Images uploaded")},ae=t=>{if(t.preventDefault(),!a)return;const r={...a,images:v};k(o=>{const i={...o},n=[...o[l]],w=n.findIndex(O=>O.id===r.id);return w>=0?(n[w]=r,c("Item updated successfully")):(n.push(r),c("New item added successfully")),i[l]=n,i}),S(!1),x(null),j([])},R=()=>{window.confirm("Are you sure you want to cancel editing? All your changes will be lost.")&&(S(!1),x(null),j([]))},se=N?m.menu.filter(t=>t.category===N):m.menu,le=()=>{Y(!y)},ce=()=>e.jsxs("header",{className:`header ${y?"dark":"light"}`,children:[e.jsxs("div",{className:"logo-container",children:[e.jsx("div",{className:"logo",children:e.jsx("img",{src:"/imggallery/denizsezeridea.jpeg",alt:"Logo"})}),e.jsx("h1",{children:"Deniz Sezer | Admin Panel"})]}),e.jsxs("div",{className:"header-actions",children:[e.jsx("button",{onClick:()=>A("/contact"),className:"btn-outline",children:"Contact"}),e.jsx("button",{onClick:()=>A("/"),className:"btn-outline",children:"Home"}),e.jsx("button",{onClick:()=>window.open("/admin-local","_blank"),className:"btn-info",children:"Modern Admin"}),e.jsx("button",{onClick:()=>A("/menu"),className:"btn-warning",children:"Menu"}),e.jsx("button",{onClick:V,className:"btn-primary",children:"Detect Content"}),e.jsx("button",{onClick:()=>M(!z),className:"btn-info",children:"Show Page Sections"}),e.jsx("button",{onClick:()=>{const t="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(m,null,2));window.open(t,"_blank")},className:"btn-outline",children:"Export JSON"}),e.jsx("button",{onClick:()=>{var t;(t=navigator.clipboard)==null||t.writeText(JSON.stringify(m,null,2)).then(()=>{c("Content JSON copied to clipboard")}).catch(()=>{c("Failed to copy JSON to clipboard","error")})},className:"btn-outline",children:"Copy JSON"}),e.jsx("button",{onClick:le,className:`btn-theme ${y?"light":"dark"}`,children:y?"🌞":"🌙"})]})]}),de=()=>e.jsx("nav",{className:`main-nav ${y?"dark":"light"}`,children:e.jsx("ul",{children:T.map(t=>e.jsx("li",{children:e.jsx("button",{onClick:()=>{G(t.id),I("")},className:l===t.id?"active":"",children:t.label})},t.id))})}),T=[{id:"menu",label:"Menu"},{id:"services",label:"Services"},{id:"hero",label:"Hero"},{id:"testimonials",label:"Testimonials"},{id:"about",label:"About"},{id:"contact",label:"Contact"}],me=()=>$.show&&e.jsx("div",{className:`notification ${$.type}`,children:e.jsxs("div",{className:"notification-content",children:[e.jsx("p",{children:$.message}),e.jsx("button",{onClick:()=>D({show:!1,message:""}),children:"×"})]})}),ge=()=>e.jsxs("div",{className:"menu-sections",children:[e.jsxs("div",{className:"section-header",children:[e.jsx("h2",{children:"Menu Sections"}),e.jsx("button",{onClick:Z,className:"btn-primary",children:"+ Add New Section"})]}),e.jsxs("div",{className:"section-buttons",children:[e.jsx("button",{onClick:()=>I(""),className:N===""?"active":"",children:"All"}),(m.menuSections||[]).map(t=>e.jsx("button",{onClick:()=>I(t),className:N===t?"active":"",children:t},t))]})]}),ue=()=>{var r;let t=[];switch(l){case"menu":t=se;break;default:Array.isArray(m[l])?t=m[l]:t=[]}return e.jsxs("div",{className:"content-list",children:[e.jsxs("div",{className:"content-header",children:[e.jsx("h2",{children:N||((r=T.find(o=>o.id===l))==null?void 0:r.label)}),e.jsx("button",{onClick:F,className:"btn-primary",children:"+ Add New"})]}),e.jsx("div",{className:"items-container",children:t.length===0?e.jsxs("div",{className:"empty-state",children:[e.jsx("p",{children:"No content in this section yet."}),e.jsx("button",{onClick:F,className:"btn-primary",children:"Add First Item"})]}):t.map(o=>e.jsxs("div",{className:"content-item",children:[e.jsxs("div",{className:"item-header",children:[e.jsx("h3",{children:o.title}),o.subtitle&&e.jsx("p",{className:"subtitle",children:o.subtitle})]}),e.jsxs("div",{className:"item-body",children:[e.jsxs("div",{className:"item-text",children:[e.jsx("p",{className:"description",children:o.description}),l==="menu"&&e.jsxs("p",{className:"price",children:[e.jsx("strong",{children:"Price:"})," ",o.price]}),l==="testimonials"&&e.jsxs("p",{className:"author",children:[e.jsx("strong",{children:"Author:"})," ",o.author," ",o.role&&`(${o.role})`]}),l==="services"&&o.details&&e.jsxs("div",{className:"details",children:[e.jsx("strong",{children:"Details:"}),e.jsx("ul",{children:o.details.map((i,n)=>e.jsx("li",{children:i},n))})]}),l==="contact"&&e.jsxs("div",{className:"contact-details",children:[o.email&&e.jsxs("p",{children:[e.jsx("strong",{children:"Email:"})," ",o.email]}),o.phone&&e.jsxs("p",{children:[e.jsx("strong",{children:"Phone:"})," ",o.phone]}),o.address&&e.jsxs("p",{children:[e.jsx("strong",{children:"Address:"})," ",o.address]})]})]}),o.images&&o.images.length>0&&e.jsx("div",{className:"item-images",children:o.images.map((i,n)=>e.jsx("div",{className:"image-thumbnail",children:e.jsx("img",{src:i,alt:`${o.title} ${n+1}`})},n))})]}),e.jsxs("div",{className:"item-actions",children:[e.jsx("button",{className:"btn-edit",onClick:()=>ee(o),children:"Edit"}),e.jsx("button",{className:"btn-delete",onClick:()=>te(o.id),children:"Delete"})]})]},o.id))})]})},he=()=>{var t,r,o;return a?e.jsxs("div",{className:"edit-form-container",children:[e.jsxs("div",{className:"edit-form-header",children:[e.jsx("h2",{children:a.id.includes("_new")?"Add New Item":"Edit Item"}),e.jsx("button",{onClick:R,className:"btn-close",children:"×"})]}),e.jsxs("form",{onSubmit:ae,className:"edit-form",children:[e.jsxs("div",{className:"form-grid",children:[e.jsxs("div",{className:"form-column",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"title",children:"Title"}),e.jsx("input",{type:"text",id:"title",name:"title",value:a.title,onChange:g,required:!0})]}),(l==="menu"||l==="services"||l==="testimonials"||l==="hero"||l==="about")&&e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"subtitle",children:"Subtitle"}),e.jsx("input",{type:"text",id:"subtitle",name:"subtitle",value:a.subtitle||"",onChange:g})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"description",children:"Description"}),e.jsx("textarea",{id:"description",name:"description",value:a.description,onChange:g,rows:4,required:!0})]}),l==="menu"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"price",children:"Price"}),e.jsx("input",{type:"text",id:"price",name:"price",value:a.price||"",onChange:g,placeholder:"e.g: $250 per person",required:!0})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"category",children:"Category"}),e.jsxs("select",{id:"category",name:"category",value:a.category||"",onChange:g,required:!0,children:[e.jsx("option",{value:"",children:"Select Category"}),m.menuSections.map(i=>e.jsx("option",{value:i,children:i},i))]})]})]}),l==="testimonials"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"author",children:"Author"}),e.jsx("input",{type:"text",id:"author",name:"author",value:a.author||"",onChange:g,required:!0})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"role",children:"Title/Role (optional)"}),e.jsx("input",{type:"text",id:"role",name:"role",value:a.role||"",onChange:g})]})]})]}),e.jsxs("div",{className:"form-column",children:[l==="contact"&&e.jsxs("div",{className:"contact-form-section",children:[e.jsx("h3",{children:"Contact Details"}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"email",children:"Email"}),e.jsx("input",{type:"email",id:"email",name:"email",value:a.email||"",onChange:g})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"phone",children:"Phone"}),e.jsx("input",{type:"text",id:"phone",name:"phone",value:a.phone||"",onChange:g})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"address",children:"Address"}),e.jsx("textarea",{id:"address",name:"address",value:a.address||"",onChange:g,rows:3})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Social Media"}),e.jsxs("div",{className:"social-media-inputs",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"instagram",children:"Instagram"}),e.jsx("input",{type:"text",id:"instagram",name:"socialMedia.instagram",value:((t=a.socialMedia)==null?void 0:t.instagram)||"",onChange:g,placeholder:"Instagram URL"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"facebook",children:"Facebook"}),e.jsx("input",{type:"text",id:"facebook",name:"socialMedia.facebook",value:((r=a.socialMedia)==null?void 0:r.facebook)||"",onChange:g,placeholder:"Facebook URL"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"twitter",children:"Twitter"}),e.jsx("input",{type:"text",id:"twitter",name:"socialMedia.twitter",value:((o=a.socialMedia)==null?void 0:o.twitter)||"",onChange:g,placeholder:"Twitter URL"})]})]})]})]}),l==="services"&&e.jsxs("div",{className:"service-details-section",children:[e.jsx("h3",{children:"Service Details"}),(a.details||[]).map((i,n)=>e.jsxs("div",{className:"detail-item",children:[e.jsx("input",{type:"text",value:i,onChange:w=>re(w.target.value,n),placeholder:`Detay ${n+1}`}),e.jsx("button",{type:"button",onClick:()=>ie(n),className:"btn-remove",children:"Delete"})]},n)),e.jsx("button",{type:"button",onClick:oe,className:"btn-secondary",children:"+ Add Detail"})]}),e.jsxs("div",{className:"image-selection-section",children:[e.jsx("h3",{children:"Resimler"}),e.jsxs("div",{className:"selected-images",children:[e.jsx("h4",{children:"Selected Images"}),e.jsx("div",{className:"image-grid",children:v.length===0?e.jsx("p",{className:"no-images",children:"No images selected yet"}):v.map((i,n)=>e.jsxs("div",{className:"image-thumbnail selected",children:[e.jsx("img",{src:i,alt:`Selected ${n+1}`}),e.jsx("button",{type:"button",onClick:()=>P(i),className:"remove-btn",children:"×"})]},n))})]}),e.jsxs("div",{className:"image-upload",children:[e.jsx("h4",{children:"Upload Images"}),e.jsxs("div",{className:"upload-container",children:[e.jsx("input",{type:"file",ref:U,onChange:ne,multiple:!0,accept:"image/*",id:"file-upload"}),e.jsx("label",{htmlFor:"file-upload",className:"upload-label",children:"Select Images"})]}),e.jsx("small",{className:"info-text",children:"Note: In demo mode, selected files will be chosen from the existing image gallery instead of server storage."})]}),e.jsxs("div",{className:"available-images",children:[e.jsx("h4",{children:"Mevcut Resimler"}),e.jsx("div",{className:"image-grid",children:E.map((i,n)=>e.jsx("div",{className:`image-thumbnail ${v.includes(i)?"selected":""}`,onClick:()=>P(i),children:e.jsx("img",{src:i,alt:`Available ${n+1}`})},n))})]})]})]})]}),e.jsxs("div",{className:"form-actions",children:[e.jsx("button",{type:"submit",className:"btn-success",children:"Save"}),e.jsx("button",{type:"button",onClick:R,className:"btn-secondary",children:"Cancel"})]})]})]}):null};return e.jsxs("div",{className:`admin-panel ${y?"dark-mode":"light-mode"}`,children:[e.jsx(ce,{}),e.jsx(de,{}),e.jsxs("div",{className:"main-container",children:[e.jsxs("div",{className:"action-bar",children:[e.jsx("button",{onClick:Q,className:"btn-primary",children:"Save"}),e.jsx("button",{onClick:X,className:"btn-success",children:"Publish"}),e.jsx("button",{onClick:q,className:"btn-info",children:"Reload Content"})]}),e.jsxs("div",{className:"content-container",children:[l==="menu"&&e.jsx(ge,{}),L?e.jsx(he,{}):e.jsx(ue,{})]})]}),e.jsx(me,{}),e.jsx(W,{}),e.jsx("style",{jsx:!0,children:`
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
      `})]})};export{je as default};
