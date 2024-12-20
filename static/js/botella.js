document.addEventListener('DOMContentLoaded', () => {
    const bottle = document.getElementById('waterBottle');
    let positionY = 0;
    let velocityY = 0;
    let accelerationY = 0.1; 
    let rotation = 0;
    let lastScrollY = window.scrollY;

    function updateBottlePosition() {
        const maxY = window.innerHeight - bottle.offsetHeight;
        const scrollY = window.scrollY;

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

        lastScrollY = scrollY;
        requestAnimationFrame(updateBottlePosition);
    }

    updateBottlePosition();
});



