const imgArray=[
  '<img src="dist/images/image-currency.jpg" alt="currency-img"  class="img" onclick="display(this)">',
  '<img src="dist/images/image-currency.jpg" alt="currency-img"  class="img" onclick="display(this)">',
  '<img src="dist/images/image-confetti.jpg" alt="confetti-jpg"onclick="display(this)" class="img">',
  '<img src="dist/images/image-confetti.jpg" alt="confetti-jpg"onclick="display(this)" class="img">',
  '<img src="dist/images/image-plane.jpg" alt="plane-img" onclick="display(this)" class="img">',
  '<img src="dist/images/image-plane.jpg" alt="plane-img" onclick="display(this)" class="img">'
]
const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
shuffleArray(imgArray)


window.onload= function glimpse() {
  let imageHolders = document.querySelectorAll('.subdiv')
  for (let j = 0; j < imageHolders.length; j++) {
    imageHolders[j].innerHTML=imgArray[j]
  }
  let images = document.querySelectorAll('.img')
    console.log(images)
    images.forEach((image) => {
      image.classList.add('active')
    })

    setTimeout(function(){
      images.forEach((image) => {
        image.classList.remove('active')
      })
    }, 800)

}