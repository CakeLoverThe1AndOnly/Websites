// Function to check visibility of elements on scroll
function checkVisibility() {
    const elements = document.querySelectorAll('.hoytid');

    elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            el.classList.add('visible');
        } else {
            el.classList.remove('visible');
        }
    });
}

// Event listener for scroll events
window.addEventListener('scroll', checkVisibility);

// Initial call to set visibility when the page loads
document.addEventListener('DOMContentLoaded', checkVisibility);
