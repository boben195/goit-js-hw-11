import{S as d,i as m}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const y="https://pixabay.com/api/",h="42039284-aa75c07fa754230e40c75f28c",g=document.querySelector(".btn"),l=document.querySelector(".foto-form"),p=document.querySelector(".gallery"),a=document.querySelector(".loader");l.addEventListener("submit",o=>{o.preventDefault();const r=l.query.value.trim();if(!r){u("The search field can't be empty! Please, enter your request!");return}const s=`${y}?key=${h}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`;L(s).then(n=>{n.hits.length===0&&(u("Sorry, there are no images matching your search query. Please, try again!"),c(!1)),p.innerHTML=b(n.hits),c(!1),new d(".gallery-item a",{captionsData:"alt",captionDelay:250}),l.reset()}).catch(n=>console.log(n))});function L(o){return c(!0),fetch(o).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}function b(o){return o.map(({webformatURL:r,largeImageURL:s,tags:n,likes:e,views:t,comments:i,downloads:f})=>`<li class="gallery-item">
        <a class="gallery-link" href="${s}">
        <img class="gallery-image" src="${r}" alt="${n}"/>
        <p class="gallery-text">Likes: ${e} Views: ${t} Comments: ${i} Downloads: ${f}</p>
        </a>
        </li>`).join("")}function u(o){m.show({message:o,close:!1,closeOnClick:!0})}function c(o=!0){a.classList.add("loader"),a.style.display=o?"inline-block":"none",g.disabled=o}a.classList.remove("loader");
//# sourceMappingURL=commonHelpers.js.map
