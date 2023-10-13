import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const listImages = document.querySelector(".gallery");
console.log(listImages);

const imageMarkup = createImagesListMarkup(galleryItems);

listImages.insertAdjacentHTML("beforeend", imageMarkup);

listImages.addEventListener('click', onCardsContainerClick);


function createImagesListMarkup(images) {
  return images.map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
  }).join("");
};


function onCardsContainerClick (event) {
    event.preventDefault();
    const sourceRef = event.target.dataset.source;

    if(event.target.tagName === 'IMG') {
        const instance = basicLightbox.create(`
    <img src="${sourceRef}" width="800" height="600">
`);

instance.show();
    };
};



