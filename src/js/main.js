
function move_scroll(){
    const followers = document.getElementsByClassName('folower');
    const element = followers[0];

 
    
    for (let index = 0; index < followers.length; index++) {
        const element = followers[index];
        let rect = element.getBoundingClientRect();
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
                 suspended.style.bottom ="200px"

             }else if (index==2) {
                 suspended.style.width = "50%";
                 suspended.style.bottom ="230px"
             }
             else {
                 suspended.style.width = "80%";
                 suspended.style.bottom ="100px"
             }
         }
         else if(window.innerWidth < 600)
         {
            if(index==1)
            {
                suspended.style.width = "100%";
                suspended.style.bottom ="150px"

            }else if (index==2) {
                suspended.style.width = "50%";
                suspended.style.bottom ="150px"
            }
            else {
                suspended.style.width = "80%";
                suspended.style.bottom ="100px"
            }
         }
         else if(window.innerWidth > 600)
         {
            if(index==1)
            {
                suspended.style.width = "110%";
                suspended.style.bottom ="200px"

            }else if (index==2) {
                suspended.style.width = "90%";
                suspended.style.bottom ="200px"
            }
            else {
                suspended.style.width = "100%";
                suspended.style.bottom ="140px"
            }
         }


     },2000)

const test2 = document.getElementById('test-2');
const test3 = document.getElementById('test-3');
let previousScrollY =0;
let scrollUp = false;
let tra  = 0;

window.addEventListener('scroll', function (e){
    const product_case = this.document.getElementById('product_case');
    const productShowcase = this.document.getElementById('product-showcase');
    const rectProduct = productShowcase.getBoundingClientRect();
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
       
            // TweenMax.set ("#demo", {xPercent:-50, yPercent:-50});
            TweenMax.from("#theSquare", 5, {attr:{y:-100}, yoyo:true, repeat:0, ease:Linear.easeNone});
            TweenMax.to('#theSquare',5, {attr:{y:300}, yoyo:true, repeat:0, ease:Linear.easeNone})

    } else if (currentScrollY < previousScrollY) {

       scrollUp = true;
    }

    previousScrollY = currentScrollY;
    if(rectProduct.y < 800 && !scrollUp)
    {
        e.preventDefault();
        let trans = 0;

        product_case.style.overflowX = 'scroll';

        product_case.addEventListener('wheel', function(e){
            const last = document.getElementById('last-child');

            let pos =(window.innerWidth - last.getBoundingClientRect().x) < 100;
            if(e.deltaY > 0 )
            {
                if(pos ){
                    e.preventDefault();
                    if(e.deltaY > 0){
                        trans+= 100;
                    
                    }
                    else if(trans > 100){
                        trans -=100;
                        
                    }
                    product_case.scrollTo({
                        left:trans,
                        behavior:'smooth'
                    })
                }    
            }
                
         
        })
    }
    // else if(scrollUp && (this.innerHeight - rectProduct.bottom) < 0)
    // {
    //     e.preventDefault();
    //     let trans = 0;
    //     product_case.style.overflowX = 'scroll';

    //     product_case.addEventListener('wheel', function(e){
    //         const last = document.getElementById('last-child');

    //         let pos =(window.innerWidth - last.getBoundingClientRect().x) < 100;
            
    //                 e.preventDefault();
    //                 alert('hello');
                    
    //                     trans+= 100;
    //                 product_case.scrollTo({
    //                     right:trans,
    //                     behavior:'smooth'
    //                 })
                  
            
                
         
    //     })
        
    // }
   

   
    if(rect.y < window.innerHeight -50  && !scrollUp)
    {
        test.style.transform = `translateX(${translateFirst}px)`;
        test2.style.transform = `translateX(${translateTwo}px)`;
        test2.style.transitionDelay = "500ms";
        test3.style.left = `${translateTwo}px`;
        test3.style.transitionDelay = "1s";
    }
    else{
        if(this.window.innerWidth < 768)
        {
            test.style.transform = "translateX(-28px)";
            test2.style.transitionDelay = "500ms";
            test3.style.left = "0";
            test2.style.transform = "translateX(4px)";
            // document.querySelector('#test  svg').style.transform = "translateX(30px)";
        


        }
        else if(this.window.innerWidth > 1000){
            test.style.transform = "translateX(-59px)";
            test2.style.transitionDelay = "500ms";
            test2.style.transform = "translateX(0px)";

            test3.style.left = "4px";
        }
        else {
            test.style.transform = "translateX(-47px)";
            test2.style.transitionDelay = "500ms";
            test2.style.transform = "translateX(0px)";

            test3.style.left = "4px";
        }
      
    }

},false)

