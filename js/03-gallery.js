import { galleryItems } from './gallery-items.js';

const globalVisir = window;

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


// const onEscPress = (instance) => {
//   instance.close();
//   document.removeEventListener('keydown', onEscPress);
//   console.log('Hallo. I have removed EventListener onEscPress-2!');
// }

// document.removeEventListener('keydown', onEscPress);
// console.log('Hallo. I have removed EventListener onEscPress-2!');

const onImageClick = function (event) {
  // console.log('TARGET ', event.target);
  // console.log('CURRENTTARGET ', event.currentTarget);

  const onEscPress = () => {
    instance.close();
    document.removeEventListener('keydown', onEscPress);
    console.log('Hallo. I have removed EventListener onEscPress-2!');
  }



  if (event.target.nodeName === 'IMG') {
    event.preventDefault();

    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`);
    console.log(instance)

    instance.show();
    document.addEventListener('keydown', onEscPress);

    console.log('Hallo. I set EventListener onEscPress!');
  }

  
};


globalVisir.addEventListener('click', onImageClick);
