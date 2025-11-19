// Funktion för att kontrollera när elementen är i fokus vid scrollning
function handleScroll() {
    const elements = document.querySelectorAll('.hoytid, table');  // Hitta alla sektioner och tabeller
    const windowHeight = window.innerHeight;  // Hitta fönstrets höjd

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;  // Hitta elementets position i förhållande till fönstret

        // Kollar om elementet är inom synligheten på skärmen (om den är nära 90% av fönsterhöjden)
        if (elementTop <= windowHeight * 0.9) {
            element.classList.add('visible');  // Lägg till klassen 'visible' för att spela upp animationen
        } else {
            element.classList.remove('visible');  // Ta bort 'visible' om elementet inte är synligt
        }
    });
}

// Lyssnar på scroll-händelsen och kör handleScroll när användaren skrollar
window.addEventListener('scroll', handleScroll);

// Anropa handleScroll vid laddning för att säkerställa att synliga element är visade direkt vid laddning
handleScroll();