function responsive(){
    const vn = document.getElementById('vn');
const chinese = document.getElementById('china');
const sp = document.getElementById('sp');
if(window.innerWidth < 500)
{
   
        document.getElementById('container_map').style.transform = "translate(31%,105px)"
chinese.style.transform = "translate(-95%, -77%)"
    vn.style.transform = "translate(-170%,106%)";
    sp.style.transform = "translate(-185%,16px)";

    
    


}
else if(window.innerWidth >500 && window.innerWidth < 912){
    document.getElementById('container_map').style.transform = "translate(29%,88px)"
    chinese.style.transform = "translate(3%, -54%)"

    vn.style.transform = "translate(3%,63%)"
    sp.style.transform = "translate(-22%,67%)";


}
else if(window.innerWidth >=912 && window.innerWidth < 978){
   document.getElementById('container_map').style.transform = "translateX(26%)"
}
else if(window.innerWidth >=979 && window.innerWidth < 1067){
    vn.style.transform = "translate(-5%,41%)";
    chinese.style.transform = "translate(0%,155%)"


    document.getElementById('container_map').style.transform = "translateX(26%)"
 }
else if(window.innerWidth >=1067 && window.innerWidth < 1236){
    vn.style.transform = "translate(-2%,44%)";

    document.getElementById('container_map').style.transform = "translateX(17%)"
 }

 else if(window.innerWidth >=1236 && window.innerWidth < 1450){
    vn.style.transform = "translate(-7%,54%)";
    chinese.style.transform = "translate(0%,160%)"


    document.getElementById('container_map').style.transform = "translateX(17%)";
    sp.style.transform = "translate(-46%,67%)";

 }
 else if(window.innerWidth >=1450 && window.innerWidth < 1550){
    document.getElementById('container_map').style.transform = "translateX(11%)";

    vn.style.transform = "translate(-7%,54%)";
    chinese.style.transform = "translate(0%,160%)"


    sp.style.transform = "translate(-46%,67%)";

 }
 else if(window.innerWidth >=1699 && window.innerWidth < 1900){
    document.getElementById('container_map').style.transform = "translate(6%,-5%)";

    vn.style.transform = "translate(-7%,54%)";
    chinese.style.transform = "translate(0%,160%)"


    sp.style.transform = "translate(-46%,67%)";

 }
 else if(window.innerWidth >=1800 && window.innerWidth < 2400){
    document.getElementById('container_map').style.transform = "translate(-1%,-2%)";

    vn.style.transform = "translate(-7%,54%)";
    chinese.style.transform = "translate(0%,160%)"


    sp.style.transform = "translate(-46%,67%)";

 }
 else if(window.innerWidth >=2410 && window.innerWidth < 2510){
    document.getElementById('container_map').style.transform = "translate(-21%,-2%)";

    vn.style.transform = "translate(-7%,54%)";
    chinese.style.transform = "translate(0%,160%)"


    sp.style.transform = "translate(-46%,67%)";

 }
 else if(window.innerWidth >=2511 && window.innerWidth <= 2650){
    document.getElementById('container_map').style.transform = "translate(-21%,-2%)";

    vn.style.transform = "translate(-7%,54%)";
    chinese.style.transform = "translate(0%,160%)"


    sp.style.transform = "translate(-59%,67%)";

 }
 else if(window.innerWidth >2650 && window.innerWidth <= 3500){
    document.getElementById('container_map').style.transform = "translate(-37%,-2%)";

    vn.style.transform = "translate(-7%,54%)";
    chinese.style.transform = "translate(0%,160%)"


    sp.style.transform = "translate(-59%,67%)";

 }
}
responsive();

// if( window.innerWidth >= 1741 && window.innerWidth < 1950 )
//      {
//           vn.style.transform = "translateX(12%)"
// }
//      if( this.window.innerWidth >= 1950)
// {
//           vn.style.transform = "translateX(-4%)";
// sp.style.transform = "translateX(-7rem)";
// chinese.style.transform = "translateX(45%)"
//      }
//      if(window.innerWidth >=2610){
//         vn.style.transform = "translateX(-54%)";
// sp.style.transform = "translateX(-19rem)";
//         chinese.style.transform = "translateX(17%)"
//      }
const container_g  = document.getElementsByClassName('container');

    for (let i =0; i < container_g.length; i++ )
    {
        if(window.innerWidth > 1300 && window.innerWidth < 1350) {
;            container_g[i].style.width = "1200px";
        }
        else{
            container_g[i].style.width = "auto";

        }
    }


window.addEventListener('resize', function(){


    for (let i =0; i < container_g.length; i++ )
    {
        if(window.innerWidth < 1350 && this.window.innerWidth > 1300) {
            container_g[i].style.width = "1200px";
          
        }
        else{
            container_g[i].style.width = "auto";
          

        }
    }
   responsive();
   
})

        




// scroll iamge
