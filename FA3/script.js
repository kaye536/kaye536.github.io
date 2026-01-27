document.addEventListener('DOMContentLoaded', () => {
    
    
    document.querySelectorAll('.product-card').forEach(card => {
        card.onmouseenter = () => card.style.backgroundColor = '#FFF0F5';
        card.onmouseleave = () => card.style.backgroundColor = '#FFFFFF';
    });

    // LOGIN USER PROFILE
    const loginForm = document.querySelector('.contact-form');
    if (loginForm && loginForm.querySelector('input[type="email"]')) {
        loginForm.onsubmit = (e) => {
            e.preventDefault();
            
            const userEmail = loginForm.querySelector('input[type="email"]').value;
            const user = {
                name: "Plushie Lover", 
                email: userEmail,
                date: new Date().toLocaleDateString()
            };

            localStorage.setItem('userProfile', JSON.stringify(user));
            
            // PROFILE PAGE
            window.location.href = 'profile.html';
        };
    }

    // PROFILE PAGE
    const profileDisplay = document.getElementById('profile-display');
    if (profileDisplay) {
        const data = JSON.parse(localStorage.getItem('userProfile'));
        profileDisplay.innerHTML = data ? `
            <div class="owner-avatar">👤</div>
            <h3>Welcome back!</h3>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Logged in on:</strong> ${data.date}</p>
            <button onclick="localStorage.clear(); location.reload();">Logout</button>
        ` : `<p>Please <a href="login.html">Login</a> to see your profile.</p>`;
    }

    // ASYNC-WAIT & OPTIONAL CHAINING 
    const checkOrder = async () => {
        const mock = { data: { status: "Preparing your plushie..." } };
        await new Promise(res => setTimeout(res, 1000)); 
        const status = mock?.data?.status; 
        console.log("Order Update:", status || "No status available");
    };

    checkOrder();
});
