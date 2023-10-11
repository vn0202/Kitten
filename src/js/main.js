
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
const images_card = ['assets/images/cards/brand.png','assets/images/cards/collectibles.png','assets/images/cards/merch.png']
const brand = document.getElementById('brand-text');
const suspended = document.getElementById('suspended');
const card_brand = document.getElementById('card-brand');
// suspended.style.width='70%';
const text = ["BRAND", "Collectibles", "Merch"];
let index = 0;
card_brand.style.backgroundImage = "url('assets/images/cards/brand.png')";
setInterval(()=>{
         index++;
         if(index > 2 )
         {
             index=0;
         }
    card_brand.style.backgroundImage = `url(${images_card[index]})`;
    suspended.src=images[index];
         brand.innerHTML = `<span>${text[index]}</span>`;
         brand.dataset.text=text[index];
         if(window.innerWidth > 1024)
         {
             if(index==1)
             {
                 suspended.style.width = "100%";
                 suspended.style.bottom ="170px"

             }else if (index==2) {
                 suspended.style.width = "50%";
                 suspended.style.bottom ="200px"
             }
             else {
                 suspended.style.width = "80%";
                 suspended.style.bottom ="70px"
             }
         }


     },2000)

const test2 = document.getElementById('test-2');
const test3 = document.getElementById('test-3');
let previousScrollY =0;
let scrollUp = false;

window.addEventListener('scroll', function (e){
    const test = document.getElementById('test');
    let rect = test.getBoundingClientRect();
    const currentScrollY = window.scrollY;
    let translateFirst = 40;
    let translateTwo = 80;
   if(window.innerWidth > 375 && window.innerWidth < 1200)
   {
       translateFirst= 25;
       translateTwo = 50;
   } 

    if (currentScrollY > previousScrollY) {
        scrollUp = false;
       
            TweenMax.set ("#demo", {xPercent:-50, yPercent:-50});
            TweenMax.from("#theSquare", 5, {attr:{y:-100}, yoyo:true, repeat:0, ease:Linear.easeNone});
            TweenMax.to('#theSquare',5, {attr:{y:300}, yoyo:true, repeat:0, ease:Linear.easeNone})

    } else if (currentScrollY < previousScrollY) {

       scrollUp = true;
    }

    previousScrollY = currentScrollY;
    if(rect.y < window.innerHeight -50  && !scrollUp)
    {
        test.style.transform = `translateX(${translateFirst}px)`;
        test2.style.transform = `translateX(${translateTwo}px)`;
        test2.style.transitionDelay = "500ms";
        test3.style.left = `${translateTwo}px`;
        test3.style.transitionDelay = "1s";
    }
    else{
        test.style.transform = "translateX(-59px)";
        test2.style.transform = "translateX(0)";
        test2.style.transitionDelay = "500ms";
        test3.style.left = "0";
    }

},false)
console.log(window.innerWidth);

const vn = document.getElementById('vn');
const chinese = document.getElementById('china');
const sp = document.getElementById('sp');

if( window.innerWidth >= 1741 && window.innerWidth < 1950 )
     {
          vn.style.transform = "translateX(12%)"
     }
     if( this.window.innerWidth >= 1950)
     {
          vn.style.transform = "translateX(-4%)";
          sp.style.transform = "translateX(-7rem)";
          chinese.style.transform = "translateX(45%)"
     }
     if(window.innerWidth >=2610){
        vn.style.transform = "translateX(-54%)";
        sp.style.transform = "translateX(-19rem)";
        chinese.style.transform = "translateX(17%)"
     }
const container_g  = document.getElementsByClassName('container');

    for (let i =0; i < container_g.length; i++ )
    {
        if(window.innerWidth < 1350) {
            console.log(container_g[i])
;            container_g[i].style.width = "1200px";
        }
        else{
            container_g[i].style.width = "auto";

        }
    }


window.addEventListener('resize', function(){
    console.log(window.innerWidth);

    for (let i =0; i < container_g.length; i++ )
    {
        if(window.innerWidth < 1350) {
            container_g[i].style.width = "1200px";
        }
        else{
            container_g[i].style.width = "auto";
        }
    }
    if( window.innerWidth >= 1741 && window.innerWidth < 1950 )
    {
        vn.style.transform = "translateX(16%)";
        sp.style.transform = "translateX(-30%)";


    }
    else if( window.innerWidth >= 1950)
    {
        vn.style.transform = "translateX(-4%)";
        sp.style.transform = "translateX(-7rem)";
        chinese.style.transform = "translateX(45%)"
    }
    else  if(window.innerWidth >=2610){
        vn.style.transform = "translateX(-54%)";
        sp.style.transform = "translateX(-19rem)";
        chinese.style.transform = "translateX(17%)"
    }
    else if(window.innerWidth < 1740){
        console.log('oki');
        vn.style.transform = "translateX(23%)"

        chinese.style.transform = "translateX(54%)";
        sp.style.transform = "translateX(-16px)";

    }
   
})

        




