import"./assets/vendor-491d46cf.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const s="https://pixabay.com/api",l="42039284-aa75c07fa754230e40c75f28c",u=`${s}?key=${l}&q=cat`;document.querySelector(".btn");const f=document.querySelector(".foto-form");fetch(u).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}).then(t=>console.log(t)).catch(t=>console.log(t));f.addEventListener("submit",a);function a(t){t.preventDefault(),t.currentTarget.elements.query.value}
//# sourceMappingURL=commonHelpers.js.map
