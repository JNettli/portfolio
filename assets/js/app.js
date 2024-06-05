

// Splash Screen

let logoSpan = document.querySelectorAll('.logo-left, .logo-right');

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