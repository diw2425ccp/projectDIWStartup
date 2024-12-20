document.addEventListener('DOMContentLoaded', () => {
    const bottle = document.getElementById('waterBottle');
    let positionY = 0;
    let velocityY = 0;
    let accelerationY = 0.05; 
    let rotation = 0;
    let lastScrollY = window.scrollY;

    function updateBottlePosition() {
        const maxY = window.innerHeight - bottle.offsetHeight;
        const scrollY = window.scrollY;
        const totalHeight = document.body.scrollHeight - window.innerHeight;

        let scrollHaciaAbajo=false;
        if (scrollY > lastScrollY) {
            
            velocityY = -7;
            scrollHaciaAbajo=true; 
        } else {
            if(scrollHaciaAbajo){
                velocityY=-1;
            }
            scrollHaciaAbajo=false;
            
            velocityY += accelerationY;
        }

        positionY += velocityY;
        if (positionY > maxY) {
            positionY = maxY;
            velocityY = 0;
        } else if (positionY < 0) {
            positionY = 0;
            velocityY = 0;
        }

        rotation += 5;
        bottle.style.transform = `translateY(${positionY}px) rotate(${rotation}deg)`;

        // Change bottle image based on scroll position
        if (scrollY < totalHeight-totalHeight / 3) {
            bottle.src = '../static/img/agua.png';
        } else if (scrollY < totalHeight-totalHeight / 3 + (totalHeight-totalHeight / 3 )/2) {
            bottle.src = '../static/img/bobina.png';
        } else {
            bottle.src = '../static/img/juguete-de-bebe.png';
        }

        lastScrollY = scrollY;
        requestAnimationFrame(updateBottlePosition);
    }

    updateBottlePosition();
});



