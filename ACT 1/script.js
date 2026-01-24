document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('userName').value;
            alert(`Hi ${name}! Thanks for reaching out! ✨`);
            contactForm.reset();
        });
    }

    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => card.style.backgroundColor = '#FFF0F5');
        card.addEventListener('mouseleave', () => card.style.backgroundColor = '#FFFFFF');
    });

    // ASYNC-AWAIT 
    function fetchProfileData() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({ 
                    status: "Success",
                    userInfo: {
                        firstName: "Kaye",
                        lastName: "Visera",
                        email: "kayevisera@gmail.com",
                        details: {
                            mobile: "0912-345-6789",
                            address: "123 South Triangle, Quezon City"
                        }
                    }
                });
            }, 2000);
        });
    }

    async function loadUserProfile() {
        console.log("Fetching user profile...");
        try {
            const data = await fetchProfileData();
            console.log("Result:", data.status);
            
           // OPTIONALCHAINING 

            const userMobile = data.userInfo?.details?.mobile;
            const userCity = data.userInfo?.details?.city; 

      
            const profileDiv = document.getElementById('profile-display');
            if (profileDiv) {
                profileDiv.innerHTML = `
                    <h3>${data.userInfo.firstName} ${data.userInfo.lastName}</h3>
                    <p><strong>Email:</strong> ${data.userInfo.email}</p>
                    <p><strong>Mobile:</strong> ${userMobile}</p>
                    <p><strong>Address:</strong> ${data.userInfo.details.address}</p>
                    <p><strong>Region:</strong> ${userCity || "Not Provided"}</p>
                `;
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }


    loadUserProfile();
});