function move_scroll(){
    const followers = document.getElementsByClassName('folower');
    const element = followers[0];

 
    
    for (let index = 0; index < followers.length; index++) {
        const element = followers[index];
        let rect = element.getBoundingClientRect();
        console.log(rect.y, window.innerHeight - 300);
      if( rect.y < window.innerHeight - 300 && rect.y > window.innerHeight - 600)
    {
          element.style.transform ="scale(1.3) rotate(40deg)";
          element.style.fill = "white";
    }
    else{
        element.style.transform ="scale(1)";
        element.style.fill = "black";


    
    }
        
    }
}

document.addEventListener('scroll', move_scroll);

// preload video
document.addEventListener('load', () => {
    const myVideo = document.getElementById('my-video');
    myVideo.preload;

})
// change brand text and image
const images = ['assets/images/products/sneaker.png','assets/images/products/sunfollower.avif','assets/images/products/dua.avif' ];
const textShow = ['BRAND', 'COLLECTIBLES', 'MERCH'];
const brandTexts = document.querySelectorAll('#brand-text span');
const glitchImg = document.getElementById('glitch-image');
const glitchLayers = document.querySelectorAll('img.glitch__layer');


let indexText = 0;
setInterval(()=>{
      indexText++;
      if(indexText > 2){
        indexText=0;
      }
    for (let index = 0; index < brandTexts.length; index++) {
    const element = brandTexts[index];
    element.innerHTML = textShow[indexText]
    }

    // glitchImg.src=images[indexText];
    // for (let index = 0; index < glitchLayers.length; index++) {
    //     const element = glitchLayers[index];
    //     element.src=images[indexText];
    //     }

},3000)

