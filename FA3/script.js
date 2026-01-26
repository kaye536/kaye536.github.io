document.addEventListener('DOMContentLoaded', () => {
    
    
    document.querySelectorAll('.product-card').forEach(card => {
        card.onmouseenter = () => card.style.backgroundColor = '#FFF0F5';
        card.onmouseleave = () => card.style.backgroundColor = '#FFFFFF';
    });

    //  (Login/Signup)
    const authForm = document.querySelector('.contact-form');
    if (authForm) {
        authForm.onsubmit = (e) => {
            e.preventDefault();
            
            
            const user = {
                name: authForm.querySelector('input[type="text"]')?.value || "Guest",
                email: authForm.querySelector('input[type="email"]')?.value,
                date: new Date().toLocaleDateString()
            };

            
            localStorage.setItem('userProfile', JSON.stringify(user));
            alert("Success! Welcome to the Plushie Family.");
            window.location.href = 'profile.html';
        };
    }

    
    const display = document.getElementById('profile-display');
    if (display) {
        const data = JSON.parse(localStorage.getItem('userProfile'));
        
        display.innerHTML = data ? `
            <div class="owner-avatar">👤</div>
            <h3>Welcome, ${data.name}!</h3>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Member Since:</strong> ${data.date}</p>
            <button onclick="localStorage.clear(); location.reload();">Logout</button>
        ` : `<p>No profile found. Please <a href="login.html">Login</a>.</p>`;
    }

    // 4. ASYNC-WAIT
    const checkOrder = async () => {
        const mock = { data: { status: "Preparing your plushie..." } };
        
        await new Promise(res => setTimeout(res, 1000)); 
        
        //OPTIONALCHAINING
        const status = mock?.data?.status; 
        console.log("Order Update:", status || "No status available");
    };

    checkOrder();
});