document.addEventListener('DOMContentLoaded', (event) => {
    // Default open tab
    document.getElementById("loginBtn").click();

    // Toggle password visibility
    const togglePassword = document.querySelectorAll('.toggle-password');
    togglePassword.forEach(item => {
        item.addEventListener('click', function () {
            const input = this.previousElementSibling;
            const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
            input.setAttribute('type', type);
            this.classList.toggle('fa-eye-slash');
        });
    });

    // Show login form and hide signup form
   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1" />
    <title>Sign Up</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,500;0,600;1,300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
    <!-- Google Sign-In client ID -->
    <meta name="google-signin-client_id" content="YOUR_CLIENT_ID.apps.googleusercontent.com">
    <!-- Include the Google Sign-In platform library -->
    <script src="https://apis.google.com/js/platform.js" async defer></script>
</head>
<body>
    <div class="container">
        <h3 class="form-header">Signup</h3>
        <form id="signupForm" class="form">
            <label for="email">Email</label>
            <input type="email" id="signupEmail" required>
            <label for="password">Password</label>
            <input type="password" id="signupPassword" required>
            <button type="submit" class="submit-btn">Sign Up</button>
            <div class="alternative">
                <span>OR</span>
                <div class="g-signin2" data-onsuccess="onSignIn"></div>
            </div>
        </form>
    </div>
    <script src="script.js"></script>
</body>
</html>

    // Show signup form and hide login form
    function showSignup() {
        document.getElementById("signupForm").classList.remove("hidden");
        document.getElementById("loginForm").classList.add("hidden");
        document.getElementById("signupBtn").classList.add('active');
        document.getElementById("loginBtn").classList.remove('active');
    }

    // Event listeners for login and signup buttons
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const logoutBtn = document.getElementById('logoutBtn');

    if (loginBtn) {
        loginBtn.addEventListener('click', showLogin);
    }

    if (signupBtn) {
        signupBtn.addEventListener('click', showSignup);
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            signOut();
        });
    }

    // Smooth scroll for navigation links
    const links = document.querySelectorAll('.menu-hover');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initialize carousel
    $(".owl-carousel").owlCarousel({
        items: 3,
        margin: 10,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });
});

// Google Sign-In success callback
function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

    // The ID token you need to pass to your backend
    var id_token = googleUser.getAuthResponse().id_token;
    console.log('ID Token: ' + id_token);

    // Perform any additional actions, like sending the token to your backend
    // Example: sendTokenToBackend(id_token);
}

// Sign out from Google
function signOut() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
        console.log('User signed out.');
        window.location.href = 'logout.html';
    });
}

// Attach the signOut function to a button if needed
document.getElementById('signOutButton').addEventListener('click', signOut);

    // Initialize carousel
    $(".owl-carousel").owlCarousel({
        items: 3,
        margin: 10,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });
});
