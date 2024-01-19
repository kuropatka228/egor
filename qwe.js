const hideBtn = document.getElementById('hide'); 
const showBtn = document.getElementById('show'); 
const galleryImages = document.querySelectorAll('.container_show'); 

hideBtn.addEventListener('click', function() { 
  galleryImages.forEach(function(img, index) {
      if (index >= 3) {
          img.classList.add('hide'); // Добавляем класс, чтобы плавно скрыть картинки
      }
  });
  showBtn.style.display = 'block'; 
  hideBtn.style.display = 'none'; 
}); 

showBtn.addEventListener('click', function() { 
  galleryImages.forEach(function(img, index) {
      if (index >= 3) {
          img.classList.remove('hide'); // Удаляем класс, чтобы плавно показать картинки
      }
  });
  showBtn.style.display = 'none'; 
  hideBtn.style.display = 'block'; 
}); 
hideBtn.style.display = 'none';

const openBtn = document .querySelector(".open");
const closeBtn = document.querySelector(".close");
const drawer = document .querySelector(".drawer");
const overflow = document.querySelector(".overflow");

openBtn.addEventListener("click", ( ) => {  
    drawer.classList.add("active");
    overflow.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    drawer .classList.remove("active");
    overflow.classList.remove("active");
});

overflow.addEventListener("click", () => {
    overflow.classList .remove("active");
    drawer .classList.remove("active");
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-registr")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}