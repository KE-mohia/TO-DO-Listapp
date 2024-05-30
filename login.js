document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Dummy credentials for demonstration
    const validUsername = 'user';
    const validPassword = 'pass';

    if (username === validUsername && password === validPassword) {
        // Save login state in localStorage
        localStorage.setItem('loggedIn', 'true');
        // Redirect to the main page
        window.location.href = 'index.html';
    } else {
        document.getElementById('loginError').textContent = 'Invalid username or password';
    }
});
