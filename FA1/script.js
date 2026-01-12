document.addEventListener('DOMContentLoaded', () => {
    // 1. Interactive Greeting on Home Page
    if (document.title.includes("Home")) {
        console.log("Welcome to Plushie Food Co!");
    }

    // 2. Form Submission Interactivity
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('userName').value;
            const responseDiv = document.getElementById('responseMsg');
            
            responseDiv.innerHTML = `<p style="color: #ef8fa4; margin-top: 20px;">
                Thank you, ${name}! Your message has been sent to Kaye. 💖
            </p>`;
            
            contactForm.reset();
        });
    }
});