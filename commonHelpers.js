import{S as d,i as m}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const y="https://pixabay.com/api",p="42039284-aa75c07fa754230e40c75f28c",h=document.querySelector(".btn"),i=document.querySelector(".foto-form"),g=document.querySelector(".gallery"),l=document.querySelector(".loader");i.addEventListener("submit",o=>{o.preventDefault();const r=i.query.value.trim();if(!r){u("The search field can't be empty! Please, enter your request!");return}const s=`${y}?key=${p}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`;L(s).then(n=>{n.hits.length===0&&(u("Sorry, there are no images matching your search query. Please, try again!"),c(!1)),g.innerHTML=b(n.hits),c(!1),new d(".gallery-item a",{captionsData:"alt",captionDelay:250}),i.reset()}).catch(n=>console.log(n))});function L(o){return c(!0),fetch(o).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}function b(o){return o.map(({webformatURL:r,largeImageURL:s,tags:n,likes:e,views:t,comments:a,downloads:f})=>`<li class="gallery-item">
        <a class="gallery-link" href="${s}">
        <img class="gallery-image" src="${r}" alt="${n}"/>
        <p class="gallery-text">Likes: <span>${e}</span> Views: <span>${t}</span> Comments: <span>${a}</span> Downloads: <span>${f}</span></p>
        </a>
        </li>`).join("")}function u(o){m.show({message:o,close:!1,closeOnClick:!0})}function c(o=!0){l.classList.add("loader"),l.style.display=o?"inline-block":"none",h.disabled=o}l.classList.remove("loader");
//# sourceMappingURL=commonHelpers.js.map
