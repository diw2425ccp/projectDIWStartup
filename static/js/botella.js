document.addEventListener("DOMContentLoaded", () => {
    const bottle = document.getElementById("waterBottle");
    let positionY = 0;
    let velocityY = 0;
    let accelerationY = 0.05;
    let rotation = 0;
    let lastScrollY = window.scrollY;
    const images = [
        "../static/img/juguete-de-bebe.png",
        "../static/img/pelota-de-playa.png",
        "../static/img/caballito-de-madera.png",
    ];
    const randomIndex = Math.floor(Math.random() * images.length);

    function updateBottlePosition() {
        const maxY = window.innerHeight - bottle.offsetHeight;
        const scrollY = window.scrollY;
        const totalHeight = document.body.scrollHeight - window.innerHeight;

        let scrollHaciaAbajo = false;
        if (scrollY > lastScrollY) {
            velocityY = -2;
            scrollHaciaAbajo = true;
        } else {
            if (scrollHaciaAbajo) {
                velocityY = -1;
            }
            scrollHaciaAbajo = false;

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

        let isJugueteDeBebe = false;
        if (velocityY !== 0 && !(isJugueteDeBebe && positionY === maxY)) {
            rotation += 5;
        } else if (isJugueteDeBebe && positionY === maxY) {
            rotation = 0;
        }

        bottle.style.transform = `translateY(${positionY}px) rotate(${isJugueteDeBebe && positionY === maxY ? 0 : rotation
            }deg)`;

        if (scrollY < totalHeight - totalHeight / 3) {
            bottle.src = "../static/img/agua.png";
            isJugueteDeBebe = false;
        } else if (
            scrollY <
            totalHeight - totalHeight / 3 + (totalHeight - totalHeight / 3) / 2
        ) {
            bottle.src = "../static/img/bobina.png";
            isJugueteDeBebe = false;
        } else {
            bottle.src = images[randomIndex];
            isJugueteDeBebe = true;
        }

        if (isJugueteDeBebe && positionY === maxY) {
            rotation = 0;
        }

        lastScrollY = scrollY;
        requestAnimationFrame(updateBottlePosition);
    }

    updateBottlePosition();
});
