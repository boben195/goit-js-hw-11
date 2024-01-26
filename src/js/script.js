import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const BASE_URL = "https://pixabay.com/api";
const API_KEY = "42039284-aa75c07fa754230e40c75f28c";
const url = `${BASE_URL}?key=${API_KEY}&q=cat`;

const btn = document.querySelector(".btn");
const form = document.querySelector(".foto-form");

fetch(url).then(resp => {
    if (!resp.ok) {
        throw new Error(resp.statusText);
    }
    return resp.json();
}).then(data => console.log(data)).catch(err => console.log(err));


form.addEventListener("submit", handleSearch)

function handleSearch(event) {
    event.preventDefault();
    const query = event.currentTarget.elements.query.value
}