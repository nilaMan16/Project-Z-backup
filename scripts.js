// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Display a thank you message
        const thankYouMessage = document.createElement('div');
        thankYouMessage.className = 'thank-you-message';
        thankYouMessage.innerHTML = `
            <h2>Thank you, ${name}!</h2>
            <p>We have received your message and will get back to you at ${email}.</p>
            <p>Your message: ${message}</p>
        `;
        document.body.appendChild(thankYouMessage);

        // Add animation to the thank you message
        thankYouMessage.style.opacity = '0';
        setTimeout(() => {
            thankYouMessage.style.transition = 'opacity 1s';
            thankYouMessage.style.opacity = '1';
        }, 100);

        // Clear form fields
        form.reset();
    });
});
