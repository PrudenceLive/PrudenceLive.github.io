// Initialize the Google Identity Services library
function initializeGis() {
    google.accounts.id.initialize({
        client_id: '250603629960-q1ef3k26rmgphjt5p1cj6dr0l2v6t34r.apps.googleusercontent.com',
        callback: handleCredentialResponse
    });

    google.accounts.id.renderButton(
        document.getElementById('googleSignInButton'),
        { theme: 'outline', size: 'large' }  // Customization options
    );

    google.accounts.id.prompt(); // Display the One Tap prompt
}

// Callback function to handle the response
function handleCredentialResponse(response) {
    const id_token = response.credential;

    // Show sign-out button if signed in
    document.getElementById('signOutButton').style.display = 'block';
}

// Sign out function
function signOut() {
    google.accounts.id.disableAutoSelect();
    document.getElementById('signOutButton').style.display = 'none';
    alert('You have been signed out.');
}

// Initialize the Google Identity Services library when the page loads
window.onload = initializeGis;
