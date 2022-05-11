const imgArray=[
  '<img src="dist/images/image-currency.jpg" alt="currency-img"  class="img" onclick="display(this)">',
  '<img src="dist/images/image-currency.jpg" alt="currency-img"  class="img" onclick="display(this)">',
  '<img src="dist/images/image-confetti.jpg" alt="confetti-jpg"onclick="display(this)" class="img">',
  '<img src="dist/images/image-confetti.jpg" alt="confetti-jpg"onclick="display(this)" class="img">',
  '<img src="dist/images/image-plane.jpg" alt="plane-img" onclick="display(this)" class="img">',
  '<img src="dist/images/image-plane.jpg" alt="plane-img" onclick="display(this)" class="img">',
  '<img src="dist/images/image-restaurant.jpg" alt="restaurant-img" onclick="display(this)" class="img">',
  '<img src="dist/images/image-restaurant.jpg" alt="restaurant-img" onclick="display(this)" class="img">',
  '<img src="dist/images/image-currency.jpg" alt="currency-img"  class="img" onclick="display(this)">',
  '<img src="dist/images/image-currency.jpg" alt="currency-img"  class="img" onclick="display(this)">',
  '<img src="dist/images/image-confetti.jpg" alt="confetti-jpg"onclick="display(this)" class="img">',
  '<img src="dist/images/image-confetti.jpg" alt="confetti-jpg"onclick="display(this)" class="img">',
  '<img src="dist/images/image-plane.jpg" alt="plane-img" onclick="display(this)" class="img">',
  '<img src="dist/images/image-plane.jpg" alt="plane-img" onclick="display(this)" class="img">',
  '<img src="dist/images/image-restaurant.jpg" alt="restaurant-img" onclick="display(this)" class="img">',
  '<img src="dist/images/image-restaurant.jpg" alt="restaurant-img" onclick="display(this)" class="img">',
  '<img src="dist/images/image-currency.jpg" alt="currency-img"  class="img" onclick="display(this)">',
  '<img src="dist/images/image-currency.jpg" alt="currency-img"  class="img" onclick="display(this)">',
  '<img src="dist/images/image-confetti.jpg" alt="confetti-jpg"onclick="display(this)" class="img">',
  '<img src="dist/images/image-confetti.jpg" alt="confetti-jpg"onclick="display(this)" class="img">',
  '<img src="dist/images/image-plane.jpg" alt="plane-img" onclick="display(this)" class="img">',
  '<img src="dist/images/image-plane.jpg" alt="plane-img" onclick="display(this)" class="img">',
  '<img src="dist/images/image-restaurant.jpg" alt="restaurant-img" onclick="display(this)" class="img">',
  '<img src="dist/images/image-restaurant.jpg" alt="restaurant-img" onclick="display(this)" class="img">',
  '<img src="dist/images/image-currency.jpg" alt="currency-img"  class="img" onclick="display(this)">',
  '<img src="dist/images/image-currency.jpg" alt="currency-img"  class="img" onclick="display(this)">',
  '<img src="dist/images/image-confetti.jpg" alt="confetti-jpg"onclick="display(this)" class="img">',
  '<img src="dist/images/image-confetti.jpg" alt="confetti-jpg"onclick="display(this)" class="img">',
  '<img src="dist/images/image-plane.jpg" alt="plane-img" onclick="display(this)" class="img">',
  '<img src="dist/images/image-plane.jpg" alt="plane-img" onclick="display(this)" class="img">',
  '<img src="dist/images/image-restaurant.jpg" alt="restaurant-img" onclick="display(this)" class="img">',
  '<img src="dist/images/image-restaurant.jpg" alt="restaurant-img" onclick="display(this)" class="img">',
]
const scoreEl=document.querySelector('.score-span')
const failedEl=document.querySelector('.failed-span')
const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
shuffleArray(imgArray)
let clickCount=0;
let score=0;
let failedAttempt=0;
let srcArr=[];


function display(img){
 if (img.classList.contains("active")) {
   alert('pick a green card')
 } else {
   console.log('does not contain')
   img.classList.add('active');
   clickCount++

   if (clickCount=== 1) {
     img.setAttribute("id", "click1")
     srcName=img.alt
     srcArr.push(srcName)
   } else if(clickCount === 2) {
     img.setAttribute("id", "click2")
     srcName=img.alt 
     srcArr.push(srcName)

     let srcName1 = srcArr[0]
     let srcName2= srcArr[1]

     if (srcName1 === srcName2) {
        click1=document.querySelector('#click1')
        click2=document.querySelector('#click2')
        displayResult(true);
        click1.removeAttribute('id')
        click2.removeAttribute('id')
        score++
        scoreEl.textContent=score
     } else {
       displayResult(false);
       click1=document.querySelector('#click1')
       click2=document.querySelector('#click2')
       setTimeout(function(){
        click1.classList.remove('active')
        click2.classList.remove('active')
        click1.removeAttribute('id')
        click2.removeAttribute('id')
        failedAttempt++
        failedEl.textContent=failedAttempt
       }, 200)
     }
     clickCount=0
     srcArr=[]
   }
 }
}

function displayResult(message){
  if (message === true) {
  setTimeout(function(){ alert("we have a pair"); }, 50)
  } else {
  setTimeout(function(){ alert("no pair, try again"); }, 50)
  }
}


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
    }, 2000)

}