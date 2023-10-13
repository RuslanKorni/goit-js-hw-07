import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listImages = document.querySelector(".gallery");
console.log(listImages);

const imageMarkup = createImagesListMarkup(galleryItems);

listImages.insertAdjacentHTML("beforeend", imageMarkup);



function createImagesListMarkup(images) {
  return images.map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img 
      class="gallery__image" 
      src="${preview}" 
      alt="${description}" 
      />
   </a>
</li>`;
  }).join("");
};

const lightbox = new SimpleLightbox('.gallery__link', {
        captionsData: 'alt',
        captionDelay: 250,
      });



