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

divGallery.insertAdjacentHTML("beforeend", markup);

const onImageClick = function (event) {

  if (event.target.nodeName === 'IMG') {

    event.preventDefault();

    let instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`);

    instance.show();

    document.addEventListener('keydown', (event) => {
      
      if (event.key === 'Escape') {
      
        instance.close();
        
      };

    }, {once: true,});

  };
    
};

divGallery.addEventListener('click', onImageClick);






