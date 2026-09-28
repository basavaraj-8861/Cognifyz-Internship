
const themeButton = document.getElementById("themeButton");



if (themeButton) {

   
    themeButton.addEventListener("click", function () {

        
        document.body.classList.toggle("dark-mode");


    
        const darkMode =
            document.body.classList.contains("dark-mode");


        
        if (darkMode) {

            themeButton.textContent = "☀️ Light Mode";

        } else {

            themeButton.textContent = "🌙 Dark Mode";

        }

    });

}

const loadPostsButton =
    document.getElementById("loadPostsButton");

const postsContainer =
    document.getElementById("postsContainer");

if (loadPostsButton) {

    loadPostsButton.addEventListener("click", function () {

        postsContainer.innerHTML =
            "<p>Loading technology updates...</p>";

        fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")

            .then(function (response) {

                if (!response.ok) {
                    throw new Error("API request failed");
                }

                return response.json();

            })

            .then(function (posts) {

                postsContainer.innerHTML = "";

                const topics = [
                    "Artificial Intelligence",
                    "Web Development",
                    "Data Analytics",
                    "Cloud Computing",
                    "Machine Learning",
                    "Digital Innovation"
                ];

                const descriptions = [
                    "AI is transforming modern applications by enabling intelligent and automated solutions.",
                    "Modern web development focuses on responsive, interactive and user-friendly websites.",
                    "Data analytics helps organizations understand information and make better decisions.",
                    "Cloud technologies provide flexible and scalable solutions for modern applications.",
                    "Machine learning allows systems to learn from data and improve their predictions.",
                    "Digital innovation helps businesses create smarter and more efficient technology solutions."
                ];

                posts.forEach(function (post, index) {

                    const card =
                        document.createElement("div");

                    card.className = "post-card";

                    card.innerHTML = `
                        <h3>${topics[index]}</h3>
                        <p>${descriptions[index]}</p>
                    `;

                    postsContainer.appendChild(card);

                });

            })

            .catch(function (error) {

                postsContainer.innerHTML =
                    "<p>Unable to load technology updates. Please try again.</p>";

                console.error(error);

            });

    });

}


const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

    
        event.preventDefault();


        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

    
        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const phoneError = document.getElementById("phoneError");
        const messageError = document.getElementById("messageError");
        const successMessage = document.getElementById("successMessage");

        nameError.textContent = "";
        emailError.textContent = "";
        phoneError.textContent = "";
        messageError.textContent = "";
        successMessage.textContent = "";

        let isValid = true;

        if (name === "") {
            nameError.textContent = "Please enter your name.";
            isValid = false;
        } else if (name.length < 3) {
            nameError.textContent = "Name must contain at least 3 characters.";
            isValid = false;
        }

        // Email validation
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {
            emailError.textContent = "Please enter your email.";
            isValid = false;
        } else if (!emailPattern.test(email)) {
            emailError.textContent = "Please enter a valid email address.";
            isValid = false;
        }

        const phonePattern = /^[0-9]{10}$/;

        if (phone === "") {
            phoneError.textContent = "Please enter your phone number.";
            isValid = false;
        } else if (!phonePattern.test(phone)) {
            phoneError.textContent =
                "Phone number must contain exactly 10 digits.";
            isValid = false;
        }

    
        if (message === "") {
            messageError.textContent = "Please enter your message.";
            isValid = false;
        } else if (message.length < 10) {
            messageError.textContent =
                "Message must contain at least 10 characters.";
            isValid = false;
        }

    
        if (isValid) {

            successMessage.textContent =
                "✓ Your message has been submitted successfully!";

            contactForm.reset();
        }

    });

}