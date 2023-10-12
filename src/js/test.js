const stickSection = [...document.querySelectorAll('.sticky')];

const images_card = ['../assets/images/cards/brand.png','assets/images/cards/collectibles.png','assets/images/cards/merch.png','assets/images/cards/brand.png','assets/images/cards/collectibles.png','assets/images/cards/merch.png','assets/images/cards/brand.png','assets/images/cards/collectibles.png','assets/images/cards/merch.png']
images_card.forEach(img => {
    stickSection.forEach(section => {
        let image = document.createElement('img');
        image.src = img;
        section.querySelector('.scroll_sction').appendChild(image)
    })
})
window.addEventListener('scroll', (e) => {
    for(let i=0; i< stickSection.length ; i++)
    {
     transform(stickSection[i]);
    }
})
function transform(section){
    const  offsetTop = section.parentElement.offsetTop;
    console.log(offsetTop);
    const scrollSection = section.querySelector('.scroll_sction');
    let percent = ((window.scrollY - offsetTop)/window.innerHeight)*100;
    scrollSection.style.transform = `translate3d(${-percent}vw,0,0)`

}
