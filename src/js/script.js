import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const BASE_URL = "https://pixabay.com/api";
const API_KEY = "42039284-aa75c07fa754230e40c75f28c";
const url = `${BASE_URL}?key=${API_KEY}&q=&{query}&image_type=photo&orientation=horiontal&safesearch=true`;

const btn = document.querySelector(".btn");
const form = document.querySelector(".foto-form");
const list = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

// fetch(url).then(resp => {
//     if (!resp.ok) {
//         throw new Error(resp.statusText);
//     }
//     return resp.json();
// }).then(data => console.log(data)).catch(err => console.log(err));


// form.addEventListener("submit", handleSearch)

// function handleSearch(event) {
//     event.preventDefault();
//     const query = event.currentTarget.elements.query.value.trim();
//     if (!query) {
//         createMessage(`The search field can't be empty! Please, enter your request!`);
//         return;
//     }
// }

// getPhotos(url).then(data => {
//     if (data.pictures.length === 0) {
//         createMessage(`Sorry, there are no images matching your search query. Please, try again!`);
//        //loadAnimation(false);
//     };
//     list.innerHTML = createList(data.pictures);
//     //loadAnimation(false);
//     let galleryBox = new SimpleLightbox('.gallery a', {
//         captionsData: 'alt',
//         captionDelay: 250,
//     }).catch(err => console.log(err));
// });

// function getPhotos(url) {
//     //loadAnimation(true);
//     return fetch(url).then(resp => {
//         if (!resp.ok) {
//             throw new Error(resp.statusText);
//         }
//         return resp.json();
//     })
// }

// function createList(pictures) {
//     return pictures
//         .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `<li class="gallery-item">
//         <a class="gallery-link" href="${largeImageURL}">
//         <img class="gallery-image" src="${webformatURL}" alt="${tags}"/>
//         <p class="gallery-text"> Likes: <span>${likes}</span> Views: <span>${views}</span> Comments: <span>${comments}</span> Downloads: <span>${downloads}</span></p>
//         </a>
//     </li>`)
//         .join("");
// }

// function createMessage(message) {
//     iziToast.show({
//         message: message,
//         close: false,
//         closeOnClick: true,
//     });
// }

// function loadAnimation(sta) {
//   loader.style.display = !state ? 'none' : 'inline-block';
//   btn.disabled = state;
// }




//************************************************************************************* */

form.addEventListener('submit', event => {
  event.preventDefault();
  const query = form.query.value.trim();

  if (!query) {
    createMessage(
      `The search field can't be empty! Please, enter your request!`
    );
    return;
  }
  const url = `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  fetchImages(url)
    .then(data => {
      if (data.hits.length === 0) {
        createMessage(
          `Sorry, there are no images matching your search query. Please, try again!`
        );
        showLoader(false);
      }

      list.innerHTML = createMarkup(data.hits);
      showLoader(false);
      const simplyGallery = new SimpleLightbox('.gallery-item a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
      form.reset();
    })
    .catch(error => console.error(error));
});

function fetchImages(url) {
  showLoader(true);
  return fetch(url).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

function createMarkup(hits) {
  return hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `
        <li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      alt="${tags}"
    />
    <p class="gallery-descr">Likes: <span class="descr-span">${likes}</span> Views: <span class="descr-span">${views}</span> Comments: <span class="descr-span">${comments}</span> Downloads: <span class="descr-span">${downloads}</span></p>
  </a>
</li>`
    )
    .join('');
}

function createMessage(message) {
  iziToast.show({
    
    message: message,
    
    close: false,
    closeOnClick: true,
  });
}

function showLoader(state = true) {
  loader.classList.add('loader')
  loader.style.display = !state ? 'none' : 'inline-block';
  btn.disabled = state;
}

loader.classList.remove('loader')