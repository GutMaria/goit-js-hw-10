var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r);var o=r("9dxg1");const i=document.querySelector(".breed-select"),d=document.querySelector(".cat-info");let a;(0,o.fetchBreeds)().then((e=>function(e){const n=e.map((({id:e,name:n})=>`<option value=${e}>${n}</option>`));i.innerHTML=n.join("")}(e))),i.addEventListener("change",(function(e){a=e.currentTarget.value,(0,o.fetchCatByBreed)(a).then((e=>function({url:e,breeds:n}){const t=n[0].temperament,r=n[0].name,o=n[0].description,i=`<img src="${e}" alt="${r}" width=400/>\n  <div>\n<h2>${r}</h2>\n<P>${o}</P>\n<p>Temperament:${t}</p>\n</div>`;d.innerHTML=i}(e[0])))}));
//# sourceMappingURL=index.357104e6.js.map
