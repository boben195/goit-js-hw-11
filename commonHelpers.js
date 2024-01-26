import{S as f,i as d}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const p="https://pixabay.com/api",m="42039284-aa75c07fa754230e40c75f28c",y=document.querySelector(".btn"),l=document.querySelector(".foto-form"),h=document.querySelector(".gallery"),g=document.querySelector(".loader");l.addEventListener("submit",s=>{s.preventDefault();const r=l.query.value.trim();if(!r){i("The search field can't be empty! Please, enter your request!");return}const n=`${p}?key=${m}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`;b(n).then(o=>{o.hits.length===0&&(i("Sorry, there are no images matching your search query. Please, try again!"),c(!1)),h.innerHTML=L(o.hits),c(!1),new f(".gallery-item a",{captionsData:"alt",captionDelay:250}),l.reset()}).catch(o=>console.error(o))});function b(s){return c(!0),fetch(s).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}function L(s){return s.map(({webformatURL:r,largeImageURL:n,tags:o,likes:e,views:t,comments:a,downloads:u})=>`
        <li class="gallery-item">
  <a class="gallery-link" href="${n}">
    <img
      class="gallery-image"
      src="${r}"
      alt="${o}"
    />
    <p class="gallery-descr">Likes: <span class="descr-span">${e}</span> Views: <span class="descr-span">${t}</span> Comments: <span class="descr-span">${a}</span> Downloads: <span class="descr-span">${u}</span></p>
  </a>
</li>`).join("")}function i(s){d.show({message:s,close:!1,closeOnClick:!0})}function c(s=!0){g.style.display=s?"inline-block":"none",y.disabled=s}
//# sourceMappingURL=commonHelpers.js.map
