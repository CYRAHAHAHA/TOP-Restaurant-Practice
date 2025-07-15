// contact.js
export default function loadContact() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = `
        <h1>Contact Us</h1>
        <p>We'd love to hear from you!</p>
        <p>Email: contact@restaurant.com</p>
        <p>Phone: (123) 456-7890</p>
    `;
}