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
const images = ['assets/images/products/sneaker.png','assets/images/products/tako_guy_2.png','assets/images/products/key_cap.png' ];
const brand = document.getElementById('brand-text');
const suspended = document.getElementById('suspended');
suspended.style.width='70%';
const text = ["BRAND", "Collectibles", "Merch"];
let index = 0;
     setInterval(()=>{
         index++;
         brand.innerHTML = text[index];
         if(index ==1)
         {
          suspended.style.width='100%'
         }
         else{
          
            suspended.style.width='70%'
           
         }
         suspended.src=images[index];

         if(index == 2 )
         {
             index=-1;
         }
        
       
       

     },2000)