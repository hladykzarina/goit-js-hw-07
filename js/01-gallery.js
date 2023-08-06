import { galleryItems } from './gallery-items.js';
// Change code below this line
const list = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery_item">
        <a class="gallery_link" href="${original}">
        <img
        class="gallery_image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        width="350"
        height="auto"
        />
        </a>
        </li>`,
  )
  .join('');

list.insertAdjacentHTML('beforeend', markup);

list.addEventListener('click', function (evt) {
  evt.preventDefault();
  const target = evt.target;

  if (!evt.target.classList.contains('gallery__image')) {
    const currentItems = target.closest('.gallery__item');
    const { source } = target.dataset;
    const item = galleryItems.find((item) => item.original === source);

    const instance = basicLightbox.create(
      `<img scr="${item.original}" alt="${item.description}" width="800" heigth="600">`,
    );
    instance.show();

    const escapeWindow = (escEvent) => {
      if (escEvent.key === 'Escape') {
        onModalClose();
      }
    };
  }
});

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
