// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const imgList = document.querySelector('.gallery');
const imgMarkUp = createImg(galleryItems);

imgList.insertAdjacentHTML('beforeend', imgMarkUp);

function createImg(imgItems) {
  return imgItems
    .map(img => {
      return `
    <li class="gallery__item">
     <a class="gallery__link" href=${img.original}>
      <img
       class="gallery__image"       
       src = ${img.preview}        
       alt =  ${img.description}
       />
     </a>
    </li>`;
    })
    .join('');
}

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  /* options */
});
