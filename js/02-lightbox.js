import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const container = document.querySelector('.gallery');

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `<li class="gallery_item">
        <a class="gallery_link" href="${original}">
        <img
        class="gallery_image"
        src="${preview}"
        alt="${description}"
        width="350"
        height="auto"
        />
        </a>
        </li>`,
    )
    .join('');
}

container.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

console.log(SimpleLightbox);

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
