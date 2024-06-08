// Cool Rainbow thang

const syncPointer = ({ x: pointerX, y: pointerY }) => {
    const x = pointerX.toFixed(2);
    const y = pointerY.toFixed(2);
    const xp = (pointerX / window.innerWidth).toFixed(2);
    const yp = (pointerY / window.innerHeight).toFixed(2);
    document.documentElement.style.setProperty("--x", x);
    document.documentElement.style.setProperty("--xp", xp);
    document.documentElement.style.setProperty("--y", y);
    document.documentElement.style.setProperty("--yp", yp);
};
document.body.addEventListener("pointermove", syncPointer);

// Scroll Button

document.getElementById("scrollButton").addEventListener("click", () => {
    document.getElementById("bigBox").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("scrollButton2").addEventListener("click", () => {
    document.getElementById("bigBox").scrollIntoView({ behavior: "smooth" });
});

// Splash Screen

let logoSpan = document.querySelectorAll('.logo-left, .logo-right');
if (!localStorage.getItem('didRunIntro')) {
    window.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            logoSpan.forEach((span, index) => {
                setTimeout(() => {
                    span.classList.add('active');
                }, (index + 1) * 400)
            });
    
            setTimeout(() => {
                logoSpan.forEach((span, index) => {
                    setTimeout(() => {
                        span.classList.remove('active');
                        span.classList.add('fade');
                    }, (index + 1) * 50)
                })
            }, 2000);
    
            setTimeout(() => {
                document.body.classList.add('loaded')
            }, 2300)
        })
    });
    localStorage.setItem('didRunIntro', true);
} else {
    document.querySelector('.intro-left').style.display = 'none';
    document.querySelector('.intro-right').style.display = 'none';
}