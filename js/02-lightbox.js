import { galleryItems } from './gallery-items.js';

const ulGallery = document.querySelector('.gallery');

const markup = galleryItems.map(function ({ preview, original, description }) {
    
    return `<li><a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" /></a></li>`
}
).join("");

ulGallery.insertAdjacentHTML("beforeend", markup);

const onImageClick = function (event) {

    event.preventDefault();

    new SimpleLightbox('.gallery a', { captionsData: 'alt',  captionDelay: 250,  captionPosition: 'bottom',})};

ulGallery.addEventListener('click', onImageClick);







