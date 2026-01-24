document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('userName').value;
            alert(`Hi ${name}! Thanks for reaching out to Plushie Food Company. Kaye will get back to you soon! ✨`);
            contactForm.reset();
        });
    }

    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.backgroundColor = '#FFF0F5';
        });
        card.addEventListener('mouseleave', () => {
            card.style.backgroundColor = '#FFFFFF';
        });
    });
});