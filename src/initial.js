// initial.js
export default function initialPageLoad() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = `
        <h1>Welcome to SG</h1>
        <p>Tis is a simple web page for a simple menu</p>
        <p>Look through as you like!</p>
        <p>copilot has helped me create this page!</p>
    `;
}