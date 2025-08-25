const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus")
function jump() {
    if (!dino.classList.contains("jump")) {
        dino.classList.add("jump");
        setTimeout(function() {
            dino.classList.remove("jump");
        }, 300)
    }
}

document.addEventListener('keyup', function (event) {
    jump();
});

// Wait for animations to initialize properly before starting collision detection
setTimeout(() => {
    let checkAlive = setInterval(function() {
        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
        let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
        
        // Collision occurs when cactus is at dino position (0-70px from left) and dino is on ground (143px)
        if (cactusLeft < 70 && cactusLeft > -20 && dinoTop >= 143) {
            dino.style.animationPlayState = 'paused';
            cactus.style.animationPlayState = 'paused';
            alert("PERDUUUUUUUUUUU :(");
            window.location.reload();
        }
    }, 10);
}, 1000); // Wait 1 second before starting collision detection

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        // Space key specific handling if needed
        jump();
    }
});

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (isMobile) {

    if (window.innerHeight > window.innerWidth) {
        alert("Mettez votre téléphone en paysage ");
    }

    document.addEventListener('touchstart', function () {
        jump();
    });

    document.addEventListener('touchstart', event => {
        if (event) {
            // Touch event specific handling if needed
        }
    });

};