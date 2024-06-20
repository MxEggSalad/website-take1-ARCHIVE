//  program grabs all images with the class .galimg, and sets them as the background of a div which covers the whole page while being invisable 
const imgs = document.querySelectorAll(".galimg");
const fullPage = document.querySelector('#fullpage');

console.log(imgs)
imgs.forEach(img => {
  img.addEventListener('click', function() {
    fullPage.style.backgroundImage = 'url(' + img.src + ')';
    fullPage.style.display = 'block';
  });
});