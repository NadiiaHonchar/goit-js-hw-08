import SimpleLightbox from "simplelightbox";
// import '../../node_modules/simplelightbox/src/simple-lightbox';
// import '../../node_modules/simplelightbox/src/simple-lightbox.scss'

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');

function getGalleryItem()
{
  let fragment = new DocumentFragment;
  const galeryItem = galleryItems.map(item=>
    {      
      let galleryLink = document.createElement("a");
      galleryLink.classList.add('gallery__item');
      galleryLink.href=item.original;      
      let galleryImg = document.createElement("img");
      galleryImg.classList.add('gallery__image');
      galleryImg.src = item.preview;          
      galleryImg.alt = item.description;
      galleryLink.appendChild(galleryImg);      
      fragment.append(galleryLink);
    })
    return fragment;
}
gallery.append(getGalleryItem());

gallery.addEventListener('click', e => 
{ 
  e.preventDefault(); 
  if (e.target.nodeName !== 'IMG') { 
    return; 
  }   
  instance.element().querySelector('img').src = e.target.dataset.source;    
 show.simplelightbox; 
}); 

var simplelightbox = new SimpleLightbox('.gallery a', 
{ 
widthRatio: 0.8,
heightRatio: 0.8,
captionsData: 'alt',
captionDelay: 250,
});

console.log(galleryItems);
