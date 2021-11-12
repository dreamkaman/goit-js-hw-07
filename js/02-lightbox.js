import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);


const divGallery = document.querySelector('.gallery');

const markup = galleryItems.map(function ({ preview, original, description }) {
    
    return `<li><a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" /></a></li>`
}
).join("");


divGallery.insertAdjacentHTML("beforeend", markup);

const onImageClick = function (event) {

    event.preventDefault();

    let gallery = new SimpleLightbox('.gallery a', { captionsData: 'alt',  captionDelay: 250,  captionPosition: 'bottom',});
  
};

divGallery.addEventListener('click', onImageClick);







