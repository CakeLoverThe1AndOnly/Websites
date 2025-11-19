// Funktion för att kolla när ett element är synligt i vyn
function checkVisibility() {
    const elements = document.querySelectorAll('.hoytid h3, .hoytid td');

    elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            el.classList.add('visible');
        } else {
            el.classList.remove('visible');
        }
    });
}

// Lyssna på scroll-händelser
window.addEventListener('scroll', checkVisibility);

// Kör checkVisibility vid sidladdning
document.addEventListener('DOMContentLoaded', checkVisibility);
