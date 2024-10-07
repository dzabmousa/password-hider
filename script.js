let timer;

function lockPassword() {
    const password = document.getElementById('password').value;
    if (password) {
        const lockDuration = 5000; // Lock for 5 seconds (5000 ms)
        document.getElementById('message').innerText = "Password locked for 5 seconds.";

        // Hide password after locking
        setTimeout(() => {
            document.getElementById('message').innerText = "Password is now hidden.";
            document.getElementById('password').value = ""; // Clear the input
        }, lockDuration);
    } else {
        alert("Please enter a password.");
    }
}
