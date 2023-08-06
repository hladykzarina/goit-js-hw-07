import { galleryItems } from './gallery-items.js';
// Change code below this line
const list = document.querySelector('.gallery');

list.addEventListener('click', onClickGetLargeImage);

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery_item">
        <a class="gallery_link" href="${original}">
        <img
        class="gallery_image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </li>`,
  )
  .join('');

list.insertAjacentHTML('beforeend', markup);

function onClickGetLargeImage(event) {
  event.preventDefault();
  window.addEventListener('keydown', onEscClick);
  const imgOriginalEl = event.target.dataset.source;
  console.log(imgOriginalEl);
  const instance = basicLightbox.create(`<img scr="${imgOriginalEl}">`);
  instance.show();
}

function onEscClick(event) {
  if (event.code === 'Escape') {
    onModalClose();
  }
}

function onModalClose() {
  window.removeEventListener('keydown', onEscClick);

  const instance = basicLightbox.create(`<img src="${imgOriginalEl}}">`, {
    onClose: (instance) => {
      instance.close();
    },
    onShow: (instance) => {
      instance.show();
    },
  });
}

console.log(galleryItems);
