import { galleryItems } from './gallery-items.js';

const divGallery = document.querySelector('.gallery');

const markup = galleryItems.map(function ({ preview, original, description}) {
return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`
}
).join("");

let instance;

divGallery.insertAdjacentHTML("beforeend", markup);

const onImageClick = function (event) {

    event.preventDefault();


    instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`);

    instance.show();
    
};

divGallery.addEventListener('click', onImageClick);

// const onEscPush = function () {
    
// }

document.addEventListener('keydown', (event)=> {
    if (event.key === 'Escape'&&instance) {
        instance.close();
    }
});




