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

