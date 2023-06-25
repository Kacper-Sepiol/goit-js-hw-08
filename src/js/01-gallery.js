// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const listImg = document.querySelector('.gallery');

const createItems = galleryItems
  .map(item => {
    return `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}" />
        </a>
        </div>`;
  })
  .join('');

listImg.innerHTML = createItems;

var instance = new SimpleLightbox('.gallery a');

// const imgPreview = event => {
//   event.preventDefault();

//   if (event.target.classList.contains('gallery')) return;
//   const source = event.target.dataset.source;

//   const instance = basicLightbox.create(`<img src="${source}">`);

//   instance.show();
// };

listImg.addEventListener('click', instance);
